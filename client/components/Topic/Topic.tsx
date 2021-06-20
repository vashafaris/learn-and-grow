import styled from 'styled-components';

import TopicCard from './modules/components/TopicCard';

import Layout from '@components/common/Layout';

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Topic = () => {
  return (
    <Layout>
      <Styled>
        <TopicCard />
      </Styled>
    </Layout>
  );
};

export default Topic;
