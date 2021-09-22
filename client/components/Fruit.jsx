import React, { useState, useEffect } from 'react'

import { getFruit } from '../apis/fruit'

const Fruit = () => {
  const [fruit, setFruit] = useState([])

  useEffect(() => {
    refreshFruit()
  }, [])

  const refreshFruit = () => {
    getFruit()
      .then(fruit => setFruit(fruit))
  }

  return (
    <>
      <ul>
        {fruit.map(aFruit => {
          return <li key={aFruit.id}>{aFruit.name}</li>
        })}
      </ul>
    </>
  )
}

export default Fruit
