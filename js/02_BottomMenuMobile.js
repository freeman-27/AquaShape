//<script>
    let MobMenuStateID;
    function Collapse_MobilePanel(){
        // document.getElementById("Items_Panel_Mobile").classList.add("collapse");
        document.getElementById("Items_Panel_Mobile").removeAttribute("style");
    document.getElementById("Items_Panel_Mobile").classList.add("d-none");
    // document.getElementById("Func_Btn_1").classList.add("d-none");
    document.getElementById("HomePage_Btn").classList.remove("d-none");
    document.getElementById("Collapse_MobilePanel_Btn").classList.add("d-none");
    document.getElementById("UnCollapse_MobilePanel_Btn").classList.remove("d-none");
    // document.getElementById("UnCollapse_MobilePanel_Btn").setAttributeNodeNS("style", "display: block");

    MobMenuStateID = 1;
    return MobMenuStateID;
    }
    function UnCollapse_MobilePanel(){
        // document.getElementById("Items_Panel_Mobile").classList.add("collapse");
        if (MobMenuStateID == 1){
        document.getElementById("Items_Panel_Mobile").setAttribute("style", "z-index: 120005; width: fit-content; block-size: 200px; position: absolute; right: 0; bottom:0;");
    document.getElementById("Items_Panel_Mobile").classList.remove("d-none");
    // document.getElementById("Func_Btn_1").classList.remove("d-none");
    document.getElementById("HomePage_Btn").classList.add("d-none");
    document.getElementById("Collapse_MobilePanel_Btn").classList.remove("d-none");
    document.getElementById("UnCollapse_MobilePanel_Btn").classList.add("d-none");
        // document.getElementById("UnCollapse_MobilePanel_Btn").setAttributeNodeNS("style", "display: none");

    }MobMenuStateID = 2; return MobMenuStateID;
    }
//</script>