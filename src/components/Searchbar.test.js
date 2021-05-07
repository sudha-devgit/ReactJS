import React from "react";
import { shallow, mount } from "enzyme";
import Searchbar from "./Searchbar";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import "../setupTest";

const mockStore = configureMockStore();
const store = mockStore({});

describe("SearchBar Component", () => {
	it("should render correctly", () => {
		const component = shallow(
			<Provider store={store}>
				<Searchbar />
			</Provider>
		);

		expect(component).toMatchSnapshot();
	});
});
