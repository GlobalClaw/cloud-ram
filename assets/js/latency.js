(function(){
  const $ = (sel) => document.querySelector(sel);
  const out = $('#latency-out');
  const btn = $('#latency-btn');
  if(!out || !btn) return;

  const dcs = [
    {name:'Stockholm-1', base: 12},
    {name:'Frankfurt-1', base: 24},
    {name:'London-1', base: 20},
    {name:'New York-1', base: 70},
    {name:'Odessa-1', base: 38},
  ];

  function hash(s){
    let h=2166136261;
    for(let i=0;i<s.length;i++){
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h>>>0);
  }
  function pickDc(seed){
    // bias toward lower base, but vary by seed
    const idx = seed % dcs.length;
    // pick best of two for stability
    const a = dcs[idx];
    const b = dcs[(idx+2)%dcs.length];
    return (a.base <= b.base) ? a : b;
  }

  function fmt(n){
    return String(n).padStart(2,'0');
  }

  async function geo(){
    // best-effort, no key
    const r = await fetch('https://ipapi.co/json/', {cache:'no-store'});
    if(!r.ok) throw new Error('geo');
    const j = await r.json();
    return {
      city: j.city || 'your city',
      country: j.country_name || j.country || 'your country',
      ip: j.ip || null,
    };
  }

  function renderLoading(){
    out.innerHTML = '<div class="latency-line"><span class="muted">Pinging Cloud RAM…</span></div>';
  }

  function renderResult(loc, dc, ms){
    const seed = hash((loc.city||'')+'|'+(loc.country||''));
    const bw = 8 + (seed % 37); // 8..44
    const uplift = 1.3 + ((seed % 60) / 100); // 1.30..1.89

    out.innerHTML = `
      <div class="latency-grid">
        <div class="latency-kv"><div class="k">Detected location</div><div class="v">${loc.city}, ${loc.country}</div></div>
        <div class="latency-kv"><div class="k">Nearest memory region</div><div class="v">${dc.name}</div></div>
        <div class="latency-kv"><div class="k">Round-trip latency</div><div class="v"><strong>${ms} ms</strong></div></div>
        <div class="latency-kv"><div class="k">Effective bandwidth</div><div class="v">${bw} Gbps (vibes)</div></div>
        <div class="latency-kv"><div class="k">Memory speed uplift</div><div class="v">${uplift.toFixed(2)}× (marketing)</div></div>
      </div>
      <p class="fineprint">This is a parody demo. Latency numbers are generated, not measured.</p>
    `;
  }

  function renderError(){
    out.innerHTML = '<div class="latency-line"><span class="muted">Could not detect your location. Assuming Stockholm-1 at 17 ms.</span></div>' +
      '<p class="fineprint">This is a parody demo. Numbers are generated.</p>';
  }

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    renderLoading();
    try {
      const loc = await geo();
      const seed = hash((loc.city||'')+'|'+(loc.country||''));
      const dc = pickDc(seed);
      // generate plausible ms around base
      const jitter = (seed % 17) - 8; // -8..+8
      const ms = Math.max(5, dc.base + jitter);
      renderResult(loc, dc, ms);
    } catch(e){
      renderError();
    } finally {
      btn.disabled = false;
    }
  });
})();
