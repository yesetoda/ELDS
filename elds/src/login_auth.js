// login_auth.js
import supabase from './supabase';

const AuthenticateUser = async (userType, email, password) => {
  const table = `${userType}_Table`; // Make sure the table name is in lowercase
  console.log("this is the table name", table);
  
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('email', email)
    .eq('password', password);

  if (error) {
    console.error('Error fetching user:', error);
    return false;
  }
  console.log("this is the data",data);


  if (data && data.length > 0) {
    return true;
  } else {
    return false;
  }
};

export default AuthenticateUser;