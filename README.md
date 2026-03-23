# stfd studio

Website for stfd studio — a React + Vite frontend, Django + DRF backend, and PostgreSQL database.

---

## Prerequisites

- Node 18+
- Python 3.12+
- Docker (for the containerized quick start)

---

## Quick Start with Docker

```bash
docker compose up
```

This starts PostgreSQL, runs Django migrations, seeds case data, and serves the backend at `http://localhost:8000`.

Start the frontend separately (Docker does not serve the frontend):

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

---

## Manual Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # fill in values
python manage.py migrate
python manage.py seed_cases
python manage.py runserver
```

---

## Environment Variables

### Frontend (`frontend/.env`)

| Variable       | Description          | Default                      |
| -------------- | -------------------- | ---------------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:8000/api`  |

### Backend (`backend/.env`)

| Variable               | Description                        | Default                                              |
| ---------------------- | ---------------------------------- | ---------------------------------------------------- |
| `SECRET_KEY`           | Django secret key                  | —                                                    |
| `DEBUG`                | Enable debug mode                  | `True`                                               |
| `ALLOWED_HOSTS`        | Comma-separated allowed hosts      | `localhost,127.0.0.1`                                |
| `DB_NAME`              | PostgreSQL database name           | `stfd_db`                                            |
| `DB_USER`              | PostgreSQL user                    | `stfd_user`                                          |
| `DB_PASSWORD`          | PostgreSQL password                | `stfd_pass`                                          |
| `DB_HOST`              | PostgreSQL host                    | `localhost`                                          |
| `DB_PORT`              | PostgreSQL port                    | `5432`                                               |
| `CORS_ALLOWED_ORIGINS` | Comma-separated CORS origins       | `http://localhost:5173,http://127.0.0.1:5173`        |

---

## API Endpoints

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| `POST` | `/api/inquiries/` | Submit a new studio inquiry    |
| `GET`  | `/api/cases/`     | List all published case studies |

---

## Project Structure

```
stfd/website/
├── docker-compose.yml
├── .gitignore
├── README.md
├── frontend/                  # React + Vite
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
└── backend/                   # Django + DRF
    ├── cases/                 # Case studies app
    ├── inquiries/             # Inquiries app
    ├── config/                # Django settings & URL config
    ├── manage.py
    ├── requirements.txt
    ├── Dockerfile
    └── .env.example
```

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** PostgreSQL 16
- **Containerization:** Docker, Docker Compose
