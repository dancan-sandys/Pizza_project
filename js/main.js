function Pizza(size, crust, topping, delivery) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery;
}

Pizza.prototype.calculatingSizePrice = function () {
    if (this.size == `large`) {
        sizePrice = 500;
        return sizePrice
    }

    else if (this.size == `medium`) {
        sizePrice = 400;
        return sizePrice
    }

    else {
        sizePrice = 300;
        return sizePrice
    }


}


Pizza.prototype.calculatingCrustRatio = function () {
    if (this.crust == `a`) {
        crustRatio = 0.3;
        return crustRatio

    }

    else if (this.crust == `b`) {
        crustRatio = 0.5;
        return crustRatio
    }

    else {
        crustRatio = 0.7;
        return crustRatio
    }
}

Pizza.prototype.calculatingToppingRatio = function () {
    if (this.topping == `a`) {
        toppingRatio = 0.2;
        return toppingRatio

    }

    else if (this.crust == `b`) {
        toppingRatio = 0.4;
        return crustRatio
    }

    else {
        toppingRatio = 0.6;
        return toppingRatio
    }
}

Pizza.prototype.deliver = function () {
    if (this.delivery == `Yes`) {
        
        return 70
    }

    else { return 0 }
}

Pizza.prototype.price = function () {
    thePrice = this.calculatingSizePrice() +
        (this.calculatingToppingRatio() * this.calculatingSizePrice()) +
        (this.calculatingCrustRatio() * this.calculatingSizePrice()) +
        this.deliver();

    return thePrice
}

var totals = 0;








$(`form`).submit(function (event) {

    event.preventDefault()
     

    pizzaSize = $(`input:radio[name=size]:checked`).val();
    pizzaCrust = $(`input:radio[name=Crust]:checked`).val();
    pizzaTopping = $(`input:radio[name=Topping]:checked`).val();
    pizzaDelivery = $(`#deliver`).val();


    newPizza = new Pizza(pizzaSize, pizzaCrust, pizzaTopping, pizzaDelivery)

    $(`#calculator`).text(`${newPizza.size} + ${newPizza.topping} + ${newPizza.crust} + 
                           ${newPizza.delivery} to delivery = ksh ${newPizza.price()}`
    )

    $(`#orders`).append(`<li> ${newPizza.size} + ${newPizza.topping} + ${newPizza.crust} + 
                           ${newPizza.delivery} to delivery = ksh ${newPizza.price()} </li>`
    )

    totals += newPizza.price()

    $(`#totals span`).text(totals);
  
})

































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


