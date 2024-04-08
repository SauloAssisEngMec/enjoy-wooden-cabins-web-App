import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 10rem;
  width: auto;
  border-radius: 25px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/Logo.jpeg" alt="Logo" />
      <Title>Enjoy Wooden Cabins</Title>
    </StyledLogo>
  );
}

export default Logo;

const Title = styled.h2`
/* font-family:'Times New Roman', Times, serif; */
font-family:'Times New Roman', Times, serif;
color: var(--color-grey-500);

  
`