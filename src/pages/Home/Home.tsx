import React from 'react';
import SocialButton from 'components/atoms/SocialButton';
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

const Home = (): JSX.Element => {
  const handleClick = async () => {
    const a4 = await fetch('http://auth.programmers-only.com/auth/github');
    const b4 = await a4.json();
    console.log(b4);
  };

  const handleClickHttps = async () => {
    const a4 = await fetch('https://auth.programmers-only.com/auth/github');
    const b4 = await a4.json();
    console.log(b4);
  };

  return (
    <StyledWrapper>
      <main>
        <StyledInnerWrapper>
          <StyledContainer>
            <StyledHeading>{data.header}</StyledHeading>
            <StyledList icon={listItemIcon} items={data.listDescription} />
            <StyledParagraph>{data.paragraph}</StyledParagraph>
            <StyledButtonsWrapper>
              <SocialButton logo="github" userRole="developer" onClick={handleClick} />
              <SocialButton logo="google" userRole="non-developer" onClick={handleClickHttps} />
            </StyledButtonsWrapper>
          </StyledContainer>
          <StyledHomeImg src={HomePageImg_1} alt="Register" />
        </StyledInnerWrapper>
      </main>
    </StyledWrapper>
  );
};

export default Home;
