import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import "./AdminNavbar.css"
export const DashboardLayout = () => {
    return (
        <>
            <AdminNavbar/>
            <div className="daashboardOutlet" >
                <Outlet/>
            </div>
            
        </>
    )
}