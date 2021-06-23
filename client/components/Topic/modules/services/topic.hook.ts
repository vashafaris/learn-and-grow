import { useTopicService } from '@hooks/useTopicService';
import { useState, useEffect } from 'react';

const useTopic = () => {
  const { topics, getTopics } = useTopicService();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    getTopics();
  }, []);

  return {
    topics,
    isModalOpen,
    selectedTopic,
    setIsModalOpen,
    setSelectedTopic,
    getTopics,
  };
};

export default useTopic;
