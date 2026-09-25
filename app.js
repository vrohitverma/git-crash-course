const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const count = document.querySelector('#task-count');
const emptyState = document.querySelector('#empty-state');

const tasks = [
  { text: 'Review the project', done: false },
  { text: 'Make your first branch', done: false },
];

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = `task${task.done ? ' done' : ''}`;
    item.innerHTML = `
      <input type="checkbox" ${task.done ? 'checked' : ''} aria-label="Mark ${task.text} complete" />
      <span>${task.text}</span>
      <button class="remove" type="button" aria-label="Remove ${task.text}">Remove</button>
    `;

    item.querySelector('input').addEventListener('change', () => {
      task.done = !task.done;
      renderTasks();
    });
    item.querySelector('.remove').addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    taskList.append(item);
  });

  count.textContent = `${tasks.length} task${tasks.length === 1 ? '' : 's'}`;
  emptyState.hidden = tasks.length > 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  input.value = '';
  renderTasks();
});

renderTasks();
