console.log("Hello, World!");

// Function to calculate and display multiplication table
function printTable(num: number): void {
  console.log(`\n=== Multiplication Table of ${num} ===`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
  }
}

// Calculate 4 multiplication tables
printTable(2);
printTable(3);
printTable(5);
printTable(7);
