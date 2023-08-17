export default function setupNavigation(listBtn,
  addBtn,
  contactBtn,
  bookSection,
  addBookSection,
  contactSection,
  listAnchor,
  addAnchor,
  contactAnchor) {
  listBtn.addEventListener('click', () => {
    bookSection.classList.add('active');
    bookSection.classList.remove('hidden');
    addBookSection.classList.add('hidden');
    addBookSection.classList.remove('active');
    contactSection.classList.add('hidden');
    contactSection.classList.remove('active');

    listAnchor.classList.add('list-active');
    addAnchor.classList.remove('list-active');
    contactAnchor.classList.remove('list-active');
  });

  addBtn.addEventListener('click', () => {
    bookSection.classList.remove('active');
    bookSection.classList.add('hidden');
    addBookSection.classList.add('active');
    addBookSection.classList.remove('hidden');
    contactSection.classList.add('hidden');
    contactSection.classList.remove('active');

    listAnchor.classList.remove('list-active');
    addAnchor.classList.add('list-active');
    contactAnchor.classList.remove('list-active');
  });

  contactBtn.addEventListener('click', () => {
    bookSection.classList.add('hidden');
    bookSection.classList.remove('active');
    addBookSection.classList.remove('active');
    addBookSection.classList.add('hidden');
    contactSection.classList.add('active');
    contactSection.classList.remove('hidden');

    listAnchor.classList.remove('list-active');
    addAnchor.classList.remove('list-active');
    contactAnchor.classList.add('list-active');
  });
}
