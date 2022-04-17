import React from 'react'
import logo from '../images/react-logo.png'

function Navbar() {
	return (
		<div className='container'>
			<nav>
				<div className='nav__logo'>
					<img src={logo} alt='React logo' className='nav__logo-icon' />
					<h3 className='nav__logo-text'>ReactFacts</h3>
				</div>
				<h4 className='nav__title'>React Course - Project 1</h4>
			</nav>
		</div>
	)
}

export default Navbar
