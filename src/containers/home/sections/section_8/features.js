import React from 'react';
import './style8.css';
import rect from '../../../../assets/images/Vector 2.png'
import upload from '../../../../assets/images/image 13.png'
import translation from '../../../../assets/images/image 19.png'
import imports from '../../../../assets/images/image 20.png'
import workspace from '../../../../assets/images/image 21.png'
import api from '../../../../assets/images/image 22.png'
import security from '../../../../assets/images/image 23.png'

export default function Features() {

    return (
        <div className="featuresdiv">
            <span id="span81">Features</span>
            <img id="rect" src={rect} alt="Graph" />

            <div className="squaresdiv">
                <div className="rec8" id="upload">
                    <div className="rec8blue"><img id="icon1" src={upload} alt="Graph" /></div>
                    <span className="span82" id="span821">No limits on uploads</span>
                    <div className="line"></div>
                    <span className="span83" id="span831">Upload files of any size and length. Our software supports them all.</span>
                </div>

                <div className="rec8" id="translation">
                    <div className="rec8blue"><img id="icon2" src={translation} alt="Graph" /></div>
                    <span className="span82" id="span822">Machine Translation</span>
                    <div className="line"></div>
                    <span className="span83" id="span832">Automatically translate your transcription and subtitles in the most common languages.</span>
                </div>

                <div className="rec8" id="imports">
                    <div className="rec8blue"><img id="icon3" src={imports} alt="Graph" /></div>
                    <span className="span82" id="span823">Import from other platforms</span>
                    <div className="line"></div>
                    <span className="span83" id="span833">Import any public links and synchronize Happy Scribe to your current workflow.</span>
                </div>

                <div className="rec8" id="workspace">
                    <div className="rec8blue"><img id="icon4" src={workspace} alt="Graph" /></div>
                    <span className="span82" id="span824">Workspaces for collaboration</span>
                    <div className="line"></div>
                    <span className="span83" id="span834">Create spaces for you to share your files with the rest of your team.</span>
                </div>

                <div className="rec8" id="api">
                    <div className="rec8blue"><img id="icon5" src={api} alt="Graph" /></div>
                    <span className="span82" id="span825">APIs & Integrations</span>
                    <div className="line"></div>
                    <span className="span83" id="span835">Seamlessly integrate with your favorite applications: Zapier, Youtube, and more.</span>
                </div>

                <div className="rec8" id="security">
                    <div className="rec8blue"><img id="icon6" src={security} alt="Graph" /></div>
                    <span className="span82" id="span826">Security & Confidentiality</span>
                    <div className="line"></div>
                    <span className="span83" id="span836">All files are protected and remain private. Your subtitles are protected.</span>
                </div>
            </div>
        </div>
    );
}