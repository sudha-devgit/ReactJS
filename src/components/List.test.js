import React from "react";
import { shallow, mount } from "enzyme";
import List from "./List";

import "../setupTest";

describe("List Component", () => {
	it("should render correctly with props", () => {
		const data = {
			artistName: "Hrithik Naha",
			trackName: "Neil",
			releaseDate: new Date(),
			trackPrice: 12,
		};
		const component = mount(<List data={data} />);
		expect(component).toMatchSnapshot();
	});
});
