let color_aktiv_rejim_risk = "#792f60";
let color_passiv_rejim_risk = "#402051";
let fishki;
let rejim_risk_vibor = 'rejim_risk_vibor_stavki_value_1';
let rejim_risk_koef = 1.5;
let stavka;
let viigrish;
// игра
class Kubik {
  constructor(value, mesto_na_pole_top, mesto_na_pole_left, rotate)
  {
    this.value = value;
    this.mesto_na_pole_top = mesto_na_pole_top;
    this.mesto_na_pole_left = mesto_na_pole_left;
    this.rotate = rotate;
  }
}

let kubiki_obj = [new Kubik(),new Kubik(),new Kubik(),new Kubik(),new Kubik(),new Kubik()];
let stakan_kolvo_kubikov_v_igre = 1;
let stakan_aktive = true;


// ползунок в риске
function range_risk(){
    let range_value = document.getElementById("range_risk").value;
    stavka =  Math.ceil(fishki * (range_value) / 50);
    document.getElementById("range_risk_text").textContent  = stavka;
    viigrish = Math.floor(stavka * rejim_risk_koef)
    document.getElementById("risk_viigrish_text").textContent = viigrish;
}

// выбор коэффициента
function risk_vibor_stavki(id_value){
    document.getElementById(rejim_risk_vibor).style.background = color_passiv_rejim_risk;
    rejim_risk_vibor = id_value;
    document.getElementById(rejim_risk_vibor).style.background = color_aktiv_rejim_risk;

    switch (rejim_risk_vibor) {
        case 'rejim_risk_vibor_stavki_value_1':{rejim_risk_koef = 1.5;break;}
        case 'rejim_risk_vibor_stavki_value_2':{rejim_risk_koef = 2;break;}
        case 'rejim_risk_vibor_stavki_value_3':{rejim_risk_koef = 2.5;break;}
        case 'rejim_risk_vibor_stavki_value_4':{rejim_risk_koef = 5;break;}
        case 'rejim_risk_vibor_stavki_value_5':{rejim_risk_koef = 7;break;}
        case 'rejim_risk_vibor_stavki_value_6':{rejim_risk_koef = 10;break;}
    }
    viigrish = Math.floor(stavka * rejim_risk_koef)
    document.getElementById("risk_viigrish_text").textContent = viigrish;

}

// открытие модальной формы риска
function rejim_risk_form(){
    document.getElementById(rejim_risk_vibor).style.background = color_aktiv_rejim_risk;

    fishki = document.getElementById("fishki_value").textContent;
    let range_value = document.getElementById("range_risk").value;
    stavka =  Math.floor(fishki * (range_value) / 50);
    document.getElementById("range_risk_text").textContent  = stavka;
    viigrish = Math.floor(stavka * rejim_risk_koef)
    document.getElementById("risk_viigrish_text").textContent = viigrish;
}

// НАЖАЛ НА СТАКАН
function play_stakan_click(){
  if(stakan_aktive){
    // document.getElementById('play_stakan').style.opacity = 1;
    for (var kubik_id = 0; kubik_id < 6; kubik_id++) { // Кубики в стакан
      document.getElementById('play_kubik_form_' + kubik_id).style.marginLeft = '72%';
      document.getElementById('play_kubik_form_' + kubik_id).style.marginTop = '96%';
      document.getElementById('play_kubik_form_' + kubik_id).style.opacity = 0;
    }
    // stakan_aktive = false;
    play_stakan_animation();
  }
}

function play_stakan_animation() {
      setTimeout(play_stakan_rotate, 0, 0.3, 40);
      setTimeout(play_stakan_rotate, 300, 0.1, -45);
      setTimeout(play_stakan_rotate, 500, 0.2, 25);
      setTimeout(play_stakan_rotate, 700, 0.2, -45);
      setTimeout(play_stakan_rotate, 900, 0.2, 25);
      setTimeout(play_stakan_rotate, 1100, 0.2, -45);
      setTimeout(play_stakan_rotate, 1300, 0.2, 25);
      setTimeout(play_stakan_rotate, 1500, 0.2, -45);
      setTimeout(play_stakan_rotate, 1700, 0.2, 25);
      setTimeout(play_stakan_rotate, 1900, 0, 0);
      setTimeout(play_stakan_opacity, 1950);
      setTimeout(brosok_kubikov, 2000);
}
// Дерганье стакана
function play_stakan_rotate(time, grad){
    document.getElementById('play_stakan').style.transform = time + "s";
    document.getElementById('play_stakan').style.transform = "rotate(" + grad +"deg)";
}
// затемнение стакана
function play_stakan_opacity() {
  document.getElementById('play_stakan').style.opacity = 0.5;
  document.getElementById('play_stakan_img').style.cursor = "default";
}

