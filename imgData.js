const imgData = (arr) => arr.map(item=> `<img src="${item.url}" alt="${item.title}"/>`);

console.log(
     (imgData([
    {url : "google.com" , title: "Google" },
    {url : "pickupbiz.com" , title: "PickupBiz" },
    {url : "outlook.com" , title: "Live" },
    {url : "amazon.com" , title: "Amazon" },


]))
);
