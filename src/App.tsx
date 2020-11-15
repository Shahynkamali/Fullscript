import React, { useEffect, useState } from "react";
import useSplash from "./hooks/useSplash";
import AppInput from "./components/AppInput";
import AppImage from "./components/AppImage";
import AppWrapper from "./components/AppWrapper";
import { useInput } from "./hooks/useInput";
import AppButton from "./components/AppButton";

interface State {
  collection: string;
}

const App: React.FC = () => {
  const { values, handleChange } = useInput<State>({ collection: "" });
  const [searchBy, setSearchBy] = useState("dog");
  const { collection } = values;
  const { data, loading } = useSplash(searchBy);
  const handleClick = (query: string): void => {
    setSearchBy(query);
  };

  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="m-2">
          <AppInput
            name="collection"
            id="collection"
            onChange={handleChange}
            value={collection}
          />
        </div>
        <div className="m-2">
          <AppButton
            value={searchBy}
            type="button"
            onClick={() => handleClick(collection)}
          >
            Search
          </AppButton>
        </div>
      </div>
      <AppWrapper column={4}>
        {data &&
          data.results.length &&
          data.results.map((image: any) => (
            <div key={image.id}>
              <AppImage
                src={
                  image.cover_photo
                    ? image.cover_photo.urls.regular
                    : `https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png`
                }
                alt={
                  image.cover_photo
                    ? image.cover_photo.alt_description
                    : "image not found!"
                }
              />
            </div>
          ))}
        {data && !data.results.length && <p>No results found!</p>}
        {loading && <p>Loading...</p>}
      </AppWrapper>
    </div>
  );
};

export default App;
