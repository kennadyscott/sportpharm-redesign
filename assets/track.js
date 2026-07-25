/* SportPharm WasabiRub store analytics — client-side tracking (prototype).
   Records pageviews, product clicks, add-to-carts, sessions/bounce into
   localStorage 'sp_analytics'. Seeds a realistic 30-day baseline so the admin
   dashboard is populated. Auto-tracks on cluster pages; on admin.html it only
   exposes window.SPA (no auto-track). In production this maps onto a real
   analytics pipeline (GA4 / Vercel Analytics / Payload events). */
(function(){
  var LS='sp_analytics';
  var PRODNAME={wasabirub:'WasabiRub',superhot:'Super Hot',icetrarub:'IcetraRub'};
  function todayStr(){return new Date().toISOString().slice(0,10);}

  function seed(){
    var pattern=[96,88,104,120,112,101,134,142,119,150,161,138,170,182,150,191,168,205,214,196,150,168,187,205,181,206,192,214,236,241];
    var daily={}, base=new Date(); base.setHours(0,0,0,0);
    for(var i=29;i>=0;i--){
      var t=new Date(base.getTime()-i*86400000).toISOString().slice(0,10);
      var v=pattern[29-i];
      daily[t]={visits:v,addToCart:Math.round(v*0.118)};
    }
    return {
      pageviews:{'Find Your Rub':1240,'WasabiRub landing':980,'WasabiRub PDP':1460,'Super Hot PDP':690,'IcetraRub PDP':530,'How It Works':720},
      products:{wasabirub:{views:1460,clicks:1180,addToCart:286},superhot:{views:690,clicks:560,addToCart:118},icetrarub:{views:530,clicks:470,addToCart:82}},
      funnel:{visits:4120,productViews:2680,addToCart:486,checkout:121},
      clicks:{'Shop WasabiRub':1180,'FIND YOUR RUB (nav)':940,'Shop Super Hot':560,'Add to Cart':486,'Shop IcetraRub':470,'HOW IT WORKS (nav)':410,'Explore product details':360,'Compare formulas':240,'Cross-sell: switch product':198,'For the Pros':156,'ATHLETE HUB (nav)':150},
      sessions:{total:4120,engaged:2513},
      cart:{added:486,checkout:121},
      daily:daily,
      seededAt:todayStr(),
      updated:todayStr()
    };
  }
  function load(){try{return JSON.parse(localStorage.getItem(LS));}catch(e){return null;}}
  function save(d){d.updated=new Date().toISOString();try{localStorage.setItem(LS,JSON.stringify(d));}catch(e){}}
  function ensure(){var d=load();if(!d||!d.funnel){d=seed();save(d);}return d;}
  function reset(){try{localStorage.removeItem(LS);}catch(e){}}

  function newSession(d){
    if(!sessionStorage.getItem('sp_sess')){
      sessionStorage.setItem('sp_sess','1');sessionStorage.setItem('sp_pv','0');sessionStorage.setItem('sp_eng','0');
      d.sessions.total++;return true;
    } return false;
  }
  function engage(d){ if(sessionStorage.getItem('sp_eng')!=='1'){sessionStorage.setItem('sp_eng','1');d.sessions.engaged++;} }

  function pageview(page,product){
    var d=ensure();
    if(page) d.pageviews[page]=(d.pageviews[page]||0)+1;
    d.funnel.visits++;
    var ts=todayStr(); d.daily[ts]=d.daily[ts]||{visits:0,addToCart:0}; d.daily[ts].visits++;
    newSession(d);
    var pv=(+sessionStorage.getItem('sp_pv')||0)+1; sessionStorage.setItem('sp_pv',String(pv));
    if(pv>=2) engage(d);
    if(product && d.products[product]){ d.products[product].views++; d.funnel.productViews++; }
    save(d);
  }
  function click(label){ if(!label) return; var d=ensure(); d.clicks[label]=(d.clicks[label]||0)+1; engage(d); save(d); }
  function productClick(product){ var d=ensure(); if(d.products[product]) d.products[product].clicks++; engage(d); save(d); }
  function addToCart(product){
    var d=ensure();
    if(product&&d.products[product]) d.products[product].addToCart++;
    d.funnel.addToCart++; d.cart.added++;
    var ts=todayStr(); d.daily[ts]=d.daily[ts]||{visits:0,addToCart:0}; d.daily[ts].addToCart++;
    engage(d); save(d);
  }
  window.SPA={seed:seed,load:load,ensure:ensure,reset:reset,pageview:pageview,click:click,productClick:productClick,addToCart:addToCart,PRODNAME:PRODNAME};

  /* ---- auto-track on store cluster pages ---- */
  var PAGE={
    'find-your-rub.html':{page:'Find Your Rub'},
    'wasabirub.html':{page:'WasabiRub landing'},
    'wasabirub-product.html':{page:'WasabiRub PDP',product:'wasabirub'},
    'superhot-product.html':{page:'Super Hot PDP',product:'superhot'},
    'icetrarub-product.html':{page:'IcetraRub PDP',product:'icetrarub'},
    'how-it-works.html':{page:'How It Works'}
  };
  var file=(location.pathname.split('/').pop()||'').toLowerCase();
  var meta=PAGE[file];
  function prodFromHref(h){ if(!h) return null; if(h.indexOf('wasabirub-product')>-1) return 'wasabirub'; if(h.indexOf('superhot-product')>-1) return 'superhot'; if(h.indexOf('icetrarub-product')>-1) return 'icetrarub'; return null; }
  if(meta){
    var cur=meta.product||null;
    var start=function(){
      pageview(meta.page,meta.product);
      document.addEventListener('click',function(e){
        var t=e.target; if(!t||!t.closest) return;
        if(t.closest('[data-add-to-cart]')){ addToCart(cur); click('Add to Cart'); return; }
        var a=t.closest('a[href]'); if(!a) return;
        var href=a.getAttribute('href')||'';
        var p=prodFromHref(href);
        if(p){
          productClick(p);
          if(a.classList.contains('details')) click('Explore product details');
          else if(a.closest('.switch')) click('Cross-sell: switch product');
          else if(a.closest('.rub-card')) click('Lineup card: '+PRODNAME[p]);
          else click('Shop '+PRODNAME[p]);
          return;
        }
        if(a.classList.contains('menu-top')){ click((a.textContent||'').replace(/[▾↗↓↑]/g,'').trim()+' (nav)'); return; }
        if(a.classList.contains('nav-cta')){ click('For the Pros'); return; }
        if(href.indexOf('#compare')>-1){ click('Compare formulas'); return; }
      },true);
    };
    if(document.readyState!=='loading') start(); else document.addEventListener('DOMContentLoaded',start);
  }
})();
