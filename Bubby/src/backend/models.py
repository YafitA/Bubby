import uuid
from typing import List, Optional
from pydantic import BaseModel, Field

class Challenge(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title: str = Field(...)
    type: str = Field(...)
    description: str = Field(...)
    Score: int = Field(...)


class Image(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    url: str = Field(...)


class User(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    families: List[str] = Field(...)
    challenges_done: List[Challenge] = Field(...)
    Score: int = Field(...)

class UserUpdate(BaseModel):
    name: Optional[str]
    families: Optional[List[str]]
    challenges_done: Optional[List[Challenge]]
    Score: Optional[int]


class Family(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    last_name: str = Field(...)
    users: List[User] = Field(...)

class FamilyUpdate(BaseModel):
    last_name: Optional[str]
    users: Optional[List[User]]


class Photo_Album(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    images: List[Image] = Field(...)

class Photo_AlbumUpdate(BaseModel):
    images: Optional[List[Image]]





