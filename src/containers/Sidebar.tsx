import { connect } from "react-redux";
import SidebarComponent from "../comonents/Sidebar";

export const Sidebar = connect(
  (state: any) => ({
    users: state.users
  }),
  {}
)(SidebarComponent);
