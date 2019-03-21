import { User, ageCalc, userLifeExpectancy } from '../src/backEnd.js'

describe('userAges', function(){

  const user = new User(6, 10, 1998);
  beforeEach(function() {
    ageCalc(user);
  });

  it('should return the age of the user in years on Earth', function(){
    expect(user.earthAge).toEqual(20);
  });

  it('should return the age of the user in years on Mercury', function(){
    expect(user.mercuryAge).toEqual(83);
  });

  it('should return the age of the user in years on Venus', function(){
    expect(user.venusAge).toEqual(32);
  });

  it('should return the age of the user in years on Mars', function(){
    expect(user.marsAge).toEqual(10);
  });

  it('should return the age of the user in years on Jupiter', function(){
    expect(user.jupiterAge).toEqual(1);
  });
});

describe('userLifeExpectancy', function(){

  it('should check what the life expectancy of user is', function(){
    const user = new User(6, 10, 1998, 'high', 'male', 4, false);
    ageCalc(user);
    userLifeExpectancy(user);
    expect(user.averageLifeExpectancy).toEqual(86);
  });

  it('should return average remaining years of life for user on each planet', function(){
    const user = new User(6, 10, 1998, 'high', 'male', 4);
    ageCalc(user);
    userLifeExpectancy(user);
    expect(user.earthYearsLeft).toEqual(63);
    expect(user.mercuryYearsLeft).toEqual(262);
    expect(user.venusYearsLeft).toEqual(101);
    expect(user.marsYearsLeft).toEqual(33);
    expect(user.jupiterYearsLeft).toEqual(5);
  });

  it('should return years over average if older than average life expectancy', function(){
    const user = new User(6, 10, 1928, 'high', 'male', 4);
    ageCalc(user);
    userLifeExpectancy(user);
    expect(user.earthYearsOver).toEqual(7);
    expect(user.mercuryYearsOver).toEqual(29);
    expect(user.venusYearsOver).toEqual(11);
    expect(user.marsYearsOver).toEqual(3);
    expect(user.jupiterYearsOver).toEqual(0);
  });

});
