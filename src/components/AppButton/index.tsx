import React from "react";

interface Props {
  children: React.ReactNode;
  type?: Types;
  buttonStyle?: Styles;
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type Types = "button" | "submit" | "reset" | undefined;

type Styles = "primary" | "secondary";

const AppButton: React.FC<Props> = ({
  children,
  type = "button",
  buttonStyle = "primary",
  onClick,
  value,
}) => {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        value={value}
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
