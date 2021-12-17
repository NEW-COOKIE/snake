import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GamComtrol {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  direction: string = '';

  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 游戏初始化
  init() {
    // 绑定键盘按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));

    // 调用run
    this.run();
  }

  /**
   * ArrowUp Up
   * ArrowDown Down
   * ArrowLeft Left
   * ArrowRight Right
   */
  keydownHandler(event: KeyboardEvent) {
    // console.log(event.key);
    this.direction = event.key;
  }

  // 控制蛇的移动
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;

      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;

      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;

      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }

    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y
    } catch (error) {
      alert(error);
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检测是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();

      this.scorePanel.addScore();

      this.snake.addBody();
    }
  }
  
}

export default GamComtrol;