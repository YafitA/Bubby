from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import *

router = APIRouter()

##------------------------------Challenge-------------------------------
@router.post("/", response_description="Create a new challenge", status_code=status.HTTP_201_CREATED, response_model=Challenge)
def create_Challenge(request: Request, challenge: Challenge = Body(...)):
    challenge = jsonable_encoder(challenge)
    new_challenge = request.app.database["Challenges"].insert_one(challenge)
    created_challenge = request.app.database["Challenges"].find_one(
        {"_id": new_challenge.inserted_id}
    )

    return created_challenge


@router.get("/", response_description="List all challenges", response_model=List[Challenge])
def list_Challenges(request: Request):
    challenges = list(request.app.database["Challenges"].find(limit=10))
    return challenges


@router.get("/{id}", response_description="Get a single challenge by id", response_model=Challenge)
def find_Challenge(id: str, request: Request):
    if (challenge := request.app.database["Challenges"].find_one({"_id": id})) is not None:
        return challenge
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Challenge with ID {id} not found")


@router.delete("/{id}", response_description="Delete a challenge")
def delete_Challenge(id: str, request: Request, response: Response):
    delete_result = request.app.database["Challenges"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Challenge with ID {id} not found")

#------------------------------Image-------------------------------
@router.post("/", response_description="Create a new image", status_code=status.HTTP_201_CREATED, response_model=Image)
def create_Image(request: Request, image: Image = Body(...)):
    image = jsonable_encoder(image)
    new_image = request.app.database["Images"].insert_one(image)
    created_image = request.app.database["Images"].find_one(
        {"_id": new_image.inserted_id}
    )

    return created_image


@router.get("/", response_description="List all images", response_model=List[Image])
def list_Images(request: Request):
    images = list(request.app.database["Images"].find(limit=100))
    return images


@router.delete("/{id}", response_description="Delete a image")
def delete_Image(id: str, request: Request, response: Response):
    delete_result = request.app.database["Images"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

#------------------------------User-------------------------------
@router.post("", response_description="Create a new user", status_code=status.HTTP_201_CREATED, response_model=User)
def create_user(request: Request, user: User = Body(...)):
    user = jsonable_encoder(user)
    new_user = request.app.database["User"].insert_one(user)
    created_user = request.app.database["Users"].find_one(
        {"_id": new_user.inserted_id}
    )

    return created_user


@router.get("", response_description="List all users", response_model=List[User])
def list_users(request: Request):
    users = list(request.app.database["Users"].find(limit=100))
    return users


@router.get("/{id}", response_description="Get a single user by id", response_model=User)
def find_user(id: str, request: Request):
    if (user := request.app.database["Users"].find_one({"_id": id})) is not None:
        return user

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"User with ID {id} not found")


@router.put("/{id}", response_description="Update a user", response_model=User)
def update_task(id: str, request: Request, user: UserUpdate = Body(...)):
    user = {k: v for k, v in user.dict().items() if v is not None}

    if len(user) >= 1:
        update_result = request.app.database["Users"].update_one(
            {"_id": id}, {"$set": user}
        )

        if update_result.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail=f"User with ID {id} not found")

    if (
        existing_user := request.app.database["Users"].find_one({"_id": id})
    ) is not None:
        return existing_user

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"User with ID {id} not found")


@router.delete("/{id}", response_description="Delete a user")
def delete_user(id: str, request: Request, response: Response):
    delete_result = request.app.database["Users"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"User with ID {id} not found")


#------------------------------Family-------------------------------
@router.post("/", response_description="Create a new Family", status_code=status.HTTP_201_CREATED, response_model=Family)
def create_Family(request: Request, family: Family = Body(...)):
    family = jsonable_encoder(family)
    new_family = request.app.database["Families"].insert_one(family)
    created_family = request.app.database["Families"].find_one(
        {"_id": new_family.inserted_id}
    )

    return created_family


@router.get("/", response_description="List all Families", response_model=List[Family])
def list_Families(request: Request):
    families = list(request.app.database["Families"].find(limit=10))
    return families


@router.get("/{id}", response_description="Get a single Family by id", response_model=Family)
def find_Family(id: str, request: Request):
    if (family := request.app.database["Families"].find_one({"_id": id})) is not None:
        return family
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Family with ID {id} not found")

@router.put("/{id}", response_description="Update a Family", response_model=Family)
def update_Family(id: str, request: Request, family: FamilyUpdate = Body(...)):
    family = {k: v for k, v in family.dict().items() if v is not None}
    if len(family) >= 1:
        update_result = request.app.database["Families"].update_one(
            {"_id": id}, {"$set": family}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Family with ID {id} not found")

    if (
        existing_family := request.app.database["Families"].find_one({"_id": id})
    ) is not None:
        return existing_family

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Family with ID {id} not found")

@router.delete("/{id}", response_description="Delete a family")
def delete_Family(id: str, request: Request, response: Response):
    delete_result = request.app.database["Families"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Family with ID {id} not found")


#------------------------------Photo_Album-------------------------------
@router.post("/", response_description="Create a new Photo_Album", status_code=status.HTTP_201_CREATED, response_model=Photo_Album)
def create_Photo_Album(request: Request, photo_album: Photo_Album = Body(...)):
    photo_album = jsonable_encoder(photo_album)
    new_photo_album = request.app.database["Photo_Albums"].insert_one(photo_album)
    created_photo_album = request.app.database["Photo_Albums"].find_one(
        {"_id": new_photo_album.inserted_id}
    )

    return created_photo_album


@router.get("/", response_description="List all Photo_Albums", response_model=List[Photo_Album])
def list_Photo_Albums(request: Request):
    photo_albums = list(request.app.database["Photo_Albums"].find(limit=10))
    return photo_albums


@router.get("/{id}", response_description="Get a single Photo_Album by id", response_model=Photo_Album)
def find_Photo_Album(id: str, request: Request):
    if (photo_album := request.app.database["Photo_Albums"].find_one({"_id": id})) is not None:
        return photo_album
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"photo_album with ID {id} not found")

@router.put("/{id}", response_description="Update a Photo_Album", response_model=Photo_Album)
def update_Photo_Album(id: str, request: Request, photo_album: Photo_AlbumUpdate = Body(...)):
    photo_album = {k: v for k, v in photo_album.dict().items() if v is not None}
    if len(photo_album) >= 1:
        update_result = request.app.database["Photo_Albums"].update_one(
            {"_id": id}, {"$set": photo_album}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Photo_Album with ID {id} not found")

    if (
        existing_photo_album := request.app.database["Photo_Albums"].find_one({"_id": id})
    ) is not None:
        return existing_photo_album

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Photo_Album with ID {id} not found")

@router.delete("/{id}", response_description="Delete a Photo_Album")
def delete_Photo_Album(id: str, request: Request, response: Response):
    delete_result = request.app.database["Photo_Albums"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Photo_Album with ID {id} not found")

