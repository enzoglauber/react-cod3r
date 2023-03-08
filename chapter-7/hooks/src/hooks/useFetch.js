import { useEffect, useState } from 'react';

export default function useFetch(url, method = 'get') {
  const [response, setResponse] = useState({
    data: null,
    loading: true
  });

  useEffect(() => {
    fetch(url, { method })
      .then(response => response.json())
      .then(data =>
        setResponse({
          data,
          loading: false
        })
      );
  }, [url, method]);

  return response;
}
