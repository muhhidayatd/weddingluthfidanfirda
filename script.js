const opening=document.getElementById("opening"),openBtn=document.getElementById("openBtn"),music=document.getElementById("music"),musicBtn=document.getElementById("musicBtn");
openBtn.addEventListener("click",()=>{opening.classList.add("hide");document.body.style.overflow="auto";music.play().catch(()=>{});});
document.body.style.overflow="hidden";
const target=new Date("2026-12-12T09:00:00+08:00").getTime();
function countdown(){let d=target-Date.now();if(d<0)d=0;document.getElementById("days").textContent=String(Math.floor(d/86400000)).padStart(2,"0");document.getElementById("hours").textContent=String(Math.floor(d/3600000)%24).padStart(2,"0");document.getElementById("minutes").textContent=String(Math.floor(d/60000)%60).padStart(2,"0");document.getElementById("seconds").textContent=String(Math.floor(d/1000)%60).padStart(2,"0")}setInterval(countdown,1000);countdown();
musicBtn.addEventListener("click",()=>{if(music.paused){music.play();musicBtn.textContent="❚❚"}else{music.pause();musicBtn.textContent="♪"}});
function copyAccount(){navigator.clipboard.writeText(document.getElementById("account").textContent);alert("Nomor rekening berhasil disalin.");}
document.getElementById("rsvpForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("rsvpMessage").textContent=`Terima kasih, ${name.value}. Konfirmasi kehadiran berhasil disimpan.`;e.target.reset()});
const list=document.getElementById("wishesList");
document.getElementById("wishForm").addEventListener("submit",e=>{e.preventDefault();const div=document.createElement("div");div.className="wish";div.innerHTML=`<strong>${escapeHtml(wishName.value)}</strong><span>${escapeHtml(wishText.value)}</span>`;list.prepend(div);e.target.reset()});
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
const io=new IntersectionObserver(entries=>entries.forEach(x=>x.isIntersecting&&x.target.classList.add("show")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>io.observe(x));