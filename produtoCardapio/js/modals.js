/* ============================================================
   MODAL.JS - Lógica do modal flutuante com imagem dinâmica
   ============================================================ */

function abrirModal(nome, preco, descricao, imagem) {
  var modal = document.getElementById('produtoModal');
  var overlay = document.getElementById('modalOverlay');
  if (!modal || !overlay) return;

  var elNome = document.getElementById('modalNome');
  var elDesc = document.getElementById('modalDesc');
  var elPreco = document.getElementById('modalPreco');
  var elImg = document.getElementById('modalImg');

  if (elNome) elNome.textContent = nome;
  if (elDesc) elDesc.textContent = descricao;
  if (elPreco) elPreco.textContent = preco;

  // Atualiza a imagem do modal
  if (elImg) {
    if (imagem) {
      elImg.src = imagem;
    } else {
      // Imagem padrão caso o produto não tenha uma definida
      elImg.src = 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500';
    }
    elImg.alt = nome;
  }

  modal.classList.add('ativo');
  overlay.classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  var modal = document.getElementById('produtoModal');
  var overlay = document.getElementById('modalOverlay');
  if (modal) modal.classList.remove('ativo');
  if (overlay) overlay.classList.remove('ativo');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  var btnFechar = document.getElementById('btnFecharModal');
  var overlay = document.getElementById('modalOverlay');
  var btnAdd = document.getElementById('btnAdd');

  if (btnFechar) btnFechar.addEventListener('click', fecharModal);
  if (overlay) overlay.addEventListener('click', fecharModal);
  if (btnAdd) {
    btnAdd.addEventListener('click', function() {
      fecharModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fecharModal();
  });
});