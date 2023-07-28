function myTest(){
    let birthDay = document.querySelector('.day').value;
    let birthMonth = document.querySelector('.month').value;
    let birthYear = document.querySelector('.year').value;
    const dateNow = new Date().getDate();
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth();
    let resultDate = dateNow-birthDay;
    let resultYear = yearNow-birthYear;
    let resultMonth = (monthNow+1)-birthMonth;

    console.log(day);
    document.querySelector('.result-years').innerHTML = resultYear;
    document.querySelector('.result-months').innerHTML = resultMonth;
    document.querySelector('.result-days').innerHTML = resultDate;
    

}
document.querySelector('button').onclick = myTest;