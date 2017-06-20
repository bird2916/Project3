import React, {Component} from 'react';
import {Text} from 'react-native';

export default class AppHeader extends Component {
render() {
return (
   <Text >
      Header
      <body>
            <Image source={require('C:\React Tutorial\Project3\android\src\components\img\img1.jpg>')}
            style={{width: 160,height: 30}}/>
        </body>
   </Text >
);
}
}
module.export = AppHeader;