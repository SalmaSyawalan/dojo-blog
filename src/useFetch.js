import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('before enter useEffect ' + url)
    useEffect(() => {
        console.log('enter useEffect')
        setTimeout(() =>{
            fetch(url)
                .then(res => {
                    if(!res.ok){   //when the endpoint still give the response but not the desired response. For example, happened when the json server is on but the path is wrong
                        throw Error('could not fetch data from that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                })
                .catch(err => {     //when unable to fetch. When json server is off, that port become unavailable. By that, the app can't fetch the data
                    setLoading(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);

    return { data, isLoading, error }; //curly brackets = obj. but you can also use [ ]
}

export default useFetch;