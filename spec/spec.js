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

  // it('should check what the life expectancy of ')

  it('should return average remaining years of life for user on each planet', function(){
    const user = new User(6, 10, 1998);
    ageCalc(user);
    userLifeExpectancy(user);
    expect(user.earthYearsLeft).toEqual(58);
    expect(user.mercuryYearsLeft).toEqual(241);
    expect(user.venusYearsLeft).toEqual(93);
    expect(user.marsYearsLeft).toEqual(30);
    expect(user.jupiterYearsLeft).toEqual(4);
  });

  it('should return years over average if older than average life expectancy', function(){
    const user = new User(6, 10, 1928);
    ageCalc(user);
    userLifeExpectancy(user);
    expect(user.earthYearsOver).toEqual(12);
    expect(user.mercuryYearsOver).toEqual(50);
    expect(user.venusYearsOver).toEqual(19);
    expect(user.marsYearsOver).toEqual(6);
    expect(user.jupiterYearsOver).toEqual(1);
  });

});
