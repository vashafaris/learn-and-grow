import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducer/root-reducer';
import { getTopics } from 'redux/action/topic/topic.action';

const useTopic = () => {
  const dispatch = useDispatch();
  const { topics, isLoading } = useSelector((state: RootState) => state.topic);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  return {
    topics,
    isLoading,
    isModalOpen,
    selectedTopic,
    setIsModalOpen,
    setSelectedTopic,
    getTopics,
  };
};

export default useTopic;
