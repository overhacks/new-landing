
function AppScreen({ children, style = {} }: any) {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: 'rgb(61, 60, 60)',
        height: "100vh",
        overflow: 'hidden',
        ...style,
      }}>
      {children}
    </div>
  )
}

export default AppScreen