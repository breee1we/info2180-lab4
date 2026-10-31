window.addEventListener('load', function(){
    const searchBtn= document.querySelector('#search-btn');
    const searchIn= document.querySelector('#search');
    const result= this.document.querySelector('#result');


    searchBtn.addEventListener('click',function(){
        const query = searchIn.value.trim();
        const url= 'superheroes.php?query='+encodeURIComponent(query);

        fetch(url)
        .then(function(response){
            return response.text();
        })
        .then (function(data){
            result.innerHTML=data;
        })
        .catch(function(error){
            console.log(error);
        });
        
    });
});