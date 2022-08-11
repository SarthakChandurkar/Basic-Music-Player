
var songIndex = 0;

var audioElement = new Audio("songs/1.mp3");

var paused = 0;
var playing =-1 ;
var playButtonElement= document.getElementById("mainPlayButton");
var progressButtonElement = document.getElementById("myprogressBar");
progressButtonElement.value=0;
var songCoverName=document.getElementById("songCoverName");

var coverImageElement =document.getElementById("songCoverImg");

var songs = [
    {
        name:"Apna Dil To awara",
        path:"songs/1.mp3",
        coverPath:"covers/1.jpg",
        liked:false
    },
    {
        name: "Pyar Diwana hota hai",
        path:"songs/2.mp3",
        coverPath:"covers/2.jpg",
        liked:false
    },
    {
        name: "Mere Mehboob Qayamat hogi",
        path:"songs/3.mp3",
        coverPath:"covers/3.jpg",
        liked:false
    },
    {
        name: "Gulabi Aankhen",
        path:"songs/4.mp3",
        coverPath:"covers/4.jpg",
        liked:false
    },
    {
        name: "Mere Sapno ki Rani",
        path:"songs/5.mp3",
        coverPath:"covers/5.jpg",
        liked:false
    },
    {
        name: "Taarif Karun",
        path:"songs/6.mp3",
        coverPath:"covers/6.jpg",
        liked:false
    },
    {
        name: "Yeh Raaten yeh mausam",
        path:"songs/7.mp3",
        coverPath:"covers/7.jpg",
        liked:false
    }
]


songCoverImg.src=songs[0].coverPath
songCoverName.innerHTML=songs[0].name


const makeCover= ()=>Array.from(document.getElementsByClassName("imgOfSongItem")).forEach((element,i)=>{
   element.src=songs[i].coverPath;
})
makeCover();
Array.from(document.getElementsByClassName("songName")).forEach((element,i)=>{
   element.innerHTML=songs[i].name;
})


Array.from(document.getElementsByClassName("imgOfSongItem")).forEach((element)=>{
    element.addEventListener('click',e=>{
            makeCover();
            audioElement.pause()
            e.target.src=(e.target.src)+"/../0.gif"
            audioElement = new Audio(songs[e.target.id].path)
            audioElement.play()
            playing = e.target.id;
            paused = -1;
            playButtonElement.classList.remove("fa-play-circle");
            playButtonElement.classList.add("fa-pause-circle");
            progressButtonElement.value=0;
            songCoverName.innerHTML=songs[(e.target.id)].name
            songCoverImg.src=songs[(e.target.id)].coverPath
            audioTimeChange()
            if(songs[playing].liked===true)
            {
                document.getElementById("like").classList.remove("far")
                document.getElementById("like").classList.add("fas")
                document.getElementById("like").innerHTML=" Liked";
            }
            else
            {
                document.getElementById("like").classList.remove("fas")
                document.getElementById("like").classList.add("far")
                document.getElementById("like").innerHTML=" Like";
            }
        
    })
})

Array.from(document.getElementsByClassName("above-img")).forEach((element)=>{
    element.addEventListener('click',e=>{
            makeCover();
            audioElement.pause()
            var exelement = document.getElementById(e.target.classList[3]);
            exelement.src=(exelement.src)+"/../0.gif"
            audioElement = new Audio(songs[exelement.id].path)
            audioElement.play()
            playing = exelement.id;
            paused = -1;
            playButtonElement.classList.remove("fa-play-circle");
            playButtonElement.classList.add("fa-pause-circle");
            progressButtonElement.value=0;
            songCoverName.innerHTML=songs[(exelement.id)].name
            songCoverImg.src=songs[(exelement.id)].coverPath
            audioTimeChange()
            if(songs[playing].liked===true)
            {
                document.getElementById("like").classList.remove("far")
                document.getElementById("like").classList.add("fas")
                document.getElementById("like").innerHTML=" Liked";
            }
            else
            {
                document.getElementById("like").classList.remove("fas")
                document.getElementById("like").classList.add("far")
                document.getElementById("like").innerHTML=" Like";
            }
        
    })
})

