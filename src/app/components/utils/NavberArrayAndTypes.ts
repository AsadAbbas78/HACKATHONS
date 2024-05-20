 export interface NavberItemType{
    label:string,
    href:string,
    isDropDown:boolean,
    dropdowndata?:any
}
export  const NavberArray : Array<NavberItemType> = [

    {
label:"Female",
href :"/female",
isDropDown:false

    },
    {
label:"Male",
href:"/male",
isDropDown:false
    },

{
    label:"Kids",
    href:"/kids",
    isDropDown:false

},
{
label:"All Products",
href:"allproducts",
isDropDown:false

},
];
