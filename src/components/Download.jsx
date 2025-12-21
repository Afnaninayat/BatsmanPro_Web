import React from 'react';
import { FaAndroid, FaGooglePlay } from 'react-icons/fa';
import './Download.css';

const Download = () => {
    return (
        <section id="download" className="section download-section">
            <div className="container download-content">
                <div className="download-text">
                    <h2 className="title" style={{ textAlign: 'left' }}>Ready to Level Up?</h2>
                    <p className="subtitle" style={{ textAlign: 'left', margin: '0 0 30px' }}>
                        Download Batsman Pro today and start analyzing your cricket shots like a professional.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary"><FaAndroid size={20} /> Download APK</button>
                        <button className="btn btn-secondary"><FaGooglePlay size={18} /> Play Store</button>
                    </div>
                </div>

                <div className="qr-box">
                    <div className="qr-code-placeholder">
                        {/* Generative placeholder */}
                        <div className="qr-pattern"></div>
                    </div>
                    <p>Scan to Download</p>
                </div>
            </div>
        </section>
    );
};

export default Download;
