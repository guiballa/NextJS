import Link from 'next/Link';
import React from 'react';

const PoliticaPage = () => {
    return (
    <React.Fragment>
        <Link href="/">
                Voltar
        </Link>
        <h1>
            Politica
        </h1>
        <ul>
            <li>
                <Link href='/politica/lei'>
                    Senado aprova nova de lei improbidade
                    (PL 2505/2021)
                </Link>
            </li>
        </ul>
    </React.Fragment>
    )
}

export default PoliticaPage;