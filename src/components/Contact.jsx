import { Box, Link, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "5%",
                height: "70vh"
            }}
        >
            <Typography variant="h5" color="#011627">
                hitomi0727pupil@gmail.com
            </Typography>
            <Typography variant="h4" marginTop="10px">
                <Link
                    href="https://github.com/hitomipupil"
                    color="textSecondary"
                    sx={{
                        "&:hover": {
                            color: "#f71735"
                        }
                    }}
                    underline="none"
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/hitomi-yamamoto/"
                    color="textSecondary"
                    sx={{
                        "&:hover": {
                            color: "#f71735"
                        }
                    }}
                    underline="none"
                    marginLeft="5px"
                >
                    <FaLinkedin />
                </Link>
            </Typography>
        </Box>
    );
};

export default Contact;
