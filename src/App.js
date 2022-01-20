import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])

const callSet = async() =>{
  const response = await fetch(url)
  const useres = await response.json()
  setLoading(false)
  setTours(useres)
}

useEffect(() =>{
  callSet()
},[])

const removeTours = (id) =>{
  const newTours = tours.filter(tour => tour.id !== id)
  setTours(newTours)
}

return (<main>
          {loading ? <Loading/> : <Tours tours={tours} removeTours={removeTours}/>}
          {tours.length == 0 &&
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={callSet}>refresh</button>
          </div>
          }
        </main>)
  
}

export default App
