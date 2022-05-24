import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.scss';

const Home = () => {
  const [subwayStationNumber, setSubwayStationNumber] = useState([]);

	// Récupération du numéro des stations
  useEffect(() => {
		const getSubwayStationNumbers = async () => {
			try {
				const { data } = await axios.get(
					'https://api-ratp.pierre-grimaud.fr/v4/lines/metros',
				);
				setSubwayStationNumber(data.result.metros);
			} catch (err) {
				console.log(err);
			}
		};
		getSubwayStationNumbers();
	}, []);

  console.log(subwayStationNumber);

	return (
		<div className="home">
			<div className="mainContainer">
				<div className="container">
					<form>
						<select>test</select>
						<select>test</select>
					</form>
					<div className="results">
						<p>Résultats</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
