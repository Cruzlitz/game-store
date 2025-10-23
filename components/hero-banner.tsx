import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/epic-sci-fi-game-hero-banner-with-futuristic-city.jpg" alt="Hero game" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm font-medium">
            Novo Lançamento
          </div>
          <h1 className="text-6xl font-bold leading-tight text-balance">Cyber Legends 2077</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Entre em um mundo futurista onde a tecnologia e a humanidade se encontram. Explore uma metrópole vibrante e
            faça escolhas que moldarão o destino da cidade.
          </p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Comprar Agora - R$ 59,99
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Ver Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
