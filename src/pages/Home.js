import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.scss';

const Home = () => {
  const [subwayStationNumber, setSubwayStationNumber] = useState([]);

	// Récupération du numéro des stations de métro depuis l'API
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

  // Map des numéros de stations de métro pour ne récupérer que les nombres
  const mapSubwayNames = subwayStationNumber.map(subwayName => subwayName.code);
  const filterOnlySubwayNumbers = mapSubwayNames.filter(Number);

	return (
		<div className="home">
			<div className="mainContainer">
				<div className="container">
					<form>
						<select>
							<option>
								Sélectionner une ligne...
							</option>
							{filterOnlySubwayNumbers.map(subwayNumber => (
								<option value={subwayNumber} key={subwayNumber}>{subwayNumber}</option>
							))}
						</select>
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
