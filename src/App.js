import {useState} from "react";
import {lightTHeme, darkTheme} from "./themes/themes";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {Head} from "./components/Head";



function App() {

    const GlobalStyles = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
    `

    const StyledApp = styled.div`
    `

    const [theme, setTheme] = useState('dark')


    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }




  return (
      <>
          <GlobalStyles/>
          <StyledApp>
              <ThemeProvider theme={theme === 'light' ? lightTHeme : darkTheme} >
                  <Head toggler={themeToggler} size={'25px'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur assumenda atque aut esse est facilis fugit ipsum maiores natus nesciunt nihil odit placeat porro quae quasi qui, quibusdam repellat reprehenderit rerum sunt tempora ullam ut veniam vero voluptas. Eligendi inventore, voluptates! Ab architecto assumenda commodi delectus dicta fugit harum, illum magni maiores maxime molestias mollitia obcaecati pariatur placeat provident quos totam. Ad, est, nihil. Aspernatur aut fuga, fugit maiores maxime necessitatibus non obcaecati sunt unde voluptas. Atque, doloribus ea incidunt iure quam quod ratione? Atque cumque explicabo laborum nihil nobis repellendus sequi sit tempora unde voluptate? Aliquid autem cum harum illum impedit magni mollitia nam nesciunt nisi nobis officiis possimus rerum, unde vitae voluptatum. A accusamus adipisci doloremque eligendi eos, et explicabo fuga id libero, magni minus quod sapiente soluta, tenetur ullam! Asperiores corporis distinctio dolores fugit molestiae, non quis veritatis. Ab alias animi aut consequuntur culpa cumque dignissimos dolor doloremque dolorum ea eum ex explicabo, facere fugit hic, incidunt ipsa iure laudantium magnam minima minus molestias necessitatibus placeat possimus praesentium quibusdam, quidem quos rem repellat repellendus sint soluta suscipit tempora tenetur unde vero voluptas? Alias at dolorem est explicabo rerum soluta, veniam. Alias autem culpa dicta distinctio dolor earum incidunt laborum magni maxime mollitia nesciunt nihil nulla perspiciatis quaerat quam, quasi quibusdam temporibus voluptatum! Illum iusto, vel. Adipisci amet asperiores assumenda aut consequatur cum cumque dolore eius eum, eveniet excepturi fugit hic, ipsam iste itaque magni mollitia nam natus nihil, non odit porro provident quam rem saepe sint tempora tempore voluptas voluptatem voluptates. Accusamus ad aliquam aperiam architecto error excepturi illo, impedit iure laboriosam maiores minima nulla praesentium quae quasi quisquam quo quos sed sunt vero voluptatem! Alias dolorem doloribus ea est illum in ipsa itaque magnam minima nam, quia quis, ratione recusandae reiciendis sequi similique tenetur veritatis? Architecto commodi consectetur cum cumque dolores, error illo, iusto laudantium odio optio pariatur quo sint, totam! Architecto culpa cupiditate, doloremque ducimus iste quis quo sunt vel! Ab aperiam autem commodi consequatur cupiditate deleniti, doloremque eveniet explicabo facere fugit maiores nam necessitatibus nobis optio provident totam ullam vitae voluptatum! Alias autem consequatur debitis delectus eius et, expedita explicabo, ipsum labore laborum minus nam nostrum odit praesentium, quos ratione recusandae. Aut, iure ullam. Blanditiis dicta distinctio eos est excepturi expedita facere harum itaque labore minima minus nisi odio officiis quia quibusdam quo reprehenderit ut vel, velit voluptates? Accusamus, accusantium animi asperiores cum cumque deleniti dicta dolore eveniet facilis iste iusto laboriosam laudantium modi mollitia necessitatibus nemo nesciunt numquam, optio quasi quibusdam quod reiciendis repellendus saepe sequi suscipit veniam vitae voluptatum. Aliquam aut doloribus ducimus est eveniet exercitationem expedita iure libero mollitia necessitatibus obcaecati perspiciatis quaerat soluta, tempore, totam vero voluptates. Ducimus in ipsa magni. Corporis cum deleniti eius eos facere fugiat impedit magnam odit perspiciatis, placeat possimus quibusdam recusandae reiciendis sint vitae. Alias autem beatae dignissimos fuga, fugit hic laboriosam nemo nulla omnis voluptatum? Aperiam iusto neque rem soluta. Aliquid doloribus eum fuga iure minus nostrum quod temporibus tenetur ut vel.
                  </Head>
              </ThemeProvider>
          </StyledApp>
      </>

  );
}

export default App;
