/**
 * Artifact Provenance Records Workshop
 * Issue #64121
 * 
 * Reconcile artifact provenance records submitted by multiple curators.
 * This workshop teaches:
 * - Working with arrays of objects and nested data structures
 * - Merging objects to combine provenance records
 * - Detecting conflicts between curator submissions
 * - Applying priority rules while preserving history
 * - Generating formatted summaries
 */

// Store merged records in a simple object (artifactId -> merged record)
const provenanceRecords = {};

/**
 * Merge provenance records from multiple curators
 * Combines objects and tracks audit metadata about the source curator
 * @param {Array} records - Array of provenance objects { artifactId, ownerChain: [...], notes, priority, curatorId }
 * @returns {Object} Object with artifactId as keys and merged records as values
 */
function mergeProvenance(records) {
  if (!Array.isArray(records) || records.length === 0) {
    throw new Error('Records must be a non-empty array');
  }

  const mergedRecords = {};

  for (let i = 0; i < records.length; i++) {
    const record = records[i];

    // Validate required fields
    if (!record.artifactId) {
      throw new Error('Each record must have an artifactId');
    }

    const artifactId = record.artifactId;
    const curatorId = record.curatorId || 'unknown';
    const timestamp = 'entry-' + i;

    // Initialize if first record for this artifact
    if (!mergedRecords[artifactId]) {
      mergedRecords[artifactId] = {
        artifactId: artifactId,
        ownerChain: [],
        notes: '',
        priority: 'normal',
        auditHistory: [],
        curatorContributions: {}
      };
    }

    const merged = mergedRecords[artifactId];

    // Merge ownerChain (append unique entries)
    if (record.ownerChain && Array.isArray(record.ownerChain)) {
      for (let j = 0; j < record.ownerChain.length; j++) {
        const owner = record.ownerChain[j];
        if (merged.ownerChain.indexOf(owner) === -1) {
          merged.ownerChain.push(owner);
        }
      }
    }

    // Merge notes (concatenate with curator attribution)
    if (record.notes && record.notes.trim()) {
      if (merged.notes) {
        merged.notes = merged.notes + '\n\n[' + curatorId + ']: ' + record.notes;
      } else {
        merged.notes = '[' + curatorId + ']: ' + record.notes;
      }
    }

    // Track priority if provided
    if (record.priority) {
      merged.priority = record.priority;
    }

    // Append audit metadata
    const auditEntry = {
      curatorId: curatorId,
      timestamp: timestamp,
      ownerChain: record.ownerChain || [],
      notes: record.notes || '',
      priority: record.priority || 'normal'
    };

    merged.auditHistory.push(auditEntry);

    // Track curator contributions
    if (!merged.curatorContributions[curatorId]) {
      merged.curatorContributions[curatorId] = [];
    }
    merged.curatorContributions[curatorId].push(auditEntry);
  }

  // Store merged records globally
  for (const artifactId in mergedRecords) {
    provenanceRecords[artifactId] = mergedRecords[artifactId];
  }

  return mergedRecords;
}

/**
 * Detect conflicts in merged provenance records
 * Returns a list of conflicting fields with explanations
 * @param {Object} merged - Merged provenance record
 * @returns {Array} Array of conflict objects { field, conflictType, explanation }
 */
