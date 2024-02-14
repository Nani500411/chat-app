import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]

    },
    profilePic:{
        type:String,
        default:"",

    },
    mobileNumber: {
        type: Number, // Or you can choose an appropriate data type
        required: true,
        min: 1000000000, // Minimum value for a 10-digit number
        max: 9999999999, // Maximum value for a 10-digit number
        
    },
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;