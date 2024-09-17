import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

import { useMediaQuery } from "@mui/material";

function App() {
    const isMobile = useMediaQuery("(max-width:850px)");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isMobile={isMobile} />}>
                    <Route index element={<Home isMobile={isMobile} />} />
                    <Route
                        path="about"
                        element={<About isMobile={isMobile} />}
                    />
                    <Route
                        path="projects"
                        element={<Projects isMobile={isMobile} />}
                    />
                    <Route path="art" element={<Art isMobile={isMobile} />} />
                    <Route
                        path="contact"
                        element={<Contact isMobile={isMobile} />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
