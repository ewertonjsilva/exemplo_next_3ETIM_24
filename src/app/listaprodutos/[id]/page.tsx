import Link from "next/link";

import produtos from '../../../produtos';

export default function Produto({ params }: { params: { id: string } }) {

    const produto = produtos.filter((prd, index, array) => prd.id === parseInt(params.id));

    return (
        <>
            <h1>Produto</h1>
            <p>Dados do produto {params.id}</p>

            {
                produtos.map(
                    (prod) => {
                        if (prod.id == parseInt(params.id)) {
                            return (
                                <div key={prod.id}>
                                    <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', alignItems: 'flex-end' }}>
                                        <p>Nome: </p>
                                        <span>{prod.nome}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', alignItems: 'flex-end' }}>
                                        <p>Marca: </p>
                                        <span>{prod.marca}</span>
                                    </div>
                                </div>
                            );
                        }
                    }
                )
            }

            <br />

            <div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', alignItems: 'flex-end' }}>
                    <p>Nome: </p>
                    <span>{produto[0].nome}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '1rem', alignItems: 'flex-end' }}>
                    <p>Marca: </p>
                    <span>{produto[0].marca}</span>
                </div>
            </div>

            <Link href={"/listaprodutos"}>Home</Link>
        </>
    );
}