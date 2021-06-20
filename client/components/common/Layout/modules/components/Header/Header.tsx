import styled from 'styled-components';

const Styled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18rem;
  background-color: black;
  color: white;

  .title {
    font-size: 6.2rem;
    font-weight: 800;
  }
`;

const Header = () => {
  return (
    <Styled>
      <h1 className='title'>Learn & Grow</h1>
    </Styled>
  );
};

export default Header;
