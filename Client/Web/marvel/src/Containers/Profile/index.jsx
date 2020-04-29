import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";

import DetailsProfile from "./Components/DetailsProfile";
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
	const [visible, setVisible] = useState(false);
	const [display, setDisplay] = useState("none");

	useEffect(() => {
		reset();
		const { id } = params;
		listaSeries(id);
	}, [params, getHeroi, listaSeries, reset]);

	const returnHome = () => {
		history.goBack();
	};

	const openCloseVisible = (value) => {
		if (value) {
			setVisible(true);
			setDisplay("block");
		} else {
			setVisible(false);
			setDisplay("none");
		}
	};

	return (
		<React.Fragment>
			{loading ? (
				<LoadingGlobal />
			) : (
				<DetailsProfile
					returnHome={returnHome}
					heroSpecific={heroSpecific}
					series={series}
					display={display}
					visible={visible}
					openCloseVisible={openCloseVisible}
				/>
			)}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
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
