import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import RecentWork from "../components/RecentWork"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <RecentWork />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default Home