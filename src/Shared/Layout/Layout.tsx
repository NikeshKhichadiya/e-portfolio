import { Fragment, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import('../../Pages/Home'));
const About = lazy(() => import('../../Pages/About'));
const ProjectDetail = lazy(() => import('../../Pages/ProjectDetail'));
const Work = lazy(() => import('../../Pages/Work'));
const Experience = lazy(() => import('../../Pages/Experience'));
const Contact = lazy(() => import('../../Pages/Contact'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import('../Components/Footer'));
const SocialMedia = lazy(() => import('../Components/SocialMedia'));

const Layout = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <SocialMedia />
                <div className="layout">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback={<div className="fallback"></div>}>
                                    <Fragment>
                                        <Home />
                                        <About />
                                        <Work />
                                        <Experience />
                                        <Contact />
                                    </Fragment>
                                </Suspense >
                            }
                        />
                        <Route
                            path="project/:id"
                            element={
                                <Suspense fallback={<div className="fallback"></div>}>
                                    <ProjectDetail />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={<Navigate to={'/'} />}
                        />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default Layout;