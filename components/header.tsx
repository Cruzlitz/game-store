import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold">GameStore</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Loja
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Biblioteca
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Comunidade
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar jogos..." className="pl-10 bg-muted border-border" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
