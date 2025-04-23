# 🚀 Projeto: Layout Responsivo com Interações

## Descrição dos Ambientes 

Versão do Projeto: **HTML, CSS** e **JavaScript**

## Ambientes e Estado do Menu

- [✅ Menu com cor ativa ON](https://vidigal-code.github.io/challenge-avanti-e/)
  - Visual fiel ao Figma.
  - Este é o ambiente padrão sem sistema de tradução.
  - A cor ativa do menu está funcionando corretamente.

- [🌙 Menu com cor ativa OFF](https://challenge-avanti-e.vercel.app/)
  - Este é o ambiente padrão sem sistema de tradução.
  - A cor ativa do menu **não está** aplicada.

- [🌍 Com sistema de tradução | ✅ Menu com cor ativa ON](https://challenge-avanti-e-git-language-046f3d-kauan-vidigals-projects.vercel.app/)
  - Tradução funcionando.
  - Visual fiel ao Figma.
  - Cor ativa do menu aplicada corretamente.

- [🌍 Com sistema de tradução | 🌙 Menu com cor ativa OFF](https://challenge-avanti-e-git-language-28c3e9-kauan-vidigals-projects.vercel.app/)
  - Este ambiente está totalmente fiel ao Figma.
  - Sistema de tradução integrado.
  - A cor ativa do menu **não está** aplicada.


### 📝 Objetivo:
Desenvolver um layout proposto utilizando **HTML, CSS** e **JavaScript**.

## ✅ Requisitos:

### 1️⃣ Estrutura HTML
- Criar a estrutura da página conforme o layout fornecido.

### 2️⃣ Estilização com CSS
- Aplicar estilos garantindo um layout **responsivo** (Desktop e Mobile).

### 🖼️ Layout

**🔍 Versão Desktop:**

![Campo de Busca Desktop](assets/example/page-layout-design-Desktop.gif)
---

**📱 Versão Mobile:**

![Campo de Busca Desktop](assets/example/page-layout-design-Mobile.gif)
---


### 3️⃣ Funcionalidade com JavaScript

- **Objetivo**: Implementar um campo de busca.
- **Funcionalidade**:
    - Ao clicar no botão de busca, exibe a mensagem:
      > **Você buscou por: _'termo digitado'_**
---

### 🖼️ Visual do Campo de Busca

---

**🔍 Versão Desktop:**

![Campo de Busca Desktop](assets/example/search-example-Desktop.gif)

---

**📱 Versão Mobile:**

![Campo de Busca Desktop](assets/example/search-example-Mobile.gif)

---

### Resumo do código Search.JS:

O **Search.JS** gerencia o histórico de buscas de um usuário. Quando um termo é pesquisado, ele:
1. Exibe a mensagem de "Você buscou por: _'termo digitado'_".
2. Adiciona a pesquisa ao histórico (limitado a 10 entradas).
3. Exibe uma lista de buscas anteriores, com a possibilidade de limpar ou selecionar uma pesquisa passada.
4. Se o campo de busca estiver vazio, mostra um aviso solicitando ao usuário para digitar algo.
5. Permite ao usuário fechar o popup ou visualizar o histórico.

### Funcionalidade Detalhada:

- **Gerenciamento do Histórico de Buscas**: O histórico é armazenado localmente no navegador e exibido quando o usuário clica no botão de histórico.
- **Eventos de Interação**: O código detecta interações, como pressionamento da tecla Enter ou cliques no ícone de busca.
- **Feedback Visual**: O código fornece feedback visual, como mensagens de erro ou confirmação, dependendo do estado da pesquisa.

Esse script melhora a experiência de busca ao fornecer feedback em tempo real e permitir o acesso rápido a buscas anteriores.

---

## 🚀 Carrossel de Produtos - `Carousel.JS`

### 🖼️ Visual do Carrossel

**🔍 Versão Desktop:**

![Campo de Busca Desktop](assets/example/carousel-example-Desktop.gif)

**📱 Versão Mobile:**

![Campo de Busca Mobile](assets/example/carousel-example-Mobile.gif)



### 🧠 Resumo do código **Carousel.JS**

O **Carousel.JS** controla a exibição interativa de produtos em um carrossel. Ele:

1️⃣ Cria dinamicamente os cards de produtos a partir de um array.  
2️⃣ Permite navegar entre páginas com **botões** e **bolinhas indicadoras**.  
3️⃣ Se adapta automaticamente à largura da tela (responsivo).  
4️⃣ Move os itens com transição suave utilizando `transform: translateX(...)`.

---

### ⚙️ Funcionalidades Detalhadas

- **🧱 Geração dos Cards de Produto**:  
  Cada produto é renderizado com imagem, nome, preços e botão de compra.

- **🔘 Indicadores Clicáveis**:  
  Pequenas bolinhas (dots) indicam a página atual e podem ser clicadas para navegação direta.

- **↔️ Botões Anterior/Próximo**:  
  Permite alternar entre páginas do carrossel manualmente.

- **📐 Responsivo**:  
  Detecta a largura da tela e exibe de 1 a 5 produtos por página automaticamente.

- **⏱️ Autoplay (opcional)**:  
  Troca de páginas automaticamente em intervalos definidos, para manter o conteúdo sempre em movimento.

---

## 🚀 MenuList - DeskTopMenuList - `DesktopMenuList.JS` 

### 🖼️ Visual do MenuList

**🔍 Versão Desktop:**

![Campo de Busca Desktop](assets/example/page-layout-design-menulist-Desktop.gif)

---

### Resumo do código MenuHandler (DesktopMenuList.js):

O **MenuHandler** gerencia a navegação do menu desktop do site. Ele:
1. Inicializa e popula os menus de departamentos e categorias.
2. Permite abrir e fechar o menu de navegação.
3. Alterna entre a visualização de departamentos e categorias.
4. Expõe métodos globais para interação com o menu.

### Funcionalidade Detalhada:
- **Gerenciamento de Elementos**: Manipula containers e conteúdos para menus de departamentos e categorias.
- **Criação Dinâmica**: Gera itens de departamentos (com suporte a tradução) e categorias.
- **Interatividade**: Implementa funções para abrir e fechar o menu, com controle visual dos elementos.
- **Internacionalização**: Integra com um sistema de tradução para textos do menu.

---

## 🚀 MenuList - MobileMenu - `MobileMenu.JS`


**📱 Versão Mobile:**

![Campo de Busca Mobile](assets/example/page-layout-design-menulist-Mobile.gif)

---

### Resumo do código MobileMenu.js:

O **MobileMenu** gerencia a versão móvel do menu de navegação. Ele:
1. Controla a exibição do menu através de botões de toggle.
2. Popula listas de categorias com itens predefinidos.
3. Implementa a navegação entre departamentos e atualiza o título da seção.
4. Inicializa a interface apenas quando os elementos necessários estão presentes.

### Funcionalidade Detalhada:
- **Toggle do Menu**: Adiciona/remove a classe 'active' para mostrar/esconder o menu.
- **População Dinâmica**: Cria e adiciona itens às listas de categorias.
- **Navegação Contextual**: Atualiza o título conforme o departamento selecionado.
- **Inicialização Condicional**: Verifica a existência dos elementos antes de inicializar.

Ambos os componentes trabalham de forma complementar para fornecer uma experiência de navegação consistente em diferentes dispositivos, adaptando a apresentação e a interatividade conforme o tamanho da tela.

---

## 🚀 Lang -   `SelectLang.JS` and `Lang.JS`

# Resumo do Arquivo de Traduções (Lang.json)

## Estrutura Geral
O arquivo JSON contém traduções para uma loja virtual em três idiomas:
- **Português (pt)** - idioma principal/padrão
- **Inglês (en)**
- **Espanhol (es)**

## Categorias de Traduções
O arquivo organiza as traduções nas seguintes seções principais:

### 1. Identificadores de Idiomas
```json
"menu": {
  "pt": "Português",
  "en": "Inglês",
  "es": "Espanhol"
}
```
Define como cada idioma é exibido no seletor de idiomas.

### 2. Interface de Busca
Contém strings para o campo de busca, mensagens de erro e histórico de pesquisas:
- Placeholders do campo de busca
- Mensagens de erro e resultados
- Gerenciamento do histórico

### 3. Promoções e Descontos
Textos para banners promocionais e ofertas:
- Mensagens de desconto para novos usuários
- Informações sobre cupons
- Destaque de novos produtos

### 4. Navegação e Categorias
Termos para o sistema de navegação:
- Cabeçalhos de departamentos
- Botões de ação ("Ver todos", "Limpar")
- Títulos de seções da loja

### 5. Newsletter
Formulário de inscrição para newsletter:
- Campos de entrada (nome, email)
- Textos de concordância com políticas
- Botão de registro

### 6. Rodapé Institucional
Informações da empresa organizadas em subseções:
- Links institucionais (Sobre Nós, Termos e Condições)
- Central de ajuda (FAQ, Entregas, Trocas)
- Atendimento ao cliente (Contato, Horários)
- Textos legais

## Características
- Estrutura consistente entre os três idiomas
- Suporte a formatação com placeholders "{0}"
- Organização hierárquica para facilitar manutenção
- Textos específicos adaptados culturalmente para cada idioma (ex: formatos de horário e moeda)

---

**🔍 Versão Desktop:**

![Campo de Busca Mobile](assets/example/page-layout-design-lang-Desktop.gif)

---

**📱 Versão Mobile:**

![Campo de Busca Mobile](assets/example/page-layout-design-lang-Mobile.gif)

---

### Resumo do código SelectLang.js:

O **LanguageSelector** implementa um seletor de idiomas para a aplicação. Ele:
1. Inicializa um seletor de idiomas nas versões desktop e mobile do site.
2. Gerencia a preferência de idioma do usuário, armazenando-a no localStorage.
3. Conecta-se ao sistema de tradução para atualizar textos da interface.
4. Exibe opções de idioma com base na configuração de idiomas suportados.

### Funcionalidade Detalhada:
- **Inicialização Dinâmica**: Importa e integra-se com o TranslationManager.
- **Criação de Interfaces**: Gera seletores para as versões desktop e mobile.
- **Persistência de Preferências**: Salva a escolha do idioma no armazenamento local.
- **Atualização em Tempo Real**: Atualiza todos os textos quando o idioma é alterado.

---

### Resumo do código Lang.js:

O **TranslationManager** gerencia o sistema de internacionalização da aplicação. Ele:
1. Carrega arquivos de tradução a partir de um JSON.
2. Aplica traduções aos elementos da interface conforme o idioma selecionado.
3. Suporta formatação HTML, placeholders e traduções aninhadas.
4. Persiste a preferência de idioma do usuário e disponibiliza métodos para alterá-la.

### Funcionalidade Detalhada:
- **Carregamento de Traduções**: Obtém as traduções via fetch de um arquivo JSON.
- **Tradução Dinâmica**: Aplica traduções a elementos com base em seletores e atributos.
- **Formatos Avançados**: Suporta HTML, placeholders e hierarquias de chaves de tradução.
- **Fallback Inteligente**: Utiliza o idioma padrão quando uma tradução não está disponível.
- **Atualização Global**: Método para atualizar todos os textos traduzíveis da interface.

Ambos os componentes trabalham em conjunto para proporcionar uma experiência multilíngue fluida, permitindo que os usuários alternem entre idiomas e mantenham sua preferência entre sessões.

---

## Autor

[Kauan Vidigal] - Desenvolvedor Full Stack - Versão do Projeto: **HTML, CSS** e **JavaScript**



