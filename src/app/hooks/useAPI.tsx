import axios from 'axios';
import { useState, useEffect } from 'react';

 interface IuseAPIProps {
  API_URL: string,
  method: string,
  headers: object
}

export function useAPI (props: IuseAPIProps) {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const postApiData = () => {
    axios.post(props.API_URL)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    postApiData();
  }, []);

  return {data, loading, error};

};