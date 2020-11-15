import { useEffect, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import Response from "../../node_modules/@types/unsplash-js";

type UnSplashResponse = Response & { results: [] };

interface State {
  data: UnSplashResponse | null;
  loading: boolean;
}

const API_KEY = process.env.REACT_APP_API_KEY as string;

const unsplash = new Unsplash({ accessKey: API_KEY });

const getData = (collection: string) => {
  return unsplash.search.collections(collection, 1, 30).then(toJson);
};

const useSplash = (collection: string) => {
  const [state, setState] = useState<State>({ data: null, loading: true });
  useEffect(() => {
    setState(() => ({ data: null, loading: true }));
    getData(collection).then((json) => {
      setState(() => ({ data: json, loading: false }));
    });
  }, [collection]);

  return state;
};

export default useSplash;
