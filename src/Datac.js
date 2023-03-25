import React from 'react'
import { participants } from './Data'
import './index.css'

const Datac = () => {
  return (
    <section className='container'>
      <ul className='users'>
        {participants.map((participant) => {
          const { id, name, tasks, email, photo } = participant
          const progress = (tasks / 5) * 100
          console.log(participant)
          return (
            <li key={id}>
              <img src={photo}></img>
              <div className='name'>
                <h1>{name}</h1>
              </div>
              <div className='email'>
                <h2>{email}</h2>
              </div>

              <div className='progress'>
                <div className='progress-bar'></div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Datac
