<p align="center">	
  <a href="https://www.linkedin.com/in/wagner-zoccoli-front-end-web-developer/">
    <img alt="Wagner" src="https://img.shields.io/badge/-WagnerZoccoli-0A66C2?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <a href="mailto:contato@wagnerzoccoli.com" target="_blank">
    <img alt="Karoline Costa" src="https://img.shields.io/badge/-contato@wagnerzoccoli.com.br-0A66C2?style=flat-square&logo=Gmail&logoColor=white" />
  </a>
</p>

<div align="center">
   Projeto desenvolvido no <a href="https://programadorbr.com/">Curso Desenvolvimento Web Full Stack Programador BR</a>
</div>

<p align="center">
  <img alt="mockup" src="./Assets/mockup.png" width="100%">
</p>

## Sobre o Projeto

O principal propósito deste projeto foi desenvolver meus conhecimentos em JavaScript.

---

### Sistema para cáculo de consumo de carnes e bebidas em evento de churrasco.

Foram seguidos os seguintes parâmetros:

-   Consumo específico por gênero e idade (Homens, mulheres e crianças de até 10 anos);
-   Divisão do consumo em quatro tipos de carne (frango, linguiça, suína e gado);
-   Divisão do consumo em três tipos de bebidas (refrigerantes, sucos e água - álcool de responsabilidade individual, portanto, não computado). Além disso o consumo das bebidas tem relação a 1/3 do q seria o consumo total dos participantes durante o evento, pois considera-se que os participantes trarão suas bebidas alcóolicas;
-   Consumo aumentado se o evento estiver programado para durar 6h ou mais.

Consumo por indivíduo:

Carne:

-   Homens: 550gr p/ pessoa - (+ de 6h de duração) = 700g;
-   Mulhers: 400gr p/ pessoa - (+ de 6h de duração) = 575g;
-   Crianças: 175gr p/ pessoa - (+ de 6h de duração) = 225g;

Refrigerantes/água/sucos:

-   1L p/ pessoa - (+ de 6h de duração) = 2L;

---

### Desafios

Procurei fazer melhorias sobre o projeto original, o qual computava apenas 4 variáveis para o cáculo do consumo: número de adultos, número de crianças, tempo do evento e o consumo de crianças computado como metade do consumo de um adulto.

Meu objetivo foi separar os adultos por gênero e definir consumo específico para ambos, fazendo o mesmo com as crianças (consumo específico). Também fiz pequenas alterações aos valores pré definidos a partir de experiência própria.

Além disso, o projeto inicial propunha um consumo geral de carne, não especificando tipos. Decidi dividir o consumo de carne em 6, sendo 1/6 para frango (asinhas/coxinhas), 1/6 para carne de porco (porque eu gosto de panceta!), 2/6 para linguiça (barato e todos comem) e 2/6 para carne vermelha, a ser escolhida à gosto.

Com relação às bebidas, o projeto inicial computava apenas o consumo de cerveja. Seguindo o bom senso, decidi cortar a cerveja, pois quem não bebe não deveria pagar por algo não consumido. Sendo assim, fiz o cálculo sobre o consumo de bebidas que todos bebem, dividindo o consumo geral em 5 partes: 3/5 refrigerantes, 1/5 de sucos e 1/5 de água. Como o consumo total era, inicialmente, calculado sobre o número total de participantes e considerando que inevitavelmente a bebida principal seria a cerveja trazida individualmente, refiz o cálculo da bebida sobre 1/3 do total de participantes, o que me pareceu ser razoável para cobrir a demanda da minoria que não consome álcool e das crianças.

---

### Lidando com problemas

Tive alguns problemas na execução do projeto, devido às alterações que desejava implementar.

A primeira alteração técnica que resolvi fazer foi criar o arquivo JavaScript 100% separado do arquivo HTML, buscando seguir o referencial das boas práticas. O projeto inicial propunha uma tag <em>script</em> ao final do elemento <em>body</em>, a qual transferi para o <em>head</em> HTML. A <em>call</em> da função principal, segundo o projeto inicial, estava inserida na tag <em>button</em> no arquivo HTML através do evento <em>onclick</em>. Fiel a minha proposta, inseri um <em>event listener</em> no arquivo JS com sucesso. Assim, o arquivo HTML ficou limpo e facilmente legível.

O segundo problema com o qual me deparei foi com relação às variáveis que acessavam os <em>inputs</em> do <em>document</em>. O projeto inicial havia definido as variáveis antes da função principal, obtendo sucesso no acesso aos dados. Contudo, checando o console do meu projeto, verifiquei que tais variáveis encontravam-se vazias (<em>null</em>). Identifiquei como problema de escopo e inseri as minhas variáveis dentro da função principal, corrigindo o problema.

Terceiro, foi um erro na ordem dos fatores da função principal, o qual pude corrigir graças ao console novamente, que me informou não ser capaz de acessar uma das variáveis antes de executá-la.

Por fim, tive um problema no cálculo da água. Honestamente, não entendi o que o código estava fazendo para dar um resultado tão absurdo, retornando consumo de bebida muito além do necessário (lembrando que as bebidas são calculadas para o consumo de apenas 1/3 do total de participantes). Finalmente resolvi adotar a mesma sequência de operação do cálculo para carne e o problema foi resolvido.

---

### Conclusão

Esse projeto foi muito interessante! O fato de tentar agregar valor à proposta inicial, tornando a calculadora mais precisa e com mais variedade, me permitiu um embate muito valioso com o JavaScript. Ter sido capaz de encontrar uma forma particular de implementar o que eu desejava foi muito satisfatório! Uma vitória simples, mas que reforça meu desejo de continuar!

---

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

-   HTML
-   CSS
-   JavaScript
