// Интерфейс, описывающий модель пользователя с JSONPlaceholder
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    // ...
  };
}

async function fetchUser(userId: number): Promise<User | null> {
  // 1. Функция объявлена как `async`, значит, она возвращает Promise.
  // 2. Возвращаемый тип Promise<User | null> означает:
  //    - В случае успеха вернётся User.
  //    - В случае ошибки (или если пользователь не найден) мы можем вернуть null.

  try {
    // Выполняем запрос. `fetch` возвращает Promise<Response>.
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Проверяем, успешен ли HTTP-ответ (статус 200-299).
    if (!response.ok) {
      // Если ответ не успешен (например, 404), выбрасываем ошибку.
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    // Парсим тело ответа как JSON.
    // Тип `User` для переменной `userData` подсказывает TypeScript структуру объекта.
    const userData: User = await response.json();

    console.log(`Город пользователя: ${userData.address.city}`);

    // Возвращаем данные. Так как функция `async`, это равносильно return Promise.resolve(userData).
    return userData;
  } catch (error) {
    // Перехватываем любые ошибки: сетевые, ошибки парсинга JSON, выброшенные нами.
    console.error('Не удалось загрузить пользователя:', error);
    // Возвращаем null в качестве индикатора ошибки.
    return null;
  }
}

async function fetchUsers(city?: string): Promise<User[]> {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const users: User[] = await response.json();
    
    return city ? users.filter((user) => user.address.city === city) : users;
  } catch (error) {
    console.error('Не удалось загрузить пользователей:', error);
    throw error;
  }
}

async function testFunctions() {
  const user = await fetchUser(1);
  console.log(user);

  const allUsers = await fetchUsers();
  console.log(allUsers);

  const lebsackburyUsers = await fetchUsers('Lebsackbury');
  console.log(lebsackburyUsers);
}

testFunctions();
