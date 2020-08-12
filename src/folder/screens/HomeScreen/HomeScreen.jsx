import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import ActionSection from '../../components/ActionSection/ActionSection';
import Result from '../../components/Result/Result';
import Pagination from '../../components/Pagination/Pagination';

export default function HomeScreen() {
  return (
    <section style={{ margin: '0px 20px' }}>
      <Navbar />
      <ActionSection />
      <Result />
    </section>
  );
}
