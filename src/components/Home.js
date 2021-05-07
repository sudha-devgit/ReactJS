import React from "react";
import Searchbar from "./Searchbar";
import List from "./List";

import isEmpty from "is-empty";

import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { getSongs } from "../actions/song";

function Home(props) {
	const fetchData = () => {
		console.log("calling");
		props.getSongs();
	};
	return (
		<div className="container">
			<Searchbar />
			{!props.data.loading && !isEmpty(props.data.songs) ? (
				<InfiniteScroll
					dataLength={props.data.songs.length}
					next={fetchData}
					hasMore={true}
				>
					{props.data.songs.map((song) => {
						return <List key={song.trackId} data={song} />;
					})}
				</InfiniteScroll>
			) : (
				<div className="output">No result</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	data: state.songs,
});

export default connect(mapStateToProps, { getSongs })(Home);
