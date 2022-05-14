import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
`;

const TitleBar = styled.header`
  background: ${props => props.theme.colors.accent};
  padding: 0.25em 0.5em;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.text_light};
`;

function App() {
  return (
    <Layout>
      <TitleBar>
        <Heading>Micro Frontends</Heading>
      </TitleBar>

      hello
    </Layout>
  );
}

export default App;
