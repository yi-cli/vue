export const info = makeAction('INFO')

function makeAction(type) {
  return ({commit}, ...args) => commit(type, ...args)
}
