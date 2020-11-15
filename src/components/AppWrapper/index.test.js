import React from "react";
import { shallow } from "enzyme";
import AppWrapper from "./index";
import AppButton from "../AppButton/index";

describe("AppInput", () => {
    const mockFunction = () => { }
    const buttonProps = {
        children: "Click me!",
        type: "button",
        buttonStyle: "primary",
        onClick: mockFunction,
    };

    const mockedProps = {
        column: 3,
        gap: 4,
        children: <AppButton {...buttonProps} />
    };

    it("renders HTML input element", () => {
        const wrapper = shallow(<AppWrapper />);
    });

    it("renders child component", () => {
        const wrapper = shallow(<AppWrapper {...mockedProps} />);
        expect(wrapper.find(AppButton).exists()).toBe(true);
    });
});
