# No Silver Bullet, Revisitado

Fred Brooks dividia a complexidade de software em duas categorias: a **essencial**, que vem do próprio problema, e a **acidental**, que vem das ferramentas e processos que usamos para resolvê-lo. Quase quatro décadas depois, essa distinção continua sendo a lente mais útil que conheço para julgar uma arquitetura.

## O caso do Vortex21

Ao construir o parser do Vortex21, boa parte do trabalho não estava em "fazer o XML virar BSON" — isso é complexidade essencial, inerente ao domínio WITSML. O tempo de verdade foi gasto eliminando complexidade *acidental*: alocação dinâmica desnecessária, lookups por hash onde um array com ponteiros bastava, geração de código repetitivo que um script Python resolve em segundos.

> Otimizar sem entender qual complexidade é essencial é só trocar um acidente por outro.

## Visibilidade de símbolos como metáfora

Reduzir de 14.253 para 196 símbolos exportados não foi sobre performance — foi sobre remover ruído acidental da superfície pública da biblioteca. O comportamento essencial do sistema não mudou; o que mudou foi quanto *acidente* o usuário da lib precisava entender para usá-la corretamente.

## Conclusão

Não existe bala de prata porque a complexidade essencial não desaparece — só muda de lugar. O trabalho de engenharia sério é constante: identificar onde a complexidade é acidental e ter a disciplina de removê-la, ciclo após ciclo.
