import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";
import noImage from "../assets/Image_not_available.png";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Item = ({ item, isMobile }) => {
    const iconMap = {
        FaReact: <FaReact />,
        SiMui: <SiMui />,
        FaNodeJs: <FaNodeJs />,
        FaJs: <FaJs />,
        FaCss3Alt: <FaCss3Alt />
    };
    const handleClick = () => {
        if (item.url) {
            window.location.href = item.url;
        }
    };
    return (
        <Card onClick={handleClick} variant="text" sx={{}}>
            <CardMedia
                component="img"
                image={item.image ? item.image : noImage}
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    objectFit: "cover",
                    width: isMobile ? "340px" : "450px",
                    height: isMobile ? "340px" : "450px",
                    border: "1px solid lightgray"
                }}
                alt={item.title}
            ></CardMedia>
            <CardContent
                sx={{
                    padding: 0,
                    objectFit: "cover",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: isMobile ? "340px" : "450px"
                }}
            >
                <Typography variant="body" fontWeight="bold" component="div">
                    {item.title}
                </Typography>

                {item.description && (
                    <Typography>{item.description}</Typography>
                )}
                {item.tools && (
                    <Typography variant="h6" component="div">
                        {item.tools.map((tool, index) => (
                            <span key={index}>{iconMap[tool]}</span>
                        ))}
                    </Typography>
                )}
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
        description: PropTypes.string,
        tools: PropTypes.array,
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
        githubUrl: PropTypes.string
    }).isRequired,
    isMobile: PropTypes.bool.isRequired
};

export default Item;