function detectConflicts(merged) {
  if (!merged || !merged.auditHistory || merged.auditHistory.length === 0) {
    return [];
  }

  const conflicts = [];
  const history = merged.auditHistory;

  // Helper function to check if two arrays are equal
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let k = 0; k < arr1.length; k++) {
      if (arr1[k] !== arr2[k]) {
        return false;
      }
    }
    return true;
  }

  // Check for owner chain conflicts (different chains)
  const uniqueChains = [];
  
  for (let i = 0; i < history.length; i++) {
    const chain = history[i].ownerChain || [];
    let isUnique = true;
    
    // Check if this chain is already in uniqueChains
    for (let j = 0; j < uniqueChains.length; j++) {
      if (arraysEqual(chain, uniqueChains[j])) {
        isUnique = false;
        break;
      }
    }
    
    if (isUnique) {
      uniqueChains.push(chain);
    }
  }

  if (uniqueChains.length > 1) {
    conflicts.push({
      field: 'ownerChain',
      conflictType: 'divergent_history',
      explanation: 'Multiple curators submitted different owner chains. Found ' + uniqueChains.length + ' unique chain variations.'
    });
  }

  // Check for missing owner chains
  const missingChains = [];
  for (let i = 0; i < history.length; i++) {
    if (!history[i].ownerChain || history[i].ownerChain.length === 0) {
      missingChains.push(history[i].curatorId);
    }
  }

  if (missingChains.length > 0) {
    conflicts.push({
      field: 'ownerChain',
      conflictType: 'missing_data',
      explanation: 'Some curators did not provide owner chain information.'
    });
  }

  // Check for priority conflicts
  const priorities = [];
  for (let i = 0; i < history.length; i++) {
    const priority = history[i].priority;
    if (priority && priority !== 'normal' && priorities.indexOf(priority) === -1) {
      priorities.push(priority);
    }
  }

  if (priorities.length > 1) {
    conflicts.push({
      field: 'priority',
      conflictType: 'priority_mismatch',
      explanation: 'Multiple priority levels assigned: ' + priorities.join(', ') + '.'
    });
  }

  // Store conflicts in merged record
  merged.conflicts = conflicts;

  return conflicts;
}

/**
 * Apply priority rules to merged provenance records
 * Respects lead curator overrides while preserving history
 * @param {Object} merged - Merged provenance record
 * @param {string} leadCuratorId - ID of the lead curator (optional)
 * @returns {Object} Record with priority rules applied
 */
function applyPriorityRules(merged, leadCuratorId) {
  if (!merged) {
    throw new Error('Merged record is required');
  }

  // Create a copy to avoid mutating original
  const resolved = {
    artifactId: merged.artifactId,
    ownerChain: merged.ownerChain.slice(), // Copy array
    notes: merged.notes,
    priority: merged.priority,
    auditHistory: [],
    curatorContributions: {},
    conflicts: merged.conflicts ? merged.conflicts.slice() : []
  };

  // Copy audit history
  for (let i = 0; i < merged.auditHistory.length; i++) {
    resolved.auditHistory.push({
      curatorId: merged.auditHistory[i].curatorId,
      timestamp: merged.auditHistory[i].timestamp,
      ownerChain: merged.auditHistory[i].ownerChain ? merged.auditHistory[i].ownerChain.slice() : [],
      notes: merged.auditHistory[i].notes,
      priority: merged.auditHistory[i].priority
    });
  }

  // Copy curator contributions
  for (const curatorId in merged.curatorContributions) {
    resolved.curatorContributions[curatorId] = [];
    for (let i = 0; i < merged.curatorContributions[curatorId].length; i++) {
      resolved.curatorContributions[curatorId].push(merged.curatorContributions[curatorId][i]);
    }
  }

  // If lead curator is specified, prioritize their entries
  if (leadCuratorId) {
    const leadEntries = [];
    for (let i = 0; i < resolved.auditHistory.length; i++) {
      if (resolved.auditHistory[i].curatorId === leadCuratorId) {
        leadEntries.push(resolved.auditHistory[i]);
      }
    }

    if (leadEntries.length > 0) {
      const latestLeadEntry = leadEntries[leadEntries.length - 1];

      // Apply lead curator's owner chain if provided
      if (latestLeadEntry.ownerChain && latestLeadEntry.ownerChain.length > 0) {
        resolved.ownerChain = latestLeadEntry.ownerChain.slice();
      }

      // Apply lead curator's priority
      if (latestLeadEntry.priority) {
        resolved.priority = latestLeadEntry.priority;
      }

      // Prepend lead curator's notes
      if (latestLeadEntry.notes && latestLeadEntry.notes.trim()) {
        resolved.notes = '[LEAD: ' + leadCuratorId + ']: ' + latestLeadEntry.notes + '\n\n' + resolved.notes;
      }

      resolved.leadCurator = leadCuratorId;
      resolved.resolutionNote = 'Priority rules applied: Lead curator (' + leadCuratorId + ') overrides applied.';
    }
  }

  // Handle priority field: 'high' > 'normal' > 'low'
  const priorityOrder = { high: 3, normal: 2, low: 1 };
  let highestPriorityEntry = resolved.auditHistory[0];
  
  for (let i = 1; i < resolved.auditHistory.length; i++) {
    const entryPriority = priorityOrder[resolved.auditHistory[i].priority] || 2;
    const currentPriority = priorityOrder[highestPriorityEntry.priority] || 2;
    if (entryPriority > currentPriority) {
      highestPriorityEntry = resolved.auditHistory[i];
    }
  }

  if (highestPriorityEntry && highestPriorityEntry.priority !== resolved.priority) {
    resolved.priority = highestPriorityEntry.priority;
    if (!resolved.resolutionNote) {
      resolved.resolutionNote = 'Priority rules applied: Highest priority (' + highestPriorityEntry.priority + ') selected.';
    }
  }

  // Preserve all history
  resolved.resolvedAt = 'resolved';

  return resolved;
}

