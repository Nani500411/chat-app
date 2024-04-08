// Conversations.js
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	const { onlineUsers } = useSocketContext();

	// Reorder conversations array to show online users first
	const sortedConversations = conversations.slice().sort((a, b) => {
		const aOnline = onlineUsers.includes(a._id);
		const bOnline = onlineUsers.includes(b._id);

		if (aOnline && !bOnline) return -1;
		if (!aOnline && bOnline) return 1;
		return 0;
	});

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{sortedConversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id} // Ensure _id is unique for each conversation
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === sortedConversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;
