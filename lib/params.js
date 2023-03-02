'use strict'

const sha256 = require('./sha256')
const SRPInteger = require('./srp-integer')

const input = {
  largeSafePrime: `
    EEAF0AB9 ADB38DD6 9C33F80A FA8FC5E8 60726187 75FF3C0B 9EA2314C
    9C256576 D674DF74 96EA81D3 383B4813 D692C6E0 E0D5D8E2 50B98BE4
    8E495C1D 6089DAD1 5DC7D7B4 6154D6B6 CE8EF4AD 69B15D49 82559B29
    7BCF1885 C529F566 660E57EC 68EDBC3C 05726CC0 2FD4CBF4 976EAA9A
    FD5138FE 8376435B 9FC61D2F C0EB06E3
  `,
  generatorModulo: '02',
  hashFunction: 'sha256',
  hashOutputBytes: (128 / 8)
}

// N    A large safe prime (N = 2q+1, where q is prime)
// g    A generator modulo N
// k    Multiplier parameter (k = H(N, g) in SRP-6a, k = 3 for legacy SRP-6)
// H()  One-way hash function
exports.N = SRPInteger.fromHex(input.largeSafePrime.replace(/\s+/g, ''))
exports.g = SRPInteger.fromHex(input.generatorModulo.replace(/\s+/g, ''))
exports.k = sha256(exports.N, exports.g)
exports.H = sha256

exports.hashOutputBytes = input.hashOutputBytes
