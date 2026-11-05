import React from 'react';
import { results, nameFor } from '../data/mockData.js';
// Developer B owns this file. See docs/TEAM_TASKS.md.
export default function Results() {
  return <><div className="page-heading"><div><p className="eyebrow">ACADEMIC PERFORMANCE</p><h1>Results</h1><p>Developer B: add grades, student filtering, and a class average.</p></div></div><section className="panel"><div className="panel-header"><h2>First-term scores</h2><span className="counter">{results.length} entries</span></div><div className="table-wrap"><table><thead><tr><th>Student</th><th>Subject</th><th>Score</th><th>Term</th></tr></thead><tbody>{results.map(r=><tr key={r.id}><td>{nameFor(r.studentId)}</td><td>{r.subject}</td><td>{r.score}/100</td><td>{r.term}</td></tr>)}</tbody></table></div></section></>;
}
