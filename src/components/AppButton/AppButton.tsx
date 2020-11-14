import React from "react";
import PropTypes from "prop-types";

export interface Props {
  children?: React.ReactNode;
}

const AppButton: React.FC = ({ children }) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button type="button" className="app-button">
        {children}
      </button>
    </span>
  );
};

export default AppButton;

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
};
