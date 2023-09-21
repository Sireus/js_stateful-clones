'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  const stateClone = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        Object.assign(stateClone, action.extraData);

        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete stateClone[key];
        }

        break;
      }

      case 'clear': {
        for (const key of Object.keys(stateClone)) {
          delete stateClone[key];
        }

        break;
      }

      default: {
        result.push(stateClone);
      }
    }

    result.push({ ...stateClone });
  }

  return result;
}

module.exports = transformStateWithClones;
