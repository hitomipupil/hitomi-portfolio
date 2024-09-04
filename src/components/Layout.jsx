import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Logo from "./Logo";

const Layout = () => {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <div>
            <Logo />
            {isHomePage ? <HomeNav /> : <Header title="Hi" />}

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
