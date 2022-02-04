import React from 'react';
import './style1.css';
import logo from '../../../../assets/images/image 11.png'
import arrow from '../../../../assets/images/image 2.png'


export default function Bar() {

	return (
		<div id="bardiv">
			<nav class="navbar">
				<input type="checkbox" id="check"></input>
				<label for="check" class="checkbtn">
					<i class="fas fa-bars"></i>
				</label>
				<div id="logo">
					<img className="logoimg" src={logo} alt="Graph" />
					<span id="span1">Logo</span>
				</div>
				<div className="opts">
					<ul>
						<li id="services"><a href="#">Services<img className="arrow" src={arrow} alt="Graph" /></a></li>
						<li id="enterprice"><a href="#">Enterprice</a></li>
						<li id="pricing"><a href="#">Pricing</a></li>
					</ul>
				</div>
				<div id="startbtn">
					<button className="login">Log in</button>
					<button className="getStarted">Get started free</button>
				</div>
			</nav>
		</div >
	);
}