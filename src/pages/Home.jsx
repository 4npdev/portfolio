import { Helmet } from "react-helmet-async";

import Navbar from "../components-home/Navbar";
import Hero from "../components-home/Hero";
import About from "../components-home/About";
import Skills from "../components-home/Skills";
import FeaturedWork from "../components-home/FeaturedWork";
import Contact from "../components-home/Contact";
import Footer from "../components-home/Footer";

function Home() {
    return (
        <>
            <Helmet>
                <title>4NP | Front-end web developer</title>
            </Helmet>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <FeaturedWork />
                <Contact />
            </main>

            <Footer page="home" />
        </>
    );
}

export default Home;