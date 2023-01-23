import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import data from './data.json';
import AdminDashboard from './pages/AdminDashboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

function App() {
  const [agents, setAgents] = useState([]);

  // FETCHING DATA USING AXIOS
  useEffect(() => {
    setAgents(
      data.results.filter(
        (agent) =>
          agent.id !== '000' || agent.name === 'cyr-customer-ossec.local'
      )
    );
  }, []);

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
