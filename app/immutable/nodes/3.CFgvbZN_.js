import{d as ea,f as sa,e as z,g as e,i as a,t as A,j as t,n as W}from"../chunks/disclose-version.Qpl9d9YN.js";import{l as ra,a as la,m as ia,t as j,n as R}from"../chunks/runtime.Bxjg-WS-.js";import{d as oa,s as na}from"../chunks/render.B0c1_766.js";import{I as da,R as pa,G as ua,s,d as v,C as va,e as ca,b as _a,a as ma,r as S,i as ha,c as ba}from"../chunks/runewords.Cb8R0fgh.js";import{v as fa}from"../chunks/environment.DcgoGIOT.js";import{l as ga,s as xa,o as ka}from"../chunks/index-client.Cvp-Ox__.js";import{s as $a,d as wa}from"../chunks/misc.BJRNzbfJ.js";function ya(c,o){const _=ga(o,["children","$$slots","$$events","$$legacy"]);da(c,xa({name:"house"},()=>_,{iconNode:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],children:(d,p)=>{var i=ea(),u=sa(i);$a(u,wa(o),{}),z(d,i)},$$slots:{default:!0},$$legacy:!0}))}var Ra=A('<tr><td> </td><td><input type="checkbox" role="switch"></td></tr>'),Sa=A(`<div class="container-fluid"><div class="container-fluid"><nav><ul><li><strong> </strong></li></ul> <ul><li><a href="./"><!> Home</a></li> <li><a href="https://github.com/feored/runeword-explorer/"><!> Github</a></li></ul></nav> <hr> <div class="container"><h4>General</h4> <p>Maximum number of cubing steps to show before collapsing.</p> <div role="group" class="auto-width"><input type="number" name="max_steps" min="0" step="1"> <button>Reset</button></div> <br> <label for="expand_bases"><input type="checkbox" role="switch">Expand Base
				Categories <span data-tooltip="Show the full list of bases instead of the category name (Weapons, Helms, etc) and a tooltip."><!></span></label> <hr> <h4>Blacklist</h4> <small>Blacklisted runewords will never be shown.</small> <table id="blacklist-table" class="svelte-s7pk1h"><thead><tr><th>Runeword</th><th>Blacklisted</th></tr></thead><tbody></tbody></table> <button>Reset Blacklist</button></div></div></div>`);function Ea(c,o){ra(o,!0),la(()=>{localStorage.setItem("settings",JSON.stringify(s))}),ka(()=>{let r=localStorage.getItem("settings");if(r===null)return;let l=JSON.parse(r);s.max_steps=l.max_steps||v.max_steps,s.blacklist=l.blacklist||v.blacklist,s.expand_bases=l.expand_bases||v.expand_bases});let _=pa.map(r=>r.name).sort();var n=Sa(),d=e(n),p=e(d),i=e(p),u=e(i),B=e(u),D=e(B);D.nodeValue=`Runeword Explorer v${fa}`,t(B),t(u),t(i);var N=a(a(i,!0)),m=e(N),G=e(m),P=e(G);ya(P,{size:"1rem"}),W(),t(G),t(m);var H=a(a(m,!0)),I=e(H),U=e(I);ua(U,{size:"1rem"}),W(),t(I),t(H),t(N),t(p);var V=a(a(p,!0)),M=a(a(V,!0)),q=e(M),F=a(a(q,!0)),h=a(a(F,!0)),b=e(h);S(b);var K=a(a(b,!0));K.__click=()=>s.max_steps=v.max_steps,t(h);var L=a(a(h,!0)),f=a(a(L,!0)),g=e(f);S(g);var C=a(a(g,!0)),Q=e(C);va(Q,{size:"1rem"}),t(C),t(f);var T=a(a(f,!0)),X=a(a(T,!0)),Y=a(a(X,!0)),x=a(a(Y,!0)),k=e(x),E=e(k),Z=e(E);a(Z),t(E),t(k);var O=a(k);ca(O,73,()=>_,ha,(r,l,za)=>{var $=Ra(),w=e($),ta=e(w);t(w);var J=a(w),y=e(J);S(y),j(()=>ba(y,s.blacklist.includes(R(l)))),y.__input=()=>s.blacklist.push(R(l)),t(J),t($),j(()=>na(ta,R(l))),z(r,$)}),t(O),t(x);var aa=a(a(x,!0));aa.__click=()=>s.blacklist=[],t(M),t(d),t(n),_a(b,()=>s.max_steps,r=>s.max_steps=r),ma(g,()=>s.expand_bases,r=>s.expand_bases=r),z(c,n),ia()}oa(["click","input"]);export{Ea as component};