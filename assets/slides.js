
(()=>{const slides=[...document.querySelectorAll('.slide-page')], counter=document.querySelector('.counter'), progress=document.querySelector('.progress');
function idxFromHash(){const n=parseInt(location.hash.slice(1),10);return Number.isFinite(n)&&n>=1&&n<=slides.length?n-1:0}
let i=idxFromHash();
function show(n,push=true){i=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,j)=>s.classList.toggle('active',j===i));counter.textContent=`${i+1} / ${slides.length}`;progress.style.width=`${((i+1)/slides.length)*100}%`;document.title=`${slides[i].dataset.title||'第0回'} | 情報科学演習III`;if(push&&location.hash!==`#${i+1}`) history.pushState(null,'',`#${i+1}`)}
function next(){show(i+1)} function prev(){show(i-1)}
document.querySelector('[data-prev]').onclick=prev;document.querySelector('[data-next]').onclick=next;document.querySelector('[data-full]').onclick=()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()};document.querySelector('[data-presenter]').onclick=()=>window.open(location.pathname+location.hash,'presenter','width=1200,height=800');
addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' ','Enter'].includes(e.key)){e.preventDefault();next()} if(['ArrowLeft','PageUp','Backspace'].includes(e.key)){e.preventDefault();prev()} if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1)});addEventListener('hashchange',()=>show(idxFromHash(),false));show(i,false)})();
