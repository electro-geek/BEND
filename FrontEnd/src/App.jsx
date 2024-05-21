import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('https://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Sharma and full stack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.content}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
