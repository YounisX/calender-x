let currentDate = document.querySelector("#currentDate");
let daysTag = document.querySelector(".calender-tasks");
let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");
let year = document.querySelector("#currentYear");
let monthBtn = document.getElementsByClassName("month");

let userCountInput = document.getElementById("userCount");
let chairCountInput = document.getElementById("chairCount");
let sessionInput = document.getElementById("session");
let toInput = document.getElementById("to");
let fromInput = document.getElementById("from");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let display = document.getElementById("display");

let tasks = [];


function addTask() {
  var task = {
    to:toInput.value,
    from:fromInput.value,
    user:userCountInput.value,
    chair:chairCountInput.value,
    session: sessionInput.value,
  };
  tasks.push(task);

displayInputs();
  clearInput();
}

function clearInput() {
  toInput.value = "";
  fromInput.value = "";
  userCountInput.value = "";
  chairCountInput.value = "";
  sessionInput.value = "";
}

function displayInputs() {
  let cartona = "";

  for (i = 0; i < tasks.length; i++) {
    cartona += `

    <div class="task-inputs my-4 px-5">

        <button id="removeBtn" onclick="deleteInput(${i})" class="mx-4 btn btn-danger btn-outline-danger px-4">حذف <span><i class="fa-solid  fa-trash-can"></i></span></button>

        <div class="input-1 ml-5" >
        <h3 class="text-dark fw-bold mx-4 px-5">${tasks[i].user}</h3>

        </div>
        <div class="input-2 mx-2" >
        <h3 class="text-dark fw-bold mx-5 pr-5">${tasks[i].chair}</h3>

        </div>
        <div class="input-3 mx-2" >
        <h3 class="text-dark fw-bold mr-5 px-5">${tasks[i].session}</h3>

        </div>
        <div class="input-4 mx-2 ml-5" >
        <h3 class="text-dark fw-bold mx-4 px-4">${tasks[i].to}</h3>

        </div>
        <div class="input-5 mx-2" >
        <h3 class="text-dark fw-bold mx-4 pr-4">${tasks[i].from}</h3>

        </div>
      </div>
  </div>
    `;
  }
  display.innerHTML = cartona;
}

addBtn.addEventListener("click", function (e) {
 e.preventDefault();
  addTask();
  // console.log(addBtn)
});
function deleteInput(i){
  tasks.splice(i,1)
  displayInputs();
}

//todo Getting new date current year and month
let date = new Date();





for (i = 0; i < monthBtn.length; i++) {
  monthBtn[i].addEventListener("click", function (e) {
    monthIndex = e.target.getAttribute("id");
    currentMonth = months[monthIndex];
    monthClass = e.target.getAttribute("class");
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    console.log(current[0]);
    this.className += " active";

    renderCalender();
  });
}

var months = [
  "يناير",
  "فبراير",
  "مارس",
  "إبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
var days = [
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

var currentDay = days[date.getDay()];
var currentMonth = months[date.getMonth()];
let currMonth = date.getMonth();
var currentYear = date.getFullYear();

const renderCalender = () => {
  let lastDayofMonth = new Date(currentYear, currMonth + 1, 0).getDate();

  let cartona = "";
  for (let i = 1; i <= lastDayofMonth; i++) {
    cartona += `
<div class="task-btn">
<div class="upper-detail d-flex justify-content-around">
  <div>${days[i]}</div>
  <div>${i}</div>
</div>
<div class="lower-detail d-flex justify-content-around">
  <div>مهام</div>
  <div>1</div>
</div>
</div>
`;
  }
  daysTag.innerHTML = cartona;
  year.innerHTML = `${currentYear}`;

  currentDate.innerHTML = `${currentMonth},${currentYear}`;
};
nextBtn.addEventListener("click", function () {
  currentYear += 1;
  currentDate.innerHTML = `${currentMonth},${currentYear}`;
  year.innerHTML = `${currentYear}`;
  if (currentMonth < 0 || currMonth > 11) {
    date = new Date();
  }
  renderCalender();
});
previousBtn.addEventListener("click", () => {
  currentYear -= 1;

  currentDate.innerHTML = `${currentMonth},${currentYear}`;
  year.innerHTML = `${currentYear}`;
  if (currentMonth < 0 || currMonth > 11) {
    date = new Date();
  }
  renderCalender();

  return;
});

renderCalender();
