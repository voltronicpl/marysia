/* Marysia — Bosch Home Connect Lovelace card · v2.0.0 */
const MARYSIA_VERSION = "2.0.0";
const MARYSIA_W = 1520;
const MARYSIA_H = 858;

const MARYSIA_PROGRAMS = [
  { key: "dishcare_dishwasher_program_eco_50", label: "Eco 50°", dial: ["Eco 50°"], angle: 0,
    aliases: ["eco50", "dishcare.dishwasher.program.eco50"] },
  { key: "dishcare_dishwasher_program_auto_2", label: "Auto 45–65°", dial: ["Auto", "45–65°"], angle: 303,
    aliases: ["auto2", "auto4565", "dishcare.dishwasher.program.auto2"] },
  { key: "dishcare_dishwasher_program_intensiv_70", label: "Intensywny 70°", dial: ["Intensywny", "70°"], angle: 57,
    aliases: ["intensiv70", "intensive70", "dishcare.dishwasher.program.intensiv70"] },
  { key: "dishcare_dishwasher_program_quick_65", label: "Szybki 65°", dial: ["Szybki", "65°"], angle: 249,
    aliases: ["quick65", "dishcare.dishwasher.program.quick65"] },
  { key: "dishcare_dishwasher_program_night_wash", label: "Nocny", dial: ["Nocny"], angle: 111,
    aliases: ["nightwash", "dishcare.dishwasher.program.nightwash"] },
  { key: "dishcare_dishwasher_program_machine_care", label: "Czyszczenie zmywarki", dial: ["Czyszczenie", "zmywarki"], angle: 207,
    aliases: ["machinecare", "dishcare.dishwasher.program.machinecare"] },
  { key: "dishcare_dishwasher_program_pre_rinse", label: "Płukanie wstępne", dial: ["Płukanie", "wstępne"], angle: 153,
    aliases: ["prerinse", "dishcare.dishwasher.program.prerinse"] },
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

const MARYSIA_ICONS = {
  check: '<path d="M7.5 12.5l3 3L16.5 9" />',
  drop: '<path d="M12 4c3 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6 5.5-10z" />',
  pause: '<path d="M9.5 8v8M14.5 8v8" />',
  alert: '<path d="M12 7.5v5.5M12 16.5v.5" />',
  clock: '<circle cx="12" cy="12" r="8.6" /><path d="M12 7.6V12l3 2" />',
  moon: '<path d="M17.5 14.5A6.5 6.5 0 0 1 9.5 6.5a6.5 6.5 0 1 0 8 8z" />',
  doc: '<rect x="5.5" y="3.5" width="13" height="17" rx="1.6" /><path d="M9.6 8h5.6M9.6 11.5h5.6M9.6 15h5.6M8.2 8h.1M8.2 11.5h.1M8.2 15h.1" />',
  lock: '<rect x="5.5" y="10.5" width="13" height="10" rx="1.8" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14v3" />',
  unlock: '<rect x="5.5" y="10.5" width="13" height="10" rx="1.8" /><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0M12 14v3" />',
  power: '<path d="M12 3.5v8M7.1 6.6a7.6 7.6 0 1 0 9.8 0" />',
  half: '<circle cx="12" cy="12" r="8.6" /><path d="M12 3.4a8.6 8.6 0 0 0 0 17.2z" fill="currentColor" />',
  sparkle: '<path d="M9.5 6l1.5 4.5L15.5 12 11 13.5 9.5 18 8 13.5 3.5 12 8 10.5z" fill="currentColor" stroke="none" /><path d="M17.5 3.5v5M15 6h5M18 15.5v4M16 17.5h4" />',
  gauge: '<path d="M4 16.5a8 8 0 1 1 16 0" /><path d="M12 16.5l4.2-4.6M6.6 12.4l1 .6M17.4 12.4l-1 .6M12 8.4v1.2M8.6 9.4l.6.9M15.4 9.4l-.6.9" />',
  door: '<path d="M7.5 20.5V3.5h9v17M7.5 3.5l5 2v15" /><path d="M14.5 12v1.5" />',
  phone: '<rect x="7" y="2.8" width="10" height="18.4" rx="2" /><path d="M11 17.8h2" />',
  play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none" />',
  hc: '<path d="M5 11.2L12 5l7 6.2V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" fill="currentColor" stroke="none" /><path d="M9.6 20v-3.8a2.4 2.4 0 0 1 4.8 0V20" stroke="#0e2238" stroke-width="2" />',
};

const MARYSIA_STYLES = `
  :host { display:block; --mc-ok:#35e07c; --mc-err:#ff6a72; --mc-text:#eef3f7;
    color:var(--mc-text); font-family:Roboto,"Segoe UI","Helvetica Neue",Arial,sans-serif; }
  * { box-sizing:border-box; }
  ha-card { display:block; position:relative; overflow:hidden; border-radius:24px; border:1px solid #ffffff22; padding:0; color:inherit;
    background:radial-gradient(110% 80% at 30% 10%,#1f2d3a 0,#18232e 40%,#141d26 100%); box-shadow:0 22px 60px #0009, inset 0 1px 0 #ffffff14; }
  .wrap { position:relative; width:100%; }
  .stage { position:absolute; left:0; top:0; width:${MARYSIA_W}px; height:${MARYSIA_H}px; transform-origin:0 0; }
  .stage > * { position:absolute; }
  svg.i { width:24px; height:24px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; flex:0 0 auto; display:block; }

  .brand { left:39px; top:30px; height:38px; display:flex; align-items:center; font-size:19.5px; letter-spacing:.03em; color:#a8b5c1; }
  .brand .logo { width:38px; height:38px; color:#c8d1d9; margin-right:20px; }
  .brand .logo svg { width:38px; height:38px; display:block; }
  .compact .tg .tl { white-space:normal; }
  .brand .bosch { color:#e8001c; font-weight:800; font-size:27px; }
  .brand .sep { margin:0 16px 0 18px; color:#76858f; font-size:16px; }
  .name { left:38px; top:76px; font-size:38px; font-weight:500; letter-spacing:.012em; line-height:1.15; }
  .online { left:322px; top:93px; display:flex; align-items:center; gap:10px; font-size:18px; color:var(--mc-ok); }
  .online.off { color:var(--mc-err); }
  .dot { width:15px; height:15px; border-radius:50%; background:currentColor; box-shadow:0 0 10px color-mix(in srgb,currentColor 70%,transparent); flex:0 0 auto; }
  .model { left:39px; top:128px; color:#a3b0bb; font-size:18.5px; letter-spacing:.04em; }

  .machine { left:16px; top:168px; width:436px; height:542px; }
  .machine svg { width:100%; height:100%; overflow:visible; display:block; filter:drop-shadow(0 18px 20px #000a); }
  .dw-door { transform-box:fill-box; transform-origin:50% 100%; transition:transform .75s cubic-bezier(.3,.8,.3,1); }
  .dw-door-panel, .dw-door-glass { transition:opacity .6s ease; }
  .dw-door-glass { opacity:0; }
  .machine[data-state="open"] .dw-door { transform:scale(1.09,.625); }
  .machine[data-state="run"] .dw-door-panel { opacity:.07; }
  .machine[data-state="run"] .dw-door-glass { opacity:1; }
  .dw-led { fill:#28343d; transition:fill .4s; }
  .machine[data-state="run"] .dw-led { fill:#3fd0ff; }
  .dw-glow, .dw-water { opacity:0; transition:opacity .5s; }
  .machine[data-state="run"] .dw-glow { opacity:1; }
  .machine[data-state="run"] .dw-water { opacity:1; }
  .dw-water line { stroke:#aef0ff; stroke-width:2; stroke-linecap:round; stroke-dasharray:5 13; animation:mc-fall .5s linear infinite; }
  .dw-water line:nth-child(3n) { animation-duration:.66s; stroke-width:1.4; stroke-dasharray:3 10; }
  .dw-water line:nth-child(4n+1) { animation-duration:.42s; }
  .dw-water circle { fill:#d4f8ff; animation:mc-drop 1.05s ease-in infinite; }
  .dw-arm { transform-box:fill-box; transform-origin:50% 50%; }
  .machine[data-state="run"] .dw-arm { animation:mc-spin 1.3s linear infinite; }
  @keyframes mc-fall { to { stroke-dashoffset:-36; } }
  @keyframes mc-drop { 0% { transform:translateY(-8px); opacity:0; } 15% { opacity:1; } 100% { transform:translateY(130px); opacity:0; } }
  @keyframes mc-spin { 0%{transform:scaleX(1)} 50%{transform:scaleX(-1)} 100%{transform:scaleX(1)} }

  .dial { left:487px; top:40px; width:430px; height:400px; }
  .ring { position:absolute; left:205px; top:178px; width:204px; height:204px; margin:-102px 0 0 -102px; border-radius:50%;
    background:radial-gradient(circle,#0c141b 0 88%,#1a2733 92%,#0f171f 100%); box-shadow:0 0 0 1px #ffffff0c, 0 0 26px #000c, 0 0 46px #1eb6ec18; }
  .knob { position:absolute; inset:8px; border:0; padding:0; border-radius:50%; cursor:pointer; overflow:hidden;
    background:
      radial-gradient(circle at 50% 50%,#0000 0 62%,#ffffff22 64%,#0000 67%),
      repeating-conic-gradient(from 0deg,#ffffff24 0deg .8deg,#0000002a .8deg 1.7deg,#ffffff10 1.7deg 2.6deg),
      conic-gradient(from 210deg,#6a737b,#e6ebef 35deg,#8f989f 75deg,#4c545b 125deg,#b9c1c7 175deg,#f2f5f7 215deg,#7b848b 265deg,#454d54 300deg,#c4cbd1 335deg,#6a737b);
    box-shadow:inset 0 0 0 3px #d9e0e58a, inset 0 0 0 6px #4a535b66, inset 0 -8px 18px #0008, 0 8px 18px #000b; }
  .knob::after { content:""; position:absolute; inset:0; border-radius:50%; background:radial-gradient(circle at 38% 30%,#ffffff55,#0000 48%); }
  .needle { position:absolute; left:50%; top:10px; width:6px; height:44px; margin-left:-3px; border-radius:3px; z-index:1;
    background:linear-gradient(#bff1ff,#2dc6ff); box-shadow:0 0 8px #3fd0ff,0 0 18px #1eb6ec; transform-origin:3px 84px; transition:transform .45s cubic-bezier(.3,.8,.3,1); }
  .knob:disabled { cursor:wait; }
  .prog { position:absolute; width:0; height:0; padding:0; border:0; background:none; color:#d3dbe2; font:inherit; font-size:18px; line-height:1.3; cursor:pointer; }
  .prog .pdot { position:absolute; left:-6px; top:-6px; width:12px; height:12px; border-radius:50%; background:#5a6670; }
  .prog .pl { position:absolute; white-space:nowrap; }
  .prog.top .pl { left:0; bottom:16px; transform:translateX(-50%); text-align:center; }
  .prog.right .pl { left:16px; top:0; transform:translateY(-50%); text-align:left; }
  .prog.left .pl { right:16px; top:0; transform:translateY(-50%); text-align:right; }
  .prog.bright .pl { left:15px; top:10px; text-align:left; }
  .prog.bleft .pl { right:-11px; top:10px; text-align:right; }
  .prog:hover { color:#fff; }
  .prog:disabled { cursor:not-allowed; color:#7d8a95; }
  .prog.on { color:#fff; }
  .prog.on .pdot { background:#3fd0ff; box-shadow:0 0 8px #3fd0ff,0 0 16px #1eb6ec; }

  .statusbox { left:936px; top:65px; width:555px; height:345px; border:1px solid #ffffff16; border-radius:16px;
    background:linear-gradient(160deg,#1b2733,#141e28); box-shadow:inset 0 1px 0 #ffffff0d; }
  .statusbox > * > *, .statusbox > .tiles3 { position:absolute; }
  .sicon { left:37px; top:27px; width:96px; height:96px; border-radius:50%; display:grid; place-items:center; color:#2fe08a;
    background:conic-gradient(from 200deg,#22c7b4,#33e383,#22c7b4,#1fb0c0,#22c7b4); box-shadow:0 0 22px #2fe08a44; }
  .sicon::before { content:""; position:absolute; inset:4px; border-radius:50%; background:radial-gradient(circle at 50% 40%,#173130,#0d1a1b); }
  .sicon svg.i { position:relative; width:54px; height:54px; stroke-width:3; }
  .sicon.run { color:#38cdfc; background:conic-gradient(from 200deg,#1e8fec,#38cdfc,#1e8fec,#2dc6ff,#1e8fec); box-shadow:0 0 22px #38cdfc55; }
  .sicon.warn { color:#ffb156; background:conic-gradient(#ff9c3a,#ffc46e,#ff9c3a); box-shadow:0 0 20px #ffb15644; }
  .sicon.err { color:#ff6a72; background:conic-gradient(#ff4d58,#ff8b92,#ff4d58); box-shadow:0 0 20px #ff6a7244; }
  .sicon.idle { color:#8d9aa6; background:conic-gradient(#5d6a75,#9aa6b1,#5d6a75); box-shadow:none; }
  .sicon.run::before, .sicon.warn::before, .sicon.err::before, .sicon.idle::before { background:radial-gradient(circle at 50% 40%,#16222b,#0e161d); }
  .stext { left:172px; top:44px; font-size:47px; font-weight:700; letter-spacing:.01em; line-height:62px; white-space:nowrap; }
  .track { left:22px; top:154px; width:445px; height:16px; border-radius:9px; background:#22303c; overflow:hidden; }
  .fill { height:100%; border-radius:inherit; background:linear-gradient(90deg,#14aee9,#3fd0ff); box-shadow:0 0 16px #3fd0ffbb; transition:width .4s; }
  .pct { left:483px; top:149px; font-size:20px; }
  .tiles3 { left:4px; right:2px; top:201px; bottom:-2px; display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
  .tile { position:relative; border:1px solid #ffffff14; border-radius:12px; background:linear-gradient(170deg,#18232e,#121b24); padding:24px 0 0 28px; min-width:0; }
  .tile svg.i { color:#2eb7ef; width:34px; height:34px; stroke-width:1.9; }
  .tile small { display:block; margin-top:14px; color:#9aa7b3; font-size:19px; line-height:1.2; }
  .tile strong { display:block; margin-top:6px; font-size:23px; font-weight:500; line-height:1.2; white-space:nowrap; }

  .actions { left:487px; top:440px; width:1004px; height:108px; display:grid; grid-template-columns:328fr 326fr 321fr; gap:14px; }
  .act { position:relative; height:108px; border-radius:12px; border:1px solid #ffffff16; background:linear-gradient(170deg,#1b2733,#141d27); color:var(--mc-text);
    font:inherit; font-size:21px; font-weight:500; cursor:pointer; transition:filter .2s; padding:0; }
  .act > * { position:absolute; }
  .act:hover:not(:disabled) { filter:brightness(1.12); }
  .act:disabled { cursor:not-allowed; }
  .act.power { border-color:#1eb6ec66; background:linear-gradient(170deg,#132a3a,#10202d); box-shadow:inset 0 0 22px #1eb6ec14; }
  .act.power svg.i { left:29px; top:31px; width:46px; height:46px; color:#2ab9f3; stroke-width:2.5; }
  .act.power .lbl { left:102px; top:41px; }
  .act.power .sw { left:216px; top:34px; }
  .act.start { background:linear-gradient(180deg,#24c2f4,#09a5de 60%,#0899d0); border:1.5px solid #8ee6ff; box-shadow:0 0 26px #1eb6ec66, inset 0 1px 0 #ffffffa0, inset 0 -10px 20px #0479a833; }
  .act.start svg.i { left:98px; top:27px; width:54px; height:54px; color:#f4fcff; filter:drop-shadow(0 2px 3px #0005); }
  .act.start .lbl { left:176px; top:41px; color:#fff; }
  .act.start:disabled { background:linear-gradient(180deg,#1a6f90,#145a76); border-color:#3a8fae; box-shadow:none; }
  .act.start:disabled .lbl, .act.start:disabled svg.i { opacity:.7; }
  .act.stop .sq { left:102px; top:37px; width:34px; height:34px; border-radius:3px; background:linear-gradient(#a9b3bc,#8c97a1); }
  .act.stop .lbl { left:174px; top:41px; }
  .act.stop:disabled .sq { opacity:.75; }
  .sw { display:block; width:74px; height:40px; border-radius:22px; background:#0a1219; box-shadow:inset 0 0 0 1px #ffffff1c, inset 0 2px 6px #000b; }
  .sw::after { content:""; position:absolute; top:6px; left:6px; width:28px; height:28px; border-radius:50%; background:linear-gradient(#a5b0ba,#7b8792); box-shadow:0 2px 4px #0009; transition:left .25s, background .25s; }
  .sw.on { background:#0b2f45; box-shadow:inset 0 0 0 1px #1eb6ec66, inset 0 2px 6px #0008; }
  .sw.on::after { left:40px; background:radial-gradient(circle at 40% 35%,#c4f3ff,#33c8fb 55%,#129fdc); box-shadow:0 0 14px #3fd0ff; }

  .toggles { left:487px; top:565px; width:1004px; height:160px; display:grid; grid-template-columns:154fr 143fr 151fr 163fr 168fr 163fr; gap:12px; }
  .tg { position:relative; height:160px; border-radius:12px; border:1px solid #ffffff14; background:linear-gradient(170deg,#1a2531,#131c26); padding:0; text-align:left;
    color:var(--mc-text); font:inherit; font-size:18px; cursor:pointer; }
  .tg > * { position:absolute; }
  .tg svg.i { left:29px; top:22px; width:34px; height:34px; color:#2ab9f3; stroke-width:2.1; }
  .tg .tl { left:30px; top:64px; line-height:1.28; white-space:nowrap; font-size:17px; }
  .tg .tl.one { top:66px; }
  .tg .sw { left:30px; top:112px; width:60px; height:32px; }
  .tg .sw::after { width:22px; height:22px; top:5px; left:6px; }
  .tg .sw.on::after { left:32px; }
  .tg:disabled { cursor:not-allowed; }

  .footer { left:29px; top:748px; width:1462px; height:86px; display:grid; grid-template-columns:repeat(3,1fr); border:1px solid #ffffff12; border-radius:12px; background:linear-gradient(170deg,#18222c,#141c25); }
  .fi { position:relative; border-right:1px solid #ffffff14; margin:14px 0; }
  .fi > * { position:absolute; }
  .fi:last-child { border-right:0; }
  .fi .fic { left:42px; top:-5px; width:66px; height:66px; border-radius:50%; background:#1b2a39; display:grid; place-items:center; color:#2ab9f3; }
  .fi .fic svg.i { width:38px; height:38px; }
  .fi:first-child .fic { color:#1e8ff0; }
  .fi .ft { left:133px; top:4px; font-size:19px; line-height:26px; white-space:nowrap; }
  .fi .ft b { display:block; font-weight:500; color:var(--mc-ok); }
  .fi.off .ft b { color:var(--mc-err); }
  .fi .dot { left:417px; top:22px; color:var(--mc-ok); }
  .fi.off .dot { color:var(--mc-err); }
  .err-msg { left:487px; top:728px; color:var(--mc-err); font-size:14px; }

  /* wąskie ekrany: układ pionowy */
  .compact .wrap { height:auto !important; }
  .compact .stage { position:relative; width:auto; height:auto; transform:none !important; padding:18px 16px; display:flex; flex-direction:column; gap:14px; }
  .compact .stage > * { position:relative; left:auto; top:auto; width:auto; }
  .compact .brand { font-size:15px; }
  .compact .brand .bosch { font-size:22px; }
  .compact .name { font-size:30px; margin-bottom:-14px; }
  .compact .online { position:absolute; right:16px; top:68px; font-size:15px; }
  .compact .model { font-size:15px; }
  .compact .machine { width:min(100%,330px); height:auto; aspect-ratio:436/542; align-self:center; }
  .compact .dial { width:430px; height:360px; align-self:center; zoom:.82; margin:-10px 0; }
  .compact .prog { font-size:16px; }
  .compact .statusbox { height:auto; display:flex; flex-direction:column; padding:18px 8px 8px; }
  .compact .statusbox > * > *, .compact .statusbox > .tiles3 { position:relative; left:auto; top:auto; right:auto; bottom:auto; }
  .compact .shead { display:flex; align-items:center; gap:18px; padding:0 10px; }
  .compact .sicon { width:70px; height:70px; flex:0 0 auto; }
  .compact .sicon svg.i { width:34px; height:34px; }
  .compact .stext { font-size:34px; }
  .compact .pbar { display:flex; align-items:center; gap:12px; margin:18px 10px; }
  .compact .track { flex:1; width:auto; }
  .compact .tiles3 { gap:6px; }
  .compact .tile { padding:14px 8px 14px 12px; }
  .compact .tile svg.i { width:26px; height:26px; }
  .compact .tile small { font-size:14px; }
  .compact .tile strong { font-size:16px; white-space:normal; }
  .compact .actions { height:auto; grid-template-columns:1fr 1fr; gap:10px; }
  .compact .act { height:80px; font-size:18px; }
  .compact .act.power { grid-column:1 / -1; }
  .compact .act.power svg.i { top:19px; } .compact .act.power .lbl { top:27px; } .compact .act.power .sw { left:auto; right:24px; top:20px; }
  .compact .act.start svg.i { left:calc(50% - 56px); top:20px; width:40px; height:40px; }
  .compact .act.stop .sq { left:calc(50% - 50px); top:25px; width:30px; height:30px; }
  .compact .act.start .lbl, .compact .act.stop .lbl { left:calc(50% - 2px); top:27px; }
  .compact .toggles { height:auto; grid-template-columns:1fr 1fr; gap:10px; }
  .compact .tg { height:150px; }
  .compact .footer { height:auto; grid-template-columns:1fr; }
  .compact .fi { height:70px; margin:0 14px; border-right:0; border-bottom:1px solid #ffffff14; }
  .compact .fi:last-child { border-bottom:0; }
  .compact .fi .fic { left:0; top:10px; width:50px; height:50px; }
  .compact .fi .ft { left:66px; top:10px; font-size:16px; line-height:24px; }
  .compact .fi .dot { left:auto; right:4px; top:28px; }

  @media (prefers-reduced-motion:reduce) {
    .dw-door,.needle,.fill { transition:none; }
    .dw-water line,.dw-water circle,.dw-arm { animation:none !important; }
  }
`;

function marysiaNormalize(value) {
  return String(value ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function marysiaIcon(name) {
  return `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${MARYSIA_ICONS[name] || ""}</svg>`;
}

const MARYSIA_LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="20" cy="20" r="18" /><circle cx="20" cy="20" r="13.5" stroke-width="1.6" />
  <path d="M14 9.5v21M26 9.5v21M14 20h12" stroke-width="2.4" /><path d="M14 9.5q6 -2 12 0M14 30.5q6 2 12 0" stroke-width="1.6" /></svg>`;

function marysiaDishwasherSvg() {
  const bigPlates = [0, 1, 2].map((i) => `<ellipse cx="${98 + i * 16}" cy="182" rx="${36 - i * 3}" ry="${40 - i * 3}" fill="url(#mcPlateR)" stroke="#eaf8ff" stroke-width="1.4" />`).join("");
  const slimPlates = [0, 1, 2, 3, 4, 5, 6].map((i) => `<ellipse cx="${224 + i * 13}" cy="${178 - (i % 2) * 3}" rx="6" ry="${36 - Math.abs(3 - i) * 2}" fill="url(#mcPlate)" stroke="#eaf8ff" stroke-width="1.1" />`).join("");
  const cutlery = [0, 1, 2, 3, 4, 5].map((i) => `<path d="M${326 + i * 9} 214 v-42" stroke="#d8e9f2" stroke-width="2.4" /><ellipse cx="${326 + i * 9}" cy="168" rx="3.2" ry="6" fill="#d8e9f2" />`).join("");
  const wires = Array.from({ length: 29 }, (_, i) => `<line x1="${42 + i * 12.5}" y1="220" x2="${42 + i * 12.5}" y2="${i % 2 ? 176 : 160}" />`).join("");
  const beams = [104, 218, 332].map((x) => `<polygon class="dw-glow" points="${x - 4},40 ${x + 4},40 ${x + 46},230 ${x - 46},230" fill="url(#mcBeam)" />`).join("");
  const jets = [];
  [104, 218, 332].forEach((x) => { for (let k = -3; k <= 3; k++) jets.push(`<line x1="${x}" y1="46" x2="${x + k * 13}" y2="240" />`); });
  [70, 130, 190, 250, 310, 370].forEach((x) => jets.push(`<line x1="${x}" y1="455" x2="${x + (x < 218 ? -12 : 12)}" y2="300" />`));
  const drops = [80, 120, 160, 200, 238, 276, 316, 356].map((x, i) => `<circle cx="${x}" cy="${70 + (i % 3) * 28}" r="2.1" style="animation-delay:${-i * 0.14}s" />`).join("");
  return `
  <svg viewBox="0 0 436 542" aria-hidden="true">
    <defs>
      <linearGradient id="mcSteel" x1="0" x2="1">
        <stop offset="0" stop-color="#5f676e" /><stop offset=".05" stop-color="#9aa2a9" /><stop offset=".18" stop-color="#c2c9ce" />
        <stop offset=".34" stop-color="#8f979e" /><stop offset=".52" stop-color="#cdd3d8" /><stop offset=".7" stop-color="#9aa2a9" />
        <stop offset=".86" stop-color="#bfc6cb" /><stop offset=".96" stop-color="#8a9299" /><stop offset="1" stop-color="#5a6268" />
      </linearGradient>
      <linearGradient id="mcShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".18" /><stop offset=".35" stop-color="#fff" stop-opacity="0" /><stop offset=".8" stop-color="#000" stop-opacity=".08" /><stop offset="1" stop-color="#000" stop-opacity=".28" />
      </linearGradient>
      <linearGradient id="mcTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f4" /><stop offset=".55" stop-color="#c3cacf" /><stop offset="1" stop-color="#8e979e" /></linearGradient>
      <pattern id="mcBrush" width="436" height="2" patternUnits="userSpaceOnUse"><rect width="436" height=".7" fill="#fff" opacity=".07" /></pattern>
      <linearGradient id="mcTub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c3150" /><stop offset=".45" stop-color="#0a2238" /><stop offset="1" stop-color="#05101a" /></linearGradient>
      <radialGradient id="mcGlow" cx=".5" cy=".05" r=".9"><stop offset="0" stop-color="#3fd0ff" stop-opacity=".5" /><stop offset="1" stop-color="#3fd0ff" stop-opacity="0" /></radialGradient>
      <linearGradient id="mcBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bff3ff" stop-opacity=".55" /><stop offset="1" stop-color="#3fd0ff" stop-opacity="0" /></linearGradient>
      <linearGradient id="mcPlate" x1="0" x2="1"><stop offset="0" stop-color="#93bfd4" /><stop offset=".5" stop-color="#f0faff" /><stop offset="1" stop-color="#86b0c4" /></linearGradient>
      <radialGradient id="mcPlateR" cx=".45" cy=".45" r=".6"><stop offset="0" stop-color="#e9f7ff" /><stop offset=".6" stop-color="#bcdcec" /><stop offset="1" stop-color="#88b5ca" /></radialGradient>
      <linearGradient id="mcGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c8f2ff" stop-opacity=".2" /><stop offset=".38" stop-color="#c8f2ff" stop-opacity=".03" /><stop offset=".52" stop-color="#fff" stop-opacity=".16" /><stop offset=".62" stop-color="#c8f2ff" stop-opacity=".02" /><stop offset="1" stop-color="#c8f2ff" stop-opacity=".1" /></linearGradient>
      <clipPath id="mcTubClip"><rect x="32" y="30" width="372" height="455" /></clipPath>
    </defs>
    <path d="M18 4 h400 l2 18 h-404z" fill="url(#mcTop)" />
    <rect x="16" y="20" width="404" height="4" fill="#4e575e" />
    <rect x="18" y="22" width="400" height="470" fill="url(#mcSteel)" />
    <rect x="18" y="22" width="400" height="470" fill="url(#mcShade)" />
    <g clip-path="url(#mcTubClip)">
      <rect x="32" y="30" width="372" height="455" fill="url(#mcTub)" />
      <rect x="32" y="30" width="372" height="260" class="dw-glow" fill="url(#mcGlow)" />
      <rect x="32" y="30" width="372" height="8" fill="#030a10" />
      ${beams}
      ${[104, 218, 332].map((x) => `<path class="dw-glow" d="M${x - 9} 40 l9 -6 9 6 -9 6z" fill="#e6fbff" />`).join("")}
      <g stroke="#a7c2d0" stroke-width="1.6" fill="none" opacity=".95">
        <path d="M38 140 v82 h360 v-82" /><line x1="38" y1="196" x2="398" y2="196" />${wires}
      </g>
      ${bigPlates}${slimPlates}${cutlery}
      <g stroke="#7d98a7" stroke-width="1.4" fill="none" opacity=".8">
        <path d="M38 330 v110 h360 v-110" />
        ${Array.from({ length: 21 }, (_, i) => `<line x1="${44 + i * 17.5}" y1="440" x2="${44 + i * 17.5}" y2="370" />`).join("")}
      </g>
      ${[0, 1, 2, 3, 4].map((i) => `<ellipse cx="${88 + i * 24}" cy="392" rx="13" ry="44" fill="url(#mcPlate)" opacity=".85" />`).join("")}
      <rect x="244" y="370" width="110" height="62" rx="10" fill="#9fc3d4" opacity=".7" />
      <rect class="dw-arm" x="118" y="456" width="200" height="8" rx="4" fill="#aabdc8" />
      <g class="dw-water">${jets.join("")}${drops}</g>
    </g>
    <g class="dw-door">
      <rect x="16" y="34" width="404" height="458" fill="none" />
      <g class="dw-door-panel">
        <rect x="18" y="104" width="400" height="388" fill="url(#mcSteel)" />
        <rect x="18" y="104" width="400" height="388" fill="url(#mcBrush)" />
        <rect x="18" y="104" width="400" height="388" fill="url(#mcShade)" />
      </g>
      <rect class="dw-door-glass" x="24" y="104" width="388" height="380" rx="3" fill="url(#mcGlass)" stroke="#dcf6ff" stroke-opacity=".55" stroke-width="2" />
      <rect x="16" y="34" width="404" height="9" rx="2" fill="url(#mcTop)" />
      <rect x="18" y="42" width="400" height="62" fill="url(#mcSteel)" />
      <rect x="18" y="42" width="400" height="62" fill="url(#mcShade)" />
      <g transform="translate(186 51)"><circle cx="5" cy="5" r="4.6" fill="none" stroke="#1d242a" stroke-width="1.3" /><path d="M3.2 2.4v5.2M6.8 2.4v5.2M3.2 5h3.6" stroke="#1d242a" stroke-width="1.1" /><text x="13" y="8.6" font-size="9.5" font-weight="700" fill="#1d242a" font-family="Arial,sans-serif" letter-spacing=".3">BOSCH</text></g>
      <rect x="116" y="66" width="206" height="17" rx="2" fill="#0a0f13" />
      <rect x="116" y="66" width="206" height="3" rx="1" fill="#2a333a" />
      <circle class="dw-led" cx="128" cy="75" r="1.8" /><circle class="dw-led" cx="137" cy="75" r="1.8" />
      <rect x="152" y="73" width="22" height="4" rx="1" fill="#1f2a32" /><rect x="282" y="72" width="30" height="6" rx="1" fill="#1a242b" />
      <rect x="80" y="74" width="16" height="2" fill="#69727a" /><rect x="342" y="74" width="16" height="2" fill="#69727a" />
      <path d="M116 90 h206 v6 q0 6 -6 6 h-194 q-6 0 -6 -6z" fill="#3a434a" />
      <rect x="120" y="90" width="198" height="3" fill="#1a2025" />
      <rect x="18" y="102" width="400" height="2" fill="#000" opacity=".25" />
      <rect x="18" y="486" width="400" height="6" fill="#48515a" />
    </g>
    <rect x="26" y="492" width="384" height="6" fill="#1b2126" />
    <rect x="26" y="498" width="384" height="40" fill="url(#mcSteel)" />
    <rect x="26" y="498" width="384" height="40" fill="url(#mcShade)" />
    <rect x="26" y="536" width="384" height="4" fill="#2e353b" />
  </svg>`;
}

class MarysiaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._selectedKey = MARYSIA_PROGRAMS[0].key;
    this._error = "";
    this._busy = false;
    this._lastSig = "";
    this._width = 0;
  }

  connectedCallback() {
    if (!this._ro && window.ResizeObserver) {
      this._ro = new ResizeObserver((entries) => {
        const w = entries[0]?.contentRect?.width || 0;
        if (Math.abs(w - this._width) > 0.5) { this._width = w; this._applyScale(); }
      });
      this._ro.observe(this);
    }
  }

  disconnectedCallback() { this._ro?.disconnect(); this._ro = null; }

  _applyScale() {
    const card = this.shadowRoot?.querySelector("ha-card");
    const wrap = this.shadowRoot?.querySelector(".wrap");
    const stage = this.shadowRoot?.querySelector(".stage");
    if (!card || !wrap || !stage) return;
    const w = this._width || this.clientWidth || MARYSIA_W;
    const compact = w < (Number(this._config?.compact_below) || 760);
    card.classList.toggle("compact", compact);
    if (compact) { stage.style.transform = ""; wrap.style.height = ""; return; }
    const scale = w / MARYSIA_W;
    stage.style.transform = `scale(${scale})`;
    wrap.style.height = `${MARYSIA_H * scale}px`;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Marysia: configuration must be an object");
    this._config = config;
    this._entities = { ...MARYSIA_DEFAULT_ENTITIES, ...(config.entities || {}) };
    if (Array.isArray(config.programs) && config.programs.length) {
      const n = config.programs.length;
      this._programs = config.programs.map((p, i) => {
        const base = MARYSIA_PROGRAMS.find((d) => marysiaNormalize(d.key) === marysiaNormalize(p.option || p.key));
        const label = p.label || base?.label || p.option || p.key;
        return {
          key: p.option || p.key || label,
          label,
          dial: p.dial || (p.label ? String(p.label).split("\n") : base?.dial || [label]),
          angle: Number.isFinite(p.angle) ? p.angle : base?.angle ?? Math.round((360 / n) * i),
          aliases: [p.option, p.key, p.label, ...(base?.aliases || [])].filter(Boolean),
        };
      });
    } else {
      this._programs = MARYSIA_PROGRAMS;
    }
    this._lastSig = "";
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    const key = this._matchProgram(this._entity("selected_program")?.state);
    if (key) this._selectedKey = key;
    const sig = Object.values(this._entities).map((id) => {
      const s = typeof id === "string" ? hass?.states?.[id] : null;
      return s ? `${s.state}|${s.attributes?.options?.length ?? ""}` : "-";
    }).join(";") + this._selectedKey;
    if (sig !== this._lastSig) { this._lastSig = sig; this._render(); }
  }

  getCardSize() { return 10; }
  getGridOptions() { return { columns: "full", min_columns: 6 }; }
  static getStubConfig() { return { name: "Marysia", model: "SMS4ENI06E" }; }

  _entity(key) {
    const id = this._entities?.[key];
    if (!id || typeof id !== "string") return null;
    return this._hass?.states?.[id] || null;
  }
  _state(key) { return String(this._entity(key)?.state ?? "").toLowerCase(); }
  _isAvailable(key) {
    const e = this._entity(key);
    return Boolean(e && !["unknown", "unavailable"].includes(String(e.state).toLowerCase()));
  }

  _matchProgram(value) {
    const n = marysiaNormalize(value);
    if (!n) return null;
    return this._programs?.find((p) => [p.key, p.label, ...(p.aliases || [])].some((a) => marysiaNormalize(a) === n))?.key || null;
  }
  _programFor(key) { return this._programs?.find((p) => p.key === key) || this._programs?.[0]; }
  _entityOption(entityKey, program) {
    const options = this._entity(entityKey)?.attributes?.options;
    if (!Array.isArray(options)) return null;
    const aliases = [program?.key, program?.label, ...(program?.aliases || [])].map(marysiaNormalize).filter(Boolean);
    return options.find((o) => aliases.includes(marysiaNormalize(o))) || null;
  }

  _opText(op) {
    return ({ inactive: "Nieaktywna", ready: "Gotowa", delayedstart: "Opóźniony start", run: "Zmywa", pause: "Wstrzymana",
      actionrequired: "Wymaga działania", finished: "Zakończona", error: "Błąd", aborting: "Zatrzymywanie" })[op] || "—";
  }

  _remainingTime() {
    const e = this._entity("finish_time");
    if (!e || ["unknown", "unavailable", ""].includes(String(e.state).toLowerCase())) return "—";
    const end = Date.parse(String(e.state));
    if (Number.isFinite(end)) {
      const m = Math.max(0, Math.round((end - Date.now()) / 60000));
      return m >= 60 ? `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min` : `${m} min`;
    }
    return String(e.state);
  }

  _dishwasherState() {
    if (this._state("door") === "open") return "open";
    if (this._state("operation_state") === "run") return "run";
    return "closed";
  }

  _canStart() {
    return this._state("power") === "on" && this._state("door") !== "open"
      && this._state("remote_control") === "on" && this._state("remote_start") === "on"
      && this._state("operation_state") === "ready"
      && Boolean(this._entity("active_program")) && this._state("active_program") !== "unavailable"
      && Boolean(this._entityOption("active_program", this._programFor(this._selectedKey)));
  }
  _canStop() {
    return this._isAvailable("stop") && ["run", "pause", "delayedstart", "actionrequired"].includes(this._state("operation_state"));
  }

  async _call(domain, service, data) {
    if (!this._hass) return;
    this._busy = true; this._error = ""; this._render();
    try { await this._hass.callService(domain, service, data); }
    catch (e) { this._error = e?.message || "Nie udało się wykonać polecenia."; }
    finally { this._busy = false; this._lastSig = ""; this._render(); }
  }

  async _selectProgram(program) {
    if (this._busy) return;
    const option = this._entityOption("selected_program", program);
    if (!option) { this._error = `Program „${program.label}” nie jest dostępny.`; this._render(); return; }
    this._selectedKey = program.key;
    await this._call("select", "select_option", { entity_id: this._entities.selected_program, option });
  }

  async _start() {
    if (!this._canStart()) return;
    const option = this._entityOption("active_program", this._programFor(this._selectedKey));
    if (!option) { this._error = "Wybrany program nie jest dostępny do uruchomienia."; this._render(); return; }
    await this._call("select", "select_option", { entity_id: this._entities.active_program, option });
  }

  _moreInfo(key) {
    const entityId = this._entities?.[key];
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  _toggleTile(key, label, icon) {
    const available = this._isAvailable(key);
    const on = key === "start_in_relative" ? available && Number(this._entity(key)?.state) > 0 : this._state(key) === "on";
    const lines = label.split("\n");
    return `<button class="tg" type="button" data-toggle="${key}" ${available && !this._busy ? "" : "disabled"} title="${available ? "" : "Niedostępne"}">
      ${marysiaIcon(icon)}<span class="tl ${lines.length === 1 ? "one" : ""}">${lines.map((s) => this._escape(s)).join("<br>")}</span><span class="sw ${on ? "on" : ""}"></span></button>`;
  }

  _render() {
    if (!this._config || !this.shadowRoot) return;
    const programs = this._programs;
    const program = this._programFor(this._selectedKey);
    const op = this._state("operation_state");
    const door = this._state("door");
    const powerOn = this._state("power") === "on";
    const connected = this._state("connectivity") === "on";
    const remoteControl = this._state("remote_control") === "on";
    const remoteStart = this._state("remote_start") === "on";
    const dwState = this._dishwasherState();

    const progRaw = Number(this._entity("progress")?.state);
    let progress = Number.isFinite(progRaw) ? Math.max(0, Math.min(100, progRaw)) : null;
    if (progress === null && ["ready", "finished"].includes(op)) progress = 100;

    let statusText = this._opText(op);
    if (!powerOn && this._isAvailable("power")) statusText = "Wyłączona";
    if (door === "open") statusText = "Uchylona";
    const iconKind = !powerOn ? ["idle", "power"]
      : door === "open" ? ["warn", "door"]
      : op === "run" ? ["run", "drop"]
      : op === "pause" ? ["warn", "pause"]
      : op === "delayedstart" ? ["run", "clock"]
      : ["error", "actionrequired", "aborting"].includes(op) ? ["err", "alert"]
      : op === "inactive" ? ["idle", "moon"]
      : ["", "check"];

    const doorText = ({ closed: "Zamknięte", locked: "Zablokowane", open: "Uchylone" })[door] || "—";
    const selIdx = Math.max(0, programs.findIndex((p) => p.key === this._selectedKey));
    const angle = program?.angle ?? 0;

    const progButtons = programs.map((p, i) => {
      const n = ((p.angle % 360) + 360) % 360;
      const a = (n * Math.PI) / 180;
      const side = n <= 20 || n >= 340 ? "top" : n < 140 ? "right" : n < 180 ? "bright" : n <= 220 ? "bleft" : "left";
      const x = 205 + Math.sin(a) * 118;
      const y = 178 - Math.cos(a) * 118;
      const disabled = !this._entityOption("selected_program", p) || this._busy;
      return `<button class="prog ${side} ${i === selIdx ? "on" : ""}" type="button" data-program="${i}" style="left:${x.toFixed(1)}px;top:${y.toFixed(1)}px" ${disabled ? "disabled" : ""} aria-label="${this._escape(p.label)}"><span class="pdot"></span><span class="pl">${p.dial.map((s) => this._escape(s)).join("<br>")}</span></button>`;
    }).join("");

    this.shadowRoot.innerHTML = `
      <style>${MARYSIA_STYLES}</style>
      <ha-card>
        <div class="wrap"><div class="stage">
          <div class="brand"><span class="logo">${MARYSIA_LOGO}</span><span class="bosch">BOSCH</span><span class="sep">•</span><span>HOME CONNECT</span></div>
          <div class="name">${this._escape(this._config.name || "Marysia")}</div>
          <div class="online ${connected ? "" : "off"}"><span class="dot"></span>${connected ? "online" : "offline"}</div>
          <div class="model">${this._escape(this._config.model || "SMS4ENI06E")}</div>
          <div class="machine" data-state="${dwState}" role="img" aria-label="Zmywarka: ${this._escape(statusText)}">${marysiaDishwasherSvg()}</div>
          <div class="dial" aria-label="Programy">
            <div class="ring"><button class="knob" id="knob" type="button" aria-label="Następny program" ${this._busy ? "disabled" : ""}><span class="needle" style="transform:rotate(${angle}deg)"></span></button></div>
            ${progButtons}
          </div>
          <div class="statusbox">
            <div class="shead"><div class="sicon ${iconKind[0]}">${marysiaIcon(iconKind[1])}</div><div class="stext">${this._escape(statusText)}</div></div>
            <div class="pbar"><div class="track" role="progressbar" aria-valuenow="${progress ?? 0}" aria-valuemin="0" aria-valuemax="100"><div class="fill" style="width:${progress ?? 0}%"></div></div><div class="pct">${progress === null ? "—" : Math.round(progress) + "%"}</div></div>
            <div class="tiles3">
              <div class="tile">${marysiaIcon("doc")}<small>Program</small><strong>${this._escape(program?.label || "—")}</strong></div>
              <div class="tile">${marysiaIcon(door === "locked" ? "lock" : "unlock")}<small>Drzwi</small><strong>${this._escape(doorText)}</strong></div>
              <div class="tile">${marysiaIcon("clock")}<small>Pozostały czas</small><strong>${this._escape(this._remainingTime())}</strong></div>
            </div>
          </div>
          <div class="actions">
            <button class="act power" id="power" type="button" ${!this._isAvailable("power") || this._busy ? "disabled" : ""}>${marysiaIcon("power")}<span class="lbl">Zasilanie</span><span class="sw ${powerOn ? "on" : ""}"></span></button>
            <button class="act start" id="start" type="button" ${!this._canStart() || this._busy ? "disabled" : ""}>${marysiaIcon("play")}<span class="lbl">Start</span></button>
            <button class="act stop" id="stop" type="button" ${!this._canStop() || this._busy ? "disabled" : ""}><span class="sq"></span><span class="lbl">Stop</span></button>
          </div>
          <div class="toggles">
            ${this._toggleTile("child_lock", "Blokada\ndziecięca", "lock")}
            ${this._toggleTile("half_load", "Połowa\nzaładunku", "half")}
            ${this._toggleTile("hygiene", "Hygiene +", "sparkle")}
            ${this._toggleTile("vario_speed", "VarioSpeed +", "gauge")}
            ${this._toggleTile("eco_dry", "Uchylanie drzwi", "door")}
            ${this._toggleTile("start_in_relative", "Opóźniony start", "clock")}
          </div>
          <div class="err-msg" role="alert">${this._escape(this._error)}</div>
          <div class="footer">
            ${this._foot("hc", "Home Connect", connected ? "Online" : "Offline", connected)}
            ${this._foot("phone", "Zdalne sterowanie", remoteControl ? "Włączone" : "Wyłączone", remoteControl)}
            ${this._foot("play", "Zdalny start", remoteStart ? "Włączony" : "Wyłączony", remoteStart)}
          </div>
        </div></div>
      </ha-card>`;

    this._applyScale();

    const $ = (s) => this.shadowRoot.querySelector(s);
    this.shadowRoot.querySelectorAll(".prog").forEach((b) => b.addEventListener("click", () => {
      const p = programs[Number(b.dataset.program)];
      if (p) this._selectProgram(p);
    }));
    $("#knob")?.addEventListener("click", () => {
      const norm = (p) => ((p.angle % 360) + 360) % 360;
      const sorted = [...programs].sort((a, b) => norm(a) - norm(b));
      const cur = sorted.findIndex((p) => p.key === this._selectedKey);
      for (let s = 1; s <= sorted.length; s++) {
        const next = sorted[(cur + s) % sorted.length];
        if (this._entityOption("selected_program", next)) { this._selectProgram(next); break; }
      }
    });
    $("#start")?.addEventListener("click", () => this._start());
    $("#stop")?.addEventListener("click", () => { if (this._entities.stop) this._call("button", "press", { entity_id: this._entities.stop }); });
    $("#power")?.addEventListener("click", () => { if (this._entities.power) this._call("switch", "toggle", { entity_id: this._entities.power }); });
    this.shadowRoot.querySelectorAll(".tg").forEach((b) => b.addEventListener("click", () => {
      const key = b.dataset.toggle;
      if (key === "start_in_relative") this._moreInfo(key);
      else this._call("switch", "toggle", { entity_id: this._entities[key] });
    }));
  }

  _foot(icon, label, value, ok) {
    return `<div class="fi ${ok ? "" : "off"}"><span class="fic">${marysiaIcon(icon)}</span><div class="ft">${this._escape(label)}<b>${this._escape(value)}</b></div><span class="dot"></span></div>`;
  }

  _escape(v) {
    return String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
}

if (!customElements.get("marysia-card")) customElements.define("marysia-card", MarysiaCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "marysia-card")) {
  window.customCards.push({
    type: "marysia-card",
    name: "Marysia — zmywarka Bosch",
    description: "Home Connect: programy, status i sterowanie zmywarką Bosch.",
    preview: true,
  });
}
console.info(`%c MARYSIA %c v${MARYSIA_VERSION} `, "background:#e8001c;color:#fff;font-weight:700", "background:#1eb6ec;color:#fff");
