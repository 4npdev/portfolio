import { useState } from "react";
import { Helmet } from "react-helmet-async";

import WorkNavbar from "../components-work/WorkNavbar";
import WorkBanner from "../components-work/WorkBanner";
import WorkResults from "../components-work/WorkResults";
import Footer from "../components-home/Footer";

function Work() {

    return (
        <>
            <Helmet>
                <title>4NP | Work</title>
                <meta name="description" content="Browse my projects — landing pages, portfolios and custom websites." />
                <link rel="canonical" href="https://4np.dev/work" />
            </Helmet>

            <WorkNavbar />

            <main>
                <WorkBanner />
                <WorkResults />
            </main>

            <Footer />
        </>
    );
}

export default Work;