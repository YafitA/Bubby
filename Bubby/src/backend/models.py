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


class Family(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    last_name: str = Field(...)
    users: List[User] = Field(...)


class Photo_Album(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    images: List[Image] = Field(...)





