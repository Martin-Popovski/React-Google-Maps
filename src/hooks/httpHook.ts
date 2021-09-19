import { useState } from "react";

const useHttp = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = async (url: Promise<any>) => {
    try {
      setLoading(true);
      const responseData = await url;
      setLoading(false);

      return responseData;
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  }

  return { sendRequest, isLoading, error };
};

export default useHttp;
