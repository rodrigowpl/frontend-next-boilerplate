import * as S from './styles'

const Main = () => (
  <S.Container>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Next Boilerplate</S.Title>
    <S.Description>
      ReactJS, TypeScript, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Container>
)
export default Main
