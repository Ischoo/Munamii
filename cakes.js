var cakes =[
    {
    path: "/img/cake_list1.jpg",
    title: "Black and White",
    price: "24.99"
    },
    {
    path: "/img/cake_list2.jpg",
    title: "Fresh Blueberries",
    price: "22.99"
    },
    {
        path: "/img/cake_list3.jpg",
        title: "Macaron Madness",
        price: "27.99"
    },
    {
        path: "/img/cake_list4.jpg",
        title: "Sweet Mango",
        price: "24.99"
    },
    {
        path: "/img/cake_list5.jpg",
        title: "Fancy Frosting",
        price: "32.99"
    },
    {
        path: "/img/cake_list6.jpg",
        title: "Summer Berries",
        price: "26.99"
    },
    {
        path: "/img/cake_list7.jpg",
        title: "Pink Oreos",
        price: "28.99"
    },
    {
        path: "/img/cake_list8.jpg",
        title: "Happy Holiday",
        price: "24.99"
    }
]
var cupcakes =[
    {
    path: "/img/cup_list1.jpg",
    title: "Red Velvet",
    price: "2.99"
    },
    {
    path: "/img/cup_list2.jpg",
    title: "Sweet Lemon",
    price: "2.99"
    },
    {
        path: "/img/cup_list3.jpg",
        title: "Nutty Hazel",
        price: "2.99"
    },
    {
        path: "/img/cup_list4.jpg",
        title: "Oreo Blast",
        price: "2.99"
    },
    {
        path: "/img/cup_list5.jpg",
        title: "Cherry Top",
        price: "2.99"
    },
    {
        path: "/img/cup_list6.jpg",
        title: "Fresh Menthos",
        price: "2.99"
    },
    {
        path: "/img/cup_list7.jpg",
        title: "Rainbow Taste",
        price: "2.99"
    },
    {
        path: "/img/cup_list8.jpg",
        title: "Brownie Points",
        price: "2.99"
    }
]
function pickProduct(cat, prod) {
    var selected
    if (cat == 1) {
        switch(prod){
            case 0:
            selected = cakes[0];
            break;
            case 1:
            selected = cakes[1];
            break;
            case 2:
            selected = cakes[2];
            break;
            case 3:
            selected = cakes[3];
            break;
            case 4:
            selected = cakes[4];
            break;
            case 5:
            selected = cakes[5];
            break;
            case 6:
            selected = cakes[6];
            break;
            case 7:
            selected = cakes[7];
            break;
        }
    }
    else if (cat == 2) {
        switch(prod){
            case 0:
            selected = cupcakes[0];
            break;
            case 1:
            selected = cupcakes[1];
            break;
            case 2:
            selected = cupcakes[2];
            break;
            case 3:
            selected = cupcakes[3];
            break;
            case 4:
            selected = cupcakes[4];
            break;
            case 5:
            selected = cupcakes[5];
            break;
            case 6:
            selected = cupcakes[6];
            break;
            case 7:
            selected = cupcakes[7];
            break;
        }
    }
    showProduct(selected);
}

function showProduct(sel) {
    document.getElementById("selected").src = sel.path
    document.getElementById("selected_info").innerHTML = sel.title + " Price: " + sel.price +"$";

    


}