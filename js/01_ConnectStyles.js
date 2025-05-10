//<script>
    //enable styles //////////////////////////////////////////////////////////////////////////////
    // let WindowWidth = document.getElementById("bodyItem");
    var ViewWidth = visualViewport.width;
    var ScreenViewWidth = window.innerWidth;
    let AnimationMobilePostfix = "";
    let AnimationMobilePrefix = "";

    function Connect_CSS_and_mob(){
        let CSS_1 = document.createElement('link');
    CSS_1.setAttribute("rel", "stylesheet");
    CSS_1.setAttribute("href", "css/main_desktop.css");
    document.head.appendChild(CSS_1);
    let CSS_2 = document.createElement('link');
    CSS_2.setAttribute("rel", "stylesheet");
    CSS_2.setAttribute("href", "css/animation_stylesheet_desktop.css");
    document.head.appendChild(CSS_2);
    let CSS_3 = document.createElement('link');
    CSS_3.setAttribute("rel", "stylesheet");
    CSS_3.setAttribute("href", "css/main_mobile.css")
    document.head.appendChild(CSS_3);
    let CSS_4 = document.createElement('link');
    CSS_4.setAttribute("rel", "stylesheet");
    CSS_4.setAttribute("href", "css/animation_stylesheet_mobile.css")
    document.head.appendChild(CSS_4);
    // var SrceenWidth = Screen.width;
    // WindowWidth
    // window.alert(DevWidth);
    // window.alert(SrceenWidth);
    // window.alert(WindowWidth.Width);
    if (ViewWidth < 800){
        document.getElementById("Items_Panel").classList.remove("flex-column");
    document.getElementById("Buttons_Panel").classList.remove("flex-column");

    document.getElementById("Items_Panel").setAttribute("style", " ");
    document.getElementById("Items_Panel").setAttribute("class", "d-flex flex-wrap justify-content-between Items_Panel_mobile sticky-bottom");
            // document.getElementById("WarningBox").setAttribute("class","d-block bg-warning");
            // AnimationMobilePostfix = "_Mobile_";


        }
    // let ItemB1 = document.getElementById("proto_1");
    // let ItemB2 = document.getElementById("itemAdd_2");
    let ItemB3 = document.getElementById("itemAdd_3");
    let ItemB4 = document.getElementById("itemAdd_4");
    let ItemB5 = document.getElementById("itemAdd_5");
        // ItemB2.setAttribute("style", "opacity: 0.5;");
        // ItemB3.setAttribute("style", "opacity: 0.5;");
        // ItemB4.setAttribute("style", "opacity: 0.5;");
        // ItemB5.setAttribute("style", "opacity: 0.5;");
        // ItemB2.disabled = true;
        // ItemB3.disabled = true;
        // ItemB4.disabled = true;
        // return AnimationMobilePostfix;
    }
    function HomePage(){
        window.open("https://wmit.online", "_self");
    }

//</script>