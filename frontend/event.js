function setHeart(btn,on){
    btn.classList.toggle('active',on);
    btn.textContent =(on ? '♥':'♡');
    
}

const events =  [

    {
        id: 1,
        title:"FireStone",
        subtitle:"Summer Night Session",
        genre: "retro",
        date:"2026-11-14T20:00",
        location:"Lumi Budapest, IX. kerület",
        price:4000,
        image:"/Képek/esemenyek/firestone.png"
    },
     {
        id: 1,
        title:"FireStone",
        subtitle:"Summer Night Session",
        genre: "retro",
        date:"2026-11-14T20:00",
        location:"Lumi Budapest, IX. kerület",
        price:4000,
        image:"/Képek/esemenyek/urbanecho.png"
    },
     {
        id: 1,
        title:"FireStone",
        subtitle:"Summer Night Session",
        genre: "retro",
        date:"2026-11-14T20:00",
        location:"Lumi Budapest, IX. kerület",
        price:4000,
        image:"/Képek/esemenyek/theelectricmirage.png"
    },
]
const eventList = document.getElementById("event-list");

function eventkiir(eventArray){
    if(!eventList)return;
    if(eventArray.length === 0){
        eventList.innerHTML="<p>No events Found.</p>"
        return;
    }
    

   


 eventList.innerHTML=eventArray.map(event =>{
    const date = new Date(event.date);
    const formatteddate = date.toLocaleDateString("en-GB",{
            day:"2-digit",
            month: "short",
            year:"numeric"

    }).toUpperCase();
    const day = String(date.getDate()).padStart(2,"0");
    const time = date.toLocaleTimeString("en-gb",{
        hour:"2-digit",
        minute:"2-digit"
    });
        return `
    <div class="col-12 col-md-6 col-lg-4">
<section class="card" style="max-width: 320px">
  <div class="d-flex row">
 <div class="datecard ms-3 mt-3"><p class="ho">Jun</p><p class="nap">14</p></div>
 <button type="button" class="heartcard" onclick="setHeart(this,true)" >♡</button>

</div>
  <div class="img-box"><img src="${event.image}" class="card-img-top" alt="${event.title}"></div>
  <div class="card-body">
    <h4 class="card-title">${event.title}</h4>
    <p class="goldtext">${event.subtitle}</p>
    <p class="datetext">${formatteddate} ${time} ${event.location}</p>
    <p class="style">Jazz & coctail</p>  
    <hr class="opacity-50">
    <div class="d-flex gap-3">
    <p class="ar mt-2">From ${event.price}ft</p>
   <button class="addtobutton ms-auto"> Add to cart</button>
   </div>
  </div>
</section>
</div> `    ;
    
 }).join("");
}
eventkiir(events);

const haromevents =document.getElementById("events")

function haromeventskiir (eventArray){
    if(!haromevents)return;
    if(eventArray.length === 0){
        haromevents.innerHTML="<p>No events Found.</p>"
        return;
    }
    haromevents.innerHTML=eventArray.slice(0,3).map(event =>{
    const date = new Date(event.date);
    const month = date.toLocaleString("en-GB",{
            month: "short"

    }).toUpperCase();
    const day = String(date.getDate()).padStart(2,"0");
    const time = date.toLocaleTimeString("en-gb",{
        hour:"2-digit",
        minute:"2-digit"
    });
        return `
       

    <div class="event-row">
      <div class="date">JUN<span class="day">14</span></div>
      <div class="info">
        <h4>${event.title}</h4>
        <div class="sub">${time} — ${event.location}</div>
        <span class="tag">${event.genre}</span>
      </div>
      <div class="action">
        <div class="price">from ${event.price} Ft</div>
        <button class="heart" data-event-id="1">♡</button>
      </div>
    </div>
  
        `

}
    ).join("");
 }haromeventskiir(events);
   
const forgoevents = document.getElementById("forgokep");
function forgoeventskiir (eventArray){
if (!forgoevents) return;
if (eventArray.length===0){
  forgoevents.innerHTML="<p>Nincs Aktiv event</p>"
  return;
}
forgoevents.innerHTML=eventArray.map((event,index) =>{

  return`
   <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="featured"
             style="background-image:url('${event.image}');">
        </div>
      </div>
    
            ` ;}
             ).join("");



}forgoeventskiir(events);

