export interface CatalogItem {
  name: string;
  sku: string;
  note?: string;
}

export interface CatalogCategory {
  id: string;
  title: string;
  blurb: string;
  items: CatalogItem[];
}

export const catalog: CatalogCategory[] = [
  {
    id: 'coolers',
    title: 'Coolers & Dispensers',
    blurb:
      'Rental coolers are installed, serviced and sanitized by us. Bottom-load models keep the bottle out of sight and off your back.',
    items: [
      { name: 'Bottom-Load Cooler — Hot & Cold', sku: 'BOTTOMLOAD H/C COOLER', note: 'Rental' },
      { name: 'Top-Load Cooler — Hot & Cold', sku: 'TOPLOAD H/C COOLER', note: 'Rental' },
      { name: 'Top-Load Cooler — Cold Only', sku: 'TOPLOAD COLD COOLER', note: 'Rental' },
      { name: 'Ceramic Crock Water Dispenser', sku: 'CERAMIC CROCK' },
      { name: 'Manual Water Bottle Pump', sku: 'WATER PUMP' },
    ],
  },
  {
    id: 'premium-water',
    title: 'Premium & Sparkling Water',
    blurb:
      'Glass and imported bottled water for boardrooms, client-facing spaces and events. Still and sparkling across every major label.',
    items: [
      { name: 'Acqua Panna — Still, Glass — 250 mL / 24 Pack', sku: 'AP 250ML GL/24' },
      { name: 'Acqua Panna — Still, Glass — 750 mL / 12 Pack', sku: 'AP 750ML GL/12' },
      { name: 'Acqua Panna — Still, Glass — 1 L / 12 Pack', sku: 'AP 1L GL/12' },
      { name: 'San Pellegrino — Sparkling — 750 mL / 12 Pack', sku: 'SP 750ML/12' },
      { name: 'San Pellegrino — Sparkling — 1 L / 12 Pack', sku: 'SP 1L/12' },
      { name: 'Perrier — Sparkling — 16 oz / 24 Pack', sku: 'PERRIER 16/24' },
      { name: 'Evian — Still, Glass — 750 mL / 12 Pack', sku: 'EVIAN 750 GL/12' },
      { name: 'Evian — Still, Plastic — 1 L / 12 Pack', sku: 'EVIAN 1L PL/12' },
      { name: 'Mountain Valley — Still, Glass — 333 mL / 24 Pack', sku: 'MV STILL 333 GL/24' },
      { name: 'Mountain Valley — Still, Glass — 500 mL / 12 Pack', sku: 'MV STILL 500 GL/12' },
      { name: 'Mountain Valley — Still, Glass — 1 L / 12 Pack', sku: 'MV STILL 1L GL/12' },
      { name: 'Mountain Valley — Still, Plastic — 500 mL / 24 Pack', sku: 'MV STILL 500 PL/24' },
      { name: 'Mountain Valley — Sparkling, Glass — 333 mL / 24 Pack', sku: 'MV SPK 333 GL/24' },
      { name: 'Mountain Valley — Sparkling, Glass — 500 mL / 12 Pack', sku: 'MV SPK 500 GL/12' },
      { name: 'Mountain Valley — Sparkling, Glass — 1 L / 12 Pack', sku: 'MV SPK 1L GL/12' },
      { name: 'Saratoga — Still, Glass — 12 oz / 24 Pack', sku: 'SAR STILL 12oz GL/24' },
      { name: 'Saratoga — Still, Glass — 28 oz / 12 Pack', sku: 'SAR STILL 28oz GL/12' },
      { name: 'Saratoga — Sparkling, Glass — 12 oz / 24 Pack', sku: 'SAR SPK 12 GL/24' },
      { name: 'Saratoga — Sparkling, Glass — 28 oz / 12 Pack', sku: 'SAR SPK 28 GL/12' },
      { name: 'Icelandic — Still — 500 mL / 24 Pack', sku: 'ICELAND 500mL/24' },
      { name: 'Boxed Water — Still, Carton — 8.4 oz / 24 Pack', sku: 'BOX WTR 8oz/24' },
    ],
  },
  {
    id: 'case-water',
    title: 'Case & Gallon Water',
    blurb:
      'Everyday single-serve cases and gallon jugs for breakrooms, job sites and events. Private label available for branded cases.',
    items: [
      { name: 'Poland Spring — Still — 16.9 oz / 40 Pack', sku: 'PS 40PK' },
      { name: 'Poland Spring — Still — 8 oz / 48 Pack', sku: 'PS 48PK' },
      { name: 'Poland Spring — Sport Cap — 23.7 oz / 24 Pack', sku: 'PS SPORT 24PK' },
      { name: 'Deer Park — Still — 16.9 oz / 40 Pack', sku: 'DP 40PK' },
      { name: 'Deer Park — Still — 8 oz / 48 Pack', sku: 'DP 48PK' },
      { name: 'Zephyrhills — Still — 16.9 oz / 40 Pack', sku: 'ZEPH 40PK' },
      { name: 'Kirkland — Still — 16.9 oz / 40 Pack', sku: 'KIRKLAND 40PK' },
      { name: 'Kirkland — Still — 8 oz / 80 Pack', sku: 'KIRK 8OZ/80PK' },
      { name: 'Bottled Water — 8 oz / 48 Pack', sku: 'CASE WATER 8OZ/48' },
      { name: 'Spring Water — 1 Gallon / 6 Pack', sku: 'SPR 1G/6' },
      { name: 'Distilled Water — 1 Gallon / 6 Pack', sku: 'DIST 1G/6' },
      { name: 'Private Label Cases', sku: 'PRIVATE LABEL', note: 'Your branding on the bottle' },
    ],
  },
  {
    id: 'pallets',
    title: 'Pallet Quantities',
    blurb:
      'Full-pallet bulk water for large offices, distribution sites and event work. Delivered on standard routes.',
    items: [
      { name: 'Poland Spring — Pallet, 48 Cases — 16.9 oz / 40 Pack', sku: 'PALLET PS 40PKs' },
      { name: 'Poland Spring — Pallet, 60 Cases — 8 oz / 48 Pack', sku: 'PALLET PS 48PKs' },
      { name: 'Kirkland — Pallet, 48 Cases — 16.9 oz / 40 Pack', sku: 'PALLET KIRKLAND 40PKs' },
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee, Tea & Breakroom',
    blurb:
      'Fraction packs, tea, cocoa, creamers and sweeteners — restocked on the same delivery as your water, on one invoice.',
    items: [
      { name: 'Coffee — Premium Blend — Fraction Packs', sku: 'FRAC PREMIUM' },
      { name: 'Coffee — Breakfast Blend — Fraction Packs', sku: 'FRAC BREAKFAST' },
      { name: 'Coffee — Colombian — Fraction Packs', sku: 'FRAC COLOMBIAN' },
      { name: 'Coffee — Dark Roast — Fraction Packs', sku: 'FRAC DARK' },
      { name: 'Coffee — Decaffeinated — Fraction Packs', sku: 'FRAC DECAF' },
      { name: 'Folgers — Coffee — 1.5 oz / 42 Count', sku: 'FOLGERS 1.5/42' },
      { name: 'Lipton — Tea Bags — Regular — 100 Count', sku: 'LIPTON REG/100' },
      { name: 'Lipton — Tea Bags — Decaffeinated', sku: 'LIPTON DECAF' },
      { name: 'Green Tea Bags — 24 Count', sku: 'GREEN TEA/24' },
      { name: 'Lemon Tea Bags — 24 Count', sku: 'LEMON TEA/24' },
      { name: 'Constant Comment Tea Bags — 24 Count', sku: 'CONST TEA/24' },
      { name: 'Hot Chocolate — Regular — 50 Count', sku: 'COCOA REG/50' },
      { name: 'Mars — Hot Chocolate — 50 Count', sku: 'MARS COCOA/50' },
      { name: "Mini Moo's — Creamer — Original — 180 Count", sku: 'MM ORIG/180' },
      { name: "Mini Moo's — Creamer — French Vanilla — 180 Count", sku: 'MM FV/180' },
      { name: "Mini Moo's — Creamer — Hazelnut — 180 Count", sku: 'MM HAZ/180' },
      { name: 'Non-Dairy Creamer — 11 oz / 12 Pack', sku: 'NDC 11OZ/12' },
      { name: 'Splenda — Sweetener Packets — 1,000 Count', sku: 'SPLENDA/1K' },
      { name: 'Splenda — Sweetener Packets — 2,000 Count', sku: 'SPLENDA/2K' },
      { name: 'Sugar Packets — 2,000 per Case', sku: 'SUGAR PKT/2K' },
      { name: 'Sugar Canister — 20 oz', sku: 'SUGAR 20OZ EA' },
      { name: 'Sugar Canister — 20 oz / 24 Pack', sku: 'SUGAR 20OZ/24' },
    ],
  },
  {
    id: 'kitchen',
    title: 'Cups, Kitchen & Janitorial',
    blurb:
      'Cups, cutlery, plates, condiments and paper goods. If it belongs in the breakroom, it can ride along on your delivery.',
    items: [
      { name: 'Water Cups — 7 oz / 2,500 per Case', sku: 'WTR CUP 7OZ/2.5K' },
      { name: 'Water Cups — 9 oz / 2,500 per Case', sku: 'WTR CUP 9OZ/2.5K' },
      { name: 'Water Cups — 12 oz / 1,000 per Case', sku: 'WTR CUP 12OZ/1K' },
      { name: 'Cone Water Cups — 100 per Sleeve', sku: 'CONE CUP SLEEVE' },
      { name: 'Hot Cups — 12 oz / 1,000 per Box', sku: 'HOT CUP 12OZ/1K' },
      { name: 'Hot Cups — Paper — 8 oz / 50 Count', sku: 'HOT CUP SLEEVE' },
      { name: 'Cold Cups — Plastic — 8 oz / 100 Count', sku: 'COLD CUP SLEEVE' },
      { name: 'Cup Lids — 12 oz / 1,000 per Box', sku: 'LID 12OZ/1K' },
      { name: 'Heavy-Duty Forks — 1,000 per Box', sku: 'HD FORK/1K' },
      { name: 'Heavy-Duty Knives — 1,000 per Box', sku: 'HD KNIFE/1K' },
      { name: 'Heavy-Duty Spoons — 1,000 per Box', sku: 'HD SPOON/1K' },
      { name: 'China Firm Plates — 500 per Case', sku: 'CF PLATE/500' },
      { name: 'Lightweight Plates — 100 Count', sku: 'LW PLATE/100' },
      { name: 'Lightweight Plates — 1,000 per Case', sku: 'LW PLATE/1K' },
      { name: 'Ketchup Packets', sku: 'KETCHUP' },
      { name: 'Mustard Packets', sku: 'MUSTARD' },
      { name: 'Mayonnaise Packets', sku: 'MAYO' },
      { name: 'Salt Packets', sku: 'SALT' },
      { name: 'Pepper Packets', sku: 'PEPPER' },
      { name: 'Paper Towels — 30 Rolls per Case', sku: 'PAPER TOWEL/30' },
      { name: 'Toilet Tissue — 2-Ply — 96 Rolls per Case', sku: 'TISSUE 2PLY/96' },
    ],
  },
  {
    id: 'services',
    title: 'Installation & Service',
    blurb:
      'Scheduled alongside your regular delivery — no separate visit to arrange.',
    items: [
      { name: 'Point-of-Use Cooler Installation', sku: 'POU INSTALL' },
      { name: 'Cooler Cleaning & Sanitization', sku: 'COOLER CLEAN' },
    ],
  },
];

export const catalogItemCount = catalog.reduce((n, c) => n + c.items.length, 0);
