import React ,{useContext, useEffect , useState}from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContect";
import mailcamp from "../assets/mailchimp.jpeg";
import jwtDecode from "jwt-decode"
// import jwt_decode from "jwt-decode"
import axios from "axios" 
function Header() {
    const { user, setUser } = useContext(UserContext);
    const [image, setImage] =useState()

    console.log(image)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            const decode = jwtDecode(token)
            // console.log(decode.id)
            const userId = decode.id
            axios.get(`http://localhost:8080/user/${userId}`)
            .then(res => {setImage(res.data.message.image)})
            .catch(err => console.log(err.data.message))
        }
    })

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(false);
    }
    // fff
 return (
  <div className="flex justify-between items-center mx-32 my-5">
   <div className="logo">
    <h1 className="font-bold text-2xl">WP-Jobs</h1>
   </div> 
   {user === true ? ( 
    <div className="flex gap-5 items-center">
    <div className="mx-auto">
        {/* <img src={mailcamp} alt="" srcset="" */}
        <img src={`http://localhost:8080/${image}`} className="w-12 rounded-full"            alt="" />
        {/* <img className="font-light text-xl mt-3">{``}</img> */}
    </div>
    <Link to="/" onClick={handleLogout}  className="px-10 py-2 bg-black text-white rounded-md">
        Logout
    </Link>
    </div> 

    ):(

    <div className="flex gap-5 items-center">
    <Link to="/login">Login</Link>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
       Signup
    </Link>
    </div>

   )
   
}
   

   {/* <div className="flex gap-5 items-center">
    <div className="mx-auto">
     <img src={mailcamp} alt="" srcset="" className="w-16 rounded-full" />
     <p className="font-light mt-3">Hi MailCamp</p>
    </div>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
     Logout
    </Link>
   </div> */}
  </div>
 );
}

export default Header;
