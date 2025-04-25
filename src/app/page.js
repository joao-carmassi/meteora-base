import styles from './page.module.css';
import { Categorias } from './components/Categorias';
import { Produtos } from './components/Produtos';
import { getCategorias } from '../lib/api';

async function fetchProdutosApi() {
  const res = await fetch(
    'https://api.npoint.io/9ef5cde0bd8aba3ab992/produtos'
  );

  if (!res.ok) {
    throw new Error('Não foi possivel obter os dados');
  }

  const produtos = await res.json();

  return produtos;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = getCategorias();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
