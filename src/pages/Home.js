import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './home.scss';

const Home = () => {
	const [subwayStationNumber, setSubwayStationNumber] = useState([]);
	const [uniqueStationNumber, setUniqueStationNumber] = useState('default');
  const [allStationNames, setAllStationNames] = useState([]);

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

	// Récupération du numéro d'une ligne de métro avec onChange
	const handleSubwayNumber = e => {
		try {
			setUniqueStationNumber(e.target.value);
		} catch (err) {
			console.log(err);
		}
	};

	// Recupération du nom des stations
  useEffect(() => {
		const getStationNames = async () => {
			try {
				const { data } = await axios.get(
					`https://api-ratp.pierre-grimaud.fr/v4/stations/metros/${uniqueStationNumber}`,
				);
				setAllStationNames(data.result.stations);
			} catch (err) {
				console.log(err);
			}
		};
		getStationNames();
	}, [uniqueStationNumber]);

	return (
		<div className="home">
			<div className="mainContainer">
				<div className="container">
					<form>
						<select onChange={e => handleSubwayNumber(e)}>
							<option value="default">Sélectionner une ligne...</option>
							{filterOnlySubwayNumbers?.map(subwayNumber => (
								<option value={subwayNumber} key={subwayNumber}>
									{subwayNumber}
								</option>
							))}
						</select>
						<select>
							<option value="default" disabled hidden>
								Sélectionner une station...
							</option>
							{allStationNames?.map(stationName => (
								<option value={stationName.name} key={stationName.name}>
									{stationName.name}
								</option>
							))}
						</select>
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
