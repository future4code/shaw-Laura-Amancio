import axios from "axios";
import { useState, useEffect } from "react";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  const getData = () =>{
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  }


  useEffect(() => {
    getData()
  }, [url]);

  return([data, getData])
};


export default useRequestData;