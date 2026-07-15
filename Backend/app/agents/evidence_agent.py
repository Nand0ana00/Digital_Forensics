import os
import pandas as pd

class EvidenceAgent:
    REQUIRED_COLUMNS=[
        "timestamp",
        "user",
        "event",
        "file_name",
        "ip_address",
        "device",
        "status"
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
    
    def extract_users(self):
        return(
            self.dataframe["user"]
            .dropna()
            .unique()
            .tolist()
        )
    
    def extract_events(self):
        return(
            self.dataframe["event"]
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
    
    def extract_devices(self):
        return(
            self.dataframe["device"]
            .dropna()
            .unique()
            .tolist()
        )
    
    def extract_ip_address(self):
        return(
            self.dataframe["ip_address"]
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
            "total_records" : len(self.dataframe),
            "users" : self.extract_users(),
            "events" : self.extract_events(),
            "files" : self.extract_files(),
            "devices" : self.extract_devices(),
            "ip_address" : self.extract_ip_address(),
            "timestamps" : self.extract_timestamps()
        }
        
        return summary

    