const prodotti = {
  elettronica: {
    laptop: { nome: "Laptop Pro", prezzo: "999€" },
  },
};

export default async function Prodotto({ params }) {
  const item = await prodotti[params.category]?.[params.id];

  if (!item) return <p>Prodotto non trovato</p>;

  return (
    <div>
      <h1>{item.nome}</h1>
      <p>{item.prezzo}</p>
    </div>
  );
}
