from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Event
from schemas import EventCreate, EventOut
from routers.users import get_current_user
from models import User

router = APIRouter()

@router.post("/", response_model=EventOut, status_code=201)
def create_event(data: EventCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    event = Event(**data.model_dump(), creator_id=current_user.id)
    db.add(event)
    db.commit()
    db.refresh(event)
    return event

@router.get("/", response_model=list[EventOut])
def list_events(city: str = None, db: Session = Depends(get_db)):
    q = db.query(Event)
    if city:
        q = q.filter(Event.city.ilike(f"%{city}%"))
    return q.order_by(Event.date).all()

@router.get("/{event_id}", response_model=EventOut)
def get_event(event_id: int, db: Session = Depends(get_db)):
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Événement introuvable")
    return event
