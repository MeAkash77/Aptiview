# Aptiview - AI-Powered Interview Platform

Aptiview is a comprehensive interview platform that leverages AI to conduct voice-based interviews, providing recruiters with detailed insights and candidates with a seamless interview experience.

## 🌟 Features

- **AI Voice Interviews**: Conduct natural, conversational interviews using OpenAI's advanced voice models
- **Real-time Transcription**: Automatic speech-to-text conversion with intelligent processing
- **Smart Analytics**: Detailed interview scoring and candidate assessment
- **Recruiter Dashboard**: Comprehensive job management and candidate tracking
- **Custom AI Templates**: Pre-built interview contexts for different roles and industries
- **Screen Recording**: Automatic screenshot capture during interviews
- **Audio Recording**: Complete interview audio recording for review
- **Role-based Access**: Separate interfaces for recruiters and candidates

## 🏗️ Architecture

This project consists of two main components:

- **Frontend**: Next.js 14 application with TypeScript, Tailwind CSS, and Shadcn/ui
- **Backend**: Node.js/Express API with WebSocket support, Prisma ORM, and PostgreSQL

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Clerk account for authentication

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/MeAkash77/Aptiview.git
   cd Aptiview
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Configure your environment variables
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - WebSocket: ws://localhost:4000

## 🌐 Deployment

### Production Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
- **Database**: PostgreSQL with Prisma Accelerate

### Environment Variables

See individual README files in `/backend` and `/frontend` for detailed environment variable configuration.

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI
- **Authentication**: Clerk
- **State Management**: React Hooks

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: WebSocket (ws)
- **Authentication**: Clerk
- **AI**: OpenAI API (GPT-4, Whisper, TTS)

## 📁 Project Structure

```
Aptiview/
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── middleware/     # Express middleware
│   │   └── types/         # TypeScript types
│   ├── prisma/            # Database schema and migrations
│   └── uploads/           # File uploads
├── frontend/              # Frontend Next.js app
│   ├── app/              # App router pages
│   ├── components/       # Reusable UI components
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
└── README.md            # This file
```

## 🎯 Key Features

### For Recruiters
- Create and manage job postings
- Set custom AI interview contexts
- Review candidate interviews and recordings
- Access detailed analytics and scoring
- Manage application pipeline

### For Candidates
- Browse available job opportunities
- Take AI-powered voice interviews
- View application status
- Complete profile setup

### AI Interview System
- Natural conversation flow
- Intelligent follow-up questions
- Automatic transcription and analysis
- Performance scoring across multiple criteria
- Customizable interview templates

## 🔐 Security

- JWT-based authentication via Clerk
- CORS protection
- Input validation and sanitization
- Secure file upload handling
- Environment variable protection

## 📊 Database Schema

The application uses PostgreSQL with Prisma ORM. Key entities include:
- Users (Recruiters & Candidates)
- Jobs and Applications
- Interviews and Recordings
- Scoring and Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation in `/backend/README.md` and `/frontend/README.md`
- Review the troubleshooting guides

## 🔮 Future Enhancements

- Video interview support
- Advanced analytics dashboard
- Integration with ATS systems
- Mobile application
- Multi-language support
- Advanced AI interview customization

---

Built with ❤️    make my readme same as given and write the full code for me  <div align="center">  
  <img src="academicpallogo.png" alt="AcademicPal Logo" width="80" height="80"/>
  <h1>🎓 AcademicPal</h1>
  <p><em>Your AI-Powered Academic Companion for Smarter Learning</em></p>
</div>

<div align="center">

