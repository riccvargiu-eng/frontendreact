// src/app/shop/page.jsx
import Link from "next/link";

const prodotti = {
  elettronica: {
    laptop: { nome: "Laptop Pro", prezzo: "999€" },
  },
  abbigliamento: {
    maglietta: { nome: "Maglietta Cool", prezzo: "29€" },
    jeans: { nome: "Jeans Slim", prezzo: "59€" },
  },
};

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      {Object.entries(prodotti).map(([categoria, items]) => (
        <div key={categoria} style={{ marginBottom: "2rem" }}>
          <h2>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
          <ul>
            {Object.entries(items).map(([id, prodotto]) => (
              <li key={id}>
                <Link href={`/shop/${categoria}/${id}`}>
                  {prodotto.nome} - {prodotto.prezzo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
