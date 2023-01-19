import React from 'react';
import Card from 'react-bootstrap/Card';

const Agent = ({ color, title, value }) => {
  return (
    <Card className="card">
      <p>{title}</p>
      <h4 style={{ color }}>{value}</h4>
    </Card>
  );
};

export default Agent;
