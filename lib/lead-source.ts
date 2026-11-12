// Where a visitor came from, recorded on their first page view and sent with
// the lead and contact forms. Same format as tribecabeverage.com's tb_srcd:
//   "source|campaign|ad group|ad|keyword|landing path|date|match type"
// A paid click or a tagged (utm) link always replaces what was stored; a
// search, AI assistant or referral visit replaces a stored "direct"; otherwise
// the first touch is kept. Stored in localStorage, so nothing is set as a cookie.

const KEY = 'pp_srcd';

const AI = /(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$|^(chatgpt|openai|perplexity|claude|gemini|copilot)$/;
const NOISE = /(^|\.)(stripe\.com|paypal\.com|squareup\.com|accounts\.google\.com)$/;
const MATCH: Record<string, string> = { e: 'exact', p: 'phrase', b: 'broad' };

function clip(v: string | null): string {
  return (v || '').replace(/\|/g, ' ').slice(0, 100);
}

function read(): string {
  try { return localStorage.getItem(KEY) || ''; } catch { return ''; }
}

export function recordLeadSource(): void {
  if (typeof window === 'undefined') return;
  try {
    const q = new URLSearchParams(location.search);
    let ref = '';
    try { ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch { ref = ''; }
    if (ref === location.hostname.replace(/^www\./, '')) ref = '';

    const paid = q.get('gclid') || q.get('gbraid') || q.get('wbraid') ? 'google_ads'
      : q.get('msclkid') ? 'microsoft_ads'
      : q.get('fbclid') && q.get('utm_source') ? 'meta' : '';
    const utm = q.get('utm_source') || '';
    const cur = read();
    const curSrc = cur.split('|')[0];

    let src = '';
    if (paid) src = paid;
    else if (utm) src = AI.test(utm) ? 'ai_assistant:' + utm : utm;
    else if (!cur || curSrc === 'direct') {
      src = AI.test(ref) ? 'ai_assistant:' + ref
        : /(^|\.)(google|bing|yahoo|duckduckgo)\./.test(ref) ? 'organic_search'
        : /(^|\.)(facebook|instagram)\.com$/.test(ref) ? 'meta_organic'
        : ref && !NOISE.test(ref) ? 'referral:' + ref
        : 'direct';
      if (cur && src === 'direct') return;
    } else return;

    const det = [
      src,
      clip(q.get('tb_camp') || q.get('gad_campaignid') || q.get('utm_campaign')),
      clip(q.get('tb_grp') || q.get('utm_term')),
      clip(q.get('tb_ad') || q.get('utm_content')),
      clip(q.get('tb_kw')),
      clip(location.pathname),
      new Date().toISOString().slice(0, 10),
      clip(MATCH[q.get('tb_mt') || ''] || q.get('tb_mt')),
    ].join('|');
    localStorage.setItem(KEY, det);
  } catch { /* tracking must never break the page */ }
}

function device(): string {
  const ua = navigator.userAgent || '';
  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(ua)) return 'Tablet';
  if (/Mobi|iPhone|Android/i.test(ua)) return 'Phone';
  return 'Computer';
}

/** Extra fields appended to a form submission. Empty values are left out. */
export function leadContext(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const out: Record<string, string> = {};
  const s = read();
  if (s) out.leadSource = s;
  out.submittedFrom = location.href.split('#')[0].slice(0, 300);
  out.device = device();
  return out;
}
