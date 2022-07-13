<div class="form_play">
    <!-- Счетчик очков -->
    <div class="play_chetchik" style="padding-bottom: auto;">
        <div class="play_chetchik_raund" style="background: rgb(97, 41, 78);">
            <div class="play_chetchik_raund_number"> 1. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 2. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 3. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 4. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 5. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 6. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 7. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 8. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 9. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div class="play_chetchik_raund">
            <div class="play_chetchik_raund_number"> 10. </div>
            <div class="play_chetchik_raund_value"> - </div>
        </div>
        <div style="justify-content: center; display: flex;"><div class="play_chetchik_chet"> 10000 </div> </div>
        <div style="justify-content: center; display: flex;"><div class="play_chetchik_button">Сохранить</div></div>
    </div>
    <!-- Игровое поле -->
    <div class="play_pole">
        <div class="play_mesto_kubika" style="margin-top: 240px; margin-left: 5px;"></div>

        <div class="play_mesto_kubika" style="margin-top: 280px; margin-left: 5px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 280px; margin-left: 45px;"></div>

        <div class="play_mesto_kubika" style="margin-top: 320px; margin-left: 5px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 320px; margin-left: 45px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 320px; margin-left: 85px;"></div>

        <div class="play_mesto_kubika" style="margin-top: 360px; margin-left: 5px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 360px; margin-left: 45px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 360px; margin-left: 85px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 360px; margin-left: 125px;"></div>

        <div class="play_mesto_kubika" style="margin-top: 400px; margin-left: 5px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 400px; margin-left: 45px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 400px; margin-left: 85px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 400px; margin-left: 125px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 400px; margin-left: 165px;"></div>

        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 5px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 45px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 85px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 125px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 165px;"></div>
        <div class="play_mesto_kubika" style="margin-top: 440px; margin-left: 205px;"></div>

        <div class="play_stakan">
            <div class="play_stakan_img" onclick="play_stakan_click()">
                <img src="img/stakan.png" class="stakan_photo" alt="Стакан" id="play_stakan">
            </div>
        </div>

    </div >
    <!-- Ползунок набранных очков -->
    <div class="play_range_chetchik">
        <div  class="play_range_chetchik_viigrish"  >
            <div class="play_range_chetchik_viigrish_text">ВЫИГРЫШ</div>
            <div class="play_range_chetchik_viigrish_value">
            <div class="play_range_chetchik_viigrish_value"> 
                1500
                <div style="margin-left: 5px;"><img src="img/fishka.png" class="fishki_photo" alt="Фото фишки"></div>
            </div>
        </div>

        <div class="play_range_chetchik_range">
        <div class="play_range_chetchik_range">             
            <div class="play_range_chetchik_range_objee"></div>
            <div class="play_range_chetchik_range_value"></div>
        </div>

        <div class="play_range_chetchik_trebuetsa">
            <div class="play_range_chetchik_trebuetsa_text">ТРЕБУЕТСЯ</div>
            <div class="play_range_chetchik_trebuetsa_value">5000</div>
        </div>
    </div>

    <div class="play_pravila">
        <div class="play_pravila_name">Комбинации</div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/1.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>100</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/5.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>50</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/1.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/1.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/1.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>1000</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/2.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/2.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/2.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>200</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/3.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/3.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/3.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>300</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/4.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/4.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/4.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>400</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/5.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/5.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/5.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>500</p></div>
        </div>

        <div class="play_pravila_prostie">  
            <div class="play_pravila_prostie_img">
                <img src="img/6.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/6.png" class="fishki_photo" alt="Фото фишки">
                <img src="img/6.png" class="fishki_photo" alt="Фото фишки">
            </div>
            <div class="play_pravila_prostie_ochki"><p>600</p></div>
        </div>
        <!--  -->
        <div class="play_pravila_slojnoe" style="margin-top: 4%;">
            <div class="play_pravila_slojnoe_perv">                
                <div class="play_pravila_slojnoe_img">
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки" style="margin-left: 0%;">  
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки"> 
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки" style="opacity: 0.5;">                 
                </div> 
                <div class="play_pravila_slojnoe_value">200+200+...</div>
            </div>
        </div>
        <div class="play_pravila_slojnoe" style="margin-top:-4%;">
            <div class="play_pravila_slojnoe_perv">                
                <div class="play_pravila_slojnoe_img">
                    <img src="img/1.png" class="fishki_photo" alt="Фото фишки" style="margin-left: 0%;">  
                    <img src="img/1.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/3.png" class="fishki_photo" alt="Фото фишки"> 
                    <img src="img/3.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/6.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/6.png" class="fishki_photo" alt="Фото фишки">                 
                </div> 
                <div class="play_pravila_slojnoe_value">3 пары-750</div>
            </div>
        </div>
        <div class="play_pravila_slojnoe" style="margin-top:-4%;">
            <div class="play_pravila_slojnoe_perv">                
                <div class="play_pravila_slojnoe_img">
                    <img src="img/1.png" class="fishki_photo" alt="Фото фишки" style="margin-left: 0%;">  
                    <img src="img/2.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/3.png" class="fishki_photo" alt="Фото фишки"> 
                    <img src="img/4.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/5.png" class="fishki_photo" alt="Фото фишки">  
                    <img src="img/6.png" class="fishki_photo" alt="Фото фишки">                 
                </div> 
                <div class="play_pravila_slojnoe_value">стрит-1500</div>
            </div>
        </div>
    </div>

</div>