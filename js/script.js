document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var navBar = document.getElementById('navbarNav');

  hamburger.addEventListener('click', function () {
      // A classe 'active' deve ser adicionada à 'navBar', não ao 'hamburger'
      navBar.classList.toggle('active');
      console.log('Hamburger clicked'); // Para depuração
  });
});

document.querySelectorAll('.service-btn').forEach(btn => {
  btn.addEventListener('click', function() {
      // Remove a classe 'active' de todos os botões
      document.querySelectorAll('.service-btn').forEach(button => button.classList.remove('active'));
      // Adiciona a classe 'active' ao botão clicado
      this.classList.add('active');

      // Esconde todo o conteúdo
      document.querySelectorAll('.service-content').forEach(content => content.classList.remove('active'));
      // Exibe o conteúdo relacionado ao botão clicado
      const contentToShow = document.getElementById(this.getAttribute('data-service'));
      contentToShow.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Cria o balão de diálogo se não existir
  var tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  // Função para mostrar o balão
  function showTooltip(e) {
    var description = this.getAttribute('data-description');
    if (description) {
      tooltip.textContent = description;
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = 1;
      tooltip.style.top = (e.pageY + 10) + 'px'; // Posiciona um pouco abaixo do cursor
      tooltip.style.left = (e.pageX + 10) + 'px'; // Posiciona um pouco à direita do cursor
    }
  }

  // Função para esconder o balão
  function hideTooltip() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
  }

  // Anexa os eventos aos itens da lista
  var listItems = document.querySelectorAll('.subtopics-list li');
  listItems.forEach(function(item) {
    item.addEventListener('mousemove', showTooltip);
    item.addEventListener('mouseout', hideTooltip);
  });
});