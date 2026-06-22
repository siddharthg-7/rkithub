import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls, Edge, Node, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const initialNodes: Node[] = [
  {
    id: 'center',
    type: 'default',
    data: { 
      label: (
        <div className="flex flex-col items-center justify-center p-4">
          <div className="font-bold text-xl text-white font-['Inter']">Industry Mentor</div>
          <div className="text-sm text-blue-200 mt-1">10+ Yrs Exp</div>
        </div>
      ) 
    },
    position: { x: 400, y: 300 },
    style: { 
      background: 'var(--color-primary-dark)', 
      color: 'white', 
      borderRadius: '50%', 
      width: 180, 
      height: 180, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      border: '4px solid var(--color-primary)',
      boxShadow: '0 0 40px rgba(10, 77, 162, 0.4)'
    },
  },
  {
    id: 'frontend',
    data: { label: <div className="font-bold text-gray-800">Frontend Expert</div> },
    position: { x: 400, y: 50 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Bottom,
  },
  {
    id: 'backend',
    data: { label: <div className="font-bold text-gray-800">Backend Expert</div> },
    position: { x: 700, y: 150 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: 'ai',
    data: { label: <div className="font-bold text-gray-800">AI Expert</div> },
    position: { x: 700, y: 450 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: 'cloud',
    data: { label: <div className="font-bold text-gray-800">Cloud Expert</div> },
    position: { x: 400, y: 550 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Top,
    targetPosition: Position.Top,
  },
  {
    id: 'testing',
    data: { label: <div className="font-bold text-gray-800">Testing Expert</div> },
    position: { x: 100, y: 450 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
  },
  {
    id: 'career',
    data: { label: <div className="font-bold text-gray-800">Career Coach</div> },
    position: { x: 100, y: 150 },
    style: { borderRadius: '12px', padding: '10px 20px', border: '1px solid #E2E8F0', background: 'white' },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
  },
];

const initialEdges: Edge[] = [
  { id: 'e-frontend', source: 'frontend', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
  { id: 'e-backend', source: 'backend', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
  { id: 'e-ai', source: 'ai', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
  { id: 'e-cloud', source: 'cloud', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
  { id: 'e-testing', source: 'testing', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
  { id: 'e-career', source: 'career', target: 'center', animated: true, style: { stroke: 'var(--color-primary)', strokeWidth: 2 } },
];

export const MentorEcosystem = () => {
  return (
    <section className="h-[700px] flex flex-col justify-center relative font-sans overflow-hidden py-16 w-full">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 absolute top-8 left-0 right-0 pointer-events-none px-4"
      >
        <h2 className="text-3xl font-[800] text-[#0F172A] mb-2 font-['Inter']">
          Learn From Industry Mentors
        </h2>
        <p className="text-sm text-[#64748B] font-['Inter']">
          Get guidance from professionals who are working in top companies.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full h-full mx-auto mt-12 relative cursor-grab active:cursor-grabbing"
      >
        <ReactFlow 
          nodes={initialNodes} 
          edges={initialEdges} 
          fitView 
          fitViewOptions={{ padding: 0.2 }}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
        >
          <Background color="#cbd5e1" gap={24} size={2} />
        </ReactFlow>
      </motion.div>
    </section>
  );
};
