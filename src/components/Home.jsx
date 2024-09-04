import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Centers vertically
                    marginLeft: "10%",
                    height: "90vh",
                    padding: 0,
                    opacity: 0,
                    animation: "fadeIn 2s ease-in forwards",
                    "@keyframes fadeIn": {
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                    }
                }}
            >
                <Box sx={{ maxWidth: "800px" }}>
                    <Typography variant="h1" color="#011627">
                        Hitomi Yamamoto,
                    </Typography>
                    <Typography variant="h4" color="#011627">
                        Web Developer with a Passion for UI/UX
                    </Typography>
                </Box>
                <Box
                    sx={{
                        maxWidth: "800px",
                        marginTop: "20px",
                        marginLeft: "5px"
                    }}
                >
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

export default Home;
