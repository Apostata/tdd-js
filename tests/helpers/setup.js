import { configure } from 'enzyme';
import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import 'jsdom-global/register';

configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
