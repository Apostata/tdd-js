import { expect } from 'chai';
import { exec } from 'child_process'; // comunicar com outros processos (outra thread)

const executavel = './src/main.js';
const btcConverter = process.platform === 'win32' ? `node.exe ${executavel}` : executavel;

describe('Main', () => {
  it('Should return Helo World', (done) => {
    exec(btcConverter, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.eql('Hello World!');
      // replace `\n`(quebra de linha) pois o console.log() sempre quebra uma linha
      done();
    });
  });
});
