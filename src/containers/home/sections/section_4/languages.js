import React from 'react';
import './style4.css';
import spain from '../../../../assets/images/Rectangle 40.png'
import britain from '../../../../assets/images/Rectangle 41.png'
import germany from '../../../../assets/images/Rectangle 42.png'
import france from '../../../../assets/images/Rectangle 43.png'
import italy from '../../../../assets/images/Rectangle 44.png'

export default function Languages() {

    return (
        <div>
            <span id="span8">Supported Languages</span>
            <span id="span9">Below is the list of popular languages we support for transcription and subtitles.</span>
            <div className="flags">
                <img id="spain" src={spain} alt="Graph" />
                <img id="britain" src={britain} alt="Graph" />
                <img id="germany" src={germany} alt="Graph" />
                <img id="france" src={france} alt="Graph" />
                <img id="italy" src={italy} alt="Graph" />
            </div>
            <div className="langs">
                <span className="lang" id="sp">Spanish</span>
                <span className="lang" id="eng">English</span>
                <span className="lang" id="ger">German</span>
                <span className="lang" id="fr">French</span>
                <span className="lang" id="it">Italian</span>
            </div>
            <button className="all">View all languages</button>
        </div>
    );
}