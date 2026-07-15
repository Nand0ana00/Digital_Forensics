import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import Card from "../ui/Card";


const nodes = [
  {
    id: "1",
    position: { x: 100, y: 50 },
    data: { label: "👤 John" },
  },
  {
    id: "2",
    position: { x: 100, y: 170 },
    data: { label: "💻 Workstation" },
  },
  {
    id: "3",
    position: { x: 100, y: 290 },
    data: { label: "🔌 USB Device" },
  },
  {
    id: "4",
    position: { x: 100, y: 410 },
    data: { label: "📄 salary.xlsx" },
  },
  {
    id: "5",
    position: { x: 350, y: 410 },
    data: { label: "☁ Dropbox" },
  },
];


const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
  { id: "e4", source: "4", target: "5" },
];


export default function EvidenceGraph() {

  return (

    <Card title="Evidence Relationship Graph">

      <div className="h-[600px] rounded-xl overflow-hidden">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >

          <Background />

          <MiniMap />

          <Controls />

        </ReactFlow>

      </div>

    </Card>

  );

}