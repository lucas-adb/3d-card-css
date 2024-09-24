## Exemplos das fórmulas de xRotation e yRotation - Copilot 🤖

Claro! Vamos analisar a fórmula de rotação com alguns exemplos práticos.

### Fórmulas
- **xRotation**: `(xPercentage - 0.5) * 20`
- **yRotation**: `(0.5 - yPercentage) * 20`

### Exemplos

#### Exemplo 1: Cursor no Centro do Elemento
- **Posição do Cursor**: Centro do elemento
- **xPercentage**: 0.5 (50% da largura)
- **yPercentage**: 0.5 (50% da altura)

**Cálculo**:
- `xRotation = (0.5 - 0.5) * 20 = 0 * 20 = 0`
- `yRotation = (0.5 - 0.5) * 20 = 0 * 20 = 0`

**Resultado**:
- `xRotation = 0 graus`
- `yRotation = 0 graus`

#### Exemplo 2: Cursor no Canto Superior Esquerdo
- **Posição do Cursor**: Canto superior esquerdo
- **xPercentage**: 0 (0% da largura)
- **yPercentage**: 0 (0% da altura)

**Cálculo**:
- `xRotation = (0 - 0.5) * 20 = -0.5 * 20 = -10`
- `yRotation = (0.5 - 0) * 20 = 0.5 * 20 = 10`

**Resultado**:
- `xRotation = -10 graus`
- `yRotation = 10 graus`

#### Exemplo 3: Cursor no Canto Inferior Direito
- **Posição do Cursor**: Canto inferior direito
- **xPercentage**: 1 (100% da largura)
- **yPercentage**: 1 (100% da altura)

**Cálculo**:
- `xRotation = (1 - 0.5) * 20 = 0.5 * 20 = 10`
- `yRotation = (0.5 - 1) * 20 = -0.5 * 20 = -10`

**Resultado**:
- `xRotation = 10 graus`
- `yRotation = -10 graus`

#### Exemplo 4: Cursor no Meio do Lado Esquerdo
- **Posição do Cursor**: Meio do lado esquerdo
- **xPercentage**: 0 (0% da largura)
- **yPercentage**: 0.5 (50% da altura)

**Cálculo**:
- `xRotation = (0 - 0.5) * 20 = -0.5 * 20 = -10`
- `yRotation = (0.5 - 0.5) * 20 = 0 * 20 = 0`

**Resultado**:
- `xRotation = -10 graus`
- `yRotation = 0 graus`

#### Exemplo 5: Cursor no Meio do Lado Direito
- **Posição do Cursor**: Meio do lado direito
- **xPercentage**: 1 (100% da largura)
- **yPercentage**: 0.5 (50% da altura)

**Cálculo**:
- `xRotation = (1 - 0.5) * 20 = 0.5 * 20 = 10`
- `yRotation = (0.5 - 0.5) * 20 = 0 * 20 = 0`

**Resultado**:
- `xRotation = 10 graus`
- `yRotation = 0 graus`

### Resumo
As fórmulas de `xRotation` e `yRotation` ajustam a rotação do elemento com base na posição do cursor. A rotação é centralizada em 0 graus quando o cursor está no centro do elemento e varia de -10 a 10 graus conforme o cursor se move para os cantos do elemento.