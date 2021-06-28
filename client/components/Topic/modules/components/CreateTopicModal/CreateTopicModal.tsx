import styled from 'styled-components';
import cn from 'classnames';

import { CreateTopicModalProps } from './modules/model/create-topic-model';

import { COLOR } from '@constants/color.constant';
import useCreateTopicModal from './modules/services/create-topic-modal.hook';
import { Difficulties } from './modules/enum/create-topic-modal.enum';

const Styled = styled.div`
  .modal {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

    &.open {
      display: flex;
    }
  }

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 2.4rem;
    border: 0.2rem solid black;
    width: 35%;
    border-radius: 0.8rem;
  }

  input[type='text'],
  select {
    width: 100%;
    padding: 1.2rem 2rem;
    margin: 1.2rem 0;
    display: inline-block;
    border: 0.2rem solid #ccc;
    border-radius: 0.4rem;
    box-sizing: border-box;
  }

  .difficulty-container {
    margin: 1.2rem 0;

    button {
      cursor: pointer;
      padding: 0.8rem 1.6rem;
      border: 0.2rem solid black;
      border-radius: 0.4rem;

      &.selected {
        &--easy {
          background-color: ${COLOR.primary};
        }

        &--medium {
          background-color: ${COLOR.secondary};
        }

        &--hard {
          background-color: ${COLOR.red};
        }
      }
    }

    button:not(:last-child) {
      margin-right: 0.8rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;

    button {
      cursor: pointer;
      padding: 0.8rem 1.6rem;
      background-color: ${COLOR.primary};
      border: 0.2rem solid black;
      border-radius: 0.4rem;
      transition: 0.1s;

      :hover {
        background-color: black;
        color: ${COLOR.primary};
      }

      :first-child {
        margin-right: 1.2rem;
      }
    }
  }
`;

const CreateTopicModal: React.FC<CreateTopicModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const {
    title,
    description,
    frontSide,
    backSide,
    difficulty,
    setTitle,
    setDescription,
    setFrontSide,
    setBackSide,
    setDifficulty,
    handleCreateTopic,
  } = useCreateTopicModal(setIsModalOpen);

  return (
    <Styled>
      <div className={cn('modal', { open: isModalOpen })}>
        <div className='modal-content'>
          <h2>Topic Title</h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
          />
          <h4>Description</h4>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type='text'
          />
          <h4>Question</h4>
          <input
            value={frontSide}
            onChange={(e) => setFrontSide(e.target.value)}
            type='text'
          />
          <h4>Answer</h4>
          <input
            value={backSide}
            onChange={(e) => setBackSide(e.target.value)}
            type='text'
          />
          <h4>Difficulty</h4>
          <div className='difficulty-container'>
            <button
              className={cn({
                'selected--easy': difficulty === Difficulties.Easy,
              })}
              onClick={() => setDifficulty(Difficulties.Easy)}
            >
              Easy
            </button>
            <button
              className={cn({
                'selected--medium': difficulty === Difficulties.Medium,
              })}
              onClick={() => setDifficulty(Difficulties.Medium)}
            >
              Medium
            </button>
            <button
              className={cn({
                'selected--hard': difficulty === Difficulties.Hard,
              })}
              onClick={() => setDifficulty(Difficulties.Hard)}
            >
              Hard
            </button>
          </div>
          <div className='button-container'>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button onClick={() => handleCreateTopic()}>Create</button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default CreateTopicModal;
