import styled from 'styled-components';

import MenuButton from './modules/components/MenuButton';

import { COLOR } from '@constants/color.constant';

const Styled = styled.div`
  padding: 5% 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${COLOR.backgroundPrimary};

  .title {
    font-weight: 800;
    font-size: 12rem;
  }

  .menu-button {
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

const Home = () => {
  return (
    <Styled>
      <h1 className='title'>Learn & Grow</h1>
      <div className='menu-button__container'>
        <MenuButton link='topic'>Start</MenuButton>
      </div>
    </Styled>
  );
};

export default Home;