playButtonElement.addEventListener("click",()=>{    
    if(playButtonElement.classList[2]==="fa-play-circle")
    {
        audioElement.play()
        playing = paused;
        paused = -1;
        document.getElementById(playing).src="covers/0.gif";
        playButtonElement.classList.remove("fa-play-circle");
        playButtonElement.classList.add("fa-pause-circle");
    }
    else
    {
        makeCover()
        audioElement.pause()
        paused =  playing;
        playing = -1;
        playButtonElement.classList.remove("fa-pause-circle");
        playButtonElement.classList.add("fa-play-circle");
    }
})
progressButtonElement.addEventListener('change',()=>{
    audioElement.currentTime=audioElement.duration*progressButtonElement.value/100;
})

// console.log(songs[paused].liked===false)
var fetchLike = ()=>document.getElementById("like").addEventListener("click",(e)=>
{
    if(playing===-1)
    {
        if(songs[paused].liked===true)
        {
            document.getElementById("like").classList.remove("fas")
            document.getElementById("like").classList.add("far")
            document.getElementById("like").innerHTML=" Like";
            songs[paused].liked=false;
        }
        else
        {
            document.getElementById("like").classList.remove("far")
            document.getElementById("like").classList.add("fas")
            document.getElementById("like").innerHTML=" Liked";
            songs[paused].liked=true;
        }
    }
    else
    {
        if(songs[playing].liked===true)
        {
            document.getElementById("like").classList.remove("fas")
            document.getElementById("like").classList.add("far")
            document.getElementById("like").innerHTML=" Like";
            songs[playing].liked=false;
        }
        else
        {
            document.getElementById("like").classList.remove("far")
            document.getElementById("like").classList.add("fas")
            document.getElementById("like").innerHTML=" Liked";
            songs[playing].liked=true;
        }
    }
})
fetchLike();

Array.from(document.getElementsByClassName("imgOfSongItem")).forEach((element)=>{
    element.addEventListener('mouseover',e=>{
            e.target.style.opacity = "50%"
    })
})

Array.from(document.getElementsByClassName("above-img")).forEach((element)=>{
    element.addEventListener('mouseover',e=>{
            if(playing===document.getElementById(e.target.classList[3]))
            {
                document.getElementById(e.target.classList[3]).style.opacity = "50%";
                e.target.style.opacity = "0%"
            }
            else
            {
                document.getElementById(e.target.classList[3]).style.opacity = "50%";
                e.target.style.opacity = "100%"
            }
    })
})
Array.from(document.getElementsByClassName("imgOfSongItem")).forEach((element)=>{
    element.addEventListener('mouseout',e=>{
            e.target.style.opacity = "100%"
    })
})
Array.from(document.getElementsByClassName("above-img")).forEach((element)=>{
    element.addEventListener('mouseout',e=>{
            
            e.target.style.opacity = "0%"
    })
})

var audioTimeChange = () => audioElement.addEventListener("timeupdate",()=>{
    progressButtonElement.value=audioElement.currentTime/audioElement.duration*100;
})
audioTimeChange()

document.addEventListener("keypress",function(event){
    if(event.key === " ")
    {
        if(playButtonElement.classList[2]==="fa-play-circle")
        {
            audioElement.play()
            playing = paused;
            paused = -1;
            document.getElementById(playing).src="covers/0.gif";
            playButtonElement.classList.remove("fa-play-circle");
            playButtonElement.classList.add("fa-pause-circle");
        }
        else
        {
            makeCover()
            audioElement.pause()
            paused =  playing;
            playing = -1;
            playButtonElement.classList.remove("fa-pause-circle");
            playButtonElement.classList.add("fa-play-circle");
        }
        audioTimeChange()
    }
 });