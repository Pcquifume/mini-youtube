function showSuggestions(query) {
    // Simuler des suggestions pour la recherche
    const suggestions = ["Vidéo 1", "Vidéo 2", "Vidéo 3"];
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
  
    if (query.length > 0) {
      const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      
      filteredSuggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        suggestionsContainer.appendChild(div);
      });
    }
  }
  