import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaAndroid } from 'react-icons/fa';
import ComingSoonModal from './ComingSoonModal';
import './Hero.css';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="hero">
            <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
                        <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>
                            <FaGooglePlay size={18} /> Get on Play Store
                        </button>
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

