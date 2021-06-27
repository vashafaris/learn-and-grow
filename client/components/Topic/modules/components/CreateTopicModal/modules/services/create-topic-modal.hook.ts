import { useState } from 'react';

import { useTopicService } from '@services/useTopicService.service';

const useCreateTopicModal = () => {
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
