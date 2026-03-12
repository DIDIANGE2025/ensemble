# Ensemble 💙

> Plateforme pour aider les gens à ne plus se sentir seuls.

## Stack technique

- **Backend** : Python 3.11 + FastAPI + SQLAlchemy + PostgreSQL
- **Frontend** : React 18 + Vite + React Router + Axios
- **Infrastructure** : Docker + Docker Compose
- **Tests** : Pytest (backend) + Vitest (frontend)

## Démarrage rapide

```bash
# 1. Copier le fichier d'environnement
cp .env.example .env

# 2. Lancer tout le projet
docker-compose up --build

# 3. Accéder à l'application
# Frontend  → http://localhost:5173
# API docs  → http://localhost:8000/docs
# API santé → http://localhost:8000/health
```

## Lancer les tests

```bash
# Tests backend
docker-compose exec backend pytest

# Tests frontend
docker-compose exec frontend npm test
```

## Arborescence

```
ensemble/
├── docker-compose.yml
├── .env
├── backend/         ← FastAPI
├── frontend/        ← React + Vite
└── database/        ← Scripts SQL
```

## Fonctionnalités

- ✅ Inscription / Connexion (JWT)
- ✅ Profil utilisateur
- ✅ Groupes communautaires
- ✅ Événements locaux
- ✅ Messagerie de groupe
- 🔜 Chat temps réel (WebSocket)
- 🔜 Carte interactive
- 🔜 Matching par affinités
