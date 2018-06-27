document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", function () {
        var a = parseFloat(document.getElementById("ka").value);
        var b = parseFloat(document.getElementById("kb").value);
        var c = parseFloat(document.getElementById("kc").value);
        if (isNaN(a)) {
            a = 0;
        }
        if (isNaN(b)) {
            b = 0;
        }
        if (isNaN(c)) {
            c = 0;
        }
        var x;
        var discriminant = Math.pow(b, 2) - 4 * a * c;

        var aString = a + "x<sup>2</sup> ";
        if (a === -1) {
            aString = "-x<sup>2</sup> ";
        }
        if (a < 0) {
            aString = "-" + Math.abs(a) + "x<sup>2</sup> ";
        }
        if (a === 0) {
            aString = "";
        }

        var bString = "+" + b + "x ";
        if (b === 0 || a === 0) {
            bString = "";
        }

        if (a === 0 && b > 0) {
            bString = b + "x ";
        }


        if (b < 0) {
            bString = "-" + Math.abs(b) + "x ";
        }
        if (b === -1) {
            bString = "-x ";
        }

        var cString = "+" + c;
        if (c < 0) {
            cString = "-" + Math.abs(c);
        }
        if (c === 0) {
            cString = "";
        }

        var result = aString + bString + cString + " = 0";

        if (a === 0 && b === 0 && c === 0) {
            result += " => Это не квадратное уравнение. <em>x - любоe число.</em>";
        } else if (a === 0 && b === 0) {
            result += " => Неверное математическое выражение";
        } else if (a === 0 && c === 0) {
            result += " => Уравнение имеет бесконечное множество решений";
        } else if (a === 0) {
            x = -c / b;
            result += " => Линейное уравнение с одной переменной. <em>x = " + x + "</em>";
        } else if (discriminant < 0) {
            result += " => Уравнение не имеет решений.";
        } else if (discriminant === 0) {
            x = -b / (2 * a);
            if (b === 0) {
                x = 0;
            }
            result += " => Корень уравнения: <em>x = " + x + "<em>";
        } else {
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            result += " => Уравнение имеет 2 корня, <em>x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2) + "</em>";
        }
        var resultOutput = document.getElementById("result");
        resultOutput.innerHTML = result;
    });
});