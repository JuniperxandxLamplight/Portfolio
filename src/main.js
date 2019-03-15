import './css/styles.css';
import './css/Aurora-Framework.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User, ageCalc, userLifeExpectancy } from './backEnd.js';

$(function(){
  $(".calculate").click(function(){
    const day = parseInt($(".day").text());
    const month = parseInt($(".month").val());
    const year = parseInt($(".year").val());
    const activity = parseInt($(".activity").val());
    const sex = parseInt($(".sex").val());
    const relationships = parseInt($(".relationships").val());
    const smoker = parseInt($(".smoker").val());

    let user = new User(month, day, year, activity, sex, relationships, smoker);
    ageCalc(user);
    userLifeExpectancy(user);

    $(".form").fadeOut(500);
    $(".earthAge").text(user.earthAge);
    $(".mercuryAge").text(user.mercuryAge);
    $(".venusAge").text(user.venusAge);
    $(".marsAge").text(user.marsAge);
    $(".jupiterAge").text(user.jupiterAge);
    if (user.over === false){
      $(".earthYearsLeft").text(user.earthYearsLeft);
      $(".mercuryYearsLeft").text(user.mercuryYearsLeft);
      $(".venusYearsLeft").text(user.venusYearsLeft);
      $(".marsYearsLeft").text(user.marsYearsLeft);
      $(".jupiterYearsLeft").text(user.jupiterYearsLeft);
      $(".yearsLeft").fadeIn().delay(500);
    } else if (user.over === true){
      $(".earthYearsOver").text(user.earthYearsOver);
      $(".mercuryYearsOver").text(user.mercuryYearsOver);
      $(".venusYearsOver").text(user.venusYearsOver);
      $(".marsYearsOver").text(user.marsYearsOver);
      $(".jupiterYearsOver").text(user.jupiterYearsOver);
      $(".yearsOver").fadeIn().delay(500);
    }
    $(".ageDisplay").fadeIn().delay(500);
  });
});
