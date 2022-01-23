$(document).ready(function () {
  // adding new root node
  $(document).on("click", ".add_node", function (e) {
    e.preventDefault();

    var parent_node = $(this).parent().parent(),
      new_node_html = `
    <li>
    <div class="node_wrap">
      <span class="node_name">
        <input type="text" placeholder="Name"/>
      </span>
      <a href="javascript:void(0)" class="node_btn cancel_node">
        <i class="fa fa-times"></i>
      </a>
      <a href="javascript:void(0)" class="node_btn save_node">
        <i class="fa fa-check"></i>
      </a>
    </div>
  </li>
    `;

    if (parent_node.has("ul").length) {
      parent_node.find(">ul").append(new_node_html);
    } else {
      parent_node.append("<ul>" + new_node_html + "</ul>");
    }

    parent_node.find(".node_name > input").focus();
  });

  // save new node after
  $(document).on("click", ".save_node", function (e) {
    e.preventDefault();
    var node_wrap = $(this).parent(),
      text = node_wrap.find("input").val();
    if (text.length === 0) {
      alert("Please enter node name");
    } else {
      node_wrap.find("input").remove();
      node_wrap.find("span.node_name").text(text);
      $(this).remove();
      node_wrap.find(".cancel_node").remove();
      node_wrap.append(`
      <a href="javascript:void(0)" class="node_btn add_node">
      <i class="fa fa-plus"></i>
    </a>
    <a href="javascript:void(0)" class="node_btn edit_node">
      <i class="fa fa-pen"></i>
    </a>
    <a href="javascript:void(0)" class="node_btn remove_node">
      <i class="fa fa-times"></i>
    </a>`);
    }
  });

  // Cancel new node
  $(document).on("click", ".cancel_node", function (e) {
    e.preventDefault();
    var parent_node = $(this).parent().parent();

    if (parent_node.parent().find("li").length > 1) {
      parent_node.remove();
    } else {
      parent_node.parent().remove();
    }
  });

  // Edit node
  $(document).on("click", ".edit_node", function (e) {
    e.preventDefault();

    var node_wrap = $(this).parent(),
      node_text = node_wrap.find("span.node_name").text();
    node_wrap.find("span.node_name").text("");
    node_wrap.find("span.node_name").append(`
     <input type="text" value="${node_text}" />
     `);

    $(this).remove();
    node_wrap.find(".add_node").remove();
    node_wrap.find(".remove_node").remove();

    node_wrap.append(`
    <a href="javascript:void(0)" class="node_btn cancel_node">
                      <i class="fa fa-times"></i>
                    </a>
                    <a href="javascript:void(0)" class="node_btn save_node">
                      <i class="fa fa-check"></i>
                    </a>`);
  });

  // Remove node
  $(document).on("click", ".remove_node", function (e) {
    e.preventDefault();
    var parent_node = $(this).parent().parent();

    confirm(
      "Are you sure?",
      "You want to remove it? Are u sure?",
      "7",
      "Yes",
      "No"
    );

    $(".doAction").click(function () {
      if (parent_node.parent().find("li").length > 1) {
        parent_node.remove();
      } else {
        parent_node.parent().remove();
      }
      $(".modal-container").removeClass("show");
    });
  });

  // Close modal
  $(document).on("click", ".modal_close", function (e) {
    e.preventDefault();
    $(".modal-container").removeClass("show");
  });

  // close modal on click outside at anywhere

  $("body").click(function (event) {
    if (
      $(event.target).closest(".show").length &&
      $(event.target).is(".show")
    ) {
      $(".modal-container").removeClass("show");
    }
  });

  // zoom out
  $(document).on("click", "#z_out", function (e) {
    e.preventDefault();
    var zoom = $("#tree_wrapper").css("zoom");
    zoom = parseFloat(zoom) - 0.1;

    if (zoom > 0) {
      let percent = parseInt(zoom * 100);
      $("#z_dropdown").val(percent);
      $("#tree_wrapper").css("zoom", zoom);
    }
  });
  //zoom in
  $(document).on("click", "#z_in", function (e) {
    e.preventDefault();
    var zoom = $("#tree_wrapper").css("zoom");
    zoom = parseFloat(zoom) + 0.1;

    if (zoom <= 1.5) {
      let percent = parseInt(zoom * 100);
      $("#z_dropdown").val(percent);
      $("#tree_wrapper").css("zoom", zoom);
    }
  });
});

function confirm(title, text, sec, $true, $false) {
  var content = `
  <div class="modal-container show" id="modal_container">
  <div class="modal">
    <div class="modal-header">
      <h1 class="modal-title">${title}</h1>
      <a class="modal_close" href="#">
        <i class="fa fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <p>
        ${text}
      </p>
    </div>
    <div class="modal-footer">
      <span class="timer"></span>
      <div>
        <button class="btn btn-primary-outline active doAction" id="confirm">
          ${$true}
        </button>
        <button class="btn btn-primary-outline cancelAction" id="cancel">${$false}</button>
      </div>
    </div>
  </div>
</div>`;

  $("body").prepend(content);

  var downloadTimer = setInterval(function () {
    $("#modal_container .modal-footer .timer").text(sec);
    sec--;
    if (sec < 0) {
      var modal = $(".modal-container");
      if (modal.hasClass("show")) {
        modal.removeClass("show");
      }
      clearInterval(downloadTimer);
    }
  }, 1000);

  $(".cancelAction").click(function () {
    clearInterval(downloadTimer);
    $(".modal-container").removeClass("show");
  });
}
