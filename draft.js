import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { createSelector } from "reselect";
import App from "./App";

const initialState = {
  app: {
    users: [{ id: "user01", name: "John" }, { id: "user02", name: "Bob" }],
    tasks: [
      { id: "task01", title: "Wash car", assignee: "user01" },
      { id: "task02", title: "Watch tutorial", assignee: "user01" },
      { id: "task03", title: "Do Homework", assignee: "user02" }
    ],
    profiles: [
      { id: "profile01", user: "user01", picture: "picture01URL" },
      { id: "profile02", user: "user02", picture: "picture02URL" }
    ]
  },
  ui: {
    /* ... */
  }
  // get userTasks() {
  //   return this.users.map(user =>
  //     Object.assign({}, user, {
  //       tasks: this.tasks.filter(task => task.assignee === user.id)
  //     })
  //   );
  // },
  // get userTasksCount() {
  //   return this.userTasks.map(user =>
  //     Object.assign({}, user, { tasksCount: user.tasks.length })
  //   );
  // }
};

const getUsers = state => state.app.users;
const getTasks = state => state.app.tasks;

const getUserTasks = createSelector([getUsers, getTasks], (users, tasks) => {
  return users.map(user =>
    Object.assign({}, user, {
      tasks: tasks.filter(task => task.assignee === user.id)
    })
  );
});

Object.defineProperty(initialState, "userTasks", {
  get: function() {
    return getUserTasks(this);
  },
  enumerable: false
  // writable: false
});

Object.defineProperty(initialState, "userTasksCount", {
  get: function userTasksCount() {
    return this.userTasks.map(user =>
      Object.assign({}, user, { tasksCount: user.tasks.count })
    );
  },
  enumerable: false
  // writable: false
});

// const storeEnhancer = next => (reducer, preloadedState, enhancer) => {
//   console.log("store enhancer");
//   return next(reducer, preloadedState, enhancer);
// };

const store = createStore(state => state, initialState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));



/*8 ***** */
import React from "react";
import { connect } from "react-redux";

const withUserTasks = name => ({ users = [], tasks = [] }) => ({
  [name]: users.map(user =>
    Object.assign(user, { tasks: tasks.filter(t => t.assignee === user.id) })
  )
});

const withUserProfiles = name => ({ users = [], profiles = [] }) => ({
  [name]: users.map(user =>
    Object.assign(user, {
      profile: profiles.find(t => t.user === user.id)
    })
  )
});

const createStateToPropsMapper = (...slicers) => (state, props) => {
  const results = {};
  for (const slicer of slicers) {
    Object.assign(results, slicer.call(slicer, state));
  }
  return results;
};

// const mapStateToProps = createStateToPropsMapper(
//   withUserProfiles("userProfiles"),
//   withUserTasks("userTasks")
// );

const mapStateToProps = (state, ownProps) => {
  return {
    userTasks: state.userTasks
  }
};

// const myConnect = (
//   mapStateToProps,
//   mapDispatchToProps,
//   mergeProps,
//   options
// ) => {
//   let myMapStateToProps = null;
//   if (typeof mapStateToProps === "function") {
//     myMapStateToProps = (state, ownProps) => {
//       const dummyState = { dummy: "state" };
//       return mapStateToProps(dummyState, ownProps);
//     };
//   }

//   return connect(myMapStateToProps, mapDispatchToProps, mergeProps, options);
// };

const myConnect = connect;

class UserTasks extends React.Component {
  render() {
    const { userTasks } = this.props;
    console.log(userTasks);
    return <div>Hello</div>;
  }
}

export default myConnect(mapStateToProps)(UserTasks);