[![Website](https://img.shields.io/badge/🌐_Visit-Website-blueviolet?style=for-the-badge)](https://academic-pal-rose.vercel.app/)
[![License: MIT](https://img.shields.io/github/license/Hari-hara7/Academic-pal?style=for-the-badge&color=green)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Hari-hara7/Academic-pal?style=for-the-badge&color=yellow)](https://github.com/MeAkash77/Academic-pal/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Hari-hara7/Academic-pal?style=for-the-badge&color=blue)](https://github.com/MeAkash77/Academic-pal/network/members)

[![Issues](https://img.shields.io/github/issues/Hari-hara7/Academic-pal?style=for-the-badge)](https://github.com/MeAkash77/Academic-pal/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/Hari-hara7/Academic-pal?style=for-the-badge)](https://github.com/MeAkash77/Academic-pal/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/Hari-hara7/Academic-pal?style=for-the-badge)](https://github.com/MeAkash77/Academic-pal/commits)
[![Contributors](https://img.shields.io/github/contributors/Hari-hara7/Academic-pal?style=for-the-badge)](https://github.com/MeAkash77/Academic-pal/graphs/contributors)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

<p align="center">
  <strong>🚀 Empowering students with AI-powered study tools, real-time collaboration, and community-driven academic resources</strong>
</p>

<p align="center">
  <a href="https://academic-pal-rose.vercel.app/">🔗 Try AcademicPal Now</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-documentation">📚 Documentation</a> •
  <a href="#-contributing">🤝 Contributing</a>
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

**AcademicPal** is your comprehensive digital academic companion, revolutionizing how students learn, collaborate, and succeed. Built with cutting-edge technology and student-centric design, AcademicPal combines AI-powered intelligence with community-driven resources to create the ultimate learning ecosystem.

### 🌟 Why Choose AcademicPal?

<div align="center">

| 🎯 **Smart Learning** | 🤝 **Collaboration** | 📊 **Analytics** | 🔒 **Secure** |
|:---:|:---:|:---:|:---:|
| AI-powered search & recommendations | Real-time chat & study groups | Performance tracking & insights | Enterprise-grade security |

</div>

### 📈 Impact & Statistics

- 🎓 **4,000+** students empowered
- 📚 **10+** notes and resources shared  
- ⚡ **50+** API endpoints for seamless integration
- 🌍 **24/7** availability across all platforms

---

## ✨ Key Features

<img width="945" height="440" alt="Image" src="https://github.com/user-attachments/assets/f915220e-31d8-4e45-9011-10339e6c88d4" />

<img width="945" height="440" alt="Image" src="https://github.com/user-attachments/assets/17c6e9c9-9fef-43c4-82ce-ead41f59aede" />

<img width="947" height="439" alt="Image" src="https://github.com/user-attachments/assets/37671a3d-ee26-45aa-8cd7-0b77b0bde362" />

## ✨ Frontend Part

<img width="946" height="441" alt="Image" src="https://github.com/user-attachments/assets/2aecbc74-aaae-4bd1-8468-0e3bcfe8de36" />

<img width="946" height="440" alt="Image" src="https://github.com/user-attachments/assets/2b750f16-b4d2-4b2a-8508-366b88a66df5" />

## ✨ Student feedback

<img width="946" height="443" alt="Image" src="https://github.com/user-attachments/assets/105f9bfc-8cca-4340-8cee-60b8827260b9" />

## ✨ Sign in & Sign up page

<img width="947" height="442" alt="Image" src="https://github.com/user-attachments/assets/6e4e087d-2046-4e6a-ab08-437183ca6f55" />


<table>
<tr>
<td width="50%">

### 📚 **Content & Resources**
- ✅ **Study Blogs** — Expert tips, hacks, and student stories
- ✅ **Comprehensive Notes** — Well-organized, exam-ready content
- ✅ **Past Question Papers** — Master exam patterns with previous years' papers
- ✅ **Flashcards** — Interactive reviews of key concepts
- ✅ **Upload & Share** — Contribute and explore peer materials

</td>
<td width="50%">

### 🤖 **AI-Powered Tools**
- ✅ **Smart Search** — Lightning-fast AI search across all resources
- ✅ **Study Planner** — Custom schedules & academic goal tracker
- ✅ **Performance Analytics** — Track progress & identify weak spots
- ✅ **Smart Reminders** — Stay consistent with study nudges
- ✅ **Timetable Generator** — Auto-create your perfect schedule

</td>
</tr>
<tr>
<td width="50%">

### 💬 **Collaboration**
- ✅ **Real-Time Chat** — Instant collaboration and doubt solving
- ✅ **Study Groups** — Join focused communities per subject/topic
- ✅ **Peer Learning** — Connect with classmates and mentors
- ✅ **Discussion Forums** — Engage in academic discussions

</td>
<td width="50%">

### 📱 **Modern Experience**
- ✅ **Responsive Design** — Perfect on desktop, tablet, and mobile
- ✅ **Dark/Light Mode** — Comfortable studying any time
- ✅ **PWA Support** — App-like experience on all devices
- ✅ **Offline Access** — Study even without internet

</td>
</tr>
</table>

---

## 🏗️ System Architecture

<div align="center">
  <img src="academicpal architecture.jpg" alt="AcademicPal System Architecture" width="100%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
  <p><em>Scalable, secure, and performance-optimized architecture</em></p>
</div>

### 🔧 Architecture Highlights

- **🎨 Frontend**: Next.js with TypeScript for type-safe, performant UI
- **⚡ Backend**: Flask + Next.js API routes for robust server-side logic
- **🗄️ Database**: Multi-database approach (MongoDB, Supabase, Prisma)
- **🔐 Authentication**: Firebase Auth + NextAuth for secure user management
- **☁️ Deployment**: Vercel for frontend, containerized backend services
- **🔄 Real-time**: Socket.io for instant messaging and live collaboration

---

## 🛠️ Tech Stack

### Frontend Technologies
<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

### Backend Technologies
<div align="center">

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](https://socket.io/)

</div>

### Database & Storage
<div align="center">

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)

</div>

### DevOps & Deployment
<div align="center">

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

</div>

<details>
<summary><strong>📊 Detailed Tech Stack Table</strong></summary>

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend Framework** | [Next.js](https://nextjs.org/) | React-based framework with SSR/SSG |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript development |
| **UI Library** | [React](https://reactjs.org/) | Component-based user interface |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| **UI Components** | [ShadCN UI](https://ui.shadcn.com/) | Beautiful, accessible components |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern SVG icon library |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Production-ready motion library |
| **Backend** | [Flask](https://flask.palletsprojects.com/) | Python web framework |
| **Database** | [MongoDB](https://mongodb.com/) | NoSQL document database |
| **ORM** | [Prisma](https://prisma.io/) | Next-generation database toolkit |
| **Auth** | [Firebase Auth](https://firebase.google.com/products/auth) | User authentication service |
| **Real-time** | [Socket.io](https://socket.io/) | Real-time bidirectional communication |
| **Deployment** | [Vercel](https://vercel.com/) | Frontend hosting platform |
| **Containerization** | [Docker](https://docker.com/) | Application containerization |

</details>

---

## ⚡ Quick Start

Get AcademicPal running locally in just a few steps:

### Prerequisites

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v18+-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-v3.8+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org/)
[![Git](https://img.shields.io/badge/Git-Latest-F05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)

</div>

### 🚀 Quick Setup

```bash
# Clone the repository
git clone https://github.com/MeAkash77/Academic-pal.git
cd Academic-pal

# Setup Frontend (Next.js)
cd academicpal
npm install
npm run dev

# Setup Backend (Flask) - In a new terminal
cd ..
pip install -r requirements.txt
python app.py
```

🎉 **That's it!** Your development environment is ready!

- 🌐 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:8080

---

## 📦 Installation

### 🐳 Docker Installation (Recommended)

```bash
# Clone and enter directory
git clone https://github.com/MeAkash77/Academic-pal.git
cd Academic-pal

# Build and run with Docker
docker-compose up --build

# Access the application
open http://localhost:3000
```

### 🔧 Manual Installation

<details>
<summary><strong>Frontend Setup (Next.js)</strong></summary>

```bash
cd academicpal

# Install dependencies
npm install
# or
yarn install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
# or
yarn dev

# Build for production
npm run build
npm start
```

</details>

<details>
<summary><strong>Backend Setup (Flask)</strong></summary>

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
python app.py

# Run with Gunicorn (production)
gunicorn app:app
```

</details>

### 🌍 Environment Variables

<details>
<summary><strong>Required Environment Variables</strong></summary>

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

**Backend (.env)**
```env
FLASK_ENV=development
SECRET_KEY=your_secret_key
MONGODB_URI=your_mongodb_connection_string
FIREBASE_PROJECT_ID=your_firebase_project_id
```

</details>

---

## 🚀 Usage

### 🎓 For Students

1. **📝 Sign Up**: Create your free account
2. **🔍 Search**: Find notes, papers, and resources instantly
3. **📚 Study**: Access curated content for your subjects
4. **👥 Connect**: Join study groups and chat with peers
5. **📊 Track**: Monitor your progress with analytics

### 👨‍💻 For Developers

1. **🔧 API Access**: Use our 45+ REST API endpoints
2. **📱 Integration**: Build apps using our SDK
3. **🎨 Customization**: Extend functionality with plugins
4. **📚 Documentation**: Comprehensive API documentation available

### 🏫 For Institutions

1. **🎯 Bulk Management**: Manage multiple student accounts
2. **📊 Analytics**: Institution-wide performance insights
3. **🔒 Security**: Enterprise-grade security and compliance
4. **🎨 Branding**: Custom branding and white-label options

---

## 🌐 API Documentation

AcademicPal provides a comprehensive REST API with **45+ endpoints** for seamless integration.

### 🔑 Core API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/search` | POST | AI-powered content search |
| `/api/auth/login` | POST | User authentication |
| `/api/notes` | GET/POST | Notes management |
| `/api/chat` | GET/POST | Real-time messaging |
| `/api/analytics` | GET | Performance data |
| `/api/planner` | GET/POST | Study planner |

### 📝 API Example

```javascript
// Search for notes
const response = await fetch('/api/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    query: 'machine learning notes',
    filters: {
      semester: '1st',
      subject: 'AI'
    }
  })
});

const results = await response.json();
```

### 📚 Full Documentation

- 📖 **API Docs**: [Coming Soon] - Comprehensive Swagger documentation
- 🛠️ **Postman Collection**: [Download](link-to-postman-collection)
- 🎯 **SDK**: Available for JavaScript, Python, and more

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's a bug fix, feature enhancement, or documentation improvement - every contribution matters.

### 🌟 Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? Let us know!
- 💡 **Feature Requests**: Have an idea? We'd love to hear it!
- 🔧 **Code Contributions**: Submit PRs for fixes and features
- 📚 **Documentation**: Help improve our docs
- 🎨 **Design**: UI/UX improvements and suggestions

### 🚀 Quick Contribution Guide

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **💾 Commit** your changes: `git commit -m 'Add amazing feature'`
4. **📤 Push** to the branch: `git push origin feature/amazing-feature`
5. **🔄 Open** a Pull Request

### 📋 Development Guidelines

<details>
<summary><strong>Code Style & Standards</strong></summary>

- Follow **TypeScript** best practices for frontend
- Use **PEP 8** style guide for Python backend
- Write **meaningful commit messages**
- Add **unit tests** for new features
- Update **documentation** for API changes
- Use **semantic versioning** for releases

</details>

<details>
<summary><strong>Pull Request Template</strong></summary>

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Updated existing tests

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

</details>

---

## 📋 Code of Conduct

We are committed to fostering a welcoming and inclusive community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our community guidelines.

### 🤝 Our Pledge

- **🌍 Inclusive**: Welcome people of all backgrounds
- **🤗 Respectful**: Treat everyone with respect and kindness
- **🎓 Educational**: Focus on learning and growth
- **🚀 Constructive**: Provide helpful and constructive feedback

### 📞 Reporting Issues

If you experience or witness unacceptable behavior, please report it to [iakshu845@gmail.com](mailto:iakshu845@gmail.com).

---

## ❓ FAQ

<details>
<summary><strong>🆓 Is AcademicPal free to use?</strong></summary>

Yes! AcademicPal offers a comprehensive free tier with access to most features. Premium features are available for advanced users and institutions.

</details>

<details>
<summary><strong>📱 Is there a mobile app?</strong></summary>

AcademicPal is a Progressive Web App (PWA) that works seamlessly on mobile devices. You can install it directly from your browser for an app-like experience.

</details>

<details>
<summary><strong>🔒 How secure is my data?</strong></summary>

We take security seriously. All data is encrypted in transit and at rest. We follow industry best practices and comply with relevant data protection regulations.

</details>

<details>
<summary><strong>🎓 Which subjects are supported?</strong></summary>

AcademicPal supports a wide range of subjects across engineering, science, and liberal arts. Our AI-powered search works across all disciplines.

</details>

<details>
<summary><strong>🔧 Can I integrate AcademicPal with my existing tools?</strong></summary>

Yes! We provide comprehensive APIs and webhooks for integration with LMS, productivity tools, and custom applications.

</details>

<details>
<summary><strong>🌐 Is AcademicPal available internationally?</strong></summary>

AcademicPal is accessible globally. We're continuously expanding our content and features for international users.

</details>

---

## 🔗 Community & Support

Join our thriving community of students, educators, and developers!

### 💬 Community Channels

<div align="center">

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://github.com/MeAkash77/Academic-pal/discussions)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/iakshu845)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/me-akash77/)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MeAkash77/Academic-pal/discussions)

</div>

### 🚀 Current Focus
- 🎓 Building AI-enhanced student ecosystems
- 🌐 Scaling AcademicPal for global reach
- 🤝 Fostering collaborative learning communities
- 💡 Pioneering innovative educational technologies

### 📱 Connect with Me

<div align="center">

[![Website](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://akash77-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/me-akash77/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/iakshu845)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MeAkash77)

</div>

### 📧 Get in Touch

- 💼 **Business Inquiries**: [business@academicpal.in](mailto:business@academicpal.in)
- 🛠️ **Technical Support**: [academicpal.help@gmail.com](mailto:academicpal.help@gmail.com)
- 🤝 **Partnerships**: [partnerships@academicpal.in](mailto:partnerships@academicpal.in)
- 📰 **Media**: [press@academicpal.in](mailto:press@academicpal.in)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 📜 License Summary

```
MIT License

Copyright (c) 2024 AcademicPal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

**🎉 What this means:**
- ✅ **Commercial use** - Use it in your business
- ✅ **Modification** - Change it to fit your needs  
- ✅ **Distribution** - Share it with others
- ✅ **Private use** - Use it for personal projects

---

## 🙏 Acknowledgments

We're grateful to the amazing community and technologies that make AcademicPal possible:

### 🌟 Special Thanks

- **🎓 Students Worldwide** - For trusting AcademicPal with their learning journey
- **👨‍💻 Open Source Community** - For the incredible tools and libraries
- **🏫 Educational Institutions** - For feedback and partnership opportunities
- **🤝 Contributors** - For making AcademicPal better every day

### 🛠️ Built With Amazing Technologies

<div align="center">

**Frontend Ecosystem**
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Backend & Database**
[![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat-square&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)

</div>

### 🎯 Inspiration

> *"Education is the most powerful weapon which you can use to change the world."* - Nelson Mandela

AcademicPal was born from the belief that technology should democratize education and make quality learning resources accessible to every student, regardless of their background or location.

---

<div align="center">

### 🌟 **Star History**

[![Star History Chart](https://api.star-history.com/svg?repos=Hari-hara7/Academic-pal&type=Date)](https://star-history.com/#Hari-hara7/Academic-pal&Date)

</div>

---

<div align="center">
  <h2>🚀 Ready to Transform Your Learning Experience?</h2>
  <p><strong>Join thousands of students already using AcademicPal!</strong></p>
  
  [![Try AcademicPal](https://img.shields.io/badge/🌐_Try_AcademicPal_Now-FF6B6B?style=for-the-badge&logoColor=white)](https://www.academicpal.in)
  [![Give it a Star](https://img.shields.io/badge/⭐_Give_it_a_Star-FFD700?style=for-the-badge&logoColor=black)](https://github.com/MeAkash77/Academic-pal/stargazers)
  
  <p><em>Made with 💖 for students, by students</em></p>
  <p><strong>AcademicPal – Because studying should be smart, social, and stress-free.</strong></p>
</div>

---

<div align="center">
  <sub>Built with ❤️ using <a href="https://nextjs.org/">Next.js</a> • <a href="https://www.typescriptlang.org/">TypeScript</a> • <a href="https://tailwindcss.com/">Tailwind CSS</a> • <a href="https://flask.palletsprojects.com/">Flask</a></sub>
</div>
