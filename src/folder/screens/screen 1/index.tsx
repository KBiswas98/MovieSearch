import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ActionSection from '../../components/ActionSection/ActionSection';
import Result from '../../components/Result/Result';

export default function index() {
  return (
    <section style={{ margin: '0px 20px' }}>
      <Navbar />
      <ActionSection />
      <Result />
    </section>
  );
}
