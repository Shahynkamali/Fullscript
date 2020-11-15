import { useEffect, useState } from "react";

interface State {
  data: unknown;
  loading: boolean;
}

const useFetch = (url: string) => {
  const [state, setState] = useState<State>({ data: null, loading: true });
  useEffect(() => {
    setState((_) => ({ data: null, loading: true }));
    fetch(url)
      .then((x: any) => x.json())
      .then((y) => setState((_) => ({ data: y, loading: false })));
  }, [url]);
  return state;
};

export default useFetch;
