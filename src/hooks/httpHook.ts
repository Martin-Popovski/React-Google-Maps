import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setLoading] = useState(false);

  const sendRequest = useCallback(async (url) => {
    try {
      setLoading(true);
      const responseData = await url;
      setLoading(false);
      return responseData;
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return { sendRequest, isLoading };
};

export default useHttp;
