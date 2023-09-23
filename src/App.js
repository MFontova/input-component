import { Input } from './components/Input/Input'
import './App.css'
import { Footer } from './components/Footer/Footer'

function App () {
  return (
    <>
      <div className='App'>
        <Input />
        <Input error />
        <Input disabled />
        <Input helperText='Helper text' error />
        <Input startIcon='call' />
        <Input endIcon='lock' />
        <Input text='Text' />
        <Input size='sm' />
        <Input size='md' fullWidth />
        <Input multiline row={20} disabled />
      </div>
      <Footer />
    </>
  )
}

export default App
