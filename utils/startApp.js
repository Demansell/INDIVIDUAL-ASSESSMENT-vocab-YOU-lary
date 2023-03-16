import getVocabs from '../api/vocab';
import logoutButton from '../components/logoutButton';
import { showVocabs } from '../pages/vocabCard';

import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();

  getVocabs(user.uid).then((vocabs) => showVocabs(vocabs));
};

export default startApp;
