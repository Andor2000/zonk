let color_aktiv_rejim_risk = "#792f60";
let color_passiv_rejim_risk = "#402051";
let fishki;
let rejim_risk_vibor = 'rejim_risk_vibor_stavki_value_1';
let rejim_risk_koef = 1.5;
let stavka;
let viigrish;

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