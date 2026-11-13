from pathlib import Path
import re,json,markdown,shutil
from illustrations import DIAGRAMS
root=Path(__file__).parent;dist=root.parent/'public';dist.mkdir(parents=True,exist_ok=True)
topics=[];chapters=[]
for ch in range(1,7):
 s=(root/f'content/chapter-{ch}.md').read_text();title=s.splitlines()[0].split(' · ')[1];ms=list(re.finditer(r'^## (\d+\.\d+) (.+)$',s,re.M));intro=s[s.index('\n'):ms[0].start()]
 chapters.append({'id':ch,'title':title,'intro':markdown.markdown(intro),'count':len(ms)})
 for i,m in enumerate(ms):
  body=s[m.end():ms[i+1].start() if i+1<len(ms) else len(s)];h=markdown.markdown(body,extensions=['tables']);h=h.replace('</p>','</p>'+DIAGRAMS[m[1]],1) if m[1] in DIAGRAMS else h;topics.append({'id':m[1],'chapter':ch,'title':m[2],'html':h,'text':re.sub('<[^>]+>',' ',h),'minutes':max(2,round(len(body.split())/160))})
assert len(topics)==25
(dist/'content.js').write_text('window.TOPICS='+json.dumps(topics,ensure_ascii=False)+';\nwindow.CHAPTERS='+json.dumps(chapters,ensure_ascii=False)+';')
print(len(topics), 'lessons regenerated. Existing source-manifest.json and PDF preserved.')
