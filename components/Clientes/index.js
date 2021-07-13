import React from 'react'
import styles from '../../styles/Onde.module.css'

export default function Clientes() {
  return (
    <div className={styles.container} id='onde'>
      <h2>Alguns de nossos clientes</h2>
      <div className={styles.body}>
        <div className={styles.imagem}>
          <img
            src='/agree.png'
            alt='imagem figurativa que representa duas pessoas cumprimentando'
          />
        </div>
        <div className={styles.localidades}>
          <h3>
            Em nossa trajetória nos orgulhamos por ter conquistado grandes
            clientes e parceiros. Acreditamos na transformação organizacional e
            reconhecemos cada cliente como único.
          </h3>

          <ul>
            <li>Prefeitura Municipal de Francisco Ayres - PI</li>
            <li>Câmara Municipal de Francisco Ayres - PI</li>
            <li>Piauí Conectado</li>
            <li>Armazém Paraíba</li>
            <li>Veloso Eletromóveis</li>
            <li>Comercial O Didi</li>
            <li>Comercial Econômico</li>
            <li>Preço Bom</li>
            <li>Posto Martinez</li>
            <li>Posto Brasil</li>
            <li>Posto SP.I</li>
            <li>Cartório Único de Francisco Ayres - PI</li>
            <li>Sindicato dos Trabalhadores de Francisco Ayres - PI</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
