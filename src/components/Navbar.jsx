import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { FaCricket } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-content">
                <div className="logo">
                    <img src="/assets/logo.png" alt="Batsman Pro Logo" className="logo-img" />
                    <span>Batsman<span className="gold">Pro</span></span>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#demo" onClick={toggleMenu}>How It Works</a></li>
                    <li><a href="#features" onClick={toggleMenu}>Features</a></li>
                    <li><a href="#demo" onClick={toggleMenu}>Demo</a></li>
                    <li><a href="#download" className="btn-nav" onClick={toggleMenu}>Get App</a></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
