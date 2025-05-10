//<script>
        //Lights/////////////////////////////////////////////////////////////////////////////////
    let Light_srs_1 = document.getElementById("LightSource_Element");
    let SwBtn = document.getElementById("Light_Switch");


    let LightStateID = 1;

    function Switch_Light() {
            if (LightStateID == 2) {
        Light_srs_1.classList.add("d-none");
    // Light_srs_1.classList.add("LightOn");
    // Light_srs_1.classList.add("LightYellow");
    SwBtn.innerHTML = "Lights Off";
    SwBtn.innerHTML = "<span>Lights Off</span><img id='Light_Switch_Cont1' src=''>";
        document.getElementById("Light_Switch_Cont1").src = "img/switch_light_on.png";
        /// restyle btn element:
        document.getElementById("change_ColorLightID").classList.remove("btn-dark");
        document.getElementById("change_ColorLightID_Mobile_Btn").classList.remove("btn-dark");
            }
        if (LightStateID == 1) {
            Light_srs_1.classList.remove("d-none");
        // Light_srs_1.classList.remove("LightOn");
        // Light_srs_1.classList.remove("LightYellow");
        SwBtn.innerHTML = "Lights On";
        SwBtn.innerHTML = "<span>Lights Off</span><img id='Light_Switch_Cont1' src=''>";
            document.getElementById("Light_Switch_Cont1").src = "img/switch_light_off.png";
            /// restyle btn element:
            document.getElementById("change_ColorLightID").classList.add("btn-dark");
            document.getElementById("change_ColorLightID_Mobile_Btn").classList.add("btn-dark");
            }
            Set_Light_State();
        }
            function Set_Light_State() {
            if (LightStateID == 1) {
                LightStateID = 2;
            } else if (LightStateID == 2) {
                LightStateID = 1;
            }
            return LightStateID;
        }
//</script>