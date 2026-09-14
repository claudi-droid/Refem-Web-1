// Refem — comportament compartit (menú mòbil + formulari de contacte)

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var form = document.querySelector("#contact-form");
  if (!form) return;

  var status = form.querySelector(".form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var endpoint = form.getAttribute("action");
    var placeholder = endpoint && endpoint.indexOf("XXXXXXX") !== -1;

    if (placeholder) {
      showStatus(
        "error",
        form.getAttribute("data-msg-config") ||
          "El formulari encara no està connectat. Configura l'endpoint a contacte.html."
      );
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(function (response) {
        if (response.ok) {
          showStatus("success", form.getAttribute("data-msg-success"));
          form.reset();
        } else {
          showStatus("error", form.getAttribute("data-msg-error"));
        }
      })
      .catch(function () {
        showStatus("error", form.getAttribute("data-msg-error"));
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });

  function showStatus(type, message) {
    status.textContent = message;
    status.className = "form-status is-visible " + type;
  }
});
