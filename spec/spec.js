describe('earthAge', function(){
  it('should return the age of the user in years', function(){
    const user = new Date(1998, 5, 10);
    earthAgeCalc(user);
    expect(user.earthAge).toEqual(20);
  });
});
