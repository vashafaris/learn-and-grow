import styled from 'styled-components';

import { LayoutProps } from './modules/models/layout.model';

import { COLOR } from '@constants/color.constant';

const Styled = styled.div`
  min-height: 100vh;
  background-color: ${COLOR.backgroundSecondary};
  padding-top: 18rem;

  main {
    max-width: 76.6rem;
    margin: auto;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled>
      <main>{children}</main>
    </Styled>
  );
};

export default Layout;
