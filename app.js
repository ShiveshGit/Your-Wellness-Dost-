const express=require('express');
const path=require('path');
const fs=require('fs');
const multer=require('multer');
const { response } = require('express');
const app=express();
const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./User_Profile_Pics');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const upload=multer({storage:fileStorageEngine});
const port=80;
app.use( ( req, res, next ) => {
    setTimeout(next, Math.floor( ( Math.random() * 2000 ) + 100 ) );
});




const userPath=path.join(__dirname,'users');
console.log(userPath);
const files=fs.readdirSync(userPath);


app.use(express.static(path.join('static')));
app.use(express.urlencoded({extended:true}));



app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get("/",(req,res)=>{
    res.status(200).render('index.pug');
})
app.get("/login",(req,res)=>{
    res.status(200).render('login.pug');
})
app.post("/login",(req,res)=>{
    console.log(req.body);
    let user=req.body.username;
    let passd=req.body.password;
    let possible=false;
    files.forEach((element)=>{
        let name=element.slice(0,-4);
        console.log(name);
        if(name===user)
        {
            let files1=userPath+'\\'+element;
            let pass=fs.readFileSync(files1,"utf-8");
            pass=pass.slice(10);

            let myPass="";
            for(let i=0;pass[i]!='\n';i++)
            {
                myPass+=pass[i];
            }
            console.log(myPass);
            console.log(passd);
            if(myPass==passd)
            {
                possible=true;
                return;
            }
        }
    })
    if(possible===true)
    {
        const params={'name':user};
        res.status(200).render('profile.pug',params);
    }
    else
    {
        const params={'message':'You are not a registered user, kindly sign-up !!!'};
        res.status(200).render('login.pug',params);
    }
})
app.get("/profile",(req,res)=>{
    res.status(200).render('profile.pug');
})
app.get("/tracker",(req,res)=>{
    res.status(200).render('tracker.pug');
})
app.post("/profile",upload.single('myPic'),(req,res)=>{
    console.log(req.body);
    let name=req.body.myName;
    let disorder=req.body.myDisorders;
    let allergies=req.body.myAllergies;
    let password=req.body.myPassword;
    let mobile=req.body.myMobile;
    let age=req.body.myAge;
    let gender=req.body.myGender;
    let fileName=name+".txt";
    let filePath=userPath+'\\'+fileName;
    let outputToWrtie=`Password: ${password}\nDisorder: ${disorder}\nAllergies: ${allergies}\nMobile: ${mobile}\nAge: ${age}\nGender: ${gender}`;
    fs.writeFileSync(filePath,outputToWrtie);
})
app.listen(port,()=>{
    console.log(`Application started succesfully on port ${port}`);
})