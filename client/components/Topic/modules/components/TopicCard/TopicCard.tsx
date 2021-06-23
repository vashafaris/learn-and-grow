import { COLOR } from '@constants/color.constant';
import styled from 'styled-components';
import { TopicCardProps } from './modules/model/topic-card.model';
import useTopicCard from './modules/services/topic-card.hook';

const Styled = styled.div`
  padding: 1.2rem 3.6rem;
  background-color: white;
  border: 0.2rem solid black;
  border-radius: 0.8rem;
  flex-basis: calc(45%);
  margin: 1.2rem;
  flex-shrink: 1;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .title {
    color: ${COLOR.fonts.heading};
    margin-bottom: 1.2rem;
  }

  .description {
    font-size: 1.4rem;
  }

  .difficulty {
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: bold;
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

    :first-child {
      margin-right: 0.8rem;
    }

    &.delete {
      background-color: ${COLOR.red};
      color: white;

      :hover {
        background: black;
        color: ${COLOR.red};
      }
    }
  }
`;

const TopicCard = ({
  id,
  title,
  description,
  difficulty,
  createdAt,
  setSelectedTopic,
  topic,
}) => {
  const { deleteTopic } = useTopicCard();

  return (
    <Styled>
      <h2 className='title'>{topic.title}</h2>
      <p className='description'>{topic.description}</p>
      <p className='difficulty'>{topic.difficulty}</p>
      <div className='date-created'>{topic.createdAt}</div>
      <div className='button-container'>
        <button onClick={() => setSelectedTopic(topic)} className='button'>
          Start reviewing
        </button>
        <button onClick={() => deleteTopic(id)} className='button delete'>
          Dump Topic
        </button>
      </div>
    </Styled>
  );
};

export default TopicCard;
