"use strict";

const ANSWER_A = document.getElementById('answer_A');
const ANSWER_S = document.getElementById('answer_S');
const CONFIRM = document.getElementById('confirm');

function selection() {
    if(ANSWER_A.name === "R1Q1") {
        var ARTIST = "에스파";
        var SONG = "드라마";
        var link = './R1Q2.html';
    } else if(ANSWER_A.name === "R1Q2") {
        var ARTIST = "뉴진스";
        var SONG = "어텐션";
        var link = './R1Q3.html';
    } else if(ANSWER_A.name === "R1Q3") {
        var ARTIST = "르세라핌";
        var SONG = "스마트";
        var link = './R1Q4.html';
    } else {
        var ARTIST = "제니";
        var SONG = "솔로";
        var link = './R2Q1.html';
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