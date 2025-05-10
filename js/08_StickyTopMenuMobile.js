//<script>
        var OpenButtonDefault = document.getElementById("stickyMenuOpened").hidden = "";
        var CloseButtonDefault = document.getElementById("stickyMenuClosed").hidden = "";

        var OpenButton;
        var CloseButton;

        function HideStickyMenu() {

            // document.getElementById("stickyMenuOpened").hidden = "hidden";
            // document.getElementById("stickyMenuClosed").hidden = "";

            document.getElementById("stickyMenuOpened").style.display = "none";
            document.getElementById("stickyMenuClosed").style.display = "block";


            document.getElementById("phoneSticky").style.bottom = "1em;";
            document.getElementById("whatsappSticky").style.bottom = "1em;";
            document.getElementById("telegramSticky").style.bottom = "1em;";
            document.getElementById("VKGroupSticky").style.bottom = "1em;";

            // document.getElementById("stickyMenuOpened").style.transitionDuration = "1s";
        }
        function openStickyMenu() {
            // document.getElementById("stickyMenuOpened").hidden = "";
            // document.getElementById("stickyMenuClosed").hidden = "hidden";

            document.getElementById("stickyMenuOpened").style.display = "block";
            document.getElementById("stickyMenuClosed").style.display = "none";

            // document.getElementById("stickyMenuClosed").style.transitionDuration = "1s";
            // }
        }
// </script>