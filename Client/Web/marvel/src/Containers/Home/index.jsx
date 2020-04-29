import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";

import LoadingGlobal from "../../Components/Loading";
import {
	listaHerois,
	heroName,
	reset,
	getHeroi,
} from "../../Redux/Actions/marvelActions";
import ListHeros from "./Components/ListHeros";

const HomeContainer = ({
	history,
	listaHerois,
	heroName,
	dataHerois,
	total,
	loading,
	reset,
	getHeroi,
	heroSpecific,
}) => {
	const [limit, setLimit] = useState(20);
	const [search, setSearch] = useState("");

	const pageProfile = (id) => {
		if (heroSpecific === null) {
			getHeroi(id);
			history.push(`/profile/${id}`);
		} else if (heroSpecific && heroSpecific.id === id) {
			history.push(`/profile/${heroSpecific.id}`);
		} else {
			history.push(`/profile/${id}`);
			getHeroi(id);
		}
		reset();
	};

	useEffect(() => {
		dataHerois.length === 0 && listaHerois(limit);
	}, [limit, listaHerois, dataHerois]);

	const getLimitHeroes = async () => {
		reset();
		const newValue = dataHerois.length + 20;

		listaHerois(newValue);
		setLimit(newValue);
	};

	const searchHero = async (name) => {
		setSearch(name);
		if (name) {
			heroName(name);
		} else {
			reset();
			listaHerois(20);
		}
	};

	return (
		<React.Fragment>
			{loading ? (
				<LoadingGlobal />
			) : (
				<ListHeros
					search={search}
					heroes={dataHerois}
					limit={limit}
					total={total}
					getLimitHeroes={getLimitHeroes}
					pageProfile={pageProfile}
					searchHero={searchHero}
				/>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		loading: state.root.loading,
		dataHerois: state.root.herois,
		total: state.root.total,
		heroSpecific: state.root.heroiSpecific,
	};
};

export default memo(
	connect(mapStateToProps, { listaHerois, heroName, reset, getHeroi })(
		HomeContainer
	)
);
