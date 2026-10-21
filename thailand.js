(function () {
  var picker = document.querySelector("[data-stay-picker]");
  if (picker) {
    var buttons = picker.querySelectorAll("[data-stay]");
    var panels = document.querySelectorAll("[data-stay-panel]");
    function show(id) {
      buttons.forEach(function (btn) {
        var on = btn.getAttribute("data-stay") === id;
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-stay-panel") !== id;
      });
    }
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(btn.getAttribute("data-stay"));
      });
    });
    var initial = picker.getAttribute("data-initial") || (buttons[0] && buttons[0].getAttribute("data-stay"));
    if (initial) show(initial);
  }

  document.querySelectorAll("[data-checklist]").forEach(function (list) {
    var key = "tp-th-checklist-" + list.getAttribute("data-checklist");
    var saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(key) || "{}") || {};
    } catch (e) {
      saved = {};
    }
    list.querySelectorAll("input[type='checkbox'][data-key]").forEach(function (box) {
      var id = box.getAttribute("data-key");
      box.checked = !!saved[id];
      box.addEventListener("change", function () {
        saved[id] = box.checked;
        try {
          localStorage.setItem(key, JSON.stringify(saved));
        } catch (err) { /* private mode */ }
      });
    });
  });

  document.querySelectorAll("[data-print]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.print();
    });
  });
})();
