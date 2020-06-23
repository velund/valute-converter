let RUBinput = document.querySelector('#rub'),
    DOLLinput = document.querySelector('#doll');

RUBinput.addEventListener('input', function(){
    getData().then(resp => {calcDoll(resp);})
             .catch(function(resp){showProblems(resp);}); 

}); // event listener to rub input

DOLLinput.addEventListener('input', () => {
    getData().then(resp => {calcRub(resp);})
             .catch(resp => {showProblems(resp);});
}); //add event listener to doll input


function getData(){
    return new Promise(function(fullfil, reject){
        let request = new XMLHttpRequest();
        request.open('GET','curency.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        request.send();
        request.addEventListener('load', function(){
            if (request.status ==200){
                console.log('=4 passed');
                fullfil(this.response); 
                }else{
                reject(this.response); 
                } 
            
        }); //event listener to request
    }); //promise

} //get data func
function calcDoll(resp){
    let currencyOBJ = JSON.parse(resp); 
    console.log(currencyOBJ);
    DOLLinput.value = RUBinput.value / currencyOBJ.rub;

}
function calcRub(resp){
    let currencyOBJ = JSON.parse(resp); 
    console.log(currencyOBJ);
    RUBinput.value = DOLLinput.value / (1/currencyOBJ.rub);
}
function showProblems(resp){
    console.log(resp);
    let obj = { name: 'kirill', date: "liza"}; 
    console.log(obj);
    DOLLinput.value = 'error occured';
}


