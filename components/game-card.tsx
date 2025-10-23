"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Game {
  id: number
  title: string
  price: number
  image: string
  discount: number | null
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={game.image || "/placeholder.svg"}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {game.discount && (
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-lg font-bold text-sm">
            -{game.discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">{game.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">R$ {game.price.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  )
}
