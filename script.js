const dialog = document.querySelector('#art-dialog');
const trigger = document.querySelector('#open-art');
trigger.addEventListener('click', () => dialog.showModal());
document.querySelector('#close-art').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
