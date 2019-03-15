function earthAgeCalc(user){
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const birthDate = user.getDate();
  const birthMonth = user.getMonth();
  const birthYear = user.getFullYear();

  const yearDifference = currentYear - birthYear;
  const timeOfYear = 0;
  if (birthMonth === currentMonth){
    if (currentDate === birthDate){
      timeOfYear += 1;
      user.happyBirthday = true;
    } else if (currentDate > birthDay)
  }
}
