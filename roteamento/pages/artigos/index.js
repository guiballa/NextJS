import React from "react"
import Link from 'next/link'

const ArtigosPage = () => {
    return (
        <>
            <h1>
                Artigos
            </h1>
            <ul>
                <li>
                    <Link href="/artigos/programa-com-java">
                        Programação com Java
                    </Link>
                </li>

                <li>
                    <Link href="/artigos/programa-com-python">
                        Programação com Python
                    </Link>
                </li>

            </ul>
        </>
    )
}

export default ArtigosPage