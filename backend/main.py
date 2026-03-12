from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import users, groups, events, messages

# Crée les tables au démarrage
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Ensemble API",
    description="API pour aider les gens à ne plus se sentir seuls 💙",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router,   prefix="/api/v1/users",    tags=["Utilisateurs"])
app.include_router(groups.router,  prefix="/api/v1/groups",   tags=["Groupes"])
app.include_router(events.router,  prefix="/api/v1/events",   tags=["Événements"])
app.include_router(messages.router,prefix="/api/v1/messages", tags=["Messages"])

@app.get("/", tags=["Santé"])
def root():
    return {"message": "Bienvenue sur l'API Ensemble 💙"}

@app.get("/health", tags=["Santé"])
def health():
    return {"status": "ok"}
