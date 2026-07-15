from fastapi import FastAPI
from app.api.upload import router as upload_router
from app.api.investigate import router as investigate_router

app = FastAPI(
    title="AgentForensics API",
    version="1.0.0",
    description="Agentic AI For Digital Forensics"
)

app.include_router(upload_router)
app.include_router(investigate_router)

@app.get("/")
def home():
    return{
        "message": "Agentic ai backend running"
    }