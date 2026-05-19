console.log("Hello, World!");

// Function to calculate and display multiplication table
function printTable(num: number): void {
  console.log(`\n=== Multiplication Table of ${num} ===`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
  }
}
function addTable(num: number):void {
  console.log('\n=== Addition of ${num} ===');
  for (let i=0;i<=10; i++){
    console.log('${num} + ${i} =${num+i}');
  }
}
// Calculate 4 multiplication tables
printTable(2);
printTable(3);
printTable(5);
addTable(4);s
printTable(10);
