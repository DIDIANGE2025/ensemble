from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Group, GroupMember
from schemas import GroupCreate, GroupOut
from routers.users import get_current_user
from models import User

router = APIRouter()

@router.post("/", response_model=GroupOut, status_code=201)
def create_group(data: GroupCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    group = Group(**data.model_dump(), creator_id=current_user.id)
    db.add(group)
    db.commit()
    db.refresh(group)
    member = GroupMember(user_id=current_user.id, group_id=group.id, role="admin")
    db.add(member)
    db.commit()
    return group

@router.get("/", response_model=list[GroupOut])
def list_groups(city: str = None, category: str = None, db: Session = Depends(get_db)):
    q = db.query(Group).filter(Group.is_public == True)
    if city:
        q = q.filter(Group.city.ilike(f"%{city}%"))
    if category:
        q = q.filter(Group.category == category)
    return q.all()

@router.get("/{group_id}", response_model=GroupOut)
def get_group(group_id: int, db: Session = Depends(get_db)):
    group = db.query(Group).filter(Group.id == group_id).first()
    if not group:
        raise HTTPException(status_code=404, detail="Groupe introuvable")
    return group

@router.post("/{group_id}/join")
def join_group(group_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    exists = db.query(GroupMember).filter_by(user_id=current_user.id, group_id=group_id).first()
    if exists:
        raise HTTPException(status_code=400, detail="Déjà membre")
    db.add(GroupMember(user_id=current_user.id, group_id=group_id))
    db.commit()
    return {"message": "Rejoint avec succès 💙"}
