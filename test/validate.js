// Structural check: valid JSON, unique node names, connections reference existing nodes, every node reachable from a trigger.
const fs = require('fs'), path = require('path'), test = require('node:test'), assert = require('node:assert');
const dir = path.join(__dirname, '..', 'workflows');
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) test(f, () => {
  const w = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const names = w.nodes.map((n) => n.name); assert.equal(new Set(names).size, names.length, 'duplicate node names');
  for (const n of w.nodes) { assert.ok(n.type && n.typeVersion && Array.isArray(n.position), 'bad node ' + n.name); }
  const reach = new Set(); const q = w.nodes.filter((n) => /trigger|webhook/i.test(n.type)).map((n) => n.name); assert.ok(q.length, 'no trigger');
  while (q.length) { const c = q.pop(); if (reach.has(c)) continue; reach.add(c); const m = (w.connections[c] || {}).main || []; for (const o of m) for (const t of o) { assert.ok(names.includes(t.node), 'dangling connection to ' + t.node); q.push(t.node); } }
  for (const k of Object.keys(w.connections)) assert.ok(names.includes(k), 'connection from unknown ' + k);
  assert.deepEqual(names.filter((n) => !reach.has(n)), [], 'unreachable nodes');
  assert.equal(w.active, false);
  assert.ok(!/@gmail\.com|api[_-]?key|secret/i.test(JSON.stringify(w)), 'contains personal/secret data');
});
