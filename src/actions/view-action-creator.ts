import BaseDispatcher = require('../dispatcher/base-dispatcher');
import ActionTypes = require('../constants/ActionTypes');

interface IViewActionCreators {
    click(): void;
}

class ViewActionCreator implements IViewActionCreators {
  private dispatcher: typeof BaseDispatcher;

    constructor() {
      this.dispatcher = BaseDispatcher;
    }

    public click(): void {
      this.dispatcher.handleViewAction({
          type: ActionTypes.CLICK
      });
    }
}

var actionCreator = new ViewActionCreator();
export = actionCreator;