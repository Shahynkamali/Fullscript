import React, { useState } from "react";
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
    <div className="max-w-7xl w-full my-0 mx-auto px-4">
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
      {data && data.errors && <p>{data.errors}</p>}
      <AppWrapper column={4}>
        {!data?.errors &&
          data?.results &&
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
        {data && !data.results && <p>No results found!</p>}
        {loading && <p>Loading...</p>}
      </AppWrapper>
    </div>
  );
};

export default App;
