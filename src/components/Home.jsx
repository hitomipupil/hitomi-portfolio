import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";

const Home = ({ isMobile }) => {
    return (
        <>
            {!isMobile && (
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        height: "100px",
                        width: "auto",
                        marginTop: "40px",
                        marginLeft: "40px"
                    }}
                />
            )}

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "flex-start" : "center",
                    alignItems: "flex-start",
                    width: isMobile ? "100%" : "900px",
                    height: "calc(100vh - 140px)",
                    marginTop: 0,
                    padding: isMobile ? "0 40px" : "0 60px",
                    "@media (min-width: 850px) and (max-width: 1400px)": {
                        width: "60%"
                    },
                    "@media (max-width: 850px)": {
                        width: "100%"
                    }
                }}
            >
                <Box>
                    <Typography
                        variant={isMobile ? "h2" : "h1"}
                        color="#011627"
                    >
                        Hitomi Yamamoto,
                    </Typography>
                    <Typography
                        marginTop="10px"
                        variant={isMobile ? "h5" : "h4"}
                        color="#011627"
                    >
                        Web Developer with a Passion for UI/UX
                    </Typography>
                </Box>
                <Box marginTop="20px" marginLeft="5px">
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        align="left"
                        color="textSecondary"
                    >
                        Full Stack Developer with a background in financial
                        service planning and a love for creating seamless
                        digital experiences.
                    </Typography>
                    <Typography
                        variant={isMobile ? "h6" : "h5"}
                        align="left"
                        color="textSecondary"
                    >
                        Over the last 9 months, I have immersed myself in full
                        stack development, gaining hands-on experience with
                        React, Node.js, and more.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

Home.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default Home;
