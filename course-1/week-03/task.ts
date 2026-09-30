function introduceYourself(name: string, age?: number): string {
  return `Привет, меня зовут ${name}${age ? ` и мне ${age} лет` : ''}.`;
}

console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));

interface Book {
  title: string;
  author: string;
  year?: number;
}

const myLibrary: Book[] = [
  { title: 'book-1', author: 'author-1', year: 2000 },
  { title: 'book-2', author: 'author-2', year: 2001 },
  { title: 'book-3', author: 'author-3', year: 2002 },
];

console.log(myLibrary);
