import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index.js'
import Blog from './pages/blog/index.js'

function App()
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/blog' element={<Blog />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
