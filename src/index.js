class Sorter {
  constructor() {
    this.elements = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return  this.elements;
  }

  sort(indices) {
    indices.sort();
    let arr = indices.map( (num) => {
      return  this.elements[num];
    }, this);

    arr.sort(this.comparator);

    for(let i = 0;i < indices.length;i++){
      this.elements[indices[i]] = arr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;