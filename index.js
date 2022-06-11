"use Strict";

const scheduleName = document.querySelector(".schedule-name");
const containerMovement = document.querySelector(".schedule");

// button
const createBtn = document.querySelector(".create-btn");
const deleteBtn = document.querySelector(".delete");

// input
const scheduleNameInp = document.querySelector(".schedule-name-inp");

createBtn.addEventListener("click", function () {
  displayMovement(scheduleName.value);
});

const displayMovement = function (movements) {
  let html = `<div class="winter container mt-3" style="background-color: rgb(237, 237, 237);">
        <div class="row ">
          <div class="col-11 ">
            <h4 class="d-flex justify-item-center">${movements}</h4>
            <p><span>4 Weeks</span> <span> 12 session</span></p>
          </div>
          <div class="col-1 pt-4"><i class="fa fa-caret-down"></i></div>
        </div>
      </div>`;

  containerMovement.insertAdjacentHTML(
    "beforeend",
    `<div class="winter container mt-3" style="background-color: rgb(237, 237, 237);">
        <div class="row ">
          <div class="col-11 ">
            <h4 class="d-flex justify-item-center">${movements}</h4>
            <p><span>4 Weeks</span> <span> 12 session</span></p>
          </div>
          <div class="col-1 pt-4"><i class="fa fa-caret-down"></i></div>
        </div>
      </div>`
  );
};

deleteBtn.addEventListener("click", function () {
  containerMovement.remove();
});
