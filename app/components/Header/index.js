import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import logo from './cnodejs_light.svg';
import messages from './messages';

const HeaderWrapper = styled.div`
display: flex;
min-height: 100%;
padding: 0 16px;
flex-direction: column;
background: #444;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <A href="/">
          <Img src={logo} alt="cnode - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </HeaderWrapper>
    );
  }
}

export default Header;
