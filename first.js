let express=require("express");
let app=express();
let mongoose=require('mongoose');
let First=require('./models/user.js');
//let bcrypt=require('bycrpt');
mongoose.connect('mongodb://localhost:789/authDemo',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Mongo Works")
})
.catch(err=>{
    console.log("Error")
    console.log(err)
})
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.get('/register',(req,res)=>{
    res.render("register.ejs")
});
app.post('/register',async(req,res)=>{
res.send(req.body)
/*let {password,username}=req.body;
const hash=await bcrypt.hash(password,13);
res.send(hash)*/
})
app.get('/send',(req,res)=>{
    res.send("This is a Secret")
});
app.listen(789,()=>{
    console.log("Working")
})