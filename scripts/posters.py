from pathlib import Path
from html import escape
out=Path(__file__).resolve().parents[1]/'assets/posters'
out.mkdir(exist_ok=True)
items=[
('furnivision','FURNIVISION','AI','740b26','fa4c5b', '''<g fill="none" stroke="#ffabb0" stroke-width="12" stroke-linejoin="round"><path d="M660 280v140h224V280a37 37 0 0 0-37-37H697a37 37 0 0 0-37 37Z"/><path d="M632 382h280v94H632z"/><path d="M668 476v53m202-53v53M772 244v227"/></g><rect x="618" y="212" width="320" height="290" rx="11" stroke="#ff5c62" stroke-width="4" fill="none" stroke-dasharray="14 11"/><text x="620" y="196" fill="#ffd6d8" font-size="20" font-family="monospace">DETECTION_01 · 96%</text>'''),
('aura','AURA','AI CHATBOT','18145d','9a76ff', '''<circle cx="765" cy="354" r="148" fill="none" stroke="#b8a5ff" stroke-width="3" opacity=".5"/><circle cx="765" cy="354" r="100" fill="none" stroke="#c9baff" stroke-width="2" opacity=".8"/><circle cx="765" cy="354" r="60" fill="#ab8cff" opacity=".2"/><path d="M722 354h86M765 310v88" stroke="#eee6ff" stroke-width="7" stroke-linecap="round"/><g fill="#cbbaff"><circle cx="610" cy="308" r="9"/><circle cx="930" cy="398" r="7"/><circle cx="814" cy="190" r="7"/></g>'''),
('healthguard','HEALTHGUARD','AI','083b36','4bdba4', '''<path d="M639 365h68l29-74 55 150 38-77h105" stroke="#9affd7" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M767 246c-110-85-230 53 0 226 230-173 110-311 0-226Z" fill="none" stroke="#68e6b8" opacity=".34" stroke-width="8"/>'''),
('digit','DIGIT LAB','NEURAL NETWORK','44300a','ffca5c', '''<text x="710" y="461" fill="#ffe2a5" opacity=".95" font-size="290" font-weight="900" font-family="Arial, sans-serif">8</text><g stroke="#ffd37f" opacity=".4" stroke-width="2"><path d="M630 230l230 210M880 240l-210 220M740 190v310"/></g>'''),
('spam','SPAM FILTER','NLP','08394b','47c9ec', '''<rect x="624" y="262" width="295" height="183" rx="20" stroke="#96edff" stroke-width="9" fill="none"/><path d="M633 277l136 110 140-110" stroke="#96edff" stroke-width="9" fill="none"/><circle cx="871" cy="432" r="63" fill="#47c9ec"/><path d="M848 431l15 16 29-36" stroke="#063b48" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'''),
('album','ALBUM FINDER','MUSIC DISCOVERY','352046','f17dbd', '''<circle cx="771" cy="351" r="162" fill="#13121b" stroke="#f4acd7" stroke-width="10"/><circle cx="771" cy="351" r="134" fill="none" stroke="#955c94" stroke-width="3"/><circle cx="771" cy="351" r="100" fill="none" stroke="#955c94" stroke-width="3"/><circle cx="771" cy="351" r="62" fill="#f17dbd"/><circle cx="771" cy="351" r="14" fill="#28132c"/><path d="M864 212l65 105" stroke="#ffd2ed" stroke-width="13" stroke-linecap="round"/>''')
]
for slug,title,tag,dark,accent,drawing in items:
 svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560" role="img" aria-label="{escape(title)} illustration">
 <defs><linearGradient id="g" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#{dark}"/><stop offset=".66" stop-color="#0a0a12"/><stop offset="1" stop-color="#{dark}"/></linearGradient><radialGradient id="gl"><stop stop-color="#{accent}" stop-opacity=".38"/><stop offset="1" stop-color="#{accent}" stop-opacity="0"/></radialGradient><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="white" stroke-opacity=".045" stroke-width="1"/></pattern></defs>
 <rect width="1000" height="560" fill="url(#g)"/><rect width="1000" height="560" fill="url(#grid)"/><ellipse cx="777" cy="361" rx="360" ry="310" fill="url(#gl)"/>
 <path d="M50 50h44M50 50v44M950 50h-44M950 50v44M50 510h44M50 510v-44M950 510h-44M950 510v-44" fill="none" stroke="#{accent}" stroke-opacity=".45" stroke-width="3"/>
 <text x="76" y="94" font-family="Arial,Helvetica,sans-serif" font-size="23" font-weight="700" letter-spacing="6" fill="#{accent}">VANSH ORIGINALS</text>
 <text x="76" y="357" font-family="Arial,Helvetica,sans-serif" font-size="59" font-weight="900" letter-spacing="-2" fill="white">{escape(title)}</text>
 <text x="78" y="401" font-family="Arial,Helvetica,sans-serif" font-size="20" letter-spacing="5" fill="#ffffff" opacity=".63">{escape(tag)}</text>
 <rect x="76" y="425" width="132" height="5" fill="#{accent}"/>
 {drawing}
 </svg>'''
 (out/(slug+'.svg')).write_text(svg)
