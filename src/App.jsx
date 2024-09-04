import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import WebProject from "./components/WebProject";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="web-project" element={<WebProject />} />
                    <Route path="art" element={<Art />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
