import axios from "axios";
import md5 from "md5";

function generateApiKey() {
	const keyPublic = "5b972910803bd95c82a58a4840435b52";
	const keyPrivate = "8ad2fedead17bb5a28c431905994d6edc4fea5cf";
	const ts = Date.now();

	const hash = md5(ts + keyPrivate + keyPublic);

	return `ts=${ts}&apikey=${keyPublic}&hash=${hash}`;
}

class MarvelApi {
	constructor() {
		const baseURL = "https://gateway.marvel.com:443/v1/public";
		this.baseURL = baseURL;
	}

	listaHerois(limit) {
		return axios.get(
			`${this.baseURL}/characters?limit=${limit}&${generateApiKey()}`
		);
	}

	getHeroi(idHeroi) {
		return axios.get(
			`${this.baseURL}/characters/${idHeroi}?${generateApiKey()}`
		);
	}

	heroName(name) {
		return axios.get(
			`${this.baseURL}/characters?nameStartsWith=${name}&${generateApiKey()}`
		);
	}

	listaSeries(idHeroi) {
		return axios.get(
			`${this.baseURL}/characters/${idHeroi}/series?${generateApiKey()}`
		);
	}
}

export default new MarvelApi();
