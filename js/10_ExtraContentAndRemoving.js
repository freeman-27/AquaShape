//<script>

    function Add_ContentToWaterFloor() {


            //add new elements to DOM:
            if (SetContentID === 1) {
        // modifyAppBG_Element.appendChild(Add_Content_Image_Type1);
        // ExtraContent_ForCube.style.display = "default";
        let ExtraContent_ForCube = document.getElementById("WaterFloorContent_forCube");
    ExtraContent_ForCube.classList.toggle("d-none");

            } if (SetContentID === 2) {
        // modifyAppBG_Element.appendChild(Add_Content_Image_Type2);
        // document.getElementById("WaterFloorContent_forSphere").style.display = "default";
        let ExtraContent_ForSphere = document.getElementById("WaterFloorContent_forSphere");
    ExtraContent_ForSphere.classList.toggle("d-none");

            } if (SetContentID === 3) {
        // modifyAppBG_Element.appendChild(Add_Content_Image_Type3);
        // ExtraContent_ForDodecaedr.style.display = "default";
        let ExtraContent_ForDodecaedr = document.getElementById("WaterFloorContent_forDodecaedr");
    ExtraContent_ForDodecaedr.classList.toggle("d-none");
            }



            // return ExtraContent_ForSphere;
        }



    function RemoveItems() {
        BoxContainer.innerHTML = "";
    RoolElement.disabled = false;
    ItemsLimit = 0;
    RoolElement.classList.remove("bg-transparent");

            // FormBG_StateID values from ChangeAquaForm()
            // SetContentID = 2

            // let ExtraContent_ForCube = document.getElementById("WaterFloorContent_forCube");
            // let ExtraContent_ForSphere = document.getElementById("WaterFloorContent_forSphere");
            // let ExtraContent_ForDodecaedr = document.getElementById("WaterFloorContent_forDodecaedr");

            // if(SetContentID === 1){
        //     ExtraContent_ForCube.remove();
        // }
        // if(SetContentID === 2){
        //     ExtraContent_ForSphere.remove();
        // }
        // if(SetContentID === 3){
        //     ExtraContent_ForDodecaedr.remove();
        // }

    }

//</script>