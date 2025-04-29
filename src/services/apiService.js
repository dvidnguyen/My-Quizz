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
const postLogin =(email,password)=>{
  return  axios.post(
    "api/v1/login",
    {email, password}
  );
};
const postRegister =(email,username,password)=>{
  return  axios.post(
    "api/v1/register",
    {email,username, password}
  );
};
const getAllUser =()=>{
  return  axios.get(
    "api/v1/participant/all",
  );
}
const deleteUser =(userID)=>{
  return  axios.delete(
    "api/v1/participant",
    {data :{id : userID}}
  );
}
const getUserWithPaging =(page,limit)=>{
  return  axios.get(
    `api/v1/participant?page=${page}&limit=${limit}`
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

export  {postCreateNewUser,deleteUser,getAllUser,putUser,getUserWithPaging,postLogin,postRegister}