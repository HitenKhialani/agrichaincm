import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setDemoMode, setNodes } from '../../store/slices/blockchainSlice';
import { StakeholderNode, UserRole } from '../../types';

const NetworkVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const dispatch = useDispatch();
  const { nodes, demoMode } = useSelector((state: RootState) => state.blockchain);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Initialize network nodes
  useEffect(() => {
    const initialNodes: StakeholderNode[] = [
      { id: 'farmer', type: 'farmer', name: 'GreenFields Farm', position: { x: 150, y: 200 }, status: 'active', connections: ['inspector'] },
      { id: 'inspector', type: 'inspector', name: 'QualityCheck Inc.', position: { x: 350, y: 150 }, status: 'active', connections: ['farmer', 'processor'] },
      { id: 'processor', type: 'processor', name: 'FreshProcess Ltd.', position: { x: 550, y: 200 }, status: 'active', connections: ['inspector', 'logistics'] },
      { id: 'logistics', type: 'logistics', name: 'FastTrack Shipping', position: { x: 450, y: 350 }, status: 'active', connections: ['processor', 'importer'] },
      { id: 'bank', type: 'bank', name: 'AgriBank', position: { x: 250, y: 350 }, status: 'active', connections: ['farmer', 'importer'] },
      { id: 'importer', type: 'importer', name: 'Global Foods Inc.', position: { x: 650, y: 300 }, status: 'active', connections: ['logistics', 'bank'] },
    ];
    
    dispatch(setNodes(initialNodes));
  }, [dispatch]);

  useEffect(() => {
    if (!svgRef.current || nodes.length === 0) return;

    try {
      const svg = d3.select(svgRef.current);

      // Clear previous content
      svg.selectAll('*').remove();

      // Create connections
      const connections = nodes.flatMap(node => 
        node.connections.map(targetId => ({
          source: node,
          target: nodes.find(n => n.id === targetId)!
        })).filter(conn => conn.target)
      );

      // Draw connection lines
      svg.selectAll('.connection')
        .data(connections)
        .enter()
        .append('line')
        .attr('class', 'connection transaction-line')
        .attr('x1', d => d.source.position.x)
        .attr('y1', d => d.source.position.y)
        .attr('x2', d => d.target.position.x)
        .attr('y2', d => d.target.position.y)
        .attr('stroke', '#00BCD4')
        .attr('stroke-width', 2)
        .attr('opacity', 0.6);

      // Draw nodes
      const nodeGroups = svg.selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node network-node')
        .attr('transform', d => `translate(${d.position.x}, ${d.position.y})`)
        .style('cursor', 'pointer')
        .on('mouseenter', (_, d) => setHoveredNode(d.id))
        .on('mouseleave', () => setHoveredNode(null));

      // Node circles
      nodeGroups.append('circle')
        .attr('r', 25)
        .attr('fill', d => getNodeColor(d.type))
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))');

      // Node icons (emojis)
      nodeGroups.append('text')
        .text(d => getNodeIcon(d.type))
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .style('font-size', '20px')
        .style('pointer-events', 'none');

      // Node labels
      nodeGroups.append('text')
        .text(d => d.name.split(' ')[0]) // First word only
        .attr('text-anchor', 'middle')
        .attr('dy', '45px')
        .style('font-size', '12px')
        .style('font-weight', '500')
        .style('fill', '#374151')
        .style('pointer-events', 'none');

    } catch (error) {
      console.error('Error rendering network visualization:', error);
    }
  }, [nodes]);

  const getNodeColor = (type: UserRole): string => {
    const colors = {
      farmer: '#4CAF50',
      inspector: '#2196F3',
      processor: '#FF9800',
      logistics: '#9C27B0',
      bank: '#F44336',
      importer: '#607D8B',
      admin: '#795548',
      consumer: '#009688',
    };
    return colors[type] || '#6C63FF';
  };

  const getNodeIcon = (type: UserRole): string => {
    const icons = {
      farmer: '🚜',
      inspector: '🔍',
      processor: '🏭',
      logistics: '🚛',
      bank: '🏦',
      importer: '🛳️',
      admin: '📋',
      consumer: '👤',
    };
    return icons[type] || '⚡';
  };

  const getRoleDescription = (type: UserRole): string => {
    const descriptions = {
      farmer: 'Grows and harvests agricultural products with quality documentation',
      inspector: 'Verifies quality and compliance with organic/safety standards',
      processor: 'Transforms raw materials into finished food products',
      logistics: 'Manages transportation and cold chain maintenance',
      bank: 'Processes payments and manages smart contract transactions',
      importer: 'Handles international trade and customs clearance',
      admin: 'Oversees network operations and maintains system integrity',
      consumer: 'Verifies product authenticity and views supply chain history',
    };
    return descriptions[type] || 'Participates in the supply chain network';
  };

  const animateBatchFlow = (_batchId: string) => {
    const demoPath = ['farmer', 'inspector', 'processor', 'logistics', 'importer'];
    let currentStep = 0;

    const animateStep = () => {
      if (currentStep < demoPath.length - 1) {
        const from = demoPath[currentStep];
        const to = demoPath[currentStep + 1];
        
        // Show step notification
        setTimeout(() => {
          alert(`📍 Step ${currentStep + 1}: ${from} → ${to}\n\n${getStepDescription(from, to)}`);
        }, currentStep * 2000);
        
        currentStep++;
        if (currentStep < demoPath.length - 1) {
          setTimeout(animateStep, 2000);
        } else {
          setTimeout(() => {
            dispatch(setDemoMode(false));
            alert('✅ Demo Complete!\n\nBatch AG2024-DEMO successfully tracked through entire supply chain using blockchain technology!');
          }, (currentStep + 1) * 2000);
        }
      }
    };

    animateStep();
  };

  const getStepDescription = (from: string, to: string) => {
    const descriptions = {
      'farmer-inspector': '🔍 Quality inspection initiated\n📋 Uploading organic certificates\n⏱️ Estimated completion: 2 hours',
      'inspector-processor': '✅ Quality approved!\n🏭 Sending to processing facility\n📦 Batch ready for transformation',
      'processor-logistics': '🍅 Tomatoes processed into sauce\n🚛 Packaging complete, ready for shipping\n❄️ Cold chain transport required',
      'logistics-importer': '🛳️ International shipping initiated\n📋 Customs documentation prepared\n🌍 Destination: Global market'
    };
    return descriptions[`${from}-${to}` as keyof typeof descriptions] || '📦 Processing next step...';
  };

  const startDemo = () => {
    dispatch(setDemoMode(true));
    
    // Show demo explanation
    alert('🚀 Blockchain Demo Starting!\n\n📦 Watch as batch AG2024-DEMO moves through:\n🚜 Farm → 🔍 Inspector → 🏭 Processor → 🚛 Logistics → 🛳️ Importer\n\nEach step creates an immutable blockchain record!');
    
    // Animate sample batch flow
    animateBatchFlow('AG2024-DEMO');
  };

  return (
    <div className="network-visualization relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Interactive Blockchain Network
          </h3>
          <p className="text-blue-100 text-sm">
            Hover over nodes to learn about each stakeholder's role
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startDemo}
          disabled={demoMode}
          className="btn btn-sm bg-white/20 text-white border border-white/30 hover:bg-white/30"
        >
          {demoMode ? 'Demo Running...' : 'Start Demo'}
        </motion.button>
      </div>

      <div className="relative bg-white/5 rounded-xl p-6 border border-white/10">
        <svg
          ref={svgRef}
          width="100%"
          height="400"
          viewBox="0 0 800 400"
          className="w-full h-auto"
        />

        {/* Tooltip */}
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            {(() => {
              const node = nodes.find(n => n.id === hoveredNode);
              if (!node) return null;
              
              return (
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{getNodeIcon(node.type)}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{node.name}</h4>
                      <p className="text-sm text-gray-600 capitalize">{node.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {getRoleDescription(node.type)}
                  </p>
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center space-x-2 text-blue-100">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Producer</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-100">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Verifier</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-100">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span>Processor</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-100">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span>Distributor</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualization;