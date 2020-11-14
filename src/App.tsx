import React, { useState } from "react";
import AppButton from "./components/AppButton";
// import Unsplash from 'unsplash-js';

// TODO: Replace "APP_ACCESS_KEY" with your own key, which
// can be generated here: https://unsplash.com/developers
// const unsplash = new Unsplash({ accessKey: 'APP_ACCESS_KEY' });
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <AppButton
        onClick={() => setCounter((prevCount: number) => prevCount + 1)}
      >
        hsad
      </AppButton>
      {counter}
    </div>
  );
};

export default App;
