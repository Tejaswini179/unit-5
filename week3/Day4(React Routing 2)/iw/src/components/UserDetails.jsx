import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUsers] = useState({});
//   const {isAuth} = useContext(AuthContext)
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setUsers(data.data);
    });
  }, []);

//   if (! isAuth){
//       return <Navigate to={"/login"} /> //declrative way for authentication
//   }

  return (
    <div>
      <img src={user.avatar} />
      <div>First Name: {user.first_name}</div>
      <div>Last Name: {user.last_name}</div>
    </div>
  );
};
