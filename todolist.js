let addBtn = document.getElementById("Btn");
addBtn.addEventListener("click", addChapter);
let parentList = document.getElementById("parentList");

function addChapter(e) {
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }

  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  let curretChapterName = currentInput.value;
  let newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  newLi.textContent = currentInput.value;

  parentList.appendChild(newLi);

  newLi.className = "list-group-item d-flex justify-content-between";

  newLi.innerHTML = `<h3 class="flex-grow-1">${curretChapterName}</h3> 
                
                <button class="btn btn-warning">Edit</button> 
                <button class="btn btn-danger mx-3" onclick="removeChapter(this)">X</button> `;

  parentList.appendChild(newLi);
}
function removeChapter(currelement) {
  currelement.parentElement.remove();
  let parentList = document.getElementById("parentList");
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3");

    newEmptyMsg.classList.add("emptyMsg");
    newEmptyMsg.textContent = "Nothing is Here, Please add your work ";
    parentList.appendChild(newEmptyMsg);
  }
}
function editChapter(currEdit) {
    if (currEdit.textContent == "Done") {
        currEdit.textContent = "Edit";
        let currChapterName = currEdit.previousElementSibling.value;
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1";

        currHeading.textContent = currChapterName;

        currEdit.parentElement.replaceChild(currHeading, currEdit.previousElementSibling)





    }
    else {
        currEdit.textContent = "Done";
        console.log(currEdit.previousElementSibling);
        let currChapterName = currEdit.previousElementSibling.textContent
        let currInput = document.createElement('input');
        currInput.type = "text";
        currInput.placeholder = "Edit";
        currInput.className = "form-control";

        currInput.value = currChapterName;

        currEdit.parentElement.replaceChild(currInput, currEdit.previousElementSibling)

    }
}
