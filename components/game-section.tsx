import { GameCard } from "@/components/game-card"

interface Game {
  id: number
  title: string
  price: number
  image: string
  discount: number | null
}

interface GameSectionProps {
  title: string
  games: Game[]
}

export function GameSection({ title, games }: GameSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Ver todos
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
