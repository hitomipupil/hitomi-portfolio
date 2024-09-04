import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeNav = () => {
    return (
        <Box
            style={{
                position: "fixed",
                right: "10%",
                top: "50%",
                transform: "translateY(-50%)",
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