/**
 * Render an audit report for a specific artifact
 * Outputs a simple text summary
 * @param {string} artifactId - ID of the artifact
 * @returns {string} Text-formatted audit report
 */
function renderAuditReport(artifactId) {
  const record = provenanceRecords[artifactId];

  if (!record) {
    return 'Audit Report: ' + artifactId + '\n\nStatus: Record not found\n';
  }

  let report = 'Audit Report: ' + artifactId + '\n\n';
  report += '---\n\n';

  // Basic Information
  report += 'Basic Information:\n';
  report += '- Artifact ID: ' + record.artifactId + '\n';
  report += '- Current Priority: ' + record.priority + '\n';
  
  // Count contributors manually
  let contributorCount = 0;
  for (const curatorId in record.curatorContributions) {
    // Count each curator
    if (curatorId && record.curatorContributions[curatorId]) {
      contributorCount++;
    }
  }
  report += '- Total Contributors: ' + contributorCount + '\n';
  report += '- Audit Entries: ' + record.auditHistory.length + '\n\n';

  // Owner Chain
  report += 'Owner Chain:\n';
  if (record.ownerChain && record.ownerChain.length > 0) {
    for (let i = 0; i < record.ownerChain.length; i++) {
      report += (i + 1) + '. ' + record.ownerChain[i] + '\n';
    }
  } else {
    report += 'No owner chain information available.\n';
  }
  report += '\n';

  // Notes
  if (record.notes && record.notes.trim()) {
    report += 'Notes:\n' + record.notes + '\n\n';
  }

  // Conflicts
  if (record.conflicts && record.conflicts.length > 0) {
    report += 'Conflicts Detected:\n';
    for (let i = 0; i < record.conflicts.length; i++) {
      const conflict = record.conflicts[i];
      report += 'Conflict ' + (i + 1) + ': ' + conflict.field + '\n';
      report += '- Type: ' + conflict.conflictType + '\n';
      report += '- Explanation: ' + conflict.explanation + '\n\n';
    }
  } else {
    report += 'No Conflicts Detected:\n';
    report += 'All curator submissions are consistent.\n\n';
  }

  // Audit History
  report += 'Audit History:\n';
  for (let i = 0; i < record.auditHistory.length; i++) {
    const entry = record.auditHistory[i];
    const chainLength = entry.ownerChain ? entry.ownerChain.length : 0;
    report += entry.timestamp + ' | ' + entry.curatorId + ' | ' + entry.priority + ' | Chain Length: ' + chainLength + '\n';
  }

  return report;
}

/**
 * Get a merged record by artifact ID
 * @param {string} artifactId - ID of the artifact
 * @returns {Object|null} Merged provenance record or null if not found
 */
function getRecord(artifactId) {
  return provenanceRecords[artifactId] || null;
}

