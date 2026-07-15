class PlannerAgent:
    def __init__(self, evidence):
        self.evidence = evidence
        
    def generate_plan(self):
        plan = []
        
        events = self.evidence.get("events",[])
        
        if "login" in events:
            plan.append(
                "Analyse login activity for suspicious access"
            )
        
        if "USB Connected" in events:
            plan.append(
                "Investigate USB device usage and copied files"
            )
        
        if "Copy File" in events:
            plan.append(
                "Identify copied files and destination"
            )
        
        if "Delete File" in events:
            plan.append(
                "Recover deleted files if possible."
            )
        
        if "Download File" in events:
            plan.append(
                "Analyze downloaded files for potential data leakage"
            )
        
        if not plan:
            plan.append(
                "Perform general forensic investigation."
            )
        
        return plan
        
        
        