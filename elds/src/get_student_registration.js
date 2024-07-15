
// import {useState,useEffect} from "react";
// import supabase from "./supabase"
// function GetRegistration({who_is_the_user}){
//     const [registerers,setRegisterers] = useState([]);

//     useEffect(()=>{

//         const fetch_registerer_registration =  async () => {
//             let query = who_is_the_user+"_Registration_Table"
//             try{
//                 const {data:registerer_registration_data,error} = await supabase
//                 .from(query )
//                 .select("*")
//                 if(!error){
    
//                     setRegisterers(registerer_registration_data)
//                 }
//             }
//             catch(err){
//                 console.log("there is error ",err)
//             }
//         }
//         fetch_registerer_registration()
//         console.log(registerers)
//     });
//     let first_name = who_is_the_user.toLowerCase()+"_fname";
//     let middle_name = who_is_the_user.toLowerCase()+"_mname";
//     console.log(first_name,middle_name);
//     console.log(registerers)
//     return <>
       
//         {
//         registerers?registerers.map(registerer => (
//             <h1 key={registerer}>{registerer}.first_name</h1>
//         )):null}
//     </>
// }
// export default GetRegistration;