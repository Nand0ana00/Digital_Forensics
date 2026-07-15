export function transformThreat(data){

return {

 threat:data.threat_level,

 confidence:`${data.confidence_score}%`,

 status:data.status

};

}



export function transformTimeline(data){

return data.map(event=>({

 time:event.timestamp,

 title:event.event_type,

 description:event.description

}));

}