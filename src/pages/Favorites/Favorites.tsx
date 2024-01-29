import React from 'react'
import styles from './Favorites.module.css'
import noFavorites from '../../assets/images/noFavorites.png'
import { useAppSelector } from '../../hook'
import ItemImage from '../../components/ItemImage/ItemImage'
const Favorites = () => {

  const favorites = useAppSelector(state =>state.favorites)

  return (
    <>
      {!!favorites.length && (
       <div className={styles.wrapperList}>
         {favorites.map(f => {return (
           <div key={f.id} className={styles.wrapperImg}>
             <ItemImage className={styles.add}  albumId="" id={f.id} title={f.title} url={f.url}/>
             <p>{f.title}</p>
           </div>
         )} )}
       </div>
      )}
      {favorites.length === 0 && (
        <div className={styles.wrapper}>
          <img src={noFavorites}/>
          <h1>Список избраноого пуст</h1>
          <p>Добавляйте изображения, нажимая на звездочки</p>
        </div>
      )
      }
    </>
  )
}

export default Favorites