import React, { useState, useEffect } from 'react';
import { FaAndroid, FaGooglePlay } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './Download.css';


const Download = () => {
    const [apkUrl, setApkUrl] = useState('');

    useEffect(() => {
        setApkUrl(`${window.location.origin}/assets/batsman-pro.apk`);
    }, []);

    return (
        <section id="download" className="section download-section">
            <div className="container download-content">
                <div className="download-text">
                    <h2 className="title" style={{ textAlign: 'left' }}>Ready to Level Up?</h2>
                    <p className="subtitle" style={{ textAlign: 'left', margin: '0 0 30px' }}>
                        Download Batsman Pro today and start analyzing your cricket shots like a professional.
                    </p>
                    <div className="hero-buttons">
                        <a href="/assets/batsman-pro.apk" download className="btn btn-primary"><FaAndroid size={20} /> Download APK</a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.uitu.batsmanpro&hl=en-US&ah=MCiV2b9oyDUPZJ2l24ijeiki_0M"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaGooglePlay size={18} /> Play Store
                        </a>
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
