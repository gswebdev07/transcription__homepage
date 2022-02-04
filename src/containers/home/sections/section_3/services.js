import React from 'react';
import './style3.css';
import subs from '../../../../assets/images/2.png'
import tran from '../../../../assets/images/3.png'

export default function Start() {

    return (
        <div className="servicesdiv">
            <span id="span5">Our Services</span>
            <div className="container3">
                <div id="subdiv">
                    <div id="rec3" className="subtitles">
                        <div className="box1">
                            <span className="sub">Subtitles</span>
                            <span id="span6">Add captions to your videos</span>
                            <div id="btns3">
                                <button className="btn3" id="learn1">Learn more</button>
                                <button className="btn3" id="start1">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="pink">
                        <img className="subs" src={subs} alt="Graph" />
                    </div>
                </div>

                <div class="trandiv">
                    <div id="rec3" className="transcription">
                        <div className="box1">
                            <span className="trans">Transcription</span>
                            <span id="span7">Convert your audio to text.</span>
                            <div id="btns3">
                                <button className="btn3" id="learn2">Learn more</button>
                                <button className="btn3" id="start2">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="blue">
                        <img className="tran" src={tran} alt="Graph" />
                    </div>
                </div>
            </div>
        </div >
    );
}