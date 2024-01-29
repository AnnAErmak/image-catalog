import React, { useEffect, useState } from 'react'
import { ItemUserProps } from './ItemUser.props'
import axios from 'axios'
import ItemAlbum from '../ItemAlbum/ItemAlbum'
import { ReactComponent as Open } from '../../assets/images/open.svg'
import styles from './ItemUser.module.css'

type Albums ={
  albumId: string
  userId: string
  title: string
}

const ItemUser: React.FC<ItemUserProps> = ({id,name}) => {

  const [albums, setAlbums] = useState<Albums[] | null>(null)
  const [isOpen, setOpen] = useState(false)

  const fetchAlmubs = async (idUs: string) => {
    const res = await axios.get(`http://localhost:3000/albums/${idUs}`)
    return res.data
  }

  useEffect(() => {
      if(!isOpen) return
      if(id) fetchAlmubs(id).then(al => setAlbums(al))
  }, [isOpen])

  const getAlbumHandler = (event: React.MouseEvent<HTMLElement>, idUser: string) => {
    event.stopPropagation()
    setOpen(!isOpen)
  }

  return (
    <li className={styles.itemUser} onClick={(event: React.MouseEvent<HTMLElement>) =>getAlbumHandler(event, id)}>
      <div className={styles.wrapper}>
        <Open />
        <p>{name}</p>
      </div>
      {isOpen && albums !== null &&
        <ul>
          {albums.map(el => <ItemAlbum key={el.albumId} title={el.title} albumId={el.albumId} />)}
        </ul>
      }
    </li>
  )
}

export default ItemUser