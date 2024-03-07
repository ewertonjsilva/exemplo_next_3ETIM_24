import Link from "next/link"; 

import { useRouter } from 'next/router'

export default function Produto() {

    const router = useRouter()

    const produtoId = router.query.id;  

    return (
        <>
            <h1>Produto</h1>
            <p>Dados do produto ${produtoId}</p>
            <Link href={"/listaprodutos"}>Home</Link>
        </>
    );
}