/* global describe it */

import { fromJS } from 'immutable';
import expect from 'expect';
import expectImmutable from 'expect-immutable';

import rootReducer from '../../src/reducers';

expect.extend(expectImmutable);

function testDevToolsExport(reducer, sequence) {
    const stateList = sequence.computedStates;
    const actionsById = sequence.actionsById;
    const actionIdList = sequence.stagedActionIds;

    let state = stateList[0].state;
    state.things = fromJS(state.things);

    for (let i = 1, len = actionIdList.length; i < len; i++) {
        state = reducer(state, actionsById[actionIdList[i]].action);
        // only really interested in the things state slice
        expect(state.things).toEqualImmutable(fromJS(stateList[i].state.things));
    }
}

/* eslint-disable quotes, indent, quote-props */
const reduxExport = {
  "actionsById": {
    "0": {
      "action": {
        "type": "@@INIT"
      },
      "timestamp": 1464781392401,
      "type": "PERFORM_ACTION"
    },
    "1": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "REMOVE_THING",
        "id": "5"
      },
      "timestamp": 1464781397800
    },
    "2": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "REMOVE_THING",
        "id": "3"
      },
      "timestamp": 1464781399363
    },
    "3": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "ADD_THING",
        "id": "newthing1",
        "name": "New Thing One"
      },
      "timestamp": 1464781409473
    },
    "4": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/FOCUS",
        "field": "email",
        "form": "signupForm"
      },
      "timestamp": 1464781412075
    },
    "5": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "a",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781412502
    },
    "6": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "as",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781412600
    },
    "7": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asd",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781412625
    },
    "8": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781412733
    },
    "9": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781412969
    },
    "10": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@a",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413186
    },
    "11": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@as",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413230
    },
    "12": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asd",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413279
    },
    "13": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asdf",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413368
    },
    "14": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asdf.",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413424
    },
    "15": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asdf.c",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413542
    },
    "16": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asdf.co",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413640
    },
    "17": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/CHANGE",
        "field": "email",
        "value": "asdf@asdf.com",
        "touch": false,
        "form": "signupForm"
      },
      "timestamp": 1464781413714
    },
    "18": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/BLUR",
        "field": "email",
        "value": "asdf@asdf.com",
        "touch": true,
        "form": "signupForm"
      },
      "timestamp": 1464781415113
    },
    "19": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/TOUCH",
        "fields": [
          "email"
        ],
        "form": "signupForm"
      },
      "timestamp": 1464781415193
    },
    "20": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "THING_SIGN_UP"
      },
      "timestamp": 1464781415194
    },
    "21": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/START_SUBMIT",
        "form": "signupForm"
      },
      "timestamp": 1464781415195
    },
    "22": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/DESTROY",
        "form": "signupForm"
      },
      "timestamp": 1464781415197
    },
    "23": {
      "type": "PERFORM_ACTION",
      "action": {
        "type": "redux-form/STOP_SUBMIT",
        "form": "signupForm"
      },
      "timestamp": 1464781415198
    }
  },
  "computedStates": [
    {
      "state": {
        "form": {},
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 3,
              "name": "thing3"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": 5,
              "name": "thing5"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {},
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 3,
              "name": "thing3"
            },
            {
              "id": 4,
              "name": "thing4"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {},
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {},
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "a"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "as"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asd"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@a"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@as"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asd"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf."
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.c"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.co"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_active": "email",
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.com"
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.com",
              "touched": true
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.com",
              "touched": true
            }
          }
        },
        "things": {
          "signedUp": false,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.com",
              "touched": true
            }
          }
        },
        "things": {
          "signedUp": true,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": true,
            "_submitFailed": false,
            "email": {
              "visited": true,
              "value": "asdf@asdf.com",
              "touched": true
            }
          }
        },
        "things": {
          "signedUp": true,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {},
        "things": {
          "signedUp": true,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    },
    {
      "state": {
        "form": {
          "signupForm": {
            "_asyncValidating": false,
            "_initialized": false,
            "_submitting": false,
            "_submitFailed": false
          }
        },
        "things": {
          "signedUp": true,
          "options": [
            {
              "id": 1,
              "name": "thing1"
            },
            {
              "id": 2,
              "name": "thing2"
            },
            {
              "id": 4,
              "name": "thing4"
            },
            {
              "id": "newthing1",
              "name": "New Thing One"
            }
          ]
        }
      }
    }
  ],
  "currentStateIndex": 23,
  "monitorState": {},
  "nextActionId": 24,
  "skippedActionIds": [],
  "stagedActionIds": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ]
};
/* eslint-enable */

describe('remove things, add thing, and signup', () => {
    it('should handle removing two things, adding a thing, and signing up', () => {
        testDevToolsExport(rootReducer, reduxExport);
    });
});
