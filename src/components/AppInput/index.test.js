import React from "react";
import { shallow } from "enzyme";
import AppInput from "./index";

describe("AppInput", () => {
    it("should render a input", () => {
        const wrapper = shallow(<AppInput />);
    });

    it("should render with props", () => {
        const mockedProps = {
            placeholder: "placeholder",
            id: "id",
            name: "name",
            value: "value",
        }
        const wrapper = shallow(<AppInput {...mockedProps} />);
        const props = Object.values(mockedProps);
        props.forEach((prop) => {
            expect(wrapper.find("input").prop(prop)).toEqual(prop);
        });
    });
});
