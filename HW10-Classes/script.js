
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


class Shape {
    constructor(center) {
        this.center = center;
    }
}

class Polygon extends Shape {
    constructor(center, points) {
        super(center);
        this.points = points;
    }
}

class Rectangle extends Polygon {
    constructor(center, width, height) {
        super(center);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(center, width) {
        super(center, width, width);
    }

    getArea() {
        return this.width ** 2;
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

class Circle extends Shape {
    constructor(center, radius) {
        super(center);
        this.radius = radius;
    }

    getArea() {
        return 3.14 * (this.radius ** 2);
    }

    getPerimetr() {
        return 2 * 3.14 * this.radius;
    }
}

class Point {
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}

Shapes = {
    Shape,
    Polygon,
    Rectangle,
    Square,
    Circle,
    Point,
};
