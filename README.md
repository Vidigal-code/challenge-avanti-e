# Projeto: Layout Responsivo com React e TypeScript

## Ambientes e Estado do Menu 

Versão do Projeto: **React, TypeScript** e **Vite**

- [✅ Menu com cor ativa ON](https://challenge-avanti-j9s8tm0g1-kauan-vidigals-projects.vercel.app)
   - Visual fiel ao Figma.
   - Este é o ambiente padrão sem sistema de tradução.
   - A cor ativa do menu está funcionando corretamente.

- [🌙 Menu com cor ativa OFF](https://challenge-avanti-lp9s0lf30-kauan-vidigals-projects.vercel.app/)
   - Este é o ambiente padrão sem sistema de tradução.
   - A cor ativa do menu **não está** aplicada.

- [🌍 Com sistema de tradução | ✅ Menu com cor ativa ON](https://challenge-avanti-hpqlqyrhx-kauan-vidigals-projects.vercel.app)
   - Tradução funcionando.
   - Visual fiel ao Figma.
   - Cor ativa do menu aplicada corretamente.

- [🌍 Com sistema de tradução | 🌙 Menu com cor ativa OFF](https://challenge-avanti-cpeafi8z3-kauan-vidigals-projects.vercel.app)
   - Este ambiente está totalmente fiel ao Figma.
   - Sistema de tradução integrado.
   - A cor ativa do menu **não está** aplicada.

## 📋 Visão Geral

Este projeto implementa um layout responsivo de e-commerce usando **React**, **TypeScript** e **SCSS**. A aplicação
apresenta uma interface completa com múltiplos componentes interativos e suporte a internacionalização.

A aplicação é configurada com o **Vite**, que proporciona um ambiente de desenvolvimento rápido e eficiente, com suporte

### 🧰 Tecnologias Principais

- **React 19** – Biblioteca JavaScript moderna para criação de interfaces de usuário
- **TypeScript** – Superset tipado de JavaScript, garantindo maior segurança no desenvolvimento
- **Vite** – Ferramenta de build e servidor de desenvolvimento rápido
- **Tailwind CSS** – Framework utilitário para estilização com CSS
- **React Icons** – Biblioteca de ícones personalizáveis para React
- **SWC** – Compilador ultrarrápido usado pelo plugin React do Vite
- **SASS (SCSS)** – Pré-processador CSS para estilização avançada

### ⚙️ Ferramentas de Desenvolvimento

- **ESLint** – Ferramenta de linting para garantir qualidade e consistência do código

O projeto está estruturado para suportar um fluxo de desenvolvimento moderno, incluindo scripts para ambiente local,
build de produção, linting e visualização de preview.

O foco da aplicação é construir uma interface de e-commerce **responsiva**, adaptável para **desktop e mobile**,
seguindo um layout predefinido com interatividade construída em **React**.

## 🚀 Principais Recursos

### 🖼️ Layout

**🔍 Versão Desktop:**

![Desktop](https://github.com/Vidigal-code/challenge-avanti-e/blob/main/assets/example/page-layout-design-Desktop.gif?raw=true)
---

**📱 Versão Mobile:**

![Mobile](https://github.com/Vidigal-code/challenge-avanti-e/blob/main/assets/example/page-layout-design-Mobile.gif?raw=true)
---

### 1️⃣ Layout Responsivo

- Interface adaptável para desktop e dispositivos móveis
- Menus de navegação otimizados para diferentes tamanhos de tela
- Elementos de UI redesenhados para experiência móvel

### 2️⃣ Sistema de Busca

- Campo de busca funcional com feedback visual
- Armazenamento do histórico de buscas
- Interface para visualizar e gerenciar buscas anteriores

### 3️⃣ Carrossel de Produtos

- Exibição de produtos com rolagem automática
- Navegação manual através de botões e indicadores
- Layout responsivo que ajusta o número de itens conforme a largura da tela

### 4️⃣ Suporte Multilíngue

- Internacionalização completa (Português, Inglês e Espanhol)
- Persistência da seleção de idioma entre sessões
- Estrutura de tradução flexível com suporte a formatação

## 🧩 Componentes Principais

### 📌 Header (`Header.tsx`)

O componente `Header` é responsável por renderizar a **barra superior da aplicação**, oferecendo suporte completo a
navegação, seleção de idioma e exibição dinâmica de categorias e departamentos.

#### 🧩 Funcionalidades

- **Menu de navegação com dropdown**
- **Sistema de busca integrado**
- **Seletor de idiomas dinâmico**
- **Menu móvel com ícone de hambúrguer**
- **Faixa Promocional (stripe):** Mostra mensagens de desconto e cupons dinâmicos com base no idioma selecionado.
- **Logo:** Exibe a imagem da marca no canto esquerdo.
- **Barra de Busca:** Usa o componente `SearchComponent` com suporte para versão mobile ou desktop.
- **Ícones do Usuário:** Inclui ícone de menu (hambúrguer), perfil do usuário e carrinho de compras com contador.
- **Seleção de Idioma:** Um `<select>` permite trocar entre idiomas definidos em `LangJSON`.

Além disso, o componente:
- Usa o hook `useLanguage()` para acessar as traduções.
- Carrega categorias e departamentos simulados de forma assíncrona.
- Controla o estado para saber se está no mobile ou não (`isMobile`).

Tudo isso estilizado via `Header.scss`.


---

### 🔍 **Sistema de Busca (SearchHandler + SearchComponent)**

#### 📦 `SearchComponent`
- Componente **wrapper**.
- Define prefixos para IDs baseados em `isMobile` (ex: `mobile-search-message-input`).
- Passa props para `SearchHandler`.

#### 🧠 `SearchHandler`
Gerencia toda a lógica da busca:
- **inputValue**: valor digitado.
- **searchResult**: resultado da busca.
- **searchHistory**: histórico salvo (até 10 itens no `localStorage`).
- **placeholder dinâmico**: muda em caso de erro.
- **popup**: exibe resultado da busca.
- **history**: exibe histórico se solicitado.
- Usa **traduções** com `useLanguage`.

#### 📌 Funcionalidades:
- Busca com **Enter** ou clique no ícone 🔍.
- Adiciona ao histórico, evitando duplicatas.
- Mostra mensagem de erro se o campo estiver vazio.
- Compatível com **mobile e desktop**.

---


## 🎠 Classe `Carousel` - Exemplo em TypeScript

```typescript
export class Carousel {
   private produtos: Produto[];
   private carouselContent: HTMLElement;
   private indicatorsContainer: HTMLElement;
   private prevBtn: HTMLElement;
   private nextBtn: HTMLElement;
   private containerSelector: string;
   private currentPage: number;
   private itemsPerView: number;
   private totalPages: number;
   private autoScrollInterval: number | null;

   constructor(
           produtos: Produto[],
           carouselContentId: string,
           indicatorsContainerId: string,
           prevBtnId: string,
           nextBtnId: string,
           containerSelector: string
   ) {
      this.produtos = produtos;

      // Obtém os elementos HTML pelo ID
      this.carouselContent = document.getElementById(carouselContentId) as HTMLElement;
      this.indicatorsContainer = document.getElementById(indicatorsContainerId) as HTMLElement;
      this.prevBtn = document.getElementById(prevBtnId) as HTMLElement;
      this.nextBtn = document.getElementById(nextBtnId) as HTMLElement;
      this.containerSelector = containerSelector;

      // Inicializa os valores
      this.currentPage = 0;
      this.itemsPerView = this.getItemsPerView(); // Define com base na largura da tela
      this.totalPages = Math.ceil(this.produtos.length / this.itemsPerView);
      this.autoScrollInterval = null;

      this.init(); // Inicia o carrossel
   }
}
```

---

## 🔍 Explicação

- `produtos`: lista de objetos do tipo `Produto`.
- `carouselContent`: contêiner onde os produtos são exibidos.
- `indicatorsContainer`: elemento que contém os indicadores (bolinhas de navegação).
- `prevBtn` e `nextBtn`: botões de navegação.
- `currentPage`: controla a página/posição atual.
- `itemsPerView`: quantidade de produtos exibidos por vez, depende do tamanho da tela.
- `totalPages`: número total de páginas no carrossel.
- `autoScrollInterval`: temporizador para auto rolagem.

A função `constructor()` serve para inicializar o carrossel com os elementos HTML, definir a quantidade de itens por tela e calcular quantas páginas o carrossel terá, além de disparar a função `init()`.




# 🌍 Sistema de Internacionalização - `Lang.ts` - `LanguageProvider.tsx`

O projeto utiliza um Context Provider para gerenciar traduções:

O `LanguageProvider.tsx` gerencia o idioma da aplicação e fornece traduções com base no arquivo `Lang.json`.

#### Principais recursos:

- Armazena o idioma selecionado no `localStorage`
- Atualiza as traduções automaticamente ao mudar o idioma
- Disponibiliza `language`, `translations` e `setLanguage` via contexto

#### Exemplo de uso:

```tsx
const {language, translations, setLanguage} = useLanguage();

<button onClick={() => setLanguage('pt')}>Português</button>
```

## 🔧 Tecnologias Utilizadas

- **React 19.1.0** com Hooks
- **TypeScript** para tipagem estática
- **SCSS** para estilização modular
- **Vite** como bundler
- **React Icons** para ícones
- **ESLint** para linting de código

## 📱 Responsividade

O layout se adapta dinamicamente a diferentes tamanhos de tela:

- **Desktop**: Layout completo com navegação horizontal
- **Mobile**: Menu hambúrguer, carrossel com menos itens visíveis, e busca otimizada para toque

## 🌍 Internacionalização

O sistema de tradução suporta:

- Troca dinâmica de idiomas sem recarregar a página
- Persistência da preferência de idioma do usuário
- Formatação de textos com placeholders
- Estrutura hierárquica para organização das traduções

## 📂 Configuração do Projeto

```json
{
   "name": "challenge-avanti-e",
   "version": "0.0.0",
   "type": "module",
   "scripts": {
      "dev": "vite",
      "build": "tsc -b && vite build",
      "lint": "eslint .",
      "preview": "vite preview"
   },
   "dependencies": {
      "@tailwindcss/vite": "^4.1.4",
      "react": "^19.1.0",
      "react-dom": "^19.1.0",
      "react-icons": "^5.5.0"
   },
   "devDependencies": {
      "@eslint/js": "^9.25.1",
      "@types/react": "^19.1.2",
      "@types/react-dom": "^19.1.2",
      "@vitejs/plugin-react-swc": "^3.9.0",
      "eslint": "^9.25.1",
      "eslint-plugin-react-hooks": "^5.2.0",
      "eslint-plugin-react-refresh": "^0.4.20",
      "globals": "^16.0.0",
      "sass": "^1.87.0",
      "typescript": "~5.8.3",
      "typescript-eslint": "^8.31.0",
      "vite": "^6.3.3"
   }
}
```

## 🖥️ Execução do Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para build de produção:
   ```bash
   npm run build
   ```

## 👨‍💻 Conclusão

Este projeto demonstra a implementação bem-sucedida de um layout e-commerce responsivo usando React e TypeScript. A
aplicação fornece uma experiência de usuário fluida tanto em dispositivos desktop quanto móveis, com recursos avançados
como pesquisa, carrossel de produtos e suporte a múltiplos idiomas.

## Autor

[Kauan Vidigal] - Desenvolvedor Full Stack - Versão do Projeto: **React, TypeScript** e **Vite**
