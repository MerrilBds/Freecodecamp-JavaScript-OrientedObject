/*Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, 
you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if
there are millions of instances.That would be a lot of duplicated variables.

A better way is to use the prototype of Bird.Properties 
in the prototype are shared among ALL instances of Bird.Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
*/
function Dog(name) {
    this.name = name;
}




let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 2;
