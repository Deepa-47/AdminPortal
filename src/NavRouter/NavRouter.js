import React from "react";
import {Routes,Route} from "react-router-dom"
import { DashboardLayout } from "../component/Dashboard/DashboardLayout";
import { InsertNewUser } from "../component/Dashboard/InsertNewUser";
import { ShowAllUser } from "../component/Dashboard/ShowAllUser";
import { UpdateUserForm } from "../component/Dashboard/UpdateUserForm";
import { Login } from "../component/Login";

export const NavRouter=()=>{
    
    return(
        <>
            <Routes>
                
                <Route path="/" element={<Login/>}/>
                    
                <Route path="/admin" element={<DashboardLayout/>}>
                    <Route  index element={<ShowAllUser/>}/>
                    <Route path="insertnewuser" element={<InsertNewUser/>}/>
                    <Route path="updateuser" element={<UpdateUserForm/>}/>
                </Route>
            </Routes>
        </>
    )
}