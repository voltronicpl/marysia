/* Marysia — Bosch Home Connect Lovelace card */
const MARYSIA_PROGRAMS = [
  {
    key: "dishcare_dishwasher_program_eco_50",
    label: "Eco 50°",
    aliases: ["eco50", "dishcare.dishwasher.program.eco50", "dishcare_dishwasher_program_eco_50"],
  },
  {
    key: "dishcare_dishwasher_program_auto_2",
    label: "Auto 45–65°",
    aliases: ["auto2", "auto4565", "dishcare.dishwasher.program.auto2", "dishcare_dishwasher_program_auto_2"],
  },
  {
    key: "dishcare_dishwasher_program_intensiv_70",
    label: "Intensywny 70°",
    aliases: ["intensiv70", "intensive70", "dishcare.dishwasher.program.intensiv70", "dishcare_dishwasher_program_intensiv_70"],
  },
  {
    key: "dishcare_dishwasher_program_quick_65",
    label: "Szybki 65°",
    aliases: ["quick65", "dishcare.dishwasher.program.quick65", "dishcare_dishwasher_program_quick_65"],
  },
  {
    key: "dishcare_dishwasher_program_night_wash",
    label: "Nocny",
    aliases: ["nightwash", "dishcare.dishwasher.program.nightwash", "dishcare_dishwasher_program_night_wash"],
  },
  {
    key: "dishcare_dishwasher_program_machine_care",
    label: "Czyszczenie zmywarki",
    aliases: ["machinecare", "dishcare.dishwasher.program.machinecare", "dishcare_dishwasher_program_machine_care"],
  },
  {
    key: "dishcare_dishwasher_program_pre_rinse",
    label: "Płukanie wstępne",
    aliases: ["prerinse", "prerinse", "dishcare.dishwasher.program.prerinse", "dishcare_dishwasher_program_pre_rinse"],
  },
];

const MARYSIA_DEFAULT_ENTITIES = {
  power: "switch.marysia_power",
  selected_program: "select.marysia_selected_program",
  active_program: "select.marysia_active_program",
  stop: "button.marysia_stop_program",
  door: "sensor.marysia_door",
  operation_state: "sensor.marysia_operation_state",
  progress: "sensor.marysia_program_progress",
  finish_time: "sensor.marysia_program_finish_time",
  remote_control: "binary_sensor.marysia_remote_control",
  remote_start: "binary_sensor.marysia_remote_start",
  connectivity: "binary_sensor.marysia_lacznosc",
  start_in_relative: "number.marysia_start_in_relative",
  eco_dry: "switch.all_marysia_eco_dry",
  half_load: "switch.marysia_half_load",
  hygiene: "switch.marysia_hygiene",
  vario_speed: "switch.marysia_vario_speed",
  child_lock: "switch.marysia_blokada_przed_dziecmi",
};

