import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{f as t,y as n}from"./react-vendor-B2zTXonl.js";import{n as r}from"./i18n-B0l71ZVj.js";import{i}from"./i18n-BS9PF_wV.js";import{o as a}from"./PrefetchLink-uTfGWpMZ.js";import{n as o,t as s}from"./LazySection-BqQjpFTF.js";import{t as c}from"./axios-B9NXJkgM.js";import{Y as l,it as u,ot as d,rt as f}from"./index-3vFImGjB.js";import{n as p,t as m}from"./TelegramPromotion-B9x5zo0b.js";import{n as h,t as g}from"./exclusiveCategories-Cy2Nnb9l.js";var _=e(n(),1),v=t(),y=2,b=`341057c78afbb95e54b35c556c475849`,x={28:`Action`,12:`Aventure`,16:`Animation`,35:`Comédie`,80:`Crime`,99:`Documentaire`,18:`Drame`,10751:`Famille`,14:`Fantastique`,36:`Histoire`,27:`Horreur`,10402:`Musique`,9648:`Mystère`,10749:`Romance`,878:`Science-Fiction`,10770:`Téléfilm`,53:`Thriller`,10752:`Guerre`,37:`Western`},S=`
@keyframes fadeInOut {
  0% { opacity: 0; transform: scale(1.05) translateX(-10%); }
  10% { opacity: 1; transform: scale(1) translateX(-5%); }
  90% { opacity: 1; transform: scale(1) translateX(5%); }
  100% { opacity: 0; transform: scale(1.05) translateX(10%); }
}

@keyframes slideInFromRight {
  0% { transform: translateX(50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes slideInFromLeft {
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.poster-row.no-scroll {
  overflow: hidden !important;
}

.slide-in-right {
  animation: slideInFromRight 0.7s ease-out forwards;
}

.slide-in-left {
  animation: slideInFromLeft 0.7s ease-out forwards;
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

@keyframes fadeInTitle {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
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

@keyframes expandWidth {
  0% { width: 0; }
  100% { width: 40px; }
}

.content-row-container {
  padding: 5px 0px 40px 0px;
  margin-top: -30px;
  overflow: visible !important;
  position: relative;
  z-index: 1;
}

.poster-row {
  display: flex;
  gap: 10px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding: 5rem 0.5rem;
  margin: -5rem -0.5rem;
  overflow-x: auto !important;
  overflow-y: visible !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  z-index: 5;
}

.poster-row::-webkit-scrollbar {
  display: none;
}

.poster-container {
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin: 0;
  flex-shrink: 0;
  z-index: 10;
  overflow: visible;
  padding: 0;
}

.poster-container:hover {
  z-index: 50;
  overflow: visible;
  transform: translateZ(0);
}

.poster-container:hover ~ .poster-container {
  transform: translateX(0);
}

.poster-card {
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: 0% 0%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: visible;
  cursor: pointer;
  z-index: 10;
  margin-bottom: 3rem;
  margin-top: 1rem;
}

.poster-card:hover {
  transform: scale(1.5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: visible;
  transform-style: preserve-3d;
  position: relative;
}

.poster-container:has(.poster-card:hover) ~ .poster-container {
  transform: translateX(100px);
}

.poster-container:hover ~ .poster-container {
  transition-delay: 0.12s;
  transform: translateX(100px);
}

.poster-card .hover-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #141414;
  opacity: 0;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: opacity 0.3s ease;
  overflow: hidden;
}

.poster-card:hover .hover-content {
  opacity: 1;
}

.poster-card:hover img.poster {
  opacity: 0;
}

.card-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.card-buttons a {
  transition: transform 0.2s ease;
}

.card-buttons a:hover {
  transform: scale(1.2);
}

.top-content-row {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 64px;
  padding-right: 64px;
  gap: 15px;
}
`,C=e=>({...e,media_type:`movie`,poster_path:e.poster_path||``,backdrop_path:e.backdrop_path||``,overview:e.overview||``}),w=e=>({...e,items:e.items.map(e=>C(e))}),T=()=>{let{t:e}=r(),[t,n]=(0,_.useState)([]),[T,E]=(0,_.useState)([]),[D,O]=(0,_.useState)([]),[k,A]=(0,_.useState)([]),[j,M]=(0,_.useState)(0),[N,P]=(0,_.useState)(!0),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(1),[z,B]=(0,_.useState)(!0),[V,H]=(0,_.useState)(!1),U=(0,_.useRef)();(0,_.useRef)(null);let[W,G]=_.useState(!1),K=_.useRef(null),[q,J]=(0,_.useState)([{id:28,name:`Action`,route:`/genre/movie/28`},{id:12,name:`Aventure`,route:`/genre/movie/12`},{id:16,name:`Animation`,route:`/genre/movie/16`},{id:35,name:`Comédie`,route:`/genre/movie/35`},{id:80,name:`Crime`,route:`/genre/movie/80`},{id:99,name:`Documentaire`,route:`/genre/movie/99`},{id:18,name:`Drame`,route:`/genre/movie/18`},{id:10751,name:`Famille`,route:`/genre/movie/10751`},{id:14,name:`Fantastique`,route:`/genre/movie/14`},{id:36,name:`Histoire`,route:`/genre/movie/36`},{id:27,name:`Horreur`,route:`/genre/movie/27`},{id:10402,name:`Musique`,route:`/genre/movie/10402`},{id:9648,name:`Mystère`,route:`/genre/movie/9648`},{id:10749,name:`Romance`,route:`/genre/movie/10749`},{id:878,name:`Science-Fiction`,route:`/genre/movie/878`},{id:10770,name:`Téléfilm`,route:`/genre/movie/10770`},{id:53,name:`Thriller`,route:`/genre/movie/53`},{id:10752,name:`Guerre`,route:`/genre/movie/10752`},{id:37,name:`Western`,route:`/genre/movie/37`}]);f({mode:`page`,pageData:{pageName:`movies`}}),(0,_.useCallback)(e=>{N||(U.current&&U.current.disconnect(),U.current=new IntersectionObserver(e=>{e[0].isIntersecting&&z&&R(e=>e+1)}),e&&U.current.observe(e))},[N,z]);let Y=async t=>{try{if(H(t>1),t===1){let e=sessionStorage.getItem(`movix_movies_data`),t=sessionStorage.getItem(`movix_movies_data_timestamp`);if(e&&t&&Date.now()-parseInt(t)<900*1e3){let t=JSON.parse(e);E((t.featuredMovies||[]).map(C)),O((t.topMovies||[]).map(C)),n(t.movies||[]),t.movies&&t.movies.length>0&&X(t.movies),P(!1);return}}let e=await c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),page:t,sort_by:`popularity.desc`,with_release_type:`2|3`,include_adult:!1}}),r=[];if(t===1){let e=[...Array.from({length:2},(e,t)=>c.get(`https://api.themoviedb.org/3/movie/top_rated`,{params:{api_key:b,language:i(),page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`28`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`35`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`18`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`27`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`878`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`12`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`16`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`53`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`80`,sort_by:`popularity.desc`,page:t+1}})),...Array.from({length:3},(e,t)=>c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:`10751`,sort_by:`popularity.desc`,page:t+1}}))];r=(await Promise.all(e)).flatMap(e=>e.data.results)}let a=e.data.results.filter(e=>e.poster_path&&e.overview&&e.overview.trim()!==``),o=r.filter(e=>e.poster_path&&e.overview&&e.overview.trim()!==``),s=[...a,...o];if(t===1&&a.length>0){E(a.filter(e=>e.backdrop_path&&e.overview).slice(0,8).map(C));try{let e=await c.get(`https://api.themoviedb.org/3/trending/movie/day`,{params:{api_key:b,language:i()}}),t=new Date;O(e.data.results.filter(e=>{if(!e.release_date)return!1;let n=new Date(e.release_date);return!(new Date(n.setHours(0,0,0,0))>new Date(t.setHours(0,0,0,0))||!e.poster_path||!e.overview||/[\u4e00-\u9fff]/.test(e.title))}).slice(0,10).map(C))}catch(e){console.error(`Error fetching trending movies:`,e),O([...s].sort((e,t)=>t.vote_average-e.vote_average).filter((e,t,n)=>t===n.findIndex(t=>t.id===e.id)).slice(0,10).map(C))}X(s)}n(e=>{if(t===1)return s;let n=a.filter(t=>!e.some(e=>e.id===t.id));return[...e,...n]});let l=t>=e.data.total_pages;if(B(a.length>0&&!l),t===1){let e=a.filter(e=>e.backdrop_path&&e.overview).slice(0,8),t=[];try{let e=new Date;t=s.filter(t=>{if(!t.release_date)return!1;let n=new Date(t.release_date);return!(new Date(n.setHours(0,0,0,0))>new Date(new Date(e).setHours(0,0,0,0))||!t.poster_path||!t.overview||/[\u4e00-\u9fff]/.test(t.title))}).slice(0,10)}catch{t=[...s].sort((e,t)=>t.vote_average-e.vote_average).filter((e,t,n)=>t===n.findIndex(t=>t.id===e.id)).slice(0,10)}let n={featuredMovies:e,topMovies:t,movies:s,categories:[]};sessionStorage.setItem(`movix_movies_data`,JSON.stringify(n)),sessionStorage.setItem(`movix_movies_data_timestamp`,Date.now().toString())}}catch(t){console.error(`Error fetching movies:`,t),I(e(`home.errorLoadingData`))}finally{P(!1),H(!1)}};(0,_.useEffect)(()=>{Y(1)},[]),(0,_.useEffect)(()=>{let e=`movix_movie_genre_images`,t=`movix_movie_genre_images_ts`,n=sessionStorage.getItem(e),r=sessionStorage.getItem(t);(async()=>{try{if(n&&r&&Date.now()-parseInt(r)<864e5){J(JSON.parse(n));return}let a=await Promise.all(q.map(async e=>{try{let t=await c.get(`https://api.themoviedb.org/3/discover/movie`,{params:{api_key:b,language:i(),with_genres:e.id,sort_by:`popularity.desc`,include_adult:!1,page:1}}),n=Array.isArray(t.data?.results)?t.data.results.find(e=>e.backdrop_path||e.poster_path):null,r=n?.backdrop_path||n?.poster_path||``,a=r?`https://image.tmdb.org/t/p/w780${r}`:void 0;return{...e,imageUrl:a}}catch{return e}}));J(a),sessionStorage.setItem(e,JSON.stringify(a)),sessionStorage.setItem(t,Date.now().toString())}catch{}})()},[]),(0,_.useEffect)(()=>{L>1&&Y(L)},[L]);let X=t=>{let n=t.filter(e=>e.overview&&e.poster_path),r={};n.forEach(e=>{e.genre_ids&&e.genre_ids.length>0&&e.genre_ids.forEach(t=>{r[t]||(r[t]=[]),r[t].some(t=>t.id===e.id)||r[t].push(e)})});let i=Object.entries(r).map(([e,t])=>{let n=t.filter((e,t,n)=>t===n.findIndex(t=>t.id===e.id));return{id:e,title:x[Number(e)]||`Category ${e}`,items:n.slice(0,15)}}).filter(e=>e.items.length>=3).sort((e,t)=>t.items.length-e.items.length).slice(0,10),a=n.reduce((e,t)=>(e.some(e=>e.id===t.id)||e.push(t),e),[]).filter(e=>e.release_date).sort((e,t)=>{let n=e.release_date?new Date(e.release_date).getTime():0;return(t.release_date?new Date(t.release_date).getTime():0)-n}).slice(0,15),o=[];a.length>=5&&o.push({id:`recent-movies`,title:e(`home.recentMovies`),items:a}),o.push(...i),A(h(o,{minItems:g(),limit:10,perCategoryLimit:15}).map(w))};(0,_.useEffect)(()=>{document.title=`${e(`movies.title`)} - H-Flix`},[]),_.useEffect(()=>{let e=K.current;if(!e||!W)return;let t=e=>{if(e instanceof WheelEvent&&Math.abs(e.deltaX)>Math.abs(e.deltaY))return e.preventDefault(),e.stopPropagation(),!1},n=e=>{if([`ArrowLeft`,`ArrowRight`,` `,`PageUp`,`PageDown`,`Home`,`End`].includes(e.key))return e.preventDefault(),e.stopPropagation(),!1};return e.addEventListener(`wheel`,t,{passive:!1}),e.addEventListener(`keydown`,n,{passive:!1}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`keydown`,n)}},[W]);let Z=(0,_.useMemo)(()=>(0,v.jsx)(l,{icon:`🔥`,iconClass:`text-red-600`,label:e(`home.trendingToday`)}),[e]),Q=(0,_.useMemo)(()=>(0,v.jsx)(l,{icon:`🧭`,iconClass:`text-white`,label:e(`genres.findByGenre`)}),[e]),$=(0,_.useMemo)(()=>k.map(e=>(0,v.jsx)(l,{label:typeof e.title==`string`?e.title:String(e.title)})),[k]);return F?(0,v.jsx)(`div`,{className:`flex items-center justify-center h-screen`,children:(0,v.jsx)(`div`,{className:`bg-red-600/10 text-red-600 px-6 py-4 rounded-lg`,children:F})}):N&&t.length===0?(0,v.jsxs)(`div`,{className:`min-h-screen bg-black text-white`,children:[(0,v.jsx)(`div`,{className:`relative w-full pt-16 md:pt-20 lg:pt-24`,children:(0,v.jsx)(d,{})}),(0,v.jsxs)(`div`,{className:`container mx-auto px-4 py-8 space-y-8`,children:[(0,v.jsx)(a,{}),(0,v.jsx)(a,{}),(0,v.jsx)(a,{})]})]}):(0,v.jsxs)(`div`,{className:`min-h-screen bg-black text-white`,children:[(0,v.jsx)(`style`,{children:S}),(0,v.jsx)(`div`,{className:`relative w-full pt-16 md:pt-20 lg:pt-24`,children:T.length>0&&(0,v.jsx)(u,{items:T})}),(0,v.jsxs)(`div`,{className:`pb-12 mt-8 relative z-[20]`,children:[(0,v.jsx)(`div`,{className:`w-full bg-black py-6 relative px-4 md:px-8`,children:(0,v.jsx)(p,{title:Q,items:q})}),D.length>0&&(0,v.jsx)(`div`,{className:`px-4 md:px-8`,children:(0,v.jsx)(s,{index:0,immediateLoadCount:y,children:(0,v.jsx)(o,{title:Z,items:D,mediaType:`top10`,showRanking:!0})})}),k.length>0&&k.map((e,t)=>(0,v.jsx)(`div`,{className:`px-4 md:px-8`,children:(0,v.jsx)(s,{index:1+t,immediateLoadCount:y,children:(0,v.jsx)(o,{title:$[t],items:e.items,mediaType:e.id},e.id)},`lazy-${e.id}`)},`wrap-${e.id}`)),(0,v.jsx)(m,{})]})]})};export{T as default};