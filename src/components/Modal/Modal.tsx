import React from 'react'
import styles from './Modal.module.css'
import CloseModal from '../../assets/images/Close_modal.svg'

type ModalProps = {
  toggle: (event: React.MouseEvent<HTMLElement>) => void;
  url: string
}
const Modal: React.FC<ModalProps> = ({toggle, url}) => {
  return (
    <div className={styles.overlay} onClick={toggle}>
      <div className={styles.modalHeader}>
        <img className={styles.close} src={CloseModal} onClick={toggle} />
      </div>
      <div className={styles.modalBody}>
        <img width='600px' height='600px' src={url}/>
      </div>
    </div>
  )
}

export default Modal