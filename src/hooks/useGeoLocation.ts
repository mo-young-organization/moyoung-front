import { useState, useEffect } from 'react';

interface ILocation {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<ILocation>();
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  // 종속성을 주지 않아야 한번만 실행이 된다. => options를 주면 무한 로딩이 이뤄남
  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('기본 데이터로 실행 됩니다.');

      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  return { location, error };
};
