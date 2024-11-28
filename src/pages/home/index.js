import React from 'react'
import Header from '../../components/header.js'
import '../../assets/styles/home.css'
import portraitSrc from '../../assets/imgs/portrait.jpg'
import linkedinIcon from '../../assets/imgs/linkedin-icon.jpeg'
import githubIcon from '../../assets/imgs/github-icon.jpeg'

function startTypewriteInterval()
{
	const nameTypewriteEl = document.querySelector('#name-typewrite-effect'), cursorCh = '|';
	nameTypewriteEl.textContent = cursorCh;
	const name = 'Giorgos Kountouris';
	let curCursorIndex = 0;
	const typewriteIntv = setInterval(() =>
		{
			curCursorIndex++;
			nameTypewriteEl.textContent = name.substring(0, curCursorIndex) + cursorCh;
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
			<section id='personal-brand-section' className='centered-v'>
				<img className='photo' src={portraitSrc} alt='me'/>
				<div id='name-typewrite-effect' className='typewrite-effect'></div>
				<div className='contact-info'>
					<div id='mail-wrapper'>
						<span>giorgos</span>
						<span>.kountouris0</span>
						<span>@gmail.com</span>
					</div>
					<div id='phone-wrapper'>
						<span>(+30) </span>
						<span>697</span>
						<span>-</span>
						<span>167</span>
						<span>-</span>
						<span>1477</span>
					</div>
				</div>
				<div className='links nav-bar'>
					<a className='link' href='https://www.linkedin.com/in/giorgos-kountouris' target='_blank'>
						<img className='link-icon' src={linkedinIcon} alt='LinkedIn'/>
					</a>
					<a className='link' href='https://github.com/GeorgeK0u' target='_blank'>
						<img className='link-icon' src={githubIcon} alt='GitHub'/>
					</a>
				</div>
			</section>
		);
	}
}

function Projects()
{
	const projects = [
		{
			id: 0,
			name: 'Account Manager',
			gist: 'A cool app to save all website login info and copy it fast and efficiently.'
		}
	];
	const projectItems = projects.map((project) =>
			{
				return (
					<li key={project.id} className='personal-project-item'>
						<div className='personal-project-name'>{project.name}</div>
						<div className='personal-project-gist'>{project.gist}</div>
					</li>
				);
			}
		);
	return (
		<>
			<div className='header'>Personal projects</div>
			<ul>{projectItems}</ul>
		</>
	);
}

function Home()
{
	return (
		<>
			<Header />
			<PersonalBrand />
			<Projects />
		</>
	);
}

export default Home;
