let color_aktiv_rejim_risk = "#792f60";
let color_passiv_rejim_risk = "#402051";
let fishki;
let rejim_risk_vibor = 'rejim_risk_vibor_stavki_value_1';
let rejim_risk_koef = 1.5;
let stavka;
let viigrish;
// игра
let stakan_kubiki_value = [];
let stakan_kolvo_kubikov = 6;
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
    stakan_aktive = false;
    play_stakan_animation();
    play_stakan_generator_kub();
    play_stakan_brosok_kubikov();
  }
}


function play_stakan_generator_kub() {
  for (var i = 0; i < stakan_kolvo_kubikov; i++) {
    stakan_kubiki_value[i] = Math.floor(Math.random() * 6) + 1;
    console.log(stakan_kubiki_value[i]);
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
      setTimeout(play_stakan_opacity, 2000)
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
