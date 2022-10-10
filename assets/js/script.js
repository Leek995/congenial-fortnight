(function (){
    "use strict"
    // Creates dropdown menu
    function renderDropDown(){
        let html = '';
        html +=
            '           <div id="navbar-extension">\n' +
            '                <nav class="navbar">\n' +
            '                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="navbarClose" id="navbarCloseBtn" viewBox="0 0 16 16">\n' +
            '                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n' +
            '                    </svg>\n' +
            '                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="navbarDarkMode" id="navbarDarkModeBtn" viewBox="0 0 16 16">\n' +
            '                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\n' +
            '                    </svg>\n' +
            '                </nav>\n' +
            '            </div>';
        return html;
    }
    function renderHome(){
        let html = '';
        html +=
            '   <header id="home">\n' +
            '        <div class="container">\n' +
            '            <div id="navbar-extension">\n' +
            '                <nav class="navbar">\n' +
            '                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="navbarCollapse" id="navbarCollapseBtn" viewBox="0 0 16 16">\n' +
            '                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\n' +
            '                    </svg>\n' +
            '                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="navbarDarkMode" id="navbarDarkModeBtn" viewBox="0 0 16 16">\n' +
            '                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\n' +
            '                    </svg>\n' +
            '                </nav>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </header>';
        return html;
    }
    // Triggers color change when hovered upon
    $('#navbarCollapseBtn').hover(
        function (){
            $(this).css("background-color", "red");
        },
        function (){
            $(this).css("background-color", "white");
        }
    )

    // Expands navbar dropdown when clicked
    $('#navbarCollapseBtn').on("click", event =>{
        $('#navbar-expanded').css("visibility", "visible");
        $('#navbarCloseBtn').on("click", event =>{
            $('#navbar-expanded').css("visibility", "hidden");
        })

        // let nav_expand = renderDropDown();
        // $('#navbar-extension').html(nav_expand);
        //
        // $('#navbar-extension').children().children().children().first().on("click", event=>{
        //     $('#home').html(renderHome());
        // })

    })
})();