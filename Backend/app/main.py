from fastapi import FastAPI
from app.api.upload import router as upload_router
from app.api.investigate import router as investigate_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AgentForensics API",
    version="1.0.0",
    description="Agentic AI For Digital Forensics"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(upload_router)
app.include_router(investigate_router)

@app.get("/")
def home():
    return{
        "message": "Agentic ai backend running"
    }