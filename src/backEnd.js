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
  user.mercuryAge = parseInt(user.earthAge / .24);
  user.venusAge = parseInt(user.earthAge / .62);
  user.marsAge = parseInt(user.earthAge / 1.88);
  user.jupiterAge = parseInt(user.earthAge / 11.86);
}

function userLifeExpectancy(user){
  if (user.earthAge > 78){
    user.earthYearsOver = user.earthAge - 78;
    user.mercuryYearsOver = parseInt(user.earthYearsOver / .24);
    user.venusYearsOver = parseInt(user.earthYearsOver / .62);
    user.marsYearsOver = parseInt(user.earthYearsOver / 1.88);
    user.jupiterYearsOver = parseInt(user.earthYearsOver / 11.86);
  } else {
    user.earthYearsLeft = 78 - user.earthAge;
    user.mercuryYearsLeft = parseInt(user.earthYearsLeft / .24);
    user.venusYearsLeft = parseInt(user.earthYearsLeft / .62);
    user.marsYearsLeft = parseInt(user.earthYearsLeft / 1.88);
    user.jupiterYearsLeft = parseInt(user.earthYearsLeft / 11.86);
  }
}

export { User, ageCalc, userLifeExpectancy };
