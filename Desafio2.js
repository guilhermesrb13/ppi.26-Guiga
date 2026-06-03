// QUESTÃO 01

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const alunosApvd = alunos.map((aluno => ({
    nome: aluno.nome, media: aluno.notas.reduce((soma, nota) => soma + nota , 0) / aluno.notas.length
}))).filter(aluno => aluno.media >= 7).sort((a,b) => b.media - a.media);
console.log(alunosApvd);

// QUESTÃO 02
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function pegarFilmes(genero, criterio) { 
  return filmes.filter(filme => filme.genero === genero).sort((a, b) =>{ 
    if (criterio === 'ano') {
      return b.ano - a.ano;
    } else if (criterio === 'titulo') {
      return a.titulo.localeCompare(b.titulo);
    }
  }).map (filme => `${filme.titulo} (${filme.ano}) - ${filme.genero}`);
}

console.log(pegarFilmes("ficção", "ano"));
console.log(pegarFilmes("ficção", "titulo"));