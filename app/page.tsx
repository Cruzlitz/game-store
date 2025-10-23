import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { GameSection } from "@/components/game-section"

export default function Home() {
  const bestSellers = [
    {
      id: 1,
      title: "Cyber Legends 2077",
      price: 59.99,
      image: "/futuristic-cyberpunk-game-cover-art.jpg",
      discount: null,
    },
    {
      id: 2,
      title: "Fantasy Quest IX",
      price: 49.99,
      image: "/epic-fantasy-rpg-game-cover.jpg",
      discount: null,
    },
    {
      id: 3,
      title: "Speed Racers Ultimate",
      price: 39.99,
      image: "/racing-game-cover.png",
      discount: null,
    },
    {
      id: 4,
      title: "Battle Royale Arena",
      price: 29.99,
      image: "/battle-royale-shooter-game-cover.jpg",
      discount: null,
    },
  ]

  const newReleases = [
    {
      id: 5,
      title: "Stellar Odyssey",
      price: 69.99,
      image: "/space-exploration-game-cover.png",
      discount: null,
    },
    {
      id: 6,
      title: "Ninja Warriors Legacy",
      price: 44.99,
      image: "/ninja-action-game-cover.jpg",
      discount: null,
    },
    {
      id: 7,
      title: "Horror Mansion",
      price: 34.99,
      image: "/horror-survival-game-cover.jpg",
      discount: null,
    },
    {
      id: 8,
      title: "Sports Champions 2025",
      price: 59.99,
      image: "/sports-game-cover.jpg",
      discount: null,
    },
  ]

  const onSale = [
    {
      id: 9,
      title: "Ancient Kingdoms",
      price: 19.99,
      image: "/strategy-game-medieval-cover.jpg",
      discount: 60,
    },
    {
      id: 10,
      title: "Zombie Apocalypse",
      price: 14.99,
      image: "/zombie-shooter-game-cover.jpg",
      discount: 70,
    },
    {
      id: 11,
      title: "Puzzle Master Pro",
      price: 9.99,
      image: "/puzzle-game-colorful-cover.jpg",
      discount: 50,
    },
    {
      id: 12,
      title: "Adventure Island",
      price: 24.99,
      image: "/adventure-platformer-game-cover.jpg",
      discount: 50,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <div className="container mx-auto px-4 py-12 space-y-16">
          <GameSection title="Mais Vendidos" games={bestSellers} />
          <GameSection title="Novidades" games={newReleases} />
          <GameSection title="Em Promoção" games={onSale} />
        </div>
      </main>
    </div>
  )
}
