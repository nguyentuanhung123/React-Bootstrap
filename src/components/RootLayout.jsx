import { useContext, useState } from "react";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import SidebarMenu from "./sidebar/SidebarMenu";
import { ToggleContext } from "../contexts/ToggleContext";

const RootLayout = ({ children }) => {

    const { toggle } = useContext(ToggleContext);

    return (
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                {
                    toggle && <div className="col-2 px-0 position-fixed">
                        <SidebarMenu />
                    </div>
                }
                {
                    toggle && <div className="col-2"></div>
                }
                <div className="col px-3">
                    <Nav />
                    {children}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default RootLayout;