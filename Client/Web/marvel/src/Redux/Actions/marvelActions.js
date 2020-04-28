import {
	LISTA_HEROIS_SUCCESS,
	HEROI_SUCCESS,
	ATUALIZA_HEROI_SUCCESS,
	SEARCH_HEROI_SUCCESS,
	LISTA_SERIES_SUCCESS,
	RESET,
} from "../Constants/marvelConstants";
import MarvelApi from "../../Services/marvelApi";

export function listaHerois(limit) {
	return (dispatch) => {
		MarvelApi.listaHerois(limit).then((response) => {
			dispatch({
				type: LISTA_HEROIS_SUCCESS,
				herois: response,
			});
		});
	};
}

export function getHeroi(idHeroi) {
	return (dispatch) => {
		MarvelApi.getHeroi(idHeroi).then((response) => {
			dispatch({
				type: HEROI_SUCCESS,
				heroi: response,
			});
		});
	};
}

export function atualizaHeroi(idHeroi, dados) {
	return (dispatch) => {
		dispatch({
			type: ATUALIZA_HEROI_SUCCESS,
			idHeroi,
			dados,
		});
	};
}

export function heroName(name) {
	return (dispatch) => {
		MarvelApi.heroName(name).then((response) => {
			dispatch({
				type: SEARCH_HEROI_SUCCESS,
				herois: response,
			});
		});
	};
}

export function listaSeries(idHeroi) {
	return (dispatch) => {
		MarvelApi.listaSeries(idHeroi).then((response) => {
			dispatch({
				type: LISTA_SERIES_SUCCESS,
				series: response,
			});
		});
	};
}

export function reset() {
	return (dispatch) => {
		dispatch({
			type: RESET,
		});
	};
}
