

































$(`.hamburger`).click(function () {
    $(`.nav`).addClass(`open`);

    $(`.hamburger-open`).toggle();
    $(`.orders`).toggle();
    $(`.buy`).toggle();

})

$(`.hamburger-open`).click(function () {
    $(`.nav`).removeClass(`open`);
    $(`.orders`).toggle();
    $(`.buy`).toggle();
    $(`.hamburger-open`).toggle();
})


