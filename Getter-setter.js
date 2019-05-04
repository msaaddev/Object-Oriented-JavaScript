function Circle(radius) {
	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	this.draw = () => {
		console.log('draw');
	};

	Object.defineProperty(this, 'defaultLocation', {
		get: () => {
			return defaultLocation;
		},

		set: value => {
			if (typeof value.x !== 'number' || typeof value.y !== 'number') throw new Error('Invalid Location.');
			else defaultLocation = value;
		}
	});
}

const another = new Circle(3);

another.defaultLocation = { x: 1, y: 2 };

const a = another.defaultLocation;
console.log(a);
