import  { useRouter } from "next/router";
import Link from 'next/Link';

const ArtigosEsportesPage = () => {
    const router = useRouter()
    return (
        <>
            <Link href="/esportes">
                    Voltar
            </Link>
            <p>{router.query.idArtigo}</p>
        </>
    )
}

export default ArtigosEsportesPage;