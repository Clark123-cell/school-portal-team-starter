import React from 'react';
import { students, results, fees, naira } from '../data/mockData.js';
export default function Dashboard() {
  const paid = fees.filter(f => f.status === 'Paid').reduce((sum,f) => sum + f.amount,0);
  return <><div className="page-heading"><div><p className="eyebrow">THURSDAY • TEAM DEMO</p><h1>School overview</h1><p>Welcome back. Here is a snapshot of your school.</p></div><span className="term-chip">2026/2027 Session</span></div>
    <section className="stat-grid" aria-label="School summary">
      <div className="stat-card"><span>Registered students</span><strong>{students.length}</strong><small>Sample records</small></div>
      <div className="stat-card"><span>Published scores</span><strong>{results.length}</strong><small>Sample entries</small></div>
      <div className="stat-card"><span>Fees collected</span><strong>{naira(paid)}</strong><small>Demo records</small></div>
    </section>
    <section className="panel"><h2>Team exercise</h2><p>Each developer owns one independent page. Open Students, Results, and School fees to view the starter versions. Your team's pull requests will improve them.</p><div className="tasks"><div><b>01</b><span>Student search and filtering</span></div><div><b>02</b><span>Results and grade calculations</span></div><div><b>03</b><span>Fee status and totals</span></div></div></section>
  </>;
}
