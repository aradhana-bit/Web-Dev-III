// const os=require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log((os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB ");


//------------------------------------------------------------------
//const filePath=path.resolve(__dirname,"sample" , "xyz.js");
//console.log(filePath);
//console.log(__dirname);

//const filePath=path.join("lecture-5","core-D", "core_modules.js");
//comnsole.log(filePath);

// const file="lecture 5/core-D/core_modules.js";
// console.log(path.basename(file));
// console.log(path.dirname(file));
// console.log(path.extname(file));


//------------------------------------------------------------------
// const data=fs.readFileSync("file.txt","utf-8");
// console.log(data);

// fs.readFile("file.txt","utf-8",(err,data)=>{
//     if(err){
//        console.log(err);
//     } else{
//         console.log(data);
//     }
// });


//-----------------------------------------------------------------------
// console.log("first");
// const data=fs.readFileSync("file.txt","utf-8"); //synchronous
// console.log(data);
// console.log("second");
// console.log("first");
// fs.readFile("file.txt","utf-8",(err,data)=>{ //asynchronous
//     if(err){
//        console.log(err);
//     }else{
//         console.log(data);  
//     }
// });
// console.log("second");

//-------------------------------------------------------------
// fs.writeFile("file.txt" , "\nHello Students", (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFile("file.txt" , "\nHello Students", (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.unlink("file.txt" , (err)=>{
//     if(err){
//         console.log(err);
//     }
// })

//--------------------------------------------------------------


// const password="Hello123"

// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash);

// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt);

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash);

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })

// dns.reverse("8.8.8.8",(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames);
//     }
// })
