
function AppScreen({ children, style = {} }: any) {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        boxSizing: 'border-box',
        ...style,
      }}>
      {children}
    </div>
  )
}

export default AppScreen