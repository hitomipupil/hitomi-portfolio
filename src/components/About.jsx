import { Box, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

const About = ({ isMobile }) => {
    return (
        <Box
            sx={{
                margin: isMobile ? "0 10px" : "0 110px",
                marginBottom: "100px",
                opacity: 0,
                animation: "fadeIn 1s ease-in forwards",
                "@keyframes fadeIn": {
                    from: { opacity: 0 },
                    to: { opacity: 1 }
                }
            }}
        >
            <Typography variant={isMobile ? "h2" : "h1"}>
                Hi, I'm Hitomi
            </Typography>
            <Typography variant="h6" marginTop="30px">
                My journey into web development is a bit unconventional, but
                it’s one that has shaped my approach to creating meaningful
                digital experiences.
            </Typography>
            <Typography variant="h4" marginTop="30px">
                From Japan to Belgium: My Journey
            </Typography>
            <Typography variant="h6">
                I started my professional life in Japan, where I earned a degree
                in International Political Science and Economics.
            </Typography>
            <Typography variant="h6">
                After graduating, I joined{" "}
                <Link
                    href="https://www.docomo.ne.jp/english/"
                    color="textSecondary"
                    sx={{
                        "&:hover": {
                            color: "#f71735"
                        }
                    }}
                    underline="none"
                >
                    NTT docomo
                </Link>
                , a leading telecommunications company, where I worked in the
                financial services department. My role involved managing
                projects that improved the design and usability of websites and
                mobile apps. It was here that I first discovered the impact that
                thoughtful design and good UI/UX can have on users.
            </Typography>
            <Typography variant="h6">
                Working closely with design teams and analyzing user data, I
                began to realize that websites and apps are often the first
                point of contact between a business and its customers. This
                insight sparked a deep interest in web development, but as a
                project manager, I wasn’t able to dive into the technical side
                as much as I wanted.
            </Typography>
            <Typography variant="h4" marginTop="30px">
                A New Chapter in Belgium
            </Typography>
            <Typography variant="h6">
                In 2023, I made a big life change. I moved to Belgium to live
                with my partner, leaving behind my job and the familiar
                surroundings of Japan. This move gave me the opportunity to
                finally pursue my growing passion for web development. I
                enrolled in an 8-month full-stack web development course in
                Antwerp, where I learned HTML, CSS, JavaScript, React, and more.
            </Typography>
            <Typography variant="h6">
                This course allowed me to get my hands dirty with code and
                explore the creative side of web development. I was especially
                drawn to front-end development, where I could merge my technical
                skills with my love for digital illustration, a hobby I’ve had
                since childhood.
            </Typography>
            <Typography variant="h4" marginTop="30px">
                My Approach to Web Development
            </Typography>
            <Typography variant="h6">
                Whenever I approach a web development project, I think back to
                my time at NTT Docomo. My boss always emphasized the importance
                of thinking from the user’s perspective, and that advice has
                stuck with me. I believe the best solutions start by
                understanding what users need and what their ideal experience
                would be.
            </Typography>
            <Typography variant="h6">
                During the course in Antwerp, I also learned the importance of
                being resourceful—how to search for solutions and keep learning
                on the go. Knowing exactly what I want to achieve with my code
                helps me stay focused on creating the best possible experience
                for users.
            </Typography>
            <Typography variant="h4" marginTop="30px">
                Looking Ahead
            </Typography>
            <Typography variant="h6">
                As I continue on this path, I’m excited to deepen my knowledge
                of front-end technologies and UI/UX design. I’m also eager to
                learn more about backend development with tools like Node.js,
                and explore frameworks like Vue and Angular. My long-term goal
                is to bring my experience and skills together to lead
                development teams as a project manager.
            </Typography>
            <Typography variant="h4" marginTop="30px">
                A Blend of Passions
            </Typography>
            <Typography variant="h6">
                Outside of coding, I’m passionate about digital illustration. I
                love experimenting with different styles and techniques, and I
                believe this creativity influences my work as a developer. You
                can see some of my artwork here on my portfolio. Let’s connect
                and bring your ideas to life together!
            </Typography>
        </Box>
    );
};

About.propTypes = {
    isMobile: PropTypes.bool.isRequired
};

export default About;
