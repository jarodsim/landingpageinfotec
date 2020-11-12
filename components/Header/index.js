import React, { useEffect } from 'react'
import Link from 'next/link'

import styles from '../../styles/Header.module.css'

export default function Header() {
    let header = ''
    let menu_mobile = ''
    let btn_goToTop = ''

    function sendWhatsappMessage() {
        window.location.href = 'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
    }

    // para alterar a o background do header de acordo com o scroll do mouse
    useEffect(() => {
        window.onscroll = function () { scrollFunction() }

        function scrollFunction() {
            header = screen.width > 1024 ? header = document.getElementsByClassName('Header_header__182Qc')[0] : header = document.getElementsByClassName('Header_header_mobile__19UYL')[0]

            btn_goToTop = document.getElementsByClassName('Header_goToTop__3G4JL')[0]
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header.style.backgroundColor = "#18C3FF"
                header.style.width = '100%'
                btn_goToTop.style.display = 'block'
            } else {
                header.style.backgroundColor = "#3bb7e82f"
                btn_goToTop.style.display = 'none'
                if (screen.width > 1024) {
                    header.style.width = '80%'
                }
            }
        }
    }, [])

    // open adn close the menu_mobile
    function handle_menu() {
        menu_mobile = document.getElementsByClassName('Header_menu_mobile__29HgR')[0]
        header = document.getElementsByClassName('Header_header_mobile__19UYL')[0]

        if (header.style.display === 'flex' || header.style.length <= 0) {
            header.style.display = 'none'
            menu_mobile.style.display = 'flex'
            window.scrollTo(0, 0)
        } else {
            header.style.display = 'flex'
            menu_mobile.style.display = 'none'
        }
    }

    // go to top
    function goToTop() {
        menu_mobile = document.getElementsByClassName('Header_menu_mobile__29HgR')[0]
        header = document.getElementsByClassName('Header_header_mobile__19UYL')[0]
        if (screen.width <= 1024) {
            menu_mobile.style.display = 'none'
            header.style.display = 'flex'
        }

        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(goToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_header}>
                <header className={styles.header}>
                    <div className={styles.left_header}>
                        <a href="/">Info-Tec</a>
                    </div>

                    <div className={styles.rigth_header}>
                        <Link href="#planos">Nossos Planos</Link>
                        <Link href="#onde">Onde Atendemos</Link>
                        <Link href="#quem_somos">Quem Somos</Link>

                        <div className={styles.dropdown}>
                            <p className={styles.dropdown_btn}>Está Sem Internet?</p>
                            <div className={styles.dropdown_content}>
                                <Link href='https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?%20Estou%20com%20problemas%20na%20internet'>Abrir chamado</Link>
                            </div>
                        </div>
                        <p className={styles.area_do_cliente_btn}>
                            <Link href="https://portal.interativabr.com.br/facilita" >Área do Cliente</Link>
                        </p>

                    </div>
                </header>
                {/* HEADER-MOBILE */}
                <header className={styles.header_mobile}>
                    <div className={styles.left_header}>
                        <a href="/">Info-Tec</a>
                    </div>

                    <button className={styles.btn_menu} onClick={() => handle_menu()}>
                        <img src="/menu.png" alt="ícone de um botão para abrir o menu de opções" />
                    </button>
                </header>

                {/* MENU-MOBILE */}
                <header className={styles.menu_mobile}>
                    <div className={styles.header_menu}>
                        <a href="/">Info-Tec</a>
                        <button className={styles.btn_menu} onClick={() => handle_menu()}>
                            <img src="/close.png" alt="ícone de um botão para abrir o menu de opções" />
                        </button>
                    </div>
                    <hr />

                    <div className={styles.body_menu}>
                        <Link href="#planos">Nossos Planos</Link>
                        <Link href="#onde">Onde Atendemos</Link>
                        <Link href="#quem_somos">Quem Somos</Link>
                        <p className={styles.area_do_cliente_btn}>
                            <Link href="https://portal.interativabr.com.br/facilita" >Área do Cliente</Link>
                        </p>
                    </div>
                </header>
            </div>
            {/* MAIN-INFOS */}
            <div className={styles.sides}>
                <div className={styles.left}>
                    <img src="/robo.png" alt="logo do robozinho da info-tec" className={styles.robo_image} />
                </div>

                <div className={styles.rigth}>
                    <h1>Site da info-tec em desenvolvimento</h1>
                    <h3>Estamos trabalhando para cada dia  lhe atender melhor.</h3>

                    <div className={styles.contato}>
                        <p>Você pode entrar em contato conôsco, é só mandar uma mensagem para o nosso whatsapp :)</p>

                        <button className={styles.btn_whatsapp} onClick={() => sendWhatsappMessage()}>
                            Mandar mensagem!
                        </button>
                    </div>
                </div>
            </div>

            {/* GO TO TOP BUTTON */}
            <button className={styles.goToTop} onClick={() => goToTop()}>
                <img src="/top.png" alt="ícone de seta para cima para levar o usuário para o topo da página" />
            </button>
        </div>
    )
}