import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyparser from 'body-parser';
var passwordauthenication=false;
const app=express()
const __dirname=dirname(fileURLToPath(import.meta.url))
app.use(bodyparser.urlencoded({extended:true}));
function authenicate(req,res,next){
    if (req.body['password']=='Manohar3404'){
        passwordauthenication=true;
    }
}
app.use(authenicate);
app,get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.post('/submit',(req,res)=>{
    if (passwordauthenication){
        res.sendFile(__dirname+'/public/index.html');
    }
    else {
        res.sendFile(__dirname+'/public/secret.html')
    }
});

    
