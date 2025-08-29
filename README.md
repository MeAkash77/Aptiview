<div align="center">  
    <img src="https://github.com/MeAkash77/Aptiview/blob/main/rI.png?raw=true"/>
  <h1>🤖 Aptiview - AI-Powered Interview Platform</h1>
  <p>Your AI-driven companion for smarter, fairer, and more efficient interviews</p>
</div>

<div align="center">

[![Website](https://img.shields.io/badge/🌐_Visit-Website-blueviolet?style=for-the-badge)](https://aptiview-pi.vercel.app/)
[![License: MIT](https://img.shields.io/github/license/MeAkash77/Aptiview?style=for-the-badge&color=green)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/MeAkash77/Aptiview?style=for-the-badge&color=yellow)](https://github.com/MeAkash77/Aptiview/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/MeAkash77/Aptiview?style=for-the-badge&color=blue)](https://github.com/MeAkash77/Aptiview/network/members)

[![Issues](https://img.shields.io/github/issues/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/commits)
[![Contributors](https://img.shields.io/github/contributors/MeAkash77/Aptiview?style=for-the-badge)](https://github.com/MeAkash77/Aptiview/graphs/contributors)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

<p align="center">
  <strong>🚀 Redefining recruitment with AI-powered interviews, real-time analytics, and recruiter-friendly tools</strong>
</p>

---

## 📋 Table of Contents
- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ System Architecture](#️-system-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
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

**Aptiview** is an AI-powered platform that transforms the way interviews are conducted. It automates candidate assessment using **voice-based AI conversations**, detailed **analytics dashboards**, and **real-time scoring** — giving recruiters more efficiency and candidates a smoother experience.  

### 🌟 Why Choose Aptiview?

<div align="center">

| 🎤 **AI Interviews** | 📊 **Analytics** | 🛠 **Recruiter Tools** | 🔒 **Secure** |
|:---:|:---:|:---:|:---:|
| Natural AI-driven interviews | Real-time scoring & feedback | Dashboard & job management | Role-based access & security |

</div>

---

## ✨ Key Features

### For Recruiters
- ✅ Create and manage job postings  
- ✅ Set custom AI interview templates  
- ✅ Review interviews, recordings, and transcripts  
- ✅ Access detailed scoring & insights  
- ✅ Track applications with a recruiter dashboard  

### For Candidates
- ✅ Browse jobs and apply instantly  
- ✅ AI-powered voice-based interviews  
- ✅ Real-time feedback and transcript review  
- ✅ Track application status  

### AI Capabilities
- ✅ Natural language interviews with GPT-4  
- ✅ Real-time transcription with Whisper  
- ✅ Automatic performance scoring  
- ✅ Intelligent follow-up questions  

---

## 🏗️ System Architecture

flowchart TB

subgraph Frontend[Frontend - Next.js (React, Tailwind)]
  UI[Candidate & Recruiter UI]
  Clerk[Clerk Auth]
end

subgraph Backend[Backend - Node.js/Express]
  API[REST API Endpoints]
  WS[WebSocket Server]
  Prisma[Prisma ORM]
end

subgraph DB[Database Layer]
  Postgres[(PostgreSQL)]
end

subgraph AI[AI Services]
  GPT[OpenAI GPT-4 -> Dynamic Q&A]
  Whisper[OpenAI Whisper -> Speech-to-Text]
end

User[👩‍💻 Candidate/Recruiter] -->|Login/Register| Clerk
User -->|Apply/Interview| UI

UI -->|API Calls| API
UI -->|Realtime Updates| WS

API --> Prisma --> Postgres

API -->|Send Transcript| Whisper
API -->|Request AI Q&A| GPT

WS --> UI





### Highlights
- **Frontend**: Next.js (App Router) + Tailwind + Shadcn  
- **Backend**: Node.js + Express + Prisma ORM  
- **Database**: PostgreSQL  
- **Authentication**: Clerk  
- **AI Services**: OpenAI (GPT-4, Whisper, TTS)  
- **Deployment**: Vercel (frontend) + Render (backend)  

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (TypeScript)  
- **UI**: TailwindCSS, Shadcn/UI, Radix UI  
- **Auth**: Clerk  
- **State Management**: React Hooks  

### Backend
- **Runtime**: Node.js (Express.js)  
- **Database**: PostgreSQL + Prisma ORM  
- **Realtime**: WebSockets (ws)  
- **AI**: OpenAI GPT-4 + Whisper  
- **Auth**: Clerk  

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+  
- PostgreSQL  
- Clerk account  
- OpenAI API Key  

## 📸 Screenshots & Demo
<div align="center">

### 🏠 Landing Page  
<img width="950" height="443" alt="Image" src="https://github.com/user-attachments/assets/100b24a3-7bcc-44f6-8774-8a4f6d9c7dfe" />

---

### 👨‍💼 Recruiter Dashboard  
<img width="947" height="442" alt="Image" src="https://github.com/user-attachments/assets/36e9a630-e7fe-43d0-90f0-1a0b6fa45abb" />

---

### 🎤 Candidate Interview Screen  
<img src="screenshots/interview.png" alt="Candidate Interview Screen" width="80%" style="border-radius: 10px;"/>

---

### 📊 Features  
<img width="951" height="445" alt="Image" src="https://github.com/user-attachments/assets/e19dc87f-1847-4f37-a6af-e8443175e8a3" />
</div>

---

## 🎥 Demo Video
<div align="center">
  
[![Watch Demo](https://img.shields.io/badge/▶️_Watch_Demo_Video-red?style=for-the-badge&logo=youtube)](https://drive.google.com/file/d/19_1dYetqw_Swwi9f5tm9GRYny7yroxJP/view?usp=drivesdk)

</div>

---

## ⚡ Quick Start
### Prerequisites
- Node.js 18+  
- PostgreSQL  
- Clerk account  
- OpenAI API Key  

---

## 📦 Installation & Setup

### Backend
```bash
# Clone repository
git clone https://github.com/MeAkash77/Aptiview.git
cd Aptiview

# Backend
cd backend
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev

# Frontend
cd ../frontend
npm install
cp .env.example .env
npm run dev
