import React from 'react';
import { students } from '../data/mockData.js';
// Developer A owns this file. See docs/TEAM_TASKS.md.
export default function Students() {
  return <><div className="page-heading"><div><p className="eyebrow">STUDENT RECORDS</p><h1>Students</h1><p>Developer A: improve this page with searching and class filters.</p></div></div><section className="panel"><div className="panel-header"><h2>All students</h2><span className="counter">{students.length} records</span></div><div className="table-wrap"><table><thead><tr><th>Student ID</th><th>Name</th><th>Class</th><th>Status</th></tr></thead><tbody>{students.map(s=><tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.className}</td><td><span className={'status ' + (s.status === 'Active' ? 'paid' : 'pending')}>{s.status}</span></td></tr>)}</tbody></table></div></section></>;
}
