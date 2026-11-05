import React, { useState } from 'react';
import Dashboard from './pages/Dashboard.jsx';
import Students from './pages/Students.jsx';
import Results from './pages/Results.jsx';
import Fees from './pages/Fees.jsx';

const menu = [
  { key: 'dashboard', label: 'Overview', icon: '◫' },
  { key: 'students', label: 'Students', icon: '♙' },
  { key: 'results', label: 'Results', icon: '▤' },
  { key: 'fees', label: 'School fees', icon: '▣' },
];
export default function App() {
  const [active, setActive] = useState('dashboard');
  const Pages = { dashboard: Dashboard, students: Students, results: Results, fees: Fees };
  const CurrentPage = Pages[active];
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">B</span><span>Brightfield <small>School Portal</small></span></div>
      <div className="sidebar-caption">WORKSPACE</div>
      <nav aria-label="Main navigation">{menu.map(item => <button key={item.key} type="button" className={'nav-item ' + (active === item.key ? 'active' : '')} onClick={() => setActive(item.key)} aria-current={active === item.key ? 'page' : undefined}><span>{item.icon}</span>{item.label}</button>)}</nav>
      <div className="sidebar-note">Team development demo<br/><small>Uses sample data only</small></div>
    </aside>
    <div className="content-area">
      <header className="topbar"><span className="crumb">School administration <span className="slash">/</span> {menu.find(x => x.key === active)?.label}</span><div className="avatar">AD</div></header>
      <main><CurrentPage /></main>
      <footer>Brightfield School Portal • Demo project • No real student data</footer>
    </div>
  </div>;
}
