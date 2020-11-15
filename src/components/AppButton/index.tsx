import React from "react";

interface Props {
  children: React.ReactNode;
  type?: Types;
  buttonStyle?: Styles;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type Types = "button" | "submit" | "reset" | undefined;

type Styles = "primary" | "secondary";

const AppButton: React.FC<Props> = ({
  children,
  type = "button",
  buttonStyle = "primary",
  onClick,
}) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        onClick={onClick}
        type={type}
        className={`app-button app-button--${buttonStyle}`}
      >
        {children}
      </button>
    </span>
  );
};

export default AppButton;
