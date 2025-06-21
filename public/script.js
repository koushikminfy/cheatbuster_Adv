const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('results-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = input.value.trim();
  results.innerHTML = "<p>Searching...</p>";

  try {
    const res = await axios.get(`/api/search`, { params: { email } });
    const user = res.data;
    results.innerHTML = `
      <div class="card">
        <img src="${user.picture}" />
        <h3>BUSTED!</h3>
        <p>${user.firstName} ${user.lastName} (${user.age})</p>
        <p>From ${user.city}</p>
      </div>
    `;
  } catch (err) {
    if (err.response?.status === 404) {
      results.innerHTML = `<p class="safe">${err.response.data.message}</p>`;
    } else if (err.response?.status === 400) {
      results.innerHTML = `<p class="error">${err.response.data.error}</p>`;
    } else {
      results.innerHTML = `<p class="error">Server error. Try again later.</p>`;
    }
  }
});
