//<script>
    //Animation/////////////////////////////////////////////////////////////////////////////////
    let E1 = document.getElementById("proto_1");
    // let BoxContainer = document.getElementById("BoxContainer");
    let BoxContainer = document.getElementById("BoxBackContainer");
    // let InputProto1 = ImageBitmap;
    let InputProto1 = document.createElement("img").src = "img/proto_3.jpg";

    ////inputs obgects:////
    // let InputObject;
    let inputObj_instance;
    // InputObject.innerHTML = inputObj_instance;


    // inputObj_instance = "proto_3.jpg";


    //sourse for append:
    let source_1 = "img/cyan_discus_fish_transparent.png";
    let source_2 = "img/BannerfishTransparent.png";
    let source_3 = "img/barbus_transparent.png";
    let source_4 = "img/orange_discus_fish_transparent.png";
    let source_5 = "img/ClounFishImageItem.png";
    let source_6 = "img/BlueNeonFish.png";
    let source_7 = "img/WhitePterophyllum_2.png";
    let source_8 = "img/YellowPterophyllum.png";
    let source_9 = "img/BluePterophyllum.png";
    let source_10 = "img/OrangePterophyllum.png";

    let sourceArr = [
    source_1,
    source_2,
    source_3,
    source_4,
    source_5,
    source_6,
    source_7,
    source_8,
    source_9,
    source_10
    ];
    let Rand_index = 0;

    //default value
    let check_3 = "img/barbus_transparent.png";
    let check_4 = "img/orange_discus_fish_transparent.png";
    let check_2 = "img/BannerfishTransparent.png";
    let check_1 = "img/cyan_discus_fish_transparent.png";

    //result value
    let refer_instance_1;
    let refer_instance_2;
    let refer_instance_3;
    let refer_instance_4;

    //new items vars
    let item_1 = document.createElement('div');
    let item_2 = document.createElement('div');
    let item_3 = document.createElement('div');
    let item_4 = document.createElement('div');
    // item_3.classList.add("border", "border-2", "bg-dark", "w-25");

    //ImageItem Class
    class Image_Item {
        Comstructor(Name, Description, Source, Width, Height){
        this.Name = Name;
    this.Description = Name;
    this.Source = Source;
    this.Width = Width;
    this.Height = Height;
        }
    }

    // var item_F4 = new Image_Item();
    // item_F4.Source = '<img id="" class="dropContent" width="10%" src="proto_4.jpg" alt="">';
        // let append_I4 = item_F4.Source;

        function Refer_Element1(){
            refer_instance_1 = "img/cyan_discus_fish_transparent.png";
        return refer_instance_1;
    }
        function Refer_Element2(){
            refer_instance_2 = "img/BannerfishTransparent.png";
        return refer_instance_2;
    }
        function Refer_Element3(){
            refer_instance_3 = "img/barbus_transparent.png";
        return refer_instance_3;
    }
        function Refer_Element4(){
            refer_instance_4 = "img/orange_discus_fish_transparent.png";
        return refer_instance_4;
    }

        function animateFunction_ALL(){
            BoxContainer.classList.add("border", "border-4");
        if (refer_instance_1 === check_1){
            inputObj_instance = source_1;
            // BoxContainer.innerHTML = '<img id="proto_1" class="dropContent" width="5%" src="'+ inputObj_instance +'" alt="">';
            BoxContainer.append(item_1);
            item_1.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
        }
                if (refer_instance_2 === check_2){
                    inputObj_instance = source_2;
                BoxContainer.append(item_2);
                item_2.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
        } else if (refer_instance_3 === check_3){
                        inputObj_instance = source_3;
                    BoxContainer.append(item_3);
                    item_3.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
        } else if (refer_instance_4 === check_4){
                            inputObj_instance = source_4;
                        BoxContainer.append(item_4);
                        item_4.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
            // BoxContainer.append(item_F4.Source);
            // BoxContainer.append(append_I4);
            // BoxContainer.append(item_1, item_2, item_3);
        }
    }
    // function Add_4_Random(){
                                //         BoxContainer.append(item_1);
                                //         inputObj_instance = source_1;
                                //         item_1.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';

                                //         BoxContainer.append(item_2);
                                //         inputObj_instance = source_2;
                                //         item_2.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';

                                //         BoxContainer.append(item_3);
                                //         inputObj_instance = source_3;
                                //         item_3.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';

                                //         BoxContainer.append(item_4);
                                //         inputObj_instance = source_4;
                                //         item_4.innerHTML = '<img id="" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                // }

                                function AddItem_Type1() {
                                    var CreateDivElement = document.createElement('div');
                                    var CreateImageElement = document.createElement('img');
                                    var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                    Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4

                                    item_1 = source_3;
                                    // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                    CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", "itemsAnimation_V" + AnimationNumber);
                                    CreateDivElement.setAttribute("style", "/*border: 2px solid red;*/ width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;");

                                    CreateImageElement.setAttribute("src", source_1);
                                    CreateImageElement.setAttribute("width", "70px");

                                    CreateDivElement.appendChild(CreateImageElement);
                                    BoxContainer.append(CreateDivElement);
                                    SetID++;
                                }
    function AddItem_Type1_Mobile(){
        var CreateDivElement = document.createElement('div');
                            var CreateImageElement = document.createElement('img');
                            var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                            Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4
                            //for adding mobile class CSS:
                            let AnimationMobilePrefix = "Mobile_";

                            item_1 = source_3;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                + "itemsAnimation_V" + AnimationNumber
                                CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", AnimationMobilePrefix + "itemsAnimation_V" + AnimationNumber);
                                CreateDivElement.setAttribute("style", "/*border: 2px solid red;*/ width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                CreateImageElement.setAttribute("src", source_1);
                                CreateImageElement.setAttribute("width", "70px");

                                CreateDivElement.appendChild(CreateImageElement);
                                BoxContainer.append(CreateDivElement);
                                SetID++;
    }
                                function AddItem_Type2(){
        var CreateDivElement = document.createElement('div');
                                var CreateImageElement = document.createElement('img');
                                var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4

                                item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                    CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", "itemsAnimation_V" + AnimationNumber);
                                    CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                    CreateImageElement.setAttribute("src", source_2);
                                    CreateImageElement.setAttribute("width", "70px");

                                    CreateDivElement.appendChild(CreateImageElement);
                                    BoxContainer.append(CreateDivElement);
                                    SetID++;
    }
                                    function AddItem_Type2_Mobile(){
        var CreateDivElement = document.createElement('div');
                                    var CreateImageElement = document.createElement('img');
                                    var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                    Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4
                                    //for adding mobile class CSS:
                                    let AnimationMobilePrefix = "Mobile_";

                                    item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                        CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", AnimationMobilePrefix + "itemsAnimation_V" + AnimationNumber);
                                        CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                        CreateImageElement.setAttribute("src", source_2);
                                        CreateImageElement.setAttribute("width", "70px");

                                        CreateDivElement.appendChild(CreateImageElement);
                                        BoxContainer.append(CreateDivElement);
                                        SetID++;
    }
                                        function AddItem_Type3(){
        var CreateDivElement = document.createElement('div');
                                        var CreateImageElement = document.createElement('img');
                                        var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                        Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4

                                        item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                            CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", "itemsAnimation_V" + AnimationNumber);
                                            CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                            CreateImageElement.setAttribute("src", source_3);
                                            CreateImageElement.setAttribute("width", "70px");

                                            CreateDivElement.appendChild(CreateImageElement);
                                            BoxContainer.append(CreateDivElement);
                                            SetID++;
    }
                                            function AddItem_Type3_Mobile(){
        var CreateDivElement = document.createElement('div');
                                            var CreateImageElement = document.createElement('img');
                                            var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                            Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4
                                            //for adding mobile class CSS:
                                            let AnimationMobilePrefix = "Mobile_";

                                            item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                                CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", AnimationMobilePrefix + "itemsAnimation_V" + AnimationNumber);
                                                CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                                CreateImageElement.setAttribute("src", source_3);
                                                CreateImageElement.setAttribute("width", "70px");

                                                CreateDivElement.appendChild(CreateImageElement);
                                                BoxContainer.append(CreateDivElement);
                                                SetID++;
    }
                                                function AddItem_Type4(){
        var CreateDivElement = document.createElement('div');
                                                var CreateImageElement = document.createElement('img');
                                                var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                                Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4

                                                item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                                    CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", "itemsAnimation_V" + AnimationNumber);
                                                    CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                                    CreateImageElement.setAttribute("src", source_4);
                                                    CreateImageElement.setAttribute("width", "70px");

                                                    CreateDivElement.appendChild(CreateImageElement);
                                                    BoxContainer.append(CreateDivElement);
                                                    SetID++;
    }
                                                    function AddItem_Type4_Mobile(){
        var CreateDivElement = document.createElement('div');
                                                    var CreateImageElement = document.createElement('img');
                                                    var AnimationNumber = Math.floor(Math.random() * 5) + 1; //number from 1 to 5
                                                    Rand_index = Math.floor(Math.random() * 3); //number from 1 to 4
                                                    //for adding mobile class CSS:
                                                    let AnimationMobilePrefix = "Mobile_";

                                                    item_1 = source_2;
            // item_1.innerHTML = '<img id="'+ SetID +'" class="dropContent" width="75px" src="'+ inputObj_instance +'" alt="">';
                                                        CreateDivElement.classList.add("bg-transparent", "rounded-circle", "AnimatedImageBoxes", AnimationMobilePrefix + "itemsAnimation_V" + AnimationNumber);
                                                        CreateDivElement.setAttribute("style", "width:75px !important; block-size: 75px !important; position: absolute; left:" + set_X + "px; top:" + set_Y + "px;" );

                                                        CreateImageElement.setAttribute("src", source_4);
                                                        CreateImageElement.setAttribute("width", "70px");

                                                        CreateDivElement.appendChild(CreateImageElement);
                                                        BoxContainer.append(CreateDivElement);
                                                        SetID++;
    }




                                                        ///start animation single_imagebox_item:
                                                        function Animate_Images(){
                                                            // let All_Image_Items = document.getElementsByClassName("AnimatedImageBoxes");
                                                            // All_Image_Items.classList.add("itemsAnimation");
                                                            // if ( === "AnimatedImageBoxes"){

                                                            // }
                                                            let Test_Item = document.getElementById("testItem");
                                                        Test_Item.classList.add("itemsAnimation");
    }

//</script>