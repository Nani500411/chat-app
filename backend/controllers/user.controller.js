// Import the User model
import User from "../models/user.modal.js";

// Define the controller function to get users for the sidebar
export const getUserForSidebar = async (req, res) => {
    try {
        // Get the logged-in user's ID from the request object
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        // Assuming req.user.contacts is an array of mobile numbers
       // const userContacts = req.user.contacts;

        // Find users whose mobile numbers are in the user's contacts
        //const filteredUsers = await User.find({ mobileNumber: { $in: userContacts } })
                                        //.select("-password");

        // Send the filtered users as JSON response
        res.status(200).json(filteredUsers);
    } catch (error) {
        // Handle errors
        console.error("Error in getUserForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
