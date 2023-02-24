import './css/style.css';
import Daemon from './js/Math/Daemon';
import Magician from './js/Math/Magician';
import ArrayBufferConverter from './js/ArrayBuffer/ArrayBufferConverter';
import getBuffer from './js/ArrayBuffer/arrayBuffer';

// for the first task about Math

const daemon = new Daemon('Daemon');
daemon.stoned = true;
daemon.attackDistance = 2;
// eslint-disable-next-line no-console
console.log(daemon.attackDistance);

const magician = new Magician('Magician');
magician.attackDistance = 2;
daemon.stoned = false;
// eslint-disable-next-line no-console
console.log(magician.attackDistance);

// for the second task about Arrabuffer
const arrayBuffer = getBuffer();
const converter = new ArrayBufferConverter(arrayBuffer);

// eslint-disable-next-line no-console
console.log(JSON.parse(converter.toString()));
