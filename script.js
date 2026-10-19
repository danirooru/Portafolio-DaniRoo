'use strict';
const grid=document.querySelector('#project-grid');
const filters=document.querySelector('.filters');
const count=document.querySelector('#project-count');
const projectDialog=document.querySelector('#project-dialog');
const cvDialog=document.querySelector('#cv-dialog');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let opener=null;
function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
function image(data,lazy=true){const img=element('img');img.src=data.src;img.alt=data.alt;img.width=data.width;img.height=data.height;img.loading=lazy?'lazy':'eager';img.decoding='async';return img;}
function renderProjects(category='Todos'){
 const selected=PROJECTS.filter(p=>category==='Todos'||p.category===category);
 grid.replaceChildren();
 for(const p of selected){
  const card=element('button','project-card');card.type='button';card.dataset.category=p.category;card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label',`Ver proyecto ${p.name}, ${p.category}`);
  const media=element('div','card-image');
  if(p.id===8){media.classList.add('sky-cover');media.append(galleryArtwork(p,p.images[p.cover],p.cover));}
  else media.append(image(p.images[p.cover]));
  const body=element('div','card-body');const top=element('div','card-topline');top.append(element('span','card-category',p.category),element('span','','2025–2026'));
  const title=element('span','card-title',p.name);title.style.color=p.color;
  const foot=element('div','card-footer');foot.append(element('span','',`Ver proyecto · ${String(p.images.length).padStart(2,'0')} imágenes`));const arrow=element('span','card-arrow','↗');arrow.setAttribute('aria-hidden','true');foot.append(arrow);
  body.append(top,title,foot);card.append(media,body);card.addEventListener('click',()=>openProject(p,card));grid.append(card);
 }
 count.textContent=`${selected.length} proyectos${category==='Todos'?' en seis categorías':` · ${category}`}`;
}
for(const cat of ['Todos','Marca','Empaque','Modelado 3D','Ilustraciones','Campaña','UX/UI']){
 const button=element('button','filter',cat);button.type='button';button.setAttribute('aria-pressed',String(cat==='Todos'));
 button.addEventListener('click',()=>{filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));renderProjects(cat);});filters.append(button);
}
// Tighten only the blonde character's transparent margins; retain the original artwork.
function galleryArtwork(p,im,index){
 const crop=p.id===8?{0:[110,391,964,990],2:[363,409,1065,1014]}[index]:null;
 if(!crop)return image(im,index>1);
 const ns='http://www.w3.org/2000/svg';
 const art=document.createElementNS(ns,'svg');
 art.setAttribute('class','sky-character');art.setAttribute('viewBox',crop.join(' '));
 art.setAttribute('width',crop[2]);art.setAttribute('height',crop[3]);
 art.setAttribute('role','img');art.setAttribute('aria-label',im.alt);
 const original=document.createElementNS(ns,'image');original.setAttribute('href',im.src);
 original.setAttribute('width',im.width);original.setAttribute('height',im.height);
 art.append(original);return art;
}
function openProject(p,trigger){
 opener=trigger;const content=document.querySelector('#dialog-content');content.replaceChildren();
 const intro=element('div','dialog-intro');intro.append(element('span','eyebrow',p.category));const heading=element('h2','',p.name);heading.id='dialog-title';heading.style.color=p.color;intro.append(heading,element('p','','2025–2026'));
 const description=element('div','dialog-description');description.append(element('p','',p.description));
 const masonry=[1,2,6,7].includes(p.id);
 const johnny=[6,7].includes(p.id);
 const gallery=element('div',`dialog-gallery${p.category==='UX/UI'?' phones':''}${masonry?' masonry-gallery':''}${p.id===10?' qatar-gallery':''}${[3,9].includes(p.id)?' full-width-pair':''}`);
 const columns=masonry?element('div',johnny?'johnny-columns':'masonry-columns'):null;
 const left=johnny?element('div','johnny-column'):null;
 const right=johnny?element('div','johnny-column'):null;
 if(johnny)columns.append(left,right);
 const last=p.images[p.images.length-1];
 let leftHeight=johnny?last.height/last.width:0,rightHeight=0;
 p.images.forEach((im,i)=>{
  const figure=element('figure');figure.append(galleryArtwork(p,im,i),element('figcaption','',`${p.name} · ${String(i+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')}`));
  if(johnny&&i>0){
   if(i===p.images.length-1)left.append(figure);
   else if(leftHeight<=rightHeight){left.append(figure);leftHeight+=im.height/im.width;}
   else{right.append(figure);rightHeight+=im.height/im.width;}
  }else if(masonry&&i>0)columns.append(figure);else gallery.append(figure);
 });
 if(columns)gallery.append(columns);
 content.append(intro,description,gallery);projectDialog.showModal();projectDialog.scrollTop=0;document.body.classList.add('dialog-open');document.querySelector('.close-dialog').focus();
}
function closeDialog(dialog){dialog.close();}
for(const dialog of [projectDialog,cvDialog]){
 dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus();});
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog(dialog);});
}
document.querySelector('.close-dialog').addEventListener('click',()=>closeDialog(projectDialog));
document.querySelectorAll('.cv-button').forEach(b=>b.addEventListener('click',()=>{opener=b;cvDialog.showModal();document.body.classList.add('dialog-open');}));
document.querySelectorAll('.close-cv').forEach(b=>b.addEventListener('click',()=>closeDialog(cvDialog)));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
matchMedia('(min-width:1180px)').addEventListener('change',closeMenu);
const sections=[...document.querySelectorAll('main>section[id]')];
const navLinks=[...nav.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(!visible.length)return;navLinks.forEach(a=>{if(a.hash==='#'+visible[0].target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});},{rootMargin:'-20% 0px -45% 0px',threshold:0});sections.forEach(s=>observer.observe(s));
const motionButton=document.querySelector('.motion-toggle');let paused=false;
try{paused=localStorage.getItem('cv-motion-paused')==='true';}catch{}
function setMotion(){document.documentElement.classList.toggle('motion-paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Reanudar animaciones ▷':'Pausar animaciones Ⅱ';}
setMotion();motionButton.addEventListener('click',()=>{paused=!paused;setMotion();try{localStorage.setItem('cv-motion-paused',String(paused));}catch{}});
// Only a precise desktop pointer receives the custom cursor; touch keeps native behavior.
const fine=matchMedia('(hover:hover) and (pointer:fine)');const cursor=document.querySelector('.custom-cursor');
document.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches||e.pointerType==='touch')return;document.body.classList.add('cursor-ready');cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`;cursor.style.opacity='1';cursor.classList.toggle('is-link',Boolean(e.target.closest('a,button')));},{passive:true});
document.documentElement.addEventListener('pointerleave',()=>{cursor.style.opacity='0';});
document.addEventListener('pointerdown',e=>{if(reduced.matches||paused||e.button!==0||document.querySelector('dialog[open]'))return;const star=image({src:'assets/estrellados.webp',alt:'',width:44,height:44},false);star.className='click-burst';star.style.left=`${e.clientX}px`;star.style.top=`${e.clientY}px`;document.querySelector('.click-effects').append(star);star.addEventListener('animationend',()=>star.remove(),{once:true});setTimeout(()=>star.remove(),900);});
renderProjects();

// Keep the introduction on the same left edge as the centered portfolio title.
const heroTitle=document.querySelector('.hero-title');
const hero=document.querySelector('.hero');
function alignHero(){hero.style.setProperty('--hero-title-width',`${heroTitle.getBoundingClientRect().width}px`);}
new ResizeObserver(alignHero).observe(heroTitle);
document.fonts.ready.then(alignHero);
alignHero();
