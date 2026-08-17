/* ============================================================
   PAES.JS - Lógica do cardápio de pães
   ============================================================ */

const paesRegulares = [
  { nome: "Pão Francês", preco: "R$ 2,50", descricao: "Pão francês fresco e crocante, assado na hora.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
  { nome: "Pão na Chapa", preco: "R$ 6,00", descricao: "Pão francês passado na chapa com manteiga.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
  { nome: "Pão de Fermentação Natural", preco: "R$ 8,00", descricao: "Pão rústico de longa fermentação, com casca crocante.", imagem: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500" },
  { nome: "Focaccia de Alecrim", preco: "R$ 9,00", descricao: "Focaccia italiana com alecrim e azeite extravirgem.", imagem: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500" },
  { nome: "Pão Australiano", preco: "R$ 7,50", descricao: "Pão escuro com toque adocicado, textura macia.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
  { nome: "Bisnaguinha", preco: "R$ 5,00", descricao: "Porção de bisnaguinhas artesanais quentinhas.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
  { nome: "Pão de Alho", preco: "R$ 8,50", descricao: "Pão tostado com creme de alho e salsinha.", imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500" },
  { nome: "Torrada da Casa", preco: "R$ 4,50", descricao: "Fatias de pão integral crocantes, feitas na casa.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" }
];

const paesEspeciais = {
  lactose: [
    { nome: "Pão de Aveia Sem Lactose", preco: "R$ 7,00", descricao: "Pão caseiro feito com leite de aveia, zero lactose.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Ciabatta Vegana", preco: "R$ 8,00", descricao: "Ciabatta crocante sem nenhum derivado de leite.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Pão de Batata Sem Lactose", preco: "R$ 6,50", descricao: "Pão macio de batata preparado sem manteiga.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Broa de Milho Vegana", preco: "R$ 5,50", descricao: "Broa tradicional adaptada sem ingredientes de origem animal.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" }
  ],
  fodmaps: [
    { nome: "Pão de Arroz Low FODMAP", preco: "R$ 8,00", descricao: "Pão artesanal feito com farinha de arroz, livre de FODMAP.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Pão Sourdough de Polvilho", preco: "R$ 9,00", descricao: "Fermentação longa com polvilho, mais fácil de digerir.", imagem: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500" },
    { nome: "Broa de Milho Simples", preco: "R$ 6,00", descricao: "Broa sem açúcar de trigo ou mel, versão Low FODMAP.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Pão de Quinoa e Semente", preco: "R$ 9,50", descricao: "Pão nutritivo de quinoa, sem trigo e sem lactose.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" }
  ],
  gluten: [
    { nome: "Pão de Fermentação Natural", preco: "R$ 8,00", descricao: "Pão rústico de longa fermentação, com casca crocante.", imagem: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500" },
    { nome: "Focaccia de Alecrim", preco: "R$ 9,00", descricao: "Focaccia italiana com alecrim e azeite extravirgem.", imagem: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500" },
    { nome: "Pão Australiano", preco: "R$ 7,50", descricao: "Pão escuro com toque adocicado, textura macia.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" },
    { nome: "Ciabatta Artesanal", preco: "R$ 8,50", descricao: "Ciabatta clássica com miolo alveolado e casca dourada.", imagem: "https://images.unsplash.com/photo-1608134372202-4102b63b3708?w=500" }
  ]
};

let abaAtiva = 'lactose';

function renderizar(id, lista) {
  const container = document.getElementById(id);
  if (!container) return;
  
  container.innerHTML = lista.map(item => `
    <div class="produto-cardapio" onclick="abrirModal('${item.nome.replace(/'/g, "\\'")}', '${item.preco}', '${item.descricao.replace(/'/g, "\\'")}', '${item.imagem || ''}')">
      <strong>${item.nome.toUpperCase()}</strong>
      <span class="preco-item">${item.preco}</span>
    </div>
  `).join('');
}

function renderizarPaesEspeciais() {
  renderizar('paes-especiais', paesEspeciais[abaAtiva]);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.aba-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativo'));
      this.classList.add('ativo');
      abaAtiva = this.dataset.aba;
      renderizarPaesEspeciais();
    });
  });

  renderizar('paes-regulares', paesRegulares);
  renderizarPaesEspeciais();
});