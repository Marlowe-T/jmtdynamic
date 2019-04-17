$(function() {
    $("li.loginDropdown > a").on("click", () =>{
        $(".loginDropMenu").toggle("display");
    });
    $("li.regDropdown > a").on("click", () =>{
        $(".regDropMenu").toggle("display");
    });
});
