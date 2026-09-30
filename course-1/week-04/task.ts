// Чаcть A

function toArray<T>(...args: T[]): T[] {
  return args;
}

console.log(toArray(1, 2, 3, 4, 5));

// Чаcть B

function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number {
  return parseInt(input, radix);
}

console.log(parseInput('5'));
console.log(parseInput('3', 4));

// Чаcть C

interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;
type LibraryCatalog = Record<string, BookCatalogItem>;
