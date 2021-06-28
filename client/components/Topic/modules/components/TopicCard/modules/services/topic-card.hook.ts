import { useDispatch } from 'react-redux';
import { deleteTopic } from 'redux/action/topic/topic.action';

const useTopicCard = () => {
  const dispatch = useDispatch();

  const handleDeleteTopic = (id) => {
    dispatch(deleteTopic(id));
  };

  return {
    handleDeleteTopic,
  };
};

export default useTopicCard;
