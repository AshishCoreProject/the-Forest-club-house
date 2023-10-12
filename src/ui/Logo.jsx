import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;
const LogoTest = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 0.1rem;
  letter-spacing: 0.07rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/ForestHotel.png" height="50px" width="50px" alt="Logo" />
      <LogoTest>Forest Club House</LogoTest>
    </StyledLogo>
  );
}

export default Logo;
