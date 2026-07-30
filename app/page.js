import Link from 'next/link';

export default function Home() {
const teses = [
    { nome: 'WEG', ticker: 'WEGE3', data: 'Jul 2026', slug: 'weg', setor: 'Industrial' },
    { nome: 'Ambev', ticker: 'ABEV3', data: 'Jun 2026', slug: 'ambev', setor: 'Consumo' },
    { nome: 'Engie Brasil', ticker: 'EGIE3', data: 'Mai 2026', slug: 'engie', setor: 'Energia' },
  ];

  return (
    <>
      <section className="cover">
        <div className="cover-content">
          <span className="eyebrow">Teses de investimento</span>
          <h1>Teses de investimento fundamentadas em pesquisa e análise</h1>
          <p>Teses de investimento desenvolvidas a partir de demonstrações financeiras, documentos oficiais e análise dos fundamentos de cada empresa</p>
        </div>
      </section>

<main className="tese-grid">
        {teses.map((t) => (
          <Link className="card" href={`/teses/${t.slug}`} key={t.ticker}>
            <span className="tag">{t.setor}</span>
            <div>
              <p className="card-eyebrow">Tese de investimento</p>
              <h2>{t.nome}</h2>
              <p className="ticker">{t.ticker}</p>
            </div>
            <div className="card-foot">
              <span className="name">Andressa Rocha</span>
              <span className="date">{t.data}</span>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}