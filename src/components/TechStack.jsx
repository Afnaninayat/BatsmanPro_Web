import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiFlutter, SiPytorch, SiFirebase, SiFlask } from 'react-icons/si';
import './TechStack.css';

const techs = [
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'YOLO', icon: <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>YOLO</span> }, // No icon for YOLO usually
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'React', icon: <FaReact /> },
];

const TechStack = () => {
    return (
        <section className="section tech-section">
            <div className="container">
                <h2 className="title">Powered By</h2>
                <div className="tech-grid">
                    {techs.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <div className="tech-icon">{tech.icon}</div>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
