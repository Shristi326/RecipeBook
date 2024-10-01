
const originalRecipes = []; 
document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').files[0];

    if (!image) {
        alert('Please select an image.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
        const recipeList = document.getElementById('recipe-list');
        
       
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-item'); 
    
        const article = document.createElement('article');
        article.setAttribute('data-category', category);
    
        article.innerHTML = `
            <h1>${title}</h1>
            <img src="${reader.result}" alt="${title}">
            <p  class="center-text">${description}</p>
            <p><strong>Category:</strong> ${category}</p>
        `;
    
    
        recipeDiv.appendChild(article);
        
      
        recipeList.appendChild(recipeDiv);
  
    originalRecipes.push({ title, description, category, image: reader.result });
    };  

    reader.readAsDataURL(image); 

 
    document.getElementById('add-recipe-form').reset();
});





function filterRecipes() {
    const filterInput = document.getElementById('filter').value.toLowerCase();
    const recipeList = document.getElementById('recipe-list');
    
   
    recipeList.innerHTML = '';

  
    originalRecipes.forEach(recipe => {
        if (recipe.category.toLowerCase().includes(filterInput)) {
            
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-item');
        
            const article = document.createElement('article');
            article.setAttribute('data-category', recipe.category);
            article.innerHTML = `
                <p class="center-text">${recipe.title}</p>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p class="center-text"><strong>Category: </strong> ${recipe.category}</p>
                <p class="center-text">${recipe.description}</p>
                
            `;
        
            recipeDiv.appendChild(article);
            recipeList.appendChild(recipeDiv);
        }
    });
}


