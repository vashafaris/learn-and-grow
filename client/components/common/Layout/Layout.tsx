import styled from 'styled-components';

import Header from './modules/components/Header';
import { LayoutProps } from './modules/models/layout.model';

import { COLOR } from '@constants/color.constant';

const Styled = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.backgroundSecondary};
  padding-top: 18rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled>
      <Header />
      {children}
    </Styled>
  );
};

export default Layout;
