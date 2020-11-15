import React from "react";
// import AppButton from "./components/AppButton";
// import AppInput from "./components/AppInput";
import AppWrapper from "./components/AppWrapper";
// import { useInput } from "./hooks/useInput";
// import Unsplash from 'unsplash-js';

// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers
// const unsplash = new Unsplash({ accessKey: 'APP_ACCESS_KEY' });

const App: React.FC = () => {
  // interface Form {
  //   email: string;
  // }

  // const [counter, setCounter] = useState(0);
  // const { values, handleChange } = useInput<Form>({ email: "" });
  // const { email } = values;
  const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <AppWrapper column={6}>
        {foo.map((number: number) => (
          <div key={number} className="w-full h-full bg-red-500">
            {number}
          </div>
        ))}
      </AppWrapper>
      {/* <AppButton
        onClick={() => setCounter((prevCount: number) => prevCount + 1)}
      >
        hsad
      </AppButton> */}
      {/* <p>{counter}</p> */}
      {/* <AppInput
        value={email}
        placeholder="email"
        id="email"
        name="email"
        onChange={handleChange}
      /> */}
    </div>
  );
};

export default App;
