import { useEffect, useState } from "react";
import { API_KEY, CONTEXT_KEY } from "./keys";

const useGoogleSearch = (textString) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`;
        const fetchData = () => {
            fetch(URL).then(response => response.json()).then(result => setData(result));
        }
        fetchData();
        // eslint-disable-next-line
    }, [textString]);

    return { data }
}

export default useGoogleSearch;