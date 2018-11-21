let bookTitles = [
  "Less-Than-Zero",
  "On-The-Road",
  "Naked Lunch",
  "Catch 22",
  "Slaughterhouse Five "
];
function myBooks() {
  const main = document.getElementById("main");
  const ul = document.createElement("ul");
  main.appendChild(ul);
  for (let i = 0; i < bookTitles.length; i = i + 1) {
    let bookTitle = bookTitles[i];
    let li = document.createElement("li");
    li.textContent = bookTitle;
    ul.appendChild(li);
  }
}

myBooks();
myBooks();
