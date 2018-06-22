import { observable, action } from 'mobx';

export default class TabStore {
  @observable name = 'Vũ Văn Nam';

  @action
  changeName(name) {
    this.name = name;
  }
}
