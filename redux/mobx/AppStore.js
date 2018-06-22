import { observable, action } from 'mobx';

class AppStore {
  @observable list = [1, 2, 3, 4];

  @action
  addItem(item) {
    this.list.push(item);
  }
}

const store = new AppStore();
export default store;
