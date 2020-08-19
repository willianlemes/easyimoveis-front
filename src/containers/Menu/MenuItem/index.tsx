import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

type MenuItemProps = {
  /**
   * The displayed text in the Menu Item.
   */
  text: string;

  /**
   * The route to be rendered when a `MenuItem` is clicked.
   */
  route: string;

  /**
   * If provided, it renders one of the
   * [Material Icons](https://material-ui.com/pt/components/material-icons)
   * as the icon in the Menu Item.
   */
  icon?: ReactNode;
};

/**
 * `MenuItem` is a component that
 * holds a link to some page.
 * @param props The component received props.
 */
const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  route
}: MenuItemProps) => (
  <ListItem>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <Link to={route}>
      <ListItemText primary={text} />
    </Link>
  </ListItem>
);

export default MenuItem;
