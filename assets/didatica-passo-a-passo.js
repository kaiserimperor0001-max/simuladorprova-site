(() => {
  "use strict";

  const GUIAS = {
    F1: {
      nome: "voltas e arcos côngruos",
      ideia: "Uma volta completa muda o número escrito, mas não muda o ponto onde o raio termina. Por isso, no fim, retiramos blocos de $360^\\circ$ ou de $2\\pi$.",
      inicio: "Junte todos os giros em uma única conta: anti-horário entra com sinal positivo; horário entra com sinal negativo.",
      checagem: "reduza a posição final à primeira volta e confira se ela ficou no intervalo pedido",
      lembrete: "$\\theta$ e $\\theta+360^\\circ k$ (ou $\\theta+2\\pi k$) terminam no mesmo ponto do ciclo.",
      dicas: ["Some os giros usando sinais.", "Retire as voltas completas.", "Só depois localize o ângulo na primeira volta."],
    },
    F2: {
      nome: "simetrias e coordenadas",
      ideia: "No ciclo trigonométrico, a coordenada horizontal é o cosseno e a vertical é o seno: $P=(\\cos\\alpha,\\sen\\alpha)$.",
      inicio: "Antes de calcular, escreva o que a transformação faz com $(x,y)$: eixo $y$: $(-x,y)$; eixo $x$: $(x,-y)$; origem: $(-x,-y)$.",
      checagem: "veja quais coordenadas realmente trocam de sinal na simetria mostrada",
      lembrete: "Refletir não muda os módulos das coordenadas; muda apenas os sinais indicados pelo eixo ou pela origem.",
      dicas: ["Leia o ponto como $(\\cos,\\sen)$.", "Aplique a troca de sinais da simetria.", "Substitua somente no final."],
    },
    F3: {
      nome: "sinais no ciclo",
      ideia: "O sinal vem da posição do ponto: direita significa cosseno positivo; esquerda, negativo; acima significa seno positivo; abaixo, negativo.",
      inicio: "Localize cada ponto e anote separadamente os sinais de seno e cosseno. Para a tangente, use $\\tg\\alpha=\\sen\\alpha/\\cos\\alpha$.",
      checagem: "confira o quadrante antes de multiplicar ou dividir os sinais",
      lembrete: "Tangente é positiva quando seno e cosseno têm o mesmo sinal e negativa quando têm sinais diferentes.",
      dicas: ["Direita/esquerda decide o cosseno.", "Acima/abaixo decide o seno.", "Tangente é seno dividido por cosseno."],
    },
    F4: {
      nome: "redução ao primeiro quadrante",
      ideia: "O ângulo de referência dá o valor sem sinal. O quadrante decide se esse valor entra positivo ou negativo.",
      inicio: "Trate um arco por vez: encontre o ângulo de referência, escolha o sinal pelo quadrante e só então substitua na expressão.",
      checagem: "confira o sinal de cada valor notável antes de fazer a soma ou a fração",
      lembrete: "Mesmo ângulo de referência não significa mesmo sinal; o quadrante ainda precisa ser observado.",
      dicas: ["Reduza cada arco separadamente.", "Marque o quadrante e o sinal.", "Substitua os valores exatos na última etapa."],
    },
    F5: {
      nome: "expressões com valores notáveis",
      ideia: "A expressão fica curta quando reconhecemos valores notáveis e pares complementares, como $\\sen\\theta=\\cos(90^\\circ-\\theta)$.",
      inicio: "Calcule ou relacione cada parcela antes de juntar tudo. Se houver quadrado, lembre que o sinal desaparece: $(-a)^2=a^2$.",
      checagem: "releia os sinais que estão fora dos quadrados e das frações",
      lembrete: "$\\sen^2\\theta+\\cos^2\\theta=1$ sempre que os dois termos usam o mesmo ângulo.",
      dicas: ["Procure ângulos complementares.", "Resolva os quadrados antes dos sinais externos.", "Some somente depois de simplificar cada parcela."],
    },
    F6: {
      nome: "arcos associados",
      ideia: "As fórmulas de arcos associados apenas descrevem simetrias do ciclo. O módulo é preservado; o sinal muda conforme a nova posição.",
      inicio: "Troque cada arco por seno ou cosseno de $x$ usando a simetria correspondente. Não tente simplificar a fração antes disso.",
      checagem: "verifique cada sinal de $\\pi-x$, $\\pi+x$ e $2\\pi-x$ antes de cancelar fatores",
      lembrete: "$\\sen(\\pi-x)=\\sen x$, $\\sen(\\pi+x)=-\\sen x$, $\\cos(\\pi+x)=-\\cos x$ e $\\cos(2\\pi-x)=\\cos x$.",
      dicas: ["Substitua um arco associado de cada vez.", "Agrupe termos semelhantes.", "Cancele apenas fatores que o enunciado garante serem não nulos."],
    },
    F7: {
      nome: "comprimento de arco",
      ideia: "Em radianos, o comprimento do arco é uma multiplicação direta: $s=r\\theta$.",
      inicio: "Identifique o raio e o ângulo em radianos. Depois decida se o contorno pedido inclui apenas o arco ou também segmentos retos.",
      checagem: "confira se o ângulo está em radianos e se todos os pedaços do perímetro foram somados",
      lembrete: "A fórmula $s=r\\theta$ usa $\\theta$ em radianos. Em um setor, o perímetro pode incluir dois raios.",
      dicas: ["Leia $r$ e $\\theta$ na figura.", "Use $s=r\\theta$.", "Se for perímetro, some também os trechos retos."],
    },
    F8: {
      nome: "movimento circular",
      ideia: "Movimento uniforme significa que a fração do tempo é igual à fração da volta percorrida.",
      inicio: "Descubra quanto do período passou e transforme essa fração em ângulo. Depois some a posição inicial e reduza à primeira volta.",
      checagem: "confira posição inicial, sentido do giro e se o problema pede a primeira ocorrência",
      lembrete: "$\\omega=2\\pi/T$ e $\\theta(t)=\\theta_0+\\omega t$ no sentido anti-horário.",
      dicas: ["Ache o período.", "Converta o tempo em parte de uma volta.", "Use a posição inicial e o sentido do movimento."],
    },
    F9: {
      nome: "relação fundamental e sinais",
      ideia: "Conhecendo seno ou cosseno, recuperamos o outro com $\\sen^2x+\\cos^2x=1$. A equação fornece o módulo; o quadrante fornece o sinal.",
      inicio: "Isole o quadrado da razão que falta, tire a raiz e só depois escolha o sinal correto pelo quadrante.",
      checagem: "não escolha o sinal da raiz antes de olhar o quadrante",
      lembrete: "A raiz dá duas possibilidades, $+a$ e $-a$; a posição do arco elimina uma delas.",
      dicas: ["Use $\\sen^2x+\\cos^2x=1$.", "Encontre primeiro o módulo.", "Use o quadrante para escolher o sinal."],
    },
    F10: {
      nome: "razão entre seno e cosseno",
      ideia: "Uma relação como $3\\sen x=4\\cos x$ informa uma proporção. Podemos montar um triângulo de referência e normalizar pela hipotenusa.",
      inicio: "Transforme a igualdade em uma razão entre os módulos de seno e cosseno; depois calcule a hipotenusa dessa proporção.",
      checagem: "aplique os sinais do quadrante somente depois de encontrar os módulos",
      lembrete: "Se os catetos proporcionais são $a$ e $b$, a normalização usa $\\sqrt{a^2+b^2}$.",
      dicas: ["Leia a proporção entre seno e cosseno.", "Normalize pela hipotenusa.", "Coloque os sinais do quadrante."],
    },
    F11: {
      nome: "equação com relação fundamental",
      ideia: "A equação mistura seno e cosseno, mas a relação fundamental permite escrever tudo em uma única variável.",
      inicio: "Troque $\\sen^2x$ por $1-\\cos^2x$ ou $\\cos^2x$ por $1-\\sen^2x$. Assim surge uma equação do 2º grau comum.",
      checagem: "teste todas as raízes no intervalo, porque uma raiz algébrica pode ter o sinal errado ou cair em um extremo excluído",
      lembrete: "Resolver a equação não basta: o intervalo do arco decide qual raiz trigonométrica é válida.",
      dicas: ["Deixe a equação em uma só razão trigonométrica.", "Resolva a equação do 2º grau.", "Use o intervalo para eliminar a raiz impossível."],
    },
    F12: {
      nome: "parâmetro e domínio",
      ideia: "Se duas expressões representam seno e cosseno do mesmo arco, seus quadrados precisam somar 1.",
      inicio: "Substitua as duas expressões em $\\sen^2x+\\cos^2x=1$ e elimine os denominadores com calma.",
      checagem: "depois de resolver em $m$, teste o domínio da raiz e se seno e cosseno ficam entre $-1$ e $1$",
      lembrete: "Uma raiz da equação pode ser proibida pelo radical; por isso o domínio faz parte da resposta.",
      dicas: ["Monte a relação fundamental.", "Resolva a equação em $m$.", "Teste o domínio do radical e das razões."],
    },
    F13: {
      nome: "cosseno de ângulo obtuso na geometria",
      ideia: "O cosseno negativo pertence ao ângulo externo. Os comprimentos físicos continuam positivos, então usamos o módulo na projeção.",
      inicio: "Use $|\\cos\\alpha|$ para achar a projeção horizontal e complete o triângulo retângulo com Pitágoras, se necessário.",
      checagem: "não transforme um comprimento em negativo por causa do sinal do ângulo externo",
      lembrete: "O sinal descreve direção no ciclo; medida de comprimento é positiva.",
      dicas: ["Separe o sinal do ângulo do tamanho físico.", "Ache a projeção com o módulo do cosseno.", "Use Pitágoras para o lado restante."],
    },
    F14: {
      nome: "polígono regular no ciclo",
      ideia: "Vértices de um polígono regular dividem a volta em partes iguais.",
      inicio: "Calcule o passo angular com $360^\\circ/n$ e conte quantos passos separam o vértice inicial do vértice pedido.",
      checagem: "conte os intervalos entre os vértices, não a quantidade de letras vistas",
      lembrete: "Em um polígono regular de $n$ lados, cada avanço vale $360^\\circ/n$.",
      dicas: ["Divida $360^\\circ$ pelo número de lados.", "Conte os passos a partir de $A$.", "Calcule seno ou cosseno do arco encontrado."],
    },
    F15: {
      nome: "comparação de razões",
      ideia: "Antes de aproximar números, use complementaridade e simetria para transformar os termos em razões comparáveis.",
      inicio: "Reescreva ângulos complementares ou suplementares e compare apenas depois de colocar as expressões na mesma linguagem.",
      checagem: "observe se a comparação usa valor com sinal ou módulo",
      lembrete: "$\\sen\\theta=\\cos(90^\\circ-\\theta)$ e $\\sen(180^\\circ-\\theta)=\\sen\\theta$.",
      dicas: ["Procure ângulos complementares.", "Use as simetrias de $180^\\circ$.", "Compare somente termos equivalentes."],
    },
    FT1: {
      nome: "sinal e existência da tangente",
      ideia: "Tangente é o quociente $\\sen x/\\cos x$. Ela não existe quando o cosseno é zero.",
      inicio: "Primeiro verifique se o arco está no eixo vertical. Se não estiver, use os sinais do seno e do cosseno para decidir o sinal da tangente.",
      checagem: "não diga que a tangente vale zero quando o denominador é zero",
      lembrete: "$\\tg x=0$ nos eixos horizontais e não existe nos eixos verticais.",
      dicas: ["Veja se $\\cos x=0$.", "Se existir, use os sinais do quadrante.", "A tangente repete a cada $180^\\circ$."],
    },
    FT2: {
      nome: "tangente a partir de seno ou cosseno",
      ideia: "Primeiro recuperamos a razão que falta; depois fazemos $\\tg x=\\sen x/\\cos x$.",
      inicio: "Use a relação fundamental para achar o módulo da razão ausente e o quadrante para escolher seu sinal.",
      checagem: "simplifique a fração da tangente antes de colocá-la na expressão final",
      lembrete: "Dividir duas frações com o mesmo denominador faz esse denominador cancelar.",
      dicas: ["Recupere a razão que falta.", "Escolha o sinal pelo quadrante.", "Calcule a tangente e só depois a expressão pedida."],
    },
    FT3: {
      nome: "seno e cosseno a partir da tangente",
      ideia: "A tangente fornece a razão entre os catetos. Um triângulo de referência transforma essa razão em seno e cosseno.",
      inicio: "Use numerador e denominador de $|\\tg x|$ como catetos e calcule a hipotenusa com Pitágoras.",
      checagem: "coloque os sinais do quadrante em seno e cosseno antes da expressão final",
      lembrete: "Se $|\\tg x|=a/b$, então a hipotenusa de referência é $\\sqrt{a^2+b^2}$.",
      dicas: ["Monte o triângulo com a tangente.", "Ache a hipotenusa.", "Aplique os sinais do quadrante."],
    },
    FT4: {
      nome: "equação homogênea em seno e cosseno",
      ideia: "Todos os termos têm grau 2. Dividir a equação inteira por $\\cos^2x$ transforma tudo em uma equação de $t=\\tg x$.",
      inicio: "Faça a divisão termo a termo: $\\sen^2x/\\cos^2x=t^2$, $\\sen x\\cos x/\\cos^2x=t$ e $\\cos^2x/\\cos^2x=1$.",
      checagem: "use o intervalo ou a condição dada para escolher entre as raízes de $t$",
      lembrete: "Depois de achar $t$, vale $\\sen x\\cos x=t/(1+t^2)$ quando essa forma for útil.",
      dicas: ["Divida tudo por $\\cos^2x$.", "Resolva a equação em $t=\\tg x$.", "Use o intervalo para selecionar a raiz."],
    },
    FT5: {
      nome: "tangente em situações geométricas",
      ideia: "Em um triângulo retângulo, tangente é subida dividida pelo avanço horizontal.",
      inicio: "Marque quem é o cateto oposto e quem é o adjacente: $\\tg\\theta=\\text{subida}/\\text{avanço}$.",
      checagem: "veja se o problema pede altura, avanço, raio ou comprimento inclinado",
      lembrete: "Na planificação de uma volta de cilindro, o avanço horizontal é a circunferência $2\\pi r$.",
      dicas: ["Identifique subida e avanço.", "Monte a razão da tangente.", "Isole a medida pedida e confira a unidade."],
    },
  };

  const GUIA_PADRAO = {
    nome: "raciocínio trigonométrico",
    ideia: "Separe o problema em pequenas decisões: interpretar, escolher a relação, substituir e conferir.",
    inicio: "Escreva os dados e a incógnita antes de começar a conta.",
    checagem: "confira sinais, domínio e a grandeza que o enunciado realmente pediu",
    lembrete: "Uma conta curta fica segura quando cada mudança é justificada.",
    dicas: ["Liste os dados.", "Escolha a relação adequada.", "Substitua e confira o resultado."],
  };

  const SOLUCOES_CORRIGIDAS = {
    "Q-021": "No hexágono regular, cada passo vale $360^\\circ/6=60^\\circ$. Como $A=0^\\circ$, então $B=60^\\circ$ e $D=180^\\circ$. Agora calculamos cada parcela: $\\cos D=\\cos180^\\circ=-1$ e $\\sen B=\\sen60^\\circ=\\sqrt3/2$. Substituindo, $\\cos D-\\sen B=-1-\\sqrt3/2$.",
    "Q-022": "O marcador A percorre $360^\\circ\\cdot(12/6)=720^\\circ$, isto é, duas voltas completas, e termina em $0^\\circ$. O marcador B percorre $360^\\circ\\cdot(12/4)=1080^\\circ$ e, como partiu de $180^\\circ$, sua posição total é $180^\\circ+1080^\\circ=1260^\\circ$. Retirando três voltas, $1260^\\circ-3\\cdot360^\\circ=180^\\circ$. Assim, A está em $0^\\circ$ e B em $180^\\circ$; a menor separação é $180^\\circ$.",
    "Q-041": "Pela relação fundamental, $\\sen^2\\beta=1-\\cos^2\\beta=1-1600/1681=81/1681$. Logo $|\\sen\\beta|=9/41$. No 3º quadrante, o seno é negativo: $\\sen\\beta=-9/41$. Então $\\tg\\beta=(-9/41)/(-40/41)=9/40$. Agora fazemos a conta pedida: $T=2\\cdot(9/40)-1=18/40-40/40=-22/40=-11/20$.",
    "Q-060": "Em 7 s, o radar percorre $360^\\circ\\cdot(7/10)=252^\\circ$. Como ele começou em $30^\\circ$, a posição final é $30^\\circ+252^\\circ=282^\\circ$. O ângulo $282^\\circ$ fica entre $270^\\circ$ e $360^\\circ$, portanto está no 4º quadrante. Nesse quadrante, seno é negativo e cosseno é positivo; por isso, a tangente é negativa.",
    "Q-112": "O marcador A percorre $360^\\circ\\cdot(24/8)=1080^\\circ$, isto é, três voltas, e termina em $0^\\circ$. O marcador B percorre $360^\\circ\\cdot(24/12)=720^\\circ$ e, como começou em $90^\\circ$, termina novamente em $90^\\circ$. As posições finais são $0^\\circ$ e $90^\\circ$; logo a menor separação angular é $90^\\circ$.",
    "Q-150": "Pela relação fundamental, $\\sen^2\\beta=1-\\cos^2\\beta=1-144/169=25/169$. Logo $|\\sen\\beta|=5/13$. No 4º quadrante, o seno é negativo: $\\sen\\beta=-5/13$. Então $\\tg\\beta=(-5/13)/(12/13)=-5/12$. Agora fazemos a conta pedida: $T=2(-5/12)+1=-10/12+12/12=2/12=1/6$.",
    "Q-168": "Em 5 s, o radar percorre $360^\\circ\\cdot(5/12)=150^\\circ$. Como ele começou em $60^\\circ$, a posição final é $60^\\circ+150^\\circ=210^\\circ$. O ângulo $210^\\circ$ fica entre $180^\\circ$ e $270^\\circ$, portanto está no 3º quadrante. Nesse quadrante, seno e cosseno são negativos; negativo dividido por negativo é positivo, então a tangente é positiva.",
  };

  const reparos = (texto = "") =>
    texto
      .replaceAll("cosalpha", "\\cos\\alpha")
      .replaceAll("senalpha", "\\sen\\alpha")
      .replaceAll("tgalpha", "\\tg\\alpha")
      .replace(/\^circcdot/g, "^\\circ\\cdot ")
      .replace(/\^circ/g, "^\\circ")
      .replace(/(^|[^\\])sen(?=[0-9])/g, "$1\\sen ")
      .replace(/(^|[^\\])cos(?=[0-9])/g, "$1\\cos ")
      .replace(/(^|[^\\])tg(?=[0-9])/g, "$1\\tg ")
      .replace(/\+1\\cos/g, "+\\cos")
      .replace(/\-1\\cos/g, "-\\cos")
      .replace(/\+1\\sen/g, "+\\sen")
      .replace(/\-1\\sen/g, "-\\sen")
      .replace(/\s{2,}/g, " ")
      .trim();

  const mdc = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) [a, b] = [b, a % b];
    return a || 1;
  };

  const fracaoTex = (n, d) => {
    if (d < 0) [n, d] = [-n, -d];
    const g = mdc(n, d);
    n /= g;
    d /= g;
    return d === 1 ? String(n) : `\\frac{${n}}{${d}}`;
  };

  function detalheQuadratica(frase) {
    const limpa = frase.replaceAll("²", "^2").replace(/\s/g, "");
    const m = limpa.match(/\$([+-]?\d*)([cs])\^2([+-]\d+)\2([+-]\d+)=0\$/);
    if (!m) return "";
    const a = m[1] === "" || m[1] === "+" ? 1 : m[1] === "-" ? -1 : Number(m[1]);
    const v = m[2];
    const b = Number(m[3]);
    const c = Number(m[4]);
    const delta = b * b - 4 * a * c;
    const raiz = Math.sqrt(delta);
    if (!Number.isInteger(raiz)) return "";
    const r1 = fracaoTex(-b + raiz, 2 * a);
    const r2 = fracaoTex(-b - raiz, 2 * a);
    return `$\\Delta=(${b})^2-4\\cdot${a}\\cdot(${c})=${delta}$. Então $${v}_1=${r1}$ e $${v}_2=${r2}$.`;
  }

  function limparSolucao(texto) {
    return reparos(texto)
      .replace(/\s*O resultado obtido também respeita as condições de sinal, intervalo e domínio declaradas no enunciado\.?/gi, "")
      .replace(/\s*As hipóteses do enunciado garantem que as divisões realizadas são válidas\.?/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function separarPassos(texto) {
    const partes = texto
      .split(/(?<=[.!?])\s+(?=(?:[A-ZÁÉÍÓÚÀÂÊÔÕÇ$]|Como|Logo|Assim|Portanto|Além|Já|No|Na|Pela|Da|Em))/)
      .map((parte) => parte.trim())
      .map((parte) =>
        parte.replace(/^Fatorando\/resolvendo essa quadrática surgem duas raízes;\s*/i, "Das duas raízes, "),
      )
      .filter(Boolean)
      .filter((parte) => !/^Fatorando\/resolvendo essa quadrática surgem duas raízes/i.test(parte));
    return partes.length ? partes : [texto];
  }

  function extrairValor(texto, nome) {
    const marcador = `$${nome}=`;
    const marcadorAdmissivel = `admissível é ${marcador}`;
    const posicaoAdmissivel = texto.indexOf(marcadorAdmissivel);
    const inicio = posicaoAdmissivel >= 0 ? posicaoAdmissivel + "admissível é ".length : texto.lastIndexOf(marcador);
    if (inicio < 0) return "";
    const fim = texto.indexOf("$", inicio + marcador.length);
    return fim < 0 ? "" : texto.slice(inicio + marcador.length, fim);
  }

  function passoFinalExplicito(q, original, correta) {
    if (q.family !== "F11") return "";
    const seno = extrairValor(original, "\\sen x");
    const cosseno = extrairValor(original, "\\cos x");
    const resposta = (correta?.text || "").replace(/^\$/, "").replace(/\$$/, "");
    if (q.stem.includes("determine $\\tg x$") && seno && cosseno) {
      return `$\\tg x=\\dfrac{\\sen x}{\\cos x}=\\dfrac{${seno}}{${cosseno}}=${resposta}$.`;
    }
    if (q.stem.includes("determine $\\sen x+\\cos x$") && seno && cosseno) {
      return `$\\sen x+\\cos x=(${seno})+(${cosseno})=${resposta}$.`;
    }
    return "";
  }

  function construirSolucao(q) {
    const guia = GUIAS[q.family] || GUIA_PADRAO;
    const correta = q.choices.find((opcao) => opcao.id === q.correctChoice);
    const original = limparSolucao(SOLUCOES_CORRIGIDAS[q.id] || q.fullSolution);
    const passosOriginais = separarPassos(original);
    const passos = [guia.inicio];

    for (const passo of passosOriginais) {
      passos.push(passo);
      if (q.family === "F11") {
        const detalhe = detalheQuadratica(passo);
        if (detalhe) passos.push(detalhe);
      }
    }

    const finalExplicito = passoFinalExplicito(q, original, correta);
    if (finalExplicito) passos.push(finalExplicito);

    const respostaJaAparece = original.includes(correta?.text || "");
    if (!respostaJaAparece) {
      passos.push(`Fazendo a última substituição e simplificando, o valor pedido é ${correta?.text || "o indicado no gabarito"}.`);
    }

    const numerados = passos.map((passo, i) => `${i + 1}. ${passo}`).join("\n\n");
    return [
      "IDEIA-CHAVE",
      guia.ideia,
      "",
      "PASSO A PASSO",
      numerados,
      "",
      "GABARITO",
      `Alternativa ${q.correctChoice} — ${correta?.text || "resposta correta"}.`,
      "",
      "PARA LEMBRAR",
      guia.lembrete,
    ].join("\n");
  }

  function tornarErroAmigavel(texto = "") {
    return texto
      .replace(/^Correta:\s*/i, "")
      .replace(/^erro /i, "há um erro ")
      .replace(/\.$/, "")
      .trim();
  }

  function construirFeedback(q, escolha, feedbackAntigo) {
    const guia = GUIAS[q.family] || GUIA_PADRAO;
    const marcada = q.choices.find((opcao) => opcao.id === escolha);
    const correta = q.choices.find((opcao) => opcao.id === q.correctChoice);
    if (escolha === q.correctChoice) {
      return `Você acertou a alternativa ${q.correctChoice}: ${correta?.text || ""}. O ponto decisivo foi ${guia.checagem}. Abra a explicação abaixo para consolidar o caminho.`;
    }
    const motivo = tornarErroAmigavel(feedbackAntigo);
    return [
      `Você marcou ${escolha}: ${marcada?.text || ""}.`,
      motivo ? `Essa opção costuma aparecer quando ${motivo}.` : "Algum passo de sinal, substituição ou simplificação saiu do caminho.",
      `Volte ao ponto decisivo: ${guia.checagem}.`,
      `O gabarito é ${q.correctChoice}: ${correta?.text || ""}. A conta completa está logo abaixo.`,
    ].join(" ");
  }

  function melhorarQuestoes(questoes) {
    for (const q of questoes) {
      q.stem = reparos(q.stem);
      q.choices = q.choices.map((opcao) => ({ ...opcao, text: reparos(opcao.text) }));
      const feedbackAnterior = { ...(q.errorFeedbackByChoice || {}) };
      q.fullSolution = construirSolucao(q);
      q.hints = [...new Set([...(GUIAS[q.family]?.dicas || GUIA_PADRAO.dicas), ...(q.hints || []).map(reparos)])].slice(0, 5);
      q.errorFeedbackByChoice = Object.fromEntries(
        q.choices.map((opcao) => [opcao.id, construirFeedback(q, opcao.id, feedbackAnterior[opcao.id])]),
      );
    }
    return questoes;
  }

  const parseOriginal = JSON.parse;
  JSON.parse = function parseDidatico(texto, reviver) {
    const valor = parseOriginal.call(this, texto, reviver);
    if (Array.isArray(valor) && valor.length === 200 && valor[0]?.id === "Q-001" && valor[199]?.id === "Q-200") {
      JSON.parse = parseOriginal;
      return melhorarQuestoes(valor);
    }
    return valor;
  };

  function atualizarRotulos() {
    document.querySelectorAll(".solution-panel > summary").forEach((el) => {
      if (el.textContent === "Ver resolução completa") el.textContent = "Abrir explicação passo a passo";
    });
    document.querySelectorAll(".full-solution > h3").forEach((el) => {
      if (el.textContent === "Resolução completa") el.textContent = "Explicação passo a passo";
    });
    document.querySelectorAll(".answer-comparison > div:nth-child(2) > span").forEach((el) => {
      if (el.textContent === "Resposta correta") el.textContent = "Gabarito correto";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    atualizarRotulos();
    new MutationObserver(atualizarRotulos).observe(document.body, { childList: true, subtree: true });
  });
})();
