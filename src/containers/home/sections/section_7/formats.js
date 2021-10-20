import React from 'react';
import './style7.css';

export default function Formats() {

    return (
        <div>
            <span id="span12">Multiple export formats</span>
            <span id="span13">Export in all formats that you can think of. Our platform prepares you files that are ready for any kind of platform.</span>
            <button className="formats" id="txt">.TXT</button>
            <button className="formats" id="word">Word</button>
            <button className="formats" id="pdf">PDF</button>
            <button className="formats" id="json">JSON</button>
            <button className="formats" id="max">MAXQDA</button>
            <button className="formats" id="vtt">.VTT</button>
            <button className="formats" id="srt">.SRT</button>
            <button className="formats" id="stl">.STL</button>
            <button className="formats" id="final">Final Cut</button>
            <button className="formats" id="pre">Primiere</button>
            <button className="formats" id="avid">AVID</button>

            <button className="export">Export</button>
        </div>
    );
}