import React from 'react';

// Row component to render each item in a row
const Row = ({ title, description }) => {
  return (
    <div className="row mb-4 bg-dark text-white p-3">
      <div className="col">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Main component that uses the Row component
const RowContainer = () => {
  const rows = [
    { title: "Row 1", description: "This is the first row." },
    { title: "Row 2", description: "This is the second row." },
    { title: "Row 3", description: "This is the third row." }
  ];

  return (
    <div className="container mt-3">
      {rows.map((row, index) => (
        <Row key={index} title={row.title} description={row.description} />
      ))}
    </div>
  );
};

export default RowContainer;
