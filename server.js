const express=require("express");
const app=express();
app.use(express.json());
const routes=require("./routes");
const PORT=5000;

const users=[
    {email: "alice@example.com", password:"alice123"},
    {email: "bob@example.com", password:"bob123"},
    {email: "charlie@example.com", password:"charlie123"},
];

app.use("/", routes);
app.get("/", (req,res)=>{
    res.send("<h1>Server in running</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

