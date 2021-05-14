import {_getUsers } from "./_DATA";


export function fetchUserData() {
  return Promise.all([
    _getUsers()
  ]).then(([users]) => ({users}));
}

