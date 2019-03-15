import { User, ageCalc } from '../src/backEnd.js'

describe('userAges', function(){

    const user = new User(6, 10, 1998);

  it('should return the age of the user in years on Earth', function(){
    ageCalc(user);
    expect(user.earthAge).toEqual(20);
  });

  it('should return the age of the user in years on Mercury', function(){
    ageCalc(user);
    expect(user.mercuryAge).toEqual(83);
  });

  it('should return the age of the user in years on Venus', function(){
    ageCalc(user);
    expect(user.venusAge).toEqual(32);
  });

  it('should return the age of the user in years on Mars', function(){
    ageCalc(user);
    expect(user.marsAge).toEqual(10);
  });

  it('should return the age of the user in years on Jupiter', function(){
    ageCalc(user);
    expect(user.jupiterAge).toEqual(1);
  });
});
