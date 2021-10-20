import React from 'react';
import './style1.css';
import logo from '../../../../assets/images/image 11.png'
import arrow from '../../../../assets/images/image 2.png'


export default function Bar() {

	return (
		<div>
			<img className="logo" src={logo} alt="Graph" />
			<span id="span1">Logo</span>
			<div className="opts">
				<span id="services" >Services </span>
				<img className="arrow" src={arrow} alt="Graph" style={{ marginRight: '5rem' }} />
				<span id="enterprice" style={{ marginRight: '5rem' }}>Enterprice</span>
				<span id="pricing" style={{ marginRight: '5rem' }}>Pricing</span>
			</div>
			<button className="login">Log in</button>
			<button className="getStarted">Get started free</button>
		</div>
	);
}