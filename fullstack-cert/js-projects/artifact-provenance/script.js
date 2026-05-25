const provenanceRecords = [];

const record1 = {
  id: 1,
  artifactId: 101,
  curatorId: 201,
  curatorName: "Sofia Reyes",
  ownerChain: [
    { name: "Cairo Museum", from: 1923, to: 1965 },
    { name: "Meridian Art Trust", from: 2001, to: null },
  ],
  notes: [
    "Verified with 1923 acquisition documents",
    "Export license confirmed in British Archives",
  ],
  priority: 1,
};

const record2 = {
  id: 2,
  artifactId: 101,
  curatorId: 202,
  curatorName: "James Liu",
  ownerChain: [
    { name: "National Museum of Cairo", from: 1921, to: 1972 },
    { name: "Meridian Art Trust", from: 1972, to: null },
  ],
  notes: ["Cross-referenced with British Museum archives"],
  priority: 2,
};

const record3 = {
  id: 3,
  artifactId: 102,
  curatorId: 203,
  curatorName: "Mia Chen",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Documented in 1952 foundation records"],
  priority: 1,
};

const record4 = {
  id: 4,
  artifactId: 102,
  curatorId: 204,
  curatorName: "Luca Ferrari",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Verified against Istanbul university thesis, 2003"],
  priority: 2,
};

const record5 = {
  id: 5,
  artifactId: 103,
  curatorId: 205,
  curatorName: "Amari Osei",
  ownerChain: [
    { name: "Royal Persian Collection", from: 1875, to: 1923 },
    { name: "Reza Foundation", from: 1923, to: null },
  ],
  notes: ["Catalogued in 1923 import records"],
  priority: 1,
};

const record6 = {
  id: 6,
  artifactId: 103,
  curatorId: 206,
  curatorName: "Elena Vasquez",
  ownerChain: [
    { name: "Reza Foundation", from: 1923, to: null },
  ],
  notes: ["Provenance prior to 1923 undocumented"],
  priority: 2,
};

provenanceRecords.push(record1, record2, record3, record4, record5, record6);

function formatPeriod(period) {
  return `${period.from}–${period.to || "present"}`;
}

function mergeProvenance(records) {
  const a = records[0];
  const b = records[1];
  return {
    artifactId: a.artifactId,
    submissions: [
      {
        recordId: a.id,
        curatorId: a.curatorId,
        curatorName: a.curatorName,
        priority: a.priority,
        ownerChain: structuredClone(a.ownerChain),
        notes: structuredClone(a.notes),
      },
      {
        recordId: b.id,
        curatorId: b.curatorId,
        curatorName: b.curatorName,
        priority: b.priority,
        ownerChain: structuredClone(b.ownerChain),
        notes: structuredClone(b.notes),
      },
    ],
    notes: [...a.notes, ...b.notes],
  };
}

function detectConflicts(merged) {
  const conflicts = [];
  const subA = merged.submissions[0];
  const subB = merged.submissions[1];
  const chainA = subA.ownerChain;
  const chainB = subB.ownerChain;

  if (chainA.length !== chainB.length) {
    conflicts.push({
      field: "ownerChain.length",
      explanation: `${subA.curatorName} provided ${chainA.length} entries; ${subB.curatorName} provided ${chainB.length} entries`,
    });
  }

  if (chainA[0] && chainB[0]) {
    const firstA = chainA[0];
    const firstB = chainB[0];
    if (
      firstA.name !== firstB.name ||
      firstA.from !== firstB.from ||
      firstA.to !== firstB.to
    ) {
      conflicts.push({
        field: "ownerChain[0]",
        explanation: `${subA.curatorName} recorded ${firstA.name} (${formatPeriod(firstA)}); ${subB.curatorName} recorded ${firstB.name} (${formatPeriod(firstB)})`,
      });
    }
  }

  if (chainA[1] && chainB[1]) {
    const secondA = chainA[1];
    const secondB = chainB[1];
    if (
      secondA.name !== secondB.name ||
      secondA.from !== secondB.from ||
      secondA.to !== secondB.to
    ) {
      conflicts.push({
        field: "ownerChain[1]",
        explanation: `${subA.curatorName} recorded ${secondA.name} (${formatPeriod(secondA)}); ${subB.curatorName} recorded ${secondB.name} (${formatPeriod(secondB)})`,
      });
    }
  }

  if (subA.notes.length !== subB.notes.length) {
    conflicts.push({
      field: "notes",
      explanation: `${subA.curatorName} provided ${subA.notes.length} note(s); ${subB.curatorName} provided ${subB.notes.length} note(s)`,
    });
  }

  return conflicts;
}

function applyPriorityRules(merged, conflicts) {
  const subA = merged.submissions[0];
  const subB = merged.submissions[1];

  const lead = subA.priority <= subB.priority ? subA : subB;

  return {
    ...structuredClone(merged),
    resolvedBy: lead.curatorName,
    ownerChain: structuredClone(lead.ownerChain),
    conflicts,
  };
}

const resolvedReports = {};

function renderAuditReport(artifactId) {
  if (!resolvedReports.hasOwnProperty(artifactId)) {
    return `No report found for artifact ${artifactId}`;
  }

  const report = resolvedReports[artifactId];
  const subA = report.submissions[0];
  const subB = report.submissions[1];

  return `## Artifact Provenance Report: ${artifactId}

**Resolved by:** ${report.resolvedBy}
**Submissions:** ${subA.curatorName} (priority ${subA.priority}), ${subB.curatorName} (priority ${subB.priority})
**Conflicts detected:** ${report.conflicts.length}

### Ownership Chain
\`\`\`json
${JSON.stringify(report.ownerChain, null, 2)}
\`\`\`

### Conflicts
\`\`\`json
${JSON.stringify(report.conflicts, null, 2)}
\`\`\`

### Notes
\`\`\`json
${JSON.stringify(report.notes, null, 2)}
\`\`\``;
}

console.log("ARTIFACT PROVENANCE RECONCILIATION");
console.log();

// curators disagree
console.log("Processing artifact 101...");
const ant001Submissions = provenanceRecords.slice(0, 2);
const merged1 = mergeProvenance(ant001Submissions);
const conflicts1 = detectConflicts(merged1);
const resolved1 = applyPriorityRules(merged1, conflicts1);
resolvedReports[resolved1.artifactId] = resolved1;
console.log(`Conflicts found: ${resolved1.conflicts.length}`);
console.log(`Resolved by: ${resolved1.resolvedBy}`);
console.log();

// curators agree
console.log("Processing artifact 102...");
const ant002Submissions = provenanceRecords.slice(2, 4);
const merged2 = mergeProvenance(ant002Submissions);
const conflicts2 = detectConflicts(merged2);
const resolved2 = applyPriorityRules(merged2, conflicts2);
resolvedReports[resolved2.artifactId] = resolved2;
console.log(`Conflicts found: ${resolved2.conflicts.length}`);
console.log(`Resolved by: ${resolved2.resolvedBy}`);
console.log();

// chains differ in length
console.log("Processing artifact 103...");
const ant003Submissions = provenanceRecords.slice(4, 6);
const merged3 = mergeProvenance(ant003Submissions);
const conflicts3 = detectConflicts(merged3);
const resolved3 = applyPriorityRules(merged3, conflicts3);
resolvedReports[resolved3.artifactId] = resolved3;
console.log(`Conflicts found: ${resolved3.conflicts.length}`);
console.log(`Resolved by: ${resolved3.resolvedBy}`);
console.log();

console.log(renderAuditReport(101));
console.log();
console.log(renderAuditReport(102));
console.log();
console.log(renderAuditReport(103));
