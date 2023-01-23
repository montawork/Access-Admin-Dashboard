import React from 'react';
import Agent from '../components/Agent';

const AdminDashboard = ({ agents }) => {
  // TOTAL AGENTS
  const totalAgents = agents.length;
  // ACTIVE Agents
  const ActiveAgents = agents.filter(
    (agent) => agent.status === 'active'
  ).length;
  // DISCONNECTED AGENTS
  const disconnectedAgents = agents.filter(
    (agent) => agent.status === 'disconnected'
  ).length;
  // PENDING AGENTS
  const pendingAgents = agents.filter(
    (agent) => agent.status === 'pending'
  ).length;
  // NEVER CONNECTED AGENTS
  const neverConnectedAgents = agents.filter(
    (agent) => agent.status === 'never_connected'
  ).length;

  return (
    <div>
      <h1>Hello Admin</h1>
      <p>
        View the status of your agents and the evolution of their latest alerts
      </p>
      <h3>Installed agents by their status</h3>
      <div className="d-flex gap-2 flex-wrap">
        <Agent
          color="rgb(0, 107, 180)"
          title="Total agents"
          value={totalAgents}
        />
        <Agent
          color="rgb(0, 120, 113)"
          title="Active agents"
          value={ActiveAgents}
        />
        <Agent
          color="rgb(189, 39, 30)"
          title="Disconnected agents"
          value={disconnectedAgents}
        />
        <Agent
          color="rgb(254, 197, 20)"
          title="Pending agents"
          value={pendingAgents}
        />
        <Agent
          color="rgb(100, 106, 119)"
          title="Never connected agents"
          value={neverConnectedAgents}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
