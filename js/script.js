let color_aktiv_rejim_risk = "#792f60";
let color_passiv_rejim_risk = "#402051";
let fishki;
let rejim_risk_vibor = 'rejim_risk_vibor_stavki_value_1';
let rejim_risk_koef = 1.5;
let stavka;
let viigrish;
// игра
let stakan_kubiki_value = [];
let stakan_kolvo_kubikov_v_igre = 6;
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
    // stakan_aktive = false;
    play_stakan_animation();
    play_stakan_generator_kub();
  }
}


function play_stakan_generator_kub() {
  for (var i = 0; i < stakan_kolvo_kubikov; i++) {
    stakan_kubiki_value[i] = Math.floor(Math.random() * 6) + 1;
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
      setTimeout(play_stakan_opacity, 2000);
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
  let kubik_id = 1;
  while(kubik_id <= stakan_kolvo_kubikov_v_igre){
    stakan_kubiki_value[kubik_id] = Math.floor(Math.random() * 6) + 1;
    document.getElementById('play_kubik_' + kubik_id).src = "img/kub_"+stakan_kubiki_value[kubik_id]+".png";
    document.getElementById('play_kubik_form_' + kubik_id).style.visibility  = 'visible';
    raspolojenie_kubika(stakan_kolvo_kubikov_v_igre - 5, kubik_id);
    document.getElementById('play_kubik_form_' + kubik_id).style.transform = 'rotate('+ (Math.floor(Math.random() * 60) - 30) + 'deg)';
    kubik_id++;
  }
}

function raspolojenie_kubika(kolvo_kubikov_v_igre, kubik) {
  switch (kolvo_kubikov_v_igre) {
    case 6:
      switch (kubik) {
        case 1:
          document.getElementById('play_kubik_form_1').style.marginLeft = '20%';
          document.getElementById('play_kubik_form_1').style.marginTop = '5%';
          break;
        case 2:
          document.getElementById('play_kubik_form_2').style.marginLeft = '43%';
          document.getElementById('play_kubik_form_2').style.marginTop = '13%';
          break;
        case 3:
          document.getElementById('play_kubik_form_3').style.marginLeft = '64%';
          document.getElementById('play_kubik_form_3').style.marginTop = '20%';
          break;
        case 4:
          document.getElementById('play_kubik_form_4').style.marginLeft = '70%';
          document.getElementById('play_kubik_form_4').style.marginTop = '47%';
          break;
        case 5:
          document.getElementById('play_kubik_form_5').style.marginLeft = '40%';
          document.getElementById('play_kubik_form_5').style.marginTop = '43%';
          break;
        default:
          document.getElementById('play_kubik_form_6').style.marginLeft = '16%';
          document.getElementById('play_kubik_form_6').style.marginTop = '32%';
      }
      break;
    case 5:
    switch (kubik) {
      case 1:
        document.getElementById('play_kubik_form_1').style.marginLeft = '3%';
        document.getElementById('play_kubik_form_1').style.marginTop = '24%';
        break;
      case 2:
        document.getElementById('play_kubik_form_2').style.marginLeft = '25%';
        document.getElementById('play_kubik_form_2').style.marginTop = '5%';
        break;
      case 3:
        document.getElementById('play_kubik_form_3').style.marginLeft = '62%';
        document.getElementById('play_kubik_form_3').style.marginTop = '15%';
        break;
      case 4:
        document.getElementById('play_kubik_form_4').style.marginLeft = '26%';
        document.getElementById('play_kubik_form_4').style.marginTop = '42%';
        break;
      default:
        document.getElementById('play_kubik_form_5').style.marginLeft = '55%';
        document.getElementById('play_kubik_form_5').style.marginTop = '38%';
      }
      break;
    case 4:
      switch (kubik) {
        case 1:
          document.getElementById('play_kubik_form_1').style.marginLeft = '15%';
          document.getElementById('play_kubik_form_1').style.marginTop = '45%';
          break;
        case 2:
          document.getElementById('play_kubik_form_2').style.marginLeft = '58%';
          document.getElementById('play_kubik_form_2').style.marginTop = '15%';
          break;
        case 3:
          document.getElementById('play_kubik_form_3').style.marginLeft = '62%';
          document.getElementById('play_kubik_form_3').style.marginTop = '48%';
          break;
        default:
          document.getElementById('play_kubik_form_4').style.marginLeft = '25%';
          document.getElementById('play_kubik_form_4').style.marginTop = '5%';
        }
      break;
    case 3:
      switch (kubik) {
        case 1:
          document.getElementById('play_kubik_form_1').style.marginLeft = '25%';
          document.getElementById('play_kubik_form_1').style.marginTop = '5%';
          break;
        case 2:
          document.getElementById('play_kubik_form_2').style.marginLeft = '52%';
          document.getElementById('play_kubik_form_2').style.marginTop = '15%';
          break;
        default:
          document.getElementById('play_kubik_form_3').style.marginLeft = '27%';
          document.getElementById('play_kubik_form_3').style.marginTop = '37%';
        }
      break;
    case 2:
      switch (kubik) {
        case 1:
          document.getElementById('play_kubik_form_1').style.marginLeft = '46%';
          document.getElementById('play_kubik_form_1').style.marginTop = '10%';
          break;
        default:
          document.getElementById('play_kubik_form_2').style.marginLeft = '33%';
          document.getElementById('play_kubik_form_2').style.marginTop = '43%';
        }
      break;
    default:
      document.getElementById('play_kubik_form_1').style.marginLeft = '32%';
      document.getElementById('play_kubik_form_1').style.marginTop = '17%';
  }
}
