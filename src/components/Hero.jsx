import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaAndroid } from 'react-icons/fa';
import './Hero.css';


const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge">AI-Powered Cricket Analytics</div>
                    <h1>
                        Unlock Your <span className="gold">Potential</span> <br />
                        With Batsman Pro
                    </h1>
                    <p>
                        The ultimate tool for cricketers. Detect bat-ball contact, generate automatic highlights, and classify shots with professional-grade AI.
                    </p>
                    <div className="hero-buttons">
                        <a href="/assets/batsman-pro.apk" download className="btn btn-primary">
                            <FaAndroid size={20} /> Download APK
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.uitu.batsmanpro&hl=en-US&ah=MCiV2b9oyDUPZJ2l24ijeiki_0M"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaGooglePlay size={18} /> Get on Play Store
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Placeholder for phone mockup, using a CSS shape or image if available. 
               For now, a stylized graphical representation. */}
                    <div className="phone-mockup">
                        <img src="/assets/screen_splash.jpg" alt="App Splash Screen" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px' }} />
                    </div>
                </motion.div>
            </div>

            <div className="hero-bg-glow"></div>
        </section>
    );
};

export default Hero;

