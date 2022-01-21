import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Details from './components/Details';
import Users from './components/Users';

function App() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get(`https://api.github.com/users`)
			.then(response => {
				let d = response.data.slice(0, 10);
				d = d.sort((a, b) => a.login.localeCompare(b.login));
				console.log(d);
				setUsers(d);
			});
	}, []);

	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route exact path='/' element={<Users users={users} />} />
					<Route path='/details/:id' element={<Details />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
