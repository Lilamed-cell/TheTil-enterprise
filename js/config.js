'use strict';

const CONFIG = Object.freeze({
  VERSION: '2.0.3',
  APP_NAME: 'TheTil Enterprise',

  KEYS: {
    DATA:       'tilly_data_v2',
    INTEGRITY:  'tilly_integrity_v2',
    PW_HASH:    'tilly_pwhash_v2',
    PW_SALT:    'tilly_pwsalt_v2',
    SESSION:    'tilly_session_v2',
    RATELIMIT:  'tilly_ratelimit_v2',
    ACTIVITY:   'tilly_activity_v2',
    CART:       'tilly_cart_v2'
  },

  SECURITY: {
    PBKDF2_ITERATIONS:  310000,
    PBKDF2_HASH:        'SHA-256',
    SALT_BYTES:         16,
    SESSION_BYTES:      32,
    SESSION_TIMEOUT:    30 * 60 * 1000,
    SESSION_WARN:       2  * 60 * 1000,
    MAX_ATTEMPTS:       5,
    ATTEMPT_WINDOW:     15 * 60 * 1000,
    LOCKOUT_DURATION:   30 * 60 * 1000,
    MIN_PW_LENGTH:      10,
    INTEGRITY_SECRET:   'tilly-enterprise-v1-integrity'
  },

  LIMITS: {
    NAME:    120,
    CAT:     40,
    SPECS:   160,
    DESC:    1200,
    TAG:     20,
    URL:     500,
    TEXTAREA:300
  },

  IMAGE: {
    MAX_DIMENSION:  900,
    HERO_DIMENSION: 1600,
    JPEG_QUALITY:   0.78,
    HERO_QUALITY:   0.75,
    MAX_FILE_MB:    8
  },

  DEFAULTS: {
    settings: {
      storeName: 'TheTil Enterprise',
      currency:  'GH₵',
      whatsapp:  '233241656484',
      footName:  'TheTil Enterprise Ghana Ltd.',
      paystackLink: 'https://paystack.shop/pay/YOUR-LINK-HERE',
      topbar:    '🚚 Free delivery around Kumasi - orders over GH₵ 20,000  •   ☎️ +233 24 165 6484 ☎️ +233 20 717 0077',
      heroTitle: 'TheTil Enterprise: Power your home. Upgrade your life.',
      heroText:  'Genuine fridges, TVs, Phones, Washing Machines, Ovens and complete Solar Systems — with warranty, nationwide delivery and installation across Ghana.',
      heroBackground: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1600&q=80'
    },
    products: [
      /* ============================================================
         REFRIGERATORS (1–10)
         ============================================================ */
       { id:1, name:'Samsung 2-Door Refrigerator 300L', cat:'Refrigerators', price:3200, old:6000, thumb:'https://i.postimg.cc/c4LbZFXQ/pic-fridge.png', specs:'Frost-free • Inverter • Silver • 300L', desc:'A spacious two-door refrigerator with Samsung\'s Digital Inverter Compressor that runs quieter and uses up to 50% less energy. Frost-free design means no manual defrosting ever.', tag:'Promotion' },
      { id:2, name:'LG Inverter Fridge 250L', cat:'Refrigerators', price:5400, old:null, thumb:'https://i.postimg.cc/43xMPZSH/43DSTV-43-Digital-Satellite-Television.jpg', specs:'Smart inverter • 10-year compressor warranty', desc:'LG\'s Smart Inverter technology adjusts cooling based on usage, saving energy during low-demand hours. Comes with a 10-year warranty on the compressor.', tag:'' },
      { id:3, name:'Hisense Chest Freezer 200L', cat:'Refrigerators', price:3950, old:4300, thumb:'https://picsum.photos/seed/fridge3/900/600', specs:'Fast freeze • Lock & key • 200L', desc:'Perfect for shops, restaurants and large families. Fast-freeze function locks in freshness, built-in lock keeps contents safe. Low power consumption.', tag:'' },
      { id:4, name:'Midea Single Door Fridge 150L', cat:'Refrigerators', price:2650, old:2900, thumb:'https://picsum.photos/seed/fridge4/900/600', specs:'Single door • 150L • Low energy', desc:'Compact single-door fridge ideal for single users, offices or small kitchens. Runs efficiently on inverter power and fits in any space.', tag:'' },
      { id:5, name:'Samsung Side-by-Side 500L', cat:'Refrigerators', price:15500, old:16900, thumb:'https://picsum.photos/seed/fridge5/900/600', specs:'Side-by-side • Ice maker • 500L', desc:'Premium side-by-side refrigerator with built-in ice and water dispenser. Twin Cooling Plus keeps food fresher for longer.', tag:'Premium' },
      { id:6, name:'LG Top Freezer 350L', cat:'Refrigerators', price:7300, old:null, thumb:'https://picsum.photos/seed/fridge6/900/600', specs:'Top freezer • 350L • Smart diagnosis', desc:'Reliable top-freezer fridge with LG\'s Smart Diagnosis feature that helps troubleshoot issues via your phone.', tag:'' },
      { id:7, name:'Hisense Double Door 220L', cat:'Refrigerators', price:4200, old:null, thumb:'https://picsum.photos/seed/fridge7/900/600', specs:'Double door • 220L • Frost free', desc:'Compact double-door refrigerator ideal for small families. Frost-free design means no ice buildup and no manual defrosting.', tag:'' },
      { id:8, name:'Scanfrost Chest Freezer 300L', cat:'Refrigerators', price:5100, old:5500, thumb:'https://picsum.photos/seed/fridge8/900/600', specs:'Chest freezer • 300L • Fast freeze', desc:'Large-capacity chest freezer perfect for shops and bulk storage. Runs quietly and efficiently on low power.', tag:'' },
      { id:9, name:'Bosch Serie 4 Fridge 320L', cat:'Refrigerators', price:8900, old:null, thumb:'https://picsum.photos/seed/fridge9/900/600', specs:'NoFrost • A++ energy • 320L', desc:'German-engineered Bosch fridge with NoFrost technology and A++ energy rating for maximum efficiency and zero manual defrosting.', tag:'' },
      { id:10, name:'Panasonic Inverter Fridge 400L', cat:'Refrigerators', price:9800, old:10500, thumb:'https://picsum.photos/seed/fridge10/900/600', specs:'Inverter • 400L • Anti-bacterial', desc:'Panasonic\'s Inverter fridge with an anti-bacterial liner that keeps food fresh and safe for longer. Perfect for large families.', tag:'' },
      { id:11, name:'Haier Thermocool Fridge 180L', cat:'Refrigerators', price:3100, old:null, thumb:'https://picsum.photos/seed/fridge11/900/600', specs:'180L • Low voltage • Genuine lock', desc:'Built to handle Ghanaian power fluctuations. Runs well on low voltage and comes with a genuine lock for security.', tag:'' },
      { id:12, name:'Samsung French Door 550L', cat:'Refrigerators', price:18900, old:null, thumb:'https://picsum.photos/seed/fridge12/900/600', specs:'French door • 550L • Dual ice maker', desc:'Luxury French-door refrigerator with dual ice maker, Twin Cooling, and a flexible zone for customized cooling.', tag:'Luxury' },
      { id:13, name:'LG Door-in-Door 600L', cat:'Refrigerators', price:22500, old:24000, thumb:'https://picsum.photos/seed/fridge13/900/600', specs:'Door-in-Door • 600L • InstaView', desc:'Premium Door-in-Door design lets you grab favorites without opening the main door. InstaView panel lights up with a knock.', tag:'Premium' },
      { id:14, name:'Hisense Side-by-Side 450L', cat:'Refrigerators', price:12500, old:null, thumb:'https://picsum.photos/seed/fridge14/900/600', specs:'Side-by-side • 450L • Water dispenser', desc:'Spacious side-by-side with water dispenser and multi-air-flow cooling for even temperature throughout.', tag:'' },
      { id:15, name:'Midea Chest Freezer 400L', cat:'Refrigerators', price:6400, old:6900, thumb:'https://picsum.photos/seed/fridge15/900/600', specs:'Chest freezer • 400L • 2 baskets', desc:'Extra-large chest freezer with two removable baskets for easy organization. Ideal for shops and restaurants.', tag:'' },
      { id:16, name:'Sharp 2-Door Fridge 250L', cat:'Refrigerators', price:4900, old:null, thumb:'https://picsum.photos/seed/fridge16/900/600', specs:'2-door • 250L • Plasma cluster', desc:'Sharp\'s Plasma Cluster technology deodorizes and preserves food freshness. Reliable workhorse for any home.', tag:'' },
      { id:17, name:'LG Mini Bar Fridge 90L', cat:'Refrigerators', price:1650, old:null, thumb:'https://picsum.photos/seed/fridge17/900/600', specs:'Mini bar • 90L • Compact', desc:'Small but efficient mini fridge — perfect for offices, hotel rooms, or dorm rooms.', tag:'' },
      { id:18, name:'Samsung Bottom Freezer 380L', cat:'Refrigerators', price:8500, old:null, thumb:'https://picsum.photos/seed/fridge18/900/600', specs:'Bottom freezer • 380L • Digital inverter', desc:'Ergonomic bottom-freezer design puts your fresh food at eye level. Digital Inverter compressor runs quiet and efficient.', tag:'' },
      { id:19, name:'Hisense Chest Freezer 500L', cat:'Refrigerators', price:7800, old:8500, thumb:'https://picsum.photos/seed/fridge19/900/600', specs:'Chest freezer • 500L • Commercial grade', desc:'Commercial-grade chest freezer for heavy-duty use. Keeps food frozen for up to 48 hours during power outages.', tag:'' },
      { id:20, name:'Bosch Built-in Fridge 290L', cat:'Refrigerators', price:11200, old:null, thumb:'https://picsum.photos/seed/fridge20/900/600', specs:'Built-in • 290L • NoFrost', desc:'Built-in refrigerator that fits seamlessly into your kitchen cabinets. NoFrost and VitaFresh keep food fresh.', tag:'Premium' },

      /* ============================================================
         SOLAR & POWER (131–150)
         ============================================================ */
      { id:131, name:'3.5KVA Hybrid Solar Inverter + 4 Panels', cat:'Solar', price:12500, old:null, thumb:'https://picsum.photos/seed/solar131/900/600', specs:'24V • MPPT • 4× panels included', desc:'Complete solar solution for Ghanaian homes. Runs fridge, TV, lights, fans. Includes 4 monocrystalline panels.', tag:'Complete Kit' },
      { id:132, name:'5KVA Hybrid Solar Inverter', cat:'Solar', price:9800, old:null, thumb:'https://picsum.photos/seed/solar132/900/600', specs:'48V • Pure sine wave • MPPT', desc:'Powerful 5KVA inverter for larger homes. Runs AC, fridge, freezer, and more.', tag:'Hot' },
      { id:133, name:'2KVA Pure Sine Wave Inverter', cat:'Solar', price:3400, old:3800, thumb:'https://picsum.photos/seed/solar133/900/600', specs:'2KVA • Pure sine wave • LCD', desc:'Pure sine wave output for safe operation of sensitive electronics. LCD status display.', tag:'' },
      { id:134, name:'1.5KVA Inverter + 2 Panels', cat:'Solar', price:6500, old:null, thumb:'https://picsum.photos/seed/solar134/900/600', specs:'1.5KVA • 2× panels • Battery ready', desc:'Entry-level solar kit. Perfect for powering lights, fans, TV, and charging devices.', tag:'' },
      { id:135, name:'200W Monocrystalline Solar Panel', cat:'Solar', price:950, old:null, thumb:'https://picsum.photos/seed/solar135/900/600', specs:'200W • Monocrystalline • 25-yr warranty', desc:'High-efficiency monocrystalline panel. 25-year output warranty. Works with any 12V/24V system.', tag:'' },
      { id:136, name:'300W Monocrystalline Panel', cat:'Solar', price:1350, old:null, thumb:'https://picsum.photos/seed/solar136/900/600', specs:'300W • High efficiency • 25-yr', desc:'Larger 300W panel generates more power from the same sunlight. Ideal for bigger systems.', tag:'' },
      { id:137, name:'450W Monocrystalline Panel', cat:'Solar', price:1850, old:null, thumb:'https://picsum.photos/seed/solar137/900/600', specs:'450W • Half-cut cells • 25-yr', desc:'Premium 450W panel with half-cut cell technology for better shade tolerance.', tag:'' },
      { id:138, name:'200Ah Deep Cycle Battery', cat:'Solar', price:2450, old:null, thumb:'https://picsum.photos/seed/solar138/900/600', specs:'200Ah • Deep cycle • Maintenance-free', desc:'Heavy-duty battery for solar storage. Maintenance-free and long-lasting.', tag:'' },
      { id:139, name:'150Ah Gel Battery', cat:'Solar', price:1850, old:null, thumb:'https://picsum.photos/seed/solar139/900/600', specs:'150Ah • Gel • Deep cycle', desc:'Gel technology for longer life and better performance in hot climates.', tag:'' },
      { id:140, name:'100Ah Lithium Battery', cat:'Solar', price:4200, old:null, thumb:'https://picsum.photos/seed/solar140/900/600', specs:'100Ah • LiFePO4 • 4000 cycles', desc:'Modern lithium battery with 4000+ charge cycles. Lighter, longer-lasting, better value.', tag:'Premium' },
      { id:141, name:'60A MPPT Solar Charge Controller', cat:'Solar', price:850, old:null, thumb:'https://picsum.photos/seed/solar141/900/600', specs:'60A • MPPT • LCD display', desc:'Maximum Power Point Tracking controller extracts up to 30% more power from your panels.', tag:'' },
      { id:142, name:'40A MPPT Charge Controller', cat:'Solar', price:520, old:null, thumb:'https://picsum.photos/seed/solar142/900/600', specs:'40A • MPPT • Auto 12/24V', desc:'Compact 40A MPPT controller. Auto-detects 12V or 24V battery systems.', tag:'' },
      { id:143, name:'Solar Street Light 100W', cat:'Solar', price:650, old:null, thumb:'https://picsum.photos/seed/solar143/900/600', specs:'100W • Motion sensor • Remote', desc:'All-in-one solar street light with motion sensor and remote control.', tag:'' },
      { id:144, name:'Solar Flood Light 200W', cat:'Solar', price:980, old:null, thumb:'https://picsum.photos/seed/solar144/900/600', specs:'200W • IP67 • Remote control', desc:'Powerful solar flood light for compounds and large yards. IP67 waterproof.', tag:'' },
      { id:145, name:'Solar Home Kit 300W', cat:'Solar', price:2200, old:null, thumb:'https://picsum.photos/seed/solar145/900/600', specs:'300W • 3 lights + TV + fan', desc:'Complete home kit with panel, battery, 3 LED lights, TV, and fan.', tag:'' },
      { id:146, name:'Portable Solar Generator 500Wh', cat:'Solar', price:3200, old:null, thumb:'https://picsum.photos/seed/solar146/900/600', specs:'500Wh • 500W output • Solar ready', desc:'Portable power station with 500Wh capacity. Charge from wall or solar panel.', tag:'' },
      { id:147, name:'Portable Solar Generator 1000Wh', cat:'Solar', price:5900, old:null, thumb:'https://picsum.photos/seed/solar147/900/600', specs:'1000Wh • 1000W output • UPS mode', desc:'Larger portable power station for camping, outages, and outdoor events.', tag:'' },
      { id:148, name:'Solar Water Pump 1HP', cat:'Solar', price:4500, old:null, thumb:'https://picsum.photos/seed/solar148/900/600', specs:'1HP • Submersible • Solar powered', desc:'Solar-powered water pump for farms and gardens. No electricity needed.', tag:'' },
      { id:149, name:'6KVA Hybrid Inverter', cat:'Solar', price:13500, old:null, thumb:'https://picsum.photos/seed/solar149/900/600', specs:'48V • 6KVA • Dual MPPT', desc:'Large 6KVA hybrid inverter for whole-home backup. Runs AC and all appliances.', tag:'Premium' },
      { id:150, name:'10KVA Three-Phase Inverter', cat:'Solar', price:24500, old:null, thumb:'https://picsum.photos/seed/solar150/900/600', specs:'10KVA • Three-phase • Commercial', desc:'Commercial-grade three-phase inverter for businesses and large properties.', tag:'Luxury' },
    ]
  }
});