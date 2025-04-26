import axios from '../untils/axiosCustomize'
const postCreateNewUser = (email,password,username,role,image) => {
    //submit data 
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return  axios.post(
      "api/v1/participant",
      data
    );
    
}
const getAllUser =()=>{
  return  axios.get(
    "api/v1/participant/all",
  );
}
const putUser = (id,username,role,image) => {
  //submit data 
  
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return  axios.put(
    "api/v1/participant",
    data
  );
  
}

export  {postCreateNewUser,getAllUser,putUser}