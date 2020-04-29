import React from "react";
import { render, waitForElement } from "@testing-library/react";

import ListHeros from "../Containers/Home/Components/ListHeros";

import marvelApi from "../Services/marvelApi";

describe("Realizando o teste do Component de ListHeros", () => {
	it("Fazendo requisição na API, e preenchendo o Component", async () => {
		const response = await marvelApi.listaHerois(20);
		render(<ListHeros heroes={response.data.data.results} />);
	});
});
