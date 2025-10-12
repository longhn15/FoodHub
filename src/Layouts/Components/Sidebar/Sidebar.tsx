import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuData } from "../../../mockData";

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 240 }}>
        {menuData.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.name}</ListItemIcon>
            <ListItemText primary={item.price} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
