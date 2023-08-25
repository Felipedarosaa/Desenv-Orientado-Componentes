function alterarConteúdo(page) {

  const conteudoCentral = document.getElementById("main");
  const resultContainer = document.getElementById("result");
  const links = document.querySelectorAll("nav a");

  // Remove a classe "active" de todos os links
  links.forEach(link => {
    link.classList.remove("active");
  });

  // Adiciona a classe "active" ao link selecionado
  event.target.classList.add("active");

  switch (page) {
    case 'home':
      conteudoCentral.innerHTML = `
          <h1>Bem vindo a página Home!</h1>
        `;
      break;
    case 'about':
      conteudoCentral.innerHTML = `
          <h1>Página Sobre!</h1>
        `;
      break;
    case 'contact':
      conteudoCentral.innerHTML = `
          <h1>Formulário de Contato</h1>
          <form>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>
  
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
  
            <label for="tel">Telefone:</label>
            <input type="tel" id="telefone" name"telefone" required>


            <div class="rating">
              <input type="radio" name="star" id="star5">
              <label for="star5">&#9733;</label>
              <input type="radio" name="star" id="star4">
              <label for="star4">&#9733;</label>
              <input type="radio" name="star" id="star3">
              <label for="star3">&#9733;</label>
              <input type="radio" name="star" id="star2">
              <label for="star2">&#9733;</label>
              <input type="radio" name="star" id="star1">
              <label for="star1">&#9733;</label>
            </div>  

            <br>
            
            <input type="submit" value="Enviar">

          </form>
        `;
      break;

    default:
      conteudoCentral.innerHTML = `
          <h1>Bem vindo a página Home</h1>
        `;
  }


  // Quando o formulário for enviado
  if (page === 'contact') {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio real do formulário

      // Obtém os valores do formulário
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const rating = document.querySelector("input[name='star']:checked");
      const ratingValue = rating ? parseInt(rating.id.replace("star", "")) : 0; // Converte o ID para número
      const filledStars = "★".repeat(ratingValue); // Cria a sequência de estrelas preenchidas
      const emptyStars = "☆".repeat(5 - ratingValue); // Cria a sequência de estrelas vazias

      // Exibe os valores na área de resultados
      resultContainer.innerHTML = `
    <h1>Dados do Formulário:</h1>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Avaliação:</strong> ${filledStars}${emptyStars}</p>

  `;
      resultContainer.style.display = "block"; // Exibe a área de resultados
      conteudoCentral.style.display = "none"; // Esconde o conteúdo anterior

    });
  }



}