function brosok_kubikov() {
  let kubik_number = 0;
  let kubik_id = 0;
  while(kubik_number < stakan_kolvo_kubikov_v_igre){
    kubiki_obj[kubik_id].value = Math.floor(Math.random() * 6) + 1;
    document.getElementById('play_kubik_' + kubik_id).src = "img/kub_" + kubiki_obj[kubik_id].value +".png";
    document.getElementById('play_kubik_form_' + kubik_id).style.visibility  = 'visible';
    raspolojenie_kubika(stakan_kolvo_kubikov_v_igre, kubik_number, kubik_id);
    document.getElementById('play_kubik_form_' + kubik_id).style.transform = 'rotate('+ (Math.floor(Math.random() * 60) - 30) + 'deg)';
    document.getElementById('play_kubik_form_' + kubik_id).style.opacity  = 1;
    kubik_id++;
    kubik_number++;
  }
  if(stakan_kolvo_kubikov_v_igre < 6)
    stakan_kolvo_kubikov_v_igre++;
}

function raspolojenie_kubika(kolvo_kubikov_v_igre, kubik_number, kubik_id) {
  console.log(kolvo_kubikov_v_igre);
  switch (kolvo_kubikov_v_igre) {
    case 6:
      switch (kubik_number) {
        case 1:
          kubiki_obj[kubik_id].mesto_na_pole_left = '20%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '5%';
          break;
        case 2:
          kubiki_obj[kubik_id].mesto_na_pole_left = '43%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '13%';
          break;
        case 3:
          kubiki_obj[kubik_id].mesto_na_pole_left = '64%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '20%';
          break;
        case 4:
          kubiki_obj[kubik_id].mesto_na_pole_left = '70%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '47%';
          break;
        case 5:
          kubiki_obj[kubik_id].mesto_na_pole_left = '40%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '43%';
          break;
        default:
          kubiki_obj[kubik_id].mesto_na_pole_left = '16%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '32%';
      }
      break;
    case 5:
    switch (kubik_number) {
      case 1:
        kubiki_obj[kubik_id].mesto_na_pole_left = '3%';
        kubiki_obj[kubik_id].mesto_na_pole_top = '24%';
        break;
      case 2:
        kubiki_obj[kubik_id].mesto_na_pole_left = '25%';
        kubiki_obj[kubik_id].mesto_na_pole_top = '5%';
        break;
      case 3:
        kubiki_obj[kubik_id].mesto_na_pole_left = '62%';
        kubiki_obj[kubik_id].mesto_na_pole_top = '15%';
        break;
      case 4:
        kubiki_obj[kubik_id].mesto_na_pole_left = '26%';
        kubiki_obj[kubik_id].mesto_na_pole_top = '42%';
        break;
      default:
        kubiki_obj[kubik_id].mesto_na_pole_left = '55%';
        kubiki_obj[kubik_id].mesto_na_pole_top = '38%';
      }
      break;
    case 4:
      switch (kubik_number) {
        case 1:
          kubiki_obj[kubik_id].mesto_na_pole_left = '15%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '45%';
          break;
        case 2:
          kubiki_obj[kubik_id].mesto_na_pole_left = '58%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '15%';
          break;
        case 3:
          kubiki_obj[kubik_id].mesto_na_pole_left = '62%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '48%';
          break;
        default:
          kubiki_obj[kubik_id].mesto_na_pole_left = '25%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '5%';
        }
      break;
    case 3:
      switch (kubik_number) {
        case 1:
          kubiki_obj[kubik_id].mesto_na_pole_left = '25%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '5%';
          break;
        case 2:
          kubiki_obj[kubik_id].mesto_na_pole_left = '52%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '15%';
          break;
        default:
          kubiki_obj[kubik_id].mesto_na_pole_left = '27%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '37%';
        }
      break;
    case 2:
      switch (kubik_number) {
        case 1:
          kubiki_obj[kubik_id].mesto_na_pole_left = '46%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '10%';
          break;
        default:
          kubiki_obj[kubik_id].mesto_na_pole_left = '33%';
          kubiki_obj[kubik_id].mesto_na_pole_top = '43%';
        }
      break;
    default:
      kubiki_obj[kubik_id].mesto_na_pole_left = '32%';
      kubiki_obj[kubik_id].mesto_na_pole_top = '17%';
  }
  document.getElementById('play_kubik_form_' + kubik_id).style.marginLeft = kubiki_obj[kubik_id].mesto_na_pole_left;
  document.getElementById('play_kubik_form_' + kubik_id).style.marginTop = kubiki_obj[kubik_id].mesto_na_pole_top;

}
