<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rejim_risk_modal_vibor">
                    <div class="modal-header rejim_risk_modal_vibor_name">
                        <h5 class="modal-title" id="exampleModalLabel">РИСК</h5>
                        <button type="button"  data-bs-dismiss="modal" aria-label="Close"><img src="img/bclose.png" class="b-close" alt="Фото практики"></button>
                    </div>
                    <div class="rejim_risk_modal_vibor_text" style="margin-top: 10px;">
                        Пожалуйста, выберите сумму ставки
                        <br>
                        и количетсво очков, которые
                        <br>
                        хотите набрать за 10 раундов
                    </div>

                    <div class="slidecontainer" style="margin-top: 25px; ">
                        <div style="display:flex; justify-content: center; font-size: 20px;" >
                            <div class="rejim_risk_modal_vibor_text" style="margin-top: 4px;">СТАВКА: </div>     
                            <div style="margin-left: 10px; ">
                                <img src="img/fishka.png" class="fishki_photo" alt="Фото фишки">
                            </div>
                            <div id="range_risk_text" style="color:rgb(255, 199, 30)">ну да, тут написана фигня, зато ты нашёл</div>
                        </div>
                        
                        <input style="margin-top:10px" type="range" min="1" max="50" value="25" class="slider" id="range_risk" oninput="range_risk()">
                    </div>


                    <div class="rejim_risk_vibor_stavki">
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_1" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_1')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">5 000</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x1.5</div>
                        </div>
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_2" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_2')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">5 500</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x2</div>
                        </div>
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_3" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_3')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">6 000</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x2.5</div>
                        </div>
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_4" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_4')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">7 000</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x5</div>
                        </div>
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_5" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_5')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">8 000</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x7</div>
                        </div>
                        <div class="rejim_risk_vibor_stavki_value" id="rejim_risk_vibor_stavki_value_6" onclick="risk_vibor_stavki('rejim_risk_vibor_stavki_value_6')">
                            <div class="rejim_risk_vibor_stavki_value_stavka">9 000</div>
                            <div class="rejim_risk_vibor_stavki_value_text">очков</div>
                            <div class="rejim_risk_vibor_stavki_value_prochent">x10</div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: center; color:aliceblue; font-size: 20px; margin-top:20px">
                        ВЫЙГРЫШ: 
                        <div style="margin-left: 10px; ">
                                <img src="img/fishka.png" class="fishki_photo" alt="Фото фишки">
                            </div>
                        <p id="risk_viigrish_text" style="color:rgb(255, 199, 30)"> 
                            тут тоже фигня, но какая разница??
                        </p>
                    </div>


                    <div class="">
                        <button type="button" class="rejim_form_button" data-bs-dismiss="modal">ИГРАТЬ</button>
                    </div>
                </div>
            </div>
        </div> 