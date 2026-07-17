import pandas as pd
class TimeLineAgent:
    def __init__(self,dataframe):
        self.dataframe = dataframe
        
    def clean(self,value):
        return None if pd.isna(value) else value
        
    
    def generate_timeline(self):
        timeline = []
        
        sorted_df = self.dataframe.sort_values(by="timestamp")
        
        for _,row in sorted_df.iterrows():
            timeline.append({
                "timestamp":self.clean(row["timestamp"]),
                "source": self.clean(row["source"]),
                "event":self.clean(row["evidence_type"]),
                "file":self.clean(row["file_name"]),
                
            })
            
        return timeline