# 🎮 Pokémon World

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PokéAPI](https://img.shields.io/badge/API-PokéAPI-EF4444?style=flat-square)](https://pokeapi.co/)

A premium, high-performance Pokémon explorer built with **Next.js 16** and **Tailwind CSS 4**. This application offers a seamless experience for discovering Pokémon, featuring advanced filtering, glass-morphic design, and smooth animations.

---

## ✨ Key Features

- **🌈 Type-Based Filtering**: Explore Pokémon species categorized by their elemental types with color-coded interactive badges.
- **💎 Premium UI/UX**: Experience a modern "glassmorphism" aesthetic with backdrop blurs, subtle gradients, and floating animations.
- **⚡ High Performance**: Utilizing Next.js Server Components and advanced caching for near-instant data loading.
- **📱 Fully Responsive**: Optimized for everything from mobile phones to high-resolution desktops.
- **🌓 Dark Mode Ready**: Deeply integrated dark theme support with high-contrast elements.
- **🔢 Smart Pagination**: Effortlessly navigate through thousands of Pokémon species.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Components)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (New JIT engine, modern CSS variables, and `@theme` support)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed for reliability)
- **Package Manager**: [Bun](https://bun.sh/) (Extremely fast runtime and bundle management)
- **API**: [PokéAPI](https://pokeapi.co/) (The ultimate Pokémon database)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdouxone/pokemon-world
cd pokemon-world
```

### 2. Install dependencies

We recommend using **Bun** for the best performance:

```bash
bun install
# or
npm install
```

### 3. Run the development server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the magic!

---

## 📁 Project Structure

```bash
├── app/
│   ├── globals.css       # Design system (variables, glassmorphism, animations)
│   ├── layout.tsx        # Base layout & font configuration
│   └── page.tsx          # Main entry point with Server-Side fetching
├── components/
│   ├── PokemonCard.tsx   # Premium glassmorphic card with floating animations
│   ├── PokemonFilters.tsx # Iconic color-coded type filter badges
│   ├── PokemonList.tsx    # Responsive grid layout with optimized breakpoints
│   └── PokemonPagination.tsx # Modern interactive navigation
├── lib/
│   └── pokeapi.ts        # Data fetching layer with extended caching
├── types/
│   └── types.ts          # Centralized TypeScript interfaces
└── next.config.ts        # Image optimization & remote patterns
```

---

## 🔌 API Reference

Everything is powered by the [PokéAPI](https://pokeapi.co/).

| Endpoint               | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `/type`                | Fetching categorical data                    |
| `/type/{name}`         | Filtering Pokémon by their elemental essence |
| `/pokemon`             | Main paginated list of species               |

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

> Pokémon and all related names are trademarks of Nintendo / Game Freak. This project is fan-made and not affiliated with or endorsed by Nintendo.
