import React, { useEffect, useContext } from 'react';
import RestaurantsFinder from '../APIS/RestaurantsFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantsList = (props) => {
	const { restaurants, setRestaurants } = useContext(RestaurantsContext);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantsFinder.get('/');
				setRestaurants(response.data.data.restaurants);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);
	return (
		restaurants.length>0 && 
			<div>
				<table>
					<thead>
						<tr>
							<th>Restaurants</th>
							<th>Location</th>
							<th>Price Range</th>
							<th>Ratings</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{restaurants.map((restaurant) => {
							return (
								<tr key={restaurant.id}>
									<td>{restaurant.name}</td>
									<td>{restaurant.location}</td>
									<td>{'$'.repeat(restaurant.price_range)}</td>
									<td>Reviews</td>
									<td>
										<button>Update</button>
									</td>
									<td>
										<button>Delete</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		
	);
};

export default RestaurantsList;
