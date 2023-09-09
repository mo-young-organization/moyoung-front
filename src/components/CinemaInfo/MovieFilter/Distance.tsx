import { FilterProps } from '../../SignupCheck/FormType';
import Slider from '@mui/material/Slider';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useState } from 'react';
import { styled } from 'styled-components';
import Box from '@mui/material/Box';

const Distance = ({ register }: FilterProps) => {
  const [value, setValue] = useState<number[]>([0, 1]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    //조건문으로 0 ~ 4 면 km로 변환시키기
    console.log(newValue);
    setValue(newValue as number[]);
  };

  const marks = [
    {
      value: 0,
      label: '0km',
    },
    {
      value: 1,
    },
    {
      value: 2,
      label: '3km',
    },
    {
      value: 3,
    },
    {
      value: 4,
      label: '6km',
    },
  ];

  return (
    <Container>
      <div>거리</div>
      <StyledEngineProvider injectFirst>
        <DistanceSlider
          aria-labelledby="range-slider"
          marks={marks}
          max={4}
          min={0}
          value={value}
          onChange={handleChange}
        />
      </StyledEngineProvider>
    </Container>
  );
};

export default Distance;

const Container = styled.div`
  display: flex;

  > div {
    width: 64px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const DistanceSlider = styled(Slider)`
  margin-left: 10px;
  width: 360px;

  .MuiSlider-thumb {
    color: white;
  }
  .MuiSlider-rail {
    color: #cccccc;
  }
  .MuiSlider-track {
    color: #a0a0a0;
  }
  color: #a0a0a0;
`;