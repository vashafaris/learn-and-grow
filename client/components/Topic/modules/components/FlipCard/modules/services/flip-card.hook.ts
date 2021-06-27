import { useState } from 'react';

import { useTopicService } from '@services/useTopicService.service';

const useFlipCard = (selectedTopic) => {
  const { updateTopic } = useTopicService();
  const [difficulty, setDifficulty] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = (val) => {
    setDifficulty(val);
    updateTopic(selectedTopic._id, val);
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
