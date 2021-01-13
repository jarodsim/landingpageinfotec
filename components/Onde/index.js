import React from 'react'
import styles from '../../styles/Onde.module.css'

export default function Onde() {
    return (
        <div className={styles.container} id='onde'>
            <h2>Onde Atendemos?</h2>
            <div className={styles.body}>
                <div className={styles.imagem}>
                    <img src='/onde.png' alt='imagem figurativa que representa um mapa' />
                </div>
                <div className={styles.localidades}>
                    <h3>A Info-tec leva internet de qualidade para as seguintes localidades</h3>

                    <ul>
                        <li>Francisco Ayres</li>
                        <li>Arraial</li>
                        <li>Gaivotas - Zona Rural</li>
                        <li>Tocuns - Zona Rural</li>
                        <li>Vereda - Zona Rural</li>
                        <li>Sacos dos Mel - Zona Rural</li>
                        <li>Prata - Zona Rural</li>
                        <li>Novo Estado - Zona Rural</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}