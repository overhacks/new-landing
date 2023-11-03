
function AppScreen({ children, style = {} }: any) {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor: 'rgb(14, 14, 14)',
        height: "100vh",
        overflow: 'hidden',
        ...style,
      }}>
      {children}
    </div>
  )
}

export default AppScreen