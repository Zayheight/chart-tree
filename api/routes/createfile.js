var fs = require('fs')
var path = require('path')
var express = require('express');
var router = express.Router();

//var dirname = "D:\\landmark-recognition-2020";
var dirname = "/Users/fluke/Documents/icon";

createData=(dir)=>{
    let files = fs.readdirSync(dir);
    let tempArray =[];
    console.log(path.basename(dir));
    files.forEach((file)=>{
        var newpath = path.join(dir,file);
        if(fs.lstatSync(newpath).isDirectory()==true){
            var tempObj = {
                title:path.basename(newpath),//1
                subtitle:newpath,
                children:createData(newpath)
            }
            tempArray.push(tempObj)
        }else{
            var tempObj = {
                title:path.basename(newpath),
                subtitle:newpath
            }
            tempArray.push(tempObj)
        }
    })
    return tempArray;
}


    router.get("/image",function(req,res,next){
        let temppath = req.url.split("=")[1].replace(/%5C|%2F/g,"/");
        console.log(temppath)
        if(fs.lstatSync(temppath).isDirectory()==false){
            let data=fs.readFileSync(temppath)
            console.log(data)
            let tempdata=Buffer.from(data).toString('base64');
            //console.log(tempdata)
            res.send(tempdata);
            
        }else{
            res.send("not file")
        }
    })

var data = [
    {
        title: path.basename(dirname),
        subtitle:dirname,
        children: createData(dirname)
    }
]


router.get('/',function(req,res,next){
    res.send(data)
})
console.log("Complete")
module.exports=router;


