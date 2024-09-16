import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "5%",
                height: "70vh",
            }}
        >
            <Typography variant="h5" color="#011627">
                Email: hitomi0727pupil@gmail.com
            </Typography>
            <Typography variant="h5">
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
                    Github
                </Link>
                /
                <Link
                    href="https://www.linkedin.com/in/hitomi-yamamoto/"
                    color="textSecondary"
                    sx={{
                        "&:hover": {
                            color: "#f71735"
                        }
                    }}
                    underline="none"
                >
                    LinkedIn
                </Link>
            </Typography>
        </Box>
    );
};

export default Contact;
