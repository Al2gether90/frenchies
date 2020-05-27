import React from 'react';
import styled from 'react-emotion';

import MenuItem from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icon/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icon/profile.svg';
import { colors, unit } from '../styles';

export default function Footer() {
  return (
    <Container>
        <InnerContainer>
            <MenuItem to="/">
              <HomeIcon />
              Home
            </MenuItem>
            <MenuItem to="/cart">
              <CartIcon />
                Cart
            </MenuItem>
            <MenuItem to="/profile">
              <ProfileIcon />
              Profile
            </MenuItem>
            <LogoutButton />
        </InnerContainer>
    </Container>
  );
}

/**
 * 
 * Styled Components used in this file are below here
 */

 const Container = styled('footer')({
   flexShrink: 0,
   marginTop: 'auto',
   backgroundColor: 'white',
   color: colors.textSecondary,
   position: 'sticky',
   bottom: 0,
 });

 const InnerContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    maxWidth: 460,
    padding: unit * 2.5,
    margin: '0 auto',
 });