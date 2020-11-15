import setupIntersectionObserverMock from "../../tests/mocks/IntersectionMock";
import { shallow } from "enzyme"
import AppImage from "./index";

describe("AppImage", () => {
    beforeEach(() => {
        setupIntersectionObserverMock();
    });

    it("should render a div with the intersection observer", () => {
        const wrapper = shallow(<AppImage />);
    });

    it("should render a placeholder first", () => {
        const mockedProps = {
            src: "www.photo.com",
            alt: "a photo",
        };
        const wrapper = shallow(<AppImage {...mockedProps} />);
        expect(wrapper.find(".app-image__placeholder")).toBeTruthy();
    });
});