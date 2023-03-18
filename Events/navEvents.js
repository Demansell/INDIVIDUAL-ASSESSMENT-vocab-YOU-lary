import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  /* // Show Vocabs
  document.querySelector('#all-btn').addEventListener('click', () => {
    getVocabs(user.uid).then(showVocabs);
  });
  /* // Filter
  document.querySelector('#html-btn').addEventListener('click', () => {
    getHTML(user.uid).then(showVocabs);
  });
  document.querySelector('#css-btn').addEventListener('click', () => {
    getCSS(user.uid).then(showVocabs);
  });
  document.querySelector('#java-btn').addEventListener('click', () => {
    getJS(user.uid).then(showVocabs);
  });
  */
};

export default navigationEvents;
