import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  Divider
} from '@material-ui/core';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import MenuItem from './MenuItem';

/**
 * `Menu` is a floating container that holds
 * links to navigate throughout the application.
 */
const Menu: React.FC = () => {
  /**
   * @deprecated
   * Essa variável deve ser substituída
   * pela variável contendo o nome do usuário que estará salvo
   * no [Context](https://reactjs.org/docs/hooks-reference.html#usecontext).
   */
  const username = 'Carlos Eduardo';

  /**
   * Primeiro caractere extraído do nome do usuário
   * para ser utilizado no componente [Avatar](https://material-ui.com/pt/components/avatars/#letter-avatars).
   */
  const firstLetter = username.charAt(0);

  return (
    <Card variant="elevation" raised>
      <CardHeader avatar={<Avatar>{firstLetter}</Avatar>} title={username} />
      <Divider />
      <CardContent>
        <List component="nav">
          <List component="ul">
            <MenuItem
              text="Negócios"
              icon={<WorkOutlinedIcon />}
              route="/negocios"
            />
            <MenuItem
              text="Pessoas"
              icon={<PersonAddIcon />}
              route="/pessoas"
            />
            <MenuItem
              text="Imóveis"
              icon={<HomeIcon />}
              route="/propriedades"
            />
            <MenuItem text="Meu Perfil" icon={<PersonIcon />} route="/" />
            <MenuItem text="Sair" icon={<ExitToAppIcon />} route="/" />
          </List>
        </List>
      </CardContent>
    </Card>
  );
};

export default Menu;
