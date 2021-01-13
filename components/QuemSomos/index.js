import React from 'react'
import styles from '../../styles/QuemSomos.module.css'

export default function QuemSomos() {
        return (
                <div className={styles.quem_somos} id='quem_somos'>
                        <h2>Quem Somos?</h2>
                        <div className={styles.body}>
                                <div className={styles.imagem}>
                                        <img src='/frase.png' alt='imagem figurativa que representa um time' />
                                </div>
                                <div className={styles.texto}>
                                        <blockquote>
                                                'A INFO-TEC é um ISP.
                        <br />
                                                <br />
                        O QUE É UM ISP?
                        <br />
                        ISP é a abreviatura de Internet Service Provider, são empresas ou corporações que fornecem às pessoas acesso à Internet, conhecido popularmente como provedor de Serviços de Internet, estes são responsável por estabelecer conexões locais, regionais ou mesmo nacionais para facilitar a transmissão de dados online entre usuários, essas empresas os provedores regionais, vem desde meados dos anos 2000  levando internet onde nenhuma operadora jamais irá, nós tornamos realidade a banda larga em todos os municípios e povoados deste país, seja qual região for, nós somos um braço, um cérebro, um coração que palpita o desejo de conectar todos neste país, não importa onde você está, nós vamos até você!
                        <br />
                                                <br />
                        É graças aos ISPs que a Fibra Óptica tornou-se realidade no país nos últimos 5 anos, forçando as grandes operadoras a aderirem ao serviço de conexão com maior largura de banda da atualidade.
                        <br />
                                                <br />
                        Atualmente, a  INFO-TEC tem como meta até, o fim de 2021 levar Fibra Óptica em pequenos vilarejos nas regiões das cidades de Francisco Ayres, Arraial e Amarante - PI, povoados estes que até a presente data nem mesmo uma simples cobertura de sinal de celular possui. Um povo completamente esquecido pelas grandes operadoras.  Mas, a INFO-TEC acredita que você, homem do campo, merece experimentar conexões verdadeiras, merece o melhor do mundo digital, e por isso nós iremos levar até você a inclusão digital!'
                        </blockquote>
                                </div>
                        </div>
                </div>
        )
}