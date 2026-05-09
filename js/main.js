document.addEventListener('DOMContentLoaded',()=>{
  const loader=document.getElementById('loader');
  window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hidden'),400));
  setTimeout(()=>loader.classList.add('hidden'),3000);
  const revealEls=document.querySelectorAll('[data-reveal]');
  const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');revealObserver.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -60px 0px'});
  revealEls.forEach(el=>revealObserver.observe(el));
  const navbar=document.getElementById('navbar');
  window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>80)});
  const navToggle=document.querySelector('.nav-toggle');
  const navLinks=document.querySelector('.nav-links');
  if(navToggle){navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>navLinks.classList.remove('open')))}
  const pc=document.getElementById('hero-particles');
  if(pc){for(let i=0;i<Math.min(20,Math.floor(window.innerWidth/45));i++){const p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.width=p.style.height=(2+Math.random()*3)+'px';p.style.animationDelay=Math.random()*6+'s';p.style.animationDuration=(5+Math.random()*7)+'s';p.style.background=Math.random()>.5?'var(--cinnabar)':'var(--gold)';pc.appendChild(p)}}
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const t=this.getAttribute('href');if(t==='#')return;const s=document.querySelector(t);if(s){e.preventDefault();const o=parseInt(getComputedStyle(document.documentElement).scrollPaddingTop)||72;window.scrollTo({top:s.getBoundingClientRect().top+window.scrollY-o,behavior:'smooth'})}})});
  let rt;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight+100&&r.bottom>-100){el.classList.add('revealed');revealObserver.unobserve(el)}})},200)});
  setTimeout(()=>{revealEls.forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight+100&&r.bottom>-100){el.classList.add('revealed');revealObserver.unobserve(el)}})},600);
  console.log('%c🎨 上海漫画与中国漫画百年 %c Shanghai Manhua · 100 Years','background:#c0392b;color:#e8e0d0;font-size:16px;font-weight:bold;padding:8px 12px;border-radius:4px 0 0 4px;font-family:serif;','background:#1a1a2e;color:#e8e0d0;font-size:16px;padding:8px 12px;border-radius:0 4px 4px 0;font-family:sans-serif;');
  console.log('%c笔墨当随时代','color:#c0392b;font-size:14px;font-family:serif;');
});
