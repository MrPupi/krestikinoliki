console.log('It Works');
// const div1 = document.getElementById('div1')as HTMLDivElement
// const div2 = document.getElementById('div2')as HTMLDivElement
// const div3 = document.getElementById('div3')as HTMLDivElement
// const div4 = document.getElementById('div4')as HTMLDivElement
// const div5 = document.getElementById('div5')as HTMLDivElement
// const div6 = document.getElementById('div6')as HTMLDivElement
// const div7 = document.getElementById('div7')as HTMLDivElement
// const div8 = document.getElementById('div8')as HTMLDivElement
// const div9 = document.getElementById('div9')as HTMLDivElement
var divClass = /** @class */ (function () {
    function divClass() {
        this.div = [];
        for (var i = 1; i <= 9; i++) {
            this.div[i] = document.getElementById("div" + i);
        }
    }
    divClass.prototype.divClass = function (div1) {
        throw new Error("Method not implemented.");
    };
    divClass.prototype.getDiv = function (index) {
        return this.div[index];
    };
    return divClass;
}());
var spanClass = /** @class */ (function () {
    function spanClass() {
        this.span = [];
        for (var i = 1; i <= 9; i++) {
            this.span[i] = document.getElementById("span" + i);
        }
    }
    spanClass.prototype.spanClass = function (span1) {
        throw new Error("Method not implemented.");
    };
    spanClass.prototype.getSpan = function (index) {
        return this.span[index];
    };
    return spanClass;
}());
var divs = new divClass();
var spans = new spanClass();
var divOne = divs.getDiv(1);
divOne.addEventListener('click', function () {
    var spanOne = spans.getSpan(1);
    if (spanOne) {
        spanOne.textContent = '✖️';
    }
});
