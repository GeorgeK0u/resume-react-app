// components
// header
import Header from '../components/header.js'
// portrait photo
import PortraitPhoto from '../components/portraitPhoto.js'
// personal brand
import PersonalBrand from '../components/personalBrand.js'
// education
import Education from '../components/education.js'
// projects
import Projects from '../components/projects.js'
// home css
import '../assets/styles/home.css'

function Resume()
{
	return (
		<div id='resume-wrapper'>
			<PortraitPhoto />
			<div id='details-wrapper'>
				<PersonalBrand />
				<Education />
				<Projects />
			</div>
		</div>
	);
}

function Home()
{
	return (
		<>
			<Header />
			<Resume />
		</>
	);
}

export default Home;
