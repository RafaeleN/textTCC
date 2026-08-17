/* ============================================================
   REFRIGERANTES.JS - Lógica do cardápio de refrigerantes
   ============================================================ */

// Dados dos refrigerantes em lata
const refrigerantesLatas = [
  { nome: "COCA-COLA ZERO", preco: "R$ 6,50", descricao: "Coca-Cola Zero açúcar, sabor clássico sem calorias.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "COCA-COLA", preco: "R$ 7,00", descricao: "Coca-Cola tradicional, o refrigerante mais famoso do mundo.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "PEPSI-COLA", preco: "R$ 7,00", descricao: "Pepsi-Cola, o refrigerante de cola com sabor único.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "FANTA UVA", preco: "R$ 6,50", descricao: "Fanta sabor uva, refrescante e doce.", imagem: "https://images.unsplash.com/photo-1629208591002-99e316ec93ac?w=500" },
  { nome: "SPRITE", preco: "R$ 6,00", descricao: "Sprite limão, refrigerante transparente e refrescante.", imagem: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500" },
  { nome: "SUKITA DE LARANJA", preco: "R$ 5,00", descricao: "Sukita sabor laranja, energizante e delicioso.", imagem: "https://images.unsplash.com/photo-1629208591002-99e316ec93ac?w=500" },
  { nome: "GUARANÁ ANTARCTICA", preco: "R$ 5,00", descricao: "Guaraná Antarctica, bebida energética de sabor único.", imagem: "https://images.unsplash.com/photo-1629772921329-4e3e6f549f59?w=500" }
];

// Dados dos refrigerantes em garrafa (gasosas)
const refrigerantesGasosas = [
  { nome: "COCA-COLA ZERO 1L", preco: "R$ 12,00", descricao: "Coca-Cola Zero de 1 litro, perfeita para a família.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "COCA-COLA 1L", preco: "R$ 10,00", descricao: "Coca-Cola tradicional de 1 litro, o clássico.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "PEPSI-COLA 2L", preco: "R$ 15,00", descricao: "Pepsi-Cola de 2 litros, ideal para compartilhar.", imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { nome: "FANTA UVA 2L", preco: "R$ 6,50", descricao: "Fanta uva de 2 litros, doce e refrescante.", imagem: "https://images.unsplash.com/photo-1629208591002-99e316ec93ac?w=500" },
  { nome: "SPRITE 2L", preco: "R$ 6,00", descricao: "Sprite limão de 2 litros, refrescante garantido.", imagem: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500" },
  { nome: "GUARANÁ JESUS 1L", preco: "R$ 10,00", descricao: "Guaraná Jesus de 1 litro, tradicional e saboroso.", imagem: "https://images.unsplash.com/photo-1629208591002-99e316ec93ac?w=500" },
  { nome: "GUARANÁ ANTARCTICA 2L", preco: "R$ 15,00", descricao: "Guaraná Antarctica de 2 litros, o energético popular.", imagem: "https://images.unsplash.com/photo-1629772921329-4e3e6f549f59?w=500" }
];

// Dados de variações especiais
const refrigerantesVariacoes = [
  { nome: "ÁGUA COM GÁS", preco: "R$ 8,00", descricao: "Água mineral com gás, pura e refrescante.", imagem: "https://images.unsplash.com/photo-1614627692292-7ac56d7f7f1e?w=500" },
  { nome: "ÁGUA SEM GÁS", preco: "R$ 5,00", descricao: "Água mineral sem gás, hidratação pura.", imagem: "https://images.unsplash.com/photo-1614627692292-7ac56d7f7f1e?w=500" },
  { nome: "ENERGÉTICO", preco: "R$ 18,00", descricao: "Bebida energética, energia garantida.", imagem: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500" }
];

function renderizarRefrigerantes() {
  const latasContainer = document.getElementById('refrigerantes-latas');
  const gasosasContainer = document.getElementById('refrigerantes-gasosas');
  const variacoesContainer = document.getElementById('refrigerantes-variacoes');
  
  function gerarItem(item) {
    return `
      <div class="produto-cardapio" onclick="abrirModal('${item.nome.replace(/'/g, "\\'")}', '${item.preco}', '${item.descricao.replace(/'/g, "\\'")}', '${item.imagem || ''}')">
        <strong>${item.nome}</strong>
        <span class="preco-item">${item.preco}</span>
      </div>
    `;
  }
  
  if (latasContainer) latasContainer.innerHTML = refrigerantesLatas.map(gerarItem).join('');
  if (gasosasContainer) gasosasContainer.innerHTML = refrigerantesGasosas.map(gerarItem).join('');
  if (variacoesContainer) variacoesContainer.innerHTML = refrigerantesVariacoes.map(gerarItem).join('');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  renderizarRefrigerantes();
});