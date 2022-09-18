import './styles.css'
import CustomCounter from '../lib/CustomCounter'

const App = () => {
  return (
    <div className="wrapper">
      <div className="title">Custom counter example</div>
      <CustomCounter initialValue={2} />
    </div>
  )
}

export default App
