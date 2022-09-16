const fs = require("fs");
const createfile=(data)=>{
    const alldata=getdata();
    const duplicate=alldata.find(elemenet=>{
       return elemenet.name==data.name
    })
    if(duplicate)
    {
       return console.log("name alredy exist!!");
    }
    alldata.push(data)
    const mydata=JSON.stringify(alldata)
    fs.writeFile("test.json",mydata,()=>{
       console.log("file written successfully");
    })
 }
 const getdata = () => {
    try {
      const data = fs.readFileSync("test.json", "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  };





  const readfile = () => {
   const data = getdata();
   console.log(data);
 };



 const getname=(name)=>{
   const alldata=getdata();
   const duplicate=alldata.find(elemenet=>{
      return elemenet.name==name
   })
  if(duplicate){
   console.log(duplicate);
  }
  else{
   console.log("name not found");
  }
}




const removefile=(name)=>{
   const alldata=getdata();
  const  newdata=alldata.filter(elemenet=>{
      return elemenet.name!=name
   })
   const mydata=JSON.stringify(newdata)
   fs.writeFile("test.json",mydata,()=>{
      console.log("file remove successfully");
   })

}

module.exports={createfile,readfile,getname,removefile}