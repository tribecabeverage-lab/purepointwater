'use client';

import { useEffect } from 'react';
import { recordLeadSource } from '@/lib/lead-source';

/** Records where the visitor came from on their first page view. Renders nothing. */
export default function SourceTracker() {
  useEffect(() => { recordLeadSource(); }, []);
  return null;
}
