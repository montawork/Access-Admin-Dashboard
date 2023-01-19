import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import AdminDashboard from './pages/AdminDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [agents, setAgents] = useState(
    data.results.filter(
      (agent) => agent.id !== '000' || agent.name === 'cyr-customer-ossec.local'
    )
  );

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <AdminDashboard agents={agents} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
