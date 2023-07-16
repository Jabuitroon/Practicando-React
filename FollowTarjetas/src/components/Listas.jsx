import { Twifollowcard } from './Twifollowcard.jsx'

const format = (userName) => `@${userName}`

const users = [
  {
    userName: 'Midudev',
    name: 'Migueloon',
    isFollowing: true
  },
  {
    userName: 'MataZmbs',
    name: 'Guisante',
    isFollowing: false
  },
  {
    userName: 'La Muralla',
    name: 'Papa',
    isFollowing: true
  },
  {
    userName: 'Saltamuros',
    name: 'Corredor',
    isFollowing: false
  }
]

export function Listas () {
  return (
    <section className='ListaApp'>
      {
                users.map(user => {
                  const { userName, name, isFollowing } = user
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Twifollowcard formatUserName={format} userName={userName} name={name} initialFollowage={isFollowing} />
                  )
                })
            }
    </section>
  )
}
