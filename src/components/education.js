// css
import '../assets/styles/education.css'
// graduation hat img
import graduationHatIcon from '../assets/imgs/graduation-hat-icon.png'

function Education()
{
	return (
		<div id='education-wrapper'>
			<div className='education-item-wrapper'>
				<div className='education-item-header-wrapper'>
					<img className='education-item-icon' src={graduationHatIcon} alt='education icon'/>
					<h2 className='education-item-date'>2020 - 2023</h2>
				</div>
				<h2 className='education-item-title'>
					BSc (Hons) in Computer Science
				</h2>
				<h3 className='education-item-place'>
					Mediterranean College, Athens
				</h3>
			</div>
		</div>
	);
}

export default Education;
