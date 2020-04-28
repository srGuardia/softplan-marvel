import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";

import LoadingGlobal from "../../Components/Loading";
import {
	listaHerois,
	heroName,
	reset,
} from "../../Redux/Actions/marvelActions";
import ListaHerois from "./Components/ListaHerois";

const HomeContainer = ({
	history,
	listaHerois,
	heroName,
	dataHerois,
	total,
	loading,
	reset,
}) => {
	const [limit, setLimit] = useState(20);
	const [search, setSearch] = useState("");

	const pageProfile = (id) => {
		history.push(`/profile/${id}`);
		reset();
	};

	useEffect(() => {
		listaHerois(limit);
	}, [limit, listaHerois]);

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
				<ListaHerois
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
	};
};

export default memo(
	connect(mapStateToProps, { listaHerois, heroName, reset })(HomeContainer)
);
