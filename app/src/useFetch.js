import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [specializations, setSpecializations] = useState([])
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setLoading(true)
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        axios.get(url)
        .then(res => {
             setLoading(false);
            setData(res?.data);

            

            // console.log("dat===>", dat)
        
            // setSpecializations(res?.data?.specializations);
            //checking for multiple responses for more flexibility 
            //with the url we send in.
            
            // res.data.content && setData(res.data.content);
            // res.content && setData(res.content);
        })
        .catch(err => {
            setLoading(false)
            setError('An error occurred. Awkward..')
        })
        return () => {
            source.cancel();
        }
    }, [url])
  
    return { data,specializations, loading, error }
}
  
  export default useFetch;