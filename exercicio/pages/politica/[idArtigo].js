import  { useRouter } from "next/router";
import Link from 'next/Link';

const ArtigosPoliticaPage = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/politica">
                    Voltar
            </Link>
            <p>{router.query.idArtigo}</p>
        </>
    )
}

export default ArtigosPoliticaPage;