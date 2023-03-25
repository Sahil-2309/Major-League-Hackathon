import React from 'react'
import { participants } from './Data'
import './index.css'

const Datac = () => {
  return (
    <section className='container'>
      <ul className='users'>
        {participants.map((participant) => {
          const { id, name, tasks, email, image } = participant
          // console.log(participant)
          return (
            <li key={id}>
              <img src={image}></img>
              <div className='name'>
                <h1>{name}</h1>
              </div>
              <div className='email'>
                <h2>{email}</h2>
              </div>
              <div className='progress'>
                <h1>{tasks}/5</h1>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Datac
