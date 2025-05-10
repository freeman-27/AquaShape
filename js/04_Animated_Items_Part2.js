//<script>
        //Placement Elements full size/////////////////////////////////////////////////////////////////////////////////
    let SetID = 1;
    let Item_Image1 = '<div id="' + SetID + '" class="border-2 border-light rounded-circle" width="50px" ><img src="proto_4.jpg" style="position: relative; width: cover;"></div>';
    function AddItemFull_Image1() {
        BoxContainer.innerHTML = Item_Image1;
    SetID++;
        }
    let ItemsLimit = 0;
    let RoolElement = document.getElementById("AddSmItemBtn");
    let set_X = Math.floor(Math.random() * 500) + 10;
    let set_Y = Math.floor(Math.random() * 400) + 50;

    function SetXY() {
        let incr_X = Math.floor(Math.random() * 100) + 50; // incr from 50to100
    let incr_Y = Math.floor(Math.random() * 100) + 50;  // incr from 50to100
    set_X += Math.floor(Math.random() * 500) + 10;
    set_Y += Math.floor(Math.random() * 400) + 50;
    set_X += incr_X;
    set_Y += incr_Y;
    return set_X, set_Y
        }


    function Add_ItemSmall_Random() {

        let input_instance_from_src = source_2;
            // BoxContainer.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ input_instance_from_src +'" alt="">';
            // BoxContainer.innerHTML = '<div id="'+ SetID +'" class="border-2 border-light rounded-circle" width="50px" ><img src="'+ input_instance_from_src +'" style="position: relative; width: 50px;"></div>';

            // try {
            // BoxContainer.appendChild(document.createElement("button"));
            // i++;
            // } catch (error) {
            //     window.alert("StackOverflow");
            // }

            // BoxContainer.appendChild(document.createElement("button"));
            // BoxContainer.innerHTML = '<div id="'+ SetID +'" class="border-2 border-light rounded-circle" width="50px" ><img src="'+ input_instance_from_src +'" style="position: relative; width: 50px;"></div>';
            SetID++;




        var CreateDivElement = document.createElement('div');
        var CreateBtnElement = document.createElement('button');
        var CreateImageElement = document.createElement('img');
        var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
        Rand_index = Math.floor(Math.random() * 10); //number from 1 to 10
        // CreateNewElement.classList.add("btn", "btn-success");
        // set_X = Math.floor(Math.random() * 500) + 10;
        // set_Y = Math.floor(Math.random() * 400) + 50;
        SetXY();
        CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", "itemsAnimation_V" + AnimationNumber);
        CreateDivElement.setAttribute("style", "/*border: 2px solid red;*/ width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");
        // set_X += 50;
        // set_Y += 50;
        //randomise X,Y:


        // position: absolute; left:"'+ set_X +'"px; top:"'+ set_Y + '"px;"'
        // CreateDivElement.setAttribute("style", "");

        // CreateBtnElement.classList.add("btn", "btn-primary");
        // CreateBtnElement.setAttribute("style", "border: 4px dotted yellow !important;")

        CreateImageElement.setAttribute("class", "rounded-circle", "p-2");
        // CreateImageElement.setAttribute("style", "border: 4px dotted yellow;")
        CreateImageElement.setAttribute("src", sourceArr[Rand_index]);
        CreateImageElement.setAttribute("width", "70px");

        CreateDivElement.appendChild(CreateImageElement);
            // CreateImageElement.appendChild('<img src="proto_2.jpg">');
            // CreateImageElement.setAttribute.style = "border: 2px solid red; width: 50px; block-size: 50px";
            // CreateImageElement.setAttribute.width = "50px";
            // BoxContainer.appendChild(CreateNewElement);
            BoxContainer.appendChild(CreateDivElement);

            if (ItemsLimit == 0) {
                ItemsLimit = 1;
            }
            ItemsLimit++;
            if (ItemsLimit === 30) {
                window.alert("You got maximum number of items!");
            RoolElement.disabled = true;
            RoolElement.classList.add("bg-transparent");
            }

            RoolElement.disabled = true;
            // RoolElement.classList.toggle("border-4");
            RoolElement.classList.toggle("bg-success");
            // RoolElement.classList.add("border-0");
            RoolElement.classList.toggle("bg-transparent");
            DelayActionAddRandom(setDelay);
            return ItemsLimit;
        }

            function Add_ItemSmall_Random_Mobile() {
                let AnimationMobilePrefix = "Mobile_"

            let input_instance_from_src = source_2;
            SetID++;
            var CreateDivElement = document.createElement('div');
            var CreateBtnElement = document.createElement('button');
            var CreateImageElement = document.createElement('img');
            var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
            Rand_index = Math.floor(Math.random() * 10); //number from 1 to 10
            SetXY();
            CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", AnimationMobilePrefix + "itemsAnimation_V" + AnimationNumber);
            CreateDivElement.setAttribute("style", "/*border: 2px solid red;*/ width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateImageElement.setAttribute("class", "rounded-circle", "p-2");
            CreateImageElement.setAttribute("src", sourceArr[Rand_index]);
            CreateImageElement.setAttribute("width", "70px");

            CreateDivElement.appendChild(CreateImageElement);
            BoxContainer.appendChild(CreateDivElement);

            if (ItemsLimit == 0) {
                ItemsLimit = 1;
            }
            ItemsLimit++;
            if (ItemsLimit === 30) {
                window.alert("You got maximum number of items!");
            RoolElement.disabled = true;
            RoolElement.classList.add("bg-transparent");
            }

            RoolElement.disabled = true;
            RoolElement.classList.toggle("bg-success");
            RoolElement.classList.toggle("bg-transparent");
            DelayActionAddRandom(setDelay);
            return ItemsLimit;
        }


            const setDelay = setTimeout(DelayActionAddRandom, 5000);
            function DelayActionAddRandom() {
                RoolElement.classList.toggle("bg-tansparent");
            RoolElement.disabled = false;
        }

            let BubbleCounter = 1;
            function AddBubbles() {
            do {
                AddBubbles_create();
            BubbleCounter++;
            } while (BubbleCounter < 30);
            //TO DO
            // for (let index = 0; index < array.length; index++) {
                //     const element = array[index];

                // }
                document.getElementById("Sound_Btn_Cont1").src = "img/sound_on.png";

        }


            let B_Width; // incr from 50to100
            let B_Width_T2; // incr from 50to100
            let B_BlockSize;  // incr from 50to100
            function BubbleGetSize() {
                B_Width = Math.floor(Math.random() * 15) + 5;
            B_B_Width_T2 = Math.floor(Math.random() * 25) + 10;
            B_BlockSize = Math.floor(Math.random() * 25) + 5;
            return B_Width, B_BlockSize, B_Width_T2
        }

            function AddBubbles_create() {
            var CreateDivElement = document.createElement('div');
            var CreateDivElement_Place2 = document.createElement('div');
            var CreateDivElement_Place3 = document.createElement('div');
            var CreateDivElement_Place4 = document.createElement('div');
            var CreateDivElement_Place5 = document.createElement('div');
            var CreateDivElement_Place6 = document.createElement('div');
            var CreateDivElement_Place7 = document.createElement('div');
            var CreateDivElement_Place8 = document.createElement('div');

            BubbleGetSize();
            SetID++;

            var type1; var type2; var type3; var type4; var type5; var type6; var type7; var type8;

            CreateDivElement.setAttribute("class", "rounded-circle bubbles bubblesAnimation");
            CreateDivElement.setAttribute("style", "border: 2px solid white; width:10px !important; block-size: 10px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place2.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2");
            CreateDivElement_Place2.setAttribute("style", "margin-left:10%; border: 2px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place3.setAttribute("class", "rounded-circle bubbles bubblesAnimation");
            CreateDivElement_Place3.setAttribute("style", "margin-left:20%; border: 2px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place4.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2");
            CreateDivElement_Place4.setAttribute("style", "margin-left:35%; margin-bottom 50px; border: 2px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place5.setAttribute("class", "rounded-circle bubbles bubblesAnimation");
            CreateDivElement_Place5.setAttribute("style", "margin-left:45%; border: 2px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place6.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2");
            CreateDivElement_Place6.setAttribute("style", "margin-left:60%; border: 2px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place7.setAttribute("class", "rounded-circle bubbles bubblesAnimation");
            CreateDivElement_Place7.setAttribute("style", "margin-left:70%; border: 2px solid white; width:" + B_Width + "px !important; block-size: " + B_Width + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

            CreateDivElement_Place8.setAttribute("class", "rounded-circle bubbles bubblesAnimation_2");
            CreateDivElement_Place8.setAttribute("style", "margin-left:85%; border: 2px solid white; width:" + B_Width_T2 + "px !important; block-size: " + B_Width_T2 + "px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");


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

            var ArrItem01 = BoxContainer.appendChild(CreateDivElement);
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