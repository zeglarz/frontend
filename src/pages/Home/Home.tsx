import React from 'react';
import SocialButton from 'components/atoms/SocialButton';
import { Logo, Role } from 'components/atoms/SocialButton/SocialButton.model';
import { HomePageImg_1, listItemIcon } from 'assets';
import { data } from './data';
import {
  StyledButtonsWrapper,
  StyledContainer,
  StyledHeading,
  StyledHomeImg,
  StyledInnerWrapper,
  StyledList,
  StyledParagraph,
  StyledWrapper,
} from './Home.styled';

// "StyledWrapper - div" and "main" tags in future can use in template and remove from here.

const Home = (): JSX.Element => (
  <StyledWrapper>
    <main>
      <StyledInnerWrapper>
        <StyledContainer>
          <StyledHeading title={data.header} />
          <StyledList icon={listItemIcon} items={data.listDescription} />
          <StyledParagraph txt={data.paragraph} />
          <StyledButtonsWrapper>
            <SocialButton logo={Logo.GITHUB} roleDependText={Role.DEVELOPER} />
            <SocialButton logo={Logo.GOOGLE} roleDependText={Role.NONDEVELOPER} />
          </StyledButtonsWrapper>
        </StyledContainer>
        <StyledHomeImg src={HomePageImg_1} alt="Register" />
      </StyledInnerWrapper>
    </main>
  </StyledWrapper>
);

export default Home;