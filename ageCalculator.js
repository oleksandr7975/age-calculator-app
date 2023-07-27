function myTest(){
    let birthDay = document.querySelector('.day').value;
    let birthMonth = document.querySelector('.month').value;
    let birthYear = document.querySelector('.year').value;

    console.log(day);
    document.querySelector('.result-years').innerHTML = birthDay;
    document.querySelector('.result-months').innerHTML = birthMonth;
    document.querySelector('.result-days').innerHTML = birthYear;
    

}
document.querySelector('button').onclick = myTest;