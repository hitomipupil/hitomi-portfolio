import { Box, Grid, Typography } from "@mui/material";
import { WebProjects } from "../assets/webProjects/WebProjects";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Item from "./Item";

const WebProject = () => {
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
            {WebProjects.length > 0 ? (
                <Box
                    sx={{
                        marginTop: "150px",
                        display: "flex",
                        justifyContent: "center",
                        height: "100vh"
                    }}
                >
                    <Grid container spacing={4} justifyContent="center">
                        {WebProjects.map((item) => (
                            <Grid item key={item.id}>
                                <Item item={item} />
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

export default WebProject;
