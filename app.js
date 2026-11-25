// Hero flavour switcher (Dialed: 3 thumbs switch the hero product)
const heroData={
 cake:{img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=80",name:"Custom Celebration Cake",note:"Made to order · Lahore"},
 bento:{img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1000&q=80",name:"Bento Cake",note:"Customised · Price on enquiry"},
 cup:{img:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&q=80",name:"Cupcakes",note:"Boxes of 4 & 6 · Lahore"}
};
function setHero(k,btn){
 const d=heroData[k]; if(!d) return;
 document.getElementById('heroImg').src=d.img;
 document.getElementById('buyName').textContent=d.name;
 document.getElementById('buyNote').textContent=d.note;
 document.querySelectorAll('.flavours button').forEach(b=>b.classList.remove('on'));
 if(btn) btn.classList.add('on');
 const sel=document.getElementById('prod'); if(sel) sel.value=d.name;
}
function scrollTrack(id,dir){document.getElementById(id).scrollBy({left:dir*330,behavior:'smooth'})}
// Order form -> WhatsApp to the bakery's real number, no fake checkout
function orderWA(e){
 e.preventDefault();
 const f=e.target;
 const msg=`Assalam-o-Alaikum The Baker's Basket! I want to order: ${f.prod.value}. Name: ${f.name.value}. Date needed: ${f.date.value}. Details: ${f.msg.value}`;
 window.open('https://wa.me/923215375875?text='+encodeURIComponent(msg),'_blank');
 return false;
}
