import { useTopicService } from '@hooks/useTopicService';
import { useState, useEffect } from 'react';

const useCreateTopicModal = (setIsModalOpen) => {
  const { createTopic } = useTopicService();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frontSide, setFrontSide] = useState('');
  const [backSide, setBackSide] = useState('');
  const [difficulty, setDifficulty] = useState(null);

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
    createTopic,
  };
};

export default useCreateTopicModal;
