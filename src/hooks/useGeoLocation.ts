import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { myLocationStatus } from '../store/reducers/myLocation';

export const useGeoLocation = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    dispatch(
      myLocationStatus({
        mylocationX: longitude,
        mylocationY: latitude,
      }),
    );
  };

  const handleError = (err: GeolocationPositionError) => {
    dispatch(
      myLocationStatus({
        mylocationX: 126.75993318746,
        mylocationY: 37.7131914882111,
      }),
    );

    setError(err.message);
  };

  // 종속성을 주지 않아야 한번만 실행이 된다. => options를 주면 무한 로딩이 이뤄남
  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('기본 데이터로 실행 됩니다.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: false, // 정확한 위치 가져올지
      timeout: 10 * 1000, // 위치 정보 얻을 때까지 기다릴 시간을 밀리초 단위로 지정
      maximumAge: 1000 * 3600 * 24, // 캐시된 위치 정보의 유효 시간을 밀리초로 지정하고, default 값은 0입니다.;
    });
  }, []);

  return { error };
};
