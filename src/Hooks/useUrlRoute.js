
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'


const useUrlRoute = (url) => {
    let [getTopLive, setTopLive] = useState([]);
    const dataFetchedRef = useRef(false);

    const getTopLiveNews = async () => {
        const { data } = await axios.get(url)
        if (data.status == "ok")
            setTopLive(data.articles)
    }
    useEffect(() => {
        if (dataFetchedRef.current) { return; }
        else {
            dataFetchedRef.current = true;
            getTopLiveNews();
        }
    }, [])

    return {getTopLive}
}
export default useUrlRoute