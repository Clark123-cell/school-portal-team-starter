// Shared, read-only sample data. No real student details or backend credentials.
export const students = [
  { id: 'STU-001', name: 'Amina Bello', className: 'SS 2A', status: 'Active' },
  { id: 'STU-002', name: 'David Okoro', className: 'SS 1B', status: 'Active' },
  { id: 'STU-003', name: 'Zainab Musa', className: 'JSS 3A', status: 'Active' },
  { id: 'STU-004', name: 'Tobi Adewale', className: 'JSS 2B', status: 'Active' },
  { id: 'STU-005', name: 'Grace Eze', className: 'SS 3A', status: 'Inactive' },
];
export const results = [
  { id: 'RES-1', studentId: 'STU-001', subject: 'Mathematics', score: 88, term: 'First term' },
  { id: 'RES-2', studentId: 'STU-002', subject: 'English', score: 73, term: 'First term' },
  { id: 'RES-3', studentId: 'STU-003', subject: 'Biology', score: 92, term: 'First term' },
];
export const fees = [
  { id: 'FEE-1', studentId: 'STU-001', amount: 75000, status: 'Paid' },
  { id: 'FEE-2', studentId: 'STU-002', amount: 75000, status: 'Pending' },
  { id: 'FEE-3', studentId: 'STU-003', amount: 65000, status: 'Paid' },
];
export const naira = n => '₦' + Number(n).toLocaleString('en-NG');
export const nameFor = id => students.find(s => s.id === id)?.name ?? id;
