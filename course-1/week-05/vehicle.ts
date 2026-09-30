export abstract class Vehicle {
  brand: string;
  protected year: number;
  private readonly id: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
    this.id = Date.now();
  }

  abstract getInfo(): string;

  startEngine() {
    console.log('Двигатель запущен');
  }

  /**
   * Без геттера получить приватное поле id не получится
   */
  getId() {
    return this.id;
  }
}
