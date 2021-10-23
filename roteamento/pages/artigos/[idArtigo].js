import { useRouter } from "next/router"
import Link from 'next/link'

const DetalhesPage = () => {
    const router = useRouter()
    console.log(router.query.idArtigo)
    return (
        <>
            <Link href="/artigos">
                Voltar
            </Link>
            <h1>
                Detalhes
            </h1>
        </>
    )
}

export default DetalhesPage