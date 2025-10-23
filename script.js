const form = document.getElementById('journal-form');
const input = document.getElementById('entry-input');
const entriesList = document.getElementById('entries-list');

// Add new entry
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '×';
  removeBtn.classList.add('remove-btn');
  removeBtn.title = 'Remove entry';

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  entriesList.appendChild(li);

  input.value = '';
});
