function Phone(brand, price, color, battery) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
    this.battery = battery;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It's battery power is " + this.battery + ".");
}



var samsung6s = new Phone("Samsung","2000","black", "2104mAh");
var iPhone6a = new Phone("Apple", "2300","silver", "3120mAh");
var onePlusOne3 = new Phone("OnePlusOne","2400","yellow", "540mAh");


samsung6s.printInfo();
iPhone6a.printInfo();
onePlusOne3.printInfo();
