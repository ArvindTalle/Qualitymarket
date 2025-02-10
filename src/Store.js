import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"products",
    initialState:{veg:[
        {name:"Potato",price:120,image:"Potato.png"},
        {name:"Tomato",price:200,image:"Tomato.png"},
        {name:"Carrot",price:150,image:"Carrot.png"},
        {name:"Onion", price:130,image:"Onion.png"},
        {name:"Bringal",price:160,image:"Brinjal.png"},
        {name:"Garlic",price:120,image:"Garlic.png"},
        {name:"Ladys finger",price:200,image:"Ladysfinger.png"},
        {name:"Mushroom",price:150,image:"Mushroom.png"},
        {name:"Pumpkin", price:130,image:"Pumpkin.png"},
        {name:"Cabbage",price:160,image:"Cabbage.png"},
        {name:"Broccoli",price:200,image:"Broccoli.png"},
        {name:"Green Pean",price:150,image:"Grrenpean.png"},
        {name:"Capsicum", price:130,image:"Capsicum.png"},
        {name:"Beetroot",price:160,image:"Beetroot.png"},
        {name:"Bitter Gourd",price:250,image:"Bittergourd.png"},
        {name:"Corn",price:350,image:"Corn.png"},
        {name:"Cauliflower",price:650,image:"Cauliflower.png"},
        {name:"celery",price:950,image:"Celery.png"},
        {name:"Lettuce",price:550,image:"Lettuce.png"},
        {name:"Cucumber",price:850,image:"Cucumber.png"},
        {name:"Zucchini",price:120,image:"Zucchini.png"},
        {name:"Spanish",price:200,image:"Spanish.png"},
        {name:"Leek",price:150,image:"Leek.png"},
        {name:"Kale", price:130,image:"Kale.png"},
        {name:"Ginger",price:160,image:"Ginger.png"}
        
    ],
    nonVeg:[
        {name:"Chicken",price:120,image:"Chicken.png"},
        {name:"Pork",price:200,image:"Mutton.png"},
        {name:"Lamb",price:150,image:"Lamb.png"},
        {name:"Duck", price:130,image:"Duck.png"},
        {name:"Turkey",price:160,image:"Turkey.png"},
        {name:"Evison",price:160,image:"Evison.png"},
        {name:"Goat",price:160,image:"Goat.png"},
        {name:"Rabbit",price:160,image:"Rabbit.png"},
        {name:"Fish",price:160,image:"Fish.png"},
        {name:"Crab",price:160,image:"Crab.png"},
        {name:"Oyster",price:160,image:"Oyster.png"}

    ],
    // cloths:[
    //     {name:"Shirt",price:350,brand:"PeterEngland",size:"S",color:"white"},
    //     {name:"Shirt",price:350,brand:"PeterEngland",size:"m",color:"white"},
    //     {name:"Shirt",price:550,brand:"PeterEngland",size:"xl",color:"white"},
    //     {name:"Shirt",price:850,brand:"PeterEngland",size:"xxl",color:"white"},

    //     {name:"Pant",price:650,brand:"Highlander",size:"28",color:"black"},
    //     {name:"Pant",price:750,brand:"Highlander",size:"30",color:"black"},
    //     {name:"Pant",price:850,brand:"Highlander",size:"32",color:"black"},
    //     {name:"Pant",price:950,brand:"Highlander",size:"34",color:"black"},
    //     {name:"Pant",price:1050,brand:"Highlander",size:"36",color:"black"},

    //     {name:"T-Shirt",price:250,brand:"Wrong",size:"S",color:"blue"},
    //     {name:"T-Shirt",price:350,brand:"Wrong",size:"m",color:"blue"},
    //     {name:"T-Shirt",price:650,brand:"Wrong",size:"xl",color:"blue"},
    //     {name:"T-Shirt",price:950,brand:"Wrong",size:"xxl",color:"blue"}

    // ],

    milk:[
        {name:"Milk",price:50,image:"Milk.png"},
        {name:"Butter",price:55,image:"Butter.png"},
        {name:"Cheese",price:60,image:"Cheese.png"},
        {name:"Cottage Cheese",price:60,image:"Cottagecheese.png"},
        {name:"Yoghurt",price:50,image:"Yoghurt.png"},
        {name:"Ice Cream",price:50,image:"Icecream.png"},
        {name:"Hot Chocolate",price:50,image:"Hotchocolate.png"},
        {name:"Sour Cream",price:50,image:"Sourcream.png"},
        {name:"Milk Shakes",price:50,image:"Milkshake.png"},
        {name:"Powdered Milk",price:50,image:"Milkpowder.png"},
        {name:"Gelato",price:50,image:"Gelato.png"},
        {name:"Whay Protein",price:50,image:"Whey.png"},
        {name:"Ghee",price:50,image:"Ghee.png"},
        {name:"Curd",price:50,image:"Curd.png"},
        {name:"Condensed Milk",price:50,image:"Condensedmilk.png"},
        {name:"Ice Pop",price:50,image:"Icepop.png"},
        {name:"Sherbet",price:50,image:"Sherbet.png"},
        {name:"Custard",price:50,image:"Custard.png"},
        {name:"Coleslaw",price:50,image:"Coleslaw.png"},
        {name:"Kefir",price:50,image:"Kefir.png"},
        {name:"Casein",price:50,image:"Casein.png"},
        {name:"Margarine",price:50,image:"Margarine.png"}



    ],

    // electronics:[
    //     {name:"mobile",price:45000,image:"Mobile.png"},
    //     {name:"tv",price:65000,image:"Tv.png"},
    //     {name:"laptop",price:98000,image:"Laptop.png"},
    //     {name:"fan",price:4500,image:"Fan.png"}
    // ]
},
    reducers:{}
});
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
            else
            {
                state.push({...action.payload,quantity:1});
            }
        },
        Increament:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
          
         },
         Decreament:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1)
            {
                item.quantity-=1;

            }
            else
            {
                return state.filter(item=>item.name !==action.payload.name);
            }
          
         },
         Remove:(state,action)=>{
            return state.filter(item=>item.name !==action.payload.name);
         },
          clear :()=>[]
    }

});

const purchaseSlice=createSlice({
    name:"purchase",
    initialState:[],
    reducers:{
        addToPurchase : (state,action) => {state.push(action.payload)},
        }
})

const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username")||"",
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.getItem("username",action.payload);

        },
        logout:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");
        },
    }
})

const store = configureStore({
    reducer:{products:productsSlice.reducer,
        cart:cartSlice.reducer,
        purchase :purchaseSlice.reducer,
        auth:authSlice.reducer
    }
})
export const{AddToCart,Increament,Decreament,Remove,clear}=cartSlice.actions;
export const{addToPurchase}=purchaseSlice.actions;
export const{login,logout}=authSlice.actions;
export default store;
