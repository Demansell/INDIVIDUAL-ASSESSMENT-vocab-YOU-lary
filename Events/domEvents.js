import { deleteVocabs, getSingleVocabs, getVocabs } from '../api/vocab';
import addVocabForm from '../Forms/addVocabForm';
import { showVocabs } from '../pages/vocabCard';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabs(firebaseKey).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      }
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabs(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
