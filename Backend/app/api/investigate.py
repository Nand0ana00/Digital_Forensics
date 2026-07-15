from fastapi import APIRouter, HTTPException
from app.agents.orchestrator_agent import OrchestratorAgent
import os

router = APIRouter()

@router.get("/investigate")
async def investigate():
    try:
        upload_folder = "app/uploads"
        files = os.listdir(upload_folder)
        
        if len(files) == 0:
            raise HTTPException(
                status_code=404,
                detail="No uploaded files found"
            )
        
        latest_file = max(
            [os.path.join(upload_folder,file) for file in files], 
            key = os.path.getctime
        )
        
        orchestrator = OrchestratorAgent(latest_file)
        result = orchestrator.run()
        
        
        return{
            "status":"success",
            "message":"Investigation completed",
            "result": result
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
