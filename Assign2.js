let importing = function(){
    this.name = "boot";

} 
importing.prototype.start = function(resolve){
    this.resolve = resolve;
    setTimeout(this.test.bind),1000);
    console.log('start.......>');
}

importing.prototype.test = function(){
    this.resolve('Test');
    console.log('Test ........>');

}

importing.prototype.end = function(resolve){
    console.log('end .......>');
    this.resolve('end');

}

let geko;
let scan = new importing();
Promise.resolve(geko)
        .then(geko) => new Promise(scan.start.bind(scan)))
        .then(geko) => new Promise(scan.start.bind(scan)))
        .catch(geko) => {
            console.log('Error message: ' , geko)
        })