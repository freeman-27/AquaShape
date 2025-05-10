//<script>
    let BubbleCounter_mob = 1;
    function AddBubbles_Mobile() {
            do {
        AddBubblesCreation_Mobile();
    BubbleCounter++;
            } while (BubbleCounter < 30);
            //TO DO
            // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }
        document.getElementById("Sound_Btn_Cont1").src = "img/sound_on.png";

        }

    let B_Width_mob; // incr from 50to100
    let B_Width_T2_mob; // incr from 50to100
    let B_BlockSize_mob;  // incr from 50to100
    function BubbleGetSize_mob() {
        B_Width = Math.floor(Math.random() * 6) + 3;
    B_B_Width_T2 = Math.floor(Math.random() * 8) + 3;
    B_BlockSize = Math.floor(Math.random() * 8) + 3;
    return B_Width, B_BlockSize, B_Width_T2
        }

    function AddBubblesCreation_Mobile() {
            var CreateDivElement_Place1 = document.createElement('div');
    var CreateDivElement_Place2 = document.createElement('div');
    var CreateDivElement_Place3 = document.createElement('div');
    var CreateDivElement_Place4 = document.createElement('div');
    var CreateDivElement_Place5 = document.createElement('div');
    var CreateDivElement_Place6 = document.createElement('div');
    var CreateDivElement_Place7 = document.createElement('div');
    var CreateDivElement_Place8 = document.createElement('div');

    BubbleGetSize_mob();
    SetID++;

    // var type1; var type2; var type3; var type4; var type5; var type6; var type7; var type8;
    // SetXY();
    // set_X = 200;
    // set_Y = 250;

    CreateDivElement_Place1.setAttribute("class", "rounded-circle bubbles bubblesAnimation_mobile");
    CreateDivElement_Place1.setAttribute("style", "margin-left:5% border: 1px solid white; width:10px !important; block-size: 10px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place2.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2_mobile");
    CreateDivElement_Place2.setAttribute("style", "margin-left:10%; border: 1px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place3.setAttribute("class", "rounded-circle bubbles bubblesAnimation_mobile");
    CreateDivElement_Place3.setAttribute("style", "margin-left:12%; border: 1px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place4.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2_mobile");
    CreateDivElement_Place4.setAttribute("style", "margin-left:25%; margin-bottom 50px; border: 1px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place5.setAttribute("class", "rounded-circle bubbles bubblesAnimation_mobile");
    CreateDivElement_Place5.setAttribute("style", "margin-left:35%; border: 1px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place6.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2_mobile");
    CreateDivElement_Place6.setAttribute("style", "margin-left:45%; border: 1px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place7.setAttribute("class", "rounded-circle bubbles bubblesAnimation_mobile");
    CreateDivElement_Place7.setAttribute("style", "margin-left:50%; border: 1px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

    CreateDivElement_Place8.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2_mobile");
    CreateDivElement_Place8.setAttribute("style", "margin-left:65%; border: 1px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");


    SetXY();
    // BoxContainer.appendChild(CreateDivElement);
    // BoxContainer.appendChild(CreateDivElement_Place2);
    // BoxContainer.appendChild(CreateDivElement_Place3);
    // BoxContainer.appendChild(CreateDivElement_Place4);
    // BoxContainer.appendChild(CreateDivElement_Place5);
    // BoxContainer.appendChild(CreateDivElement_Place6);
    // BoxContainer.appendChild(CreateDivElement_Place7);
    // BoxContainer.appendChild(CreateDivElement_Place8);
    ////alternate ^

    var ArrItem01 = BoxContainer.appendChild(CreateDivElement_Place1);
    var ArrItem02 = BoxContainer.appendChild(CreateDivElement_Place2);
    var ArrItem03 = BoxContainer.appendChild(CreateDivElement_Place3);
    var ArrItem04 = BoxContainer.appendChild(CreateDivElement_Place4);
    var ArrItem05 = BoxContainer.appendChild(CreateDivElement_Place5);
    var ArrItem06 = BoxContainer.appendChild(CreateDivElement_Place6);
    var ArrItem07 = BoxContainer.appendChild(CreateDivElement_Place7);
    var ArrItem08 = BoxContainer.appendChild(CreateDivElement_Place8);

    let LimitCounter = 8;
    var array_8 = [8];

    array_8 = {
        ArrItem01,
        ArrItem02,
        ArrItem03,
        ArrItem04,
        ArrItem05,
        ArrItem06,
        ArrItem07,
        ArrItem08
    }
    for (let index = 0; index < LimitCounter; index++) {
        // var element = array_8[index];
        SetXY();
    // BoxContainer.appendChild(array_8[index]);
    BoxContainer.appendChild(array_8[0]);
    BoxContainer.appendChild(array_8[1]);
    BoxContainer.appendChild(array_8[2]);
    BoxContainer.appendChild(array_8[3]);
    BoxContainer.appendChild(array_8[4]);
    BoxContainer.appendChild(array_8[5]);
    BoxContainer.appendChild(array_8[6]);
    BoxContainer.appendChild(array_8[7]);
            }
        }

//</script>