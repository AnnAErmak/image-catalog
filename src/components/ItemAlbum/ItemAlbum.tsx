import React, { useEffect, useState } from 'react'
import { ItemAlbumProps } from './ItemAlbum.props'
import axios from 'axios'
import { ReactComponent as Open } from '../../assets/images/open.svg'
import styles from './ItemAlbum.module.css'
import ItemImage from '../ItemImage/ItemImage'

type Images ={
  albumId: string,
  id: string,
  title: string,
  url: string
}

const ItemAlbum: React.FC<ItemAlbumProps> = ({albumId , title}) => {
  const [imgs, setImgs] = useState<Images[] | null>(null)
  const [isOpen, setOpen] = useState(false)


  const fetchImgs = async (idAl: string) => {
    const res = await axios.get(`http://localhost:3000/photos/${idAl}`)
    const resData = res.data
    return resData
  }

  useEffect(() => {
    if(!isOpen) return
    if(albumId) fetchImgs(albumId).then(imgs => setImgs(imgs))
  }, [isOpen])

  const getImagesHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setOpen(!isOpen)
  }

  return (
    <li onClick={(event: React.MouseEvent<HTMLElement>) =>getImagesHandler(event)}>
      <div className={styles.wrapper}>
        <Open />
        <p>{title}</p>
      </div>
      {isOpen && imgs !== null &&
        <div className={styles.wrapperImages}>
           {imgs.map(el => <ItemImage key={el.id} albumId={el.albumId} id={el.id} title={el.title} url={el.url}/>)}
        </div>
      }
    </li>
  )
}

export default ItemAlbum