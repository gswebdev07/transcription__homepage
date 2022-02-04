import React from 'react';
import './style6.css';
import FB from '../../../../assets/images/4.png'
import YT from '../../../../assets/images/5.png'
import R from '../../../../assets/images/6.png'

export default function Percentages2() {

    return (
        <div className="per2div">
            <div className="per2div2" id="f">
                <span id="facebook"><span>85%</span> of Facebook videos are watched on mute.</span>
                <span id="facebook2"> Add subtitle to your videos to share your
                    message more clearly with our subtitle
                    software.</span>
            </div>
            <div className="perimg"><img id="FB" src={FB} alt="Graph" /></div>

            <div className="perimg" id="y"><img id="YT" src={YT} alt="Graph" /></div>
            <div className="per2div2">
                <span id="youtube"> Over <span>50%</span> of YouTube viewers do not speak English.</span>
                <span id="youtube2">subtitling your videos into foreign languages
                    automatically can allow you to reach millions
                    more viewers around the world who don’t
                    speak your language.
                </span>
            </div>

            <div className="per2div2" id="r">
                <span id="revenue"><span>16%</span> increase in revenue when
                    adding transcripts to videos.</span>
                <span id="revenue2"> Add subtitle to your videos to share your
                    message more clearly with our subtitle
                    software.
                </span>
            </div>
            <div className="perimg"><img id="R" src={R} alt="Graph" /></div>
        </div>
    );
}