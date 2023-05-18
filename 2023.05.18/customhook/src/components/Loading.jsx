import React from 'react'
import loadingImg from '../images/loading.gif'
import styles from './LoadingModule.css'

export default function Loading() {
    return (
        <img src={loadingImg} alt="" className={styles.imgLoading} />
    )
}