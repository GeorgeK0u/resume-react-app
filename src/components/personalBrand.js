import React from 'react'
// css
import '../assets/styles/personalBrand.css'
// link imgs
import linkedinIcon from '../assets/imgs/linkedin-icon.jpeg'
import githubIcon from '../assets/imgs/github-icon.jpeg'

function startTypewriteInterval()
{
	function convertLenToSpaces(len)
	{
		let str = '';
		for (let i = 0; i < len; i++)
		{
			str += ' ';
		}
		return str;
	}
	const nameTypewriteEl = document.querySelector('#name-typewrite-effect');
	const cursorCh = '|';
	const name = 'Giorgos Kountouris';
	nameTypewriteEl.textContent = cursorCh+convertLenToSpaces(name.length-1);
	let curCursorIndex = 0;
	const typewriteIntv = setInterval(() =>
		{
			curCursorIndex++;
			let newStr = name.substring(0, curCursorIndex) + cursorCh;
			nameTypewriteEl.textContent = newStr+convertLenToSpaces(name.length-newStr.length); 
			if (curCursorIndex == name.length)
			{
				// Remove cursor char
				nameTypewriteEl.textContent = name;
				clearInterval(typewriteIntv);
			}
		}
		, 250);
}

class PersonalBrand extends React.Component
{
	componentDidMount()
	{
		startTypewriteInterval();
	}
	render()
	{
		return (
			<div id='personal-brand-wrapper'>
				<pre id='name-typewrite-effect' className='header'></pre>
				<div id='links'>
					<a className='link' href='https://www.linkedin.com/in/giorgos-kountouris' target='_blank'>
						<img className='link-icon' src={linkedinIcon} alt='LinkedIn'/>
					</a>
					<a className='link' href='https://github.com/GeorgeK0u' target='_blank'>
						<img className='link-icon' src={githubIcon} alt='GitHub'/>
					</a>
				</div>
			</div>
		);
	}
}

export default PersonalBrand;
