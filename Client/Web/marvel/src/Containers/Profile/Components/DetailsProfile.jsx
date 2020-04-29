import React from "react";

import "../profile.css";
import fundo_marvel from "../../../Assets/Capa/fundo_malvel.jpg";
import FormHero from "../../../Components/Form";

const DetailsProfile = ({
	heroSpecific,
	returnHome,
	series,
	openCloseVisible,
	display,
	visible,
}) => (
	<div className="profile-container">
		<div className="profile-header">
			<img src={fundo_marvel} alt="Marvel Studios" />
			{heroSpecific && (
				<img
					key={heroSpecific.id}
					className="profile-item"
					src={`${heroSpecific.thumbnail.path}/standard_fantastic.${heroSpecific.thumbnail.extension}`}
					alt={heroSpecific.name}
					onClick={() => openCloseVisible(!visible)}
				/>
			)}
		</div>

		<div
			className="profile-form-container"
			style={{ margin: "0 auto", marginTop: 100, display: display }}
		>
			<FormHero returnHome={returnHome} />
		</div>

		<div className="series-container">
			<h1>SÉRIES</h1>

			<div className="series-details">
				{series &&
					series.map((serie, index) => (
						<div key={serie.id}>
							<img
								src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`}
								alt={serie.title}
							/>
						</div>
					))}
			</div>
			<div className="profile-footer">
				<button onClick={returnHome}>HOME</button>
			</div>
		</div>
	</div>
);

export default DetailsProfile;
