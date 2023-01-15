window.onload=()=>{
    console.log("loaded");
    let firstNewsPara=document.getElementById("firstNewsPara");
    let firstNewsHeading=document.getElementById("firstNewsHeading");
    let secondNewsPara=document.getElementById("secondNewsPara")
    let secondNewsHeading=document.getElementById("secondNewsHeading")
    let thirdNewsPara=document.getElementById("thirdNewsPara")
    let thirdNewsHeading=document.getElementById("thirdNewsHeading")

    const fetchHealthNews=async()=>{
        const url=`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${api_key}`;
        let response=await fetch(url);
        let r=await response.json();
        return r;
    }
    const printToScreenNews=async()=>{
        let healthNews=await fetchHealthNews();
        return healthNews.articles;
    }
    const mainFunc=async()=>{

        let articles=await printToScreenNews();
        console.log(articles);
        let count=0;
        let pickedArticles=new Set();
        while(pickedArticles.size<3)
        {
            let index=Math.floor(Math.random()*10);
            pickedArticles.add({'title':articles[index]['title'],'desc':articles[index]['description']});
        }
        pickedArticles=Array.from(pickedArticles);
        if(pickedArticles[0]['title']!=null)
            firstNewsHeading.innerHTML=`${pickedArticles[0]['title']}`;
        if(pickedArticles[0]['desc']!=null)
            firstNewsPara.innerHTML=`${pickedArticles[0]['desc']}`;
        if(pickedArticles[1]['title'])
            secondNewsHeading.innerHTML=`${pickedArticles[1]['title']}`;
        if(pickedArticles[1]['desc']!=null)
            secondNewsPara.innerHTML=`${pickedArticles[1]['desc']}`;
        if(pickedArticles[2]['title']!=null)
            thirdNewsHeading.innerHTML=`${pickedArticles[2]['title']}`;
        if(pickedArticles[2]['desc']!=null)
            thirdNewsPara.innerHTML=`${pickedArticles[2]['desc']}`;
    }
    mainFunc();
}