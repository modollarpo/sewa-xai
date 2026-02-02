import React from 'react';
import { theme } from 'ui/theme';

interface AuditEvent {
  timestamp: string;
  user: string;
  action: string;
  details?: string;
}

interface AuditTimelineProps {
  events: AuditEvent[];
}

const AuditTimeline: React.FC<AuditTimelineProps> = ({ events }) => (
  <div
    className="card p-4 shadow-md"
    style={{ border: `1.5px solid ${theme.colors.structure}`, borderRadius: theme.radii.card, boxShadow: theme.shadows.card }}
  >
    <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.structure }}>Audit Trail</h3>
    <ul className="space-y-2">
      {events.map((event, idx) => (
        <li key={idx} className="flex flex-col md:flex-row md:items-center gap-2 text-gray-700">
          <span className="font-mono text-xs text-gray-500">{event.timestamp}</span>
          <span className="font-semibold" style={{ color: theme.colors.primary }}>{event.user}</span>
          <span>{event.action}</span>
          {event.details && <span className="text-xs text-gray-400">{event.details}</span>}
        </li>
      ))}
    </ul>
  </div>
);

export default AuditTimeline;
