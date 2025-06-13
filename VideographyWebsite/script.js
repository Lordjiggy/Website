document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmation').innerHTML =
    this.reset();
});
function toggleAbout() {
  const content = document.getElementById('about-content');
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

function setRating(e) {
  if (e.target.dataset.star) {
    const stars = document.querySelectorAll(".stars span");
    const selected = parseInt(e.target.dataset.star);
    stars.forEach(star => {
      star.classList.toggle("active", parseInt(star.dataset.star) <= selected);
    });
    alert(`Thanks for rating us ${selected} star${selected > 1 ? 's' : ''}!`);
  }
}
function toggleSection(id) {
  const section = document.getElementById(id);
  const title = section.previousElementSibling;
  
  if (section.style.display === 'none') {
    section.style.display = 'block';
    title.classList.add('open');
  } else {
    section.style.display = 'none';
    title.classList.remove('open');
  }
}
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}
function toggleSection(id, el = null) {
  const section = document.getElementById(id);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    if (el) el.classList.add("active");
  } else {
    section.style.display = "none";
    if (el) el.classList.remove("active");
  }
}

function toggleSectionFromNav(sectionId, event) {
  event.preventDefault();

  // Get all toggle-content divs
  const allContents = document.querySelectorAll('.toggle-content');
  const targetContent = document.getElementById(sectionId);

  // If the clicked section is already open, close it
  if (targetContent.classList.contains('active')) {
    targetContent.classList.remove('active');
    targetContent.style.display = 'none';
    return;
  }

  // Close all sections
  allContents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  // Open the clicked section
  targetContent.classList.add('active');
  targetContent.style.display = 'block';
}

// Optional: Keep your existing toggleSection for the section titles
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId);
  if (content.style.display === 'block') {
    content.style.display = 'none';
    content.classList.remove('active');
  } else {
    content.style.display = 'block';
    content.classList.add('active');
  }
}

// On page load, hide all toggle-content
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-content').forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active');
  });
});
// ✅ Basic booking form confirmation
document.querySelector('.booking-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your session is booked.');
});
