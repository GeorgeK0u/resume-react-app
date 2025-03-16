// css
import '../assets/styles/portraitPhoto.css'
// img
import portraitSrc from '../assets/imgs/portrait.jpg'

function PortraitPhoto()
{
	return (
		<div id='photo-wrapper'>
			<img id='photo' src={portraitSrc} alt='portrait photo of me'/>
		</div>
	);
}

export default PortraitPhoto;
