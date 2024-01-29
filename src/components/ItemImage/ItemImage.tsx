import React, { useState } from 'react'
import { ItemImagesProps } from './ItemImage.props'
import {ReactComponent as Star} from '../../assets/images/Fav_added.svg'
import styles from './ItemImages.module.css'
import { createPortal } from 'react-dom'
import Modal from '../Modal/Modal'
import { useAppDispatch } from '../../hook'
import { addFavorite } from '../../redux/favoritesSlice'
import cn from 'classnames'

const ItemImage: React.FC<ItemImagesProps> = ({id, url, title, className}) => {

  const [showModal, setShowModal] = useState(false);
  const [isAdd, setAdd] = useState(false)

  const dispatch = useAppDispatch()

  const toggleModalHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setShowModal(!showModal)
  }

  const addFavoriteHandler = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
    setAdd(!isAdd)
    dispatch(addFavorite({ id, title, url }))
  }

  return (
    <>
      {showModal && createPortal(<Modal toggle={toggleModalHandler} url={url}/>, document.getElementById('modal')!)}
      <div className={styles.wrapperImage}>
        <Star
        onClick = {(e) => addFavoriteHandler(e)}
          className={cn(styles.star, className, {
              [styles.add]: isAdd
        })}
        />
        <img onClick={(e) => toggleModalHandler(e)} src={url}/>
      </div>
    </>
  )
}

export default ItemImage