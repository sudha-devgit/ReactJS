import { GET_SONGS, SET_SEARCH } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
	loading: true,
	offset: 0,
	songs: [],
	search: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_SONGS:
			return {
				...state,
				loading: isEmpty(action.payload),
				songs: state.songs.concat(action.payload.data.results),
				offset: state.offset + 10,
			};
		case SET_SEARCH:
			return {
				...state,
				songs: [],
				search: action.payload,
			};

		default:
			return state;
	}
}
