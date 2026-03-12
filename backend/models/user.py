from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id         = Column(Integer, primary_key=True, index=True)
    email      = Column(String, unique=True, index=True, nullable=False)
    username   = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    bio        = Column(Text, nullable=True)
    city       = Column(String, nullable=True)
    latitude   = Column(Float, nullable=True)
    longitude  = Column(Float, nullable=True)
    avatar_url = Column(String, nullable=True)
    is_active  = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relations
    memberships = relationship("GroupMember", back_populates="user")
    events_created = relationship("Event", back_populates="creator")
    messages_sent = relationship("Message", back_populates="sender")
