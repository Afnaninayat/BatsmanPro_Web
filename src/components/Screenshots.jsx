import React from 'react';
import { motion } from 'framer-motion';
import './Screenshots.css';

const Screenshots = () => {
    const screenshots = [1, 2, 3]; // Placeholders

    return (
        <section className="section screenshots-section">
            <div className="container">
                <h2 className="title">App Interface</h2>
                <p className="subtitle">Clean, intuitive, and designed for performance.</p>

                <div className="screenshots-grid">
                    <motion.div
                        className="screenshot-mockup"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                    >
                        <img src="/assets/screen_onboarding.jpg" alt="Onboarding Screen" />
                    </motion.div>

                    <motion.div
                        className="screenshot-mockup"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <img src="/assets/screen_login.jpg" alt="Login Screen" />
                    </motion.div>

                    <motion.div
                        className="screenshot-mockup"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <img src="/assets/screen_analysis.jpg" alt="Analysis Screen" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
