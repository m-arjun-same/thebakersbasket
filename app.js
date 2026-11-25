// Dialed hero: product stack switches hero product + background scene
const H={
 cake:{img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=80",bg:"#c10017",name:"Custom Celebration Cake",meta:"Made to order",price:"Price on enquiry"},
 bento:{img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1000&q=80",bg:"#2b95c5",name:"Bento Cake",meta:"Customised",price:"Price on enquiry"},
 cup:{img:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&q=80",bg:"#671f31",name:"Cupcakes",meta:"Boxes of 4 & 6",price:"Price on enquiry"}
};
function setHero(k,btn){
 const d=H[k];if(!d)return;
 const h=document.getElementById('hero'); h.style.background=d.bg; h.classList.add('on-dark');
 document.getElementById('heroImg').src=d.img;
 document.getElementById('buyName').textContent=d.name;
 document.getElementById('buyMeta').textContent=d.meta;
 document.getElementById('buyPrice').textContent=d.price;
 document.querySelectorAll('.selector button').forEach(b=>b.classList.remove('on')); btn.classList.add('on');
 const s=document.getElementById('prod'); if(s) s.value=d.name;
}
function scrollTrack(id,dir){document.getElementById(id).scrollBy({left:dir*340,behavior:'smooth'})}
function closePopup(){document.getElementById('popup').style.display='none'}
function joinList(e){e.preventDefault();e.target.innerHTML='<b>Dialed in. You are on the list!</b>';return false}
function orderWA(e){e.preventDefault();const f=e.target;
 const msg=`Assalam-o-Alaikum The Baker's Basket! I want to order: ${f.prod.value}. Name: ${f.name.value}. Date needed: ${f.date.value}. Details: ${f.msg.value}`;
 window.open('https://wa.me/923215375875?text='+encodeURIComponent(msg),'_blank');return false}
