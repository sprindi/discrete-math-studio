# Code-native diagrams for the lessons; labels are authored from reviewed examples.
def svg(content,view='0 0 480 370'):
 return '<figure class="lesson-figure"><svg viewBox="'+view+'" role="img" aria-label="'+content[0]+'">'+content[1]+'</svg><figcaption>'+content[0]+'</figcaption></figure>'
styles='<style>text{font-family:system-ui,sans-serif;fill:#254a3f;font-size:15px}.node{fill:#fffef8;stroke:#31574c;stroke-width:2}line{stroke:#63876f;stroke-width:2}</style>'
coords={1:(230,325),2:(145,255),3:(315,255),4:(145,185),6:(315,185),8:(145,115),12:(315,115),24:(230,45)}
edges=[(1,2),(1,3),(2,4),(2,6),(3,6),(4,8),(4,12),(6,12),(8,24),(12,24)]
s=styles+''.join(f'<line x1="{coords[a][0]}" y1="{coords[a][1]}" x2="{coords[b][0]}" y2="{coords[b][1]}"/>' for a,b in edges)+''.join(f'<circle class="node" cx="{x}" cy="{y}" r="19"/><text x="{x}" y="{y+5}" text-anchor="middle">{v}</text>' for v,(x,y) in coords.items())
DIAGRAMS={'4.6':svg(('Hasse diagram of the divisors of24. Follow an upward path to read divisibility; only covers are drawn.',s))}
s=styles
for x,label,elems in [(85,'[1]','1 · 4 · 7'),(240,'[2]','2 · 5 · 8'),(395,'[3]','3 · 6')]:
 s+=f'<rect x="{x-69}" y="35" width="138" height="115" rx="45" fill="#e8eee3" stroke="#839d7a"/><text x="{x}" y="74" text-anchor="middle">{label}</text><text x="{x}" y="111" text-anchor="middle">{elems}</text>'
s+='<text x="240" y="195" text-anchor="middle">One relation → three disjoint classes</text>'
DIAGRAMS['4.5']=svg(('Congruence modulo3 on{1,…,8}: three blocks, 22 ordered pairs, and a quotient set with three elements.',s),'0 0 480 225')
s=styles+'<rect x="10" y="10" width="460" height="325" rx="8" fill="#fffef8" stroke="#ccd4c3"/><circle cx="190" cy="135" r="99" fill="#83a184" fill-opacity=".25" stroke="#6c8a6e"/><circle cx="300" cy="135" r="99" fill="#d5b47c" fill-opacity=".25" stroke="#b49761"/><circle cx="245" cy="225" r="99" fill="#7fa3ac" fill-opacity=".25" stroke="#6a8d96"/>'
for x,y,t in [(142,120,'24'),(350,120,'60'),(245,292,'22'),(245,95,'12'),(184,213,'14'),(307,213,'8'),(245,172,'14'),(420,300,'118'),(124,30,'Math'),(325,30,'Computing'),(223,350,'Finance')]:s+=f'<text x="{x}" y="{y}" text-anchor="middle">{t}</text>'
DIAGRAMS['3.3']=svg(('The272-student survey: fill the triple first, then pair-only and single-only regions. Outside all three is118.',s))
