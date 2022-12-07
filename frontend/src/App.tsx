
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [file, setFile] = useState<File | null>(null)

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.currentTarget.files) {
      return
    }
    setFile(e.currentTarget.files[0])    
  }
  const handleSubmit = async () => {

    if (!file) {
      return
    }
    const formData = new FormData()
    formData.append('file', file)
    const response = await fetch('http://localhost:4000/api/trackupload', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    console.log(data)
  }
  

  return (
    <div className="App">
      <input type="file" onChange={handleClick} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default App
