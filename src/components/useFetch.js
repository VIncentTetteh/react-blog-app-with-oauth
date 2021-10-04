import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) throw Error('Could not fetch data')
                return res.json();
            })
            .then(getData => {
                setIsLoading(false);
                setData(getData);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false)
            });
    }, []);
    return {data,error,isLoading}
}
 
export default useFetch;