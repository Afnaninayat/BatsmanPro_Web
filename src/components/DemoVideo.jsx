import React from 'react';
import './DemoVideo.css';
import { FaPlay } from 'react-icons/fa';

const DemoVideo = () => {
    return (
        <section id="demo" className="section demo-section">
            <div className="container">
                <h2 className="title">See It In Action</h2>
                <p className="subtitle">Watch how Batsman Pro transforms raw cricket footage.</p>

                <div className="video-wrapper">
                    <video
                        className="demo-video-player"
                        controls
                        poster="/assets/screen_analysis.jpg"
                        style={{ width: '100%', display: 'block' }}
                    >
                        <source src="/assets/00.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
