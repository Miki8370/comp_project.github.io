const search_butt = document.getElementById('search_butt');
const submit_butt = document.getElementById('submit_butt');
const join_butt = document.getElementById('join_butt');
const card = document.querySelector(".cards");


search_butt.addEventListener('click', function(){
    alert("Blud what the hell are you searching for!!")
});

submit_butt.addEventListener("click", function(){
    alert("where the hell you think your submitting too")
});
join_butt.addEventListener("mouseover", function(){
    join_butt.classList.add('Join_Butt')
})

card.addEventListener('mouseover', function(){
    card.classList.add('bounce_img')
})


//hope this slows the shit out of the the website.

function slow_fun() {
    console.log('This funtion will make it slow baby');
}

// Call myFunction after a 5-second delay
setTimeout(slow_fun, 5000);


