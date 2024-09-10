import { useEffect, useState } from "react";
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

const Art = () => {
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
            url: "",
            description: "bananafish"
        },
        {
            id: 2,
            title: "black-cat",
            image: blackcat,
            url: "",
            description: "man and a black cat"
        },
        {
            id: 3,
            title: "cheek",
            image: cheek,
            url: "",
            description: "girl putting finger on her cheek"
        },
        {
            id: 4,
            title: "couple",
            image: couple,
            url: "",
            description: "kawaii couple"
        },
        {
            id: 5,
            title: "eyelid",
            image: eyelid,
            url: "",
            description: "girl with heave eyelid"
        },
        {
            id: 6,
            title: "green",
            image: green,
            url: "",
            description: "girl with a flower"
        },
        { id: 7, title: "hand", image: hand, url: "", description: "hand" },
        {
            id: 8,
            title: "hold",
            image: hold,
            url: "",
            description: "hand holding the air"
        },
        {
            id: 9,
            title: "katie",
            image: katie,
            url: "",
            description: "girl with a cigarette"
        },
        { id: 10, title: "lynx", image: lynx, url: "", description: "a lynx" },
        { id: 11, title: "mads", image: mads, url: "", description: "mads" },
        {
            id: 12,
            title: "nana",
            image: nana,
            url: "",
            description: "girl with a choker"
        },
        {
            id: 13,
            title: "orange",
            image: orange,
            url: "",
            description: "girl in a hoodie"
        },
        {
            id: 14,
            title: "pointing",
            image: pointing,
            url: "",
            description: "pointing finger"
        },
        {
            id: 15,
            title: "skater",
            image: skater,
            url: "",
            description: "skater"
        },
        {
            id: 16,
            title: "steniberg",
            image: steinberg,
            url: "",
            description: "a model"
        },
        {
            id: 17,
            title: "steinberg-color",
            image: steinbergcolor,
            url: "",
            description: "a model with color"
        },
        {
            id: 18,
            title: "T-shirts",
            image: tshirts,
            url: "",
            description: "girl in  a T-shirts"
        },
        {
            id: 19,
            title: "untitled",
            image: untitled,
            url: "",
            description: "long hair girl"
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
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100vh"
                    }}
                >
                    <Grid container spacing={4} justifyContent="center">
                        {artWorks.map((item) => (
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

export default Art;
