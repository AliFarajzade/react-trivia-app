import { useState, useEffect } from 'react';

const useFetchData = (requestUrl, questionNumber) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const request = await fetch(requestUrl);
                const data = await request.json();
                const [questionData] = data.results;
                setData(questionData);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }

            return () => {
                setData(null);
            };
        };

        getData(requestUrl);
    }, [requestUrl, questionNumber]);

    return {
        data,
        isLoading,
        error,
    };
};

export default useFetchData;
