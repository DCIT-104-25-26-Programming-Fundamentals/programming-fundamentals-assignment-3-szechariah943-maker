// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function printMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
        let rowStr = '';
        for (let j = 0; j < mat[i].length; j++) {
            rowStr += mat[i][j].toString().padStart(5, ' ');
        }
        console.log(rowStr);
    }
}

function readMatrix(rows) {
    let mat = [];
    for (let i = 0; i < rows; i++) {
        let line = readlineSync.question(`Enter row ${i + 1}: `);
        let row = line.trim().split(/\s+/).map(Number);
        mat.push(row);
    }
    return mat;
}

function transposeMatrix(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let result = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(mat[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(matA, matB) {
    let rows = matA.length;
    let cols = matA[0].length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matA[i][j] + matB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(matA, matB) {
    let m = matA.length;
    let n = matA[0].length;
    let p = matB[0].length;
    let result = [];

    for (let i = 0; i < m; i++) {
        let newRow = [];
        for (let j = 0; j < p; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matA[i][k] * matB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log('--- PART A: Transpose ---');
    let m = readlineSync.questionInt('Enter number of rows: ');
    let n = readlineSync.questionInt('Enter number of columns: ');
    let matrixA = readMatrix(m);

    console.log('\nOriginal Matrix:');
    printMatrix(matrixA);

    let transposed = transposeMatrix(matrixA);
    console.log('\nTransposed Matrix:');
    printMatrix(transposed);

    console.log('\n--- PART B: Addition ---');
    console.log(`Enter second matrix (${m} x ${n}):`);
    let matrixB = readMatrix(m);
    let sum = addMatrices(matrixA, matrixB);
    console.log('\nSum Matrix:');
    printMatrix(sum);

    console.log('\n--- PART C: Multiplication ---');
    let p = readlineSync.questionInt('Enter number of columns for Matrix B: ');
    console.log(`Enter Matrix A (${m} x ${n}):`);
    let matMultA = readMatrix(m);
    console.log(`Enter Matrix B (${n} x ${p}):`);
    let matMultB = readMatrix(n);

    let product = multiplyMatrices(matMultA, matMultB);
    console.log('\nProduct Matrix (A x B):');
    printMatrix(product);
}

main();
