import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";

import DetalhesProfile from "./Components/DetalhesProfile";
import {
	getHeroi,
	listaSeries,
	reset,
	atualizaHeroi,
} from "../../Redux/Actions/marvelActions";
import LoadingGlobal from "../../Components/Loading";

const ProfileContainer = ({
	match: { params },
	history,
	getHeroi,
	heroSpecific,
	loading,
	reset,
	listaSeries,
	series,
}) => {
	const [visible, setVisible] = useState("none");

	useEffect(() => {
		reset();
		const { id } = params;

		getHeroi(id);
		listaSeries(id);
	}, [params, getHeroi, listaSeries, reset]);

	const returnHome = () => {
		history.goBack();
		reset();
	};

	const openVisible = () => {
		setVisible("block");
	};

	const closeVisible = () => {
		setVisible("none");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(e.target);

		const dados = {
			name: e.target.value,
			descricption: e.target.value,
		};
	};

	return (
		<React.Fragment>
			{loading ? (
				<LoadingGlobal />
			) : (
				<DetalhesProfile
					returnHome={returnHome}
					heroSpecific={heroSpecific}
					series={series}
					visible={visible}
					handleSubmit={handleSubmit}
					openVisible={openVisible}
					closeVisible={closeVisible}
				/>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	console.log("state", state);
	return {
		heroSpecific: state.root.heroiSpecific,
		loading: state.root.loading,
		series: state.root.series,
	};
};

export default memo(
	connect(mapStateToProps, { getHeroi, listaSeries, reset, atualizaHeroi })(
		ProfileContainer
	)
);
