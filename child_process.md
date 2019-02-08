# Rodando via CLI
The `child_process` module enables us to access Operating System functionalities by running any system command inside a, well, child process.

## entre sistemas operacionais

const executavel = './src/main.js';
const arquivoASerExecutado =  `node.exe ${executavel}`  se em sistemas operacional Windows


````
exec(arquivoASerExecutado, (err, stdout, stderr) => {
  ...
});
````

### No arquivo main.js
`#!/usr/bin/env node` - em sistemas operacionais unix (linux e mac)
no windows não precisa pois na variavel `arquivoAserExecutado` já está sendo
executado o `node.exe`.
