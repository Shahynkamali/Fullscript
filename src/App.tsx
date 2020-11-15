import React from "react";
import useSplash from "./hooks/useSplash";
import AppInput from "./components/AppInput";
import AppImage from "./components/AppImage";
import AppWrapper from "./components/AppWrapper";
import { useInput } from "./hooks/useInput";

interface State {
  collection: string;
}

const App: React.FC = () => {
  // const [counter, setCounter] = useState(0);
  const { values, handleChange } = useInput<State>({ collection: "" });
  const { data, loading } = useSplash("dogs");

  // const { email } = values;

  return (
    <AppWrapper column={4}>
      {data &&
        data.results.map((image: any) => (
          <div key={image.id} className="w-full h-full object-cover">
            <AppImage
              src={image.cover_photo.urls.regular}
              alt={image.cover_photo.alt_description}
            />
          </div>
        ))}
      {loading && <p>Loading...</p>}
    </AppWrapper>
  );
};

export default App;
