import React from 'react'
import Link from 'next/link'

import styles from '../../styles/Footer.module.css'

export default function Footer() {
    function sendWhatsappMessage() {
        window.location.href = 'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.frase}>'Mais que produtos, vendemos soluções!'</h3>
            <div className={styles.info}>
                <div className={styles.links}>
                    <h3>Acesso Rápido</h3>
                    <Link href='#planos'>Planos</Link>
                    <Link href='#onde'>Onde Atendemos</Link>
                    <Link href='#quem_somos'>Quem Somos</Link>
                    <Link href='#topo'>Topo</Link>
                    <Link href='https://drive.google.com/file/d/1UGTvz0nhvkjckjSoyQ7DjPr_UkmHO7tg/view?usp=sharing' className={styles.btn_contrato}>Baixar Contrato</Link>
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
                    <p onClick={() => sendWhatsappMessage()}>
                        Nos mande uma mensagem pelo whatsapp: 89994578337
                    </p>

                    <a href="tel:08000420497">
                        Ou nos ligue em nosso 0800, é gratuito :) 08000420497
                    </a>
                </div>
            </div>
            <small>&copy; Todos os direitos reservados a info-tec - 2020</small></div>
    )
}