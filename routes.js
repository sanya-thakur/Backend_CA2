const express=require("express");
const router=express.Router();

const users=[
    {email:"alice@example.com", password:"alice123"},
    {email:"bob@example.com", password:"bob123"},
    {email:"charlie@example.com", password:"charlie123"},
];
router.put("/", async(req,res)=>{
    try{
    const {email, password}=req.body;
    if (!email || !password){
        return res.status(400).json({message: "All fields are required."})
    }
    const exisiting= users.find(email);
    if (!exisiting){
        return res.status(404).json({message: "Email not found"})
    }
    // users.save();
    return res.status(200).json({message: "User password updated."})
}catch(err){
    console.log(err);
    return res.status(500).json({message: "Internal server error."})
}
});

router.delete("/delete", async(req, res)=>{
    try {
        const {email}=req.body;
        const existing= users.find(email);
        if (!existing){
            return res.status(404).json({message: "Email not found"})
        }
        users.delete(email);
        return res.status(200).json({message: "User deleted successfully"})
    } catch(err){
        return res.status(500).json({message: "Internal server error"})
    }
});

module.exports=router;