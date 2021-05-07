import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { getSongs, setSearch } from "../actions/song";
function Searchbar(props) {
	const [text, setSearchtext] = useState("");

	const fetchData = () => {
		props.setSearch(text);
		props.getSongs();
	};

	function handleSearchChange(e) {
		setSearchtext(e.target.value);
	}
	return (
		<form className="searchbar">
			<TextField
				id="standard-basic"
				label="Standard"
				onChange={handleSearchChange}
				className="searchbar-input"
			/>
			<Button variant="contained" onClick={fetchData} id="button">
				Search
			</Button>
		</form>
	);
}

const mapStateToProps = (state) => ({
	songs: state.songs,
});

export default connect(mapStateToProps, { getSongs, setSearch })(Searchbar);
