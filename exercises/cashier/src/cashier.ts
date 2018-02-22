interface CartAPI {
  length: number
  total: number
  addItem (item: CartItem): CartAPI
  add (name: string, price: number, qty: number): CartAPI
}

interface CartItem {
  name: string,
  price: number,
  qty: number
}

export function cashier(): CartAPI {
  let items: CartItem[] = []
  return {
    get length () {
      return items.reduce((acc, item) => {
        return acc + item.qty
      }, 0)
    },
    get total () {
      return items.reduce((acc, item) => {
        return acc + (item.qty * item.price)
      }, 0)
    },
    addItem (item): CartAPI {
      items.push(item)
      return this;
    },
    add (name, price, qty = 1): CartAPI {
      items.push({ name, price, qty })
      return this;
    }
  };
}
