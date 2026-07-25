'use strict'

window.onload = init;

function init() {
  document.querySelector('.nav-close').style.display = 'none';
  document.querySelector('.nav-trigger').addEventListener('click', openMenu);
  document.querySelector('.nav-close').addEventListener('click', closeMenu);
  document.querySelector('.nav > ul').style.display = 'none';
}

function openMenu() {
  const state = document.querySelector('.nav > ul').style.display;

  if(state == 'none') {
    document.querySelector('.nav > ul').style.display = 'block';
    document.querySelector('.nav-trigger').style.display = 'none';
    document.querySelector('.nav-close').style.display = 'block';
    document.querySelector('.page__main-title').style.display = 'none';
    document.querySelector('.page__footer').style.display = 'none';
  } 
}

function closeMenu() {
  const state = document.querySelector('.nav > ul').style.display;

  if(state == 'block') {
    document.querySelector('.nav > ul').style.display = 'none';
    document.querySelector('.nav-close').style.display = 'none';
    document.querySelector('.nav-trigger').style.display = 'block';
    document.querySelector('.page__main-title').style.display = 'block';
    document.querySelector('.page__footer').style.display = 'block';
  };
}
