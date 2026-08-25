import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{f as t,y as n}from"./react-vendor-B2zTXonl.js";import{n as r}from"./i18n-B0l71ZVj.js";import{i}from"./i18n-BS9PF_wV.js";import{o as a}from"./PrefetchLink-uTfGWpMZ.js";import{n as o,t as s}from"./LazySection-BqQjpFTF.js";import{t as c}from"./axios-B9NXJkgM.js";import{n as l}from"./tmdbKeywords-D51nzAeW.js";import{it as u,ot as d,rt as f}from"./index-3vFImGjB.js";import{n as p,t as m}from"./TelegramPromotion-B9x5zo0b.js";import{n as h}from"./certificationUtils-8yORLNmA.js";var g=e(n(),1),_=t(),v=`341057c78afbb95e54b35c556c475849`,y=2,b=1440*60*1e3,x=900*1e3,S=17,C=[`FR`,`US`,`JP`,`GB`,`CA`],w=`movix_anime_content_rating_`,T=12,E=[{id:16,labelKey:`genres.id_16`,route:`/genre/anime/16`,discoverGenres:`16`},{id:10759,labelKey:`genres.id_10759`,route:`/genre/anime/10759`,discoverGenres:`16,10759`},{id:10765,labelKey:`genres.id_10765`,route:`/genre/anime/10765`,discoverGenres:`16,10765`},{id:35,labelKey:`genres.id_35`,route:`/genre/anime/35`,discoverGenres:`16,35`},{id:18,labelKey:`genres.id_18`,route:`/genre/anime/18`,discoverGenres:`16,18`},{id:9648,labelKey:`genres.id_9648`,route:`/genre/anime/9648`,discoverGenres:`16,9648`},{id:10751,labelKey:`genres.id_10751`,route:`/genre/anime/10751`,discoverGenres:`16,10751`},{id:10762,labelKey:`genres.id_10762`,route:`/genre/anime/10762`,discoverGenres:`16,10762`}],D=[10759,10765,35,18,9648,10751,10762],O=`
@keyframes fadeInTitle {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes expandWidth {
  0% { width: 0; }
  100% { width: 40px; }
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  background: linear-gradient(90deg, #ffffff, #e2e2e2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  display: inline-block;
  animation: fadeInTitle 0.8s ease-out forwards;
  transition: all 0.3s ease;
}

.section-title:hover {
  background: linear-gradient(90deg, #ff3333, #ff9999);
  -webkit-background-clip: text;
  background-clip: text;
  transform: translateY(-2px);
  text-shadow: 0px 4px 8px rgba(255, 51, 51, 0.4);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #f11 0%, #f66 100%);
  border-radius: 3px;
  animation: expandWidth 0.6s ease-out forwards 0.3s;
  transform-origin: left;
  transition: all 0.3s ease;
}

.section-title:hover::after {
  width: 100%;
  background: linear-gradient(90deg, #ff3333, #ff9999);
}
`,k=e=>e.filter((e,t,n)=>t===n.findIndex(t=>t.id===e.id)),A=e=>!!(e?.id&&e?.name&&e?.poster_path&&e?.overview?.trim()),j=e=>{if(!e.first_air_date)return 0;let t=new Date(e.first_air_date).getTime();return Number.isNaN(t)?0:t},M=(e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:`base`,numeric:!0}),N=(e,t)=>{let n=(t.popularity??0)-(e.popularity??0);if(n!==0)return n;let r=(t.vote_count??0)-(e.vote_count??0);if(r!==0)return r;let i=(t.vote_average??0)-(e.vote_average??0);return i===0?M(e,t):i},P=(e,t)=>{let n=j(t)-j(e);return n===0?N(e,t):n},F=(e,t,n={})=>({api_key:v,language:e,include_adult:!1,with_genres:`16`,sort_by:`popularity.desc`,"vote_count.gte":25,...t?{with_keywords:String(t)}:{},...n}),I=e=>{for(let t of C){let n=e.find(e=>e.iso_3166_1===t&&e.rating);if(n?.rating)return n.rating}return e.find(e=>e.rating)?.rating||``},L=e=>{try{let t=sessionStorage.getItem(`${w}${e}`);if(!t)return null;let n=JSON.parse(t);return typeof n.age==`number`?n.age:null}catch{return null}},R=(e,t)=>{try{sessionStorage.setItem(`${w}${e}`,JSON.stringify({age:t}))}catch{}},z=async e=>{let t=L(e);if(t!==null)return t;try{let t=await c.get(`https://api.themoviedb.org/3/tv/${e}/content_ratings`,{params:{api_key:v}}),n=I(Array.isArray(t.data?.results)?t.data.results:[]),r=n?h(n):0;return R(e,r),r}catch{return R(e,0),0}},B=async e=>{let t=[];for(let n=0;n<e.length;n+=T){let r=e.slice(n,n+T),i=await Promise.all(r.map(e=>z(e.id)));r.forEach((e,n)=>{i[n]<S&&t.push(e)})}return t},V=()=>{let{t:e,i18n:t}=r(),n=i(),[h,v]=(0,g.useState)([]),[S,C]=(0,g.useState)([]),[w,T]=(0,g.useState)([]),[j,M]=(0,g.useState)([]),[I,L]=(0,g.useState)({}),[R,z]=(0,g.useState)(!0),[V,H]=(0,g.useState)(null),U=`movix_anime_data_v2_${n}`,W=`${U}_timestamp`,G=`movix_anime_genre_images_v2_${n}`,K=`${G}_timestamp`;f({mode:`page`,pageData:{pageName:`anime`}});let q=(0,g.useCallback)(t=>e(`genres.id_${t}`,{defaultValue:`Genre ${t}`}),[e]),J=(0,g.useMemo)(()=>E.map(t=>({id:t.id,name:e(t.labelKey),route:t.route,imageUrl:I[t.id]})),[I,e]),Y=(0,g.useCallback)(t=>{let n=k(t).filter(A),r={};n.forEach(e=>{e.genre_ids?.forEach(t=>{t!==16&&(r[t]||(r[t]=[]),r[t].some(t=>t.id===e.id)||r[t].push(e))})});let i=new Map(D.map((e,t)=>[e,t])),a=Object.entries(r).map(([e,t])=>{let n=[...t].sort(N),r=i.get(Number(e)),a=r===void 0?0:(D.length-r)*5;return{id:e,title:q(Number(e)),items:n.slice(0,15),score:n.length+a}}).filter(e=>e.items.length>=3).sort((e,t)=>t.score-e.score),o=new Set,s=a.map(({id:e,title:t,items:n})=>{let r=n.filter(e=>!o.has(e.id)).slice(0,15);return r.forEach(e=>{o.add(e.id)}),{id:e,title:t,items:r}}).filter(e=>e.items.length>=4).slice(0,6).map(({id:e,title:t,items:n})=>({id:e,title:t,items:n})),c=n.filter(e=>!!e.first_air_date).sort(P).slice(0,15),l=[];c.length>=5&&l.push({id:`recent-anime`,title:e(`animePage.recentAnime`),items:c}),l.push(...s),M(l)},[q,e]),X=(0,g.useCallback)(async()=>{try{z(!0),H(null);let e=sessionStorage.getItem(U),t=sessionStorage.getItem(W);if(e&&t&&Date.now()-Number(t)<x){let t=JSON.parse(e);C(t.featuredShows||[]),T(t.topContent||[]),v(t.animeShows||[]),Array.isArray(t.animeShows)&&t.animeShows.length>0&&Y(t.animeShows),z(!1);return}let r=await l(`anime`,n),i=[...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/tv`,{params:F(n,r,{page:t+1})})),...E.filter(e=>e.id!==16).map(e=>c.get(`https://api.themoviedb.org/3/discover/tv`,{params:F(n,r,{page:1,with_genres:e.discoverGenres})}))],a=await B(k((await Promise.all(i)).flatMap(e=>(e.data?.results||[]).filter(A).map(e=>({...e,media_type:`tv`})))).sort(N)),o=a.filter(e=>e.backdrop_path&&e.overview).slice(0,8),s=a.slice(0,15);C(o),T(s),v(a),Y(a),sessionStorage.setItem(U,JSON.stringify({featuredShows:o,topContent:s,animeShows:a})),sessionStorage.setItem(W,Date.now().toString())}catch(t){console.error(`Error fetching anime shows:`,t),H(e(`home.errorLoadingData`))}finally{z(!1)}},[U,W,Y,e,n]);return(0,g.useEffect)(()=>{X()},[X]),(0,g.useEffect)(()=>{(async()=>{try{let e=sessionStorage.getItem(G),t=sessionStorage.getItem(K);if(e&&t&&Date.now()-Number(t)<b){L(JSON.parse(e));return}let r=await l(`anime`,n),i=await Promise.all(E.map(async e=>{try{let t=await c.get(`https://api.themoviedb.org/3/discover/tv`,{params:F(n,r,{with_genres:e.discoverGenres,page:1})}),i=(await B(Array.isArray(t.data?.results)?t.data.results.filter(e=>e.backdrop_path||e.poster_path):[]))[0]||null,a=i?.backdrop_path||i?.poster_path||``;return[e.id,a?`https://image.tmdb.org/t/p/w780${a}`:void 0]}catch{return[e.id,void 0]}})),a=Object.fromEntries(i);L(a),sessionStorage.setItem(G,JSON.stringify(a)),sessionStorage.setItem(K,Date.now().toString())}catch{}})()},[G,K,n]),(0,g.useEffect)(()=>{document.title=`${e(`animePage.title`)} - H-Flix`},[t.language,e]),V?(0,_.jsx)(`div`,{className:`flex items-center justify-center h-screen`,children:(0,_.jsx)(`div`,{className:`bg-red-600/10 text-red-600 px-6 py-4 rounded-lg`,children:V})}):R&&h.length===0?(0,_.jsxs)(`div`,{className:`min-h-screen bg-black text-white`,children:[(0,_.jsx)(`div`,{className:`relative w-full pt-4 sm:pt-8 md:pt-14 lg:pt-16`,children:(0,_.jsx)(d,{})}),(0,_.jsxs)(`div`,{className:`container mx-auto px-4 py-8 space-y-8`,children:[(0,_.jsx)(a,{}),(0,_.jsx)(a,{}),(0,_.jsx)(a,{})]})]}):(0,_.jsxs)(`div`,{className:`min-h-screen bg-black text-white`,children:[(0,_.jsx)(`style`,{children:O}),(0,_.jsx)(`div`,{className:`relative w-full pt-4 sm:pt-8 md:pt-14 lg:pt-16`,children:S.length>0&&(0,_.jsx)(u,{items:S.map(e=>({...e,media_type:`tv`}))})}),(0,_.jsx)(`div`,{className:`w-full bg-black py-6 relative mt-8 z-[20] px-4 md:px-8`,children:(0,_.jsx)(p,{title:(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{className:`text-white mr-2`,children:`🧭`}),(0,_.jsx)(`span`,{children:e(`genres.findByGenre`)})]}),items:J})}),(0,_.jsxs)(`div`,{className:`pb-12 -mt-4 relative z-[20]`,children:[w.length>0&&(0,_.jsx)(`div`,{className:`px-4 md:px-8`,children:(0,_.jsx)(s,{index:0,immediateLoadCount:y,children:(0,_.jsx)(o,{title:(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`span`,{className:`text-red-600 mr-2`,children:`🔥`}),(0,_.jsx)(`span`,{children:e(`animePage.trending`)})]}),items:w.map(e=>({...e,media_type:`tv`,poster_path:e.poster_path||``,backdrop_path:e.backdrop_path||``,overview:e.overview||``})),mediaType:`anime-trending`,showRanking:!0})})}),j.map((e,t)=>(0,_.jsx)(`div`,{className:`px-4 md:px-8`,children:(0,_.jsx)(s,{index:1+t,immediateLoadCount:y,children:(0,_.jsx)(o,{title:e.title,items:e.items.map(e=>({...e,media_type:`tv`,poster_path:e.poster_path||``,backdrop_path:e.backdrop_path||``,overview:e.overview||``})),mediaType:e.id})},e.id)},`wrap-${e.id}`)),(0,_.jsx)(m,{})]})]})};export{V as default};