import styled from 'styled-components'
import Head from 'next/head'
import Header from './Header'
import Title from './Title'

const StyledPage = styled.div`
  background-color: #ff0;
`

const Page = props => (
  <StyledPage>
    <Head>
      <Title title={props.title} />
    </Head>
    <Header />
    {props.children}
  </StyledPage>
)

export default Page