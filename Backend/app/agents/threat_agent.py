class ThreatAnalysisAgent:
    def __init__(self, evidence):
        self.evidence = evidence
        
    
    def analyze(self):
        events = self.evidence.get("events",[])
        threats = []
        risk_score = 0
        
        if "Login" in events:
            threats.append(
                "User Login activity detected"
            )
            risk_score+=1
        
        if "USB Connected" in events:
            threats.append(
                "External USB device connected. Possible removable media usage"
            )
            risk_score+=3
        
        if "Copy File" in events:
            threats.append(
                "Identify copied files and destination"
            )
            risk_score+=3
        
        if "Delete File" in events:
            threats.append(
                "File deletion detected. Possible evidence tampering"
            )
            risk_score+=4
        
        if "Download File" in events:
            threats.append(
                "Downloaded files detected."
            )
            risk_score+=2
        
        if "Logout" in events:
            threats.append(
                "User logged out"
            )
        
        if "Browser Visit" in events:
            threats.append(
                "Browser Activity detected"
            )
            risk_score += 1
        
        if risk_score >= 10:
            risk_level = "CRITICAL"
        
        elif risk_score >= 7:
            risk_level = "HIGH"
        
        elif risk_score >= 4:
            risk_level = "MEDIUM"
        
        else:
            risk_level = "LOW"
            
        return{
            "risk_score":risk_score,
            "risk_level":risk_level,
            "threats":threats
        }