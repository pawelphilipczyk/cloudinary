import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './root.css'

function Root({ children }: React.PropsWithChildren) {
  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> 
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default Root
