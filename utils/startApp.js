import { getVocab } from '../api/vocab';
import logoutButton from '../components/logoutButton';
import { showVocab } from '../pages/vocabCard';
import domBuilder from '../Shared/domBuilder';
import navBar from '../Shared/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();

  getVocab(user.uid).then((books) => showVocab(books));
};

export default startApp;
