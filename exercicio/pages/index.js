import Link from 'next/Link';
const HomePage = () => {
  return <>
    <h1>
      Noticias
    </h1>
    <ul>
        <li>
          <Link href="/esportes">
            Esportes
          </Link>
        </li>
        <li>
          <Link href="/politica">
            Politica
          </Link>
        </li>
    </ul>
  </>
}

export default HomePage;