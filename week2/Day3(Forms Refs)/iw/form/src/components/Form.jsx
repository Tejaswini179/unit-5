import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
      username:"",
      age:"",
      email:""
  });
  const handelChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handelSubmit =(e)=>{
      e.preventDefault();
      //showing form data
     console.log(formData)
      fetch("",{
          method:"POST",
          body:JSON.stringify(formData),
      })
  }

  return (
    <form onSubmit={handelSubmit}> 
      <input
        onChange={handelChange}
        type="text"
        placeholder="Enter Username"
        id="username"
      />

      <input onChange={handelChange} type="number" placeholder="age" id="Age" />
      <input onChange={handelChange} type="text" placeholder="Email" id="Email" />

      <input type="submit" value="submit" />
    </form>
  );
};
