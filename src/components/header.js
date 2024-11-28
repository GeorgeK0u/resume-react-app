import '../assets/styles/helper.css'
import '../assets/styles/header.css'
import { is_nav_item_active, go_to } from '../utils/helper.js'

function Header()
{
	return (
		<header>
			<nav className='nav-bar'>
				<button className='header-nav-item' onClick={() => go_to('/')} disabled={is_nav_item_active('/')}>Home</button>
			</nav>
		</header>
	);
}

export default Header;