const MARYSIA_STYLES = `
  :host { display:block; color:var(--primary-text-color,#e8eef4); font-family:var(--paper-font-body1_-_font-family,Roboto,"Segoe UI",sans-serif); }
  * { box-sizing:border-box; }
  ha-card { overflow:hidden; border-radius:18px; background:var(--ha-card-background,var(--card-background-color,#111a24)); color:inherit; }
  .fascia { min-height:178px; display:grid; grid-template-columns:minmax(120px,.72fr) minmax(390px,2fr) minmax(260px,1.35fr) auto; align-items:center; gap:16px; padding:15px 20px; color:#edf2f6; background:repeating-linear-gradient(180deg,#ffffff05 0 1px,transparent 1px 4px),linear-gradient(110deg,#30373e,#171c21 47%,#2b3239); }
  .brand { min-width:0; }
  .logo { font-size:26px; letter-spacing:.15em; font-weight:500; }
  .logo b { color:#ed3843; font-weight:500; }
  .model { margin-top:8px; color:#b9c3cc; font-size:12px; }
  .online { display:flex; align-items:center; gap:7px; margin-top:12px; color:#a9d9e8; font-size:11px; }
  .online-dot { width:7px; height:7px; flex:0 0 auto; border-radius:50%; background:#53dda4; box-shadow:0 0 9px #53dda4a0; }
  .online.offline .online-dot { background:#ec6570; box-shadow:0 0 9px #ec657077; }
  .dial-area { position:relative; justify-self:center; width:min(100%,450px); height:180px; }
  .program-list { position:absolute; inset:0; }
  .program { position:absolute; display:grid; grid-template-columns:9px 1fr; align-items:center; gap:7px; width:142px; min-height:26px; padding:3px 4px; border:0; border-radius:5px; background:transparent; color:#b9c5d0; font:inherit; font-size:11px; text-align:left; cursor:pointer; }
  .program:hover { color:#fff; background:#ffffff0d; }
  .program:disabled { opacity:.38; cursor:not-allowed; }
  .program.p0 { left:50%; top:0; transform:translateX(-50%); }
  .program.p1 { right:0; top:25px; }
  .program.p2 { right:0; top:83px; }
  .program.p3 { right:0; bottom:8px; }
  .program.p4 { left:50%; bottom:8px; transform:translateX(-50%); }
  .program.p5 { left:0; bottom:8px; }
  .program.p6 { left:0; top:83px; }
  .led { width:6px; height:6px; border-radius:50%; background:#59636c; box-shadow:inset 0 0 3px #000; }
  .program[aria-pressed="true"] { color:#eafaff; }
  .program[aria-pressed="true"] .led { background:#5ed4f2; box-shadow:0 0 9px #5ed4f2,0 0 16px #5ed4f288; }
  .knob-zone { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }
  .knob { position:relative; display:block; width:116px; aspect-ratio:1; border:0; border-radius:50%; background:radial-gradient(circle at 34% 28%,#eef2f4 0,#bbc3c9 22%,#75808a 47%,#353d45 64%,#aeb7bf 69%,#515a63 75%,#242a30 100%); box-shadow:0 9px 22px #0009,inset 0 2px 6px #ffffffa0,inset 0 -6px 12px #0008; cursor:pointer; }
  .knob::before { content:""; position:absolute; inset:9px; border:1px solid #ffffff52; border-radius:50%; box-shadow:inset 0 0 0 1px #0003; }
  .pointer { position:absolute; top:9px; left:calc(50% - 2px); width:4px; height:17px; border-radius:3px; background:#f7fbff; box-shadow:0 0 8px #ffffffb0; transform-origin:2px 49px; transition:transform .35s ease; }
  .knob-core { position:absolute; inset:25px; display:grid; place-items:center; border-radius:50%; background:radial-gradient(circle at 35% 30%,#8c969f,#333b43 70%); color:#f6f9fc; box-shadow:inset 0 2px 8px #0009,0 1px 2px #ffffff80; text-align:center; }
  .knob-core span { max-width:68px; font-size:9px; line-height:1.25; text-shadow:0 1px 3px #000; }
  .dial-hint { position:absolute; left:50%; bottom:-1px; transform:translateX(-50%); color:#aebac4; font-size:10px; white-space:nowrap; }
  .screen { min-height:92px; display:grid; grid-template-columns:1fr auto; align-items:center; gap:11px; padding:10px 13px; border:1px solid #ffffff16; border-radius:11px; background:linear-gradient(145deg,#070a0c,#11171b); box-shadow:inset 0 2px 12px #000b; }
  .screen-icons { display:flex; flex-wrap:wrap; gap:10px; color:#aec9d7; font-size:10px; }
  .screen-time { margin-top:8px; color:#edf7fa; font-size:22px; letter-spacing:.12em; }
  .screen-note { color:#8d9ba7; font-size:10px; }
  .screen-meta { border-left:1px solid #ffffff24; padding-left:13px; color:#aebbc5; font-size:10px; line-height:1.65; }
  .screen-meta strong { color:#e7f2f6; font-size:11px; font-weight:500; }
  .connected { justify-self:end; align-self:start; color:#d2e1e9; font-size:11px; white-space:nowrap; }
  .main { display:grid; grid-template-columns:245px minmax(0,1fr); gap:14px; padding:12px; }
  .appliance { min-height:320px; position:relative; overflow:hidden; border:1px solid #ffffff12; border-radius:13px; padding:10px; background:linear-gradient(140deg,#242c34,#0b1016 70%); display:flex; align-items:end; justify-content:center; }
  .dishwasher { position:absolute; left:50%; top:12px; width:min(calc(100% - 28px),222px); height:auto; aspect-ratio:222 / 256; transform:translateX(-50%); overflow:visible; appearance:none; padding:0; border:2px solid #aeb7bb; border-radius:12px; background:linear-gradient(100deg,#747d82,#c4cacc 8%,#8b9499 14%,#aeb6b9 50%,#747d82 94%,#c4cacc); box-shadow:inset 0 0 0 2px #e4e8e969,inset 0 -8px 13px #272e325c,0 10px 20px #0008; }
  .machine-top { position:absolute; z-index:3; inset:0 0 auto; height:38px; border-radius:9px 9px 2px 2px; background:linear-gradient(#20272c,#11171c); }
  .machine-top::before { content:"BOSCH"; position:absolute; left:13px; top:14px; color:#e5e9ec; font-size:9px; letter-spacing:.14em; }
  .machine-top::after { content:""; position:absolute; right:13px; top:13px; width:37px; height:9px; border-radius:5px; background:#05080a; box-shadow:inset 0 1px 4px #000; }
  .cavity { position:absolute; top:37px; left:9px; right:9px; bottom:10px; overflow:hidden; border-radius:2px 2px 6px 6px; background:linear-gradient(#1a242b,#10171c 68%,#263139); box-shadow:inset 0 0 0 2px #090e12,inset 0 0 18px #000; }
  .cavity::before { content:""; position:absolute; top:11px; left:9%; right:9%; height:1px; background:#d5dde080; }
  .plate { position:absolute; z-index:1; top:38%; width:29px; height:40px; border:2px solid #d7e0e3; border-radius:40% 40% 48% 48%; background:linear-gradient(90deg,#8e9ba1,#cbd3d6 48%,#738189); box-shadow:0 0 4px #d8f3ff45; }
  .plate.p1 { left:25%; transform:rotate(90deg); }
  .plate.p2 { left:44%; top:34%; height:47px; }
  .plate.p3 { right:23%; transform:rotate(90deg); }
  .rack { position:absolute; left:8%; right:8%; top:54%; height:4px; background:#aab4b9; box-shadow:0 3px #69767e,0 7px #313c43; }
  .rack::before { content:""; position:absolute; left:8%; right:8%; top:-24px; height:26px; background:repeating-linear-gradient(90deg,transparent 0 14px,#7f8b91 15px 16px); }
  .spray-arm { position:absolute; left:50%; bottom:17%; width:78px; height:4px; transform:translateX(-50%); border-radius:4px; background:#aeb8bd; }
  .spray-arm::before { content:""; position:absolute; left:50%; top:-7px; width:9px; height:18px; transform:translateX(-50%); border-radius:5px; background:#bfc9ce; }
  .water { position:absolute; z-index:2; inset:0; opacity:0; pointer-events:none; }
  .water i { position:absolute; top:12%; width:3px; height:19px; border-radius:4px; background:linear-gradient(#c9f6ff,#46c8f1 65%,#c8f5ff); box-shadow:0 0 6px #60d8ffb0; }
  .water i::after { content:""; position:absolute; left:-1px; bottom:-5px; width:5px; height:7px; border-radius:50% 50% 60% 60%; background:#a7edff; box-shadow:0 0 5px #55d4ff; }
  .water i:nth-child(1) { left:22%; animation-delay:-.42s; }
  .water i:nth-child(2) { left:34%; animation-delay:-.13s; }
  .water i:nth-child(3) { left:47%; animation-delay:-.58s; }
  .water i:nth-child(4) { left:60%; animation-delay:-.29s; }
  .water i:nth-child(5) { left:73%; animation-delay:-.7s; }
  .water i:nth-child(6) { left:83%; animation-delay:-.08s; }
  .door { position:absolute; z-index:2; left:2px; right:2px; top:38px; bottom:2px; border:1px solid #e5ebed; border-radius:2px 2px 7px 7px; background:linear-gradient(160deg,#aab5bbef,#75828aee 50%,#d0d6d8f2); box-shadow:inset 0 0 0 4px #ffffff30,inset 0 -8px 10px #3b464c42,0 4px 8px #0007; transform-origin:50% 100%; transition:all .5s ease; }
  .door::before { content:""; position:absolute; top:5px; left:11%; right:11%; height:2px; background:#e1e8ebaa; }
  .door::after { content:""; position:absolute; left:11%; right:11%; bottom:11%; height:35%; border:1px solid #e1e8eb54; border-radius:46% 46% 5px 5px; background:linear-gradient(145deg,#38454d,#10171c); }
  .dishwasher[data-state="run"] .water { opacity:1; }
  .dishwasher[data-state="run"] .water i { animation:water-fall .72s linear infinite; }
  .dishwasher[data-state="run"] .door { background:linear-gradient(160deg,#aab5bb24,#75828a12 50%,#d0d6d824); box-shadow:inset 0 0 0 3px #ffffff18; }
  .dishwasher[data-state="run"] .door::after { display:none; }
  .dishwasher[data-state="open"] .door { top:38px; bottom:auto; height:42%; transform:perspective(350px) rotateX(-5deg); background:linear-gradient(160deg,#bdc7ccee,#87939add 52%,#d1d7d9ed); }
  .dishwasher[data-state="open"] .door::after { display:none; }
  .dishwasher[data-state="open"] .water { opacity:0; }
  @keyframes water-fall { 0% { transform:translateY(-7px); opacity:0; } 12% { opacity:1; } 82% { opacity:.95; } 100% { transform:translateY(125px); opacity:0; } }
  .machine-caption { position:relative; z-index:4; width:100%; padding:0 4px 1px; text-align:center; color:#edf2f7; }
  .machine-caption small { display:block; color:#9cabb7; font-size:11px; }
  .machine-caption strong { display:block; margin-top:4px; font-size:12px; font-weight:500; }
  .content { min-width:0; }
  .heading { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; padding:1px 3px 8px; }
  .kicker { color:var(--secondary-text-color,#9aabbb); font-size:11px; letter-spacing:.08em; }
  h2 { margin:3px 0 0; color:var(--primary-text-color,#e9eff5); font-size:20px; font-weight:500; }
  .status { display:flex; align-items:center; gap:8px; margin-top:7px; font-size:13px; }
  .status-dot { width:9px; height:9px; flex:0 0 auto; border-radius:50%; background:#53dda4; box-shadow:0 0 11px #53dda477; }
  .status-dot.washing { background:#5ed4f2; box-shadow:0 0 11px #5ed4f277; }
  .status-dot.problem { background:#ffb156; box-shadow:0 0 11px #ffb15677; }
  .model-tag { color:var(--secondary-text-color,#9aabbb); font-size:10px; white-space:nowrap; }
  .progress-row { display:flex; align-items:center; gap:12px; margin:1px 2px 9px; }
  .progress-track { height:8px; flex:1; overflow:hidden; border-radius:8px; background:var(--divider-color,#2a3744); }
  .progress-fill { height:100%; width:0; border-radius:inherit; background:#44c6e6; transition:width .3s ease; }
  .percent { min-width:35px; color:var(--primary-text-color,#e9eff5); font-size:12px; text-align:right; }
  .stats { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
  .stat { min-height:54px; display:flex; align-items:center; gap:9px; padding:8px 10px; border-radius:11px; background:var(--secondary-background-color,#192533); }
  .stat-icon { width:22px; flex:0 0 22px; color:#a6bac9; font-size:16px; text-align:center; }
  .stat small { display:block; color:var(--secondary-text-color,#9aabbb); font-size:10px; }
  .stat strong { display:block; margin-top:3px; color:var(--primary-text-color,#e9eff5); font-size:12px; font-weight:500; overflow-wrap:anywhere; }
  .actions { display:grid; grid-template-columns:1.05fr 1fr 1fr 1.3fr; gap:7px; margin-top:8px; }
  .action { min-height:47px; display:flex; align-items:center; justify-content:center; gap:8px; padding:7px 9px; border:0; border-radius:10px; background:var(--secondary-background-color,#192533); color:var(--primary-text-color,#e9eff5); font:inherit; font-size:12px; text-align:center; }
  button.action { cursor:pointer; }
  button.action:hover:not(:disabled) { filter:brightness(1.12); }
  .action.start { background:#147b9f; color:#fff; }
  .action.stop { color:#c2ccd4; }
  .action.remote { background:color-mix(in srgb,#38bfe0 15%,var(--secondary-background-color,#192533)); color:#b5e8f7; }
  .action:disabled { opacity:.48; cursor:not-allowed; }
  .error { min-height:0; margin-top:0; color:#ff958f; font-size:11px; }
  .error:not(:empty) { margin-top:8px; }
  .footer { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); margin-top:8px; padding-top:8px; border-top:1px solid var(--divider-color,#2a3744); }
  .foot-item { display:flex; align-items:center; gap:8px; min-width:0; padding:2px 9px; border-right:1px solid var(--divider-color,#2a3744); }
  .foot-item:last-child { border:0; }
  .foot-icon { flex:0 0 auto; color:#91a6b8; font-size:14px; }
  .foot-item small { display:block; color:var(--secondary-text-color,#9aabbb); font-size:10px; }
  .foot-item strong { display:block; margin-top:2px; color:var(--primary-text-color,#e9eff5); font-size:11px; font-weight:500; }
  @media (max-width:900px) {
    .fascia { grid-template-columns:minmax(125px,.6fr) minmax(350px,1.5fr); gap:12px; padding:14px; }
    .brand { grid-column:1; grid-row:1; }
    .dial-area { grid-column:2; grid-row:1 / span 2; width:100%; }
    .screen { grid-column:1 / -1; grid-row:3; }
    .connected { display:none; }
    .main { grid-template-columns:245px minmax(0,1fr); }
    .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .actions { grid-template-columns:repeat(2,minmax(0,1fr)); }
  }
  @media (max-width:620px) {
    .fascia { grid-template-columns:1fr; gap:8px; padding:14px; }
    .brand,.dial-area,.screen { grid-column:1; }
    .brand { grid-row:1; }
    .dial-area { grid-row:2; width:min(100%,450px); height:178px; }
    .screen { grid-row:3; grid-template-columns:1fr; }
    .screen-meta { display:none; }
    .main { grid-template-columns:1fr; padding:10px; }
    .appliance { min-height:320px; }
    .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .footer { grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px 0; }
    .foot-item:nth-child(2n) { border-right:0; }
  }
  @media (max-width:380px) {
    .program { width:122px; font-size:10px; }
    .program.p0,.program.p4 { width:142px; }
    .stats,.actions { grid-template-columns:1fr 1fr; }
    .stat { padding:7px; }
    .foot-item { padding:2px 5px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .pointer,.progress-fill,.door { transition:none; }
    .dishwasher[data-state="run"] .water i { animation:none; height:54px; opacity:.9; }
  }
`;

