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
  door_ajar: null,
  half_load: "switch.marysia_half_load",
  hygiene: "switch.marysia_hygiene",
  vario_speed: "switch.marysia_vario_speed",
  child_lock: "switch.marysia_blokada_przed_dziecmi",
};

const MARYSIA_STYLES = `
  :host { display:block; width:100%; color:var(--primary-text-color,#e8eef4); font-family:var(--paper-font-body1_-_font-family,Roboto,"Segoe UI",sans-serif); }
  * { box-sizing:border-box; }
  ha-card { width:100%; overflow:hidden; border:1px solid #ffffff18; border-radius:20px; background:var(--ha-card-background,var(--card-background-color,#111a24)); color:inherit; container-type:inline-size; container-name:marysia; }
  .fascia { min-height:232px; display:grid; grid-template-columns:minmax(260px, .72fr) minmax(0, 1.5fr); align-items:center; gap:24px; padding:20px 28px; color:#edf2f6; background:repeating-linear-gradient(180deg,#ffffff05 0 1px,transparent 1px 4px),linear-gradient(110deg,#30373e,#171c21 47%,#2b3239); }
  .brand { min-width:0; }
  .brand-head { display:flex; align-items:center; justify-content:space-between; gap:12px; }
  .logo { font-size:25px; letter-spacing:.13em; font-weight:500; white-space:nowrap; }
  .logo span { color:#b9c5ce; font-size:14px; letter-spacing:.08em; }
  .logo b { color:#ed3843; font-weight:500; }
  .device-name { margin-top:13px; color:#eef3f7; font-size:25px; font-weight:600; }
  .model { margin-top:5px; color:#b9c3cc; font-size:13px; }
  .online { display:flex; align-items:center; gap:7px; margin-top:11px; color:#a9d9e8; font-size:12px; white-space:nowrap; }
  .online-dot { width:7px; height:7px; flex:0 0 auto; border-radius:50%; background:#53dda4; box-shadow:0 0 9px #53dda4a0; }
  .online.offline .online-dot { background:#ec6570; box-shadow:0 0 9px #ec657077; }
  .dial-area { position:relative; justify-self:center; width:min(100%,690px); height:205px; }
  .program-list { position:absolute; inset:0; }
  .program { position:absolute; display:grid; grid-template-columns:9px 1fr; align-items:center; gap:7px; width:170px; min-height:28px; padding:3px 4px; border:0; border-radius:5px; background:transparent; color:#b9c5d0; font:inherit; font-size:12px; text-align:left; cursor:pointer; }
  .program:hover { color:#fff; background:#ffffff0d; }
  .program:disabled { opacity:.38; cursor:not-allowed; }
  .program.p0 { left:50%; top:0; transform:translateX(-50%); }
  .program.p1 { right:0; top:32px; }
  .program.p2 { right:0; top:91px; }
  .program.p3 { right:20px; bottom:10px; }
  .program.p4 { left:50%; bottom:0; transform:translateX(-50%); }
  .program.p5 { left:0; bottom:10px; }
  .program.p6 { left:0; top:91px; }
  .led { width:6px; height:6px; border-radius:50%; background:#59636c; box-shadow:inset 0 0 3px #000; }
  .program[aria-pressed="true"] { color:#eafaff; }
  .program[aria-pressed="true"] .led { background:#5ed4f2; box-shadow:0 0 9px #5ed4f2,0 0 16px #5ed4f288; }
  .knob-zone { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }
  .knob { position:relative; display:block; width:148px; aspect-ratio:1; border:0; border-radius:50%; background:radial-gradient(circle at 34% 28%,#eef2f4 0,#bbc3c9 22%,#75808a 47%,#353d45 64%,#aeb7bf 69%,#515a63 75%,#242a30 100%); box-shadow:0 9px 22px #0009,inset 0 2px 6px #ffffffa0,inset 0 -6px 12px #0008; cursor:pointer; }
  .knob::before { content:""; position:absolute; inset:9px; border:1px solid #ffffff52; border-radius:50%; box-shadow:inset 0 0 0 1px #0003; }
  .pointer { position:absolute; top:9px; left:calc(50% - 2px); width:4px; height:21px; border-radius:3px; background:#f7fbff; box-shadow:0 0 8px #ffffffb0; transform-origin:2px 67px; transition:transform .35s ease; }
  .knob-core { position:absolute; inset:31px; display:grid; place-items:center; border-radius:50%; background:radial-gradient(circle at 35% 30%,#8c969f,#333b43 70%); color:#f6f9fc; box-shadow:inset 0 2px 8px #0009,0 1px 2px #ffffff80; text-align:center; }
  .knob-core span { max-width:78px; font-size:10px; line-height:1.25; text-shadow:0 1px 3px #000; }
  .dial-hint { position:absolute; left:50%; bottom:-1px; transform:translateX(-50%); color:#aebac4; font-size:10px; white-space:nowrap; }
  .screen { min-height:92px; display:grid; grid-template-columns:1fr auto; align-items:center; gap:11px; padding:10px 13px; border:1px solid #ffffff16; border-radius:11px; background:linear-gradient(145deg,#070a0c,#11171b); box-shadow:inset 0 2px 12px #000b; }
  .screen-icons { display:flex; flex-wrap:wrap; gap:10px; color:#aec9d7; font-size:10px; }
  .screen-time { margin-top:8px; color:#edf7fa; font-size:22px; letter-spacing:.12em; }
  .screen-note { color:#8d9ba7; font-size:10px; }
  .screen-meta { border-left:1px solid #ffffff24; padding-left:13px; color:#aebbc5; font-size:10px; line-height:1.65; }
  .screen-meta strong { color:#e7f2f6; font-size:11px; font-weight:500; }
  .connected { justify-self:end; align-self:start; color:#d2e1e9; font-size:11px; white-space:nowrap; }
  .main { display:grid; grid-template-columns:minmax(260px, .34fr) minmax(0, 1fr); gap:26px; padding:18px 24px 20px; }
  .appliance { min-height:470px; position:relative; overflow:hidden; border:1px solid #ffffff12; border-radius:15px; padding:12px; background:linear-gradient(140deg,#242c34,#0b1016 70%); display:flex; align-items:end; justify-content:center; }
  .dishwasher { position:absolute; left:50%; top:18px; width:min(calc(100% - 40px),280px); height:auto; aspect-ratio:222 / 256; transform:translateX(-50%); overflow:visible; appearance:none; padding:0; border:2px solid #aeb7bb; border-radius:12px; background:linear-gradient(100deg,#747d82,#c4cacc 8%,#8b9499 14%,#aeb6b9 50%,#747d82 94%,#c4cacc); box-shadow:inset 0 0 0 2px #e4e8e969,inset 0 -8px 13px #272e325c,0 10px 20px #0008; }
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
  .content { min-width:0; align-self:center; }
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
  .stats { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:9px; }
  .stat { min-height:54px; display:flex; align-items:center; gap:9px; padding:8px 10px; border-radius:11px; background:var(--secondary-background-color,#192533); }
  .stat-icon { width:22px; flex:0 0 22px; color:#a6bac9; font-size:16px; text-align:center; }
  .stat small { display:block; color:var(--secondary-text-color,#9aabbb); font-size:10px; }
  .stat strong { display:block; margin-top:3px; color:var(--primary-text-color,#e9eff5); font-size:12px; font-weight:500; overflow-wrap:anywhere; }
  .primary-actions { display:grid; grid-template-columns:1.05fr 1fr .72fr 1.35fr; gap:9px; margin-top:14px; }
  .action { min-height:47px; display:flex; align-items:center; justify-content:center; gap:8px; padding:7px 9px; border:0; border-radius:10px; background:var(--secondary-background-color,#192533); color:var(--primary-text-color,#e9eff5); font:inherit; font-size:12px; text-align:center; }
  button.action { cursor:pointer; }
  button.action:hover:not(:disabled) { filter:brightness(1.12); }
  .action.start { min-height:62px; background:linear-gradient(120deg,#08aedd,#087fa8); color:#fff; box-shadow:0 0 18px #0ba9d344; font-size:15px; }
  .action.stop { color:#c2ccd4; }
  .action:disabled { opacity:.48; cursor:not-allowed; }
  .power-action { min-height:62px; justify-content:space-between; padding:10px 14px; border:1px solid #ffffff18; background:linear-gradient(140deg,#202b34,#121a22); }
  .power-action .power-icon { color:#44c7ed; font-size:23px; }
  .power-action strong { font-size:12px; font-weight:500; }
  .switch { position:relative; display:inline-block; width:43px; height:24px; flex:0 0 43px; border:1px solid #596571; border-radius:14px; background:#202a33; transition:background .2s,border-color .2s; }
  .switch::after { content:""; position:absolute; top:3px; left:3px; width:16px; height:16px; border-radius:50%; background:#aeb9c2; box-shadow:0 1px 3px #0008; transition:transform .2s,background .2s; }
  .is-on .switch { border-color:#21c8ed; background:#087da0; }
  .is-on .switch::after { transform:translateX(19px); background:#f4fbff; }
  .switch[aria-disabled="true"] { opacity:.38; }
  .delay-action { min-height:62px; display:flex; align-items:center; gap:10px; padding:9px 12px; border:1px solid #ffffff18; border-radius:11px; background:linear-gradient(140deg,#202b34,#121a22); }
  .delay-icon { color:#76cdec; font-size:20px; }
  .delay-label { flex:1; color:#dbe5ec; font-size:12px; }
  .delay-controls { display:flex; align-items:center; gap:7px; padding:4px; border:1px solid #ffffff1a; border-radius:9px; background:#10171e; }
  .delay-controls button { width:24px; height:26px; border:0; border-radius:6px; background:#263541; color:#ddecf5; font:inherit; cursor:pointer; }
  .delay-controls button:disabled { opacity:.35; cursor:not-allowed; }
  .delay-controls strong { min-width:32px; color:#f1f5f8; font-size:12px; text-align:center; font-weight:500; white-space:nowrap; }
  .features { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:9px; margin-top:10px; }
  .feature { min-width:0; min-height:88px; display:grid; grid-template-columns:28px minmax(0,1fr); grid-template-rows:1fr auto; align-items:center; column-gap:8px; padding:11px 12px; border:1px solid #ffffff16; border-radius:11px; background:linear-gradient(140deg,#202a34,#131a21); color:#e4edf3; font:inherit; text-align:left; }
  .feature:not(:disabled) { cursor:pointer; }
  .feature:not(:disabled):hover { border-color:#50c8e655; filter:brightness(1.08); }
  .feature:disabled { cursor:not-allowed; }
  .feature-icon { grid-row:1 / span 2; color:#55c8ed; font-size:20px; text-align:center; }
  .feature-label { align-self:end; font-size:12px; line-height:1.3; overflow-wrap:anywhere; }
  .feature .switch { grid-column:2; justify-self:start; margin-top:6px; }
  .feature.is-on { border-color:#36c9ed66; background:linear-gradient(140deg,#173747,#131f28); }
  .error { min-height:0; margin-top:0; color:#ff958f; font-size:11px; }
  .error:not(:empty) { margin-top:8px; }
  .footer { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:14px; padding-top:12px; border-top:1px solid var(--divider-color,#2a3744); }
  .foot-item { display:flex; align-items:center; gap:8px; min-width:0; padding:2px 9px; border-right:1px solid var(--divider-color,#2a3744); }
  .foot-item:last-child { border:0; }
  .foot-icon { flex:0 0 auto; color:#91a6b8; font-size:14px; }
  .foot-item small { display:block; color:var(--secondary-text-color,#9aabbb); font-size:10px; }
  .foot-item strong { display:block; margin-top:2px; color:var(--primary-text-color,#e9eff5); font-size:11px; font-weight:500; }
  @container marysia (max-width:1100px) {
    .fascia { grid-template-columns:minmax(210px,.65fr) minmax(0,1.35fr); gap:12px; padding:16px; }
    .main { grid-template-columns:minmax(220px,.36fr) minmax(0,1fr); gap:16px; padding:14px; }
    .stats { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .primary-actions { grid-template-columns:repeat(2,minmax(0,1fr)); }
  }
  @container marysia (max-width:760px) {
    .fascia { grid-template-columns:1fr; gap:8px; padding:14px; }
    .brand-head { align-items:flex-start; }
    .device-name { margin-top:8px; font-size:21px; }
    .dial-area { width:min(100%,620px); height:200px; }
    .main { grid-template-columns:1fr; padding:12px; }
    .appliance { min-height:330px; }
    .dishwasher { width:min(calc(100% - 40px),230px); }
    .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); }
    .footer { grid-template-columns:1fr; gap:8px; }
    .foot-item { border-right:0; }
  }
  @container marysia (max-width:460px) {
    .brand-head { display:block; }
    .online { margin-top:7px; }
    .program { width:126px; font-size:10px; }
    .program.p0,.program.p4 { width:142px; }
    .knob { width:120px; }
    .pointer { transform-origin:2px 55px; }
    .knob-core { inset:25px; }
    .dial-area { height:178px; }
    .features,.primary-actions { grid-template-columns:repeat(2,minmax(0,1fr)); }
    .stats { gap:6px; }
    .stat { padding:7px; }
    .delay-action { grid-column:1 / -1; }
    .footer { margin-top:8px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .pointer,.progress-fill,.door { transition:none; }
    .dishwasher[data-state="run"] .water i { animation:none; height:54px; opacity:.9; }
  }
  /* Layout based on the approved Bosch card reference. */
  ha-card { border:1px solid #344b5c; border-radius:20px; background:radial-gradient(ellipse at 48% 12%,#1c2b38 0,#111b25 57%,#0d151d 100%); }
  .stage { display:grid; grid-template-columns:minmax(280px,.9fr) minmax(270px,.8fr) minmax(460px,1.38fr); grid-template-rows:minmax(320px,auto) auto auto; gap:18px 22px; padding:20px 24px 18px; }
  .left-column { grid-column:1; grid-row:1 / span 2; min-width:0; display:flex; flex-direction:column; }
  .identity { padding:8px 8px 10px; }
  .brand-head { justify-content:flex-start; gap:15px; }
  .logo { display:flex; align-items:center; gap:10px; font-size:18px; letter-spacing:.02em; }
  .logo-mark { width:34px; height:34px; display:grid; place-items:center; border:2px solid #b8c4cf; border-radius:50%; color:#e8edf2; font-size:18px; font-weight:600; box-shadow:inset 0 0 0 2px #657786; }
  .logo strong { font-size:21px; letter-spacing:0; font-weight:700; }
  .logo b { color:#ee2434; font-weight:700; }
  .logo span:last-child { color:#9bacbd; font-size:14px; letter-spacing:.03em; }
  .device-line { display:flex; align-items:center; gap:18px; margin-top:14px; }
  .device-name { margin:0; font-size:28px; line-height:1.1; }
  .model { margin-top:5px; color:#9caec0; font-size:14px; }
  .brand-online { display:flex; align-items:center; gap:9px; color:#32e595; font-size:14px; white-space:nowrap; }
  .brand-online .online-dot { width:14px; height:14px; }
  .photo-wrap { flex:1; min-height:0; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .photo-wrap { position:relative; }
  .machine-photo { display:block; width:min(100%,450px); max-height:540px; object-fit:contain; }
  .water-overlay { position:absolute; inset:11% 12% 39%; display:none; pointer-events:none; }
  .water-overlay.active { display:block; }
  .water-overlay i { position:absolute; top:4%; width:3px; height:20px; border-radius:4px; background:linear-gradient(#d9fbff,#42d9ff 60%,#bbf7ff); box-shadow:0 0 8px #33d3ff,0 0 15px #33d3ff99; animation:photo-spray .68s linear infinite; }
  .water-overlay i::after { content:""; position:absolute; left:-2px; bottom:-5px; width:7px; height:7px; border-radius:50%; background:#bcf5ff; box-shadow:0 0 8px #4cdcff; }
  .water-overlay i:nth-child(1) { left:21%; animation-delay:-.21s; }
  .water-overlay i:nth-child(2) { left:34%; animation-delay:-.5s; }
  .water-overlay i:nth-child(3) { left:47%; animation-delay:-.08s; }
  .water-overlay i:nth-child(4) { left:61%; animation-delay:-.37s; }
  .water-overlay i:nth-child(5) { left:74%; animation-delay:-.61s; }
  @keyframes photo-spray { 0% { transform:translateY(-4px); opacity:0; } 14% { opacity:1; } 82% { opacity:.9; } 100% { transform:translateY(74px); opacity:0; } }
  .brand-online.offline { color:#ff7b83; }
  .dial-column { grid-column:2; grid-row:1; align-self:center; min-width:0; }
  .dial-area { width:min(100%,390px); height:320px; }
  .knob { width:190px; background:radial-gradient(circle at 34% 28%,#e5e9eb 0,#aab4ba 23%,#59646c 48%,#252d34 64%,#b8c2c8 69%,#515b63 75%,#232a30 100%); box-shadow:0 7px 20px #0009,inset 0 2px 9px #ffffffad,inset 0 -7px 14px #000b; }
  .knob::before { inset:10px; border-color:#ffffff77; }
  .pointer { top:12px; height:29px; width:5px; background:#16c8ef; box-shadow:0 0 13px #0bbbe9; transform-origin:2px 83px; }
  .knob-core { display:none; }
  .program { width:142px; grid-template-columns:10px 1fr; gap:7px; color:#d5e0eb; font-size:13px; line-height:1.25; }
  .program.p0 { top:0; }
  .program.p0 { display:flex; flex-direction:column-reverse; justify-content:center; align-items:center; gap:7px; width:170px; height:50px; text-align:center; }
  .program.p1 { top:53px; left:-8px; right:auto; }
  .program.p2 { top:53px; right:-8px; }
  .program.p3 { top:140px; left:-17px; right:auto; }
  .program.p4 { top:140px; right:-12px; bottom:auto; }
  .program.p5 { bottom:20px; left:-7px; right:auto; }
  .program.p6 { bottom:20px; right:-3px; left:auto; top:auto; }
  .program[aria-pressed="true"] { color:#dffaff; font-weight:600; }
  .led { width:9px; height:9px; background:#66737e; }
  .program[aria-pressed="true"] .led { width:13px; height:13px; background:#45dbf5; box-shadow:0 0 12px #45dbf5,0 0 23px #45dbf588; }
  .dial-hint { display:none; }
  .state-panel { grid-column:3; grid-row:1; align-self:center; min-width:0; padding:20px 20px 0; border:1px solid #2b3d4c; border-radius:18px; background:linear-gradient(145deg,#17232e,#111a23); box-shadow:0 12px 28px #0003,inset 0 1px #ffffff08; }
  .state-head { display:flex; align-items:center; gap:24px; min-height:112px; padding:0 14px; }
  .state-check { width:98px; height:98px; display:grid; place-items:center; border:3px solid #10d8b5; border-radius:50%; color:#1ce8b7; font-size:51px; line-height:1; text-shadow:0 0 12px #0ff8bd; box-shadow:0 0 12px #00eac477,inset 0 0 12px #00eac444; }
  .state-title { color:#edf3fa; font-size:34px; font-weight:650; }
  .progress-row { margin:15px 0 18px; gap:13px; }
  .progress-track { height:16px; background:#26333f; }
  .progress-fill { background:linear-gradient(90deg,#08b5ed,#08d0ef); box-shadow:0 0 10px #08b5ed88; }
  .percent { min-width:50px; font-size:15px; }
  .stats { grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; }
  .stat { min-height:106px; display:block; padding:14px 15px; border:1px solid #293947; border-radius:14px; background:linear-gradient(145deg,#192530,#131c25); }
  .stat-icon { width:auto; display:block; margin-bottom:8px; color:#08bbee; font-size:22px; text-align:left; }
  .stat small { font-size:13px; }
  .stat strong { margin-top:3px; font-size:17px; }
  .control-panel { grid-column:2 / span 2; grid-row:2; min-width:0; }
  .primary-actions { grid-template-columns:1fr 1fr .95fr; gap:12px; margin:0; }
  .power-action,.action.start,.action.stop { min-height:82px; border:1px solid #235168; border-radius:14px; }
  .power-action { padding:13px 20px; }
  .power-action .power-icon { font-size:34px; }
  .power-action strong,.action.start strong,.action.stop strong { font-size:17px; }
  .power-action .switch { width:68px; height:42px; flex-basis:68px; border-radius:24px; }
  .power-action .switch::after { top:5px; left:5px; width:30px; height:30px; }
  .power-action.is-on .switch::after { transform:translateX(25px); background:#03caef; box-shadow:0 0 13px #03caef; }
  .action.start { background:linear-gradient(120deg,#06b8df,#0294c1); box-shadow:0 0 18px #00c4ef55,inset 0 1px #a9f4ff75; font-size:22px; }
  .action.start span { font-size:36px; }
  .action.stop { background:linear-gradient(140deg,#202c37,#151e27); font-size:17px; }
  .action.stop span { color:#99a7b8; font-size:24px; }
  .delay-action { min-height:0; justify-content:flex-start; padding:0; border:0; border-radius:0; background:transparent; }
  .features { grid-template-columns:repeat(6,minmax(0,1fr)); gap:10px; margin-top:12px; }
  .feature { min-height:123px; grid-template-columns:1fr; grid-template-rows:1fr auto auto; justify-items:center; gap:0; padding:13px 9px 10px; text-align:center; }
  .feature-icon { grid-row:auto; font-size:25px; }
  .feature-label { align-self:center; min-height:38px; font-size:14px; line-height:1.22; }
  .feature .switch { grid-column:auto; justify-self:center; margin-top:5px; }
  .feature[data-feature="start_in_relative"] { cursor:default; }
  .feature[data-feature="start_in_relative"] .delay-controls { grid-column:1; margin-top:5px; }
  .feature[data-feature="start_in_relative"] .delay-controls button { width:23px; height:22px; }
  .feature[data-feature="start_in_relative"] .delay-controls strong { min-width:38px; font-size:11px; }
  .footer { grid-column:1 / -1; grid-row:3; margin:0; padding:0 18px; border:1px solid #293a49; border-radius:15px; background:linear-gradient(120deg,#17232d,#111a23); }
  .foot-item { min-height:78px; gap:14px; padding:9px 20px; }
  .foot-icon { width:42px; height:42px; display:grid; place-items:center; border-radius:50%; background:#1d3448; color:#08b9e9; font-size:23px; }
  .foot-item small { font-size:14px; }
  .foot-item strong { font-size:15px; }
  @container marysia (max-width:1100px) {
    .stage { grid-template-columns:minmax(250px,.9fr) minmax(0,1.25fr); grid-template-rows:auto auto auto auto; gap:16px; padding:16px; }
    .left-column { grid-column:1; grid-row:1 / span 2; }
    .dial-column { grid-column:2; grid-row:1; }
    .state-panel { grid-column:2; grid-row:2; }
    .control-panel { grid-column:1 / -1; grid-row:3; }
    .footer { grid-row:4; }
    .dial-area { height:280px; }
    .state-check { width:75px; height:75px; font-size:39px; }
    .state-title { font-size:27px; }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); }
  }
  @container marysia (max-width:700px) {
    .stage { grid-template-columns:minmax(0,1fr); padding:12px; gap:12px; }
    .left-column,.dial-column,.state-panel,.control-panel,.footer { grid-column:1; grid-row:auto; }
    .left-column { min-height:480px; }
    .identity { padding:3px 3px 10px; }
    .logo span:last-child { font-size:11px; }
    .device-name { font-size:24px; }
    .machine-photo { max-height:400px; width:min(100%,340px); }
    .dial-area { width:min(100%,390px); height:265px; }
    .knob { width:155px; }
    .pointer { transform-origin:2px 68px; }
    .program { width:125px; font-size:11px; }
    .program.p0,.program.p4 { width:140px; }
    .state-panel { padding:12px 12px 0; }
    .state-head { min-height:78px; gap:14px; }
    .state-check { width:65px; height:65px; font-size:34px; }
    .state-title { font-size:25px; }
    .stat { min-height:90px; padding:10px; }
    .stat strong { font-size:14px; }
    .primary-actions { gap:7px; }
    .power-action { gap:6px; padding:8px; }
    .power-action .switch { width:44px; height:28px; flex-basis:44px; }
    .power-action .switch::after { width:18px; height:18px; top:4px; left:4px; }
    .power-action.is-on .switch::after { transform:translateX(16px); }
    .power-action strong,.action.start strong,.action.stop strong { font-size:13px; }
    .action.start span { font-size:26px; }
    .features { grid-template-columns:repeat(3,minmax(0,1fr)); gap:7px; }
    .feature { min-height:105px; padding:9px 5px; }
    .feature-label { font-size:12px; }
    .footer { grid-template-columns:1fr; padding:5px 12px; }
    .foot-item { min-height:55px; border:0; padding:4px; }
    .foot-icon { width:34px; height:34px; font-size:19px; }
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

  getGridOptions() { return { columns: "full", rows: "auto" }; }

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

  _delayText() {
    const entity = this._entity("start_in_relative");
    if (!entity || ["unknown", "unavailable", ""].includes(String(entity.state).toLowerCase())) return "—";
    const value = Number(entity.state);
    if (!Number.isFinite(value)) return "—";
    return `${value} ${entity.attributes?.unit_of_measurement || "s"}`;
  }

  _adjustDelay(direction) {
    if (!this._isAvailable("start_in_relative")) return;
    const entity = this._entity("start_in_relative");
    const current = Number(entity.state);
    const step = Number(entity.attributes?.step) || 1;
    const minimum = Number(entity.attributes?.min ?? 0);
    const maximum = Number(entity.attributes?.max ?? 86400);
    if (!Number.isFinite(current)) return;
    const value = Math.max(minimum, Math.min(maximum, current + direction * step));
    this._call("number", "set_value", { entity_id: this._entities.start_in_relative, value });
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
    const available = (key) => this._isAvailable(key) ? this._prettyState(key, this._state(key)) : "—";
    const featureTiles = [
      ["child_lock", "Blokada dziecięca", "♙"],
      ["half_load", "Połowa załadunku", "½"],
      ["hygiene", "Hygiene+", "✣"],
      ["vario_speed", "VarioSpeed+", "⌁"],
      ["door_ajar", "Uchylanie drzwi", "↗"],
    ].map(([key, label, icon]) => {
      const enabled = this._state(key) === "on";
      const isAvailable = this._isAvailable(key);
      return `<button class="feature ${enabled ? "is-on" : ""}" type="button" data-feature="${key}" aria-pressed="${enabled}" ${isAvailable ? "" : "disabled title=\"Brak dostępnej encji Home Connect\""}>
        <span class="feature-icon" aria-hidden="true">${icon}</span><span class="feature-label">${this._escape(label)}</span><span class="switch" aria-hidden="true"></span>
      </button>`;
    }).join("");
    const delayAvailable = this._isAvailable("start_in_relative");
    const delayEntity = this._entity("start_in_relative");
    const delayValue = Number(delayEntity?.state);
    const delayMin = Number(delayEntity?.attributes?.min ?? 0);
    const delayMax = Number(delayEntity?.attributes?.max ?? 86400);
    const delayTile = `<div class="feature delay-tile"><span class="feature-icon" aria-hidden="true">◷</span><span class="feature-label">Opóźniony start</span><div class="delay-controls"><button type="button" data-delay="-1" aria-label="Zmniejsz opóźnienie" ${!delayAvailable || !Number.isFinite(delayValue) || delayValue <= delayMin || this._busy ? "disabled" : ""}>−</button><strong>${this._escape(this._delayText())}</strong><button type="button" data-delay="1" aria-label="Zwiększ opóźnienie" ${!delayAvailable || !Number.isFinite(delayValue) || delayValue >= delayMax || this._busy ? "disabled" : ""}>+</button></div></div>`;
    const programButtons = this._programs.map((item, index) => `
      <button class="program p${index % 7}" type="button" data-program="${index}" aria-pressed="${item.key === this._selectedKey}" ${this._entityOption("selected_program", item) ? "" : "disabled"}>
        <span class="led" aria-hidden="true"></span><span>${this._escape(item.label)}</span>
      </button>`).join("");

    this.shadowRoot.innerHTML = `
      <style>${MARYSIA_STYLES}</style>
      <ha-card>
        <div class="stage">
          <section class="left-column" aria-label="Zmywarka Bosch">
            <div class="identity">
              <div class="brand-head"><div class="logo"><span class="logo-mark" aria-hidden="true">H</span><strong><b>B</b>OSCH</strong><span>• HOME CONNECT</span></div></div>
              <div class="device-line"><div class="device-name">${this._escape(this._config.name || "Marysia")}</div><div class="brand-online ${connected ? "" : "offline"}"><span class="online-dot"></span>${connected ? "online" : "offline"}</div></div>
              <div class="model">${this._escape(this._config.model || "SMS4ENI06E")}</div>
            </div>
            <div class="photo-wrap">
              <img class="machine-photo" src="${this._escape(this._config.image || "/hacsfiles/marysia/images/dishwasher.webp")}" alt="Otwarta zmywarka Bosch z talerzami">
              <span class="water-overlay ${iconState === "run" ? "active" : ""}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
            </div>
          </section>
          <section class="dial-column" aria-label="Wybór programu">
            <div class="dial-area">
              <div class="program-list" aria-label="Programy zmywarki">${programButtons}</div>
              <div class="knob-zone"><button class="knob" id="knob" type="button" aria-label="Wybierz następny program"><span class="pointer" style="transform:rotate(${Math.max(0,this._programs.findIndex((item) => item.key === this._selectedKey)) * (360 / this._programs.length)}deg)"></span><span class="knob-core"><span>${this._escape(program?.label || "—")}</span></span></button></div>
              <div class="dial-hint">kliknij gałkę lub nazwę programu</div>
            </div>
          </section>
          <section class="state-panel" aria-label="Stan zmywarki">
            <div class="state-head"><div class="state-check" aria-hidden="true">${operation === "run" ? "↻" : "✓"}</div><div class="state-title">${this._escape(stateText)}</div></div>
            <div class="progress-row"><div class="progress-track" role="progressbar" aria-label="Postęp programu" aria-valuenow="${progress ?? 0}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${progress ?? 0}%"></div></div><div class="percent">${progressText}</div></div>
            <div class="stats">
              ${this._stat("▤", "Program", program?.label || "—")}
              ${this._stat("▣", "Drzwi", doorText)}
              ${this._stat("◷", "Pozostały czas", this._remainingTime())}
            </div>
          </section>
          <section class="control-panel" aria-label="Sterowanie zmywarką">
            <div class="primary-actions">
              <button class="action power-action ${powerOn ? "is-on" : ""}" id="power" type="button" aria-pressed="${powerOn}" ${!this._isAvailable("power") || this._busy ? "disabled" : ""}><span class="power-icon" aria-hidden="true">⏻</span><strong>Zasilanie</strong><span class="switch" aria-hidden="true"></span></button>
              <button class="action start" id="start" type="button" ${!this._canStart() || this._busy ? "disabled" : ""}><span aria-hidden="true">▶</span><strong>Start</strong></button>
              <button class="action stop" id="stop" type="button" ${!this._canStop() || this._busy ? "disabled" : ""}><span aria-hidden="true">■</span><strong>Stop</strong></button>
            </div>
            <div class="features" aria-label="Opcje zmywarki">${featureTiles}${delayTile}</div>
            <div class="error" role="alert">${this._escape(this._error)}</div>
          </section>
          <footer class="footer">
            ${this._foot("◌", "Home Connect", connected ? "Online" : "Offline")}
            ${this._foot("▯", "Zdalne sterowanie", available("remote_control"))}
            ${this._foot("▶", "Zdalny start", available("remote_start"))}
          </footer>
        </div>
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
    this.shadowRoot.querySelectorAll("[data-feature]").forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.feature;
      if (key && this._isAvailable(key)) this._call("switch", "toggle", { entity_id: this._entities[key] });
    }));
    this.shadowRoot.querySelectorAll("[data-delay]").forEach((button) => button.addEventListener("click", () => {
      this._adjustDelay(Number(button.dataset.delay));
    }));
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

