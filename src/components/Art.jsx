import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { Box, Grid, Typography } from "@mui/material";
import Item from "./Item";
import bananafish from "../assets/illustrations/bananafish.png";
import blackcat from "../assets/illustrations/black-cat.jpg";
import cheek from "../assets/illustrations/cheek.jpg";
import couple from "../assets/illustrations/coulpe.png";
import eyelid from "../assets/illustrations/eyelid.png";
import green from "../assets/illustrations/green.jpg";
import hand from "../assets/illustrations/hand.png";
import hold from "../assets/illustrations/hold.png";
import katie from "../assets/illustrations/katie.png";
import lynx from "../assets/illustrations/lynx.jpg";
import mads from "../assets/illustrations/mads.jpg";
import nana from "../assets/illustrations/nana.png";
import orange from "../assets/illustrations/orange.jpg";
import pointing from "../assets/illustrations/pointing.png";
import skater from "../assets/illustrations/skater.jpg";
import steinberg from "../assets/illustrations/steinberg.png";
import steinbergcolor from "../assets/illustrations/steinberg-color.png";
import tshirts from "../assets/illustrations/T-shirts.png";
import untitled from "../assets/illustrations/untitled.png";

const Art = ({ isMobile }) => {
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

    const artWorks = [
        {
            id: 1,
            title: "bananafish",
            image: bananafish,
            url: ""
        },
        {
            id: 2,
            title: "black-cat",
            image: blackcat,
            url: ""
        },
        {
            id: 3,
            title: "cheek",
            image: cheek,
            url: ""
        },
        {
            id: 4,
            title: "couple",
            image: couple,
            url: ""
        },
        {
            id: 5,
            title: "eyelid",
            image: eyelid,
            url: ""
        },
        {
            id: 6,
            title: "green",
            image: green,
            url: ""
        },
        { id: 7, title: "hand", image: hand, url: "" },
        {
            id: 8,
            title: "hold",
            image: hold,
            url: ""
        },
        {
            id: 9,
            title: "katie",
            image: katie,
            url: ""
        },
        { id: 10, title: "lynx", image: lynx },
        { id: 11, title: "mads", image: mads },
        {
            id: 12,
            title: "nana",
            image: nana,
            url: ""
        },
        {
            id: 13,
            title: "orange",
            image: orange,
            url: ""
        },
        {
            id: 14,
            title: "pointing",
            image: pointing,
            url: ""
        },
        {
            id: 15,
            title: "skater",
            image: skater,
            url: ""
        },
        {
            id: 16,
            title: "steniberg",
            image: steinberg,
            url: ""
        },
        {
            id: 17,
            title: "steinberg-color",
            image: steinbergcolor,
            url: ""
        },
        {
            id: 18,
            title: "T-shirts",
            image: tshirts,
            url: ""
        },
        {
            id: 19,
            title: "untitled",
            image: untitled,
            url: ""
        }
    ];

    return (
        <>
            {loading && <Loading />}
            {error && (
                <Typography color="error" variant="h6">
                    Error
                </Typography>
            )}
            {artWorks.length > 0 ? (
                <Box
                    margin="50px"
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Grid container spacing={3} justifyContent="center">
                        {artWorks.map((item) => (
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

Art.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default Art;
