import Link from "next/link";

import produtos from '../produtos';

export default function ListaProdutos() {
    return (
        <>
            <h1>Produtos</h1>
            {/* <ol>
                <Link href={"/listaprodutos/1"}><li>Produto 1</li></Link>
                <Link href={"/listaprodutos/2"}><li>Produto 2</li></Link>
                <Link href={"/listaprodutos/3"}><li>Produto 3</li></Link>
            </ol> */}

            <ol>
                {
                    produtos.map(
                        (prod) =>
                            <Link href={`/listaprodutos/${prod.id}`} key={prod.id}>
                                <li>{prod.nome}</li>
                            </Link>
                    )
                }
                {/* {produtos.map((prod) => prod.nome)} */}
            </ol>

            <Link href={"/"}>Home</Link>
        </>
    );
}