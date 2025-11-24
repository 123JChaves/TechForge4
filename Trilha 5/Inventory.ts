interface InventoryRecord {
  [item: string]: number;
}

abstract class Inventory {
  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string, quantity: number): void;
  abstract getInventory(): InventoryRecord;
}

class WarehouseInventory extends Inventory {
  private inventory: InventoryRecord;

  constructor() {
    super();
    this.inventory = {};
  }

  addItem(item: string, quantity: number): void {
    if (this.inventory[item]) {
      this.inventory[item] += quantity;
    } else {
      this.inventory[item] = quantity;
    }
  }

  removeItem(item: string, quantity: number): void {
    if (this.inventory[item]) {
      if (this.inventory[item] >= quantity) {
        this.inventory[item] -= quantity;
      } else {
        console.log(`Não há quantidade suficiente de ${item} no armazém.`);
      }
    } else {
      console.log(`${item} não está no armazém.`);
    }
  }

  getInventory(): InventoryRecord {
    return this.inventory;
  }
}

class StoreInventory extends Inventory {
  private inventory: InventoryRecord;
  private maxQuantity: number;

  constructor() {
    super();
    this.inventory = {};
    this.maxQuantity = 10;
  }

  addItem(item: string, quantity: number): void {
    if (this.inventory[item]) {
      if (this.inventory[item] + quantity <= this.maxQuantity) {
        this.inventory[item] += quantity;
      } else {
        console.log(`Não é possível adicionar ${quantity} unidades de ${item} à loja. O limite é ${this.maxQuantity} unidades.`);
      }
    } else {
      if (quantity <= this.maxQuantity) {
        this.inventory[item] = quantity;
      } else {
        console.log(`Não é possível adicionar ${quantity} unidades de ${item} à loja. O limite é ${this.maxQuantity} unidades.`);
      }
    }
  }

  removeItem(item: string, quantity: number): void {
    if (this.inventory[item]) {
      if (this.inventory[item] >= quantity) {
        this.inventory[item] -= quantity;
      } else {
        console.log(`Não há quantidade suficiente de ${item} na loja.`);
      }
    } else {
      console.log(`${item} não está na loja.`);
    }
  }

  getInventory(): InventoryRecord {
    return this.inventory;
  }
}


const warehouse = new WarehouseInventory();
warehouse.addItem("Produto A", 100);
warehouse.addItem("Produto B", 50);
console.log(warehouse.getInventory()); 
warehouse.removeItem("Produto A", 20);
console.log(warehouse.getInventory()); 

const store = new StoreInventory();
store.addItem("Produto C", 5);
store.addItem("Produto D", 15); 
console.log(store.getInventory()); 
store.removeItem("Produto C", 3);
console.log(store.getInventory()); 