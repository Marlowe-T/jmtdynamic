$(function() {
    $("li.loginDropdown > a").on("click", () =>{
        $(".loginDropMenu").toggle("display");
        $("li.regDropdown > a").on("click", () =>{
            $(".loginDropMenu").hide(400);
            $(".regDropMenu").show(400);
            $("li.loginDropdown > a").on("click", () =>{
                $(".regDropMenu").hide(400);
                $(".loginDropMenu").hide();
            });   
        });
    });
});
