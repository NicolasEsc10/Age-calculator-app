function calculateAge() {
// Gets the inputs and their values

  let check_day = document.getElementById("day");
  let check_month = document.getElementById("month");
  let check_year = document.getElementById("year");

  const birthdateDay = Number(check_day.value);
  const birthdateMonth = Number(check_month.value) - 1; 
  const birthdateYear = Number(check_year.value);
  const birthdate = new Date(birthdateYear, birthdateMonth, birthdateDay);
  const today = new Date();

// Gets the results along with the years months and days

  let res_years = document.querySelector(".result_years");
  let res_mounth =document.querySelector(".result_months");
  let res_days =document.querySelector(".result_days");

  let ageYears = today.getFullYear() - birthdate.getFullYear();
  let ageMonths = today.getMonth() - birthdate.getMonth();
  let ageDays = today.getDate() - birthdate.getDate();

  
  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    ageYears--;
    ageMonths += 12;
  };
  
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  };

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  };

// Conditional that restricts empty numbers or equal to zero.
  
  if ((check_day.value !== "" && check_month.value !== "" && check_year.value !== "") && (birthdateYear <= today.getFullYear() && birthdateYear >= 1901) && 
    (check_day.value !== "0" && check_month.value !== "0" && check_year.value !== "0") && (birthdateDay <= 31 && birthdateMonth <= 12) && isDateValid(birthdateDay, Number(check_month.value), birthdateYear)){

    res_years.textContent = ageYears;
    res_mounth.textContent = ageMonths;
    res_days.textContent = ageDays;

    res_years.setAttribute( 'style', 'letter-spacing: 0px;');
    res_mounth.setAttribute( 'style', 'letter-spacing: 0px;');
    res_days.setAttribute( 'style', 'letter-spacing: 0px;');

    

    error1.style.display = 'none';
  }

// controls error messages in case the data entered in the inputs is not correct

  else{
    if (check_day.value == "") {
      error1.textContent = 'This field is required';
      error1.style.display = 'block';
    };

    if (check_month.value == "") {
      error2.textContent = 'This field is required';
      error2.style.display = 'block';
    };

    if ( check_year.value == "") {
      error3.textContent = 'This field is required';
      error3.style.display = 'block';
    };
  };


// controls error messages in case the day does not match the month


  if (birthdate.getMonth() !== birthdateMonth) {
    error1.textContent = 'Must be a valid day';
    error1.style.display = 'block';
  }

  if ((Number(check_month.value) < 1 || Number(check_month.value) > 12)) {
    error1.style.display = 'none';

    if (birthdateDay == 0 || birthdateDay > 31) {
      error1.textContent = 'Must be a valid day';
      error1.style.display = 'block';
    }
  }

  if (birthdateYear > today.getFullYear()) {
    error1.style.display = 'none';

    if (birthdateDay == 0 || birthdateDay > 31) {
      error1.textContent = 'Must be a valid day';
      error1.style.display = 'block';
    }
  }

}

// Functions that throw an error message when an invalid message is entered in the inputs.

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let today = new Date();


function validarInput1(input) {
  if (input.value.trim() == '') {
    error1.textContent = 'This field is required';
    error1.style.display = 'block';
  } 
  else if(input.value.trim() == 0 || input.value.trim() > 31){
    error1.textContent = 'Must be a valid day';
    error1.style.display = 'block';
  }
  else {
    error1.style.display = 'none';
  }
} 

function validarInput2(input) {
  if (input.value.trim() == '') {
    error2.textContent = 'This field is required';
    error2.style.display = 'block';
  } 
  else if(input.value.trim() == 0 || input.value.trim() > 12){
    error2.textContent = 'Must be a valid month';
    error2.style.display = 'block';
  }
  else {
    document.getElementById('error2').style.display = 'none';
  }
} 

function validarInput3(input) {
  if (input.value.trim() == '') {
    error3.textContent = 'This field is required';
    error3.style.display = 'block';
  } 
  else if(input.value.trim() > today.getFullYear()){
    error3.textContent = 'Must be in the past';
    error3.style.display = 'block';
  }
  else if(input.value.trim() <= 1900){
    error3.textContent = 'Must be in the future';
    error3.style.display = 'block';
  }
  else {
    document.getElementById('error3').style.display = 'none';
  }
} 

// function that checks if the date is valid.

function isDateValid(day, month, year) {
  var date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}







