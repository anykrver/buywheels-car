import fs from 'fs';

const setupPath = 'g:/buywheels main/code buywheels/buywheels-car-main/buywheels-car-main/supabase_setup.sql';
const genPath = 'g:/buywheels main/code buywheels/buywheels-car-main/buywheels-car-main/scratch_generated_vehicles.sql';

let setupSql = fs.readFileSync(setupPath, 'utf8');
const genSql = fs.readFileSync(genPath, 'utf8');

// Find start of vehicle seeding section
let startIdx = setupSql.indexOf('-- SEEDING ALL');
if (startIdx === -1) {
  startIdx = setupSql.indexOf('-- Seeding Vehicles');
}

// Find end of vehicle seeding section (start of RLS or Reviews)
let endIdx = setupSql.indexOf('-- Enable RLS and allow full access on public catalog tables');
if (endIdx === -1) {
  endIdx = setupSql.indexOf('-- Seeding Reviews');
}

if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
  const before = setupSql.slice(0, startIdx);
  const after = setupSql.slice(endIdx);

  const newFullSql = before + genSql + '\n' + after;
  fs.writeFileSync(setupPath, newFullSql, 'utf8');
  console.log('Successfully updated supabase_setup.sql with full 154 vehicles dataset!');
} else {
  console.error('Failed to locate insertion boundaries in supabase_setup.sql:', { startIdx, endIdx });
}
