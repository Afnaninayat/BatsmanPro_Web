import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaVideo, FaClipboardList, FaShieldAlt } from 'react-icons/fa';
import './Features.css';

const featuresData = [
    {
        icon: <FaRobot />,
        title: "AI Detection",
        desc: "State-of-the-art bat-ball contact detection using YOLO based models."
    },
    {
        icon: <FaVideo />,
        title: "Highlight Generation",
        desc: "Automatically condenses hours of footage into the key moments."
    },
    {
        icon: <FaClipboardList />,
        title: "Shot Classification",
        desc: "Identifies whether it's a cover drive, pull shot, or defense."
    },
    {
        icon: <FaShieldAlt />,
        title: "Secure Processing",
        desc: "Your data is processed securely with enterprise-grade privacy standards."
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <h2 className="title">Key Features</h2>
                <p className="subtitle">Everything you need to analyze your game like a pro.</p>

                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
