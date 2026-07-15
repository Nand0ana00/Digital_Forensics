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
                "user":self.clean(row["user"]),
                "event":self.clean(row["event"]),
                "file":self.clean(row["file_name"]),
                "device":self.clean(row["device"]),
                "ip_address":self.clean(row["ip_address"])
            })
            
        return timeline