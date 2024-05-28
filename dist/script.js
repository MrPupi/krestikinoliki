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
// class divClass {
//   divClass(div1:any) {
//     throw new Error("Method not implemented.")
//   }
//   private div:HTMLDivElement[]=[]
//   constructor(){
//     for(let i=1;i<=9;i++) {
//       this.div[i]=document.getElementById(`div${i}`)as HTMLDivElement
//     }
//   }
//   public getDiv(index:number):HTMLDivElement {
//     return this.div[index]
//   }
// }
// class spanClass {
//   spanClass(span1: any) {
//     throw new Error("Method not implemented.")
//   }
//   private span: HTMLSpanElement[] = [];
//   constructor() {
//     for(let i=1; i<=9; i++){
//       this.span[i] = document.getElementById(`span${i}`)as HTMLSpanElement
//     }
//   }
//   public getSpan(index:number): HTMLSpanElement {
//     return this.span[index];
//   }
// } 
// const divs = new divClass()
// const spans = new spanClass();
var cells = document.querySelectorAll('.cell');
var currentPlayer = 'X';
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
