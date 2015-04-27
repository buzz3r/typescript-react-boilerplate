/// <reference path='../../typings/_all.d.ts' />

import keyMirror = require('keymirror');

class Constants {

    public static actionTypes(): ActionTypes  {
        return keyMirror({
            CLICK: null
        });
    }

    public static payloadSources(): PayloadSources {
        return keyMirror({
            SERVER_ACTION: null,
            VIEW_ACTION: null
        });
    }
}

export = Constants;