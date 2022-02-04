import React from 'react';
import './style2.css';
import orgs from '../../../../assets/images/image 101.png'
import cmp from '../../../../assets/images/1.png'

export default function Start() {

    return (
        <div>
            <div className="startdiv">
                <div id="startleft">
                    <span id="span2">Create Impact with Transcription & Subtitles</span>
                    <span id="span3">State of the art A.I. working side by side with the best
                        language professionals.</span>
                    <button className="start">Start for free</button>
                </div>
                <div id="startimg"><img className="cmp" src={cmp} alt="Graph" /></div>
            </div>
            <div id="org">
                <span id="span4">Trusted by 100+ Organizations</span>
                <img className="orgs" src={orgs} alt="Graph" /></div>
        </div>
    );
}