import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { updateTopic } from 'redux/action/topic/topic.action';

const useFlipCard = (selectedTopic, setSelectedTopic) => {
  const dispatch = useDispatch();
  const [difficulty, setDifficulty] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = (difficulty) => {
    const id = selectedTopic._id;
    setDifficulty(difficulty);
    dispatch(updateTopic({ id, difficulty }));
    setSelectedTopic(null);
  };

  return {
    difficulty,
    isFlipped,
    setDifficulty,
    setIsFlipped,
    handleButtonClick,
  };
};

export default useFlipCard;
