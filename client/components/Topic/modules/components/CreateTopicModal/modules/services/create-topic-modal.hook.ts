import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { createTopic } from 'redux/action/topic/topic.action';

const useCreateTopicModal = (setIsModalOpen) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frontSide, setFrontSide] = useState('');
  const [backSide, setBackSide] = useState('');
  const [difficulty, setDifficulty] = useState(null);

  const handleCreateTopic = () => {
    dispatch(
      createTopic({ title, description, frontSide, backSide, difficulty })
    );
    setIsModalOpen(false);
  };

  return {
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
  };
};

export default useCreateTopicModal;
