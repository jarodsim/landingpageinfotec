import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Footer.module.css'

export default function Footer() {
    function sendWhatsappMessage() {
        window.location.href = 'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
    }

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <h3>Acesso Rápido</h3>
                <ul>
                    <li><Link href="#planos">Planos</Link></li>
                    <li><Link href="#onde">Onde Atendemos</Link></li>
                    <li><Link href="#quem_somos">Quem Somos</Link></li>
                    <li><Link href="#topo">Topo</Link></li>
                </ul>
            </div>

            <div className={styles.endereco}>
                <h3>Onde Nos Encontrar</h3>
                <address>
                    Francisco Ayres - PI, <br />
                    Rua Tito Ferreia, 420 - Bairro Centro
                </address>
            </div>

            <div className={styles.contato}>
                <h3>Formas de Contato</h3>
                <ul>
                    <li onClick={() => sendWhatsappMessage()}>
                        Nos mande uma mensagem pelo whatsapp: 89994578337
                    </li>
                    <li>
                        Ou nos ligue em nosso 0800, é de graça :) 08000420497
                    </li>
                </ul>
            </div>
        </div>
    )
}