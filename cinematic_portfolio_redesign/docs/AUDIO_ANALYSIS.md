# Análise Técnica do Áudio e Sincronização

## 1. Identificação do Arquivo
- **Arquivo:** `soundtrack.mp3`
- **Faixa Original:** *Venice* — Scandinavianz (Royalty Free / Sem Direitos Autorais)
- **Tamanho:** 5.477.355 bytes (~5,22 MB)
- **Formato:** MPEG-1 Layer 3 (MP3), 320 kbps CBR, 44.1 kHz Estéreo.
- **Duração Estimada:** ~2 minutos e 17 segundos.

---

## 2. Análise de Ponto de Loop (Looping)

### Diagnóstico
A faixa *Venice* possui uma estrutura rítmica e melódica contínua de tropical lo-fi chill. No entanto, por se tratar de uma gravação musical comercial e não de uma trilha originalmente renderizada em loop fechado para jogos:
- O final da faixa apresenta um decaimento suave de volume (*fade-out* natural nos últimos 3 segundos).
- O início da faixa retoma com a introdução do violão e sintetizador suave.
- Se utilizada a tag HTML5 `<audio loop>` pura sem tratamento, o reinício direto causa uma ligeira quebra de dinâmica perceptível no corte entre o final e o início da música.

### Solução Arquitetural Implementada (sem alterar o arquivo original)
1. **Preservação Integral:** O arquivo original de áudio não foi cortado nem re-codificado, mantendo fidelidade de 100% à fonte original.
2. **Web Audio API & Crossfade / Ramp Suave:**
   - O `AudioManager` gerencia um nó `GainNode` da Web Audio API.
   - Ao detectar a proximidade do final da faixa (`timeupdate` ou evento `ended`), o sistema aplica uma curva suave de atenuação e retoma a reprodução suavemente, eliminando estalos (*clicks*) e quedas bruscas de transiente.
3. **Loop Contínuo e Não-Intrusivo:**
   - A trilha sonora mantém estado persistente entre todas as seções e eventos de rolagem, sem reiniciar ao trocar de menu.
   - Controles visuais no topo permitem mutar, pausar, despausar e regular o volume a qualquer momento.

---

## 3. Reatividade Visual via Web Audio API (Analisador de Frequências)

Para cumprir o requisito de reatividade orgânica sem fazer a página tremer artificialmente:
- Um `AnalyserNode` com `fftSize = 256` extrai os dados espectrais em tempo real (`Uint8Array`).
- Calculamos a média ponderada das faixas de baixa frequência (sub-bass e bass entre 20 Hz e 180 Hz).
- Um fator de suavização exponencial (*exponential smoothing* / lerp) evita variações bruscas.
- O valor normalizado de energia (0.0 a 1.0) modula:
  - Pulso suave de brilho no núcleo das nebulosas distantes.
  - Sutil expansão na escala de dispersão das partículas cósmicas.
  - Variação delicada no brilho das estrelas de maior magnitude.
- Caso o áudio esteja desligado ou em modo silencioso, o motor 3D utiliza uma respiração sinusoidal orgânica natural baseada no tempo (`performance.now()`), garantindo que a experiência visual permaneça rica e viva em ambos os modos.
