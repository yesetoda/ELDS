import supabase from "./supabase";
import { useState,useEffect} from "react";

function Auth({firstname,middlename,lastname,password,email}){
    const  [validUser, setValidUser] = useState(false)

    useEffect(() => {
        const AuthenticateUser = async () => {
          try {
            let { data: user, error } = await supabase
              .from([`${who_is_the_user}_Table`])
              .select("*")
              .eq("fname",firstname)
              .eq("mname",middlename)
              .eq("lname",lastname)
              .eq("password",password);
            if (error) {
              console.error("Error fetching Regions:", error);
            } else {
              setValidUser(true);
            }
          } catch (error) {
            console.error("Error fetching Regions:", error);
          }
        };
      
        AuthenticateUser();
      }, []);
    return <>
    {validUser?<h1>hello {firstname} {middlename} </h1>:<h1>invalid user</h1>}
    </>
}