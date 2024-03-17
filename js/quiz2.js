"use strict";

const ANSWER_A = document.getElementById('answer_A');
const ANSWER_S = document.getElementById('answer_S');
const CONFIRM = document.getElementById('confirm');

function selection() {
    if(ANSWER_A.name === "R2Q1") {
        var ARTIST = "레드벨벳";
        var SONG = "피카부";
        var link = './R2Q2.html';
    } else if(ANSWER_A.name === "R2Q2") {
        var ARTIST = "블랙핑크";
        var SONG = "핑크베놈";
        var link = './R2Q3.html';
    } else if(ANSWER_A.name === "R2Q3") {
        var ARTIST = "아이즈원";
        var SONG = "파노라마";
        var link = './R2Q4.html';
    } else {
        var ARTIST = "트와이스";
        var SONG = "알콜프리";
        var link = './R3Q1.html';
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