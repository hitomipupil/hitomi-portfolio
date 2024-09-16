import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Item = ({ item }) => {
    const handleClick = () => {
        if (item.url) {
            window.location.href = item.url;
        }
    };
    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: item.url ? "pointer" : "default",
                "&:hover": item.url ? { boxShadow: 3 } : {},
            }}
        >
            <CardMedia
                component="img"
                image={item.image}
                sx={{
                    width: 400,
                    height: 400,
                    objectFit: "cover"
                }}
                alt={item.description}
            ></CardMedia>
            <CardContent>
                <Typography variant="body" component="div">
                    {item.title}
                </Typography>
                {item.githubUrl && (
                    <Link
                        href={item.githubUrl}
                        variant="body"
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
                )}
            </CardContent>
        </Card>
    );
};

Item.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
        githubUrl: PropTypes.string
    }).isRequired
};

export default Item;
