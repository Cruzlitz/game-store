# Projeto GameStore

Este é um projeto front-end que simula a página inicial de uma loja de jogos digitais (GameStore). Ele demonstra uma interface de usuário moderna e responsiva, construída com Next.js, Tailwind CSS e shadcn/ui.

## 🎮 Visão Geral

A aplicação é uma *landing page* estática que exibe jogos de forma organizada. A página principal é composta por:

* **Cabeçalho (`Header`)**: Inclui o logo "GameStore", links de navegação (Loja, Biblioteca, Comunidade), uma barra de busca e ícones para o carrinho de compras e perfil de usuário.
* **Banner Principal (`HeroBanner`)**: Uma seção de grande destaque para um "Novo Lançamento", com botões de compra e trailer.
* **Seções de Jogos (`GameSection`)**: O corpo da página é dividido em seções como "Mais Vendidos", "Novidades" e "Em Promoção".
* **Card de Jogo (`GameCard`)**: Um componente reutilizável que exibe a arte do jogo, título, preço e um botão "Adicionar ao Carrinho" que aparece ao passar o mouse.

## ✨ Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno de front-end:

* **Framework**: [Next.js](https://nextjs.org/) (utilizando o App Router).
* **Linguagem**: [TypeScript](https://www.typescriptlang.org/).
* **Estilização**: [Tailwind CSS](https://tailwindcss.com/).
* **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/), uma coleção de componentes reutilizáveis construídos sobre Radix UI.
* **Ícones**: [Lucide React](https://lucide.dev/).
* **Temas**: Suporte a Dark Mode (tema claro e escuro) implementado com `next-themes` e variáveis de cor OKLCH em `globals.css`.
* **Fontes**: `Geist` e `Geist Mono`.
* **Gerenciador de Pacotes**: `pnpm` (indicado pela presença do arquivo `pnpm-lock.yaml`).

## 🚀 Como Executar

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

* [Node.js](https://nodejs.org/en) (versão 18 ou superior)
* [pnpm](https://pnpm.io/installation)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
    cd game-store
    ```

2.  Este projeto usa `pnpm`. Se você não o tiver, instale-o globalmente:
    ```bash
    npm install -g pnpm
    ```

3.  Instale as dependências do projeto:
    ```bash
    pnpm install
    ```

### Executando o Projeto

1.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm dev
    ```

2.  Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em funcionamento.
