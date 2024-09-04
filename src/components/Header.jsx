import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Box
                style={{
                    position: "fixed",
                    right: "60px",
                    top: "30px",
                    zIndex: 1000
                }}
            >
                {[
                    { path: "/", label: "Home" },
                    { path: "about", label: "About" },
                    { path: "web-project", label: "Web-Project" },
                    { path: "art", label: "Art" },
                    { path: "contact", label: "Contact" }
                ].map((link) => (
                    <Button
                        variant="string"
                        key={link.path}
                        component={NavLink}
                        to={link.path}
                        sx={{
                            fontSize: "24px",
                            color: "#011627",
                            "&.active": {
                                color: "#41ead4"
                            }
                        }}
                    >
                        {link.label}
                    </Button>
                ))}
            </Box>
        </>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
