import React from 'react';
import { fees, nameFor, naira } from '../data/mockData.js';
// Developer C owns this file. See docs/TEAM_TASKS.md.
export default function Fees() {
  return <><div className="page-heading"><div><p className="eyebrow">FINANCE MANAGEMENT</p><h1>School fees</h1><p>Developer C: add payment status filters and fee summaries.</p></div></div><section className="panel"><div className="panel-header"><h2>Fee records</h2><span className="counter">{fees.length} entries</span></div><div className="table-wrap"><table><thead><tr><th>Student</th><th>Amount</th><th>Status</th></tr></thead><tbody>{fees.map(f=><tr key={f.id}><td>{nameFor(f.studentId)}</td><td>{naira(f.amount)}</td><td><span className={'status '+(f.status === 'Paid'?'paid':'pending')}>{f.status}</span></td></tr>)}</tbody></table></div></section></>;
}
