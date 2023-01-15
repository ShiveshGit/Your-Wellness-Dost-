window.onload=()=>{
    let user=localStorage.getItem('currentUser');
    if(user==null)
    {
        alert("You are not logged in . Please log in for getting nutrition tips");
    }
    const getNutrition=async(ingredients)=>{
  
    obj={
        'title':'Best Reciepe',
        'ingr':ingredients
    }

    let options={
        method:'POST',
        cahce:'no-cache',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(obj)
    }
    let response=await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${api_key}`,options);
    let r=await response.json();
    return r;
    }
    const func=async(ingredients)=>{

        let response=await getNutrition(ingredients);
        let calories=document.getElementById("calories");
        let fat=document.getElementById("fat");
        let cholestrol=document.getElementById("cholestrol");
        let carbs=document.getElementById("carbs");
        let protein=document.getElementById("protein");
        let calcium=document.getElementById("calcium");
        let vitamin=document.getElementById("vitamin");
        let potassium=document.getElementById("potassium");
        let sodium=document.getElementById("sodium");
        let iron=document.getElementById("iron");
        let rept=response.totalNutrients;
        let cho=rept.CHOLE.quantity;
        cho=Number.parseInt(cho);
        let he=rept.NA.quantity;
        he=Number.parseInt(he);
        calories.innerHTML=rept.ENERC_KCAL.quantity+rept.ENERC_KCAL.unit;
        fat.innerHTML=rept.FAT.quantity+rept.FAT.unit;
        cholestrol.innerHTML=rept.CHOLE.quantity+rept.CHOLE.unit;
        carbs.innerHTML=rept.CHOCDF.quantity+rept.CHOCDF.unit;
        protein.innerHTML=rept.PROCNT.quantity+rept.PROCNT.unit;
        calcium.innerHTML=rept.CA.quantity+rept.CA.unit;
        vitamin.innerHTML=rept.VITD.quantity+rept.VITD.unit;
        potassium.innerHTML=rept.K.quantity+rept.K.unit;
        sodium.innerHTML=rept.NA.quantity+rept.NA.unit;
        iron.innerHTML=rept.FE.quantity+rept.FE.unit;
        if(user!=null)
        {
            let arr=localStorage.getItem('disorder');
            arr=arr.split(",");
            console.log(arr);
            let hyper=false;
            let heart=false;
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i].toLowerCase()==="hypertension")
                {
                    hyper=true;
                }
                if(arr[i].toLowerCase()==="heart")
                {
                    heart=true;
                }
            }
            let remark=document.getElementById("remarkPara");
            remark.innerHTML="";
            if(hyper==true)
            {
                if(he>=220)
                {
                    remark.innerHTML+=`For probem of  hypertension, this meal has high sodium, hence not recommended`
                }
            }
            if(heart==true)
            {
                if(cho>=600)
                {
                    remark.innerHTML+=`For Heart, this dish is unhealthy of high cholestrol`
                }
            }
            if(hyper==false && heart==false)
            {
                remark.innerHTML=`This food is perfect for a balanced diet.`;
            }
        }
        console.log(response);
    }
    const x=(e)=>{
        console.log("Here");
        let ingredients=document.getElementById("ingredients").value;
        console.log(ingredients);
        ingredients=ingredients.split("\n");
        console.log(ingredients);
        func(ingredients);
        touched=true;
    }
    let btn=document.getElementById("btn");
    btn.addEventListener('click',x);
 
}