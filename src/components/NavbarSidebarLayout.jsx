import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { default: MainContent } = require("./MainContent");

const NavbarSidebarLayout =
    function ({ children, isFooter = true }) {
        return (
            <>
                <Navbar />
                <div className="flex items-start pt-16">
                    <Sidebar />
                    <MainContent isFooter={isFooter}>{children}</MainContent>
                </div>
            </>
        );
    };

export default NavbarSidebarLayout