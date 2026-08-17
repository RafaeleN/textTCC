/* ============================================================
   DOCES.JS - Lógica do cardápio de doces
   ============================================================ */

const docesRegulares = [
    { nome: "Brigadeiro Tradicional", preco: "R$ 8,00", descricao: "Brigadeiro cremoso feito com chocolate de qualidade.", imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
    { nome: "Beijinho de Coco", preco: "R$ 8,00", descricao: "Doce de coco ralado com leite condensado.", imagem: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500" },
    { nome: "Olho de Sogra", preco: "R$ 9,00", descricao: "Ameixa com cobertura de chocolate.", imagem: "https://images.unsplash.com/photo-1599590984278-ecef4781ea8b?w=500" },
    { nome: "Romeu e Julieta", preco: "R$ 10,00", descricao: "Goiabada com queijo derretido.", imagem: "https://images.unsplash.com/photo-1622640832526-9b2fcc5a19a7?w=500" },
    { nome: "Doce de Leite Cremoso", preco: "R$ 7,50", descricao: "Doce de leite artesanal e cremoso.", imagem: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500" },
    { nome: "Bolo de Chocolate", preco: "R$ 12,00", descricao: "Bolo de chocolate úmido e delicioso.", imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" }
  ];
  
  const docesFrios = [
    { nome: "Pavê de Chocolate", preco: "R$ 14,00", descricao: "Pavê com camadas de chocolate e biscoito.", imagem: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500" },
    { nome: "Torta de Morango", preco: "R$ 16,00", descricao: "Torta fresca com morangos selecionados.", imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500" },
    { nome: "Mousse de Maracujá", preco: "R$ 11,00", descricao: "Mousse leve e cremosa de maracujá.", imagem: "https://images.unsplash.com/photo-1570466526438-66d144b98a4e?w=500" },
    { nome: "Pudim de Leite", preco: "R$ 10,00", descricao: "Pudim tradicional bem cremoso.", imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500" },
    { nome: "Sorvete Caseiro", preco: "R$ 9,00", descricao: "Sorvete artesanal da casa.", imagem: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=500" },
    { nome: "Taça da Casa", preco: "R$ 15,00", descricao: "Sobremesa especial servida em taça.", imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" }
  ];
  
  const docesEspeciais = {
    lactose: [
      { nome: "Brigadeiro Vegano", preco: "R$ 9,00", descricao: "Brigadeiro feito com leite vegetal.", imagem: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500" },
      { nome: "Beijinho Vegano", preco: "R$ 9,00", descricao: "Beijinho sem lactose com coco.", imagem: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500" },
      { nome: "Bolo de Chocolate Vegano", preco: "R$ 13,00", descricao: "Bolo de chocolate totalmente vegano.", imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
      { nome: "Mousse de Chocolate Vegano", preco: "R$ 12,00", descricao: "Mousse cremosa sem lactose.", imagem: "https://images.unsplash.com/photo-1570466526438-66d144b98a4e?w=500" }
    ],
    fodmaps: [
      { nome: "Brigadeiro Low FODMAP", preco: "R$ 10,00", descricao: "Brigadeiro apropriado para dieta Low FODMAP.", imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
      { nome: "Bolo Simples Low FODMAP", preco: "R$ 11,00", descricao: "Bolo sem ingredientes FODMAP.", imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
      { nome: "Pudim Low FODMAP", preco: "R$ 10,00", descricao: "Pudim cremoso Low FODMAP.", imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500" },
      { nome: "Biscoito Low FODMAP", preco: "R$ 7,00", descricao: "Biscoito crocante Low FODMAP.", imagem: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" }
    ],
    cafeina: [
      { nome: "Brigadeiro Sem Cafeína", preco: "R$ 8,00", descricao: "Brigadeiro sem cafeína.", imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
      { nome: "Mousse de Chocolate Branco", preco: "R$ 11,00", descricao: "Mousse de chocolate branco.", imagem: "https://images.unsplash.com/photo-1570466526438-66d144b98a4e?w=500" },
      { nome: "Bolo de Baunilha", preco: "R$ 10,00", descricao: "Bolo de baunilha macio.", imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
      { nome: "Pavê de Baunilha", preco: "R$ 13,00", descricao: "Pavê de baunilha delicioso.", imagem: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500" }
    ],
    gluten: [
      { nome: "Brigadeiro de Farinha de Arroz", preco: "R$ 9,00", descricao: "Brigadeiro preparado com farinha de arroz, sem gluten.", imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
      { nome: "Pudim de Leite Sem Gluten", preco: "R$ 10,00", descricao: "Pudim tradicional feito sem ingredientes com trigo.", imagem: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500" },
      { nome: "Mousse de Chocolate com Polvilho", preco: "R$ 12,00", descricao: "Mousse cremosa com base de polvilho, sem gluten.", imagem: "https://images.unsplash.com/photo-1570466526438-66d144b98a4e?w=500" },
      { nome: "Bolo de Milho Cremoso", preco: "R$ 11,00", descricao: "Bolo macio feito apenas com farinha de milho, naturalmente sem gluten.", imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" }
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
  
  function renderizarDocesEspeciais() {
    renderizar('doces-especiais', docesEspeciais[abaAtiva]);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.aba-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
        abaAtiva = this.dataset.aba;
        renderizarDocesEspeciais();
      });
    });
  
    renderizar('doces-regulares', docesRegulares);
    renderizar('doces-frios', docesFrios);
    renderizarDocesEspeciais();
  });