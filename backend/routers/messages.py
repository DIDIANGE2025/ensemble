from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Message
from schemas import MessageCreate, MessageOut
from routers.users import get_current_user
from models import User

router = APIRouter()

@router.post("/", response_model=MessageOut, status_code=201)
def send_message(data: MessageCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    msg = Message(**data.model_dump(), sender_id=current_user.id)
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg

@router.get("/group/{group_id}", response_model=list[MessageOut])
def get_group_messages(group_id: int, db: Session = Depends(get_db)):
    return db.query(Message).filter(Message.group_id == group_id).order_by(Message.created_at).all()
