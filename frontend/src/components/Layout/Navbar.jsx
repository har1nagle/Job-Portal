import React, {useContext, useState } from 'react'
import { Context } from '../../main';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {

  const [show, setShow] = useState(false);
  const { isAuthorized, seIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();


  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", { withCredentials: true });
      toast.success(response.data.message);
      seIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      seIsAuthorized(true);
      
    }
  };
  return (
    <>
      <nav className={isAuthorized ? "navbarshow" : "navbarHide"}>
        <div className="container">
          <div className="logo">
            <img src="/JobZee-logos_white.png" alt="logo" />
          </div>
          <ul className={!show ? "menu" : "show-menu menu"}>
            <li>
              <Link to={"/"} onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/job/getall"} onClick={() => setShow(false)}>
                All Jobs
              </Link>
            </li>
            <li>
              <Link to={"/application/me"} onClick={() => setShow(false)}>
                {user && user.role === "Employer"
                  ? "APPLICANT'S APPLICATION"
                  : "MY APPLICATION"}
              </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
                <li>
                  <Link to={"/job/post"} onClick={() => setShow(false)}>Post New Jobs</Link>
                </li>
                <li>
                  <Link to={"/job/post"} onClick={() => setShow(false)}>View Your Jobs</Link>
                </li>
              </>
            ) : (
              <></>
            )}

            <button onClick={handleLogout}>LOGOUT</button>
          </ul>

          <div className='hamburger'>
            <GiHamburgerMenu onClick={()=> setShow(!show)}/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar