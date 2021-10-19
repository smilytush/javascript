const obj = {
    title: "xyz",
    tags: [1, 2, 3, 4, 5],
    showMovies: function () {
        console.log(this);
        this.tags.forEach((element)=>{

        });

    },
};
obj.showMovies();


//create object 
//add method
//callback function
//pass this to callback function
