// ProfilePage.js
import React from 'react';

function ProfilePage({who_is_the_user}){
  console.log("this is the profile page",who_is_the_user);
  return <>
<div>
     <h1>Profile Page</h1>
       <p>Welcome to your profile!</p>
     </div>
  </>
}

export default ProfilePage;