function marysiaNormalize(value) {
  return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

class MarysiaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._selectedKey = MARYSIA_PROGRAMS[0].key;
    this._error = "";
    this._busy = false;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Marysia: configuration must be an object");
    this._config = config;
    this._entities = { ...MARYSIA_DEFAULT_ENTITIES, ...(config.entities || {}) };
    this._programs = Array.isArray(config.programs) && config.programs.length
      ? config.programs.map((program) => ({
        key: program.option || program.key || program.label,
        label: program.label || program.option || program.key,
        aliases: [program.option, program.key, program.label].filter(Boolean),
      }))
      : MARYSIA_PROGRAMS;
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const selected = this._entity("selected_program");
    const selectedKey = this._matchProgram(selected?.state);
    if (selectedKey) this._selectedKey = selectedKey;
    this._render();
  }

  getCardSize() { return 8; }

  static getStubConfig() {
    return { name: "Marysia", model: "SMS4ENI06E" };
  }

  _entity(key) {
    const entityId = this._entities?.[key];
    if (!entityId || typeof entityId !== "string") return null;
    return this._hass?.states?.[entityId] || null;
  }

  _state(key) { return String(this._entity(key)?.state ?? "").toLowerCase(); }

  _matchProgram(value) {
    const normalized = marysiaNormalize(value);
    if (!normalized) return null;
    return this._programs?.find((program) =>
      [program.key, program.label, ...(program.aliases || [])].some((alias) => marysiaNormalize(alias) === normalized)
    )?.key || null;
  }

  _programFor(key) { return this._programs?.find((program) => program.key === key) || this._programs?.[0]; }

  _entityOption(entityKey, program) {
    const entity = this._entity(entityKey);
    const options = entity?.attributes?.options;
    if (!Array.isArray(options)) return null;
    const aliases = [program?.key, program?.label, ...(program?.aliases || [])]
      .map(marysiaNormalize).filter(Boolean);
    return options.find((option) => aliases.includes(marysiaNormalize(option))) || null;
  }

  _prettyState(key, state) {
    const maps = {
      operation_state: {
        inactive: "Nieaktywna", ready: "Gotowa", delayedstart: "Opóźniony start", run: "Zmywa",
        pause: "Wstrzymana", actionrequired: "Wymaga działania", finished: "Zakończona",
        error: "Błąd", aborting: "Zatrzymywanie",
      },
      door: { closed: "Zamknięte", locked: "Zablokowane", open: "Otwarte" },
    };
    if (maps[key]?.[state]) return maps[key][state];
    if (state === "on") return "Włączone";
    if (state === "off") return "Wyłączone";
    if (!state || state === "unknown" || state === "unavailable") return "—";
    return String(this._entity(key)?.state ?? "—");
  }

  _remainingTime() {
    const entity = this._entity("finish_time");
    if (!entity || ["unknown", "unavailable", ""].includes(String(entity.state).toLowerCase())) return "—";
    const raw = String(entity.state);
    const end = Date.parse(raw);
    if (Number.isFinite(end)) {
      const minutes = Math.max(0, Math.round((end - Date.now()) / 60000));
      return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`;
    }
    const numeric = Number(raw);
    const unit = entity.attributes?.unit_of_measurement || "";
    if (Number.isFinite(numeric)) return unit ? `${numeric} ${unit}` : raw;
    return raw;
  }

  _isAvailable(key) {
    const entity = this._entity(key);
    return Boolean(entity && !["unknown", "unavailable"].includes(String(entity.state).toLowerCase()));
  }

  _dishwasherState() {
    const door = this._state("door");
    const operation = this._state("operation_state");
    if (door === "open") return "open";
    if (operation === "run") return "run";
    return "ready";
  }

  _canStart() {
    return this._state("power") === "on"
      && this._state("door") === "closed"
      && this._state("remote_control") === "on"
      && this._state("remote_start") === "on"
      && this._state("operation_state") === "ready"
      && this._isAvailable("active_program")
      && Boolean(this._entityOption("active_program", this._programFor(this._selectedKey)));
  }

  _canStop() {
    return this._isAvailable("stop") && ["run", "pause", "delayedstart", "actionrequired"].includes(this._state("operation_state"));
  }

  async _call(domain, service, data) {
    if (!this._hass) return;
    this._busy = true;
    this._error = "";
    this._render();
    try {
      await this._hass.callService(domain, service, data);
    } catch (error) {
      this._error = error?.message || "Nie udało się wykonać polecenia.";
    } finally {
      this._busy = false;
      this._render();
    }
  }

  async _selectProgram(program) {
    this._selectedKey = program.key;
    this._error = "";
    this._render();
    const option = this._entityOption("selected_program", program);
    if (!option) {
      this._error = `Program „${program.label}” nie występuje na liście wybranych programów zmywarki.`;
      this._render();
      return;
    }
    await this._call("select", "select_option", { entity_id: this._entities.selected_program, option });
  }

  async _start() {
    if (!this._canStart()) return;
    const program = this._programFor(this._selectedKey);
    const option = this._entityOption("active_program", program);
    if (!option) {
      this._error = "Wybrany program nie jest dostępny do uruchomienia.";
      this._render();
      return;
    }
    await this._call("select", "select_option", { entity_id: this._entities.active_program, option });
  }

  _render() {
    if (!this._config || !this.shadowRoot) return;
    const program = this._programFor(this._selectedKey) || this._programs[0];
    const operation = this._state("operation_state");
    const door = this._state("door");
    const progressRaw = Number(this._entity("progress")?.state);
    const progress = Number.isFinite(progressRaw) && progressRaw >= 0 ? Math.min(100, progressRaw) : null;
    const powerOn = this._state("power") === "on";
    const remoteControl = this._state("remote_control");
    const remoteStart = this._state("remote_start");
    const connected = this._state("connectivity") === "on";
    const stateText = this._prettyState("operation_state", operation);
    const doorText = this._prettyState("door", door);
    const iconState = this._dishwasherState();
    const statusClass = operation === "run" ? "washing" : ["error", "actionrequired", "aborting"].includes(operation) ? "problem" : "";
    const statusLine = door === "open" ? "Drzwi otwarte · zmywarka zatrzymana" : stateText;
    const progressText = progress === null ? "—%" : `${Math.round(progress)}%`;
    const selectedDisplay = this._prettyState("selected_program", this._entity("selected_program")?.state) === "—"
      ? program?.label || "—" : program?.label || "—";
    const available = (key) => this._isAvailable(key) ? this._prettyState(key, this._state(key)) : "—";
    const programButtons = this._programs.map((item, index) => `
      <button class="program p${index % 7}" type="button" data-program="${index}" aria-pressed="${item.key === this._selectedKey}" ${this._entityOption("selected_program", item) ? "" : "disabled"}>
        <span class="led" aria-hidden="true"></span><span>${this._escape(item.label)}</span>
      </button>`).join("");

    this.shadowRoot.innerHTML = `
      <style>${MARYSIA_STYLES}</style>
      <ha-card>
        <header class="fascia">
          <div class="brand">
            <div class="logo"><b>B</b>OSCH</div>
            <div class="model">${this._escape(this._config.model || "SMS4ENI06E")}</div>
            <div class="online ${connected ? "" : "offline"}"><span class="online-dot"></span>Home Connect · ${connected ? "online" : "offline"}</div>
          </div>
          <div class="dial-area">
            <div class="program-list" aria-label="Programy zmywarki">${programButtons}</div>
            <div class="knob-zone"><button class="knob" id="knob" type="button" aria-label="Wybierz następny program"><span class="pointer" style="transform:rotate(${Math.max(0,this._programs.findIndex((item) => item.key === this._selectedKey)) * (360 / this._programs.length)}deg)"></span><span class="knob-core"><span>${this._escape(program?.label || "—")}</span></span></button></div>
            <div class="dial-hint">kliknij gałkę lub nazwę programu</div>
          </div>
          <div class="screen">
            <div><div class="screen-icons"><span>${connected ? "◉ Wi‑Fi" : "◌ offline"}</span><span>${door === "open" ? "▣ drzwi otwarte" : "▣ drzwi"}</span><span>${this._escape(stateText)}</span></div><div class="screen-time">${this._escape(this._remainingTime())}</div><div class="screen-note">pozostały czas programu</div></div>
            <div class="screen-meta">Wybrany program<br><strong>${this._escape(program?.label || "—")}</strong><br>Remote Start · ${remoteStart === "on" ? "gotowy" : "niedostępny"}</div>
          </div>
          <div class="connected">● ${connected ? "Połączona" : "Brak połączenia"}</div>
        </header>
        <main class="main">
          <section class="appliance" aria-label="Wizualizacja zmywarki">
            <button class="dishwasher" id="dishwasher" type="button" data-state="${iconState}" aria-label="Zmywarka ${this._escape(statusLine)}">
              <span class="machine-top"></span>
              <span class="cavity"><span class="plate p1"></span><span class="plate p2"></span><span class="plate p3"></span><span class="rack"></span><span class="spray-arm"></span><span class="water" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span></span>
              <span class="door"></span>
            </button>
            <div class="machine-caption"><small>Stan zmywarki</small><strong>${this._escape(statusLine)}</strong></div>
          </section>
          <section class="content">
            <div class="heading"><div><div class="kicker">HOME CONNECT</div><h2>${this._escape(this._config.name || "Marysia")}</h2><div class="status"><span class="status-dot ${statusClass}"></span><span>${this._escape(stateText)}</span></div></div><div class="model-tag">${this._escape(this._config.model || "SMS4ENI06E")}</div></div>
            <div class="progress-row"><div class="progress-track" role="progressbar" aria-label="Postęp programu" aria-valuenow="${progress ?? 0}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${progress ?? 0}%"></div></div><div class="percent">${progressText}</div></div>
            <div class="stats">
              ${this._stat("◈", "Wybrany program", selectedDisplay)}
              ${this._stat("⌁", "Stan", stateText)}
              ${this._stat("◷", "Pozostały czas", this._remainingTime())}
              ${this._stat("▣", "Drzwi", doorText)}
              ${this._stat("◉", "Zdalne sterowanie", available("remote_control"))}
              ${this._stat("●", "Zdalny start", available("remote_start"))}
            </div>
            <div class="actions">
              <button class="action" id="power" type="button" ${!this._isAvailable("power") || this._busy ? "disabled" : ""}><span>⏻</span><span>Zasilanie<br><strong>${powerOn ? "Włączone" : "Wyłączone"}</strong></span></button>
              <button class="action start" id="start" type="button" ${!this._canStart() || this._busy ? "disabled" : ""}><span>▶</span><strong>Start</strong></button>
              <button class="action stop" id="stop" type="button" ${!this._canStop() || this._busy ? "disabled" : ""}><span>■</span><strong>Stop</strong></button>
              <div class="action remote"><span>⌁</span><span>Zdalny start<br><strong>${remoteStart === "on" ? "Aktywny" : "Niedostępny"}</strong></span></div>
            </div>
            <div class="error" role="alert">${this._escape(this._error)}</div>
            <div class="footer">
              ${this._foot("◌", "Łączność", connected ? "Online" : "Offline")}
              ${this._foot("◷", "Opóźniony start", available("start_in_relative"))}
              ${this._foot("◉", "VarioSpeed+", available("vario_speed"))}
              ${this._foot("♧", "Blokada dziecięca", available("child_lock"))}
            </div>
          </section>
        </main>
      </ha-card>`;

    this.shadowRoot.querySelectorAll(".program").forEach((button) => button.addEventListener("click", () => {
      const item = this._programs[Number(button.dataset.program)];
      if (item) this._selectProgram(item);
    }));
    this.shadowRoot.querySelector("#knob")?.addEventListener("click", () => {
      const current = Math.max(0, this._programs.findIndex((item) => item.key === this._selectedKey));
      const next = this._programs[(current + 1) % this._programs.length];
      if (next) this._selectProgram(next);
    });
    this.shadowRoot.querySelector("#start")?.addEventListener("click", () => this._start());
    this.shadowRoot.querySelector("#stop")?.addEventListener("click", () => {
      if (this._entities.stop) this._call("button", "press", { entity_id: this._entities.stop });
    });
    this.shadowRoot.querySelector("#power")?.addEventListener("click", () => {
      if (this._entities.power) this._call("switch", "toggle", { entity_id: this._entities.power });
    });
  }

  _stat(icon, label, value) {
    return `<div class="stat"><span class="stat-icon" aria-hidden="true">${icon}</span><div><small>${this._escape(label)}</small><strong>${this._escape(value)}</strong></div></div>`;
  }

  _foot(icon, label, value) {
    return `<div class="foot-item"><span class="foot-icon" aria-hidden="true">${icon}</span><div><small>${this._escape(label)}</small><strong>${this._escape(value)}</strong></div></div>`;
  }

  _escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
}

if (!customElements.get("marysia-card")) customElements.define("marysia-card", MarysiaCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "marysia-card")) {
  window.customCards.push({
    type: "marysia-card",
    name: "Marysia — zmywarka Bosch",
    description: "Home Connect: programy, status i sterowanie zmywarką Bosch.",
    preview: true,
  });
}

