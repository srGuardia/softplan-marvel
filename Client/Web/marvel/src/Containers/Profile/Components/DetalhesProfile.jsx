import React from "react";

import "../profile.css";
import fundo_marvel from "../../../Assets/Capa/fundo_malvel.jpg";

const DetalhesProfile = ({
	heroSpecific,
	returnHome,
	series,
	visible,
	handleSubmit,
	openVisible,
	closeVisible,
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
					onClick={openVisible}
				/>
			)}
		</div>

		<div
			className="profile-form-container"
			style={{ margin: "0 auto", marginTop: 100, display: visible }}
		>
			<form>
				{heroSpecific && (
					<React.Fragment>
						<label>Name:</label>
						<input type="text" name="name" />

						<label>Description:</label>
						<input type="text" name="description" />

						<button
							htmlType="button"
							className="salvar"
							// onClick={(e) => handleSubmit(e, item.id)}
						>
							Salvar
						</button>
					</React.Fragment>
				)}
			</form>
			<button type="button" className="fechar" onClick={closeVisible}>
				X
			</button>
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

export default DetalhesProfile;
