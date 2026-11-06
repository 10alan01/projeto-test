Portal Notícia Já 📰
O Portal Notícia Já é um site demonstrativo de notícias,
desenvolvido para apresentar informações organizadas por categorias de
forma simples e intuitiva. O projeto permite visualizar notícias,
pesquisar assuntos, filtrar conteúdos e salvar matérias favoritas.

A proposta é oferecer uma experiência semelhante à de um portal de
notícias, reunindo em uma única página conteúdos de diferentes áreas,
como tecnologia, política, esportes, economia, cultura, ciência, saúde e
mundo.
Importante: este projeto é uma demonstração front-end. As notícias
estão cadastradas diretamente no JavaScript e não são atualizadas
automaticamente por uma API ou serviço externo. O formulário de
newsletter apenas valida o e-mail e exibe uma mensagem na tela; ele
não realiza inscrições reais nem envia mensagens.

🎯 Objetivo do projeto
Criar uma interface de portal de notícias para praticar o
desenvolvimento de páginas web, a organização de conteúdo e a
implementação de interações com JavaScript. O site foi pensado para
facilitar a navegação e a leitura, tanto em computadores quanto em
dispositivos móveis.
🧰 Tecnologias utilizadas
- HTML5: estrutura e organização do conteúdo da página, incluindo
  cabeçalho, navegação, área principal, barra lateral, rodapé e janela
  de leitura.
- CSS3: aparência visual do site, cores, tipografia, espaçamentos,
  cartões de notícias, efeitos de interação e adaptação para
  diferentes tamanhos de tela.
- JavaScript: funcionamento das interações, como busca, filtros
  por categoria, abertura de notícias, favoritos, compartilhamento e
  alternância de tema.
- LocalStorage: recurso do navegador usado para manter as notícias
  favoritas e a preferência de tema (claro ou escuro) salvas no
  dispositivo.
- Picsum Photos: serviço externo utilizado como fonte de imagens
  ilustrativas das notícias.
O projeto não utiliza, nos arquivos apresentados, frameworks ou
bibliotecas externas de front-end.
✨ Funcionalidades do site
- Página inicial com notícia em destaque: apresenta uma matéria em
  evidência no início do portal.
- Categorias de notícias: permite filtrar o conteúdo por
  Tecnologia, Política, Esportes, Economia, Cultura, Ciência, Saúde e
  Mundo.
- Busca: permite procurar notícias por palavras presentes no
  título, resumo, categoria ou nome do autor.
- Cartões de notícias: exibem imagem, título, resumo, categoria,
  autor, tempo estimado de leitura e número de visualizações.
- Leitura completa: ao selecionar uma notícia, o site abre uma
  janela com o conteúdo completo e informações da matéria.
- Notícias relacionadas: apresenta outras matérias da mesma
  categoria, quando disponíveis.
- Mais lidas: mostra as notícias com maior número de visualizações
  cadastradas.
- Favoritos: permite salvar e remover notícias de uma lista
  pessoal. Os favoritos ficam armazenados no navegador por meio do
  LocalStorage.
- Tema claro e escuro: permite alterar a aparência do portal e
  mantém a preferência escolhida no navegador.
- Compartilhamento: utiliza o recurso de compartilhamento do
  navegador quando disponível. Caso contrário, tenta copiar o título e
  o endereço da página.
- Newsletter demonstrativa: verifica se o e-mail informado possui
  um formato válido e mostra uma mensagem de confirmação na interface.
  Não existe integração com serviço de envio.
- Carregar mais notícias: exibe mais cartões de notícias
  cadastradas.
- Menu para dispositivos móveis: adapta a navegação para telas
  menores.
- Barra de progresso de leitura: indica o avanço da rolagem dentro
  da janela de leitura da notícia.
📁 Estrutura dos arquivos
portal-noticia-ja/
├── index.html   # Estrutura principal da página
├── style.css    # Estilos, cores, layout e responsividade
├── script.js    # Dados das notícias e funcionalidades interativas
└── README.md    # Documentação do projeto
Para que serve cada arquivo?
index.html

É o arquivo principal do site. Nele ficam os elementos que formam a
página, como o cabeçalho, campo de busca, menu de categorias, área de
notícias, barra lateral, newsletter, rodapé e janela de leitura. Também
faz a ligação com os arquivos style.css e script.js.

style.css

Controla a parte visual do projeto. Define as cores, fontes, tamanhos,
alinhamentos, cartões, botões, efeitos e os ajustes de layout para telas
menores. Também contém as variáveis utilizadas na troca entre tema claro
e escuro.

script.js

Contém os dados demonstrativos das notícias e o código responsável pelas
funcionalidades. Organiza e exibe as matérias, aplica filtros, controla
os favoritos, abre e fecha a janela de leitura, valida o formulário de
newsletter e configura os eventos dos botões.
▶️ Como executar o projeto
1. Baixe ou clone este repositório para o seu computador.
2. Mantenha os arquivos index.html, style.css e script.js na
   mesma pasta.
3. Abra o arquivo index.html em um navegador, como Google Chrome,
   Microsoft Edge ou Firefox.
4. Utilize a busca, as categorias e os botões para testar as
   funcionalidades.
Não é necessário instalar dependências ou configurar um servidor para
visualizar esta versão demonstrativa. É necessária conexão com a
internet para carregar as imagens hospedadas no Picsum Photos.
🧪 Observações sobre os dados
- As matérias são exemplos cadastrados no arquivo script.js.
- A quantidade de visualizações é um valor demonstrativo usado para
  ordenar a seção "Mais lidas".
- Os favoritos e a preferência de tema são armazenados localmente no
  navegador. Portanto, não são sincronizados entre dispositivos.
- A newsletter não salva endereços de e-mail em um banco de dados.
- O compartilhamento depende dos recursos e das permissões oferecidos
  pelo navegador.
🚀 Possíveis melhorias futuras
- Integrar uma API para obter notícias atualizadas.
- Criar um back-end e um banco de dados para armazenar notícias e
  usuários.
- Implementar cadastro e login.
- Conectar a newsletter a um serviço real de envio de e-mails.
- Criar um painel administrativo para cadastrar, editar e remover
  notícias.
📚 Finalidade acadêmica
Este projeto pode ser utilizado como exercício prático de
desenvolvimento front-end, permitindo aplicar conceitos de estruturação
com HTML, estilização com CSS, lógica e manipulação do DOM com
JavaScript, eventos, funções, arrays, filtros e armazenamento local no
navegador.
Projeto: Portal Notícia Já
Tipo: Site demonstrativo de notícias
Tecnologias: HTML5, CSS3 e JavaScript
