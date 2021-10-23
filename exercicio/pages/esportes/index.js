import Link from 'next/Link';

const EsportesPage = () => {
    return (
    <>
    <Link href="/">
        Voltar
    </Link>
    <ul>
        <li>
            <Link href='/esportes/xadrez'>
                Olimpiadas de Xadrez, estão chegando.
            </Link>
        </li>
        <li>
            <Link href='/esportes/volei'>
                Seleção de volei é campeã mais uma vez
            </Link>
        </li>
    </ul>
    </>
    )
}

export default EsportesPage;