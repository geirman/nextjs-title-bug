import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: limegreen;
  height: '50px';
`

const Header = props => (
  <StyledHeader>
    <h1>HEADER</h1>
  </StyledHeader>
)

export default Header
