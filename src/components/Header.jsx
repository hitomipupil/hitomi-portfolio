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
        { path: "web-project", label: "Web-Project" },
        { path: "art", label: "Art" },
        { path: "contact", label: "Contact" }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '20px',
                height: '60px',
                zIndex: 1000,
            }}
        >
            <img
                src={logo}
                alt="logo"
                style={{ height: "50px", width: "auto" }}
            />

            {isMobile ? (
                <>
                    <Button
                        variant="contained"
                        onClick={toggleMenu}
                        sx={{
                        position:"fixed",
                        right: "20px",
                            backgroundColor: "#011627",
                            color: "#fff",
                            marginTop: '10px',
                        }}
                    >
                        Menu
                    </Button>
                    {menuOpen && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: '#f7f9fc',
                                padding: '10px',
                                borderRadius: '4px',
                                marginTop: '30px', // Space between button and menu
                                width: '90%', // Adjust width if needed
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                zIndex: 1400, // Ensure the menu box is above other content
                                position: 'absolute', // Position the menu relative to the Header
                                right: '20px',
                                top: '60px', // Position it below the button
                            }}
                        >
                            {menuItems.map((link) => (
                                <MenuItem
                                    key={link.path}
                                    component={NavLink}
                                    to={link.path}
                                    onClick={toggleMenu}
                                    sx={{
                                        textAlign: 'left',
                                        width: '100%',
                                        "&.active": {
                                            color: "#41ead4",
                                        },
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
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        width: 'auto',
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
                                    color: "#41ead4"
                                },
                                padding: "0 15px",
                                zIndex: '1000',
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
    isMobile: PropTypes.bool.isRequired,
};

export default Header;
