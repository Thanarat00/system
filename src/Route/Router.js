import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheNav from "../component/TheNav";
import Admin from "../Page/Admin";
import Home from "../Page/Home";
import Staff from "../Page/Staff";
import Supplier from "../Page/Supplier";
import User from "../Page/User";

function Router() {
  return (
    <>
    <BrowserRouter>
     <TheNav />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/staff" element={<Staff />} />
       <Route path="/supplier" element={<Supplier />} />
       <Route path="/user" element={<User />} />
       <Route path="/admin" element={<Admin />} />
    </Routes>
    
    </BrowserRouter>
</>
  )
}
export default Router;
