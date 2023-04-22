const axios=require("axios");
const { response } = require("express");

module.exports.getDnsName=async(req,res,err)=>{
    
    const Ip=req.url.split('/');
    const Url='https://api.shodan.io/shodan/host/'+Ip[2]+'?key=zMVCotM2cFfOzNLQ0wqee8ub2XPy7FBW';
    try{
    const response=await axios.get(Url)
    const data={"ports":response.data.ports, "hostnames":response.data.hostnames,"domains":response.data.domains,"vulns":response.data.vulns}
    console.log(data["ports"]);
    console.log(typeof(data))
    res.send(data)


  }catch(e){
    console.log(e)
  };

}
