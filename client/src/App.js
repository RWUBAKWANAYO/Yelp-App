import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantdetailsPage from './routes/RestaurantdetailsPage';
import UpdatePage from './routes/UpdatePage';
const App = () => {
	return (
		<RestaurantsContextProvider>
      <div>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/restaurants/:id'
						component={RestaurantdetailsPage}
					/>
					<Route exact path='/restaurants/:id/update' component={UpdatePage} />
				</Switch>
			</Router>
		</div>
    </RestaurantsContextProvider>
	);
};

export default App;
