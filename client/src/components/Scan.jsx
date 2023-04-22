import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Naavbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import ScanItem from './ScanItem';
import  "./footer1.css";

const url="http://localhost:4000/scan/"

const Scan = () => {
  
  const [result,setResult]=useState({site:""});
  const [backendData,setBackendData]=useState({});
  const [dataBack,setDataBack]=useState(false)
 
const handleSubmit=async(e)=>{
  e.preventDefault();
  //console.log(typeof(result.site))
  try{
      const Url=url+result.site
      console.log(Url)
      await axios.get(Url)
      .then(response => {
        // Handle response
      setBackendData([response.data])
      console.log(backendData)
      setDataBack(true);
      console.log(dataBack)
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });




      
      /*console.log(data.data);
     
      setBackendData([data.data])
      console.log(backendData)
      setDataBack(true);
      console.log(dataBack)*/

      
      

  }catch(err){
      console.log(err);
      

  }}
  

  /*useEffect(()=>{

  },[])*/

  
  if (!dataBack){
    return (
       <>
      <div  className='container'>
      <Naavbar/>
      <form >
      <div style={{ "marginBottom":"3px" }}>
          
          <span style={{ "marginLeft":"500px","fontweight":"400px","marginBottom":"15px" }}>Enter a Target Ip To scan   :</span> <input type="text" name="site" placeholder="8.8.8.8"   style={{"width":"400px","marginLeft":"400px"}} autoFocus onChange={(e)=>setResult({...result,[e.target.name]:e.target.value})} />
          <span><button onClick={handleSubmit} style={{"marginLeft":"400px"}} type="submit"> Submit</button></span>
      </div>
      </form>
      
      </div>
      <Footer style={{ "marginTop":"500px" }}/>
      </>
    )}
    else{
    return(
      <>
    <Naavbar/>
    <form >
    <div style={{ "marginBottom":"350px" }}>
        
        <span style={{ "marginLeft":"500px","fontweight":"400px","marginBottom":"15px" }}>Enter a Target Ip To scan   :</span> <input type="text" name="site" placeholder="8.8.8.8"   style={{"width":"400px","marginLeft":"400px"}} autoFocus onChange={(e)=>setResult({...result,[e.target.name]:e.target.value})} />
        <span><button onClick={handleSubmit} style={{"marginLeft":"400px"}} type="submit"> Submit</button></span>
    </div>
    </form>
    <div style={{ "marginBottom":"10px" }}>
    {backendData.map(
        (element) => {
            return (
                <ul type="disc">
                  <ul type="disc"></ul>
                    <li style={{"marginTop":"5px","marginLeft":"160px", "fontSize":"30px"}}>
                    <span style={{ "color":"red" }}> Open Port |</span>
                        {element.ports+""}
                    </li>
                    
                    <li style={{"marginTop":"5px","marginLeft":"160px", "fontSize":"30px"}}> <span style={{ "color":"red" }}> Hostnames |</span>{" "+element.hostnames}</li>
                    <li style={{"marginTop":"5px","marginLeft":"160px", "fontSize":"30px"}}> <span style={{ "color":"red" }}> Domains |</span>{" "+element.domains+" "}</li>
                    <li style={{"marginTop":"5px","marginLeft":"160px", "fontSize":"30px"}}><span style={{ "color":"red" }}> CVE |</span>{" "+element.vulns+" "}</li>
                </ul>
      ) })}
    </div>
    <Footer />
    </>

    )
  }
}

export default Scan;