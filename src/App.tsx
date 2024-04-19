import './App.css'

import Header from './components/Header'
import LinkList from './components/LinkList'
import { links } from './utils/links'

function App() {

  return (
    <main>
      <Header />
      <LinkList links={links}/>
    </main>
  )
}

export default App
