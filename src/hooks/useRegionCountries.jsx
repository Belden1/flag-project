import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const useRegionCountries = (region) => {
  const allCountries = useLoaderData();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (region === null) {
          setCountries(allCountries);
          setLoading(false);
          return;
        }

        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        if (!res.ok) {
          throw Error('Failed to load region data');
        }

        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, [region]);

  return { countries, loading };
};

export default useRegionCountries;
