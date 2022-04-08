import React, { useState,useContext } from 'react';
import RestaurantsFinder from '../APIS/RestaurantsFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurants = () => {
    const {addRestaurant} = useContext(RestaurantsContext)
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [price_range, setPrice_range] = useState('Price Range');

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
           const response = await RestaurantsFinder.post('/', {
            name,
            location,
            price_range
        })
        addRestaurant(response.data.data.restaurant)
        }
        catch(err){
            console.log(err)
        }
    }
	return (
		<div className='add'>
			<input
				type='text'
				placeholder='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='text'
				placeholder='location'
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<select
				value={price_range}
				onChange={e => setPrice_range(e.target.value)}
			>
				<option disabled value={price_range}>{price_range}</option>
				<option value='1'>$</option>
				<option value='2'>$$</option>
				<option value='3'>$$$</option>
				<option value='4'>$$$$</option>
				<option value='5'>$$$$$</option>
			</select>
			<button type="submit" onClick={handleSubmit}>Add</button>
		</div>
	);
};

export default AddRestaurants;
