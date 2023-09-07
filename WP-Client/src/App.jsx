import { useState , useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./context/userContect";
import Job from "./Pages/Job";
import Blog from "./Pages/Blog";
import Wp from "./Pages/Wp";
function App() {
  const [user , setUser] = useState(false)
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token !== null) {
      setUser(true)
    }
    setLoading(false)
  })

  if(loading) { 
    return  <div> loading.....</div>;
  }
 return (
 <div>
  <UserContext.Provider  value={{user ,setUser}}>

     <BrowserRouter>
   <Header  user={user}/>
   <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/createBlog" element={ user === true ?  <Blog/> : <Navigate to="/login"/> } />
    <Route path="/register" element={<Signup />} />
    <Route path="/single/:id" element={<SinglePost />} />
    <Route path="/jobs" element={<Wp />} />
    <Route path="/post" element={ user === true ?  <Job/> : <Navigate to="/login"/> } />
    <Route path="*" element={<NotFound />} />
   </Routes>
   <Footer />
  </BrowserRouter>

  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
   />
  </UserContext.Provider >

 </div>
 );
}

export default App;
