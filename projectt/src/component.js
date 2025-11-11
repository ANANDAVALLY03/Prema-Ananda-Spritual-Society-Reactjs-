import { response } from 'express';
import React, {useState, useEffect }from 'react';
const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect
  useEffect(() => {
    fetch('hhtp://jsonplaceholder,typicode.com/todos')
    .then(response =>){
      if (!response.ok){
        throw new Error('Netwok response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
      setLoading
    }
    }
  })
}
