import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeNav = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                right: "60px",
                top: "50%", // Start from the vertical center
                transform: "translateY(-50%)", // Center it vertically
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align items to the right
                zIndex: 1000,
                "@media (min-width: 600px) and (max-width: 1400px)": {
                    width: "60%"
                }
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
                    variant="text"
                    key={link.path}
                    component={NavLink}
                    to={link.path}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "64px",
                        color: "#011627",
                        "&:hover": {
                            transform: "scale(1.2)",
                            transition: "transform .2s",
                            backgroundColor: "none"
                        },
                        opacity: 0,
                        animation: "fadeIn 2s ease-in forwards",
                        "@keyframes fadeIn": {
                            from: { opacity: 0 },
                            to: { opacity: 1 }
                        },
                        "@media (min-width: 600px) and (max-width: 1400px)": {
                            fontSize: "36px"
                        }
                    }}
                >
                    {link.label}
                </Button>
            ))}
        </Box>
    );
};

export default HomeNav;
