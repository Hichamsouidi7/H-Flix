import{n as e}from"./vipUtils-CQzMqt60.js";import{D as t,E as n,Q as r,r as i,tt as a}from"./index-3vFImGjB.js";import{t as o}from"./authUtils-CmMvaI9b.js";import{o as s}from"./extractionPrefs-ClDxA_3X.js";import"./HLSPlayer-DrxKVB9A.js";t();
var c=new Set,cache=new Map;
function l(e){let t=i();return n(e,{patternOverrides:t.patternOverrides,customHosters:t.customHosters})}
function u(){return!!(window.hasMovixNexusExtractor&&window.movixExtractM3u8)}
async function fastFetch(url,options={},timeoutMs=650){
  let controller=new AbortController(),tId=setTimeout(()=>controller.abort(),timeoutMs);
  try{
    let res=await fetch(url,{...options,signal:controller.signal});
    clearTimeout(tId);
    return res;
  }catch(err){
    clearTimeout(tId);
    throw err;
  }
}
async function d(e=0){return u()}
async function f(e,t,n){
  if(cache.has(t))return cache.get(t);
  if(u()&&window.movixExtractM3u8)try{
    let r=await window.movixExtractM3u8(e,t);
    if(r&&r.success){cache.set(t,r);return r;}
    return n();
  }catch(t){return n();}
  return n();
}
var p=()=>!0,m=()=>!0,h=()=>!0,g=()=>!0,_=()=>!0,v=()=>!0,y=()=>!0,b=()=>!0;
async function x(e,t){
  if(!e||!e.link)return null;let n=e.link;
  if(cache.has(n))return cache.get(n);
  if(c.has(n))return{success:!1,error:`URL précédemment échouée`,fromCache:!0};
  let r=null;
  if(e.player&&e.player.toLowerCase().includes(`supervideo`))r=`${t}/api/extract-supervideo?url=${encodeURIComponent(n)}`;
  else if(e.player&&e.player.toLowerCase().includes(`dropload`))r=`${t}/api/extract-dropload?url=${encodeURIComponent(n)}`;
  if(!r)return null;
  try{
    let res=await fastFetch(r,{},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json(),resObj=data.hlsUrl?{hlsUrl:data.hlsUrl,success:!0}:data.m3u8Url?{m3u8Url:data.m3u8Url,success:!0}:null;
    if(resObj){cache.set(n,resObj);return resObj;}
    c.add(n);return{success:!1,error:`No m3u8 found`};
  }catch(err){c.add(n);return{success:!1,error:String(err)};}
}
function S(e){return l(e)===`oneupload`}
function C(e){return l(e)===`voe`}
async function w(e){return e?f(`voe`,e,()=>T(e)):null}
async function T(t){
  if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL VOE précédemment échouée`,fromCache:!0};
  try{
    let n=btoa(t),res=await fastFetch(`${r}/api/voe/m3u8?url=${n}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json();
    if(data.source){let resObj={hlsUrl:data.source,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Aucune source HLS trouvée`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function E(e,t){if(!e)return null;let n=e.replace(/uqload\.[a-z0-9-]+/gi,`uqload.is`);return f(`uqload`,n,()=>D(n))}
async function D(t){
  if(!t)return null;let n=t.replace(/uqload\.[a-z0-9-]+/gi,`uqload.is`);
  if(cache.has(n))return cache.get(n);
  if(c.has(n))return{success:!1,error:`URL UQLOAD échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-uqload?url=${encodeURIComponent(n)}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json(),url=data.data?.url||data.url;
    if(url){let resObj={m3u8Url:url,success:!0};cache.set(n,resObj);return resObj;}
    c.add(n);return{success:!1,error:`Aucun fichier UQLOAD`};
  }catch(err){c.add(n);return{success:!1,error:String(err)};}
}
async function O(e,t){
  if(!e)return null;if(cache.has(e))return cache.get(e);
  if(c.has(e))return{success:!1,error:`URL Darkibox échouée`,fromCache:!0};
  try{
    let target=a(encodeURIComponent(e)),res=await fastFetch(target,{headers:{"User-Agent":`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36`}},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let html=await res.text(),match=html.match(/sources:\s*\[([\s\S]*?)\]/);
    if(match){
      let srcMatch=match[1].match(/src:\s*"([^"]+)"/);
      if(srcMatch&&srcMatch[1]&&srcMatch[1].includes(`.m3u8`)){let resObj={hlsUrl:srcMatch[1],success:!0};cache.set(e,resObj);return resObj;}
    }
    c.add(e);return{success:!1,error:`Pas de HLS Darkibox`};
  }catch(err){c.add(e);return{success:!1,error:String(err)};}
}
async function k(e,t){return e?f(`vidzy`,e,()=>A(e)):null}
async function A(t){
  if(!t)return null;if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL Vidzy échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-vidzy?url=${t}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json();
    if(data.m3u8Url){let resObj={m3u8Url:data.m3u8Url,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de M3U8 Vidzy`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function j(e,t){return e?f(`fsvid`,e,()=>M(e)):null}
async function M(t){
  if(!t)return null;if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL Fsvid échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-fsvid?url=${encodeURIComponent(t)}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json(),url=data.m3u8Url||data.url||data.link||data.file||data.source;
    if(url){let resObj={m3u8Url:url,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de M3U8 Fsvid`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function N(e,t){return e?f(`vidmoly`,e,()=>P(e)):null}
async function P(t){
  if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL Vidmoly échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-vidmoly?url=${t}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json();
    if(data.sourceUrl){let resObj={m3u8Url:data.sourceUrl,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de M3U8 Vidmoly`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function F(e,t){return e?f(`sibnet`,e,()=>I(e)):null}
async function I(t){
  if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL Sibnet échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-sibnet?url=${encodeURIComponent(t)}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json();
    if(data.sourceUrl){let resObj={m3u8Url:data.sourceUrl,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de M3U8 Sibnet`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function L(e){return{success:!1,error:`OneUpload`}}
function R(e){return l(e)===`doodstream`}
function z(e){return l(e)===`seekstreaming`||e.includes(`/#`)}
async function B(e){return e?f(`doodstream`,e,()=>V(e)):null}
async function V(t){
  if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL DoodStream échouée`,fromCache:!0};
  try{
    let res=await fastFetch(`${r}/api/extract-doodstream?url=${encodeURIComponent(t)}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json();
    if(data.url){let resObj={m3u8Url:data.url,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de URL DoodStream`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
async function H(e){return e?f(`seekstreaming`,e,()=>U(e)):null}
async function U(t){
  if(cache.has(t))return cache.get(t);
  if(c.has(t))return{success:!1,error:`URL SeekStreaming échouée`,fromCache:!0};
  try{
    let norm=t.replace(/#/g,`%23`),res=await fastFetch(`${r}/api/extract-seekstreaming?url=${encodeURIComponent(norm)}`,{headers:e()},650);
    if(!res.ok)throw Error(`HTTP ${res.status}`);
    let data=await res.json(),url=data.url||data.ip_url;
    if(url){let resObj={hlsUrl:url,success:!0};cache.set(t,resObj);return resObj;}
    c.add(t);return{success:!1,error:`Pas de source SeekStreaming`};
  }catch(err){c.add(t);return{success:!1,error:String(err)};}
}
export{C as _,L as a,E as c,w as d,R as f,b as g,z as h,x as i,N as l,S as m,B as n,H as o,y as p,j as r,F as s,O as t,k as u};