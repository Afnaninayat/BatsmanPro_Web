import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaBrain, FaFilm, FaChartBar } from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
    { id: 1, title: 'Upload Video', icon: <FaCloudUploadAlt />, desc: 'Upload your match footage securely.' },
    { id: 2, title: 'AI Detection', icon: <FaBrain />, desc: 'Our advanced AI detects bat-ball contact.' },
    { id: 3, title: 'Highlight Gen', icon: <FaFilm />, desc: 'Watch auto-generated highlights instantly.' },
    { id: 4, title: 'Shot Analytics', icon: <FaChartBar />, desc: 'Get deep insights into every shot played.' },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section how-it-works">
            <div className="container">
                <h2 className="title">How It Works</h2>
                <p className="subtitle">From raw footage to professional analysis in four simple steps.</p>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="step-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="step-icon">
                                {step.icon}
                                <div className="step-number">{step.id}</div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
