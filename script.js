function showTab(tabName) {
  document.querySelectorAll(".auth-form").forEach((form) => {
    form.classList.remove("active")
  })

  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.remove("active")
  })

  document.getElementById(tabName).classList.add("active")

  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active")
  }
}

function navigateToDestinations(event) {
  event.preventDefault()

  const form = event.target

  if (form.checkValidity()) {
    window.location.href = "destinations.html"
  } else {
    form.reportValidity()
  }
}

function showTransportOptions() {
  const transportModal = new bootstrap.Modal(document.getElementById("transportModal"))
  transportModal.show()
}

function showGuideOptions() {
  const guideModal = new bootstrap.Modal(document.getElementById("guideModal"))
  guideModal.show()
}

function showPackageInfo() {
  const packageModal = new bootstrap.Modal(document.getElementById("packageModal"))
  packageModal.show()
}

function showExpenditureCalculator() {
  const expenditureModal = new bootstrap.Modal(document.getElementById("expenditureModal"))
  expenditureModal.show()
}

function calculateExpenditure() {
  const people = Number.parseInt(document.getElementById("exp-num-people").value) || 1
  const days = Number.parseInt(document.getElementById("exp-num-days").value) || 1
  const accommodationType = document.getElementById("accommodation-type").value
  const includeGuide = document.getElementById("include-guide").checked

  const ticketCost = 50 * people
  let accommodationCost = 0
  const guideCost = includeGuide ? 1500 * days : 0
  const foodCost = 800 * people * days
  const transportCost = 500 * people * days

  switch (accommodationType) {
    case "budget":
      accommodationCost = 1500 * days
      break
    case "mid":
      accommodationCost = 3000 * days
      break
    case "luxury":
      accommodationCost = 6000 * days
      break
  }

  const totalCost = ticketCost + accommodationCost + guideCost + foodCost + transportCost

  document.getElementById("ticket-cost").textContent = `₹${ticketCost}`
  document.getElementById("accommodation-cost").textContent = `₹${accommodationCost}`
  document.getElementById("guide-cost").textContent = `₹${guideCost}`
  document.getElementById("food-cost").textContent = `₹${foodCost}`
  document.getElementById("transport-cost").textContent = `₹${transportCost}`
  document.getElementById("total-cost").textContent = `₹${totalCost}`

  document.getElementById("expenditure-result").style.display = "block"
}

function submitContactForm(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value
  const newsletter = document.getElementById("newsletter").checked

  console.log("Form submitted:", { name, email, subject, message, newsletter })

  alert("Thank you for your message! We'll get back to you soon.")

  document.getElementById("email-form").reset()
}

// Theme toggle functionality
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light"
  const newTheme = currentTheme === "light" ? "dark" : "light"

  document.body.classList.toggle("dark", newTheme === "dark")
  localStorage.setItem("theme", newTheme)

  // Update theme toggle icon
  updateThemeToggleIcon(newTheme)
}

function updateThemeToggleIcon(theme) {
  const moonIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>'
  const sunIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'

  const themeToggleIcons = document.querySelectorAll(".theme-toggle-icon")
  themeToggleIcons.forEach((icon) => {
    icon.innerHTML = theme === "dark" ? sunIcon : moonIcon
  })

  const themeToggleTexts = document.querySelectorAll(".theme-toggle-text")
  themeToggleTexts.forEach((text) => {
    text.textContent = theme === "dark" ? "Light Mode" : "Dark Mode"
  })
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.body.classList.toggle("dark", savedTheme === "dark")
  updateThemeToggleIcon(savedTheme)

  // Add event listeners to theme toggles
  const themeToggles = document.querySelectorAll(".theme-toggle")
  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleTheme)
  })

  // Original script functionality
  const guideForm = document.getElementById("guide-booking-form")
  if (guideForm) {
    guideForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Guide booking successful! You will be redirected to the confirmation page.")
      window.location.href = "thank-you.html"
    })
  }

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
})

