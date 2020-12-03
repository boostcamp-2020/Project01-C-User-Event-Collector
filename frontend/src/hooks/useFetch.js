import { useState, useEffect } from 'react';

const options = (method, data) => ({
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
});

function useFetch(callback, url, method, body) {
    const [loading, setLoading] = useState(true);
    const option = options(method, body);

    const fetchData = async () => {
        const response = await fetch(url, option);
        const data = await response.json();
        callback(data.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return loading;
}


export default useFetch;