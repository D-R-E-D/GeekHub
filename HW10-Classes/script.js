
/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}

class Shape {
/*
     @param {Point} center
*/

    constructor(center) {
        this._center = center;
    }
}

class Polygon extends Shape {
/*

    @param {Point} center
    @param {Points[]} points

*/

    constructor(center, points) {
        super(center);
        this._points = points;
    }

    getPerimeter() {
        const SIDES = [];
        const POINTS = this._points;
        const POINTS_COUNT = POINTS.length;
        this._perimeter = 0;
        for (let i = 0; i < POINTS_COUNT - 1; i++) {
            if (i === POINTS_COUNT - 1) {
                SIDES[i] = +(POINTS[i].getDistance(POINTS[0]));
            }
            SIDES[i] = +(POINTS[i].getDistance(POINTS[i + 1]));
            this._perimeter = this._perimeter + SIDES[i];
        }
        return this._perimeter;
    }
}

class Rectangle extends Polygon {
/*

    @param {Point} center
    @param {number} width
    @param {number} height

*/

    constructor(center, width, height) {
        super(center);
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return 2 * (this._width + this._height);
    }
}

class Square extends Rectangle {
    /*
    @param {Point} center
    @param {number} width
     */

    constructor(center, width) {
        super(center, width, width);
    }
}

class Circle extends Shape {
    /*

    @param {Point} center
    @param {number} radius

*/

    constructor(center, radius) {
        super(center);
        this._radius = radius;
    }

    getArea() {
        return 3.14 * (this._radius ** 2);
    }

    getPerimeter() {
        return 2 * 3.14 * this._radius;
    }
}

// Shapes = {
//     Shape,
//     Polygon,
//     Rectangle,
//     Square,
//     Circle,
//     Point,
// };


// Point

const MY_POINT = new Point(12, 5);
const MY_POIT2 = new Point(15, 12);
const MY_POIT3 = new Point(22, 12);
const MY_POIT4 = new Point(15, 91);
const MY_POIT5 = new Point(33, 38);
const MY_POIT6 = new Point(44, 5);
const MY_POIT7 = new Point(54, 9);
const MY_POIT8 = new Point(34, 12);
const MY_POIT9 = new Point(63, 55);

const POINTS = [MY_POIT3, MY_POIT4, MY_POIT5, MY_POIT6, MY_POIT7, MY_POIT8, MY_POIT9];
console.log(MY_POINT.getDistance(MY_POIT2));
console.log(MY_POINT.getPointAtOffset(8, 5));

const MY_POLYGON = new Polygon(MY_POINT, POINTS);
console.log(MY_POLYGON.getPerimeter());

const MY_SQR = new Square(MY_POINT, 20);
console.log(MY_SQR.getArea());
console.log(MY_SQR.getPerimeter());

const MY_CIRCLE = new Circle(MY_POINT, 20);
console.log(MY_CIRCLE.getArea());
console.log(MY_CIRCLE.getPerimeter());
