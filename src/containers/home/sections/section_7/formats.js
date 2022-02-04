import React from 'react';
import './style7.css';

export default function Formats() {

    return (
        <div className="formatsdiv">
            <span id="span12">Multiple export formats</span>
            <span id="span13">Export in all formats that you can think of. Our platform prepares you files that are ready for any kind of platform.</span>
            <div className="formatbtns">
                <button className="format" id="txt">.TXT</button>
                <button className="format" id="word">Word</button>
                <button className="format" id="pdf">PDF</button>
                <button className="format" id="json">JSON</button>
                <button className="format" id="max">MAXQDA</button>
                <button className="format" id="vtt">.VTT</button>
                <button className="format" id="srt">.SRT</button>
                <button className="format" id="stl">.STL</button>
                <button className="format" id="final">Final Cut</button>
                <button className="format" id="pre">Primiere</button>
                <button className="format" id="avid">AVID</button>
            </div>
            <button className="export">Export</button>
        </div>
    );
}