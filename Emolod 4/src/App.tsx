import MassageList from './shared/components/Masseges'
import { massages } from './fixtures'
import BlogContainer from './shared/components/BlogComponents'
import { ReactLabs_25_04_2025 } from './fixtures'

function App() {
  return (
    <>
  <MassageList massages={massages} />
  <BlogContainer blog={ReactLabs_25_04_2025} />
     </>
  )
}

export default App
