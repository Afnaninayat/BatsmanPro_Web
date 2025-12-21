import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRocket } from 'react-icons/fa';
import './ComingSoonModal.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <div className="modal-body">
                        <div className="rocket-icon">
                            <FaRocket />
                        </div>
                        <h3>Launching Soon!</h3>
                        <p>We are putting the final touches on our Play Store release.</p>
                        <p className="stay-tuned">Stay tuned for the update!</p>
                        <button className="btn btn-primary" onClick={onClose}>Got it</button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ComingSoonModal;
