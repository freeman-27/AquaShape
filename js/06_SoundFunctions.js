//<script>
        //Sounds/////////////////////////////////////////////////////////////////////////////////
    let StateID = 1;
    function TurnSound() {

        let S1 = document.getElementById("bubbles_sound");
    let S_btn = document.getElementById("Sound_Btn");
    if (StateID == 1) {
        S1.play();
    S_btn.innerHTML = "<span>Stop Sound</span><img id='Sound_Btn_Cont1' src=''>";
        // document.getElementById("Sound_Btn").setAttribute("style", "background-image: url('img/sound_off.png'); background-size: cover, cover;");
        document.getElementById("Sound_Btn_Cont1").src = "img/sound_off.png";

                // document.getElementById("Sound_Btn_Cont1").setAttribute("src", "img/sound_off.png");
                // S_btn.childNodes(1).setAttribute("img/sound_on.png");

            }
        if (StateID == 2) {
            // S1.removeAttribute("loop");
            S1.pause();
        S_btn.innerHTML = "<span>Play Sound</span><img id='Sound_Btn_Cont1' src=''>";
            // document.getElementById("Sound_Btn").setAttribute("style", "background-image: url('img/sound_on.png'); background-size: cover, cover;");
            document.getElementById("Sound_Btn_Cont1").src = "img/sound_on.png";
                // document.getElementById("Sound_Btn_Cont1").setAttribute("src", "img/sound_on.png");
                // S_btn.childNodes(1).setAttribute("img/sound_off.png");


            }
            Change_State();
        }


            function Change_State() {
            if (StateID == 1) {
                StateID = 2;
            } else if (StateID == 2) {
                StateID = 1;
            }
            return StateID;
        }
//</script>