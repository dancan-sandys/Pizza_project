$(`.hamburger`).click(function(){
    $(`.nav`).addClass(`open`);

    $(`.hamburger-open`).show();
    
})

$(`.hamburger-open`).click(function(){
    $(`.nav`).removeClass(`open`);
})