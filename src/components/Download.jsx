import React, { useState, useEffect } from 'react';
import { FaAndroid, FaGooglePlay } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import ComingSoonModal from './ComingSoonModal';
import './Download.css';

const Download = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [apkUrl, setApkUrl] = useState('');

    useEffect(() => {
        setApkUrl(`${window.location.origin}/assets/batsman-pro.apk`);
    }, []);

    return (
        <section id="download" className="section download-section">
            <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="container download-content">
                <div className="download-text">
                    <h2 className="title" style={{ textAlign: 'left' }}>Ready to Level Up?</h2>
                    <p className="subtitle" style={{ textAlign: 'left', margin: '0 0 30px' }}>
                        Download Batsman Pro today and start analyzing your cricket shots like a professional.
                    </p>
                    <div className="hero-buttons">
                        <a href="/assets/batsman-pro.apk" download className="btn btn-primary"><FaAndroid size={20} /> Download APK</a>
                        <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>
                            <FaGooglePlay size={18} /> Play Store
                        </button>
                    </div>
                </div>

                <div className="qr-box">
                    <div className="qr-code-placeholder" style={{ background: 'white', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {apkUrl && <QRCodeSVG value={apkUrl} size={150} />}
                    </div>
                    <p style={{ marginTop: '10px' }}>Scan to Download</p>
                </div>
            </div>
        </section>
    );
};

export default Download;
