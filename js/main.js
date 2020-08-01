$(`.hamburger`).click(function(){
    $(`.nav`).addClass(`open`);

    $(`.hamburger-open`).toggle();
    
})

$(`.hamburger-open`).click(function(){
    $(`.nav`).removeClass(`open`);

    $(`.hamburger-open`).toggle();
})

