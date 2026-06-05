const provenanceRecords = [];

const record1 = {
  artifactId: 101,
  curatorName: "John Lennon",
  ownerChain: [
    { name: "Cairo Museum", from: 1923, to: 1965 },
    { name: "Meridian Art Trust", from: 2001, to: null },
  ],
  notes: ["Verified with 1923 acquisition documents"],
  priority: 1,
};

const record2 = {
  artifactId: 101,
  curatorName: "Paul McCartney",
  ownerChain: [{ name: "National Museum of Cairo", from: 1921, to: null }],
  notes: ["Cross-referenced with British Museum archives"],
  priority: 2,
};

const record3 = {
  artifactId: 102,
  curatorName: "George Harrison",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Documented in 1952 foundation records"],
  priority: 1,
};

const record4 = {
  artifactId: 102,
  curatorName: "Ringo Starr",
  ownerChain: [
    { name: "Ottoman Archive", from: 1890, to: 1952 },
    { name: "Kaplan Foundation", from: 1952, to: null },
  ],
  notes: ["Verified against Istanbul university thesis, 2003"],
  priority: 2,
};

provenanceRecords.push(record1, record2, record3, record4);

function formatPeriod(period) {
  return `${period.from}–${period.to || "present"}`;
}

function cloneSubmission(record) {
  return {
    curatorName: record.curatorName,
    priority: record.priority,
    ownerChain: structuredClone(record.ownerChain),
    notes: structuredClone(record.notes),
  };
}

function mergeProvenance(records) {
  const [a, b] = records;
  return {
    artifactId: a.artifactId,
    submissions: [cloneSubmission(a), cloneSubmission(b)],
    notes: [...a.notes, ...b.notes],
  };
}

function detectConflicts(merged) {
  const conflicts = [];
  const [a, b] = merged.submissions;

  if (a.ownerChain.length !== b.ownerChain.length) {
    conflicts.push({
      field: "ownerChain.length",
      explanation: `${a.curatorName} listed ${a.ownerChain.length} owners; ${b.curatorName} listed ${b.ownerChain.length}`,
    });
  }

  const currentA = a.ownerChain[a.ownerChain.length - 1];
  const currentB = b.ownerChain[b.ownerChain.length - 1];
  if (currentA.name !== currentB.name) {
    conflicts.push({
      field: "currentOwner",
      explanation: `${a.curatorName} ends at ${currentA.name}; ${b.curatorName} ends at ${currentB.name}`,
    });
  }

  return conflicts;
}

function applyPriorityRules(merged, conflicts) {
  const [a, b] = merged.submissions;

  const lead = a.priority <= b.priority ? a : b;

  return {
    ...structuredClone(merged),
    resolvedBy: lead.curatorName,
    ownerChain: structuredClone(lead.ownerChain),
    conflicts,
  };
}

const resolvedReports = {};

function renderAuditReport(artifactId) {
  const report = resolvedReports[artifactId];
  if (!report) {
    return `No report found for artifact ${artifactId}`;
  }

  const owners = report.ownerChain
    .map((period) => `- ${period.name} (${formatPeriod(period)})`)
    .join("\n");

  const conflicts = report.conflicts.length
    ? report.conflicts.map((c) => `- **${c.field}:** ${c.explanation}`).join("\n")
    : "- None";

  return `## Provenance Report: ${artifactId}

**Resolved by:** ${report.resolvedBy}
**Conflicts detected:** ${report.conflicts.length}

### Ownership Chain
${owners}

### Conflicts
${conflicts}`;
}

console.log("ARTIFACT PROVENANCE RECONCILIATION\n");

const merged1 = mergeProvenance(provenanceRecords.slice(0, 2));
const conflicts1 = detectConflicts(merged1);
const resolved1 = applyPriorityRules(merged1, conflicts1);
resolvedReports[resolved1.artifactId] = resolved1;

const merged2 = mergeProvenance(provenanceRecords.slice(2, 4));
const conflicts2 = detectConflicts(merged2);
const resolved2 = applyPriorityRules(merged2, conflicts2);
resolvedReports[resolved2.artifactId] = resolved2;

console.log(renderAuditReport(101));
console.log();
console.log(renderAuditReport(102));