const tree = document.querySelector('.tree');
const MAX = 120;
/* Merry Christmas and Happy New Year */
const branch = () => {
  for (let i = 0; i < MAX; i += 1) {
    const span = document.createElement("span");
    span.style.setProperty('--i', i);
    tree.append(span);
  }

}

branch();