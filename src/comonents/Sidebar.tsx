import React from "react";

import { User } from "../types/user";

const Sidebar = ({ users }: { users: Array<User> }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
