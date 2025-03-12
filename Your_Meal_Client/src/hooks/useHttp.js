import { useCallback, useState, useEffect } from "react";


async function sendHttpRequest (url, config) {
    const res = await fetch(url, config);

    const resData = await res.json();

    if (!res.ok) {
        throw new Error (
            resData.message || "Something went wrong, failed to send request"
        );
    }

    return resData;
}

export default function useHttp (url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function clearData() {
        setData(initialData);
    }

    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(false);
        try {
            const resData = await sendHttpRequest (url, {...config, body: data});
            setData(resData);
        } catch (error) {
            setError(error.message || 'Something went wrong !');
        }
        setIsLoading(true);
    }, [url, config]);

    useEffect(() => {
        if ((config && (config.method === 'GET' || !config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    }
}