## Exemplos das fórmulas de xRotation e yRotation

Exatamente! O multiplicador `* 20` nas fórmulas de `xRotation` e `yRotation` é usado para definir um limite de rotação entre -10 e 10 graus. Vamos detalhar isso:

### Fórmulas
- **xRotation**: `(xPercentage - 0.5) * 20`
- **yRotation**: `(0.5 - yPercentage) * 20`

### Explicação
- **xPercentage** e **yPercentage** variam de 0 a 1, representando a posição do cursor como uma fração da largura e altura do elemento, respectivamente.
- Subtraindo 0.5 de `xPercentage` e `yPercentage`, centralizamos o valor em torno de 0:
  - Quando o cursor está no centro do elemento, `xPercentage` e `yPercentage` são 0.5, resultando em 0.
  - Quando o cursor está nos cantos, `xPercentage` e `yPercentage` variam de -0.5 a 0.5.
- Multiplicando por 20, escalamos esse valor para um intervalo de -10 a 10 graus:
  - `-0.5 * 20 = -10`
  - `0.5 * 20 = 10`

### Exemplos
- **Centro do Elemento**:
  - `xPercentage = 0.5`, `yPercentage = 0.5`
  - `xRotation = (0.5 - 0.5) * 20 = 0`
  - `yRotation = (0.5 - 0.5) * 20 = 0`

- **Canto Superior Esquerdo**:
  - `xPercentage = 0`, `yPercentage = 0`
  - `xRotation = (0 - 0.5) * 20 = -10`
  - `yRotation = (0.5 - 0) * 20 = 10`

- **Canto Inferior Direito**:
  - `xPercentage = 1`, `yPercentage = 1`
  - `xRotation = (1 - 0.5) * 20 = 10`
  - `yRotation = (0.5 - 1) * 20 = -10`

### Resumo
O multiplicador `* 20` é usado para ajustar a rotação do elemento dentro de um intervalo de -10 a 10 graus, proporcionando um efeito visual suave e controlado conforme o cursor se move sobre o elemento.