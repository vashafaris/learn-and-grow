import { useTopicService } from '@hooks/useTopicService';
import { useEffect, useState } from 'react';

const useFlipCard = (selectedTopic) => {
  const { updateTopic } = useTopicService();
  const [difficulty, setDifficulty] = useState(null);

  const handleButtonClick = (val) => {
    setDifficulty(val);
    updateTopic(selectedTopic._id, val);
  };

  return {
    difficulty,
    setDifficulty,
    handleButtonClick,
  };
};

export default useFlipCard;
