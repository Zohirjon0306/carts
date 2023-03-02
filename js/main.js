let tasks = [
  {
    title: "Task1",
    desc: "descr1",
    staff: "Ali",
    startDate: "12.20.12",
    finishDate: "12.20.12",
    status: "Pending",
    price: 200,
  },
  {
    title: "Task1",
    desc: "descr2 alkjsdaiowfjaiwufhai iuahw fiauwfhaiuwfh aiwuf ",
    staff: "Ali",
    startDate: "12.20.12",
    finishDate: "12.20.12",
    status: "Doing",
    price: 200,
  },
  {
    title: "Task1",
    desc: "descr1",
    staff: "Ali",
    startDate: "12.20.12",
    finishDate: "12.20.12",
    status: "Done",
    price: 200,
  },
  {
    title: "Task1",
    desc: "descr1",
    staff: "Ali",
    startDate: "12.20.12",
    finishDate: "12.20.12",
    status: "Closed",
    price: 200,
  },
  {
    title: "Task1",
    desc: "descr1",
    staff: "Ali",
    startDate: "12.20.12",
    finishDate: "12.20.12",
    status: "Rejected",
    price: 200,
  },
];
let myForm = document.forms["myForm"];
let title = document.forms["myForm"]["title"];
let desc = document.forms["myForm"]["desc"];
let staff = document.forms["myForm"]["staff"];
let startDate = document.forms["myForm"]["startDate"];
let finishDate = document.forms["myForm"]["finishDate"];
let status = document.forms["myForm"]["status"];
let price = document.forms["myForm"]["price"];
let addTaskBtn = document.querySelector(".addTask");

addTaskBtn.addEventListener("click", () => {
  let task = {
    title: title.value,
    desc: desc.value,
    staff: staff.value,
    startDate: startDate.value,
    finishDate: finishDate.value,
    status: status.value,
    price: price.value,
  };
  tasks.push(task);
  console.log(task, tasks);
  chiz();
});

const chiz = () => {
  let pending = document.querySelector(".pending");
  let doing = document.querySelector(".doing");
  let done = document.querySelector(".done");
  let closed = document.querySelector(".closed");
  let rejected = document.querySelector(".rejected");
  pending.innerHTML = "";
  doing.innerHTML = "";
  done.innerHTML = "";
  closed.innerHTML = "";
  rejected.innerHTML = "";
  tasks.forEach((task, index) => {
    if (task.status === "Pending") {
      pending.innerHTML += `<h3>${task.staff}</h3>
      <h4>${task.title}</h4>
      <h4>Price: ${task.price}$</h4>
      <p class="text-truncate">Description: ${task.desc}</p>
      <p><b>Start date: </b>${task.startDate}</p>
      <p><b>Finish date: </b>${task.finishDate}</p>
      <select name="staff" class="form-control mb-2">
        <option value="">Select status</option>
        <option value="Pending">Pending</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-warning text-white">
          Edit status
        </button>
        <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
      </div> 
      <hr>
      `;
    } else if (task.status === "Doing") {
      doing.innerHTML += `<h3>${task.staff}</h3>
      <h4>${task.title}</h4>
      <h4>Price: ${task.price}$</h4>
      <p class="text-truncate">Description: ${task.desc}</p>
      <p><b>Start date: </b>${task.startDate}</p>
      <p><b>Finish date: </b>${task.finishDate}</p>
      <select name="staff" class="form-control mb-2">
        <option value="">Select status</option>
        <option value="Pending">Pending</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-warning text-white">
          Edit status
        </button>
        <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
      </div> 
      <hr>
      `;
    } else if (task.status === "Done") {
      done.innerHTML += `<h3>${task.staff}</h3>
      <h4>${task.title}</h4>
      <h4>Price: ${task.price}$</h4>
      <p>Description: ${task.desc}</p>
      <p><b>Start date: </b>${task.startDate}</p>
      <p><b>Finish date: </b>${task.finishDate}</p>
      <select name="staff" class="form-control mb-2">
        <option value="">Select status</option>
        <option value="Pending">Pending</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
      </select>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <button class="btn btn-warning text-white">
          Edit status
        </button>
        <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
      </div> 
      <button class="btn btn-secondary" onclick="rejectTask(${index})">Rejected</button>
      <hr>
      `;
    } else if (task.status === "Closed") {
      closed.innerHTML += `<h3>${task.staff}</h3>
      <h4>${task.title}</h4>
      <h4>Price: ${task.price}$</h4>
      <p>Description: ${task.desc}</p>
      <p><b>Start date: </b>${task.startDate}</p>
      <p><b>Finish date: </b>${task.finishDate}</p>
      <hr>
      `;
    } else if (task.status === "Rejected") {
      rejected.innerHTML += `<h3>${task.staff}</h3>
      <h4>${task.title}</h4>
      <h4>Price: ${task.price}$</h4>
      <p>Description: ${task.desc}</p>
      <p><b>Start date: </b>${task.startDate}</p>
      <p><b>Finish date: </b>${task.finishDate}</p>
      <hr>
      `;
    }
  });
};
chiz();

myForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log(e);
});

const deleteTask = index => {
  tasks.splice(index, 1);
  chiz();
};

const rejectTask = index => {
  tasks[index].status = "Rejected";
  chiz()
};

