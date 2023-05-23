import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';


function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/aboutme" element={<Profile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
