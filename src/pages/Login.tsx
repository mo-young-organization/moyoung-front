import { styled } from 'styled-components';
import LeftTitle from '../components/Login/LeftTitle';
import RightOauth from '../components/Login/RightOauth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { navbarColorStatus } from '../store/reducers/navbarColor';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navbarColorStatus('login'));
  }, []);
  return (
    <Container>
      <Content>
        <LeftTitle />
        <RightOauth />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #efefef;
`;

const Content = styled.div`
  width: 1032px;
  height: 550px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;
