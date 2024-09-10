import { Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import HomeNav from "./HomeNav";

const Layout = ({ isMobile }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div>
            {isHomePage ? (
                isMobile ? (
                    <Header isMobile={isMobile} />
                ) : (
                    <HomeNav isMobile={isMobile} />
                )
            ) : (
                <Header isMobile={isMobile} />
            )}

            <main>
                <Outlet />
            </main>
        </div>
    );
};

Layout.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default Layout;
