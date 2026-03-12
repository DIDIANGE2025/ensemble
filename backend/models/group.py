from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Group(Base):
    __tablename__ = "groups"

    id          = Column(Integer, primary_key=True, index=True)
    name        = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    category    = Column(String, nullable=True)   # ex: "sport", "art", "discussion"
    city        = Column(String, nullable=True)
    is_public   = Column(Boolean, default=True)
    created_at  = Column(DateTime, default=datetime.utcnow)
    creator_id  = Column(Integer, ForeignKey("users.id"))

    members  = relationship("GroupMember", back_populates="group")
    messages = relationship("Message", back_populates="group")

class GroupMember(Base):
    __tablename__ = "group_members"

    id         = Column(Integer, primary_key=True, index=True)
    user_id    = Column(Integer, ForeignKey("users.id"))
    group_id   = Column(Integer, ForeignKey("groups.id"))
    joined_at  = Column(DateTime, default=datetime.utcnow)
    role       = Column(String, default="member")  # "member" | "admin"

    user  = relationship("User", back_populates="memberships")
    group = relationship("Group", back_populates="members")
