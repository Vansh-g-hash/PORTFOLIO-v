/* A small, dependency-free router and UI layer. All editable copy is in data.js. */
(() => {
  'use strict';
  const d = window.PORTFOLIO;
  const app = document.getElementById('app');
  const dialog = document.getElementById('dialog-root');
  if (!app || !dialog || !d) return;

  const safe = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const glyph = (type, size = 20) => {
    const paths = {
      play:'<path d="m8 5 12 7-12 7z" fill="currentColor" stroke="none"/>',
      info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8v.1"/>',
      back:'<path d="m15 18-6-6 6-6"/>',
      right:'<path d="m9 18 6-6-6-6"/>',
      down:'<path d="m6 9 6 6 6-6"/>',
      close:'<path d="M18 6 6 18M6 6l12 12"/>',
      search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
      github:'<path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.8a3.2 3.2 0 0 0-.9-2.5c3-.3 6.1-1.4 6.1-6.8A5.3 5.3 0 0 0 18.7 5 5 5 0 0 0 18.6 1S17.4.7 15 2.9a12.1 12.1 0 0 0-6 0C6.6.7 5.4 1 5.4 1A5 5 0 0 0 5.3 5a5.3 5.3 0 0 0-1.5 3.9c0 5.4 3.1 6.5 6.1 6.8A3.2 3.2 0 0 0 9 18.2V22"/>',
      external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/>',
      mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/>',
      file:'<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v6h5M9 12h8m-8 4h8"/>',
      briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
      code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/>',
      check:'<path d="m5 12 5 5L20 7"/>',
      terminal:'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 8 4 4-4 4m6 0h6"/>',
      compass:'<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5z"/>',
      linkedin:'<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v8m0-12v.2M12 18v-8m0 3a3 3 0 0 1 6 0v5"/>',
      layers:'<path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/>',
      award:'<circle cx="12" cy="8" r="5"/><path d="m8 12-1 10 5-3 5 3-1-10"/>',
      calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
    };
    return `<svg class="i" aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[type] || paths.info}</svg>`;
  };
  const logo = (large = false) => `<span class="brand${large ? ' brand-large' : ''}" aria-label="Vanshflix"><span class="brand-v">V</span>ANSH<span class="brand-f">FLIX</span></span>`;
  const links = d.social;
  const path = () => location.pathname.replace(/\/+$/, '') || '/';
  const selectedRole = () => sessionStorage.getItem('vanshflix-role') || 'developer';
  const roleObj = () => d.profiles.find(p => p.id === selectedRole()) || d.profiles[1];
  const openNew = (url, label, iconName = 'external') => `<a class="small-action" href="${safe(url)}" target="_blank" rel="noopener noreferrer">${glyph(iconName,16)} ${safe(label)} ${glyph('external',12)}</a>`;
  const routeLink = (route, label, className = '') => `<a href="${route}" data-route class="${className}">${label}</a>`;
  const poster = p => `/assets/posters/${p.image}`;

  let timer = null;
  function navigate(url, replace = false) {
    if (timer) { clearTimeout(timer); timer = null; }
    closeDialog();
    if (replace) history.replaceState({},'',url); else history.pushState({},'',url);
    render(); window.scrollTo({top:0,behavior:'instant'});
  }

  function intro() {
    app.innerHTML = `<main class="intro" aria-label="Portfolio introduction">
      <div class="intro-glow"></div><div class="intro-center"><div class="intro-v">V</div><div class="intro-line">A VANSH ORIGINAL</div><h1>Every developer has a story.</h1><p>Here's mine.</p></div>
      <button class="intro-skip" data-intro-skip>Skip intro ${glyph('right',17)}</button>
    </main>`;
    timer = setTimeout(() => { sessionStorage.setItem('vanshflix-intro','1'); navigate('/browse',true); }, 2400);
  }

  function browse() {
    document.title = "Who's Watching? — Vanshflix";
    app.innerHTML = `<main class="browse">
      <div class="browse-top">${logo()}</div>
      <div class="browse-body"><p class="eyebrow center">YOUR PERSONAL FRONT ROW</p><h1>Who's watching?</h1><p class="browse-sub">Choose how you want to explore my world.</p>
      <div class="profiles">${d.profiles.map(p => `<a href="/profile/${p.id}" data-route data-profile="${p.id}" class="profile-card">
        <div class="profile-art art-${p.color}"><span>${safe(p.icon)}</span><div class="profile-shine"></div></div>
        <div class="profile-name">${safe(p.name)}</div><div class="profile-caption">${safe(p.descriptor)}</div>
      </a>`).join('')}</div>
      <p class="browse-help">One story. Four different perspectives.</p></div>
      <div class="browse-foot">${logo()} <span>NOT A STREAMING SERVICE. A DEVELOPER PORTFOLIO.</span></div>
    </main>`;
  }

  function navbar(current = 'home') {
    const role = roleObj();
    const tabs = [['home','Home',`/profile/${selectedRole()}`],['projects','Projects','/projects'],['experience','Experience','/experience'],['skills','Skills','/skills'],['certifications','Certifications','/certifications'],['contact','Contact','/contact']];
    return `<header class="nav" id="site-nav"><div class="nav-wrap">${routeLink(`/profile/${selectedRole()}`,logo(),'nav-logo')}
      <nav class="nav-links" aria-label="Main navigation">${tabs.map(([key,label,url])=>routeLink(url,safe(label),current === key ? 'active':'' )).join('')}</nav>
      <div class="nav-actions"><button class="icon-button search-trigger" data-search title="Search portfolio" aria-label="Search portfolio">${glyph('search',21)}</button>
      <a class="nav-github" href="${links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">${glyph('github',20)}</a>
      <button class="nav-profile" data-change-profile title="Switch profile" aria-label="Switch profile"><span class="tiny-avatar art-${role.color}">${safe(role.icon)}</span><span class="nav-profile-text">${safe(role.name)}</span>${glyph('down',14)}</button></div></div></header>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="footer-inner"><div>${logo()}<p>Made with curiosity, code, and a little cinematic drama.</p></div><div class="footer-links">${openNew(links.github,'GitHub','github')}${openNew(links.linkedin,'LinkedIn','linkedin')}${openNew(links.leetcode,'LeetCode','code')}${routeLink('/contact','Contact')}</div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Vansh Gupta. Portfolio, not streaming.</span><span>Built to tell a real story — no invented stats.</span></div></div></footer>`;
  }

  function hero(role) {
    const iconFor = role.id === 'recruiter' ? 'briefcase' : role.id === 'stalker' ? 'terminal' : role.id === 'adventurer' ? 'compass' : 'code';
    return `<section class="feature-hero hero-${role.id}" aria-label="Featured introduction"><div class="hero-grid" aria-hidden="true"></div><div class="hero-noise"></div>
      <div class="hero-art" aria-hidden="true"><div class="hero-halo"></div><div class="hero-ring r-one"></div><div class="hero-ring r-two"></div><div class="hero-monogram">VG<span>.</span></div><div class="hero-art-label">VANSH ORIGINALS</div></div>
      <div class="hero-container"><div class="feature-eyebrow"><span class="red-n">V</span> SERIES <span class="eyebrow-divider"></span> ${safe(role.kicker)}</div>
        <h1 class="hero-title"><span>THE VANSH</span><br/><em>GUPTA</em><span class="hero-period">.</span></h1>
        <div class="hero-meta"><span class="match-text">NEW RELEASE</span><span>2026</span><span class="age-box">SWE</span><span>Full Stack · AI/ML</span></div>
        <h2 class="hero-subtitle">${safe(role.headline)}</h2><p class="hero-description">${safe(role.details)} ${safe(d.summary)}</p>
        <div class="hero-buttons">${routeLink('/projects',`${glyph('play',22)} Explore Projects`,'btn btn-white')}${routeLink('/experience',`${glyph('info',21)} More About Me`,'btn btn-glass')}</div>
        <div class="hero-mini">${glyph(iconFor,15)} ${safe(role.descriptor)} <span>•</span> ${safe(d.location)}</div>
      </div><div class="hero-fade"></div></section>`;
  }

  function projectCard(p, className = '') {
    return `<button class="poster-card ${className}" data-project="${safe(p.id)}" aria-label="View ${safe(p.name)} details"><div class="poster-cover"><img src="${poster(p)}" alt="${safe(p.name)} artwork" loading="lazy"/><span class="poster-rating">${safe(p.tag)}</span><span class="poster-play">${glyph('play',22)}</span></div><div class="poster-text"><strong>${safe(p.name)}</strong><small>${safe(p.genre)}</small></div></button>`;
  }
  function row(id,title,subtitle,contents) {
    return `<section class="shelf" aria-label="${safe(title)}"><div class="shelf-head"><div><h2>${safe(title)} <span>${glyph('right',19)}</span></h2>${subtitle ? `<p>${safe(subtitle)}</p>`:''}</div><div class="shelf-controls"><button data-scroll="${id}" data-direction="-1" aria-label="Scroll ${safe(title)} left">${glyph('back',18)}</button><button data-scroll="${id}" data-direction="1" aria-label="Scroll ${safe(title)} right">${glyph('right',18)}</button></div></div><div class="shelf-scroll" id="${id}">${contents}</div></section>`;
  }

  function experienceCard(e, i) {
    return `<article class="story-card"><div class="story-index">0${i+1}</div><div class="story-copy"><div class="pill">${safe(e.dates)}</div><h3>${safe(e.role)}</h3><h4>${safe(e.company)}</h4><p>${safe(e.description)}</p><div class="tags">${e.technologies.slice(0,3).map(x=>`<span>${safe(x)}</span>`).join('')}</div></div></article>`;
  }
  function skillCard(s,i) {
    return `<article class="skill-card skill-${i % 4}"><div class="skill-id">0${i+1} / SKILL FILE</div><h3>${safe(s.category)}</h3><div class="skill-list">${s.values.slice(0,5).map(x=>`<span>${safe(x)}</span>`).join('')}</div><span class="skill-spark">${['⌘','{ }','◈','✧'][i%4]}</span></article>`;
  }
  function certificateCard(c,i) {
    return `<article class="certificate-card"><div class="certificate-cover">${c.image ? `<img src="/assets/certificates/${safe(c.image)}" alt="${safe(c.name)} certificate" loading="lazy"/>` : `<div class="certificate-placeholder"><span>${glyph('award',42)}</span><strong>${safe(c.issuer)}</strong></div>`}<span class="certificate-num">${String(i+1).padStart(2,'0')}</span></div><div class="certificate-copy"><small>${safe(c.group)}</small><h3>${safe(c.name)}</h3><p>${safe(c.issuer)}</p></div></article>`;
  }

  function resumePromo() {
    return `<section class="resume-promo"><div><p class="eyebrow">THE FULL STORY</p><h2>Want the director's cut?</h2><p>Experience, education, and skills — all in one place.</p></div><a href="${safe(d.resume)}" target="_blank" rel="noopener noreferrer" class="btn btn-white">${glyph('file',19)} Open My Resume</a></section>`;
  }
  function contactStripe() {
    return `<section class="contact-stripe"><div><span class="eyebrow">COMING UP NEXT</span><h2>Let's build something together.</h2><p>Have a project, question, or opportunity? I'd love to hear about it.</p></div>${routeLink('/contact',`Get in Touch ${glyph('right',19)}`,'btn btn-red')}</section>`;
  }

  function stalkerPanel() {
    const logs = [
      ['SYS','Initializing developer profile'],['OK','Portfolio assets loaded'],['GIT','github.com/Vansh-g-hash'],['LINK','leetcode.com/u/9iiNaN50z5'],['STACK','React / Node.js / Python'],['STACK','Computer Vision / NLP / ML'],['LOC','New Delhi, India'],['INFO','Viewing public project information only'],['OK','No fabricated statistics attached']
    ];
    return `<section class="terminal-section"><div class="terminal-head"><span><i></i><i></i><i></i></span><strong>vansh@portfolio: ~</strong><span class="terminal-state">● PUBLIC ACCESS</span></div><div class="terminal-content"><p class="term-command">$ whoami <span>--verbose</span></p><h2>VANSH_GUPTA<span class="cursor-blink">_</span></h2><p class="term-sub">software_engineer / full_stack / ai_ml</p><div class="terminal-logs">${logs.map(([type,message],i)=>`<div style="--line:${i}"><span class="log-time">[${String(i).padStart(2,'0')}:00]</span><span class="log-type">${type}</span><span>${safe(message)}</span></div>`).join('')}</div><div class="terminal-end">$ explore ${routeLink('/projects','./projects')} ${routeLink('/skills','./skills')} <span class="cursor-blink">▌</span></div></div></section>`;
  }

  function dashboard() {
    const role = roleObj();
    document.title = `${role.name} — Vanshflix`;
    const preferred = role.id === 'recruiter' ? d.projects.filter(p=> ['healthguard-ai','furnivision-ai','aura-ai-chatbot'].includes(p.id)) : role.id === 'adventurer' ? [...d.projects].reverse() : d.projects;
    const rowProjects = [...preferred, ...d.projects.filter(p=>!preferred.includes(p))];
    app.innerHTML = `${navbar('home')}${hero(role)}<main class="dashboard-content">
      ${role.id==='stalker' ? stalkerPanel() : ''}
      ${row('featured-row',role.id === 'recruiter' ? 'Featured Work for Recruiters' : 'Trending Projects','REAL PROJECTS. REAL CODE. REAL EXPERIENCES.',rowProjects.map(p=>projectCard(p)).join(''))}
      ${row('experience-row','The Career Collection','WORK EXPERIENCE & PROFESSIONAL CHAPTERS',d.experience.map(experienceCard).join(''))}
      ${row('skills-row','Top Picks in My Tech Stack','TOOLS AND TECHNOLOGIES I WORK WITH',d.skills.map(skillCard).join(''))}
      ${resumePromo()}
      ${row('cert-row','Awards & Learning','CERTIFICATES FROM MY ORIGINAL PORTFOLIO',d.certifications.map(certificateCard).join(''))}
      <section class="coding-links"><div><span class="eyebrow">BEYOND THE SCREEN</span><h2>Find me where the code lives.</h2><p>See coding activity on the source platforms. No estimated or hardcoded activity counts.</p></div><div class="coding-actions">${openNew(links.github,'GitHub Profile','github')}${openNew(links.leetcode,'LeetCode Profile','code')}</div></section>
      ${contactStripe()}</main>${footer()}`;
  }

  function pageHeader(eyebrow,title,description) {
    return `<section class="page-header"><div class="page-halo"></div><div class="page-header-inner"><div class="page-eyebrow"><span class="red-n">V</span> ${safe(eyebrow)}</div><h1>${safe(title)}</h1><p>${safe(description)}</p></div></section>`;
  }
  function shell(active,content) { app.innerHTML=`${navbar(active)}<main class="inner-page">${content}</main>${footer()}`; }

  function projectsPage() {
    document.title='Projects — Vanshflix';
    shell('projects',`${pageHeader('ORIGINALS COLLECTION','Projects Worth Watching','A collection of real projects in AI, machine learning, and web development. Click any title for the full story.')}
      <section class="page-container"><div class="filter-bar" role="group" aria-label="Filter projects"><button class="filter-btn selected" data-filter="all">All Episodes <span>${d.projects.length}</span></button><button class="filter-btn" data-filter="AI">AI / Computer Vision</button><button class="filter-btn" data-filter="Machine Learning">Machine Learning</button><button class="filter-btn" data-filter="Frontend">Web Apps</button></div><div class="projects-grid" id="projects-grid">${d.projects.map(p=>projectCard(p,'large')).join('')}</div></section>${contactStripe()}`);
  }
  function experiencePage() {
    document.title='Experience — Vanshflix';
    shell('experience',`${pageHeader('THE CAREER EDIT','The Experience Timeline','Each chapter taught me something about building software, working with teams, and solving real problems.')}
      <section class="page-container"><div class="timeline">${d.experience.map((e,i)=>`<article class="timeline-entry"><div class="timeline-number">0${i+1}<span></span></div><div class="timeline-body"><div class="timeline-dates">${safe(e.dates)} · ${safe(e.location)}</div><h2>${safe(e.role)}</h2><h3>${safe(e.company)}</h3><p>${safe(e.description)}</p><div class="tags">${e.technologies.map(t=>`<span>${safe(t)}</span>`).join('')}</div></div></article>`).join('')}</div>
      <div class="education-card"><div><span class="eyebrow">ACADEMIC CHAPTER</span><h2>${safe(d.education.degree)}</h2><h3>${safe(d.education.school)}</h3><p>${safe(d.education.location)}</p></div><div class="edu-right"><strong>${safe(d.education.dates)}</strong><span>${safe(d.education.grade)}</span></div></div></section>${resumePromo()}`);
  }
  function skillsPage() {
    document.title='Skills — Vanshflix';
    shell('skills',`${pageHeader('THE TECH STACK','Tools of the Trade','Languages, frameworks, models, and platforms from my existing portfolio and technical background.')}
      <section class="page-container"><div class="skills-grid">${d.skills.map((s,i)=>`<article class="skill-detail skill-${i%4}"><div class="skill-id">EPISODE ${String(i+1).padStart(2,'0')}</div><h2>${safe(s.category)}</h2><div class="skill-cloud">${s.values.map(v=>`<span>${safe(v)}</span>`).join('')}</div></article>`).join('')}</div></section>${contactStripe()}`);
  }
  function certificationsPage() {
    document.title='Certifications — Vanshflix';
    shell('certifications',`${pageHeader('THE LEARNING LIBRARY','Milestones & Certificates','Courses, simulations, and certificates documented in my previous portfolio and resume.')}
      <section class="page-container"><div class="certifications-grid">${d.certifications.map(certificateCard).join('')}</div></section>`);
  }
  function contactPage() {
    document.title='Contact — Vanshflix';
    shell('contact',`${pageHeader('THE NEXT EPISODE','Let’s Connect','No cliffhangers. Just a good conversation about an opportunity, a project, or a new idea.')}
      <section class="page-container contact-layout"><div class="contact-message"><div class="contact-redline"></div><span class="eyebrow">OPEN THE CONVERSATION</span><h2>Got a story in mind?</h2><p>I'm happy to talk software engineering, full-stack projects, AI/ML and new ideas. The email button opens your email app directly — no pretend contact-form submissions.</p><a class="btn btn-red" href="mailto:${safe(d.email)}?subject=Hello%20Vansh%20%E2%80%94%20Let's%20Connect">${glyph('mail',18)} Send an Email</a><div class="contact-location">${safe(d.location)}</div></div><div class="contact-socials"><h3>Find Me Online</h3>${[['github','GitHub',links.github],['linkedin','LinkedIn',links.linkedin],['code','LeetCode',links.leetcode],['external','Instagram',links.instagram]].map(([ico,label,url])=>`<a href="${safe(url)}" target="_blank" rel="noopener noreferrer">${glyph(ico,22)} <span>${safe(label)}</span>${glyph('external',17)}</a>`).join('')}<div class="contact-mail">${glyph('mail',18)} ${safe(d.email)}</div></div></section>`);
  }

  function closeDialog() { dialog.innerHTML='';document.body.classList.remove('dialog-open'); }
  function openProject(id) {
    const p = d.projects.find(p=>p.id===id); if (!p) return;
    dialog.innerHTML=`<div class="dialog-backdrop" data-backdrop><section class="project-modal" role="dialog" aria-modal="true" aria-label="${safe(p.name)} details">
      <button class="modal-close" data-close aria-label="Close details">${glyph('close',24)}</button>
      <div class="modal-cover"><img src="${poster(p)}" alt="${safe(p.name)} artwork"/><div class="modal-cover-fade"></div><div class="modal-cover-text"><div class="modal-original">V <span>ORIGINAL SERIES</span></div><h2>${safe(p.name)}</h2><p>${safe(p.subtitle)}</p></div></div>
      <div class="modal-body"><div class="modal-cta"><div class="hero-meta"><span class="match-text">FEATURED PROJECT</span><span>${safe(p.year)}</span><span class="age-box">CODE</span><span>${safe(p.genre)}</span></div><div class="modal-links">${p.live?openNew(p.live,'Live Demo','play'):''}${p.github?openNew(p.github,'Source Code','github'):''}</div></div><p>${safe(p.description)}</p><div class="modal-columns"><div><h3>Inside This Project</h3><ul>${p.points.map(x=>`<li>${glyph('check',15)} ${safe(x)}</li>`).join('')}</ul></div><div><h3>Tech Stack</h3><div class="tags">${p.stack.map(x=>`<span>${safe(x)}</span>`).join('')}</div></div></div></div>
    </section></div>`;
    document.body.classList.add('dialog-open');dialog.querySelector('[data-close]')?.focus();
  }
  function openSearch() {
    dialog.innerHTML=`<div class="dialog-backdrop" data-backdrop><section class="search-panel" role="dialog" aria-modal="true" aria-label="Search portfolio"><div class="search-panel-top">${glyph('search',23)}<input id="search-input" placeholder="Search projects, tech, experience..." aria-label="Search projects, tech and experience" autocomplete="off"/><button data-close aria-label="Close search">${glyph('close',22)}</button></div><div id="search-results" class="search-results"></div></section></div>`;
    document.body.classList.add('dialog-open');dialog.querySelector('input')?.focus();searchResults('');
  }
  function searchResults(value) {
    const term = value.trim().toLowerCase();
    const list = d.projects.filter(p=>(p.name+' '+p.description+' '+p.stack.join(' ')).toLowerCase().includes(term));
    const xp = d.experience.filter(e=>(e.company+' '+e.role).toLowerCase().includes(term));
    const sl = d.skills.filter(s=>(s.category+' '+s.values.join(' ')).toLowerCase().includes(term));
    const target = document.getElementById('search-results'); if(!target)return;
    target.innerHTML = `<div class="search-hint">${term ? `RESULTS FOR “${safe(value)}”` : 'POPULAR TITLES'}</div>${list.map(p=>`<button class="search-item" data-project="${safe(p.id)}"><img src="${poster(p)}" alt=""/><span><b>${safe(p.name)}</b><small>${safe(p.genre)}</small></span>${glyph('right',18)}</button>`).join('')}${xp.map(e=>`<a class="search-item" href="/experience" data-route>${glyph('briefcase',26)} <span><b>${safe(e.company)}</b><small>${safe(e.role)}</small></span>${glyph('right',18)}</a>`).join('')}${sl.map(s=>`<a class="search-item" href="/skills" data-route>${glyph('code',26)} <span><b>${safe(s.category)}</b><small>${safe(s.values.slice(0,3).join(' · '))}</small></span>${glyph('right',18)}</a>`).join('')}${!(list.length+xp.length+sl.length)?'<p class="no-results">No results. Try Python, React, AI, or a project title.</p>':''}`;
  }

  function render() {
    closeDialog();
    const url = path();
    if(url === '/' && !sessionStorage.getItem('vanshflix-intro')) { intro();return; }
    if (url === '/' || url === '/browse') { browse(); return; }
    const found = url.match(/^\/profile\/(recruiter|developer|stalker|adventurer)$/);
    if(found) { sessionStorage.setItem('vanshflix-role',found[1]); dashboard();return; }
    if(url==='/projects'){projectsPage();return;}
    if(url==='/experience'){experiencePage();return;}
    if(url==='/skills'){skillsPage();return;}
    if(url==='/certifications'){certificationsPage();return;}
    if(url==='/contact'){contactPage();return;}
    navigate('/browse',true);
  }

  document.addEventListener('click', e=>{
    const a = e.target.closest('[data-route]');
    if(a && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button===0){ e.preventDefault();navigate(a.getAttribute('href'));return; }
    if(e.target.closest('[data-intro-skip]')) {sessionStorage.setItem('vanshflix-intro','1');navigate('/browse',true);return;}
    if(e.target.closest('[data-change-profile]')) {navigate('/browse');return;}
    if(e.target.closest('[data-search]')) {openSearch();return;}
    if(e.target.closest('[data-close]') || e.target.matches('[data-backdrop]')) {closeDialog();return;}
    const project = e.target.closest('[data-project]'); if(project){openProject(project.dataset.project);return;}
    const arrow = e.target.closest('[data-scroll]'); if(arrow){const el = document.getElementById(arrow.dataset.scroll);if(el) el.scrollBy({left:Number(arrow.dataset.direction)*Math.min(el.clientWidth*.85,700),behavior:'smooth'});return;}
    const filter = e.target.closest('[data-filter]'); if(filter){
      document.querySelectorAll('[data-filter]').forEach(btn=>btn.classList.toggle('selected',btn===filter));
      const category=filter.dataset.filter;
      const items=d.projects.filter(p=> category==='all' || (category==='AI' && p.id==='furnivision-ai') || (category==='Machine Learning' && (p.genre.includes('Machine Learning')||p.genre.includes('NLP'))) || (category==='Frontend' && p.genre.includes('Frontend')) || (category==='AI' && (p.genre.includes('AI') || p.genre.includes('Computer Vision'))));
      const grid=document.getElementById('projects-grid');if(grid)grid.innerHTML=items.map(p=>projectCard(p,'large')).join('');return;
    }
  });
  document.addEventListener('input',e=>{if(e.target.id==='search-input')searchResults(e.target.value);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDialog();}});
  window.addEventListener('popstate',render);
  window.addEventListener('scroll',()=>{const nav=document.getElementById('site-nav');if(nav) nav.classList.toggle('scrolled',window.scrollY>30);},{passive:true});
  render();
})();
