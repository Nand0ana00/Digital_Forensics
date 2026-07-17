import os
import pandas as pd

class EvidenceAgent:
    REQUIRED_COLUMNS = [
    "evidence_id",
    "file_name",
    "evidence_type",
    "source",
    "timestamp",
    "description",
    "severity"
    ]
    
    def __init__(self, filepath:str):
        self.filepath = filepath
        self.dataframe = None
        
    
    def load_csv(self):
        if not os.path.exists(self.filepath):
            raise FileNotFoundError(
                f"{self.file_path} does not exist."
            )
        
        self.dataframe = pd.read_csv(self.filepath)
        return self.dataframe
    
    def get_dataframe(self):
        if self.dataframe is None:
            self.load_csv()
        
        return self.dataframe
    
    def validate_columns(self):
        missing_columns=[]
        
        for column in self.REQUIRED_COLUMNS:
            if column not in self.dataframe.columns:
                missing_columns.append(column)
        
        if missing_columns:
            raise ValueError(
                f"Missing Columns: {missing_columns}"
            )
        
        return True
    
    def extract_sources(self):
        return(
            self.dataframe["source"]
            .dropna()
            .unique()
            .tolist()
        )
    
    def extract_evidence_types(self):
        return(
            self.dataframe["evidence_type"]
            .dropna()
            .unique()
            .tolist()
        )
    
    def extract_files(self):
        return(
            self.dataframe["file_name"]
            .dropna()
            .unique()
            .tolist()
        )
    
    
    
    def extract_timestamps(self):
        return(
            self.dataframe["timestamp"]
            .dropna()
            .unique()
            .tolist()
        )
    
    def generate_summary(self):
        self.load_csv()
        self.validate_columns()
        
        summary = {
    "total_records": len(self.dataframe),
    "sources": self.extract_sources(),
    "evidence_types": self.extract_evidence_types(),
    "files": self.extract_files(),
    "timestamps": self.extract_timestamps(),
    "severity": self.dataframe["severity"].dropna().unique().tolist()
}
        
        return summary

    