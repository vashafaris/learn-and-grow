import styled from 'styled-components';
import cn from 'classnames';
import { FlipCardProps } from './modules/models/flip-card.model';
import { COLOR } from '@constants/color.constant';
import { Difficulties } from '../CreateTopicModal/modules/enum/create-topic-modal.enum';
import useFlipCard from './modules/services/flip-card.hook';

const Styled = styled.div`
  .modal {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 2s;

    &.open {
      display: flex;
    }
  }

  .flip-card {
    cursor: pointer;
    background-color: transparent;
    width: 30rem;
    height: 45rem;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card .flip-card-inner {
    /* transform: rotateY(180deg); */
    &.flipped {
      transform: rotateY(180deg);
    }
  }

  &.flipped {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .flip-card-front {
    background-color: white;
    color: black;
  }

  .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
  }

  .difficulty-container {
    margin: 1.2rem 0;

    button {
      cursor: pointer;
      padding: 0.8rem 1.6rem;
      border: 0.2rem solid black;
      border-radius: 0.4rem;

      :hover {
        &.easy {
          background-color: ${COLOR.primary};
        }

        &.medium {
          background-color: ${COLOR.secondary};
        }

        &.hard {
          background-color: ${COLOR.red};
        }
      }
    }
  }

  button:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

const FlipCard = ({ selectedTopic, setSelectedTopic }) => {
  const { isFlipped, setIsFlipped, handleButtonClick } =
    useFlipCard(selectedTopic);

  return (
    <Styled>
      <div className={cn('modal', { open: !!selectedTopic })}>
        <div onClick={() => setIsFlipped(!isFlipped)} className='flip-card'>
          <div className={cn('flip-card-inner', { flipped: isFlipped })}>
            <div className='flip-card-front'>
              <h1>{selectedTopic?.frontSide}</h1>
            </div>
            <div className='flip-card-back'>
              <p>{selectedTopic?.backSide}</p>
            </div>
          </div>
        </div>
        <div className='difficulty-container'>
          <button
            className='easy'
            onClick={() => handleButtonClick(Difficulties.Easy)}
          >
            Easy
          </button>
          <button
            className='medium'
            onClick={() => handleButtonClick(Difficulties.Medium)}
          >
            Medium
          </button>
          <button
            className='hard'
            onClick={() => handleButtonClick(Difficulties.Hard)}
          >
            Hard
          </button>
        </div>
      </div>
    </Styled>
  );
};

export default FlipCard;
