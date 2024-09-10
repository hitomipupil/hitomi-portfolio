import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Home = ({ isMobile }) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "flex-start" : "center",
                    alignItems: "flex-start",
                    width: isMobile ? "100%" : "850px",
                    height: "100vh",
                    paddingLeft: isMobile ? "20px" : "60px",
                    opacity: 0,
                    animation: "fadeIn 2s ease-in forwards",
                    "@keyframes fadeIn": {
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                    },
                    "@media (min-width: 850px) and (max-width: 1400px)": {
                        width: "60%"
                    },
                    "@media (max-width: 850px)": {
                        width: "100%"
                    }
                }}
            >
                <Box sx={{}}>
                    <Typography variant="h1" color="#011627">
                        Hitomi Yamamoto,
                    </Typography>
                    <Typography variant="h4" color="#011627">
                        Web Developer with a Passion for UI/UX
                    </Typography>
                </Box>
                <Box sx={{}}>
                    <Typography variant="h5" align="left" color="textSecondary">
                        Full Stack Developer with a background in financial
                        service planning and a love for creating seamless
                        digital experiences.
                    </Typography>
                    <Typography variant="h5" align="left" color="textSecondary">
                        Over the last 8 months, I have immersed myself in full
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
