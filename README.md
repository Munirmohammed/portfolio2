# Munir Mohammed — Portfolio

> Senior Frontend Developer based in Addis Ababa, Ethiopia. Specializing in high-performance React, Next.js, and TypeScript web applications, interactive dashboards, and scalable UI design systems.

[![GitHub](https://img.shields.io/badge/GitHub-Munirmohammed-181717?style=flat-square&logo=github)](https://github.com/Munirmohammed)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Munir%20Mohammed-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/munir-mohammed-26015220b)
[![Email](https://img.shields.io/badge/Email-munirmohammed038%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:munirmohammed038@gmail.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 👨‍💻 About Me

I am a Senior Frontend Developer passionate about building fast, accessible, and delightful digital products. My focus spans scalable React & Next.js architectures, complex interactive dashboards, fintech flows, and design systems.

- 📍 **Location**: Addis Ababa, Ethiopia
- 💼 **Role**: Senior Frontend Developer
- 📧 **Email**: [munirmohammed038@gmail.com](mailto:munirmohammed038@gmail.com)
- 📱 **Phone**: +251 977 465 797
- 🔗 **LinkedIn**: [munir-mohammed](https://www.linkedin.com/in/munir-mohammed-26015220b)
- 🐙 **GitHub**: [@Munirmohammed](https://github.com/Munirmohammed)

---

## 🚀 Featured Projects

### 1. [Marketing Dashboard](https://github.com/Munirmohammed/marketing-dashboard)
* **Stack**: Next.js 16, Tailwind CSS 4, SQLite (better-sqlite3), Recharts, Zustand
* Full-stack marketing ops and campaign control center featuring live telemetry feeds, real-time analytics, CRM kanban boards, and AI agent coordination.

### 2. [HitKeep](https://github.com/Munirmohammed/hitkeep)
* **Stack**: Angular, TypeScript, Go backend, Web Analytics
* Modern, privacy-first web analytics platform featuring real-time visitor tracking, custom KPI cards, bounce analysis, and bot protection.

### 3. [Hamer Admin](https://github.com/Munirmohammed)
* **Stack**: React, TypeScript, Tailwind CSS, REST APIs
* Comprehensive operations dashboard for a fitness platform — managing workout programs, exercises, trainer workflows, user management, and marketing telemetry.

---

## 🛠️ Architecture & Tech Stack

This website is a production-grade, server-side rendered application built on edge infrastructure:

* **Framework**: React Router v7 / React 19 / TypeScript
* **Styling**: Tailwind CSS v4, Framer Motion, GSAP animations, custom design tokens
* **Edge Runtime**: Cloudflare Workers (`workerd`), D1 SQL database (Miniflare in local dev), KV, and R2 object storage
* **Data Layer**: Flat SQL migrations with `@remix-run/data-table`
* **Testing & Tooling**: Vitest, Playwright E2E, Oxlint, Prettier, Vite

---

## 📦 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) `>= 20` (recommended Node 26)
* `npm` `>= 10`
* `git`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Munirmohammed/portfolio2.git
   cd portfolio2
   ```

2. **Configure environment variables**:
   ```bash
   cp services/site/.env.example services/site/.env
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Initialize local database**:
   ```bash
   npm run db:reset --workspace kentcdodds.com
   ```

5. **Start local development**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build the site and SSR bundle |
| `npm run typecheck` | Run TypeScript validation |
| `npm run lint` | Run Oxlint across the project |
| `npm run test` | Run unit and component test suites |
| `npm run test:e2e:dev` | Run Playwright end-to-end tests |
| `npm run format:staged` | Format staged files via Prettier |

---

## 📄 License

This project is available under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).

---

© 2026 [Munir Mohammed](https://github.com/Munirmohammed). Built with React Router v7 & Cloudflare Workers.
