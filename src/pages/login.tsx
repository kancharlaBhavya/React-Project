import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import './login.css';
import { useNavigate } from 'react-router-dom';
import Keycloak from "keycloak-js";



const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setName] = useState("");
  
  const [password, setPassword] = useState("");
  const navigate=useNavigate();


localStorage.setItem("user", JSON.stringify(username));
localStorage.setItem("password",JSON.stringify(password));
// const storedUser = JSON.parse(localStorage.getItem("admin") || "12345");

useEffect(() => {
  const storedAuthStatus = localStorage.getItem("isAuthenticated");
  if (storedAuthStatus) {
    setIsAuthenticated(JSON.parse(storedAuthStatus));
  }
}, []);




  const handleLogin = () =>{

    if( (username === "Bhavya" && password === "123456") || (username === "kavya" && password === "123456")){
      setIsAuthenticated(true);
    }
    else{
      alert("Invalid details");
    }
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={function (): void {
      throw new Error("Function not implemented.");
    } } profilePicUrl={""} children={undefined} />;
  }
 
  return (
    <div className="page">
    <div className="form">
    <div className="title" >Login</div>
    <div className="input-container ic1">
      <input id="firstname" className="input" type="text" placeholder=" " value={username}
            onChange={(e) => setName(e.target.value)}/>
      <div className="cut"></div>
      <label htmlFor="Name" className="placeholder">Name</label>
    </div>
    
    <div className="input-container ic2">
      <input id="password" className="input" type="password" placeholder=" " value={password}
            onChange={(e) => setPassword(e.target.value)}/>
      <div className="cut cut-short"></div>
      <label htmlFor="password" className="placeholder">password</label>
    </div>
    <button  className="submit"  onClick={handleLogin}>Login</button>
    
  </div>
  
  </div>
  );
};

export default LoginPage;

function setUsers(arg0: any[]) {
  throw new Error("Function not implemented.");
}