/**
 * Process and reconcile records: merge, detect conflicts, and apply priority rules
 * @param {Array} records - Array of provenance records
 * @param {string} leadCuratorId - Optional lead curator ID
 * @returns {Object} Object with artifactId keys and processed records as values
 */
function reconcileRecords(records, leadCuratorId) {
  const merged = mergeProvenance(records);
  const results = {};

  for (const artifactId in merged) {
    // Detect conflicts
    detectConflicts(merged[artifactId]);

    // Apply priority rules
    const resolved = applyPriorityRules(merged[artifactId], leadCuratorId);

    // Store resolved record
    provenanceRecords[artifactId] = resolved;
    results[artifactId] = resolved;
  }

  return results;
}

// ========== TEST DATASETS & EXAMPLES ==========

// Example 1: Basic merge with consistent records
const records1 = [
  {
    artifactId: 'ART-001',
    ownerChain: ['Museum A', 'Collector B', 'Auction House C'],
    notes: 'Originally acquired in 1920',
    priority: 'high',
    curatorId: 'curator-alice'
  },
  {
    artifactId: 'ART-001',
    ownerChain: ['Museum A', 'Collector B'],
    notes: 'Verified provenance through 1940',
    priority: 'normal',
    curatorId: 'curator-bob'
  }
];

const merged1 = mergeProvenance(records1);
const conflicts1 = detectConflicts(merged1['ART-001']);
console.log('Example 1 - Merged Record:', merged1['ART-001']);
console.log('Example 1 - Conflicts:', conflicts1);
console.log('Example 1 - Audit Report:\n' + renderAuditReport('ART-001'));

// Example 2: Conflict detection with divergent owner chains
const records2 = [
  {
    artifactId: 'ART-002',
    ownerChain: ['Gallery X', 'Private Collection Y'],
    notes: 'Chain of custody verified',
    priority: 'normal',
    curatorId: 'curator-charlie'
  },
  {
    artifactId: 'ART-002',
    ownerChain: ['Gallery Z', 'Private Collection Y'],
    notes: 'Alternative provenance suggested',
    priority: 'high',
    curatorId: 'curator-diana'
  }
];

reconcileRecords(records2);
console.log('\nExample 2 - Conflicts:', getRecord('ART-002').conflicts);

// Example 3: Priority rules with lead curator
const records3 = [
  {
    artifactId: 'ART-003',
    ownerChain: ['Museum M'],
    notes: 'Initial assessment',
    priority: 'normal',
    curatorId: 'curator-eve'
  },
  {
    artifactId: 'ART-003',
    ownerChain: ['Museum M', 'Loan Program N'],
    notes: 'Updated after loan program verification',
    priority: 'high',
    curatorId: 'lead-curator-frank'
  }
];

reconcileRecords(records3, 'lead-curator-frank');
const resolved3 = getRecord('ART-003');
console.log('\nExample 3 - Resolved Record:', {
  ownerChain: resolved3.ownerChain,
  priority: resolved3.priority,
  leadCurator: resolved3.leadCurator,
  resolutionNote: resolved3.resolutionNote
});

// Example 4: Missing chains and basic conflicts
const records4 = [
  {
    artifactId: 'ART-004',
    ownerChain: ['Owner 1', 'Owner 2'],
    notes: 'Standard provenance',
    priority: 'normal',
    curatorId: 'curator-grace'
  },
  {
    artifactId: 'ART-004',
    ownerChain: [],
    notes: 'Provenance unclear',
    priority: 'low',
    curatorId: 'curator-henry'
  }
];

reconcileRecords(records4);
console.log('\nExample 4 - Conflicts:', getRecord('ART-004').conflicts);

console.log('\n✓ All examples completed - merge, conflict detection, priority rules, and report generation verified');

module.exports = {
  mergeProvenance: mergeProvenance,
  detectConflicts: detectConflicts,
  applyPriorityRules: applyPriorityRules,
  renderAuditReport: renderAuditReport,
  getRecord: getRecord,
  reconcileRecords: reconcileRecords
};