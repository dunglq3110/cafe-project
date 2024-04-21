import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (stringUrl) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('process');

    useEffect(() => {
        axios.get(stringUrl)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setData(response.data);
                    setStatus('finish');
                } else {
                    setStatus('empty');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus('error');
            });
    }, [stringUrl]);

    return [data, status, setData];
}

export default useFetch;
