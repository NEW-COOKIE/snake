// 定义类foot
class Food {
  element: HTMLElement;

  constructor() {
    // 获取页面中的食物元素foot
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取food的坐标方法
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop
  }

  // 修改food位置的方法
  change() {
    // food的位置最小是0,最大是290

    let letf = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = letf + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;