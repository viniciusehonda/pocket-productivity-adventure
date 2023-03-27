import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LocalStorageAdapter } from "../../adapters";
import { ProfileState } from "../../interfaces";
import { setProfile } from "../../redux/profileSlice";
import "./Layout.css"

function Layout() {

    const navigate = useNavigate();
    useEffect(() => {
        var profile = LocalStorageAdapter.getItem("PROFILE");

        if (!profile || !profile.profile) {
            navigate("/profile")
        }
    })

    return <React.Fragment>
        <div className="layout-wrapper">
            <div className="layout-controls">
                <header className="header">
                    <div className="header-content">
                        <nav className="header-nav">
                            <div className="nav-menu">
                                <ul>
                                    <li>
                                        <a className="nav-menu-item" href="/">
                                            <span className="menu-item">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-menu-item" href="/About">
                                            <span className="menu-item">About</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <div className="layout-content">
                <Outlet />
            </div>
        </div>
    </React.Fragment>
}

export default Layout;