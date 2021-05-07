import axios from "axios";
import { GET_SONGS, SET_SEARCH } from "./types";

export const getSongs = () => (dispatch, getState) => {
	let { search } = getState().songs;

	const keyword = search.split(" ");
	const key = keyword.join("+");

	const { offset } = getState().songs;

	const url = `https://itunes.apple.com/search?term=${key}&media=music&limit=10&offset=${offset}`;
	axios.get(url).then((res) => {
		dispatch({
			type: GET_SONGS,
			payload: { data: res.data, search },
		});
	});
};

export const setSearch = (text) => (dispatch) => {
	dispatch({
		type: SET_SEARCH,
		payload: text,
	});
};
