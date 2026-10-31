window.addEventListener('load', function(){
    const searchBtn= document.querySelector('#search-btn');

    searchBtn.addEventListener('click',function(){
        fetch('superheroes.php')
        .then(function(response){
            return response.text();
        })
        .then (function(data){
            alert(data);
        })
        .catch(function(error){
            console.log(error);
        });
        
    });
});