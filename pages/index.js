import styles from "../styles/Home.module.css"
import Head from 'next/head'

import Plano from '../components/Plano'
import QuemSomos from '../components/QuemSomos'
import Onde from '../components/Onde'
import Footer from '../components/Footer'

export default function Home() {
  function sendWhatsappMessage() {
    window.location.href = 'https://wa.me/+5589994578337?text=Olá,%20Tudo%20Bem?'
  }

  return (
    <div className={styles.container} id="topo">
      <Head>
        <title>INFO-TEC Piauí</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />

        {/* SEO */}
        {/*  <!-- Primary Meta Tags --> */}
        <meta name="description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Info-tec, mais que produtos, vendemos soluções." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infotecpi.com.br/" />
        <meta property="og:title" content="INFO-TEC" />
        <meta property="og:description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Info-tec, mais que produtos, vendemos soluções." />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://infotecpi.com.br/" />
        <meta property="twitter:title" content="INFO-TEC" />
        <meta property="twitter:description" content="Info-tec, seu melhor provedor de internet fibra-óptica. Info-tec, mais que produtos, vendemos soluções." />
        <meta property="twitter:image" content="" />
      </Head>

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
      {/* PLANOS */}
      <Plano/>
      {/* ONDE ESTAMOS */}
      <Onde/>
      {/* QUEM SOMOS */}
      <QuemSomos/>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}