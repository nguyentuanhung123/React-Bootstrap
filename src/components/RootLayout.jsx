import Nav from "./nav/Nav";
import SidebarMenu from "./sidebar/SidebarMenu";

const RootLayout = ({ children }) => {
    return (
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                <div className="col-auto col-2 px-0">
                    <SidebarMenu />
                </div>
                <div className="col px-0">
                    <Nav />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RootLayout;