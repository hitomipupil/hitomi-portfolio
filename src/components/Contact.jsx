import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Box
            style={{ position: "fixed", left: "60px", top: "50%" }}
            sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in forwards",
                "@keyframes fadeIn": {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            }}
        >
            <Typography variant="h6" color="#011627">
                Email: hitomi0727pupil@gmail.com
            </Typography>
            <Typography variant="h6">
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
