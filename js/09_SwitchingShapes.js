//<script>
    let FormBG_StateID = 1; //start value - number of next imageform
    let MainBackgroundImageSrc = "img/aquacube_back_part_view(80per).png";
    // Images Type 1:
    let SourseBG_1_p1 = "img/aquacube_back_part_view(80per).png";       //image cube part1 (back)
    // let SourseBG_1_p2 = "img/aquacube_middlecontentview(100per).png";  //image cube part2  (middle)
    let SourseBG_1_p2 = "img/aquacube_middlecontentview(100per)_and_ground.png";  //image cube part2  (middle)
    let SourseBG_1_p3 = "img/aquacube_frontview(10per).png";            //image cube part3   (front)
    // Images Type 2:
    let SourseBG_2_p1 = "img/aquaSphere_MiddleImage(100per)_Contur.png";
    let SourseBG_2_p2 = "img/aquaSphere_MiddleImage-Contur_withGroundAndContent.png";
    let SourseBG_2_p3 = "img/aquaSphere_FrontImage(100per).png";
    // Images Type 3:
    let SourseBG_3_p1 = "img/DecaedrShape_BackgroundEdges_andFloor_andMeshGradient.png";
    // let SourseBG_3_p1 = "img/DecaedrShape_Background_GreenMeshGradient.png";
    let SourseBG_3_p2 = "img/DecaedrShape_MiddleImage_Grass.png";
    // let SourseBG_3_p2 = "img/DecaedrShape_MiddleImage_WithContent.png";
    let SourseBG_3_p3 = "img/DecaedrShape_FrontImage_Glass_transparent.png";
    // Images Type 4:
    let SourseBG_4_p1 = "img/IcoShpereGlass_ZeroBack_Layer_MeshGradient_Light.png";
    let SourseBG_4_p2 = "img/IcoShpereGlass_Middle_Layer_Edges.png";
    let SourseBG_4_p3 = "img/IcoShpereGlass_Front_Layer.png";
    //main backgound element
    let MainItemBGImage = document.getElementById("MainBGitem");

    let SourceEmpty = ""; //empty value

    // Type 1:
    let ReplaceImg_T1_p1 = ""; //image cube part1 (back)
    let ReplaceImg_T1_p2 = ""; //image cube part2  (middle)
    let ReplaceImg_T1_p3 = ""; //image cube part3   (front)
    //Type 2:
    let ReplaceImg_T2_p1 = ""; //image sphere
    let ReplaceImg_T2_p2 = ""; //image sphere
    let ReplaceImg_T2_p3 = ""; //image sphere
    // Type 3:
    let ReplaceImg_T3_p1 = ""; //image IcoShpere part1 (back)
    let ReplaceImg_T3_p2 = ""; //image IcoShpere part2  (middle)
    let ReplaceImg_T3_p3 = ""; //image IcoShpere part3   (front)
    // Type 4:
    let ReplaceImg_T4_p1 = ""; //image IcoShpere part1 (back)
    let ReplaceImg_T4_p2 = ""; //image IcoShpere part2  (middle)
    let ReplaceImg_T4_p3 = ""; //image IcoShpere part3   (front)

    let modifyAppBG_Element = document.getElementById("AppMainContainer");



    function Delete_MainItemBG() {

        // let Del_BackImage = document.getElementById("BoxCoverBack");
        // let Del_MiddleImage = document.getElementById("BoxCoverMiddle");
        // let Del_FrontImage = document.getElementById("BoxCoverFront");


        // if (Del_BackImage != null && Del_MiddleImage != null){
        //     Del_BackImage.remove();
        //     Del_MiddleImage.remove();
        // } else {
        //     Del_FrontImage .remove();
        // }
    }
        // document.removeChild(2);
    // document.removeChild(3);

    //// Values for adding extra content on floor ///
    //// for 3 types of aquaform
    ////
    let SetContentID = 1; /* for dependence extra content from form type */

    function ChangeAquaForm() {


        let Del_BackImage = document.getElementById("BoxCoverBack");
    let Del_MiddleImage = document.getElementById("BoxCoverMiddle");
    let Del_FrontImage = document.getElementById("BoxCoverFront");


    //create new elements (for first time):
    let PrepareExtraContent_forCube = document.createElement('img');
    let PrepareExtraContent_forSphere = document.createElement('img');
    let PrepareExtraContent_forDodecaedr = document.createElement('img');


    //for using when geometic form type switches:



    if (FormBG_StateID == 1) {
        // Backgound ImageForm Type 2 Sphere ============ //
        Del_BackImage.remove();
    Del_MiddleImage.remove();
    Del_FrontImage.remove();
    let ExtraContent_ForCube = document.getElementById("WaterFloorContent_forCube");
    ExtraContent_ForCube.remove();

    //backside (part1):
    ReplaceImg_T2_p1 = document.createElement('img');
    ReplaceImg_T2_p1.setAttribute('id', 'BoxCoverBack');
    ReplaceImg_T2_p1.setAttribute('class', 'BoxCoverBackSphere');
    ReplaceImg_T2_p1.setAttribute('style', 'z-index: 20005; opacity: 1; position: absolute; width: 80%; max-height:90% !important;');
    ReplaceImg_T2_p1.setAttribute('src', SourseBG_2_p1);
    //backside (part2):
    ReplaceImg_T2_p2 = document.createElement('img');
    ReplaceImg_T2_p2.setAttribute('id', 'BoxCoverMiddle');
    ReplaceImg_T2_p2.setAttribute('class', 'BoxCoverBackSphere bg-red');
    ReplaceImg_T2_p2.setAttribute('style', 'z-index: 30005; opacity: 1; position: absolute; width: 80%; max-height:90% !important;');
    ReplaceImg_T2_p2.setAttribute('src', SourseBG_2_p2);
    //backside (part3):
    ReplaceImg_T2_p3 = document.createElement('img');
    ReplaceImg_T2_p3.setAttribute('id', 'BoxCoverFront');
    ReplaceImg_T2_p3.setAttribute('class', 'BoxCoverBackSphere border-light');
    ReplaceImg_T2_p3.setAttribute('style', 'z-index: 90005; opacity: 0.25; position: absolute; width: 80%; max-height:90% !important;');
    ReplaceImg_T2_p3.setAttribute('src', SourseBG_2_p3);
    ReplaceImg_T2_p3.setAttribute('ondragenter', 'animateFunction_ALL()');


    // custom background :
    MainItemBGImage.setAttribute("style", "z-index: -2; position: absolute; background: url('img/CustomBackground/forBlurBackground_sized_Violet.png'); background-size: 65%, 80%; background-position-x: 50%; background-position-y: 5em; background-repeat: no-repeat; opacity: 0.5; width: 98%; height: 98%;");
    document.getElementById("bodyItem").setAttribute("style", "background-image: url('img/CustomBackground/forBlurBackground_sized_Cobalt.png');");


    //for Extra Content on Floor:
    SetContentID = 2; // for waterfloor item image = type ImageForm ID
    //floor content image (hidden by default):
    PrepareExtraContent_forSphere.setAttribute("id", "WaterFloorContent_forSphere");
    PrepareExtraContent_forSphere.setAttribute("src", "img/aquaSphere_MiddleImage_ExtraContent_Type1.png");
    PrepareExtraContent_forSphere.setAttribute("style", "z-index: 40005; opacity: 1; position: absolute;  scale: 0.70;"); // for shpere - type1 //default
    PrepareExtraContent_forSphere.setAttribute("class", "d-none"); //default
    // PrepareExtraContent_forSphere.setAttribute("hidden", "hidden"); //default

    //adding items do DOM:
    modifyAppBG_Element.appendChild(ReplaceImg_T2_p1);
    modifyAppBG_Element.appendChild(ReplaceImg_T2_p2);
    modifyAppBG_Element.appendChild(ReplaceImg_T2_p3);
    modifyAppBG_Element.appendChild(PrepareExtraContent_forSphere);

                // RemoveItems();

            }

    if (FormBG_StateID == 2) {
        // Backgound ImageForm Type 3 Dodecaedr ============ //
        Del_BackImage.remove();
    Del_MiddleImage.remove();
    Del_FrontImage.remove();
    let ExtraContent_ForSphere = document.getElementById("WaterFloorContent_forSphere");
    ExtraContent_ForSphere.remove();

    // Del_FrontImage .remove();

    // document.getElementById("BoxCoverFront").remove();
    //backside (part1):
    ReplaceImg_T3_p1 = document.createElement('img');
    ReplaceImg_T3_p1.setAttribute('id', 'BoxCoverBack');
    ReplaceImg_T2_p2.setAttribute('class', 'BoxCoverBackDodecaedr');
    ReplaceImg_T3_p1.setAttribute('style', 'z-index: 20005; opacity: 1; position: absolute; width: 60%; max-height:90%; left: 20%; right: auto; top: 50px;');
    ReplaceImg_T3_p1.setAttribute('src', SourseBG_3_p1);
    //middleside (part2):
    ReplaceImg_T3_p2 = document.createElement('img');
    ReplaceImg_T3_p2.setAttribute('id', 'BoxCoverMiddle');
    ReplaceImg_T2_p2.setAttribute('class', 'BoxCoverBackDodecaedr');
    ReplaceImg_T3_p2.setAttribute('style', 'z-index: 45005; opacity: 1; position: absolute; width: 60%; max-height:90%; left: 20%; right: auto; top: 50px;');
    ReplaceImg_T3_p2.setAttribute('src', SourseBG_3_p2);
    //FrontSide (part3):
    ReplaceImg_T3_p3 = document.createElement('img');
    ReplaceImg_T3_p3.setAttribute('id', 'BoxCoverFront');
    ReplaceImg_T2_p2.setAttribute('class', 'BoxCoverBackDodecaedr');
    ReplaceImg_T3_p3.setAttribute('style', 'z-index: 90005; opacity: 0.75; position: absolute; width: 60%; max-height:90%; left: 20%; right: auto; top: 50px;');
    ReplaceImg_T3_p3.setAttribute('src', SourseBG_3_p3);
    // ReplaceImg_T1_p3.setAttribute('ondragenter', 'animateFunction_ALL()');

    // custom background :
    MainItemBGImage.setAttribute("style", "z-index: -2; position: absolute; background: url('img/CustomBackground/forBlurBackground_sized_Green.png'); background-size: 65%, 80%; background-position-x: 50%; background-position-y: 5em; background-repeat: no-repeat; opacity: 0.5; width: 98%; height: 98%;");
    document.getElementById("bodyItem").setAttribute("style", "background-image: url('img/CustomBackground/forBlurBackground_sized_Cobalt.png');");

    //for Extra Content on Floor:
    SetContentID = 3; // for waterfloor item image = type form ID
    //floor content image (hidden by default):
    PrepareExtraContent_forDodecaedr.setAttribute("id", "WaterFloorContent_forDodecaedr");
    PrepareExtraContent_forDodecaedr.setAttribute("src", "img/DodecaedrShape_MiddleImage_ExtraContent_Type1.png");
    PrepareExtraContent_forDodecaedr.setAttribute("style", "z-index: 40005; opacity: 1; position: absolute;"); // for dodecaedr - type1
    PrepareExtraContent_forDodecaedr.setAttribute("class", "d-none"); //default
    // PrepareExtraContent_forDodecaedr.setAttribute("hidden", "hidden"); //default


    //add new elements to DOM:
    modifyAppBG_Element.appendChild(ReplaceImg_T3_p1);
    modifyAppBG_Element.appendChild(ReplaceImg_T3_p2);
    modifyAppBG_Element.appendChild(ReplaceImg_T3_p3);
    modifyAppBG_Element.appendChild(PrepareExtraContent_forDodecaedr);

                // RemoveItems();
            }

            // if(FormBG_StateID == "3_disable"){
            //     // Backgound ImageForm Type 4 IcoShpere ============ //

            //     // Del_BackImage.remove();
            //     Del_BackImage.remove();
            //     Del_MiddleImage.remove();
            //     Del_FrontImage .remove();

            //     //middleside (part1):
            //     ReplaceImg_T4_p1 = document.createElement('img');
            //     ReplaceImg_T4_p1.setAttribute('id', 'BoxCoverBack');
            //     ReplaceImg_T4_p1.setAttribute('style', 'z-index: 20005; opacity: 0.25; position: absolute; width: 65%; max-height:85%; left: 20%; right: auto; top: 100px;');
            //     ReplaceImg_T4_p1.setAttribute('src', SourseBG_4_p1);

            //     //middleside (part2):
            //     ReplaceImg_T4_p2 = document.createElement('img');
            //     ReplaceImg_T4_p2.setAttribute('id', 'BoxCoverMiddle');
            //     ReplaceImg_T4_p2.setAttribute('style', 'z-index: 85005; opacity: 1; position: absolute; width: 65%; max-height:85%; left: 20%; right: auto; top: 100px;');
            //     ReplaceImg_T4_p2.setAttribute('src', SourseBG_4_p2);

            //     //FrontSide (part3):
            //     ReplaceImg_T4_p3 = document.createElement('img');
            //     ReplaceImg_T4_p3.setAttribute('id', 'BoxCoverFront');
            //     ReplaceImg_T4_p3.setAttribute('style', 'z-index: 90005; opacity: 0.15; position: absolute; width: 65%; max-height:85%; left: 20%; right: auto; top: 100px;');
            //     ReplaceImg_T4_p3.setAttribute('src', SourseBG_4_p3);
            //     ReplaceImg_T4_p3.setAttribute('ondragenter', 'animateFunction_ALL()');

            //     //add new elements to DOM:
            //     modifyAppBG_Element.appendChild(ReplaceImg_T4_p1);
            //     modifyAppBG_Element.appendChild(ReplaceImg_T4_p2);
            //     modifyAppBG_Element.appendChild(ReplaceImg_T4_p3);


            //     SetContentID = 4; // for waterfloor item image = type form ID

            //     // RemoveItems();
            // }

            if (FormBG_StateID == 3) {
        // Backgound ImageForm Type 1 Cube ============ //
        Del_BackImage.remove();
    Del_MiddleImage.remove();
    Del_FrontImage.remove();
    let ExtraContent_ForDodecaedr = document.getElementById("WaterFloorContent_forDodecaedr");
    ExtraContent_ForDodecaedr.remove();

    //backside (part1):
    ReplaceImg_T1_p1 = document.createElement('img');
    ReplaceImg_T1_p1.setAttribute('id', 'BoxCoverBack');
    ReplaceImg_T1_p1.setAttribute('style', 'z-index: 20005; opacity: 0.5; position: absolute; width: 75%; max-height:85%;');
    ReplaceImg_T1_p1.setAttribute('src', SourseBG_1_p1);
    //middleside (part2):
    ReplaceImg_T1_p2 = document.createElement('img');
    ReplaceImg_T1_p2.setAttribute('id', 'BoxCoverMiddle');
    ReplaceImg_T1_p2.setAttribute('style', 'z-index: 30005; opacity: 1; position: absolute; width: 75%; max-height:85%;');
    ReplaceImg_T1_p2.setAttribute('src', SourseBG_1_p2);
    //FrontSide (part3):
    ReplaceImg_T1_p3 = document.createElement('img');
    ReplaceImg_T1_p3.setAttribute('id', 'BoxCoverFront');
    ReplaceImg_T1_p3.setAttribute('style', 'z-index: 90005; opacity: 0.8; position: absolute; width: 75%; max-height:85%;');
    ReplaceImg_T1_p3.setAttribute('src', SourseBG_1_p3);
    // ReplaceImg_T1_p3.setAttribute('ondragenter', 'animateFunction_ALL()');

    // custom background :
    MainItemBGImage.setAttribute("style", "z-index: -2; position: absolute; background: url('img/CustomBackground/forBlurBackground_sized_Blue.png'); background-size: 65%, 80%; background-position-x: 50%; background-position-y: 5em; background-repeat: no-repeat; opacity: 0.5; width: 98%; height: 98%;");
    document.getElementById("bodyItem").setAttribute("style", "background-image: url('img/CustomBackground/forBlurBackground_sized_Aqua.png');");

    //for Extra Content on Floor:
    SetContentID = 1; // for waterfloor item image
    //floor content image (hidden by default):
    PrepareExtraContent_forCube.setAttribute("id", "WaterFloorContent_forCube");
    PrepareExtraContent_forCube.setAttribute("src", "img/aquacube_middle_Image_Extra_content_Type1.png");
    PrepareExtraContent_forCube.setAttribute("style", "z-index: 35005; opacity: 1; position: absolute;"); // for cube - type1
    PrepareExtraContent_forCube.setAttribute("class", "d-none"); //default


    //add new elements to DOM:
    modifyAppBG_Element.appendChild(ReplaceImg_T1_p1);
    modifyAppBG_Element.appendChild(ReplaceImg_T1_p2);
    modifyAppBG_Element.appendChild(ReplaceImg_T1_p3);
    modifyAppBG_Element.appendChild(PrepareExtraContent_forCube);
                // RemoveItems();
            }

    Set_FormBG_State();

    function Set_FormBG_State() {
        // if (FormBG_StateID == 1){
        //     FormBG_StateID = 2;
        // } else if (FormBG_StateID == 2){
        //     FormBG_StateID = 1;
        // }
        FormBG_StateID++;
    if (FormBG_StateID == 4) {
        FormBG_StateID = 1;
                }
    return FormBG_StateID;
            }

    RemoveItems();
    // return chkR;
    return SetContentID;
        }

    let LightColorID = 1;
    function ModifyStyle_LightSource() {
            // let LightColorID = 1;
            if (LightColorID === 1) {
        document.getElementById("LightSource_Element").classList.add("LightRed");

            } if (LightColorID === 2) {
        document.getElementById("LightSource_Element").classList.add("LightPurple");
            }
    if (LightColorID === 3) {
        document.getElementById("LightSource_Element").classList.add("LightYellow");
    document.getElementById("LightSource_Element").classList.remove("LightRed");
    document.getElementById("LightSource_Element").classList.remove("LightPurple");
                // document.getElementById("LightSource_Element").setAttribute("class", "LightOn");
            }
    LimitID_ColorLight();

    function LimitID_ColorLight() {
        LightColorID++;
    if (LightColorID === 4) {
        LightColorID = 1;
                }
    return LightColorID;
            }
        }



//</script>