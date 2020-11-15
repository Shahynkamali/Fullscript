import { shallow } from "enzyme";
import { ReactElement } from "react";
import AppButton from "./index.tsx";

describe("AppButton", () => {
    it("should render with props ", () => {
        const mockFunction = () => { };
        const mockedProps = {
            children: "Click me!",
            type: "button",
            buttonStyle: "primary",
            onClick: mockFunction,
        };
        const wrapper = shallow(<AppButton {...mockedProps} />);

        expect(wrapper.find("button").prop("type")).toBe("button");
        expect(wrapper.find("button").prop("className")).toBe(`app-button app-button--primary`);
        expect(wrapper.find("button").prop("onClick")).toBe(mockFunction);
    });
});