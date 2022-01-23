/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

$(document).ready(function () {
  // adding new root node
  $(document).on("click", ".add_node", function (e) {
    e.preventDefault();
    var parent_node = $(this).parent().parent(),
        new_node_html = "\n    <li>\n    <div class=\"node_wrap\">\n      <span class=\"node_name\">\n        <input type=\"text\" placeholder=\"Name\"/>\n      </span>\n      <a href=\"javascript:void(0)\" class=\"node_btn cancel_node\">\n        <i class=\"fa fa-times\"></i>\n      </a>\n      <a href=\"javascript:void(0)\" class=\"node_btn save_node\">\n        <i class=\"fa fa-check\"></i>\n      </a>\n    </div>\n  </li>\n    ";

    if (parent_node.has("ul").length) {
      parent_node.find(">ul").append(new_node_html);
    } else {
      parent_node.append("<ul>" + new_node_html + "</ul>");
    }

    parent_node.find(".node_name > input").focus();
  }); // save new node after

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
      node_wrap.append("\n      <a href=\"javascript:void(0)\" class=\"node_btn add_node\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n    <a href=\"javascript:void(0)\" class=\"node_btn edit_node\">\n      <i class=\"fa fa-pen\"></i>\n    </a>\n    <a href=\"javascript:void(0)\" class=\"node_btn remove_node\">\n      <i class=\"fa fa-times\"></i>\n    </a>");
    }
  }); // Cancel new node

  $(document).on("click", ".cancel_node", function (e) {
    e.preventDefault();
    var parent_node = $(this).parent().parent();

    if (parent_node.parent().find("li").length > 1) {
      parent_node.remove();
    } else {
      parent_node.parent().remove();
    }
  }); // Edit node

  $(document).on("click", ".edit_node", function (e) {
    e.preventDefault();
    var node_wrap = $(this).parent(),
        node_text = node_wrap.find("span.node_name").text();
    node_wrap.find("span.node_name").text("");
    node_wrap.find("span.node_name").append("\n     <input type=\"text\" value=\"".concat(node_text, "\" />\n     "));
    $(this).remove();
    node_wrap.find(".add_node").remove();
    node_wrap.find(".remove_node").remove();
    node_wrap.append("\n    <a href=\"javascript:void(0)\" class=\"node_btn cancel_node\">\n                      <i class=\"fa fa-times\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"node_btn save_node\">\n                      <i class=\"fa fa-check\"></i>\n                    </a>");
  }); // Remove node

  $(document).on("click", ".remove_node", function (e) {
    e.preventDefault();
    var parent_node = $(this).parent().parent();
    confirm("Are you sure?", "You want to remove it? Are u sure?", "7", "Yes", "No");
    $(".doAction").click(function () {
      if (parent_node.parent().find("li").length > 1) {
        parent_node.remove();
      } else {
        parent_node.parent().remove();
      }

      $(".modal-container").removeClass("show");
    });
  }); // Close modal

  $(document).on("click", ".modal_close", function (e) {
    e.preventDefault();
    $(".modal-container").removeClass("show");
  }); // close modal on click outside at anywhere

  $("body").click(function (event) {
    if ($(event.target).closest(".show").length && $(event.target).is(".show")) {
      $(".modal-container").removeClass("show");
    }
  }); // zoom out

  $(document).on("click", "#z_out", function (e) {
    e.preventDefault();
    var zoom = $("#tree_wrapper").css("zoom");
    zoom = parseFloat(zoom) - 0.1;

    if (zoom > 0) {
      var percent = parseInt(zoom * 100);
      $("#z_dropdown").val(percent);
      $("#tree_wrapper").css("zoom", zoom);
    }
  }); //zoom in

  $(document).on("click", "#z_in", function (e) {
    e.preventDefault();
    var zoom = $("#tree_wrapper").css("zoom");
    zoom = parseFloat(zoom) + 0.1;

    if (zoom <= 1.5) {
      var percent = parseInt(zoom * 100);
      $("#z_dropdown").val(percent);
      $("#tree_wrapper").css("zoom", zoom);
    }
  });
});

function confirm(title, text, sec, $true, $false) {
  var content = "\n  <div class=\"modal-container show\" id=\"modal_container\">\n  <div class=\"modal\">\n    <div class=\"modal-header\">\n      <h1 class=\"modal-title\">".concat(title, "</h1>\n      <a class=\"modal_close\" href=\"#\">\n        <i class=\"fa fa-times\"></i>\n      </a>\n    </div>\n    <div class=\"modal-body\">\n      <p>\n        ").concat(text, "\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <span class=\"timer\"></span>\n      <div>\n        <button class=\"btn btn-primary-outline active doAction\" id=\"confirm\">\n          ").concat($true, "\n        </button>\n        <button class=\"btn btn-primary-outline cancelAction\" id=\"cancel\">").concat($false, "</button>\n      </div>\n    </div>\n  </div>\n</div>");
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

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"public/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksrc"] = self["webpackChunksrc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;