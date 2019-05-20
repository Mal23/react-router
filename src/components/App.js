import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <>
        <Header />
      </>
    </Router>
  );
}
