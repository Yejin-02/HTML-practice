"use strict";

const ANSWER_A = document.getElementById('answer_A');
const ANSWER_S = document.getElementById('answer_S');
const CONFIRM = document.getElementById('confirm');

function selection() {
    if(ANSWER_A.name === "R3Q1") {
        var ARTIST = "아이브";
        var SONG = "러브다이브";
        var link = './R3Q2.html';
    } else if(ANSWER_A.name === "R3Q2") {
        var ARTIST = "지수";
        var SONG = "꽃";
        var link = './R3Q3.html';
    } else if(ANSWER_A.name === "R3Q3") {
        var ARTIST = "스테이씨";
        var SONG = "테디베어";
        var link = './R3Q4.html';
    } else {
        var ARTIST = "프로미스나인";
        var SONG = "디엠";
        var link = './ending.html';
    }
    move(ARTIST, SONG, link);
}

function move(ARTIST, SONG, link){
    if(ANSWER_A.value === ARTIST && ANSWER_S.value === SONG) {
        alert("맞았습니다");
        location.href = link;
    } else{
        alert("틀렸습니다");
    }
};

CONFIRM.addEventListener('click', selection);