import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"
const data = [
  { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', button: 'Satisfied', colour: '#ADD8E6' },
  { img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', button: 'Stacked', colour: '#90EE90' },
  { img: 'https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', button: 'Satisfied', colour: '#ADD8E6' }
]
const App = () => {

  return (
    <div>
      <Section1 data={data} />
      <Section2 />
    </div>
  )
}

export default App