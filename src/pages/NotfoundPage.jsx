import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '5rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn’t exist.</p>
    <Link to="/">Go back home</Link>
  </div>
);

export default NotFound;
