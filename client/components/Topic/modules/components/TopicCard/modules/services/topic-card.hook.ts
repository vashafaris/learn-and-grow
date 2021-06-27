import { useTopicService } from '@services/useTopicService.service';

const useTopicCard = () => {
  const { deleteTopic } = useTopicService();

  return {
    deleteTopic,
  };
};

export default useTopicCard;
