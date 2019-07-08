$(function() {

    $("ul.navbar-nav > li").hover( 
        function(){
        $(this).addClass('hoverStyle');
    }, function(){
        $(this).removeClass('hoverStyle');
    });

    $("li.loginDropdown > a").on("click", () =>{
            $(".loginDropMenu").toggle("display");
        });

    $("li.regDropdown > a").on("click", () =>{
        $(".loginDropMenu").hide(400);
        $(".regDropMenu").show(400);
        $("li.loginDropdown > a").on("click", () =>{
            $(".regDropMenu").hide(400);
        });
    });

    $("li.userDropdown > a").on("click", () =>{
        $(".userDropMenu").toggle("display");
    });

    $("div.appFormBtn > a").on("click", () =>{
        $(".appList").hide();
        $(".appForm").show(200);
    });

    $("div.appFormCloseBtn > a").on("click", () =>{
        $(".appForm").hide();
        $(".appList").show(200);
    });

    $("div.editProBtn > a").on("click", () =>{
        $(".appForm").hide();
        $(".appList").hide();
        $(".editProForm").show(200);
    });

    $("div.editProCloseBtn > a").on("click", () =>{
        $(".editProForm").hide();
        $(".appForm").hide();
        $(".appList").show(200);
    });

});
