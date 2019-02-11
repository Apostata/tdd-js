import { expect } from 'chai';
import { exec } from 'child_process'; // comunicar com outros processos (outra thread)

import pkg from '../package.json';

const executavel = './src/main.js --version';
const btcConverter = process.platform === 'win32' ? `node.exe ${executavel}` : executavel;
describe('Main', () => {
  it('Should return version of btc-converter', (done) => {
    exec(btcConverter, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.eql(pkg.version);
      // replace `\n`(quebra de linha) pois o console.log() sempre quebra uma linha
      done();
    });
  });
});
