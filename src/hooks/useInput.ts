import { useState } from "react";

export enum InputTypes {
  CHECKBOX = "checkbox",
}

export const useInput = <T>(data: T) => {
  const [values, setValues] = useState(data);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues(() => ({
      ...values,
      [event.target.name]:
        event.target.type === InputTypes.CHECKBOX
          ? event.target.checked
          : event.target.value,
    }));
  };
  return {
    handleChange,
    values,
  };
};
