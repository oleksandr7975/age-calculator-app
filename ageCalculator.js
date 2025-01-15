function test() {

    const dayInput = document.querySelector('.day');
    const monthInput = document.querySelector('.month');
    const yearInput = document.querySelector('.year');
    const dayError = document.querySelector('.day + .error-message');
    const monthError = document.querySelector('.month + .error-message');
    const yearError = document.querySelector('.year + .error-message');
    
    let isValid = true;

    //проверка на пустое поле: день
    if(!dayInput.value.trim()){
        dayError.textContent = "This field is required"
        dayError.classList.add('visible');
        isValid = false;
    } 
    else{
        dayError.textContent = "";
        dayError.classList.remove('visible');
    }

    //проверка на пустое поле: месяц

    if(!monthInput.value.trim()){
        monthError.textContent = "This field is required"
        monthError.classList.add('visible');
        isValid = false;
    } 
    else{
        monthError.textContent = "";
        monthError.classList.remove('visible');
    }

    //проверка на пустое поле: год

    if(!yearInput.value.trim()){
        yearError.textContent = "This field is required"
        yearError.classList.add('visible');
        isValid = false;
    } 
    else{
        yearError.textContent = "";
        yearError.classList.remove('visible');
    }

    if (!isValid) return;

//делаем число двузначное 
function formatInput(inputElement){
    let value = inputElement.value;
    let formattedValue = value.length === 1 ? '0' + value : value;
    inputElement.value = formattedValue;
    return formattedValue
}

    let birthDay = formatInput(dayInput);
    let birthMonth = formatInput(monthInput);
    let birthYear = parseInt(yearInput.value);


    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1; // Добавляем 1, чтобы получить привычный номер месяца
    const currentYear = now.getFullYear();


    //проверка на високосный год
    const isLeapYear = (year) =>{
        return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0);
    };
    
    //определяем максимальное количество дней в месяце
    const getDaysInMonth = (month, year) => {
        if (month === 2){
            return isLeapYear(year) ? 29 : 28;
        }
        return [4, 6, 9, 11].includes(month) ? 30 : 31;
    };

    //проверка дня
    const maxDays = getDaysInMonth(birthMonth, birthYear)
    if(birthDay < 1 || birthDay > maxDays || isNaN(birthDay)){
        dayError.textContent = "Must be a valid day";
        dayError.classList.add('visible');
        isValid = false;
    }
    else{
        dayError.textContent = "";
        dayError.classList.remove('visible');
    }
    //проверка месяца
    if(birthMonth < 1 || birthMonth > 12 || isNaN(birthMonth)){
        monthError.textContent = "Must be a valid month";
        monthError.classList.add('visible');
        isValid = false;
    }
    else{
        monthError.textContent = "";
        monthError.classList.remove('visible');
    }
    //проверка года
    if(birthYear > currentYear || birthYear < 1900 || isNaN(birthYear)){
        yearError.textContent = "Must be in the past";
        yearError.classList.add('visible');
        isValid = false;
    }
    else{
        yearError.textContent = "";
        yearError.classList.remove('visible');
    }
    if (!isValid) return;

    let resultYear = currentYear - birthYear;
    let resultMonth = currentMonth - birthMonth;
    let resultDate = currentDay - birthDay;

    // Корректируем месяц и год, если текущий месяц меньше месяца рождения
    if (resultMonth < 0) {
        resultYear--;
        resultMonth += 12;
    }

    // Корректируем дни и месяцы, если текущий день меньше дня рождения
    if (resultDate < 0) {
        const daysInPreviousMonth = getDaysInMonth(currentMonth - 1 || 12, currentYear); // Количество дней в предыдущем месяце
        resultDate += daysInPreviousMonth;
        resultMonth--;

        if (resultMonth < 0) {
            resultMonth += 12;
            resultYear--;
        }
    }

    // Выводим результат
    document.querySelector('.result-years').innerHTML = resultYear;
    document.querySelector('.result-months').innerHTML = resultMonth;
    document.querySelector('.result-days').innerHTML = resultDate;
}

document.querySelector('button').onclick = test;