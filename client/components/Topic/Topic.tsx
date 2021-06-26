import styled from 'styled-components';

import TopicCard from './modules/components/TopicCard';
import FlipCard from './modules/components/FlipCard';
import useTopic from './modules/services/topic.hook';

import Layout from '@components/common/Layout';
import Header from '@components/common/Layout/modules/components/Header';
import CreateTopicModal from '@components/Topic/modules/components/CreateTopicModal';

const Styled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.2rem 0;
`;

const Topic = () => {
  const {
    topics,
    isModalOpen,
    setIsModalOpen,
    selectedTopic,
    setSelectedTopic,
  } = useTopic();

  return (
    <>
      <Header
        buttonTitle='Create New Topic'
        buttonAction={() => setIsModalOpen(true)}
      />
      <Layout>
        <Styled>
          {topics.map((topic) => (
            <TopicCard
              key={topic._id}
              id={topic._id}
              title={topic.title}
              description={topic.description}
              difficulty={topic.difficulty}
              createdAt={topic.createdAt}
              setSelectedTopic={setSelectedTopic}
              topic={topic}
            />
          ))}
        </Styled>
      </Layout>
      <CreateTopicModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <FlipCard
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
    </>
  );
};

export default Topic;
