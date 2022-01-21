import dataTree from "./data.js";

(function () {
  "use strict";

  // Tree Area
  var root_list = document.getElementById("root_list");
  var ul = document.createElement("ul");
  root_list.appendChild(ul);

  function getData(dataTree) {
    // refresh
    ul.innerHTML = "";
    var count = dataTree.children.length;

    for (var i = 0; i < count; i++) {
      if (dataTree.children[i].status) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute("data-id", dataTree.children[i].id);
        li.innerHTML = `
        <div class="node_wrap">
        <span class="node_name"> ${dataTree.children[i].name}  </span>
        <a href="javascript:void(0)" class="node_btn add_node">
          <i class="fa fa-plus"></i>
        </a>
        <a href="javascript:void(0)" class="node_btn edit_node">
          <i class="fa fa-pen"></i>
        </a>
        <a
          href="javascript:void(0)"
          class="node_btn remove_node"
        >
          <i class="fa fa-times"></i>
        </a>
      </div>
      `;
      } else {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute("data-id", dataTree.children[i].id);
        li.innerHTML = `
      <div class="node_wrap">
        <span class="node_name">
          <input type="text" placeholder="Name" />
        </span>
        <a href="javascript:void(0)" class="node_btn cancel_node">
          <i class="fa fa-times"></i>
        </a>
        <a href="javascript:void(0)" class="node_btn save_node">
          <i class="fa fa-check"></i>
        </a>
      </div>
    `;
      }
    }
  }

  getData(dataTree);

  // save node state

  const saveNode = document.querySelector(".save_node");
  saveNode.addEventListener("click", (event) => {
    event.preventDefault();
    // change status false to true
  });

  // cacnel node
  document.onclick = function (event) {
    event.preventDefault();
    var el = event.target;
    if (el.classList.contains("cancel_node")) {
      let li = el.closest("li");
      let id = li.getAttribute("data-id");
      dataTree.children.splice(id, 1);
      // remove from Array
      li.remove();
    }
  };

  // add new node

  let addNode = document.querySelector(".add_node");
  addNode.addEventListener("click", () => {
    dataTree.children.push({
      id: 4,
      name: "Task 4",
      children: [],
      status: false,
    });
    getData(dataTree);
  });
})();
