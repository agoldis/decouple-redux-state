# `decouple-redux-state`

This project demonstrates the techniques used to decouple redux state. See the orignal blog post:
https://medium.com/@andrewgoldis/decouple-redux-state-875c8367350f


Use the branches to see the changes and evolution of the project:
- [01-initial-project](https://github.com/agoldis/decouple-redux-state/tree/01-initial-project) - the initial project with state not decoupled from the components
- [02-enhance-store](https://github.com/agoldis/decouple-redux-state/tree/02-enhance-store) introduction of store enhancer

 - [03-use-app-branch](https://github.com/agoldis/decouple-redux-state/tree/03-use-app-branch) - changing the structure of our state by moving all entities to app branch

 - [04-use-selectors](https://github.com/agoldis/decouple-redux-state/tree/04-use-selectors) - we are using reselect to compute the derived state effectively

 - [05-state-object](https://github.com/agoldis/decouple-redux-state/tree/05-state-object) - demonstration of an alternative approach of organizing deriveState method and encapsulating the state