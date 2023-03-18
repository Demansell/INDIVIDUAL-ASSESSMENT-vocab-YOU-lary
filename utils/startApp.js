import { getVocabs } from '../api/vocab';
import logoutButton from '../components/logoutButton';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvent';
import navigationEvents from '../Events/navEvents';
import { showVocabs } from '../pages/vocabCard';

import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents(user);
  navigationEvents(user);
  formEvents(user);

  getVocabs(user.uid).then((vocabs) => showVocabs(vocabs));
};

export default startApp;
