import { Box, Button, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = ({ isMobile }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { path: "/", label: "Home" },
        { path: "about", label: "About" },
        { path: "projects", label: "Projects" },
        { path: "art", label: "Art" },
        { path: "contact", label: "Contact" }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "20px",
                height: "60px",
                zIndex: 1000
            }}
        >
            <NavLink to="/" style={{ textDecoration: "none" }}>
                <img
                    src={logo}
                    alt="logo"
                    style={{ height: "50px", width: "auto", margin: "0" }}
                />
            </NavLink>

            {isMobile ? (
                <>
                    <Button
                        variant="contained"
                        onClick={toggleMenu}
                        sx={{
                            boxShadow: 0,
                            right: "5%",
                            backgroundColor: "inherit",
                            color: "#000",
                            marginTop: "10px",
                            "&:hover": {
                                boxShadow: 0,
                                backgroundColor: "#fff",
                                color: "#000"
                            },
                            "&:active": {
                                backgroundColor: "#fff"
                            }
                        }}
                    >
                        Menu
                    </Button>
                    {menuOpen && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                backgroundColor: "#fff",
                                padding: "10px",
                                borderRadius: "4px",
                                marginTop: "30px",
                                width: "30%",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                zIndex: 1400,
                                position: "absolute",
                                right: "20px",
                                top: "60px"
                            }}
                        >
                            {menuItems.map((link) => (
                                <MenuItem
                                    key={link.path}
                                    component={NavLink}
                                    to={link.path}
                                    onClick={toggleMenu}
                                    sx={{
                                        textAlign: "left",
                                        width: "100%",
                                        "&.active": {
                                            backgroundColor: "#abf6ec"
                                        }
                                    }}
                                >
                                    {link.label}
                                </MenuItem>
                            ))}
                        </Box>
                    )}
                </>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "auto"
                    }}
                >
                    {menuItems.map((link) => (
                        <Button
                            variant="string"
                            key={link.path}
                            component={NavLink}
                            to={link.path}
                            sx={{
                                fontSize: "24px",
                                color: "#011627",
                                "&.active": {
                                    borderBottom: 2,
                                    borderColor: "#41ead4",
                                    borderRadius: 0,
                                    padding: 0
                                },
                                padding: "0 15px",
                                zIndex: "1000"
                            }}
                        >
                            {link.label}
                        </Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};

Header.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default Header;
