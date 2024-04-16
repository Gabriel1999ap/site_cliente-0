document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var navBar = document.getElementById('navbarNav');

  // Alterna a classe 'active' da barra de navegação
  hamburger.addEventListener('click', function () {
    navBar.classList.toggle('active');
  });

  // Fecha a barra de navegação quando um item de menu é clicado
  document.querySelectorAll('#navbarNav a').forEach(item => {
    item.addEventListener('click', function () {
      if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
      }
    });
  });

  // Configura os botões de serviço
  document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove a classe 'active' de todos os botões e conteúdos
      document.querySelectorAll('.service-btn').forEach(button => button.classList.remove('active'));
      document.querySelectorAll('.service-content').forEach(content => content.classList.remove('active'));

      // Adiciona a classe 'active' ao botão clicado e ao conteúdo relacionado
      this.classList.add('active');
      const contentToShow = document.getElementById(this.getAttribute('data-service'));
      contentToShow.classList.add('active');
    });
  });

  // Cria o balão de diálogo se não existir
  var tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  // Mostra e esconde o balão
  var listItems = document.querySelectorAll('.subtopics-list li');
  listItems.forEach(function (item) {
    item.addEventListener('mousemove', showTooltip);
    item.addEventListener('mouseout', hideTooltip);
  });

  function showTooltip(e) {
    var description = this.getAttribute('data-description');
    if (description) {
      tooltip.textContent = description;
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = 1;
      tooltip.style.top = (e.pageY + 10) + 'px';
      tooltip.style.left = (e.pageX + 10) + 'px';
    }
  }

  function hideTooltip() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('service-visible');
      } else {
        entry.target.classList.remove('service-visible');
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Ajuste conforme necessário para disparar a animação mais cedo ou mais tarde
  });

  // Selecione os elementos que devem ser animados
  const animatableServices = document.querySelectorAll('.service-animate');
  animatableServices.forEach(el => observer.observe(el));
});

