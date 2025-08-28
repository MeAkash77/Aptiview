<div align="center">  
  <img src="aptiviewlogo.png" alt="Aptiview Logo" width="80" height="80"/>
  <h1>🤖 Aptiview</h1>
  <p><em>Your AI-Powered Interview Platform for Smarter Hiring</em></p>
</div>

<div align="center">

[![Website](https://img.shields.io/badge/🌐_Visit-Website-blueviolet?style=for-the-badge)](https://aptiview.example.com/)
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
  <strong>🚀 Empowering recruiters with AI-driven interviews and actionable insights</strong>
</p>

<p align="center">
  <a href="https://aptiview.example.com/">🔗 Try Aptiview Now</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-documentation">📚 Documentation</a> •
  <a href="#-contributing">🤝 Contributing</a>
</p>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
- [🌐 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [📋 Code of Conduct](#-code-of-conduct)
- [❓ FAQ](#-faq)
- [🔗 Community & Support](#-community--support)
- [📧 Contact](#-contact)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Aptiview** is a comprehensive AI-powered interview platform, providing recruiters with voice-based interviews, real-time transcription, and detailed candidate analytics. Candidates get a seamless interview experience, while recruiters gain actionable insights.

---

## ✨ Key Features

### For Recruiters
- AI Voice Interviews (GPT-4 & Whisper)
- Real-time transcription
- Interview recording & analytics
- Custom AI interview templates
- Role-based dashboards

### For Candidates
- Participate in AI-driven interviews
- Access application status
- Profile management
- Seamless audio/video experience

---

## 🏗️ Architecture

### Frontend
- Next.js 14, TypeScript
- Tailwind CSS & Shadcn/ui
- Clerk for authentication

### Backend
- Node.js + Express
- PostgreSQL with Prisma ORM
- WebSocket for real-time interview events
- OpenAI API (GPT-4, Whisper, TTS)

### System Diagram


---

## 🛠️ Tech Stack

**Frontend**
[Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn/ui](https://ui.shadcn.com/), [Clerk](https://clerk.com/)

**Backend**
Node.js, Express, Prisma, PostgreSQL, WebSocket, OpenAI API

**Deployment**
Vercel (Frontend), Render (Backend), PostgreSQL (Database)

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- OpenAI API Key
- Clerk account

### Steps

```bash
# Clone the repo
git clone https://github.com/MeAkash77/Aptiview.git
cd Aptiview

# Backend setup
cd backend
npm install
cp .env.example .env
# Add env variables
npx prisma generate
npx prisma db push
npm run dev

# Frontend setup
cd ../frontend
npm install
cp .env.example .env
npm run dev

