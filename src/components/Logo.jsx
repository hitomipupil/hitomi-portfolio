import { Box } from "@mui/material";
import logo from "../assets/logo.png";

const Logo = () => {
    return (
        <Box style={{ position: "fixed", left: "60px", top: "30px" }}>
            <img
                src={logo}
                alt="logo"
                style={{ height: "50px", width: "auto" }}
            />
        </Box>
    );
};

export default Logo;
