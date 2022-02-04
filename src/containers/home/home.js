import React from 'react';
import './style.css';
import Bar from './sections/section_1/bar.js'
import Start from './sections/section_2/start.js';
import Services from './sections/section_3/services.js';
import Languages from './sections/section_4/languages';
import Percentages1 from './sections/section_5/percentages1';
import Formats from './sections/section_7/formats';
import Percentages2 from './sections/section_6/percentages2';
import Features from './sections/section_8/features';


export default function Home() {

    return (
        <div id="main">
            <Bar></Bar>
            <Start></Start>
            <Services></Services>
            <Languages></Languages>
            <Percentages1></Percentages1>
            <Percentages2></Percentages2>
            <Formats></Formats>
            <Features></Features>
        </div>
    )
}