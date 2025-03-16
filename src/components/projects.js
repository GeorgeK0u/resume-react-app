// css
import '../assets/styles/projects.css'

function Projects()
{
	const projects = [
		{
			id: 0,
			name: 'Account Manager',
			desc: 'Windows & Android account manager app',
			link: 'https://github.com/GeorgeK0u/acc-manager'
		},
		{
			id: 1,
			name: 'Embedded YT',
			desc: 'Web app that uses the YouTube Data API to search and play YT videos',
			link: 'https://github.com/GeorgeK0u/embedded-yt'
		},
		{
			id: 2,
			name: 'Music Streaming App',
			desc: 'C++ music streaming console app with DirectSound',
			link: 'https://github.com/GeorgeK0u/music-streaming-app'
		},
		{
			id: 3,
			name: 'This Website',
			desc: 'Resume website with React.js',
			link: 'https://github.com/GeorgeK0u/resume-react-app'
		}
	];
	const projectItems = projects.map((project) =>
			{
				return (
					<li key={project.id} className='project-item-wrapper'>
						<a className='project-item-name project-link' href={project.link} target='_blank' title='Open GitHub repo in new tab'>{project.name}</a>
						<div className='project-item-desc'>{project.desc}</div>
					</li>
				);
			}
		);
	return (
		<div id='projects-wrapper'>
			<h2 className='subheader'>Projects</h2>
			<ul id='project-items-wrapper'>{projectItems}</ul>
		</div>
	);
}

export default Projects;
