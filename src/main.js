import './css/styles.css';
import $ from 'jquery';
// import { User, ageCalc, userLifeExpectancy } from './backEnd.js';

$(function(){
  for(let i = 0; i < 625; i++){
    $('.container').append(`<div class='wave piece${i}'>
      <div class='leftWave halfPiece${i} move${i}'></div>
      <div class='rightWave halfPiece${i} move${i}'></div>
      <div class='cover cover${i}'>
      </div>
    </div>`)
  }
  for(let i = 0; i < 625; i++){
    $(`.move${i}`).css('animation-delay', `${Math.floor(Math.random() * 10)}s`);
    $(`.piece${i}`).css('animation-delay', `${0.01*i}s`);
    $(`.cover${i}`).css('animation-delay', `${0.01*i}s`);
  }
});
