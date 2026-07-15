from app.agents.evidence_agent import EvidenceAgent
from app.agents.planner_agent import PlannerAgent
from app.agents.threat_agent import ThreatAnalysisAgent
from app.agents.timeline_agent import TimeLineAgent

class OrchestratorAgent:
    def __init__(self,file_path):
        self.file_path = file_path
    
    def run(self):
        agent = EvidenceAgent(self.file_path)
        summary = agent.generate_summary()
        
        df = agent.get_dataframe()
        
        planner = PlannerAgent(summary)
        plan = planner.generate_plan()
        
        threatAnalyser = ThreatAnalysisAgent(summary)
        threat_report = threatAnalyser.analyze()
        
        timeline_agent = TimeLineAgent(df)
        timeline = timeline_agent.generate_timeline()
        
        return{
            "evidence":summary,
            "investigation_plan":plan,
            "threat_report":threat_report,
            "timeline":timeline
        }
        