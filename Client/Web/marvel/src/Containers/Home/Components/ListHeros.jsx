import React from "react";

import "../home.css";

const ListHeros = ({
	search,
	heroes,
	limit,
	total,
	pageProfile,
	getLimitHeroes,
	searchHero,
}) => (
	<div className="home-container">
		<div className="home-title">
			<h1>HERÓIS</h1>
			<input
				type="text"
				placeholder="Busque pelo nome do herói..."
				value={search}
				onChange={(e) => searchHero(e.target.value)}
			/>
		</div>

		<div className="marvel-container">
			{heroes &&
				heroes.map((hero, index) => (
					<div
						className="marvel-cards"
						key={hero.id || index}
						data-testid="marvel-cards"
					>
						<div className="marvel-content">
							<div className="marvel-perfil">
								<img
									src={`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`}
									alt={hero.name}
								/>
							</div>
							<div className="marvel-details">
								<div className="info">
									<h3>Name:</h3>
									<p>{hero.name}</p>

									<h3>Description:</h3>
									<p>
										{hero.description
											? hero.description
											: "Não possui descrição"}
									</p>
								</div>

								<div className="marvel-footer">
									<button
										onClick={() => pageProfile(hero.id)}
										disabled={limit === total}
									>
										Perfil
									</button>
								</div>
							</div>
						</div>
					</div>
				))}

			{!search && (
				<button
					className="carregar"
					onClick={getLimitHeroes}
					disabled={limit === total}
				>
					+
				</button>
			)}
		</div>
	</div>
);

export default ListHeros;
