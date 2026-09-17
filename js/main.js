/* Harborline Water — site interactions */
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".nav-mobile");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Lead form
  var form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        zip: form.zip.value.trim(),
        waterSource: form.waterSource.value,
        concern: form.concern.value,
        preferredContact: form.preferredContact.value,
        message: (form.message && form.message.value) ? form.message.value.trim() : "",
        page: window.location.pathname,
        submittedAt: new Date().toISOString()
      };

      // Placeholder: log lead for now. Wire to GoHighLevel webhook later.
      // Example: fetch('YOUR_GHL_WEBHOOK_URL', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      console.log("[Harborline lead]", data);

      form.style.display = "none";
      var success = document.getElementById("form-success");
      if (success) success.classList.add("show");

      // Optional mailto fallback (opens mail client with summary)
      // Uncomment if you want dual behavior:
      // var subject = encodeURIComponent("Water test request — " + data.name);
      // var body = encodeURIComponent(Object.keys(data).map(function(k){ return k + ": " + data[k]; }).join("\n"));
      // window.location.href = "mailto:hello@harborlinewater.com?subject=" + subject + "&body=" + body;
    });
  }
})();
