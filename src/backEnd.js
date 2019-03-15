function User(month, date, year){
  this.month = month;
  this.date = date;
  this.year = year;
}

function ageCalc(user){
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  const yearDifference = (currentYear - 1) - user.year;
  let timeOfYear = 0;
  if (user.month === currentMonth){
    if (currentDate === user.date){
      timeOfYear += 1;
      user.happyBirthday = true;
    } else if (currentDate > user.date){
      timeOfYear += 1;
    }
  } else if (user.month < currentMonth){
    timeOfYear += 1;
  }
  user.earthAge = yearDifference + timeOfYear;

  user.mercuyrAge = parseInt(user.earthAge / .24);

  user.venusAge = parseInt(user.earthAge / .62);

  user.marsAge = parseInt(user.earthAge / 1.88);

  user.jupiterAge = parseInt(user.earthAge / 11.86);
}


export { User, ageCalc };
