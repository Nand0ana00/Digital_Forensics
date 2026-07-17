from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import shutil
import uuid

# Create a router for upload-related APIs
router = APIRouter()

# Folder where uploaded files will be stored
UPLOAD_FOLDER = "app/uploads"

# Create the folder if it doesn't already exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Allowed file extensions
ALLOWED_EXTENSIONS = [".csv"]

@router.post("/upload")
async def uploadFile(file:UploadFile = File(...)):
    try:
        original_filename = file.filename
    
        extension = os.path.splitext(original_filename)[1].lower()
        if extension not in ALLOWED_EXTENSIONS :
            raise HTTPException(
                status_code=400,
                detail="Only CSV files allowed"
            )
        
        unique_filename = f"{uuid.uuid4()}{extension}"
        
        file_path = os.path.join(UPLOAD_FOLDER, unique_filename).replace("\\","/")
        
        with open(file_path,"wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        
        return{
            "status":"success",
            "message":"File uploaded successfully",
            "original_filename":original_filename,
            "stored_filename":unique_filename,
            "file_path":file_path
        }
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"upload failed:{str(e)}"
        )
    
    finally:
        file.file.close()

    

