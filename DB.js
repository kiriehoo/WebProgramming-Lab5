class DB {
  constructor() {
    this.items = [];
  }

  Add(item) {
    if (item.id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item.id) {
          this.items[i] = item;
          break;
        }
      }
    } else {
      this.items.push(item);
    }
    this.Update();
  }

  Get(id) {
    if (this.items) {
      for (var i = 0; i < this.items.length; i++)
        if (this.items[i].id == id) return this.items[i];
    }
    return undefined;
  }

  Delete(id) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        this.items.splice(i, 1);
      }
    }
  }
  Update() {
    for (var i = 0; i < this.items.length; i++) this.items[i].id = i + 1;
  }
}
