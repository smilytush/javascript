function Circle (radiuss) {
    this.radius = radiuss;
    this.pi = 3.14;
this.area = function(){
    return this.pi * this.radius * this.radius;
};
}
const result = new Circle(4); //result = {radius: 4, pi: 3.14, area()}
//console.log(result.area());


const movies = {
    title: "xyz",
    tags: [1,4,7,5 ],
    showMovies() {
      this.tags.forEach(
          function(element) {
          console.log (element, this.title);
          }.bind(this)

      );
    
    },
};
movies.showMovies();