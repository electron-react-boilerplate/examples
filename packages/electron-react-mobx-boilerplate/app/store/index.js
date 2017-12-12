import { createHashHistory } from 'history';
import { observable, action, runInAction } from 'mobx';

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
    this.couter = new Counter(this);
  }
}

class UIStore {
  @observable bgColor = 'yellow';

  constructor(root) {
    this.root = root;
  }

  @action.bound
  changeBgColor() {
    this.bgColor = 'red';
  }
}

class Counter {
  @observable count = 1;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @action.bound
  incrementIfOdd() {
    if (this.count % 2 === 0) {
      this.count++;
    }
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      runInAction('async add count', () => {
        this.count++;
      });
    }, 1000);
  }
}

const rootStore = new RootStore();
const history = createHashHistory();

export { rootStore, history };
