const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:String,
    branch:String,
    cgpa:Number  
});

module.exports=mongoose.model("Student",studentSchema);