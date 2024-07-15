// Function to fetch administrative division data from the World Bank API
async function fetchAdministrativeDivisions(countryCode) {
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error');
  
    loading.style.display = 'block';
    errorMessage.style.display = 'none';
  
    try {
      const response = await fetch(`https://api.worldbank.org/v2/countries/${countryCode}/adminlevels?format=json`);
      const data = await response.json();
  
      if (response.ok) {
        const administrativeDivisions = data[1].adminlevels.map(level => level.name);
        return administrativeDivisions;
      } else {
        throw new Error('Error fetching administrative division data');
      }
    } catch (error) {
      errorMessage.style.display = 'block';
      console.error('Error fetching administrative division data:', error);
      return [];
    } finally {
      loading.style.display = 'none';
    }
  }
  
  function populateDropdown(id, options) {
    const dropdown = document.getElementById(id);
    dropdown.innerHTML = '';
  
    options.forEach(option => {
      const optionElement = document.createElement('a');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => {
        updateDropdowns(id, option);
      });
      dropdown.appendChild(optionElement);
    });
  }
  
  async function updateDropdowns(selectedId, selectedOption) {
    switch (selectedId) {
      case 'country-dropdown':
        const regions = await fetchAdministrativeDivisions(selectedOption.toLowerCase());
        populateDropdown('region-dropdown', regions);
        break;
      case 'region-dropdown':
        // Fetch and populate the next dropdown level (e.g., zones) here
        break;
      case 'zone-dropdown':
        // Fetch and populate the next dropdown level (e.g., woredas) here
        break;
    }
  }
  
  async function initializeLocationSelector() {
    const countries = await fetchAdministrativeDivisions('all');
    populateDropdown('country-dropdown', countries);
  }
  
  initializeLocationSelector();