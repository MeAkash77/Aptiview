<div align="center">
  <img src="aptiviewlogo.png" alt="Aptiview Logo" width="80" height="80"/>
  <h1>🤖 Aptiview</h1>
  <p><em>Your AI-Powered Interview Platform for Smart Hiring</em></p>
</div>

<div align="center">

[![Website](https://img.shields.io/badge/🌐_Visit-Website-blueviolet?style=for-the-badge)](https://your-frontend-link.vercel.app/)
[![License: MIT](https://img.shields.io/github/license/MeAkash77/Aptiview?style=for-the-badge&color=green)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/MeAkash77/Aptiview?style=for-the-badge&color=yellow)](https://github.com/MeAkash77/Aptiview/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/MeAkash77/Aptiview?style=for-the-badge&color=blue)](https://github.com/MeAkash77/Aptiview/network/members)

[![Issues](https://img.shields.io/github/issues/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/commits)
[![Contributors](https://img.shields.io/github/contributors/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/graphs/contributors)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

<p align="center">
  <strong>🚀 Conduct AI-powered voice interviews, track candidates, and streamline hiring processes effortlessly.</strong>
</p>

<p align="center">
  <a href="https://your-frontend-link.vercel.app/">🔗 Try Aptiview Now</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-documentation">📚 Documentation</a> •
  <a href="#-contributing">🤝 Contributing</a>
</p>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ System Architecture](#-system-architecture)
- [🛠️ Tech Stack](#-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Aptiview** is a cutting-edge AI interview platform that allows recruiters to conduct voice-based interviews, capture analytics, and streamline candidate evaluation.

<div align="center">

| 🎤 **AI Interviews** | 📊 **Smart Analytics** | 🔐 **Secure** | 💼 **Recruiter Dashboard** |
|:---:|:---:|:---:|:---:|
| Natural voice interviews with AI | Automated scoring & transcription | JWT auth, secure uploads | Manage jobs, candidates & pipelines |

</div>

---

## ✨ Key Features

- **AI Voice Interviews** with OpenAI
- **Real-time Transcription**
- **Smart Candidate Analytics**
- **Recruiter Dashboard**
- **Custom AI Templates**
- **Audio & Screen Recording**
- **Role-Based Access Control**

### Screenshots & Placeholders

![Dashboard Placeholder](https://via.placeholder.com/900x450.png?text=Dashboard)
![Interview Screen Placeholder](https://via.placeholder.com/900x450.png?text=Interview+Screen)
![Analytics Placeholder](https://via.placeholder.com/900x450.png?text=Analytics)

---

## 🏗️ System Architecture

<div align="center">
  <img src="aptiview-architecture.png" alt="Aptiview Architecture" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  <p><em>Frontend + Backend + Real-time WebSocket integration</em></p>
</div>

### Components

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Node.js, Express, WebSocket, Prisma, PostgreSQL
- **Authentication**: Clerk
- **AI Integration**: OpenAI GPT-4, Whisper, TTS

---

## 🛠️ Tech Stack

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-FF7F50?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

</div>

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- OpenAI API Key
- Clerk account

### Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# configure environment variables
npx prisma generate
npx prisma db push
npm run dev

