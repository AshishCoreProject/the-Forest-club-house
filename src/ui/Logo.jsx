import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/ForestHotel.png" height="50px" width="50px" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
