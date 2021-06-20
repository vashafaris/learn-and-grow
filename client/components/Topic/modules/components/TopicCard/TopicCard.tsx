import { COLOR } from '@constants/color.constant';
import styled from 'styled-components';

const Styled = styled.div`
  padding: 1.2rem 3.6rem;
  background-color: white;
  border: 0.2rem solid black;
  border-radius: 0.8rem;

  .title {
    color: ${COLOR.fonts.heading};
    margin-bottom: 1.2rem;
  }

  .description {
    font-size: 1.4rem;
  }

  .date-created {
    font-size: 1.4rem;
    color: ${COLOR.fonts.grey};
    margin-bottom: 1.2rem;
  }

  .button {
    cursor: pointer;
    border: 2px solid black;
    border-radius: 0.8rem;
    background-color: ${COLOR.primary};
    padding: 0.8rem 1.2rem;
    transition: 0.1s ease-in-out;

    :hover {
      background: black;
      color: ${COLOR.primary};
    }
  }
`;

const TopicCard = () => {
  return (
    <Styled>
      <h2 className='title'>Math</h2>
      <p className='description'>Calculus and stuff</p>
      <div className='date-created'>1 april 2020</div>
      <button className='button'>Start reviewing</button>
    </Styled>
  );
};

export default TopicCard;
