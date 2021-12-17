// 定义记分牌
class ScorePanel {
  score = 0;
  level = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLelel: number;
  upScore: number;

  constructor(maxLelel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLelel = maxLelel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';

    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLelel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;