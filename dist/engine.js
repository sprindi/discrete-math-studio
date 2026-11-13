/* Pure mathematics used by the interactive tools. No expression evaluation. */
(function(root){
'use strict';
function parseLogic(source){
 const normalized=source.replace(/<->|<=>/g,'↔').replace(/->|=>/g,'→').replace(/[!~]/g,'¬').replace(/&&?|\*/g,'∧').replace(/\|\|?|\+/g,'∨').replace(/\^/g,'⊕');
 const tokens=normalized.match(/[a-zA-Z][a-zA-Z0-9_]*|[01¬∧∨⊕→↔()]/g)||[];
 if(tokens.join('')!==normalized.replace(/\s/g,''))throw Error('Use variable names, 0/1, parentheses and the listed operators.');
 let i=0;const vars=new Set();
 function atom(){let t=tokens[i++];if(t==='¬')return ['not',atom()];if(t==='('){let n=iff();if(tokens[i++]!==')')throw Error('A closing parenthesis is missing.');return n;}if(t==='0'||t==='1')return ['const',+t];if(t&&/^[a-zA-Z]/.test(t)){vars.add(t);return ['var',t];}throw Error('An operand is missing.');}
 function and(){let n=atom();while(tokens[i]==='∧'){i++;n=['and',n,atom()]}return n;}
 function or(){let n=and();while(tokens[i]==='∨'||tokens[i]==='⊕'){let op=tokens[i++];n=[op==='∨'?'or':'xor',n,and()]}return n;}
 function imp(){let n=or();if(tokens[i]==='→'){i++;return ['imp',n,imp()]}return n;}
 function iff(){let n=imp();while(tokens[i]==='↔'){i++;n=['iff',n,imp()]}return n;}
 let ast=iff();if(i!==tokens.length)throw Error('Unexpected symbol or two operands without an operator.');if(vars.size>5)throw Error('Keep the interactive table to at most five variables.');
 return {ast,vars:[...vars].sort()};
}
function evalLogic(n,a){const x=n[1],y=n[2];switch(n[0]){case'const':return !!x;case'var':return !!a[x];case'not':return !evalLogic(x,a);case'and':return evalLogic(x,a)&&evalLogic(y,a);case'or':return evalLogic(x,a)||evalLogic(y,a);case'xor':return evalLogic(x,a)!==evalLogic(y,a);case'imp':return !evalLogic(x,a)||evalLogic(y,a);case'iff':return evalLogic(x,a)===evalLogic(y,a);}}
function truthTable(source){let p=parseLogic(source),rows=[];for(let r=0;r<2**p.vars.length;r++){let a={};p.vars.forEach((v,i)=>a[v]=(r>>(p.vars.length-i-1))&1);rows.push({assignment:a,value:+evalLogic(p.ast,a)});}let ones=rows.reduce((s,r)=>s+r.value,0);return {...p,rows,classification:ones===rows.length?'Tautology':ones===0?'Contradiction':'Contingency',satisfiable:ones>0};}
function relation(m){let n=m.length,bad={reflexive:[],irreflexive:[],symmetric:[],antisymmetric:[],asymmetric:[],transitive:[]};for(let i=0;i<n;i++){if(!m[i][i])bad.reflexive.push([i,i]);if(m[i][i])bad.irreflexive.push([i,i]);for(let j=0;j<n;j++){if(m[i][j]&&!m[j][i])bad.symmetric.push([i,j]);if(i!==j&&m[i][j]&&m[j][i])bad.antisymmetric.push([i,j]);if(m[i][j]&&m[j][i])bad.asymmetric.push([i,j]);for(let k=0;k<n;k++)if(m[i][j]&&m[j][k]&&!m[i][k])bad.transitive.push([i,j,k]);}}return Object.fromEntries(Object.entries(bad).map(([k,v])=>[k,{holds:v.length===0,witness:v[0]}]));}
function warshall(m){let w=m.map(r=>r.slice()),stages=[w.map(r=>r.slice())];for(let k=0;k<w.length;k++){for(let i=0;i<w.length;i++)for(let j=0;j<w.length;j++)w[i][j]=+(w[i][j]||w[i][k]&&w[k][j]);stages.push(w.map(r=>r.slice()));}return stages;}
function product(a,b,boolean=false){return a.map(row=>b[0].map((_,j)=>{let v=row.reduce((s,x,k)=>s+x*b[k][j],0);return boolean?+(v>0):v}));}
function graph(m){let n=m.length,degree=m.map(r=>r.reduce((s,v)=>s+v,0)),nonzero=degree.map((d,i)=>d?i:-1).filter(i=>i>=0),seen=new Set();if(nonzero.length){let q=[nonzero[0]];seen.add(q[0]);while(q.length){let v=q.pop();m[v].forEach((e,i)=>{if(e&&!seen.has(i)){seen.add(i);q.push(i)}});}}let connected=nonzero.every(i=>seen.has(i)),odd=degree.map((d,i)=>d%2?i:-1).filter(i=>i>=0),edges=degree.reduce((s,d)=>s+d,0)/2;
 function path(cycle){function go(p){if(p.length===n)return !cycle||m[p[n-1]][p[0]]?[...p,...(cycle?[p[0]]:[])]:null;for(let v=0;v<n;v++)if(!p.includes(v)&&m[p[p.length-1]][v]){let r=go([...p,v]);if(r)return r;}return null;}for(let v=0;v<n;v++){let r=go([v]);if(r)return r;}return null;}
 let hc=n>=3?path(true):null,hp=path(false);return{degree,odd,edges,connected,euler:!edges?'No edges: empty traversal (degenerate case)':!connected?'Neither: edge-bearing components disconnected':odd.length===0?'Euler circuit':odd.length===2?'Open Euler trail only':'Neither Euler traversal',hamiltonCircuit:hc,hamiltonPath:hp,dirac:n>=3&&degree.every(d=>d>=n/2),ore:n>=3&&m.every((r,i)=>r.every((e,j)=>i===j||e||degree[i]+degree[j]>=n))};}
function algebra(table){let n=table.length,closed=table.every(r=>r.length===n&&r.every(x=>Number.isInteger(x)&&x>=0&&x<n)),comm=true,assoc=true,witness=null;if(!closed)return{closed:false};for(let a=0;a<n;a++)for(let b=0;b<n;b++){if(table[a][b]!==table[b][a])comm=false;for(let c=0;c<n;c++)if(table[table[a][b]][c]!==table[a][table[b][c]]){assoc=false;witness??=[a,b,c];}}
 let e=table.findIndex((r,i)=>r.every((v,j)=>v===j&&table[j][i]===j));let inverses=table.map((r,a)=>e<0?-1:r.findIndex((v,b)=>v===e&&table[b][a]===e));let group=assoc&&e>=0&&inverses.every(v=>v>=0);return{closed,commutative:comm,associative:assoc,witness,identity:e,inverses,group,idempotent:table.map((r,i)=>r[i]===i),classification:group?(comm?'Abelian group':'Group'):assoc?(e>=0?'Monoid (semigroup with identity)':'Semigroup'):'Closed operation, not a semigroup'};}
root.MathEngine={parseLogic,truthTable,relation,warshall,product,graph,algebra};if(typeof module!=='undefined')module.exports=root.MathEngine;
})(typeof window!=='undefined'?window:globalThis);
