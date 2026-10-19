import { createRoot } from 'react-dom/client'
import './index.css'
import MassageList from './shared/components/Masseges'
import { massages } from './fixtures'
import BlogContainer from './shared/components/BlogComponents'
import { ReactLabs_25_04_2025 } from './fixtures'

createRoot(document.getElementById('root')!).render(
  <>
  <MassageList massages={massages} />
  <BlogContainer blog={ReactLabs_25_04_2025} />
  </>
  
)
