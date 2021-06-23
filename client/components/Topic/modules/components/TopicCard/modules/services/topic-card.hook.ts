import { useTopicService } from '@hooks/useTopicService';
import { useState } from 'react';

const useTopicCard = () => {
  const { deleteTopic } = useTopicService();

  return {
    deleteTopic,
  };
};

export default useTopicCard;
