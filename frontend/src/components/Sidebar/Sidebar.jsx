import React from 'react';
import Conversations from "./Coversations";
import LogoutButton from "./Logout";
import SearchInput from "./Search";
import './Sidebar.css'; // Import CSS file

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <SearchInput />
            <div className='divider'></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;


// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;