import { useState } from "react";

export default function RandomPokemonSprite() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRandomPokemon = async () => {
    try {
      setLoading(true);
      setError("");

      const id = Math.floor(Math.random() * 1025) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      if (!res.ok) throw new Error("ポケモン情報の取得に失敗しました");

      const data = await res.json();

      setPokemon({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h1>ランダムポケモン表示</h1>

      <button onClick={getRandomPokemon} disabled={loading}>
        {loading ? "取得中..." : "ランダム表示"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {pokemon && (
        <div style={styles.spriteArea}>
          {pokemon.image ? (
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={styles.sprite}
            />
          ) : (
            <p>ドット絵画像がありません</p>
          )}
          <p>No. {pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    paddingTop: "24px",
  },
  spriteArea: {
    width: "100%",
    minHeight: "360px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  sprite: {
    width: "240px",
    height: "240px",
    imageRendering: "pixelated",
  },
  error: {
    color: "red",
  },
};