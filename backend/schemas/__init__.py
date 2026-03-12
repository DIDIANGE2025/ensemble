from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# ── USER ──────────────────────────────────────────────
class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    city: Optional[str] = None
    bio: Optional[str] = None

class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    bio: Optional[str]
    city: Optional[str]
    avatar_url: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# ── GROUP ─────────────────────────────────────────────
class GroupCreate(BaseModel):
    name: str
    description: Optional[str] = None
    category: Optional[str] = None
    city: Optional[str] = None
    is_public: bool = True

class GroupOut(BaseModel):
    id: int
    name: str
    description: Optional[str]
    category: Optional[str]
    city: Optional[str]
    is_public: bool
    created_at: datetime

    class Config:
        from_attributes = True

# ── EVENT ─────────────────────────────────────────────
class EventCreate(BaseModel):
    title: str
    description: Optional[str] = None
    city: Optional[str] = None
    date: datetime
    max_participants: Optional[int] = None

class EventOut(BaseModel):
    id: int
    title: str
    description: Optional[str]
    city: Optional[str]
    date: datetime
    max_participants: Optional[int]
    creator_id: int
    created_at: datetime

    class Config:
        from_attributes = True

# ── MESSAGE ───────────────────────────────────────────
class MessageCreate(BaseModel):
    content: str
    group_id: Optional[int] = None

class MessageOut(BaseModel):
    id: int
    content: str
    sender_id: int
    group_id: Optional[int]
    created_at: datetime

    class Config:
        from_attributes = True

# ── TOKEN ─────────────────────────────────────────────
class Token(BaseModel):
    access_token: str
    token_type: str
