const expressrequire("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to Contact Page</h1>");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

