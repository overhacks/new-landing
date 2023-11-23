import { StyledAppScreen } from "./styles"

function AppScreen({ children, style = {} }: any) {
  return (
    <StyledAppScreen>
      {children}
    </StyledAppScreen>
  )
}

export default AppScreen