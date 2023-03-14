import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar();
};

export default startApp;
