interface Pizza{
    size: string;
    toppings?:{
        veggie?:string[],
        chicken?:string[],
        extras?:string[],
    };
    addOns?:{
        cheese?:boolean;
        extrasauce?:boolean;
    };
};

const myOrderedPizza:Pizza = {
    size:"large",
    toppings:{veggie:["tomato","onion"]},
    addOns:{cheese:true}
};

// const cheeseAddOn = myOrderedPizza.addOns  && myOrderedPizza.addOns.cheese;


//better way to use: optionalchaing karde:
const cheeseAddOn = myOrderedPizza?.addOns?.cheese;


// nullish coalescing operator ??
const addon = myOrderedPizza?.addOns?.cheese ?? false;