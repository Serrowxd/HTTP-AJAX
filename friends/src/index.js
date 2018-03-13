import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendsGet from './component/FriendsGet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FriendsGet />, document.getElementById('root'));
registerServiceWorker();
