import Rutas from '../../routes'

const Container = ({ children }) => {
  return (
      <>
      <Rutas />
    <div className="container mx-auto px-4">
      {children}
    </div>
    </>
  )
}

export default Container
