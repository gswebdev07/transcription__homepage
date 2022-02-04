import React from 'react';
import './style4.css';
import spain from '../../../../assets/images/Rectangle 40.png'
import britain from '../../../../assets/images/Rectangle 41.png'
import germany from '../../../../assets/images/Rectangle 42.png'
import france from '../../../../assets/images/Rectangle 43.png'
import italy from '../../../../assets/images/Rectangle 44.png'

export default function Languages() {

    return (
        <div id="languagesdiv">
            <span id="span8">Supported Languages</span>
            <span id="span9">Below is the list of popular languages we support for transcription and subtitles.</span>
            <div className="langs">
                <div className="langdiv" id="spanish">
                    <img className="flag" id="spain" src={spain} alt="Graph" />
                    <span className="lang" id="sp">Spanish</span>
                </div>
                <div className="langdiv" id="english">
                    <img className="flag" id="britain" src={britain} alt="Graph" />
                    <span className="lang" id="eng">English</span>
                </div>
                <div className="langdiv" id="german">
                    <img className="flag" id="germany" src={germany} alt="Graph" />
                    <span className="lang" id="ger">German</span>
                </div>
                <div className="langdiv" id="french">
                    <img className="flag" id="france" src={france} alt="Graph" />
                    <span className="lang" id="fr">French</span>
                </div>
                <div className="langdiv" id="italian">
                    <img className="flag" id="italy" src={italy} alt="Graph" />
                    <span className="lang" id="it">Italian</span>
                </div>
            </div>
            <button className="all">View all languages</button>
        </div>

    );
}