window.onload=()=>{
    const y=(e)=>{
        if(touched==false)
            alert("All unsaved changes to profile would be lost");
    }
    const x=(e)=>{
        touched=true;
        let name=document.getElementById("name").value;
        let disorder=document.getElementById("disorders").value;
        let arr=disorder.split("\n");
        console.log(arr);
        localStorage.setItem('currentUser',name);
        localStorage.setItem('disorder',arr);
    }
    let btn=document.getElementById("mybtn");
    btn.addEventListener('click',x);
    var touched=false;

    let track=document.getElementById("track");
    track.addEventListener('click',y);
}