import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import { useMatch } from 'react-router-dom'

function App() {

	const match = useMatch('/profile/:userId')

	console.log('match' , match)

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/profile/:userId?" element={<Profile routeMatch={match?.params?.userId} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App
