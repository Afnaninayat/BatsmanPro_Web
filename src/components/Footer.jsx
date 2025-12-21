import React from 'react';
import './Footer.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/assets/logo.png" alt="Logo" style={{ height: '30px' }} />
                            <span>Batsman<span className="gold">Pro</span></span>
                        </h3>
                        <p style={{ maxWidth: '300px', lineHeight: '1.6', fontSize: '0.85rem', color: '#a0a0a0', marginTop: '10px' }}>
                            Batsman Pro is an AI-powered cricket analytics app that automatically analyzes batting videos to generate highlights, classify shots, and deliver actionable performance insights for players and coaches.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Delete Account</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <a href="mailto:batsmanprox@gmail.com" className="contact-link">
                            <FaEnvelope /> batsmanprox@gmail.com
                        </a>
                        <div className="social-links">
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Batsman Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
