import { useEffect, useState } from "react";
import axios from 'axios';

const useFilters = () => {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        Object.keys(filters).forEach((key) => {
          params.append(key, filters[key] || '');
        });

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:8000/filter?${params.toString()}`,
          headers: {}
        };

        const response = await axios.request(config);

        console.log("Respuesta", JSON.stringify(response.data));
        setResponseData(response.data);

      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return { data, handleFilterChange, responseData };
};

export default useFilters;
