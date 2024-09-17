import { Box, Grid, Typography } from "@mui/material";
import { webProjects } from "../assets/webProjects/Projects";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Item from "./Item";

const Projects = ({ isMobile }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setError(false);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, []);

    return (
        <>
            {loading && <Loading />}
            {error && (
                <Typography color="error" variant="h6">
                    Error
                </Typography>
            )}
            {webProjects.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Grid container spacing={3} justifyContent="center">
                        {webProjects.map((item) => (
                            <Grid item key={item.id}>
                                <Item item={item} isMobile={isMobile} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ) : (
                <Typography variant="h6">No art available.</Typography>
            )}
        </>
    );
};

Projects.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default Projects;
