function esc(s){return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
var L=window.LABELS||{};
function card(name,h){
  if(!h) return '<div class="card"><span class="code">'+esc(name)+'</span>：'+esc(L.miss||"未收录")+'</div>';
  var p='<div class="card"><span class="code">'+esc(name)+'</span> <small>'+esc(h.cat||"")+'</small>';
  ["msg","self","hw","tip","scene"].forEach(function(k){ if(h[k]) p+='<div class="label">'+esc(L[k]||k)+'</div><div>'+esc(h[k])+'</div>'; });
  return p+'</div>';
}
function find(raw){var C=window.CODES||{};raw=(raw||"").trim();if(!raw)return null;
  if(C[raw])return[raw,C[raw]];
  var low=raw.toLowerCase();
  var alias=window.ALIAS||{};
  for(var key in alias){ if(low.indexOf(key.toLowerCase())>=0 && C[alias[key]]) return [alias[key], C[alias[key]]]; }
  for(var k in C){ if(k.toLowerCase().indexOf(low)>=0) return [k, C[k]]; }
  return [raw, null];
}
function go(){var raw=document.getElementById("q").value;if(!raw.trim()){document.getElementById("out").innerHTML="";return;}
  var r=find(raw);document.getElementById("out").innerHTML=card(r[0], r[1]);}
function table(){var C=window.CODES||{};var H=window.THEAD||["产品","类型","免费额度","付费档与核心能力"];
  var rows=Object.keys(C).map(function(k){var h=C[k];
    return '<tr><td class="code">'+esc(k)+'</td><td>'+esc(h.cat)+'</td><td>'+esc(h.self)+'</td><td>'+esc(h.hw||"—")+'</td></tr>';}).join("");
  document.getElementById("tbl").innerHTML='<tr><th>'+H.join("</th><th>")+'</th></tr>'+rows;}
document.getElementById("go").addEventListener("click",go);
document.getElementById("q").addEventListener("keydown",function(e){if(e.key==="Enter")go();});
table();
