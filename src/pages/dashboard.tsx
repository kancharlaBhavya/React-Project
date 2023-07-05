import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './dashboard.css';
import LoginPage from './login';
import AboutPage from './AboutPage';
 

interface DashboardProps {
  onLogout: () => void;
  profilePicUrl: string;
  children: React.ReactNode;
}

function Dashboard(props: DashboardProps) {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    navigate('/');
  };
  const userJson = localStorage.getItem("user");
  let user = "";
  if(userJson!==null){
    user=JSON.parse(userJson);
  }
  

  return (
    <div className='full'>
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/techsophylogo.png" alt="Logo" />
          </div>
      <div className='nav-details'>
        
        <a href ="/AboutPage" >About</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">Projects</a>

        <a href="/Projects">Projects</a>
        </div>
        <div className="navbar-profile" >
          <h3> <img src="/profilelogo.png"   onClick={handleDropdownClick} /> {user}</h3>
         
          {isDropdownOpen && (
            <div className="dropdown">
                
              <button><a href="/" onClick={handleLogoutClick } style={{color:'black'}}>Logout</a></button>
              
             
            </div>

          )}
          <h1>{}</h1>

       
         </div>
      </nav>  
      <div className="container">
  <div className="left-panel panel1"style={{color:'white'} }><h1>Part1</h1></div>
  <div className="left-panel panel2"style={{color:'white'} }><h1>Part2</h1></div>
  <div className="left-panel panel3"style={{color:'white'} }><h1>Part3</h1></div>
  <div className="right-panel"   style={{color:'white'} }>
    <div className='body-data'><h1>𝙄𝙉𝙉𝙊𝙑𝘼𝙏𝙄𝙊𝙉𝙎</h1>
    </div>
    
    
 
    
  
</div>
</div>

  
      <div className= 'footer'>
      <div className="year">@2023 TECHSOPHY  </div>
      <div className='footer-details'>
        
        <a href ="/AboutPage" >About</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">Projects</a>
        <a href="/Projects">Projects</a>

        <a href="/Projects">Projects</a>
        </div>
        <div className="footer-links">
        
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedinlogo2.png" alt="LinkedIn Logo" />
           
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/facebooklogo1.png" alt="Facebook Logo" />
</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="/githublogo.png" alt="github Logo" />
            
          </a>
        </div>
        
      
      </div>
      
    </div>
    </div>
  );
}
export default Dashboard;