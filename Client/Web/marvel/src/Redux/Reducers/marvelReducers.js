import {
	LISTA_HEROIS_SUCCESS,
	HEROI_SUCCESS,
	ATUALIZA_HEROI_SUCCESS,
	SEARCH_HEROI_SUCCESS,
	LISTA_SERIES_SUCCESS,
	RESET,
} from "../Constants/marvelConstants";

const initialValues = {
	loading: true,
	herois: [],
	total: 0,
	series: [],
	heroiSpecific: null,
};

export default function marvelReducer(state = initialValues, action) {
	switch (action.type) {
		case LISTA_HEROIS_SUCCESS:
			return {
				...state,
				loading: false,
				herois: action.herois.data.data.results,
				total: action.herois.data.data.total,
			};

		case HEROI_SUCCESS:
			return {
				...state,
				loading: false,
				heroiSpecific: action.heroi.data.data.results[0],
			};

		case SEARCH_HEROI_SUCCESS:
			return {
				...state,
				loading: false,
				herois: action.herois.data.data.results,
				total: action.herois.data.data.total,
			};

		case ATUALIZA_HEROI_SUCCESS: {
			const newObj = Object.assign(state.heroiSpecific, action.dados);
			const heroiList = state.herois;
			const index = heroiList.findIndex((item) => item.id === newObj.id);

			heroiList.splice(index, 1, newObj);

			return {
				...state,
				loading: false,
				herois: heroiList,
				heroiSpecific: newObj,
			};
		}

		case LISTA_SERIES_SUCCESS:
			return {
				...state,
				loading: false,
				series: action.series.data.data.results,
			};

		case RESET:
			return { ...state, loading: true };

		default:
			return state;
	}
}
