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

