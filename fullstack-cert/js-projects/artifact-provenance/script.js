// start with an empty records array
const provenanceRecords = [];

// walk learners through the creation of the first record
const record1 = {
  id: "REC-001",
  artifactId: "ANT-001",
  curatorId: "curator-sofia",
  ownerChain: [
    { name: "Cairo Museum", from: 1923, to: 1965 },
    { name: "Hartley Collection", from: 1965, to: 2001 },
    { name: "Meridian Art Trust", from: 2001, to: null },
  ],
  notes: [
    "Verified with 1923 acquisition documents",
    "Export license confirmed in British Archives",
  ],
  priority: 1,
};

const record2 = {
  id: "REC-002",
  artifactId: "ANT-001",
  curatorId: "curator-james",
  ownerChain: [
    { name: "National Museum of Cairo", from: 1921, to: 1972 },
    { name: "Meridian Art Trust", from: 1972, to: null },
  ],
  notes: ["Cross-referenced with British Museum archives"],
  priority: 2,
};

const record3 = {
  id: "REC-003",
  artifactId: "ANT-002",
  curatorId: "curator-mia",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Documented in 1952 foundation records"],
  priority: 1,
};

const record4 = {
  id: "REC-004",
  artifactId: "ANT-002",
  curatorId: "curator-luca",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Verified against Istanbul university thesis, 2003"],
  priority: 2,
};

// provide the other records and have the learner push them into the array
provenanceRecords.push(record1, record2, record3, record4);

// a helper to format an ownership period as a readable string
function formatPeriod(from, to) {
  return `${from}–${to || "present"}`;
}

// merge curator submissions for the same artifact
function mergeProvenance(records) {
  const source1 = records[0].id;
  const source2 = records[1].id;

  return {
    artifactId: records[0].artifactId,
    ownerChains: {
      [source1]: JSON.parse(JSON.stringify(records[0].ownerChain)),
      [source2]: JSON.parse(JSON.stringify(records[1].ownerChain)),
    },
    notes: [...records[0].notes, ...records[1].notes],
    sources: [source1, source2],
    priorities: {
      [source1]: records[0].priority,
      [source2]: records[1].priority,
    },
  };
}

// detect conflicts between two submissions
function detectConflicts(merged) {
  const conflicts = [];
  const chain1 = merged.ownerChains[merged.sources[0]];
  const chain2 = merged.ownerChains[merged.sources[1]];

  // early quick check
  if (JSON.stringify(chain1) === JSON.stringify(chain2)) {
    return conflicts;
  }

  // compare chain lengths
  if (chain1.length !== chain2.length) {
    conflicts.push({
      field: "ownerChain",
      explanation: `Chain lengths differ: ${merged.sources[0]} has ${chain1.length} entries, ${merged.sources[1]} has ${chain2.length} entries`,
    });
  }

  // check first entry name
  if (chain1[0] && chain2[0] && chain1[0].name !== chain2[0].name) {
    conflicts.push({
      field: "ownerChain[0].name",
      explanation: `First owner name differs: "${chain1[0].name}" (${merged.sources[0]}) vs "${chain2[0].name}" (${merged.sources[1]})`,
    });
  }

  // check first entry period
  if (chain1[0] && chain2[0]) {
    const period1 = formatPeriod(chain1[0].from, chain1[0].to);
    const period2 = formatPeriod(chain2[0].from, chain2[0].to);
    if (period1 !== period2) {
      conflicts.push({
        field: "ownerChain[0].period",
        explanation: `First owner period differs: ${period1} (${merged.sources[0]}) vs ${period2} (${merged.sources[1]})`,
      });
    }
  }

  return conflicts;
}

// resolve conflicts by applying priority rules
function applyPriorityRules(merged) {
  const source1 = merged.sources[0];
  const source2 = merged.sources[1];

  const leadSource =
    merged.priorities[source1] <= merged.priorities[source2]
      ? source1
      : source2;

  return {
    ...merged,
    ownerChain: merged.ownerChains[leadSource],
    resolvedBy: leadSource,
  };
}

// store resolved records by artifactId, so we can use it as a lookup table
const resolvedReports = {};

// render an audit summary for a given artifact
function renderAuditReport(artifactId) {
  if (!resolvedReports.hasOwnProperty(artifactId)) {
    return `No report found for artifact ${artifactId}`;
  }

  const record = resolvedReports[artifactId];

  return `## Artifact Provenance Report: ${artifactId}

**Resolved by:** ${record.resolvedBy}
**Sources:** ${record.sources[0]}, ${record.sources[1]}
**Conflicts detected:** ${record.conflicts.length}

### Ownership Chain
\`\`\`json
${JSON.stringify(record.ownerChain, null, 2)}
\`\`\`

### Conflicts
\`\`\`json
${JSON.stringify(record.conflicts, null, 2)}
\`\`\`

### Notes
\`\`\`json
${JSON.stringify(record.notes, null, 2)}
\`\`\``;
}

// demo
console.log("=".repeat(60));
console.log("ARTIFACT PROVENANCE RECONCILIATION");
console.log("=".repeat(60));
console.log();

// main case, curators disagree on ownership history
console.log("Processing ANT-001...");
const merged1 = mergeProvenance([record1, record2]);
merged1.conflicts = detectConflicts(merged1);
const resolved1 = applyPriorityRules(merged1);
resolvedReports[resolved1.artifactId] = resolved1;
console.log(`Conflicts found: ${resolved1.conflicts.length}`);
console.log(`Resolved by: ${resolved1.resolvedBy}`);
console.log();

// secondary case, curators are in full agreement
console.log("Processing ANT-002...");
const merged2 = mergeProvenance([record3, record4]);
merged2.conflicts = detectConflicts(merged2);
const resolved2 = applyPriorityRules(merged2);
resolvedReports[resolved2.artifactId] = resolved2;
console.log(`Conflicts found: ${resolved2.conflicts.length}`);
console.log(`Resolved by: ${resolved2.resolvedBy}`);
console.log();

// render audit reports
console.log(renderAuditReport("ANT-001"));
console.log();
console.log(renderAuditReport("ANT-002"));
