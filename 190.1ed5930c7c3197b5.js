(self.webpackChunkapp_GBTC = self.webpackChunkapp_GBTC || []).push([
    [190], {
        5972: (Ue, H, ne) => {
            "use strict";
            H.Xx = H._w = H.aP = H.KS = H.jQ = void 0;
            ne(5465);
            const ve = ne(6713);
            ne(3403);

            function ee(K) {
                const V = new Float64Array(16);
                if (K)
                    for (let Z = 0; Z < K.length; Z++) V[Z] = K[Z];
                return V
            }
            H.jQ = 64, H.KS = 64, H.aP = 32, new Uint8Array(32)[0] = 9;
            const Te = ee(),
                oe = ee([1]),
                ce = (ee([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), ee([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                Ce = ee([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                me = ee([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            ee([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function le(K, V) {
                for (let Z = 0; Z < 16; Z++) K[Z] = 0 | V[Z]
            }

            function Qe(K) {
                let V = 1;
                for (let Z = 0; Z < 16; Z++) {
                    let d = K[Z] + V + 65535;
                    V = Math.floor(d / 65536), K[Z] = d - 65536 * V
                }
                K[0] += V - 1 + 37 * (V - 1)
            }

            function Ze(K, V, Z) {
                const d = ~(Z - 1);
                for (let F = 0; F < 16; F++) {
                    const Ee = d & (K[F] ^ V[F]);
                    K[F] ^= Ee, V[F] ^= Ee
                }
            }

            function ke(K, V) {
                const Z = ee(),
                    d = ee();
                for (let F = 0; F < 16; F++) d[F] = V[F];
                Qe(d), Qe(d), Qe(d);
                for (let F = 0; F < 2; F++) {
                    Z[0] = d[0] - 65517;
                    for (let De = 1; De < 15; De++) Z[De] = d[De] - 65535 - (Z[De - 1] >> 16 & 1), Z[De - 1] &= 65535;
                    Z[15] = d[15] - 32767 - (Z[14] >> 16 & 1);
                    const Ee = Z[15] >> 16 & 1;
                    Z[14] &= 65535, Ze(d, Z, 1 - Ee)
                }
                for (let F = 0; F < 16; F++) K[2 * F] = 255 & d[F], K[2 * F + 1] = d[F] >> 8
            }

            function Et(K) {
                const V = new Uint8Array(32);
                return ke(V, K), 1 & V[0]
            }

            function Ge(K, V, Z) {
                for (let d = 0; d < 16; d++) K[d] = V[d] + Z[d]
            }

            function B(K, V, Z) {
                for (let d = 0; d < 16; d++) K[d] = V[d] - Z[d]
            }

            function ue(K, V, Z) {
                let d, F, Ee = 0,
                    De = 0,
                    et = 0,
                    vt = 0,
                    nt = 0,
                    at = 0,
                    Jt = 0,
                    Ct = 0,
                    _t = 0,
                    ir = 0,
                    zt = 0,
                    Dt = 0,
                    Rt = 0,
                    ut = 0,
                    lt = 0,
                    ct = 0,
                    Ye = 0,
                    Qt = 0,
                    sr = 0,
                    yr = 0,
                    hr = 0,
                    dr = 0,
                    Sr = 0,
                    Cr = 0,
                    br = 0,
                    Pe = 0,
                    wr = 0,
                    _n = 0,
                    Jn = 0,
                    mn = 0,
                    fn = 0,
                    Nt = Z[0],
                    Ft = Z[1],
                    Lt = Z[2],
                    At = Z[3],
                    Yt = Z[4],
                    or = Z[5],
                    Xt = Z[6],
                    ar = Z[7],
                    er = Z[8],
                    qt = Z[9],
                    $t = Z[10],
                    gt = Z[11],
                    cr = Z[12],
                    tr = Z[13],
                    Ut = Z[14],
                    rr = Z[15];
                d = V[0], Ee += d * Nt, De += d * Ft, et += d * Lt, vt += d * At, nt += d * Yt, at += d * or, Jt += d * Xt, Ct += d * ar, _t += d * er, ir += d * qt, zt += d * $t, Dt += d * gt, Rt += d * cr, ut += d * tr, lt += d * Ut, ct += d * rr, d = V[1], De += d * Nt, et += d * Ft, vt += d * Lt, nt += d * At, at += d * Yt, Jt += d * or, Ct += d * Xt, _t += d * ar, ir += d * er, zt += d * qt, Dt += d * $t, Rt += d * gt, ut += d * cr, lt += d * tr, ct += d * Ut, Ye += d * rr, d = V[2], et += d * Nt, vt += d * Ft, nt += d * Lt, at += d * At, Jt += d * Yt, Ct += d * or, _t += d * Xt, ir += d * ar, zt += d * er, Dt += d * qt, Rt += d * $t, ut += d * gt, lt += d * cr, ct += d * tr, Ye += d * Ut, Qt += d * rr, d = V[3], vt += d * Nt, nt += d * Ft, at += d * Lt, Jt += d * At, Ct += d * Yt, _t += d * or, ir += d * Xt, zt += d * ar, Dt += d * er, Rt += d * qt, ut += d * $t, lt += d * gt, ct += d * cr, Ye += d * tr, Qt += d * Ut, sr += d * rr, d = V[4], nt += d * Nt, at += d * Ft, Jt += d * Lt, Ct += d * At, _t += d * Yt, ir += d * or, zt += d * Xt, Dt += d * ar, Rt += d * er, ut += d * qt, lt += d * $t, ct += d * gt, Ye += d * cr, Qt += d * tr, sr += d * Ut, yr += d * rr, d = V[5], at += d * Nt, Jt += d * Ft, Ct += d * Lt, _t += d * At, ir += d * Yt, zt += d * or, Dt += d * Xt, Rt += d * ar, ut += d * er, lt += d * qt, ct += d * $t, Ye += d * gt, Qt += d * cr, sr += d * tr, yr += d * Ut, hr += d * rr, d = V[6], Jt += d * Nt, Ct += d * Ft, _t += d * Lt, ir += d * At, zt += d * Yt, Dt += d * or, Rt += d * Xt, ut += d * ar, lt += d * er, ct += d * qt, Ye += d * $t, Qt += d * gt, sr += d * cr, yr += d * tr, hr += d * Ut, dr += d * rr, d = V[7], Ct += d * Nt, _t += d * Ft, ir += d * Lt, zt += d * At, Dt += d * Yt, Rt += d * or, ut += d * Xt, lt += d * ar, ct += d * er, Ye += d * qt, Qt += d * $t, sr += d * gt, yr += d * cr, hr += d * tr, dr += d * Ut, Sr += d * rr, d = V[8], _t += d * Nt, ir += d * Ft, zt += d * Lt, Dt += d * At, Rt += d * Yt, ut += d * or, lt += d * Xt, ct += d * ar, Ye += d * er, Qt += d * qt, sr += d * $t, yr += d * gt, hr += d * cr, dr += d * tr, Sr += d * Ut, Cr += d * rr, d = V[9], ir += d * Nt, zt += d * Ft, Dt += d * Lt, Rt += d * At, ut += d * Yt, lt += d * or, ct += d * Xt, Ye += d * ar, Qt += d * er, sr += d * qt, yr += d * $t, hr += d * gt, dr += d * cr, Sr += d * tr, Cr += d * Ut, br += d * rr, d = V[10], zt += d * Nt, Dt += d * Ft, Rt += d * Lt, ut += d * At, lt += d * Yt, ct += d * or, Ye += d * Xt, Qt += d * ar, sr += d * er, yr += d * qt, hr += d * $t, dr += d * gt, Sr += d * cr, Cr += d * tr, br += d * Ut, Pe += d * rr, d = V[11], Dt += d * Nt, Rt += d * Ft, ut += d * Lt, lt += d * At, ct += d * Yt, Ye += d * or, Qt += d * Xt, sr += d * ar, yr += d * er, hr += d * qt, dr += d * $t, Sr += d * gt, Cr += d * cr, br += d * tr, Pe += d * Ut, wr += d * rr, d = V[12], Rt += d * Nt, ut += d * Ft, lt += d * Lt, ct += d * At, Ye += d * Yt, Qt += d * or, sr += d * Xt, yr += d * ar, hr += d * er, dr += d * qt, Sr += d * $t, Cr += d * gt, br += d * cr, Pe += d * tr, wr += d * Ut, _n += d * rr, d = V[13], ut += d * Nt, lt += d * Ft, ct += d * Lt, Ye += d * At, Qt += d * Yt, sr += d * or, yr += d * Xt, hr += d * ar, dr += d * er, Sr += d * qt, Cr += d * $t, br += d * gt, Pe += d * cr, wr += d * tr, _n += d * Ut, Jn += d * rr, d = V[14], lt += d * Nt, ct += d * Ft, Ye += d * Lt, Qt += d * At, sr += d * Yt, yr += d * or, hr += d * Xt, dr += d * ar, Sr += d * er, Cr += d * qt, br += d * $t, Pe += d * gt, wr += d * cr, _n += d * tr, Jn += d * Ut, mn += d * rr, d = V[15], ct += d * Nt, Ye += d * Ft, Qt += d * Lt, sr += d * At, yr += d * Yt, hr += d * or, dr += d * Xt, Sr += d * ar, Cr += d * er, br += d * qt, Pe += d * $t, wr += d * gt, _n += d * cr, Jn += d * tr, mn += d * Ut, fn += d * rr, Ee += 38 * Ye, De += 38 * Qt, et += 38 * sr, vt += 38 * yr, nt += 38 * hr, at += 38 * dr, Jt += 38 * Sr, Ct += 38 * Cr, _t += 38 * br, ir += 38 * Pe, zt += 38 * wr, Dt += 38 * _n, Rt += 38 * Jn, ut += 38 * mn, lt += 38 * fn, F = 1, d = Ee + F + 65535, F = Math.floor(d / 65536), Ee = d - 65536 * F, d = De + F + 65535, F = Math.floor(d / 65536), De = d - 65536 * F, d = et + F + 65535, F = Math.floor(d / 65536), et = d - 65536 * F, d = vt + F + 65535, F = Math.floor(d / 65536), vt = d - 65536 * F, d = nt + F + 65535, F = Math.floor(d / 65536), nt = d - 65536 * F, d = at + F + 65535, F = Math.floor(d / 65536), at = d - 65536 * F, d = Jt + F + 65535, F = Math.floor(d / 65536), Jt = d - 65536 * F, d = Ct + F + 65535, F = Math.floor(d / 65536), Ct = d - 65536 * F, d = _t + F + 65535, F = Math.floor(d / 65536), _t = d - 65536 * F, d = ir + F + 65535, F = Math.floor(d / 65536), ir = d - 65536 * F, d = zt + F + 65535, F = Math.floor(d / 65536), zt = d - 65536 * F, d = Dt + F + 65535, F = Math.floor(d / 65536), Dt = d - 65536 * F, d = Rt + F + 65535, F = Math.floor(d / 65536), Rt = d - 65536 * F, d = ut + F + 65535, F = Math.floor(d / 65536), ut = d - 65536 * F, d = lt + F + 65535, F = Math.floor(d / 65536), lt = d - 65536 * F, d = ct + F + 65535, F = Math.floor(d / 65536), ct = d - 65536 * F, Ee += F - 1 + 37 * (F - 1), F = 1, d = Ee + F + 65535, F = Math.floor(d / 65536), Ee = d - 65536 * F, d = De + F + 65535, F = Math.floor(d / 65536), De = d - 65536 * F, d = et + F + 65535, F = Math.floor(d / 65536), et = d - 65536 * F, d = vt + F + 65535, F = Math.floor(d / 65536), vt = d - 65536 * F, d = nt + F + 65535, F = Math.floor(d / 65536), nt = d - 65536 * F, d = at + F + 65535, F = Math.floor(d / 65536), at = d - 65536 * F, d = Jt + F + 65535, F = Math.floor(d / 65536), Jt = d - 65536 * F, d = Ct + F + 65535, F = Math.floor(d / 65536), Ct = d - 65536 * F, d = _t + F + 65535, F = Math.floor(d / 65536), _t = d - 65536 * F, d = ir + F + 65535, F = Math.floor(d / 65536), ir = d - 65536 * F, d = zt + F + 65535, F = Math.floor(d / 65536), zt = d - 65536 * F, d = Dt + F + 65535, F = Math.floor(d / 65536), Dt = d - 65536 * F, d = Rt + F + 65535, F = Math.floor(d / 65536), Rt = d - 65536 * F, d = ut + F + 65535, F = Math.floor(d / 65536), ut = d - 65536 * F, d = lt + F + 65535, F = Math.floor(d / 65536), lt = d - 65536 * F, d = ct + F + 65535, F = Math.floor(d / 65536), ct = d - 65536 * F, Ee += F - 1 + 37 * (F - 1), K[0] = Ee, K[1] = De, K[2] = et, K[3] = vt, K[4] = nt, K[5] = at, K[6] = Jt, K[7] = Ct, K[8] = _t, K[9] = ir, K[10] = zt, K[11] = Dt, K[12] = Rt, K[13] = ut, K[14] = lt, K[15] = ct
            }

            function v(K, V) {
                ue(K, V, V)
            }

            function A(K, V) {
                const Z = ee(),
                    d = ee(),
                    F = ee(),
                    Ee = ee(),
                    De = ee(),
                    et = ee(),
                    vt = ee(),
                    nt = ee(),
                    at = ee();
                B(Z, K[1], K[0]), B(at, V[1], V[0]), ue(Z, Z, at), Ge(d, K[0], K[1]), Ge(at, V[0], V[1]), ue(d, d, at), ue(F, K[3], V[3]), ue(F, F, ce), ue(Ee, K[2], V[2]), Ge(Ee, Ee, Ee), B(De, d, Z), B(et, Ee, F), Ge(vt, Ee, F), Ge(nt, d, Z), ue(K[0], De, et), ue(K[1], nt, vt), ue(K[2], vt, et), ue(K[3], De, nt)
            }

            function b(K, V, Z) {
                for (let d = 0; d < 4; d++) Ze(K[d], V[d], Z)
            }

            function g(K, V) {
                const Z = ee(),
                    d = ee(),
                    F = ee();
                (function P(K, V) {
                    const Z = ee();
                    let d;
                    for (d = 0; d < 16; d++) Z[d] = V[d];
                    for (d = 253; d >= 0; d--) v(Z, Z), 2 !== d && 4 !== d && ue(Z, Z, V);
                    for (d = 0; d < 16; d++) K[d] = Z[d]
                })(F, V[2]), ue(Z, V[0], F), ue(d, V[1], F), ke(K, d), K[31] ^= Et(Z) << 7
            }

            function G(K, V) {
                const Z = [ee(), ee(), ee(), ee()];
                le(Z[0], Ce), le(Z[1], me), le(Z[2], oe), ue(Z[3], Ce, me),
                    function I(K, V, Z) {
                        le(K[0], Te), le(K[1], oe), le(K[2], oe), le(K[3], Te);
                        for (let d = 255; d >= 0; --d) {
                            const F = Z[d / 8 | 0] >> (7 & d) & 1;
                            b(K, V, F), A(V, K), A(K, K), b(K, V, F)
                        }
                    }(K, Z, V)
            }
            H._w = function he(K) {
                if (K.length !== H.aP) throw new Error(`ed25519: seed must be ${H.aP} bytes`);
                const V = (0, ve.hash)(K);
                V[0] &= 248, V[31] &= 127, V[31] |= 64;
                const Z = new Uint8Array(32),
                    d = [ee(), ee(), ee(), ee()];
                G(d, V), g(Z, d);
                const F = new Uint8Array(64);
                return F.set(K), F.set(Z, 32), {
                    publicKey: Z,
                    secretKey: F
                }
            };
            const re = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function $(K, V) {
                let Z, d, F, Ee;
                for (d = 63; d >= 32; --d) {
                    for (Z = 0, F = d - 32, Ee = d - 12; F < Ee; ++F) V[F] += Z - 16 * V[d] * re[F - (d - 32)], Z = Math.floor((V[F] + 128) / 256), V[F] -= 256 * Z;
                    V[F] += Z, V[d] = 0
                }
                for (Z = 0, F = 0; F < 32; F++) V[F] += Z - (V[31] >> 4) * re[F], Z = V[F] >> 8, V[F] &= 255;
                for (F = 0; F < 32; F++) V[F] -= Z * re[F];
                for (d = 0; d < 32; d++) V[d + 1] += V[d] >> 8, K[d] = 255 & V[d]
            }

            function we(K) {
                const V = new Float64Array(64);
                for (let Z = 0; Z < 64; Z++) V[Z] = K[Z];
                for (let Z = 0; Z < 64; Z++) K[Z] = 0;
                $(K, V)
            }
            H.Xx = function He(K, V) {
                const Z = new Float64Array(64),
                    d = [ee(), ee(), ee(), ee()],
                    F = (0, ve.hash)(K.subarray(0, 32));
                F[0] &= 248, F[31] &= 127, F[31] |= 64;
                const Ee = new Uint8Array(64);
                Ee.set(F.subarray(32), 32);
                const De = new ve.SHA512;
                De.update(Ee.subarray(32)), De.update(V);
                const et = De.digest();
                De.clean(), we(et), G(d, et), g(Ee, d), De.reset(), De.update(Ee.subarray(0, 32)), De.update(K.subarray(32)), De.update(V);
                const vt = De.digest();
                we(vt);
                for (let nt = 0; nt < 32; nt++) Z[nt] = et[nt];
                for (let nt = 0; nt < 32; nt++)
                    for (let at = 0; at < 32; at++) Z[nt + at] += vt[nt] * F[at];
                return $(Ee.subarray(32), Z), Ee
            }
        },
        6713: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            });
            var y = ne(9546),
                pe = ne(3403);
            H.DIGEST_LENGTH = 64, H.BLOCK_SIZE = 128;
            var ve = function() {
                function Te() {
                    this.digestLength = H.DIGEST_LENGTH, this.blockSize = H.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return Te.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, Te.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, Te.prototype.clean = function() {
                    pe.wipe(this._buffer), pe.wipe(this._tempHi), pe.wipe(this._tempLo), this.reset()
                }, Te.prototype.update = function(oe, ae) {
                    if (void 0 === ae && (ae = oe.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var ce = 0;
                    if (this._bytesHashed += ae, this._bufferLength > 0) {
                        for (; this._bufferLength < H.BLOCK_SIZE && ae > 0;) this._buffer[this._bufferLength++] = oe[ce++], ae--;
                        this._bufferLength === this.blockSize && (ee(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (ae >= this.blockSize && (ce = ee(this._tempHi, this._tempLo, this._stateHi, this._stateLo, oe, ce, ae), ae %= this.blockSize); ae > 0;) this._buffer[this._bufferLength++] = oe[ce++], ae--;
                    return this
                }, Te.prototype.finish = function(oe) {
                    if (!this._finished) {
                        var ae = this._bytesHashed,
                            ce = this._bufferLength,
                            Ce = ae / 536870912 | 0,
                            me = ae << 3,
                            ge = ae % 128 < 112 ? 128 : 256;
                        this._buffer[ce] = 128;
                        for (var le = ce + 1; le < ge - 8; le++) this._buffer[le] = 0;
                        y.writeUint32BE(Ce, this._buffer, ge - 8), y.writeUint32BE(me, this._buffer, ge - 4), ee(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, ge), this._finished = !0
                    }
                    for (le = 0; le < this.digestLength / 8; le++) y.writeUint32BE(this._stateHi[le], oe, 8 * le), y.writeUint32BE(this._stateLo[le], oe, 8 * le + 4);
                    return this
                }, Te.prototype.digest = function() {
                    var oe = new Uint8Array(this.digestLength);
                    return this.finish(oe), oe
                }, Te.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, Te.prototype.restoreState = function(oe) {
                    return this._stateHi.set(oe.stateHi), this._stateLo.set(oe.stateLo), this._bufferLength = oe.bufferLength, oe.buffer && this._buffer.set(oe.buffer), this._bytesHashed = oe.bytesHashed, this._finished = !1, this
                }, Te.prototype.cleanSavedState = function(oe) {
                    pe.wipe(oe.stateHi), pe.wipe(oe.stateLo), oe.buffer && pe.wipe(oe.buffer), oe.bufferLength = 0, oe.bytesHashed = 0
                }, Te
            }();
            H.SHA512 = ve;
            var E = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function ee(Te, oe, ae, ce, Ce, me, ge) {
                for (var g, I, G, he, D, W, re, $, le = ae[0], Qe = ae[1], Ze = ae[2], ke = ae[3], We = ae[4], xt = ae[5], Et = ae[6], It = ae[7], Ge = ce[0], B = ce[1], ue = ce[2], v = ce[3], P = ce[4], x = ce[5], A = ce[6], b = ce[7]; ge >= 128;) {
                    for (var we = 0; we < 16; we++) Te[we] = y.readUint32BE(Ce, He = 8 * we + me), oe[we] = y.readUint32BE(Ce, He + 4);
                    for (we = 0; we < 80; we++) {
                        var d, Jt, Zt = Qe,
                            tn = Ze,
                            pt = ke,
                            K = We,
                            V = xt,
                            Z = Et,
                            Ee = B,
                            De = ue,
                            et = v,
                            vt = P,
                            nt = x,
                            at = A;
                        if (D = 65535 & (I = b), W = I >>> 16, re = 65535 & (g = It), $ = g >>> 16, D += 65535 & (I = (P >>> 14 | We << 18) ^ (P >>> 18 | We << 14) ^ (We >>> 9 | P << 23)), W += I >>> 16, re += 65535 & (g = (We >>> 14 | P << 18) ^ (We >>> 18 | P << 14) ^ (P >>> 9 | We << 23)), $ += g >>> 16, D += 65535 & (I = P & x ^ ~P & A), W += I >>> 16, re += 65535 & (g = We & xt ^ ~We & Et), $ += g >>> 16, D += 65535 & (I = E[2 * we + 1]), W += I >>> 16, re += 65535 & (g = E[2 * we]), $ += g >>> 16, W += (I = oe[we % 16]) >>> 16, re += 65535 & (g = Te[we % 16]), $ += g >>> 16, re += (W += (D += 65535 & I) >>> 16) >>> 16, D = 65535 & (I = he = 65535 & D | W << 16), W = I >>> 16, re = 65535 & (g = G = 65535 & re | ($ += re >>> 16) << 16), $ = g >>> 16, D += 65535 & (I = (Ge >>> 28 | le << 4) ^ (le >>> 2 | Ge << 30) ^ (le >>> 7 | Ge << 25)), W += I >>> 16, re += 65535 & (g = (le >>> 28 | Ge << 4) ^ (Ge >>> 2 | le << 30) ^ (Ge >>> 7 | le << 25)), $ += g >>> 16, W += (I = Ge & B ^ Ge & ue ^ B & ue) >>> 16, re += 65535 & (g = le & Qe ^ le & Ze ^ Qe & Ze), $ += g >>> 16, d = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, Jt = 65535 & D | W << 16, D = 65535 & (I = et), W = I >>> 16, re = 65535 & (g = pt), $ = g >>> 16, W += (I = he) >>> 16, re += 65535 & (g = G), $ += g >>> 16, Qe = le, Ze = Zt, ke = tn, We = pt = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, xt = K, Et = V, It = Z, le = d, B = Ge, ue = Ee, v = De, P = et = 65535 & D | W << 16, x = vt, A = nt, b = at, Ge = Jt, we % 16 == 15)
                            for (var He = 0; He < 16; He++) D = 65535 & (I = oe[He]), W = I >>> 16, re = 65535 & (g = Te[He]), $ = g >>> 16, D += 65535 & (I = oe[(He + 9) % 16]), W += I >>> 16, re += 65535 & (g = Te[(He + 9) % 16]), $ += g >>> 16, D += 65535 & (I = ((he = oe[(He + 1) % 16]) >>> 1 | (G = Te[(He + 1) % 16]) << 31) ^ (he >>> 8 | G << 24) ^ (he >>> 7 | G << 25)), W += I >>> 16, re += 65535 & (g = (G >>> 1 | he << 31) ^ (G >>> 8 | he << 24) ^ G >>> 7), $ += g >>> 16, W += (I = ((he = oe[(He + 14) % 16]) >>> 19 | (G = Te[(He + 14) % 16]) << 13) ^ (G >>> 29 | he << 3) ^ (he >>> 6 | G << 26)) >>> 16, re += 65535 & (g = (G >>> 19 | he << 13) ^ (he >>> 29 | G << 3) ^ G >>> 6), $ += g >>> 16, Te[He] = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, oe[He] = 65535 & D | W << 16
                    }
                    D = 65535 & (I = Ge), W = I >>> 16, re = 65535 & (g = le), $ = g >>> 16, W += (I = ce[0]) >>> 16, re += 65535 & (g = ae[0]), $ += g >>> 16, ae[0] = le = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[0] = Ge = 65535 & D | W << 16, D = 65535 & (I = B), W = I >>> 16, re = 65535 & (g = Qe), $ = g >>> 16, W += (I = ce[1]) >>> 16, re += 65535 & (g = ae[1]), $ += g >>> 16, ae[1] = Qe = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[1] = B = 65535 & D | W << 16, D = 65535 & (I = ue), W = I >>> 16, re = 65535 & (g = Ze), $ = g >>> 16, W += (I = ce[2]) >>> 16, re += 65535 & (g = ae[2]), $ += g >>> 16, ae[2] = Ze = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[2] = ue = 65535 & D | W << 16, D = 65535 & (I = v), W = I >>> 16, re = 65535 & (g = ke), $ = g >>> 16, W += (I = ce[3]) >>> 16, re += 65535 & (g = ae[3]), $ += g >>> 16, ae[3] = ke = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[3] = v = 65535 & D | W << 16, D = 65535 & (I = P), W = I >>> 16, re = 65535 & (g = We), $ = g >>> 16, W += (I = ce[4]) >>> 16, re += 65535 & (g = ae[4]), $ += g >>> 16, ae[4] = We = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[4] = P = 65535 & D | W << 16, D = 65535 & (I = x), W = I >>> 16, re = 65535 & (g = xt), $ = g >>> 16, W += (I = ce[5]) >>> 16, re += 65535 & (g = ae[5]), $ += g >>> 16, ae[5] = xt = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[5] = x = 65535 & D | W << 16, D = 65535 & (I = A), W = I >>> 16, re = 65535 & (g = Et), $ = g >>> 16, W += (I = ce[6]) >>> 16, re += 65535 & (g = ae[6]), $ += g >>> 16, ae[6] = Et = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[6] = A = 65535 & D | W << 16, D = 65535 & (I = b), W = I >>> 16, re = 65535 & (g = It), $ = g >>> 16, W += (I = ce[7]) >>> 16, re += 65535 & (g = ae[7]), $ += g >>> 16, ae[7] = It = 65535 & (re += (W += (D += 65535 & I) >>> 16) >>> 16) | ($ += re >>> 16) << 16, ce[7] = b = 65535 & D | W << 16, me += 128, ge -= 128
                }
                return me
            }
            H.hash = function be(Te) {
                var oe = new ve;
                oe.update(Te);
                var ae = oe.digest();
                return oe.clean(), ae
            }
        },
        7263: (Ue, H) => {
            "use strict";

            function ne() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function y() {
                const ve = ne();
                return ve.subtle || ve.webkitSubtle
            }
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.isBrowserCryptoAvailable = H.getSubtleCrypto = H.getBrowerCrypto = void 0, H.getBrowerCrypto = ne, H.getSubtleCrypto = y, H.isBrowserCryptoAvailable = function pe() {
                return !!ne() && !!y()
            }
        },
        4574: (Ue, H) => {
            "use strict";

            function ne() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function y() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.isBrowser = H.isNode = H.isReactNative = void 0, H.isReactNative = ne, H.isNode = y, H.isBrowser = function pe() {
                return !ne() && !y()
            }
        },
        2299: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            });
            const y = ne(4308);
            y.__exportStar(ne(7263), H), y.__exportStar(ne(4574), H)
        },
        8190: (Ue, H, ne) => {
            "use strict";
            ne.r(H), ne.d(H, {
                EthereumProvider: () => cy,
                OPTIONAL_EVENTS: () => ku,
                OPTIONAL_METHODS: () => Vu,
                REQUIRED_EVENTS: () => Ms,
                REQUIRED_METHODS: () => js,
                default: () => zs
            });
            var y = ne(5861),
                pe = ne(2016),
                ve = ne.n(pe),
                E = ne(4778);
            const ee = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                be = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                Te = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function oe(f, r) {
                if (!("__proto__" === f || "constructor" === f && r && "object" == typeof r && "prototype" in r)) return r;
                ! function ae(f) {
                    console.warn(`[destr] Dropping "${f}" key to prevent prototype pollution.`)
                }(f)
            }

            function ce(f, r = {}) {
                if ("string" != typeof f) return f;
                const t = f.trim();
                if ('"' === f[0] && f.endsWith('"') && !f.includes("\\")) return t.slice(1, -1);
                if (t.length <= 9) {
                    const o = t.toLowerCase();
                    if ("true" === o) return !0;
                    if ("false" === o) return !1;
                    if ("undefined" === o) return;
                    if ("null" === o) return null;
                    if ("nan" === o) return Number.NaN;
                    if ("infinity" === o) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === o) return Number.NEGATIVE_INFINITY
                }
                if (!Te.test(f)) {
                    if (r.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return f
                }
                try {
                    if (ee.test(f) || be.test(f)) {
                        if (r.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(f, oe)
                    }
                    return JSON.parse(f)
                } catch (o) {
                    if (r.strict) throw o;
                    return f
                }
            }

            function ge(f, ...r) {
                try {
                    return function me(f) {
                        return f && "function" == typeof f.then ? f : Promise.resolve(f)
                    }(f(...r))
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function Ze(f) {
                if (function le(f) {
                        const r = typeof f;
                        return null === f || "object" !== r && "function" !== r
                    }(f)) return String(f);
                if (function Qe(f) {
                        const r = Object.getPrototypeOf(f);
                        return !r || r.isPrototypeOf(Object)
                    }(f) || Array.isArray(f)) return JSON.stringify(f);
                if ("function" == typeof f.toJSON) return Ze(f.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function ke() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const We = "base64:";

            function B(f) {
                return f ? f.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function ue(...f) {
                return B(f.join(":"))
            }

            function v(f) {
                return (f = B(f)) ? f + ":" : ""
            }
            const A = () => {
                const f = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: r => f.has(r),
                    getItem: r => f.get(r) ? ? null,
                    getItemRaw: r => f.get(r) ? ? null,
                    setItem(r, t) {
                        f.set(r, t)
                    },
                    setItemRaw(r, t) {
                        f.set(r, t)
                    },
                    removeItem(r) {
                        f.delete(r)
                    },
                    getKeys: () => Array.from(f.keys()),
                    clear() {
                        f.clear()
                    },
                    dispose() {
                        f.clear()
                    }
                }
            };

            function D(f, r, t) {
                return f.watch ? f.watch((o, a) => r(o, t + a)) : () => {}
            }

            function W(f) {
                return re.apply(this, arguments)
            }

            function re() {
                return (re = (0, y.Z)(function*(f) {
                    "function" == typeof f.dispose && (yield ge(f.dispose))
                })).apply(this, arguments)
            }

            function we(f) {
                return new Promise((r, t) => {
                    f.oncomplete = f.onsuccess = () => r(f.result), f.onabort = f.onerror = () => t(f.error)
                })
            }

            function He(f, r) {
                const t = indexedDB.open(f);
                t.onupgradeneeded = () => t.result.createObjectStore(r);
                const o = we(t);
                return (a, u) => o.then(h => u(h.transaction(r, a).objectStore(r)))
            }
            let Ne;

            function Zt() {
                return Ne || (Ne = He("keyval-store", "keyval")), Ne
            }

            function tn(f, r = Zt()) {
                return r("readonly", t => we(t.get(f)))
            }
            const at = f => JSON.stringify(f, (r, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                Jt = f => {
                    const t = f.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (o, a) => "string" == typeof a && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a)
                };

            function Ct(f) {
                if ("string" != typeof f) throw new Error("Cannot safe json parse value of type " + typeof f);
                try {
                    return Jt(f)
                } catch {
                    return f
                }
            }

            function _t(f) {
                return "string" == typeof f ? f : at(f) || ""
            }
            var Dt = (f = {}) => {
                const r = f.base && f.base.length > 0 ? `${f.base}:` : "",
                    t = a => r + a;
                let o;
                return f.dbName && f.storeName && (o = He(f.dbName, f.storeName)), {
                    name: "idb-keyval",
                    options: f,
                    hasItem: a => (0, y.Z)(function*() {
                        return !(typeof(yield tn(t(a), o)) > "u")
                    })(),
                    getItem: a => (0, y.Z)(function*() {
                        return (yield tn(t(a), o)) ? ? null
                    })(),
                    setItem: (a, u) => function pt(f, r, t = Zt()) {
                        return t("readwrite", o => (o.put(r, f), we(o.transaction)))
                    }(t(a), u, o),
                    removeItem: a => function d(f, r = Zt()) {
                        return r("readwrite", t => (t.delete(f), we(t.transaction)))
                    }(t(a), o),
                    getKeys: () => function et(f = Zt()) {
                        return f("readonly", r => {
                            if (r.getAllKeys) return we(r.getAllKeys());
                            const t = [];
                            return function De(f, r) {
                                return f.openCursor().onsuccess = function() {
                                    this.result && (r(this.result), this.result.continue())
                                }, we(f.transaction)
                            }(r, o => t.push(o.key)).then(() => t)
                        })
                    }(o),
                    clear: () => function Ee(f = Zt()) {
                        return f("readwrite", r => (r.clear(), we(r.transaction)))
                    }(o)
                }
            };
            class lt {
                constructor() {
                    this.indexedDb = function b(f = {}) {
                        const r = {
                                mounts: {
                                    "": f.driver || A()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            t = O => {
                                for (const N of r.mountpoints)
                                    if (O.startsWith(N)) return {
                                        base: N,
                                        relativeKey: O.slice(N.length),
                                        driver: r.mounts[N]
                                    };
                                return {
                                    base: "",
                                    relativeKey: O,
                                    driver: r.mounts[""]
                                }
                            },
                            o = (O, N) => r.mountpoints.filter(q => q.startsWith(O) || N && O.startsWith(q)).map(q => ({
                                relativeBase: O.length > q.length ? O.slice(q.length) : void 0,
                                mountpoint: q,
                                driver: r.mounts[q]
                            })),
                            a = (O, N) => {
                                if (r.watching) {
                                    N = B(N);
                                    for (const q of r.watchListeners) q(O, N)
                                }
                            },
                            u = function() {
                                var O = (0, y.Z)(function*() {
                                    if (!r.watching) {
                                        r.watching = !0;
                                        for (const N in r.mounts) r.unwatch[N] = yield D(r.mounts[N], a, N)
                                    }
                                });
                                return function() {
                                    return O.apply(this, arguments)
                                }
                            }(),
                            h = function() {
                                var O = (0, y.Z)(function*() {
                                    if (r.watching) {
                                        for (const N in r.unwatch) yield r.unwatch[N]();
                                        r.unwatch = {}, r.watching = !1
                                    }
                                });
                                return function() {
                                    return O.apply(this, arguments)
                                }
                            }(),
                            m = (O, N, q) => {
                                const J = new Map,
                                    fe = se => {
                                        let Oe = J.get(se.base);
                                        return Oe || (Oe = {
                                            driver: se.driver,
                                            base: se.base,
                                            items: []
                                        }, J.set(se.base, Oe)), Oe
                                    };
                                for (const se of O) {
                                    const Oe = "string" == typeof se,
                                        ze = B(Oe ? se : se.key),
                                        Je = Oe ? void 0 : se.value,
                                        Kt = Oe || !se.options ? N : { ...N,
                                            ...se.options
                                        },
                                        st = t(ze);
                                    fe(st).items.push({
                                        key: ze,
                                        value: Je,
                                        relativeKey: st.relativeKey,
                                        options: Kt
                                    })
                                }
                                return Promise.all([...J.values()].map(se => q(se))).then(se => se.flat())
                            },
                            T = {
                                hasItem(O, N = {}) {
                                    O = B(O);
                                    const {
                                        relativeKey: q,
                                        driver: J
                                    } = t(O);
                                    return ge(J.hasItem, q, N)
                                },
                                getItem(O, N = {}) {
                                    O = B(O);
                                    const {
                                        relativeKey: q,
                                        driver: J
                                    } = t(O);
                                    return ge(J.getItem, q, N).then(fe => ce(fe))
                                },
                                getItems: (O, N) => m(O, N, q => q.driver.getItems ? ge(q.driver.getItems, q.items.map(J => ({
                                    key: J.relativeKey,
                                    options: J.options
                                })), N).then(J => J.map(fe => ({
                                    key: ue(q.base, fe.key),
                                    value: ce(fe.value)
                                }))) : Promise.all(q.items.map(J => ge(q.driver.getItem, J.relativeKey, J.options).then(fe => ({
                                    key: J.key,
                                    value: ce(fe)
                                }))))),
                                getItemRaw(O, N = {}) {
                                    O = B(O);
                                    const {
                                        relativeKey: q,
                                        driver: J
                                    } = t(O);
                                    return J.getItemRaw ? ge(J.getItemRaw, q, N) : ge(J.getItem, q, N).then(fe => function Et(f) {
                                        return "string" == typeof f && f.startsWith(We) ? (ke(), Buffer.from(f.slice(7), "base64")) : f
                                    }(fe))
                                },
                                setItem: (O, N, q = {}) => (0, y.Z)(function*() {
                                    if (void 0 === N) return T.removeItem(O);
                                    O = B(O);
                                    const {
                                        relativeKey: J,
                                        driver: fe
                                    } = t(O);
                                    fe.setItem && (yield ge(fe.setItem, J, Ze(N), q), fe.watch || a("update", O))
                                })(),
                                setItems: (O, N) => (0, y.Z)(function*() {
                                    yield m(O, N, function() {
                                        var q = (0, y.Z)(function*(J) {
                                            if (J.driver.setItems) return ge(J.driver.setItems, J.items.map(fe => ({
                                                key: fe.relativeKey,
                                                value: Ze(fe.value),
                                                options: fe.options
                                            })), N);
                                            J.driver.setItem && (yield Promise.all(J.items.map(fe => ge(J.driver.setItem, fe.relativeKey, Ze(fe.value), fe.options))))
                                        });
                                        return function(J) {
                                            return q.apply(this, arguments)
                                        }
                                    }())
                                })(),
                                setItemRaw: (O, N, q = {}) => (0, y.Z)(function*() {
                                    if (void 0 === N) return T.removeItem(O, q);
                                    O = B(O);
                                    const {
                                        relativeKey: J,
                                        driver: fe
                                    } = t(O);
                                    if (fe.setItemRaw) yield ge(fe.setItemRaw, J, N, q);
                                    else {
                                        if (!fe.setItem) return;
                                        yield ge(fe.setItem, J, function xt(f) {
                                            if ("string" == typeof f) return f;
                                            ke();
                                            const r = Buffer.from(f).toString("base64");
                                            return We + r
                                        }(N), q)
                                    }
                                    fe.watch || a("update", O)
                                })(),
                                removeItem: (O, N = {}) => (0, y.Z)(function*() {
                                    "boolean" == typeof N && (N = {
                                        removeMeta: N
                                    }), O = B(O);
                                    const {
                                        relativeKey: q,
                                        driver: J
                                    } = t(O);
                                    J.removeItem && (yield ge(J.removeItem, q, N), (N.removeMeta || N.removeMata) && (yield ge(J.removeItem, q + "$", N)), J.watch || a("remove", O))
                                })(),
                                getMeta: (O, N = {}) => (0, y.Z)(function*() {
                                    "boolean" == typeof N && (N = {
                                        nativeOnly: N
                                    }), O = B(O);
                                    const {
                                        relativeKey: q,
                                        driver: J
                                    } = t(O), fe = Object.create(null);
                                    if (J.getMeta && Object.assign(fe, yield ge(J.getMeta, q, N)), !N.nativeOnly) {
                                        const se = yield ge(J.getItem, q + "$", N).then(Oe => ce(Oe));
                                        se && "object" == typeof se && ("string" == typeof se.atime && (se.atime = new Date(se.atime)), "string" == typeof se.mtime && (se.mtime = new Date(se.mtime)), Object.assign(fe, se))
                                    }
                                    return fe
                                })(),
                                setMeta(O, N, q = {}) {
                                    return this.setItem(O + "$", N, q)
                                },
                                removeMeta(O, N = {}) {
                                    return this.removeItem(O + "$", N)
                                },
                                getKeys: (O, N = {}) => (0, y.Z)(function*() {
                                    O = v(O);
                                    const q = o(O, !0);
                                    let J = [];
                                    const fe = [];
                                    for (const se of q) {
                                        const ze = (yield ge(se.driver.getKeys, se.relativeBase, N)).map(Je => se.mountpoint + B(Je)).filter(Je => !J.some(Kt => Je.startsWith(Kt)));
                                        fe.push(...ze), J = [se.mountpoint, ...J.filter(Je => !Je.startsWith(se.mountpoint))]
                                    }
                                    return fe.filter(O ? se => se.startsWith(O) && !se.endsWith("$") : se => !se.endsWith("$"))
                                })(),
                                clear: (O, N = {}) => (0, y.Z)(function*() {
                                    O = v(O), yield Promise.all(o(O, !1).map(function() {
                                        var q = (0, y.Z)(function*(J) {
                                            if (J.driver.clear) return ge(J.driver.clear, J.relativeBase, N);
                                            if (J.driver.removeItem) {
                                                const fe = yield J.driver.getKeys(J.relativeBase || "", N);
                                                return Promise.all(fe.map(se => J.driver.removeItem(se, N)))
                                            }
                                        });
                                        return function(J) {
                                            return q.apply(this, arguments)
                                        }
                                    }()))
                                })(),
                                dispose: () => (0, y.Z)(function*() {
                                    yield Promise.all(Object.values(r.mounts).map(O => W(O)))
                                })(),
                                watch: O => (0, y.Z)(function*() {
                                    return yield u(), r.watchListeners.push(O), (0, y.Z)(function*() {
                                        r.watchListeners = r.watchListeners.filter(N => N !== O), 0 === r.watchListeners.length && (yield h())
                                    })
                                })(),
                                unwatch: () => (0, y.Z)(function*() {
                                    r.watchListeners = [], yield h()
                                })(),
                                mount(O, N) {
                                    if ((O = v(O)) && r.mounts[O]) throw new Error(`already mounted at ${O}`);
                                    return O && (r.mountpoints.push(O), r.mountpoints.sort((q, J) => J.length - q.length)), r.mounts[O] = N, r.watching && Promise.resolve(D(N, a, O)).then(q => {
                                        r.unwatch[O] = q
                                    }).catch(console.error), T
                                },
                                unmount: (O, N = !0) => (0, y.Z)(function*() {
                                    (O = v(O)) && r.mounts[O] && (r.watching && O in r.unwatch && (r.unwatch[O](), delete r.unwatch[O]), N && (yield W(r.mounts[O])), r.mountpoints = r.mountpoints.filter(q => q !== O), delete r.mounts[O])
                                })(),
                                getMount(O = "") {
                                    O = B(O) + ":";
                                    const N = t(O);
                                    return {
                                        driver: N.driver,
                                        base: N.base
                                    }
                                },
                                getMounts: (O = "", N = {}) => (O = B(O), o(O, N.parents).map(J => ({
                                    driver: J.driver,
                                    base: J.mountpoint
                                })))
                            };
                        return T
                    }({
                        driver: Dt({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                getKeys() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return r.indexedDb.getKeys()
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return (yield r.indexedDb.getItems(yield r.indexedDb.getKeys())).map(t => [t.key, t.value])
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        const o = yield t.indexedDb.getItem(r);
                        if (null !== o) return o
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        yield o.indexedDb.setItem(r, _t(t))
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.indexedDb.removeItem(r)
                    })()
                }
            }
            var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                Ye = {
                    exports: {}
                };

            function Qt(f) {
                var r;
                return [f[0], Ct(null != (r = f[1]) ? r : "")]
            }! function() {
                let f;

                function r() {}
                f = r, f.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, f.prototype.setItem = function(t, o) {
                    this[t] = String(o)
                }, f.prototype.removeItem = function(t) {
                    delete this[t]
                }, f.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach(function(o) {
                        t[o] = void 0, delete t[o]
                    })
                }, f.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, f.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), Ye.exports = typeof ct < "u" && ct.localStorage ? ct.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new r
            }();
            class sr {
                constructor() {
                    this.localStorage = Ye.exports
                }
                getKeys() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return Object.keys(r.localStorage)
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return Object.entries(r.localStorage).map(Qt)
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        const o = t.localStorage.getItem(r);
                        if (null !== o) return Ct(o)
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        o.localStorage.setItem(r, _t(t))
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        t.localStorage.removeItem(r)
                    })()
                }
            }
            const dr = function() {
                    var f = (0, y.Z)(function*(r, t, o) {
                        const a = "wc_storage_version",
                            u = yield t.getItem(a);
                        if (u && u >= 1) return void o(t);
                        const h = yield r.getKeys();
                        if (!h.length) return void o(t);
                        const m = [];
                        for (; h.length;) {
                            const T = h.shift();
                            if (!T) continue;
                            const O = T.toLowerCase();
                            if (O.includes("wc@") || O.includes("walletconnect") || O.includes("wc_") || O.includes("wallet_connect")) {
                                const N = yield r.getItem(T);
                                yield t.setItem(T, N), m.push(T)
                            }
                        }
                        yield t.setItem(a, 1), o(t), Sr(r, m)
                    });
                    return function(t, o, a) {
                        return f.apply(this, arguments)
                    }
                }(),
                Sr = function() {
                    var f = (0, y.Z)(function*(r, t) {
                        t.length && t.forEach(function() {
                            var o = (0, y.Z)(function*(a) {
                                yield r.removeItem(a)
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    });
                    return function(t, o) {
                        return f.apply(this, arguments)
                    }
                }();
            class Cr {
                constructor() {
                    this.initialized = !1, this.setInitialized = t => {
                        this.storage = t, this.initialized = !0
                    };
                    const r = new sr;
                    this.storage = r;
                    try {
                        const t = new lt;
                        dr(r, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                getKeys() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.initialize(), r.storage.getKeys()
                    })()
                }
                getEntries() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.initialize(), r.storage.getEntries()
                    })()
                }
                getItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        return yield t.initialize(), t.storage.getItem(r)
                    })()
                }
                setItem(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        return yield o.initialize(), o.storage.setItem(r, t)
                    })()
                }
                removeItem(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        return yield t.initialize(), t.storage.removeItem(r)
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.initialized || (yield new Promise(t => {
                            const o = setInterval(() => {
                                r.initialized && (clearInterval(o), t())
                            }, 20)
                        }))
                    })()
                }
            }
            var br = ne(986),
                Pe = ne(2997),
                wr = ne(2108);
            class _n extends wr.q {
                constructor(r) {
                    super(), this.opts = r, this.protocol = "wc", this.version = 2
                }
            }
            class mn extends wr.q {
                constructor(r, t) {
                    super(), this.core = r, this.logger = t, this.records = new Map
                }
            }
            class fn {
                constructor(r, t) {
                    this.logger = r, this.core = t
                }
            }
            class Nt extends wr.q {
                constructor(r, t) {
                    super(), this.relayer = r, this.logger = t
                }
            }
            class Ft extends wr.q {
                constructor(r) {
                    super()
                }
            }
            class Lt {
                constructor(r, t, o, a) {
                    this.core = r, this.logger = t, this.name = o
                }
            }
            class Yt extends wr.q {
                constructor(r, t) {
                    super(), this.relayer = r, this.logger = t
                }
            }
            class Xt extends wr.q {
                constructor(r, t) {
                    super(), this.core = r, this.logger = t
                }
            }
            class er {
                constructor(r, t) {
                    this.projectId = r, this.logger = t
                }
            }
            class qt {
                constructor(r, t) {
                    this.projectId = r, this.logger = t
                }
            }
            class gt {
                constructor(r) {
                    this.opts = r, this.protocol = "wc", this.version = 2
                }
            }
            class tr {
                constructor(r) {
                    this.client = r
                }
            }
            var Ut = ne(5972),
                rr = ne(5465),
                Ie = ne(5409);
            const ws = "base64url",
                Lo = "utf8",
                bn = ":",
                Mo = "did",
                Zo = "key",
                xs = "base58btc",
                zo = "z",
                qo = "K36";
            var Uo = ne(1376),
                Hr = ne(878),
                $i = ne(2269);

            function di(f) {
                return (0, Hr.B)((0, $i.m)(_t(f), Lo), ws)
            }

            function Es(f) {
                const r = (0, $i.m)(qo, xs),
                    t = zo + (0, Hr.B)((0, Uo.z)([r, f]), xs);
                return [Mo, Zo, t].join(bn)
            }

            function Ho(f) {
                return (0, Hr.B)(f, ws)
            }

            function Ps(f = (0, rr.randomBytes)(32)) {
                return Ut._w(f)
            }

            function Ui() {
                return (Ui = (0, y.Z)(function*(f, r, t, o, a = (0, Ie.fromMiliseconds)(Date.now())) {
                    const u = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        T = {
                            iss: Es(o.publicKey),
                            sub: f,
                            aud: r,
                            iat: a,
                            exp: a + t
                        },
                        O = function Bo(f) {
                            return (0, $i.m)([di(f.header), di(f.payload)].join("."), "utf8")
                        }({
                            header: u,
                            payload: T
                        });
                    return function Is(f) {
                        return [di(f.header), di(f.payload), Ho(f.signature)].join(".")
                    }({
                        header: u,
                        payload: T,
                        signature: Ut.Xx(o.secretKey, O)
                    })
                })).apply(this, arguments)
            }
            ne(2768);
            var ko = ne(3544);
            const Os = "INTERNAL_ERROR",
                Br = "SERVER_ERROR",
                Wo = [-32700, -32600, -32601, -32602, -32603],
                Qn = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [Os]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [Br]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                Rs = Br;

            function Ts(f) {
                return Object.keys(Qn).includes(f) ? Qn[f] : Qn[Rs]
            }

            function _i(f, r, t) {
                return f.message.includes("getaddrinfo ENOTFOUND") || f.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${r}`) : f
            }
            var Jo = ne(2299);

            function mi(f = 3) {
                return Date.now() * Math.pow(10, f) + Math.floor(Math.random() * Math.pow(10, f))
            }

            function Hi(f = 6) {
                return BigInt(mi(f))
            }

            function Kr(f, r, t) {
                return {
                    id: t || mi(),
                    jsonrpc: "2.0",
                    method: f,
                    params: r
                }
            }

            function Xn(f, r) {
                return {
                    id: f,
                    jsonrpc: "2.0",
                    result: r
                }
            }

            function bi(f, r, t) {
                return {
                    id: f,
                    jsonrpc: "2.0",
                    error: Yo(r, t)
                }
            }

            function Yo(f, r) {
                return typeof f > "u" ? Ts(Os) : ("string" == typeof f && (f = Object.assign(Object.assign({}, Ts(Br)), {
                    message: f
                })), typeof r < "u" && (f.data = r), function hn(f) {
                    return Wo.includes(f)
                }(f.code) && (f = function Yn(f) {
                    return Object.values(Qn).find(t => t.code === f) || Qn[Rs]
                }(f.code)), f)
            }
            class Xo {}
            class L extends Xo {
                constructor() {
                    super()
                }
            }
            class te extends L {
                constructor(r) {
                    super()
                }
            }

            function mt(f, r) {
                const t = function Le(f) {
                    const r = f.match(new RegExp(/^\w+:/, "gi"));
                    if (r && r.length) return r[0]
                }(f);
                return !(typeof t > "u") && new RegExp(r).test(t)
            }

            function Ht(f) {
                return mt(f, "^https?:")
            }

            function nr(f) {
                return mt(f, "^wss?:")
            }

            function xr(f) {
                return "object" == typeof f && "id" in f && "jsonrpc" in f && "2.0" === f.jsonrpc
            }

            function Or(f) {
                return xr(f) && "method" in f
            }

            function Bt(f) {
                return xr(f) && (jt(f) || Pt(f))
            }

            function jt(f) {
                return "result" in f
            }

            function Pt(f) {
                return "error" in f
            }
            class ur extends te {
                constructor(r) {
                    super(r), this.events = new pe.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(r), this.connection.connected && this.registerEventListeners()
                }
                connect(r = this.connection) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.open(r)
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.close()
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                request(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        return o.requestStrict(Kr(r.method, r.params || [], r.id || Hi().toString()), t)
                    })()
                }
                requestStrict(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        return new Promise(function() {
                            var a = (0, y.Z)(function*(u, h) {
                                if (!o.connection.connected) try {
                                    yield o.open()
                                } catch (m) {
                                    h(m)
                                }
                                o.events.on(`${r.id}`, m => {
                                    Pt(m) ? h(m.error) : u(m.result)
                                });
                                try {
                                    yield o.connection.send(r, t)
                                } catch (m) {
                                    h(m)
                                }
                            });
                            return function(u, h) {
                                return a.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(r = this.connection) {
                    return r
                }
                onPayload(r) {
                    this.events.emit("payload", r), Bt(r) ? this.events.emit(`${r.id}`, r) : this.events.emit("message", {
                        type: r.method,
                        data: r.params
                    })
                }
                onClose(r) {
                    r && 3e3 === r.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${r.code} ${r.reason?`(${r.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(r = this.connection) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        t.connection === r && t.connection.connected || (t.connection.connected && t.close(), "string" == typeof r && (yield t.connection.open(r), r = t.connection), t.connection = t.setConnection(r), yield t.connection.open(), t.registerEventListeners(), t.events.emit("connect"))
                    })()
                }
                close() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", r => this.onPayload(r)), this.connection.on("close", r => this.onClose(r)), this.connection.on("error", r => this.events.emit("error", r)), this.connection.on("register_error", r => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            const Vc = f => f.split("?")[0],
                Th = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : ne(3569);
            class Ch {
                constructor(r) {
                    if (this.url = r, this.events = new pe.EventEmitter, this.registering = !1, !nr(r)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
                    this.url = r
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                open(r = this.url) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.register(r)
                    })()
                }
                close() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return new Promise((t, o) => {
                            typeof r.socket > "u" ? o(new Error("Connection already closed")) : (r.socket.onclose = a => {
                                r.onClose(a), t()
                            }, r.socket.close())
                        })
                    })()
                }
                send(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        typeof t.socket > "u" && (t.socket = yield t.register());
                        try {
                            t.socket.send(_t(r))
                        } catch (o) {
                            t.onError(r.id, o)
                        }
                    })()
                }
                register(r = this.url) {
                    if (!nr(r)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((o, a) => {
                            this.events.once("register_error", u => {
                                this.resetMaxListeners(), a(u)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return a(new Error("WebSocket connection is missing or invalid"));
                                o(this.socket)
                            })
                        })
                    }
                    return this.url = r, this.registering = !0, new Promise((t, o) => {
                        const a = new URLSearchParams(r).get("origin"),
                            u = (0, Jo.isReactNative)() ? {
                                headers: {
                                    origin: a
                                }
                            } : {
                                rejectUnauthorized: (f = r, !new RegExp("wss?://localhost(:d{2,5})?").test(f))
                            },
                            h = new Th(r, [], u);
                        var f;
                        typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? h.onerror = m => {
                            o(this.emitError(m.error))
                        } : h.on("error", m => {
                            o(this.emitError(m))
                        }), h.onopen = () => {
                            this.onOpen(h), t(h)
                        }
                    })
                }
                onOpen(r) {
                    r.onmessage = t => this.onPayload(t), r.onclose = t => this.onClose(t), this.socket = r, this.registering = !1, this.events.emit("open")
                }
                onClose(r) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", r)
                }
                onPayload(r) {
                    if (typeof r.data > "u") return;
                    const t = "string" == typeof r.data ? Ct(r.data) : r.data;
                    this.events.emit("payload", t)
                }
                onError(r, t) {
                    const o = this.parseError(t),
                        u = bi(r, o.message || o.toString());
                    this.events.emit("payload", u)
                }
                parseError(r, t = this.url) {
                    return _i(r, Vc(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(r) {
                    const t = this.parseError(new Error(r ? .message || `WebSocket connection failed for host: ${Vc(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var Dh = ne(2650),
                Nh = ne.n(Dh),
                Fh = ne(9557),
                Lh = ne.n(Fh),
                Zh = function jh(f, r) {
                    if (f.length >= 255) throw new TypeError("Alphabet too long");
                    for (var t = new Uint8Array(256), o = 0; o < t.length; o++) t[o] = 255;
                    for (var a = 0; a < f.length; a++) {
                        var u = f.charAt(a),
                            h = u.charCodeAt(0);
                        if (255 !== t[h]) throw new TypeError(u + " is ambiguous");
                        t[h] = a
                    }
                    var m = f.length,
                        T = f.charAt(0),
                        O = Math.log(m) / Math.log(256),
                        N = Math.log(256) / Math.log(m);

                    function J(se) {
                        if ("string" != typeof se) throw new TypeError("Expected String");
                        if (0 === se.length) return new Uint8Array;
                        var Oe = 0;
                        if (" " !== se[Oe]) {
                            for (var ze = 0, Je = 0; se[Oe] === T;) ze++, Oe++;
                            for (var Kt = (se.length - Oe) * O + 1 >>> 0, st = new Uint8Array(Kt); se[Oe];) {
                                var Vt = t[se.charCodeAt(Oe)];
                                if (255 === Vt) return;
                                for (var ht = 0, kt = Kt - 1;
                                    (0 !== Vt || ht < Je) && -1 !== kt; kt--, ht++) st[kt] = (Vt += m * st[kt] >>> 0) % 256 >>> 0, Vt = Vt / 256 >>> 0;
                                if (0 !== Vt) throw new Error("Non-zero carry");
                                Je = ht, Oe++
                            }
                            if (" " !== se[Oe]) {
                                for (var tt = Kt - Je; tt !== Kt && 0 === st[tt];) tt++;
                                for (var pr = new Uint8Array(ze + (Kt - tt)), zn = ze; tt !== Kt;) pr[zn++] = st[tt++];
                                return pr
                            }
                        }
                    }
                    return {
                        encode: function q(se) {
                            if (se instanceof Uint8Array || (ArrayBuffer.isView(se) ? se = new Uint8Array(se.buffer, se.byteOffset, se.byteLength) : Array.isArray(se) && (se = Uint8Array.from(se))), !(se instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === se.length) return "";
                            for (var Oe = 0, ze = 0, Je = 0, Kt = se.length; Je !== Kt && 0 === se[Je];) Je++, Oe++;
                            for (var st = (Kt - Je) * N + 1 >>> 0, Vt = new Uint8Array(st); Je !== Kt;) {
                                for (var ht = se[Je], kt = 0, tt = st - 1;
                                    (0 !== ht || kt < ze) && -1 !== tt; tt--, kt++) Vt[tt] = (ht += 256 * Vt[tt] >>> 0) % m >>> 0, ht = ht / m >>> 0;
                                if (0 !== ht) throw new Error("Non-zero carry");
                                ze = kt, Je++
                            }
                            for (var pr = st - ze; pr !== st && 0 === Vt[pr];) pr++;
                            for (var zn = T.repeat(Oe); pr < st; ++pr) zn += f.charAt(Vt[pr]);
                            return zn
                        },
                        decodeUnsafe: J,
                        decode: function fe(se) {
                            var Oe = J(se);
                            if (Oe) return Oe;
                            throw new Error(`Non-${r} character`)
                        }
                    }
                };
            const Gc = f => {
                if (f instanceof Uint8Array && "Uint8Array" === f.constructor.name) return f;
                if (f instanceof ArrayBuffer) return new Uint8Array(f);
                if (ArrayBuffer.isView(f)) return new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class $h {
                constructor(r, t, o) {
                    this.name = r, this.prefix = t, this.baseEncode = o
                }
                encode(r) {
                    if (r instanceof Uint8Array) return `${this.prefix}${this.baseEncode(r)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class Uh {
                constructor(r, t, o) {
                    if (this.name = r, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = o
                }
                decode(r) {
                    if ("string" == typeof r) {
                        if (r.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(r.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(r) {
                    return Wc(this, r)
                }
            }
            class Hh {
                constructor(r) {
                    this.decoders = r
                }
                or(r) {
                    return Wc(this, r)
                }
                decode(r) {
                    const o = this.decoders[r[0]];
                    if (o) return o.decode(r);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const Wc = (f, r) => new Hh({ ...f.decoders || {
                    [f.prefix]: f
                },
                ...r.decoders || {
                    [r.prefix]: r
                }
            });
            class Bh {
                constructor(r, t, o, a) {
                    this.name = r, this.prefix = t, this.baseEncode = o, this.baseDecode = a, this.encoder = new $h(r, t, o), this.decoder = new Uh(r, t, a)
                }
                encode(r) {
                    return this.encoder.encode(r)
                }
                decode(r) {
                    return this.decoder.decode(r)
                }
            }
            const Cs = ({
                    name: f,
                    prefix: r,
                    encode: t,
                    decode: o
                }) => new Bh(f, r, t, o),
                Bi = ({
                    prefix: f,
                    name: r,
                    alphabet: t
                }) => {
                    const {
                        encode: o,
                        decode: a
                    } = Zh(t, r);
                    return Cs({
                        prefix: f,
                        name: r,
                        encode: o,
                        decode: u => Gc(a(u))
                    })
                },
                vr = ({
                    name: f,
                    prefix: r,
                    bitsPerChar: t,
                    alphabet: o
                }) => Cs({
                    prefix: r,
                    name: f,
                    encode: a => ((f, r, t) => {
                        const o = "=" === r[r.length - 1],
                            a = (1 << t) - 1;
                        let u = "",
                            h = 0,
                            m = 0;
                        for (let T = 0; T < f.length; ++T)
                            for (m = m << 8 | f[T], h += 8; h > t;) h -= t, u += r[a & m >> h];
                        if (h && (u += r[a & m << t - h]), o)
                            for (; u.length * t & 7;) u += "=";
                        return u
                    })(a, o, t),
                    decode: a => ((f, r, t, o) => {
                        const a = {};
                        for (let N = 0; N < r.length; ++N) a[r[N]] = N;
                        let u = f.length;
                        for (;
                            "=" === f[u - 1];) --u;
                        const h = new Uint8Array(u * t / 8 | 0);
                        let m = 0,
                            T = 0,
                            O = 0;
                        for (let N = 0; N < u; ++N) {
                            const q = a[f[N]];
                            if (void 0 === q) throw new SyntaxError(`Non-${o} character`);
                            T = T << t | q, m += t, m >= 8 && (m -= 8, h[O++] = 255 & T >> m)
                        }
                        if (m >= t || 255 & T << 8 - m) throw new SyntaxError("Unexpected end of data");
                        return h
                    })(a, o, t, f)
                }),
                kh = Cs({
                    prefix: "\0",
                    name: "identity",
                    encode: f => (f => (new TextDecoder).decode(f))(f),
                    decode: f => (f => (new TextEncoder).encode(f))(f)
                });
            var Gh = Object.freeze({
                __proto__: null,
                identity: kh
            });
            const Wh = vr({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Jh = Object.freeze({
                __proto__: null,
                base2: Wh
            });
            const Qh = vr({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Yh = Object.freeze({
                __proto__: null,
                base8: Qh
            });
            const Xh = Bi({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var ed = Object.freeze({
                __proto__: null,
                base10: Xh
            });
            const td = vr({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                rd = vr({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var nd = Object.freeze({
                __proto__: null,
                base16: td,
                base16upper: rd
            });
            const id = vr({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                sd = vr({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                od = vr({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                ad = vr({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                cd = vr({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                ud = vr({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                ld = vr({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                fd = vr({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                hd = vr({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var dd = Object.freeze({
                __proto__: null,
                base32: id,
                base32upper: sd,
                base32pad: od,
                base32padupper: ad,
                base32hex: cd,
                base32hexupper: ud,
                base32hexpad: ld,
                base32hexpadupper: fd,
                base32z: hd
            });
            const pd = Bi({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                gd = Bi({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var yd = Object.freeze({
                __proto__: null,
                base36: pd,
                base36upper: gd
            });
            const vd = Bi({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                _d = Bi({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var md = Object.freeze({
                __proto__: null,
                base58btc: vd,
                base58flickr: _d
            });
            const bd = vr({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                wd = vr({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                xd = vr({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Ed = vr({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Id = Object.freeze({
                __proto__: null,
                base64: bd,
                base64pad: wd,
                base64url: xd,
                base64urlpad: Ed
            });
            const Jc = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                Pd = Jc.reduce((f, r, t) => (f[t] = r, f), []),
                Sd = Jc.reduce((f, r, t) => (f[r.codePointAt(0)] = t, f), []),
                Ad = Cs({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function Od(f) {
                        return f.reduce((r, t) => r + Pd[t], "")
                    },
                    decode: function Rd(f) {
                        const r = [];
                        for (const t of f) {
                            const o = Sd[t.codePointAt(0)];
                            if (void 0 === o) throw new Error(`Non-base256emoji character: ${t}`);
                            r.push(o)
                        }
                        return new Uint8Array(r)
                    }
                });
            var Td = Object.freeze({
                    __proto__: null,
                    base256emoji: Ad
                }),
                Qc = 128,
                Nd = -128,
                Fd = Math.pow(2, 31),
                jd = 128,
                Xc = 127,
                Md = Math.pow(2, 7),
                Zd = Math.pow(2, 14),
                zd = Math.pow(2, 21),
                qd = Math.pow(2, 28),
                $d = Math.pow(2, 35),
                Ud = Math.pow(2, 42),
                Hd = Math.pow(2, 49),
                Bd = Math.pow(2, 56),
                Kd = Math.pow(2, 63),
                kd = {
                    encode: function Yc(f, r, t) {
                        r = r || [];
                        for (var o = t = t || 0; f >= Fd;) r[t++] = 255 & f | Qc, f /= 128;
                        for (; f & Nd;) r[t++] = 255 & f | Qc, f >>>= 7;
                        return r[t] = 0 | f, Yc.bytes = t - o + 1, r
                    },
                    decode: function ta(f, o) {
                        var h, t = 0,
                            a = 0,
                            u = o = o || 0,
                            m = f.length;
                        do {
                            if (u >= m) throw ta.bytes = 0, new RangeError("Could not decode varint");
                            h = f[u++], t += a < 28 ? (h & Xc) << a : (h & Xc) * Math.pow(2, a), a += 7
                        } while (h >= jd);
                        return ta.bytes = u - o, t
                    },
                    encodingLength: function(f) {
                        return f < Md ? 1 : f < Zd ? 2 : f < zd ? 3 : f < qd ? 4 : f < $d ? 5 : f < Ud ? 6 : f < Hd ? 7 : f < Bd ? 8 : f < Kd ? 9 : 10
                    }
                },
                eu = kd;
            const tu = (f, r, t = 0) => (eu.encode(f, r, t), r),
                ru = f => eu.encodingLength(f),
                ra = (f, r) => {
                    const t = r.byteLength,
                        o = ru(f),
                        a = o + ru(t),
                        u = new Uint8Array(a + t);
                    return tu(f, u, 0), tu(t, u, o), u.set(r, a), new Gd(f, t, r, u)
                };
            class Gd {
                constructor(r, t, o, a) {
                    this.code = r, this.size = t, this.digest = o, this.bytes = a
                }
            }
            const nu = ({
                name: f,
                code: r,
                encode: t
            }) => new Wd(f, r, t);
            class Wd {
                constructor(r, t, o) {
                    this.name = r, this.code = t, this.encode = o
                }
                digest(r) {
                    if (r instanceof Uint8Array) {
                        const t = this.encode(r);
                        return t instanceof Uint8Array ? ra(this.code, t) : t.then(o => ra(this.code, o))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const iu = f => function() {
                    var r = (0, y.Z)(function*(t) {
                        return new Uint8Array(yield crypto.subtle.digest(f, t))
                    });
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }(),
                Jd = nu({
                    name: "sha2-256",
                    code: 18,
                    encode: iu("SHA-256")
                }),
                Qd = nu({
                    name: "sha2-512",
                    code: 19,
                    encode: iu("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Jd,
                sha512: Qd
            });
            const ou = Gc;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: ou,
                    digest: f => ra(0, ou(f))
                }
            }), new TextEncoder, new TextDecoder;
            const au = { ...Gh,
                ...Jh,
                ...Yh,
                ...ed,
                ...nd,
                ...dd,
                ...yd,
                ...md,
                ...Id,
                ...Td
            };

            function cu(f) {
                return null != globalThis.Buffer ? new Uint8Array(f.buffer, f.byteOffset, f.byteLength) : f
            }

            function uu(f, r, t, o) {
                return {
                    name: f,
                    prefix: r,
                    encoder: {
                        name: f,
                        prefix: r,
                        encode: t
                    },
                    decoder: {
                        decode: o
                    }
                }
            }
            const lu = uu("utf8", "u", f => "u" + new TextDecoder("utf8").decode(f), f => (new TextEncoder).encode(f.substring(1))),
                na = uu("ascii", "a", f => {
                    let r = "a";
                    for (let t = 0; t < f.length; t++) r += String.fromCharCode(f[t]);
                    return r
                }, f => {
                    const r = function tp(f = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? cu(globalThis.Buffer.allocUnsafe(f)) : new Uint8Array(f)
                    }((f = f.substring(1)).length);
                    for (let t = 0; t < f.length; t++) r[t] = f.charCodeAt(t);
                    return r
                }),
                rp = {
                    utf8: lu,
                    "utf-8": lu,
                    hex: au.base16,
                    latin1: na,
                    ascii: na,
                    binary: na,
                    ...au
                },
                Mn = "wc@2:core:",
                op = {
                    database: ":memory:"
                },
                hu = "client_ed25519_seed",
                cp = Ie.ONE_DAY,
                dp = Ie.SIX_HOURS,
                pu = "wss://relay.walletconnect.com",
                gu = "wss://relay.walletconnect.org",
                _p = Ie.ONE_SECOND,
                nn_created = "subscription_created",
                nn_deleted = "subscription_deleted",
                Pp = 1e3 * Ie.FIVE_SECONDS,
                Ki = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Ie.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Ie.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                Vr_expired = "expirer_expired",
                sa = "verify-api",
                Ei = "https://verify.walletconnect.com",
                oa = "https://verify.walletconnect.org",
                Dp = [Ei, oa];
            class Lp {
                constructor(r, t) {
                    var o = this;
                    this.core = r, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Mn, this.init = (0, y.Z)(function*() {
                        if (!o.initialized) {
                            const a = yield o.getKeyChain();
                            typeof a < "u" && (o.keychain = a), o.initialized = !0
                        }
                    }), this.has = a => (this.isInitialized(), this.keychain.has(a)), this.set = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            o.isInitialized(), o.keychain.set(u, h), yield o.persist()
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        const u = this.keychain.get(a);
                        if (typeof u > "u") {
                            const {
                                message: h
                            } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${a}`);
                            throw new Error(h)
                        }
                        return u
                    }, this.del = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.isInitialized(), o.keychain.delete(u), yield o.persist()
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = r, this.logger = (0, Pe.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setKeyChain(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, E.KC)(r))
                    })()
                }
                getKeyChain() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        const t = yield r.core.storage.getItem(r.storageKey);
                        return typeof t < "u" ? (0, E.IP)(t) : void 0
                    })()
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setKeyChain(r.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class jp {
                constructor(r, t, o) {
                    var a = this;
                    this.core = r, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = (0, y.Z)(function*() {
                        a.initialized || (yield a.keychain.init(), a.initialized = !0)
                    }), this.hasKeys = u => (this.isInitialized(), this.keychain.has(u)), this.getClientId = (0, y.Z)(function*() {
                        return a.isInitialized(), Es(Ps(yield a.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const u = (0, E.Au)();
                        return this.setPrivateKey(u.publicKey, u.privateKey)
                    }, this.signJWT = function() {
                        var u = (0, y.Z)(function*(h) {
                            a.isInitialized();
                            const T = Ps(yield a.getClientSeed()),
                                O = (0, E.jd)();
                            return yield function Vo(f, r, t, o) {
                                return Ui.apply(this, arguments)
                            }(O, h, cp, T)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (u, h, m) => {
                        this.isInitialized();
                        const T = this.getPrivateKey(u),
                            O = (0, E.m$)(T, h);
                        return this.setSymKey(O, m)
                    }, this.setSymKey = function() {
                        var u = (0, y.Z)(function*(h, m) {
                            a.isInitialized();
                            const T = m || (0, E.Ym)(h);
                            return yield a.keychain.set(T, h), T
                        });
                        return function(h, m) {
                            return u.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var u = (0, y.Z)(function*(h) {
                            a.isInitialized(), yield a.keychain.del(h)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var u = (0, y.Z)(function*(h) {
                            a.isInitialized(), yield a.keychain.del(h)
                        });
                        return function(h) {
                            return u.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var u = (0, y.Z)(function*(h, m, T) {
                            a.isInitialized();
                            const O = (0, E.EN)(T),
                                N = _t(m);
                            if ((0, E.Q8)(O)) {
                                const se = O.senderPublicKey,
                                    Oe = O.receiverPublicKey;
                                h = yield a.generateSharedKey(se, Oe)
                            }
                            const q = a.getSymKey(h),
                                {
                                    type: J,
                                    senderPublicKey: fe
                                } = O;
                            return (0, E.HI)({
                                type: J,
                                symKey: q,
                                message: N,
                                senderPublicKey: fe
                            })
                        });
                        return function(h, m, T) {
                            return u.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var u = (0, y.Z)(function*(h, m, T) {
                            a.isInitialized();
                            const O = (0, E.Ll)(m, T);
                            if ((0, E.Q8)(O)) {
                                const N = O.receiverPublicKey,
                                    q = O.senderPublicKey;
                                h = yield a.generateSharedKey(N, q)
                            }
                            try {
                                const N = a.getSymKey(h);
                                return Ct((0, E.pe)({
                                    symKey: N,
                                    encoded: m
                                }))
                            } catch (N) {
                                a.logger.error(`Failed to decode message from topic: '${h}', clientId: '${yield a.getClientId()}'`), a.logger.error(N)
                            }
                        });
                        return function(h, m, T) {
                            return u.apply(this, arguments)
                        }
                    }(), this.getPayloadType = u => {
                        const h = (0, E.vB)(u);
                        return (0, E.WG)(h.type)
                    }, this.getPayloadSenderPublicKey = u => {
                        const h = (0, E.vB)(u);
                        return h.senderPublicKey ? (0, ko.BB)(h.senderPublicKey, E.AW) : void 0
                    }, this.core = r, this.logger = (0, Pe.generateChildLogger)(t, this.name), this.keychain = o || new Lp(this.core, this.logger)
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                setPrivateKey(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        return yield o.keychain.set(r, t), r
                    })()
                }
                getPrivateKey(r) {
                    return this.keychain.get(r)
                }
                getClientSeed() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        let t = "";
                        try {
                            t = r.keychain.get(hu)
                        } catch {
                            t = (0, E.jd)(), yield r.keychain.set(hu, t)
                        }
                        return function np(f, r = "utf8") {
                            const t = rp[r];
                            if (!t) throw new Error(`Unsupported encoding "${r}"`);
                            return "utf8" !== r && "utf-8" !== r || null == globalThis.Buffer || null == globalThis.Buffer.from ? t.decoder.decode(`${t.prefix}${f}`) : cu(globalThis.Buffer.from(f, "utf-8"))
                        }(t, "base16")
                    })()
                }
                getSymKey(r) {
                    return this.keychain.get(r)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class Mp extends fn {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.logger = r, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Mn, this.init = (0, y.Z)(function*() {
                        if (!o.initialized) {
                            o.logger.trace("Initialized");
                            try {
                                const a = yield o.getRelayerMessages();
                                typeof a < "u" && (o.messages = a), o.logger.debug(`Successfully Restored records for ${o.name}`), o.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: o.messages.size
                                })
                            } catch (a) {
                                o.logger.debug(`Failed to Restore records for ${o.name}`), o.logger.error(a)
                            } finally {
                                o.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            o.isInitialized();
                            const m = (0, E.rj)(h);
                            let T = o.messages.get(u);
                            return typeof T > "u" && (T = {}), typeof T[m] < "u" || (T[m] = h, o.messages.set(u, T), yield o.persist()), m
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        let u = this.messages.get(a);
                        return typeof u > "u" && (u = {}), u
                    }, this.has = (a, u) => (this.isInitialized(), typeof this.get(a)[(0, E.rj)(u)] < "u"), this.del = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.isInitialized(), o.messages.delete(u), yield o.persist()
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.logger = (0, Pe.generateChildLogger)(r, this.name), this.core = t
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setRelayerMessages(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, E.KC)(r))
                    })()
                }
                getRelayerMessages() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        const t = yield r.core.storage.getItem(r.storageKey);
                        return typeof t < "u" ? (0, E.IP)(t) : void 0
                    })()
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setRelayerMessages(r.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class Zp extends Nt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.relayer = r, this.logger = t, this.events = new pe.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Ie.toMiliseconds)(Ie.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var a = (0, y.Z)(function*(u, h, m) {
                            var T;
                            o.logger.debug("Publishing Payload"), o.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: u,
                                    message: h,
                                    opts: m
                                }
                            });
                            try {
                                const O = m ? .ttl || dp,
                                    N = (0, E._H)(m),
                                    q = m ? .prompt || !1,
                                    J = m ? .tag || 0,
                                    fe = m ? .id || Hi().toString(),
                                    se = {
                                        topic: u,
                                        message: h,
                                        opts: {
                                            ttl: O,
                                            relay: N,
                                            prompt: q,
                                            tag: J,
                                            id: fe
                                        }
                                    },
                                    Oe = setTimeout(() => o.queue.set(fe, se), o.publishTimeout);
                                try {
                                    yield yield(0, E.hF)(o.rpcPublish(u, h, O, N, q, J, fe), o.publishTimeout, "Failed to publish payload, please try again."), o.removeRequestFromQueue(fe), o.relayer.events.emit("relayer_publish", se)
                                } catch (ze) {
                                    if (o.logger.debug("Publishing Payload stalled"), o.needsTransportRestart = !0, null != (T = m ? .internal) && T.throwOnFailedPublish) throw o.removeRequestFromQueue(fe), ze;
                                    return
                                } finally {
                                    clearTimeout(Oe)
                                }
                                o.logger.debug("Successfully Published Payload"), o.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: u,
                                        message: h,
                                        opts: m
                                    }
                                })
                            } catch (O) {
                                throw o.logger.debug("Failed to Publish Payload"), o.logger.error(O), O
                            }
                        });
                        return function(u, h, m) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.relayer = r, this.logger = (0, Pe.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                rpcPublish(r, t, o, a, u, h, m) {
                    var T, O, N, q;
                    const J = {
                        method: (0, E.cO)(a.protocol).publish,
                        params: {
                            topic: r,
                            message: t,
                            ttl: o,
                            prompt: u,
                            tag: h
                        },
                        id: m
                    };
                    return (0, E.o8)(null == (T = J.params) ? void 0 : T.prompt) && (null == (O = J.params) || delete O.prompt), (0, E.o8)(null == (N = J.params) ? void 0 : N.tag) && (null == (q = J.params) || delete q.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: J
                    }), this.relayer.request(J)
                }
                removeRequestFromQueue(r) {
                    this.queue.delete(r)
                }
                checkQueue() {
                    var r = this;
                    this.queue.forEach(function() {
                        var t = (0, y.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u,
                                opts: h
                            } = o;
                            yield r.publish(a, u, h)
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", r => {
                        this.removeRequestFromQueue(r.id.toString())
                    })
                }
            }
            class zp {
                constructor() {
                    this.map = new Map, this.set = (r, t) => {
                        const o = this.get(r);
                        this.exists(r, t) || this.map.set(r, [...o, t])
                    }, this.get = r => this.map.get(r) || [], this.exists = (r, t) => this.get(r).includes(t), this.delete = (r, t) => {
                        if (typeof t > "u") return void this.map.delete(r);
                        if (!this.map.has(r)) return;
                        const o = this.get(r);
                        if (!this.exists(r, t)) return;
                        const a = o.filter(u => u !== t);
                        a.length ? this.map.set(r, a) : this.map.delete(r)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var qp = Object.defineProperty,
                $p = Object.defineProperties,
                Up = Object.getOwnPropertyDescriptors,
                yu = Object.getOwnPropertySymbols,
                Hp = Object.prototype.hasOwnProperty,
                Bp = Object.prototype.propertyIsEnumerable,
                vu = (f, r, t) => r in f ? qp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                ki = (f, r) => {
                    for (var t in r || (r = {})) Hp.call(r, t) && vu(f, t, r[t]);
                    if (yu)
                        for (var t of yu(r)) Bp.call(r, t) && vu(f, t, r[t]);
                    return f
                },
                aa = (f, r) => $p(f, Up(r));
            class Kp extends Yt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.relayer = r, this.logger = t, this.subscriptions = new Map, this.topicMap = new zp, this.events = new pe.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Mn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, y.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), o.registerEventListeners(), o.clientId = yield o.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            yield o.restartToComplete(), o.isInitialized(), o.logger.debug("Subscribing Topic"), o.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: u,
                                    opts: h
                                }
                            });
                            try {
                                const m = (0, E._H)(h),
                                    T = {
                                        topic: u,
                                        relay: m
                                    };
                                o.pending.set(u, T);
                                const O = yield o.rpcSubscribe(u, m);
                                return o.onSubscribe(O, T), o.logger.debug("Successfully Subscribed Topic"), o.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: u,
                                        opts: h
                                    }
                                }), O
                            } catch (m) {
                                throw o.logger.debug("Failed to Subscribe Topic"), o.logger.error(m), m
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            yield o.restartToComplete(), o.isInitialized(), typeof h ? .id < "u" ? yield o.unsubscribeById(u, h.id, h): yield o.unsubscribeByTopic(u, h)
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var a = (0, y.Z)(function*(u) {
                            return !!o.topics.includes(u) || (yield new Promise((h, m) => {
                                const T = new Ie.Watch;
                                T.start(o.pendingSubscriptionWatchLabel);
                                const O = setInterval(() => {
                                    !o.pending.has(u) && o.topics.includes(u) && (clearInterval(O), T.stop(o.pendingSubscriptionWatchLabel), h(!0)), T.elapsed(o.pendingSubscriptionWatchLabel) >= Pp && (clearInterval(O), T.stop(o.pendingSubscriptionWatchLabel), m(new Error("Subscription resolution timeout")))
                                }, o.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.restart = (0, y.Z)(function*() {
                        o.restartInProgress = !0, yield o.restore(), yield o.reset(), o.restartInProgress = !1
                    }), this.relayer = r, this.logger = (0, Pe.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(r, t) {
                    let o = !1;
                    try {
                        o = this.getSubscription(r).topic === t
                    } catch {}
                    return o
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        const a = o.topicMap.get(r);
                        yield Promise.all(a.map(function() {
                            var u = (0, y.Z)(function*(h) {
                                return yield o.unsubscribeById(r, h, t)
                            });
                            return function(h) {
                                return u.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(r, t, o) {
                    var a = this;
                    return (0, y.Z)(function*() {
                        a.logger.debug("Unsubscribing Topic"), a.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: r,
                                id: t,
                                opts: o
                            }
                        });
                        try {
                            const u = (0, E._H)(o);
                            yield a.rpcUnsubscribe(r, t, u);
                            const h = (0, E.D6)("USER_DISCONNECTED", `${a.name}, ${r}`);
                            yield a.onUnsubscribe(r, t, h), a.logger.debug("Successfully Unsubscribed Topic"), a.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: r,
                                    id: t,
                                    opts: o
                                }
                            })
                        } catch (u) {
                            throw a.logger.debug("Failed to Unsubscribe Topic"), a.logger.error(u), u
                        }
                    })()
                }
                rpcSubscribe(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        const a = {
                            method: (0, E.cO)(t.protocol).subscribe,
                            params: {
                                topic: r
                            }
                        };
                        o.logger.debug("Outgoing Relay Payload"), o.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            yield yield(0, E.hF)(o.relayer.request(a), o.subscribeTimeout)
                        } catch {
                            o.logger.debug("Outgoing Relay Subscribe Payload stalled"), o.relayer.events.emit("relayer_connection_stalled")
                        }
                        return (0, E.rj)(r + o.clientId)
                    })()
                }
                rpcBatchSubscribe(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!r.length) return;
                        const a = {
                            method: (0, E.cO)(r[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: r.map(u => u.topic)
                            }
                        };
                        t.logger.debug("Outgoing Relay Payload"), t.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            return yield yield(0, E.hF)(t.relayer.request(a), t.subscribeTimeout)
                        } catch {
                            t.logger.debug("Outgoing Relay Payload stalled"), t.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(r, t, o) {
                    const a = {
                        method: (0, E.cO)(o.protocol).unsubscribe,
                        params: {
                            topic: r,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: a
                    }), this.relayer.request(a)
                }
                onSubscribe(r, t) {
                    this.setSubscription(r, aa(ki({}, t), {
                        id: r
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(r) {
                    r.length && r.forEach(t => {
                        this.setSubscription(t.id, ki({}, t)), this.pending.delete(t.topic)
                    })
                }
                onUnsubscribe(r, t, o) {
                    var a = this;
                    return (0, y.Z)(function*() {
                        a.events.removeAllListeners(t), a.hasSubscription(t, r) && a.deleteSubscription(t, o), yield a.relayer.messages.del(r)
                    })()
                }
                setRelayerSubscriptions(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.relayer.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getRelayerSubscriptions() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.relayer.core.storage.getItem(r.storageKey)
                    })()
                }
                setSubscription(r, t) {
                    this.subscriptions.has(r) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: r,
                        subscription: t
                    }), this.addSubscription(r, t))
                }
                addSubscription(r, t) {
                    this.subscriptions.set(r, ki({}, t)), this.topicMap.set(t.topic, r), this.events.emit(nn_created, t)
                }
                getSubscription(r) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: r
                    });
                    const t = this.subscriptions.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw new Error(o)
                    }
                    return t
                }
                deleteSubscription(r, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: r,
                        reason: t
                    });
                    const o = this.getSubscription(r);
                    this.subscriptions.delete(r), this.topicMap.delete(o.topic, r), this.events.emit(nn_deleted, aa(ki({}, o), {
                        reason: t
                    }))
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setRelayerSubscriptions(r.values), r.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (r.cached.length) {
                            const t = Math.ceil(r.cached.length / r.batchSubscribeTopicsLimit);
                            for (let o = 0; o < t; o++) {
                                const a = r.cached.splice(0, r.batchSubscribeTopicsLimit);
                                yield r.batchSubscribe(a)
                            }
                        }
                        r.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        try {
                            const t = yield r.getRelayerSubscriptions();
                            if (typeof t > "u" || !t.length) return;
                            if (r.subscriptions.size) {
                                const {
                                    message: o
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), r.logger.error(`${r.name}: ${JSON.stringify(r.values)}`), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored subscriptions for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore subscriptions for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                batchSubscribe(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!r.length) return;
                        const o = yield t.rpcBatchSubscribe(r);
                        (0, E.qt)(o) && t.onBatchSubscribe(o.map((a, u) => aa(ki({}, r[u]), {
                            id: a
                        })))
                    })()
                }
                onConnect() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.restartInProgress || (yield r.restart(), r.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (!r.initialized || r.relayer.transportExplicitlyClosed) return;
                        const t = [];
                        r.pending.forEach(o => {
                            t.push(o)
                        }), yield r.batchSubscribe(t)
                    })()
                }
                registerEventListeners() {
                    var r = this;
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, (0, y.Z)(function*() {
                        yield r.checkPending()
                    })), this.relayer.on("relayer_connect", (0, y.Z)(function*() {
                        yield r.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(nn_created, function() {
                        var t = (0, y.Z)(function*(o) {
                            const a = nn_created;
                            r.logger.info(`Emitting ${a}`), r.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield r.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.events.on(nn_deleted, function() {
                        var t = (0, y.Z)(function*(o) {
                            const a = nn_deleted;
                            r.logger.info(`Emitting ${a}`), r.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield r.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                restartToComplete() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.restartInProgress && (yield new Promise(t => {
                            const o = setInterval(() => {
                                r.restartInProgress || (clearInterval(o), t())
                            }, r.pollingInterval)
                        }))
                    })()
                }
            }
            var Vp = Object.defineProperty,
                _u = Object.getOwnPropertySymbols,
                kp = Object.prototype.hasOwnProperty,
                Gp = Object.prototype.propertyIsEnumerable,
                mu = (f, r, t) => r in f ? Vp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t;
            class Jp extends Ft {
                constructor(r) {
                    var t;
                    super(r), t = this, this.protocol = "wc", this.version = 2, this.events = new pe.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = function() {
                        var o = (0, y.Z)(function*(a) {
                            t.logger.debug("Publishing Request Payload");
                            try {
                                return yield t.toEstablishConnection(), yield t.provider.request(a)
                            } catch (u) {
                                throw t.logger.debug("Failed to Publish Request"), t.logger.error(u), u
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onPayloadHandler = o => {
                        this.onProviderPayload(o)
                    }, this.onConnectHandler = () => {
                        this.events.emit("relayer_connect")
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = o => {
                        this.logger.error(o), this.events.emit("relayer_error", o), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on("payload", this.onPayloadHandler), this.provider.on("connect", this.onConnectHandler), this.provider.on("disconnect", this.onDisconnectHandler), this.provider.on("error", this.onProviderErrorHandler)
                    }, this.core = r.core, this.logger = typeof r.logger < "u" && "string" != typeof r.logger ? (0, Pe.generateChildLogger)(r.logger, this.name) : (0, Pe.pino)((0, Pe.getDefaultLoggerOptions)({
                        level: r.logger || "error"
                    })), this.messages = new Mp(this.logger, r.core), this.subscriber = new Kp(this, this.logger), this.publisher = new Zp(this, this.logger), this.relayUrl = r ? .relayUrl || pu, this.projectId = r.projectId, this.bundleId = (0, E.X_)(), this.provider = {}
                }
                init() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.logger.trace("Initialized"), r.registerEventListeners(), yield r.createProvider(), yield Promise.all([r.messages.init(), r.subscriber.init()]);
                        try {
                            yield r.transportOpen()
                        } catch {
                            r.logger.warn(`Connection via ${r.relayUrl} failed, attempting to connect via failover domain ${gu}...`), yield r.restartTransport(gu)
                        }
                        r.initialized = !0, setTimeout((0, y.Z)(function*() {
                            0 === r.subscriber.topics.length && (r.logger.info("No topics subscribed to after init, closing transport"), yield r.transportClose(), r.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(r, t, o) {
                    var a = this;
                    return (0, y.Z)(function*() {
                        a.isInitialized(), yield a.publisher.publish(r, t, o), yield a.recordMessageEvent({
                            topic: r,
                            message: t,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        var a;
                        o.isInitialized();
                        let h, u = (null == (a = o.subscriber.topicMap.get(r)) ? void 0 : a[0]) || "";
                        if (u) return u;
                        const m = T => {
                            T.topic === r && (o.subscriber.off(nn_created, m), h())
                        };
                        return yield Promise.all([new Promise(T => {
                            h = T, o.subscriber.on(nn_created, m)
                        }), new Promise(function() {
                            var T = (0, y.Z)(function*(O) {
                                u = yield o.subscriber.subscribe(r, t), O()
                            });
                            return function(O) {
                                return T.apply(this, arguments)
                            }
                        }())]), u
                    })()
                }
                unsubscribe(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        o.isInitialized(), yield o.subscriber.unsubscribe(r, t)
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                transportClose() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.transportExplicitlyClosed = !0, r.hasExperiencedNetworkDisruption && r.connected ? yield(0, E.hF)(r.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => r.onProviderDisconnect()): r.connected && (yield r.provider.disconnect())
                    })()
                }
                transportOpen(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (t.transportExplicitlyClosed = !1, yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress) {
                            r && r !== t.relayUrl && (t.relayUrl = r, yield t.transportClose(), yield t.createProvider()), t.connectionAttemptInProgress = !0;
                            try {
                                yield Promise.all([new Promise(o => {
                                    if (!t.initialized) return o();
                                    t.subscriber.once("subscription_resubscribed", () => {
                                        o()
                                    })
                                }), new Promise(function() {
                                    var o = (0, y.Z)(function*(a, u) {
                                        try {
                                            yield(0, E.hF)(t.provider.connect(), 1e4, `Socket stalled when trying to connect to ${t.relayUrl}`)
                                        } catch (h) {
                                            return void u(h)
                                        }
                                        a()
                                    });
                                    return function(a, u) {
                                        return o.apply(this, arguments)
                                    }
                                }())])
                            } catch (o) {
                                if (t.logger.error(o), !t.isConnectionStalled(o.message)) throw o;
                                t.provider.events.emit("disconnect")
                            } finally {
                                t.connectionAttemptInProgress = !1, t.hasExperiencedNetworkDisruption = !1
                            }
                        }
                    })()
                }
                restartTransport(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress && (t.relayUrl = r || t.relayUrl, yield t.transportClose(), yield t.createProvider(), yield t.transportOpen())
                    })()
                }
                confirmOnlineStateOrThrow() {
                    return (0, y.Z)(function*() {
                        if (!(yield(0, E.Gg)())) throw new Error("No internet connection detected. Please restart your network and try again.")
                    })()
                }
                isConnectionStalled(r) {
                    return this.staleConnectionErrors.some(t => r.includes(t))
                }
                createProvider() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.provider.connection && r.unregisterProviderListeners();
                        const t = yield r.core.crypto.signJWT(r.relayUrl);
                        r.provider = new ur(new Ch((0, E.$0)({
                            sdkVersion: "2.11.0",
                            protocol: r.protocol,
                            version: r.version,
                            relayUrl: r.relayUrl,
                            projectId: r.projectId,
                            auth: t,
                            useOnCloseEvent: !0,
                            bundleId: r.bundleId
                        }))), r.registerProviderListeners()
                    })()
                }
                recordMessageEvent(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = r;
                        yield t.messages.set(o, a)
                    })()
                }
                shouldIgnoreMessageEvent(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = r;
                        if (!a || 0 === a.length) return t.logger.debug(`Ignoring invalid/empty message: ${a}`), !0;
                        if (!(yield t.subscriber.isSubscribed(o))) return t.logger.debug(`Ignoring message for non-subscribed topic ${o}`), !0;
                        const u = t.messages.has(o, a);
                        return u && t.logger.debug(`Ignoring duplicate message: ${a}`), u
                    })()
                }
                onProviderPayload(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (t.logger.debug("Incoming Relay Payload"), t.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: r
                            }), Or(r)) {
                            if (!r.method.endsWith("_subscription")) return;
                            const o = r.params,
                                {
                                    topic: a,
                                    message: u,
                                    publishedAt: h
                                } = o.data,
                                m = {
                                    topic: a,
                                    message: u,
                                    publishedAt: h
                                };
                            t.logger.debug("Emitting Relayer Payload"), t.logger.trace(((f, r) => {
                                for (var t in r || (r = {})) kp.call(r, t) && mu(f, t, r[t]);
                                if (_u)
                                    for (var t of _u(r)) Gp.call(r, t) && mu(f, t, r[t]);
                                return f
                            })({
                                type: "event",
                                event: o.id
                            }, m)), t.events.emit(o.id, m), yield t.acknowledgePayload(r), yield t.onMessageEvent(m)
                        } else Bt(r) && t.events.emit("relayer_message_ack", r)
                    })()
                }
                onMessageEvent(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        (yield t.shouldIgnoreMessageEvent(r)) || (t.events.emit("relayer_message", r), yield t.recordMessageEvent(r))
                    })()
                }
                acknowledgePayload(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        const o = Xn(r.id, !0);
                        yield t.provider.connection.send(o)
                    })()
                }
                unregisterProviderListeners() {
                    this.provider.off("payload", this.onPayloadHandler), this.provider.off("connect", this.onConnectHandler), this.provider.off("disconnect", this.onDisconnectHandler), this.provider.off("error", this.onProviderErrorHandler)
                }
                registerEventListeners() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.events.on("relayer_connection_stalled", () => {
                            r.restartTransport().catch(o => r.logger.error(o))
                        });
                        let t = yield(0, E.Gg)();
                        (0, E.uw)(function() {
                            var o = (0, y.Z)(function*(a) {
                                r.initialized && t !== a && (t = a, a ? yield r.restartTransport().catch(u => r.logger.error(u)): (r.hasExperiencedNetworkDisruption = !0, yield r.transportClose().catch(u => r.logger.error(u))))
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    })()
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var r = this;
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, y.Z)(function*() {
                        yield r.restartTransport().catch(t => r.logger.error(t))
                    }), (0, Ie.toMiliseconds)(_p)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                toEstablishConnection() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (yield r.confirmOnlineStateOrThrow(), !r.connected) {
                            if (r.connectionAttemptInProgress) return yield new Promise(t => {
                                const o = setInterval(() => {
                                    r.connected && (clearInterval(o), t())
                                }, r.connectionStatusPollingInterval)
                            });
                            yield r.restartTransport()
                        }
                    })()
                }
            }
            var Qp = Object.defineProperty,
                bu = Object.getOwnPropertySymbols,
                Yp = Object.prototype.hasOwnProperty,
                Xp = Object.prototype.propertyIsEnumerable,
                wu = (f, r, t) => r in f ? Qp(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                xu = (f, r) => {
                    for (var t in r || (r = {})) Yp.call(r, t) && wu(f, t, r[t]);
                    if (bu)
                        for (var t of bu(r)) Xp.call(r, t) && wu(f, t, r[t]);
                    return f
                };
            class Ds extends Lt {
                constructor(r, t, o, a = Mn, u = void 0) {
                    var h;
                    super(r, t, o, a), h = this, this.core = r, this.logger = t, this.name = o, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, y.Z)(function*() {
                        h.initialized || (h.logger.trace("Initialized"), yield h.restore(), h.cached.forEach(m => {
                            h.getKey && null !== m && !(0, E.o8)(m) ? h.map.set(h.getKey(m), m) : (0, E.xW)(m) ? h.map.set(m.id, m) : (0, E.h1)(m) && h.map.set(m.topic, m)
                        }), h.cached = [], h.initialized = !0)
                    }), this.set = function() {
                        var m = (0, y.Z)(function*(T, O) {
                            h.isInitialized(), h.map.has(T) ? yield h.update(T, O): (h.logger.debug("Setting value"), h.logger.trace({
                                type: "method",
                                method: "set",
                                key: T,
                                value: O
                            }), h.map.set(T, O), yield h.persist())
                        });
                        return function(T, O) {
                            return m.apply(this, arguments)
                        }
                    }(), this.get = m => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: m
                    }), this.getData(m)), this.getAll = m => (this.isInitialized(), m ? this.values.filter(T => Object.keys(m).every(O => Nh()(T[O], m[O]))) : this.values), this.update = function() {
                        var m = (0, y.Z)(function*(T, O) {
                            h.isInitialized(), h.logger.debug("Updating value"), h.logger.trace({
                                type: "method",
                                method: "update",
                                key: T,
                                update: O
                            });
                            const N = xu(xu({}, h.getData(T)), O);
                            h.map.set(T, N), yield h.persist()
                        });
                        return function(T, O) {
                            return m.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var m = (0, y.Z)(function*(T, O) {
                            h.isInitialized(), h.map.has(T) && (h.logger.debug("Deleting value"), h.logger.trace({
                                type: "method",
                                method: "delete",
                                key: T,
                                reason: O
                            }), h.map.delete(T), yield h.persist())
                        });
                        return function(T, O) {
                            return m.apply(this, arguments)
                        }
                    }(), this.logger = (0, Pe.generateChildLogger)(t, this.name), this.storagePrefix = a, this.getKey = u
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getDataStore() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                getData(r) {
                    const t = this.map.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setDataStore(r.values)
                    })()
                }
                restore() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        try {
                            const t = yield r.getDataStore();
                            if (typeof t > "u" || !t.length) return;
                            if (r.map.size) {
                                const {
                                    message: o
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored value for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                value: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore value for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class eg {
                constructor(r, t) {
                    var o = this;
                    this.core = r, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(ve()), this.initialized = !1, this.storagePrefix = Mn, this.ignoredPayloadTypes = [E.rV], this.registeredMethods = [], this.init = (0, y.Z)(function*() {
                        o.initialized || (yield o.pairings.init(), yield o.cleanup(), o.registerRelayerEvents(), o.registerExpirerEvents(), o.initialized = !0, o.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: a
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...a])]
                    }, this.create = (0, y.Z)(function*() {
                        o.isInitialized();
                        const a = (0, E.jd)(),
                            u = yield o.core.crypto.setSymKey(a), h = (0, E.gn)(Ie.FIVE_MINUTES), m = {
                                protocol: "irn"
                            }, T = {
                                topic: u,
                                expiry: h,
                                relay: m,
                                active: !1
                            }, O = (0, E.Bv)({
                                protocol: o.core.protocol,
                                version: o.core.version,
                                topic: u,
                                symKey: a,
                                relay: m
                            });
                        return yield o.pairings.set(u, T), yield o.core.relayer.subscribe(u), o.core.expirer.set(u, h), {
                            topic: u,
                            uri: O
                        }
                    }), this.pair = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.isInitialized(), o.isValidPair(u);
                            const {
                                topic: h,
                                symKey: m,
                                relay: T
                            } = (0, E.he)(u.uri);
                            let O;
                            if (o.pairings.keys.includes(h) && (O = o.pairings.get(h), O.active)) throw new Error(`Pairing already exists: ${h}. Please try again with a new connection URI.`);
                            const N = (0, E.gn)(Ie.FIVE_MINUTES),
                                q = {
                                    topic: h,
                                    relay: T,
                                    expiry: N,
                                    active: !1
                                };
                            return yield o.pairings.set(h, q), o.core.expirer.set(h, N), u.activatePairing && (yield o.activate({
                                topic: h
                            })), o.events.emit("pairing_create", q), o.core.crypto.keychain.has(h) || (yield o.core.crypto.setSymKey(m, h), yield o.core.relayer.subscribe(h, {
                                relay: T
                            })), q
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var a = (0, y.Z)(function*({
                            topic: u
                        }) {
                            o.isInitialized();
                            const h = (0, E.gn)(Ie.THIRTY_DAYS);
                            yield o.pairings.update(u, {
                                active: !0,
                                expiry: h
                            }), o.core.expirer.set(u, h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.isInitialized(), yield o.isValidPing(u);
                            const {
                                topic: h
                            } = u;
                            if (o.pairings.keys.includes(h)) {
                                const m = yield o.sendRequest(h, "wc_pairingPing", {}), {
                                    done: T,
                                    resolve: O,
                                    reject: N
                                } = (0, E.H1)();
                                o.events.once((0, E.E0)("pairing_ping", m), ({
                                    error: q
                                }) => {
                                    q ? N(q) : O()
                                }), yield T()
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var a = (0, y.Z)(function*({
                            topic: u,
                            expiry: h
                        }) {
                            o.isInitialized(), yield o.pairings.update(u, {
                                expiry: h
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var a = (0, y.Z)(function*({
                            topic: u,
                            metadata: h
                        }) {
                            o.isInitialized(), yield o.pairings.update(u, {
                                peerMetadata: h
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.isInitialized(), yield o.isValidDisconnect(u);
                            const {
                                topic: h
                            } = u;
                            o.pairings.keys.includes(h) && (yield o.sendRequest(h, "wc_pairingDelete", (0, E.D6)("USER_DISCONNECTED")), yield o.deletePairing(h))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var a = (0, y.Z)(function*(u, h, m) {
                            const T = Kr(h, m),
                                O = yield o.core.crypto.encode(u, T), N = Ki[h].req;
                            return o.core.history.set(u, T), o.core.relayer.publish(u, O, N), T.id
                        });
                        return function(u, h, m) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var a = (0, y.Z)(function*(u, h, m) {
                            const T = Xn(u, m),
                                O = yield o.core.crypto.encode(h, T), N = yield o.core.history.get(h, u), q = Ki[N.request.method].res;
                            yield o.core.relayer.publish(h, O, q), yield o.core.history.resolve(T)
                        });
                        return function(u, h, m) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var a = (0, y.Z)(function*(u, h, m) {
                            const T = bi(u, m),
                                O = yield o.core.crypto.encode(h, T), N = yield o.core.history.get(h, u), q = Ki[N.request.method] ? Ki[N.request.method].res : Ki.unregistered_method.res;
                            yield o.core.relayer.publish(h, O, q), yield o.core.history.resolve(T)
                        });
                        return function(u, h, m) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            yield o.core.relayer.unsubscribe(u), yield Promise.all([o.pairings.delete(u, (0, E.D6)("USER_DISCONNECTED")), o.core.crypto.deleteSymKey(u), h ? Promise.resolve() : o.core.expirer.del(u)])
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, y.Z)(function*() {
                        const a = o.pairings.getAll().filter(u => (0, E.Bw)(u.expiry));
                        yield Promise.all(a.map(u => o.deletePairing(u.topic)))
                    }), this.onRelayEventRequest = a => {
                        const {
                            topic: u,
                            payload: h
                        } = a;
                        switch (h.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(u, h);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(u, h);
                            default:
                                return this.onUnknownRpcMethodRequest(u, h)
                        }
                    }, this.onRelayEventResponse = function() {
                        var a = (0, y.Z)(function*(u) {
                            const {
                                topic: h,
                                payload: m
                            } = u, T = (yield o.core.history.get(h, m.id)).request.method;
                            return "wc_pairingPing" === T ? o.onPairingPingResponse(h, m) : o.onUnknownRpcMethodResponse(T)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            const {
                                id: m
                            } = h;
                            try {
                                o.isValidPing({
                                    topic: u
                                }), yield o.sendResult(m, u, !0), o.events.emit("pairing_ping", {
                                    id: m,
                                    topic: u
                                })
                            } catch (T) {
                                yield o.sendError(m, u, T), o.logger.error(T)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (a, u) => {
                        const {
                            id: h
                        } = u;
                        setTimeout(() => {
                            jt(u) ? this.events.emit((0, E.E0)("pairing_ping", h), {}) : Pt(u) && this.events.emit((0, E.E0)("pairing_ping", h), {
                                error: u.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            const {
                                id: m
                            } = h;
                            try {
                                o.isValidDisconnect({
                                    topic: u
                                }), yield o.deletePairing(u), o.events.emit("pairing_delete", {
                                    id: m,
                                    topic: u
                                })
                            } catch (T) {
                                yield o.sendError(m, u, T), o.logger.error(T)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            const {
                                id: m,
                                method: T
                            } = h;
                            try {
                                if (o.registeredMethods.includes(T)) return;
                                const O = (0, E.D6)("WC_METHOD_UNSUPPORTED", T);
                                yield o.sendError(m, u, O), o.logger.error(O)
                            } catch (O) {
                                yield o.sendError(m, u, O), o.logger.error(O)
                            }
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = a => {
                        this.registeredMethods.includes(a) || this.logger.error((0, E.D6)("WC_METHOD_UNSUPPORTED", a))
                    }, this.isValidPair = a => {
                        var u;
                        if (!(0, E.EJ)(a)) {
                            const {
                                message: m
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() params: ${a}`);
                            throw new Error(m)
                        }
                        if (!(0, E.jv)(a.uri)) {
                            const {
                                message: m
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() uri: ${a.uri}`);
                            throw new Error(m)
                        }
                        const h = (0, E.he)(a.uri);
                        if (null == (u = h ? .relay) || !u.protocol) {
                            const {
                                message: m
                            } = (0, E.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(m)
                        }
                        if (null == h || !h.symKey) {
                            const {
                                message: m
                            } = (0, E.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(m)
                        }
                    }, this.isValidPing = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (!(0, E.EJ)(u)) {
                                const {
                                    message: m
                                } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${u}`);
                                throw new Error(m)
                            }
                            const {
                                topic: h
                            } = u;
                            yield o.isValidPairingTopic(h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (!(0, E.EJ)(u)) {
                                const {
                                    message: m
                                } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${u}`);
                                throw new Error(m)
                            }
                            const {
                                topic: h
                            } = u;
                            yield o.isValidPairingTopic(h)
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (!(0, E.M_)(u, !1)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${u}`);
                                throw new Error(h)
                            }
                            if (!o.pairings.keys.includes(u)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${u}`);
                                throw new Error(h)
                            }
                            if ((0, E.Bw)(o.pairings.get(u).expiry)) {
                                yield o.deletePairing(u);
                                const {
                                    message: h
                                } = (0, E.Z7)("EXPIRED", `pairing topic: ${u}`);
                                throw new Error(h)
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = r, this.logger = (0, Pe.generateChildLogger)(t, this.name), this.pairings = new Ds(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
                registerRelayerEvents() {
                    var r = this;
                    this.core.relayer.on("relayer_message", function() {
                        var t = (0, y.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u
                            } = o;
                            if (!r.pairings.keys.includes(a) || r.ignoredPayloadTypes.includes(r.core.crypto.getPayloadType(u))) return;
                            const h = yield r.core.crypto.decode(a, u);
                            try {
                                Or(h) ? (r.core.history.set(a, h), r.onRelayEventRequest({
                                    topic: a,
                                    payload: h
                                })) : Bt(h) && (yield r.core.history.resolve(h), yield r.onRelayEventResponse({
                                    topic: a,
                                    payload: h
                                }), r.core.history.delete(a, h.id))
                            } catch (m) {
                                r.logger.error(m)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var r = this;
                    this.core.expirer.on(Vr_expired, function() {
                        var t = (0, y.Z)(function*(o) {
                            const {
                                topic: a
                            } = (0, E.iP)(o.target);
                            a && r.pairings.keys.includes(a) && (yield r.deletePairing(a, !0), r.events.emit("pairing_expire", {
                                topic: a
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
            class tg extends mn {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.core = r, this.logger = t, this.records = new Map, this.events = new pe.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, y.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.records.set(a.id, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.set = (a, u, h) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: a,
                                request: u,
                                chainId: h
                            }), this.records.has(u.id)) return;
                        const m = {
                            id: u.id,
                            topic: a,
                            request: {
                                method: u.method,
                                params: u.params || null
                            },
                            chainId: h,
                            expiry: (0, E.gn)(Ie.THIRTY_DAYS)
                        };
                        this.records.set(m.id, m), this.events.emit("history_created", m)
                    }, this.resolve = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (o.isInitialized(), o.logger.debug("Updating JSON-RPC response history record"), o.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: u
                                }), !o.records.has(u.id)) return;
                            const h = yield o.getRecord(u.id);
                            typeof h.response > "u" && (h.response = Pt(u) ? {
                                error: u.error
                            } : {
                                result: u.result
                            }, o.records.set(h.id, h), o.events.emit("history_updated", h))
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            return o.isInitialized(), o.logger.debug("Getting record"), o.logger.trace({
                                type: "method",
                                method: "get",
                                topic: u,
                                id: h
                            }), yield o.getRecord(h)
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.delete = (a, u) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: u
                        }), this.values.forEach(h => {
                            if (h.topic === a) {
                                if (typeof u < "u" && h.id !== u) return;
                                this.records.delete(h.id), this.events.emit("history_deleted", h)
                            }
                        })
                    }, this.exists = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            return o.isInitialized(), !!o.records.has(h) && (yield o.getRecord(h)).topic === u
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.logger = (0, Pe.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const r = [];
                    return this.values.forEach(t => {
                        if (typeof t.response < "u") return;
                        const o = {
                            topic: t.topic,
                            request: Kr(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return r.push(o)
                    }), r
                }
                setJsonRpcRecords(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getJsonRpcRecords() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                getRecord(r) {
                    this.isInitialized();
                    const t = this.records.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw new Error(o)
                    }
                    return t
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setJsonRpcRecords(r.values), r.events.emit("history_sync")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        try {
                            const t = yield r.getJsonRpcRecords();
                            if (typeof t > "u" || !t.length) return;
                            if (r.records.size) {
                                const {
                                    message: o
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored records for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                records: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore records for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", r => {
                        const t = "history_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.events.on("history_updated", r => {
                        const t = "history_updated";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.events.on("history_deleted", r => {
                        const t = "history_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: r
                        }), this.persist()
                    }), this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(r => {
                            (0, Ie.toMiliseconds)(r.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${r.id}`), this.delete(r.topic, r.id))
                        })
                    } catch (r) {
                        this.logger.warn(r)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class rg extends Xt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.core = r, this.logger = t, this.expirations = new Map, this.events = new pe.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Mn, this.init = (0, y.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.expirations.set(a.target, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.has = a => {
                        try {
                            const u = this.formatTarget(a);
                            return typeof this.getExpiration(u) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (a, u) => {
                        this.isInitialized();
                        const h = this.formatTarget(a),
                            m = {
                                target: h,
                                expiry: u
                            };
                        this.expirations.set(h, m), this.checkExpiry(h, m), this.events.emit("expirer_created", {
                            target: h,
                            expiration: m
                        })
                    }, this.get = a => {
                        this.isInitialized();
                        const u = this.formatTarget(a);
                        return this.getExpiration(u)
                    }, this.del = a => {
                        if (this.isInitialized(), this.has(a)) {
                            const u = this.formatTarget(a),
                                h = this.getExpiration(u);
                            this.expirations.delete(u), this.events.emit("expirer_deleted", {
                                target: u,
                                expiration: h
                            })
                        }
                    }, this.on = (a, u) => {
                        this.events.on(a, u)
                    }, this.once = (a, u) => {
                        this.events.once(a, u)
                    }, this.off = (a, u) => {
                        this.events.off(a, u)
                    }, this.removeListener = (a, u) => {
                        this.events.removeListener(a, u)
                    }, this.logger = (0, Pe.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(r) {
                    if ("string" == typeof r) return (0, E.Z4)(r);
                    if ("number" == typeof r) return (0, E.Gq)(r);
                    const {
                        message: t
                    } = (0, E.Z7)("UNKNOWN_TYPE", "Target type: " + typeof r);
                    throw new Error(t)
                }
                setExpirations(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, r)
                    })()
                }
                getExpirations() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return yield r.core.storage.getItem(r.storageKey)
                    })()
                }
                persist() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        yield r.setExpirations(r.values), r.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        try {
                            const t = yield r.getExpirations();
                            if (typeof t > "u" || !t.length) return;
                            if (r.expirations.size) {
                                const {
                                    message: o
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", r.name);
                                throw r.logger.error(o), new Error(o)
                            }
                            r.cached = t, r.logger.debug(`Successfully Restored expirations for ${r.name}`), r.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: r.values
                            })
                        } catch (t) {
                            r.logger.debug(`Failed to Restore expirations for ${r.name}`), r.logger.error(t)
                        }
                    })()
                }
                getExpiration(r) {
                    const t = this.expirations.get(r);
                    if (!t) {
                        const {
                            message: o
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                checkExpiry(r, t) {
                    const {
                        expiry: o
                    } = t;
                    (0, Ie.toMiliseconds)(o) - Date.now() <= 0 && this.expire(r, t)
                }
                expire(r, t) {
                    this.expirations.delete(r), this.events.emit(Vr_expired, {
                        target: r,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((r, t) => this.checkExpiry(t, r))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", r => {
                        const t = "expirer_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    }), this.events.on(Vr_expired, r => {
                        const t = Vr_expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    }), this.events.on("expirer_deleted", r => {
                        const t = "expirer_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: r
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: r
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(r)
                    }
                }
            }
            class ng extends er {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.projectId = r, this.logger = t, this.name = sa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (o.verifyDisabled || (0, E.b$)() || !(0, E.jU)()) return;
                            const h = o.getVerifyUrl(u ? .verifyUrl);
                            o.verifyUrl !== h && o.removeIframe(), o.verifyUrl = h;
                            try {
                                yield o.createIframe()
                            } catch (m) {
                                o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(m)
                            }
                            if (!o.initialized) {
                                o.removeIframe(), o.verifyUrl = oa;
                                try {
                                    yield o.createIframe()
                                } catch (m) {
                                    o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(m), o.verifyDisabled = !0
                                }
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var a = (0, y.Z)(function*(u) {
                            o.initialized ? o.sendPost(u.attestationId) : (o.addToQueue(u.attestationId), yield o.init())
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var a = (0, y.Z)(function*(u) {
                            if (o.isDevEnv) return "";
                            const h = o.getVerifyUrl(u ? .verifyUrl);
                            let m;
                            try {
                                m = yield o.fetchAttestation(u.attestationId, h)
                            } catch (T) {
                                o.logger.info(`failed to resolve attestation: ${u.attestationId} from url: ${h}`), o.logger.info(T), m = yield o.fetchAttestation(u.attestationId, oa)
                            }
                            return m
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.fetchAttestation = function() {
                        var a = (0, y.Z)(function*(u, h) {
                            o.logger.info(`resolving attestation: ${u} from url: ${h}`);
                            const m = o.startAbortTimer(2 * Ie.ONE_SECOND),
                                T = yield fetch(`${h}/attestation/${u}`, {
                                    signal: o.abortController.signal
                                });
                            return clearTimeout(m), 200 === T.status ? yield T.json(): void 0
                        });
                        return function(u, h) {
                            return a.apply(this, arguments)
                        }
                    }(), this.addToQueue = a => {
                        this.queue.push(a)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(a => this.sendPost(a)), this.queue = [])
                    }, this.sendPost = a => {
                        var u;
                        try {
                            if (!this.iframe) return;
                            null == (u = this.iframe.contentWindow) || u.postMessage(a, "*"), this.logger.info(`postMessage sent: ${a} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = (0, y.Z)(function*() {
                        let a;
                        const u = h => {
                            "verify_ready" === h.data && (o.initialized = !0, o.processQueue(), window.removeEventListener("message", u), a())
                        };
                        yield Promise.race([new Promise(h => {
                            if (document.getElementById(sa)) return h();
                            window.addEventListener("message", u);
                            const m = document.createElement("iframe");
                            m.id = sa, m.src = `${o.verifyUrl}/${o.projectId}`, m.style.display = "none", document.body.append(m), o.iframe = m, a = h
                        }), new Promise((h, m) => setTimeout(() => {
                            window.removeEventListener("message", u), m("verify iframe load timeout")
                        }, (0, Ie.toMiliseconds)(Ie.FIVE_SECONDS)))])
                    }), this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = a => {
                        let u = a || Ei;
                        return Dp.includes(u) || (this.logger.info(`verify url: ${u}, not included in trusted list, assigning default: ${Ei}`), u = Ei), u
                    }, this.logger = (0, Pe.generateChildLogger)(t, this.name), this.verifyUrl = Ei, this.abortController = new AbortController, this.isDevEnv = (0, E.UG)() && process.env.IS_VITEST
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                startAbortTimer(r) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Ie.toMiliseconds)(r))
                }
            }
            class ig extends qt {
                constructor(r, t) {
                    var o;
                    super(r, t), o = this, this.projectId = r, this.logger = t, this.context = "echo", this.registerDeviceToken = function() {
                        var a = (0, y.Z)(function*(u) {
                            const {
                                clientId: h,
                                token: m,
                                notificationType: T,
                                enableEncrypted: O = !1
                            } = u, N = `https://echo.walletconnect.com/${o.projectId}/clients`;
                            yield Lh()(N, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    client_id: h,
                                    type: T,
                                    token: m,
                                    always_raw: O
                                })
                            })
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.logger = (0, Pe.generateChildLogger)(t, this.context)
                }
            }
            var sg = Object.defineProperty,
                Eu = Object.getOwnPropertySymbols,
                og = Object.prototype.hasOwnProperty,
                ag = Object.prototype.propertyIsEnumerable,
                Iu = (f, r, t) => r in f ? sg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Pu = (f, r) => {
                    for (var t in r || (r = {})) og.call(r, t) && Iu(f, t, r[t]);
                    if (Eu)
                        for (var t of Eu(r)) ag.call(r, t) && Iu(f, t, r[t]);
                    return f
                };
            class ca extends _n {
                constructor(r) {
                    super(r), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new pe.EventEmitter, this.initialized = !1, this.on = (o, a) => this.events.on(o, a), this.once = (o, a) => this.events.once(o, a), this.off = (o, a) => this.events.off(o, a), this.removeListener = (o, a) => this.events.removeListener(o, a), this.projectId = r ? .projectId, this.relayUrl = r ? .relayUrl || pu, this.customStoragePrefix = null != r && r.customStoragePrefix ? `:${r.customStoragePrefix}` : "";
                    const t = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Pe.pino)((0, Pe.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    }));
                    this.logger = (0, Pe.generateChildLogger)(t, this.name), this.heartbeat = new br.HeartBeat, this.crypto = new jp(this, this.logger, r ? .keychain), this.history = new tg(this, this.logger), this.expirer = new rg(this, this.logger), this.storage = null != r && r.storage ? r.storage : new Cr(Pu(Pu({}, op), r ? .storageOptions)), this.relayer = new Jp({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new eg(this, this.logger), this.verify = new ng(this.projectId || "", this.logger), this.echoClient = new ig(this.projectId || "", this.logger)
                }
                static init(r) {
                    return (0, y.Z)(function*() {
                        const t = new ca(r);
                        yield t.initialize();
                        const o = yield t.crypto.getClientId();
                        return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", o), t
                    })()
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                start() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.initialized || (yield r.initialize())
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.logger.trace("Initialized");
                        try {
                            yield r.crypto.init(), yield r.history.init(), yield r.expirer.init(), yield r.relayer.init(), yield r.heartbeat.init(), yield r.pairing.init(), r.initialized = !0, r.logger.info("Core Initialization Success")
                        } catch (t) {
                            throw r.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), r.logger.error(t.message), t
                        }
                    })()
                }
            }
            const cg = ca,
                ua = "wc@2:client:",
                Au = "WALLETCONNECT_DEEPLINK_CHOICE",
                Tu = "Proposal expired",
                Ns = Ie.SEVEN_DAYS,
                Gi = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Ie.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Ie.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Ie.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Ie.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                fa = {
                    min: Ie.FIVE_MINUTES,
                    max: Ie.SEVEN_DAYS
                },
                dg = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var pg = Object.defineProperty,
                gg = Object.defineProperties,
                yg = Object.getOwnPropertyDescriptors,
                Cu = Object.getOwnPropertySymbols,
                vg = Object.prototype.hasOwnProperty,
                _g = Object.prototype.propertyIsEnumerable,
                Du = (f, r, t) => r in f ? pg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Dr = (f, r) => {
                    for (var t in r || (r = {})) vg.call(r, t) && Du(f, t, r[t]);
                    if (Cu)
                        for (var t of Cu(r)) _g.call(r, t) && Du(f, t, r[t]);
                    return f
                },
                Wi = (f, r) => gg(f, yg(r));
            class mg extends tr {
                constructor(r) {
                    var t;
                    super(r), t = this, this.name = "engine", this.events = new(ve()), this.initialized = !1, this.ignoredPayloadTypes = [E.rV], this.requestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.requestQueueDelay = Ie.ONE_SECOND, this.init = (0, y.Z)(function*() {
                        t.initialized || (yield t.cleanup(), t.registerRelayerEvents(), t.registerExpirerEvents(), t.registerPairingEvents(), t.client.core.pairing.register({
                            methods: Object.keys(Gi)
                        }), t.initialized = !0, setTimeout(() => {
                            t.sessionRequestQueue.queue = t.getPendingSessionRequests(), t.processSessionRequestQueue()
                        }, (0, Ie.toMiliseconds)(t.requestQueueDelay)))
                    }), this.connect = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized();
                            const u = Wi(Dr({}, a), {
                                requiredNamespaces: a.requiredNamespaces || {},
                                optionalNamespaces: a.optionalNamespaces || {}
                            });
                            yield t.isValidConnect(u);
                            const {
                                pairingTopic: h,
                                requiredNamespaces: m,
                                optionalNamespaces: T,
                                sessionProperties: O,
                                relays: N
                            } = u;
                            let J, q = h,
                                fe = !1;
                            if (q && (fe = t.client.core.pairing.pairings.get(q).active), !q || !fe) {
                                const {
                                    topic: ht,
                                    uri: kt
                                } = yield t.client.core.pairing.create();
                                q = ht, J = kt
                            }
                            const se = yield t.client.core.crypto.generateKeyPair(), Oe = Dr({
                                requiredNamespaces: m,
                                optionalNamespaces: T,
                                relays: N ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: se,
                                    metadata: t.client.metadata
                                }
                            }, O && {
                                sessionProperties: O
                            }), {
                                reject: ze,
                                resolve: Je,
                                done: Kt
                            } = (0, E.H1)(Ie.FIVE_MINUTES, Tu);
                            if (t.events.once((0, E.E0)("session_connect"), function() {
                                    var ht = (0, y.Z)(function*({
                                        error: kt,
                                        session: tt
                                    }) {
                                        if (kt) ze(kt);
                                        else if (tt) {
                                            tt.self.publicKey = se;
                                            const pr = Wi(Dr({}, tt), {
                                                requiredNamespaces: tt.requiredNamespaces,
                                                optionalNamespaces: tt.optionalNamespaces
                                            });
                                            yield t.client.session.set(tt.topic, pr), yield t.setExpiry(tt.topic, tt.expiry), q && (yield t.client.core.pairing.updateMetadata({
                                                topic: q,
                                                metadata: tt.peer.metadata
                                            })), Je(pr)
                                        }
                                    });
                                    return function(kt) {
                                        return ht.apply(this, arguments)
                                    }
                                }()), !q) {
                                const {
                                    message: ht
                                } = (0, E.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${q}`);
                                throw new Error(ht)
                            }
                            const st = yield t.sendRequest({
                                topic: q,
                                method: "wc_sessionPropose",
                                params: Oe
                            }), Vt = (0, E.gn)(Ie.FIVE_MINUTES);
                            return yield t.setProposal(st, Dr({
                                id: st,
                                expiry: Vt
                            }, Oe)), {
                                uri: J,
                                approval: Kt
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var o = (0, y.Z)(function*(a) {
                            return yield t.isInitialized(), yield t.client.core.pairing.pair(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidApprove(a);
                            const {
                                id: u,
                                relayProtocol: h,
                                namespaces: m,
                                sessionProperties: T
                            } = a, O = t.client.proposal.get(u);
                            let {
                                pairingTopic: N,
                                proposer: q,
                                requiredNamespaces: J,
                                optionalNamespaces: fe
                            } = O;
                            N = N || "", (0, E.L5)(J) || (J = (0, E.fc)(m, "approve()"));
                            const se = yield t.client.core.crypto.generateKeyPair(), Oe = q.publicKey, ze = yield t.client.core.crypto.generateSharedKey(se, Oe);
                            N && u && (yield t.client.core.pairing.updateMetadata({
                                topic: N,
                                metadata: q.metadata
                            }), yield t.sendResult({
                                id: u,
                                topic: N,
                                result: {
                                    relay: {
                                        protocol: h ? ? "irn"
                                    },
                                    responderPublicKey: se
                                }
                            }), yield t.client.proposal.delete(u, (0, E.D6)("USER_DISCONNECTED")), yield t.client.core.pairing.activate({
                                topic: N
                            }));
                            const Je = Dr({
                                relay: {
                                    protocol: h ? ? "irn"
                                },
                                namespaces: m,
                                requiredNamespaces: J,
                                optionalNamespaces: fe,
                                pairingTopic: N,
                                controller: {
                                    publicKey: se,
                                    metadata: t.client.metadata
                                },
                                expiry: (0, E.gn)(Ns)
                            }, T && {
                                sessionProperties: T
                            });
                            yield t.client.core.relayer.subscribe(ze), yield t.sendRequest({
                                topic: ze,
                                method: "wc_sessionSettle",
                                params: Je,
                                throwOnFailedPublish: !0
                            });
                            const Kt = Wi(Dr({}, Je), {
                                topic: ze,
                                pairingTopic: N,
                                acknowledged: !1,
                                self: Je.controller,
                                peer: {
                                    publicKey: q.publicKey,
                                    metadata: q.metadata
                                },
                                controller: se
                            });
                            return yield t.client.session.set(ze, Kt), yield t.setExpiry(ze, (0, E.gn)(Ns)), {
                                topic: ze,
                                acknowledged: () => new Promise(st => setTimeout(() => st(t.client.session.get(ze)), 500))
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidReject(a);
                            const {
                                id: u,
                                reason: h
                            } = a, {
                                pairingTopic: m
                            } = t.client.proposal.get(u);
                            m && (yield t.sendError(u, m, h), yield t.client.proposal.delete(u, (0, E.D6)("USER_DISCONNECTED")))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidUpdate(a);
                            const {
                                topic: u,
                                namespaces: h
                            } = a, m = yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionUpdate",
                                params: {
                                    namespaces: h
                                }
                            }), {
                                done: T,
                                resolve: O,
                                reject: N
                            } = (0, E.H1)();
                            return t.events.once((0, E.E0)("session_update", m), ({
                                error: q
                            }) => {
                                q ? N(q) : O()
                            }), yield t.client.session.update(u, {
                                namespaces: h
                            }), {
                                acknowledged: T
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidExtend(a);
                            const {
                                topic: u
                            } = a, h = yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionExtend",
                                params: {}
                            }), {
                                done: m,
                                resolve: T,
                                reject: O
                            } = (0, E.H1)();
                            return t.events.once((0, E.E0)("session_extend", h), ({
                                error: N
                            }) => {
                                N ? O(N) : T()
                            }), yield t.setExpiry(u, (0, E.gn)(Ns)), {
                                acknowledged: m
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRequest(a);
                            const {
                                chainId: u,
                                request: h,
                                topic: m,
                                expiry: T
                            } = a, O = mi(), {
                                done: N,
                                resolve: q,
                                reject: J
                            } = (0, E.H1)(T, "Request expired. Please try again.");
                            return t.events.once((0, E.E0)("session_request", O), ({
                                error: fe,
                                result: se
                            }) => {
                                fe ? J(fe) : q(se)
                            }), yield Promise.all([new Promise(function() {
                                var fe = (0, y.Z)(function*(se) {
                                    yield t.sendRequest({
                                        clientRpcId: O,
                                        topic: m,
                                        method: "wc_sessionRequest",
                                        params: {
                                            request: h,
                                            chainId: u
                                        },
                                        expiry: T,
                                        throwOnFailedPublish: !0
                                    }).catch(Oe => J(Oe)), t.client.events.emit("session_request_sent", {
                                        topic: m,
                                        request: h,
                                        chainId: u,
                                        id: O
                                    }), se()
                                });
                                return function(se) {
                                    return fe.apply(this, arguments)
                                }
                            }()), new Promise(function() {
                                var fe = (0, y.Z)(function*(se) {
                                    const Oe = yield(0, E.bW)(t.client.core.storage, Au);
                                    (0, E.Hh)({
                                        id: O,
                                        topic: m,
                                        wcDeepLink: Oe
                                    }), se()
                                });
                                return function(se) {
                                    return fe.apply(this, arguments)
                                }
                            }()), N()]).then(fe => fe[2])
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRespond(a);
                            const {
                                topic: u,
                                response: h
                            } = a, {
                                id: m
                            } = h;
                            jt(h) ? yield t.sendResult({
                                id: m,
                                topic: u,
                                result: h.result,
                                throwOnFailedPublish: !0
                            }): Pt(h) && (yield t.sendError(m, u, h.error)), t.cleanupAfterResponse(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidPing(a);
                            const {
                                topic: u
                            } = a;
                            if (t.client.session.keys.includes(u)) {
                                const h = yield t.sendRequest({
                                    topic: u,
                                    method: "wc_sessionPing",
                                    params: {}
                                }), {
                                    done: m,
                                    resolve: T,
                                    reject: O
                                } = (0, E.H1)();
                                t.events.once((0, E.E0)("session_ping", h), ({
                                    error: N
                                }) => {
                                    N ? O(N) : T()
                                }), yield m()
                            } else t.client.core.pairing.pairings.keys.includes(u) && (yield t.client.core.pairing.ping({
                                topic: u
                            }))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidEmit(a);
                            const {
                                topic: u,
                                event: h,
                                chainId: m
                            } = a;
                            yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionEvent",
                                params: {
                                    event: h,
                                    chainId: m
                                }
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var o = (0, y.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidDisconnect(a);
                            const {
                                topic: u
                            } = a;
                            t.client.session.keys.includes(u) ? (yield t.sendRequest({
                                topic: u,
                                method: "wc_sessionDelete",
                                params: (0, E.D6)("USER_DISCONNECTED"),
                                throwOnFailedPublish: !0
                            }), yield t.deleteSession(u)) : yield t.client.core.pairing.disconnect({
                                topic: u
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.find = o => (this.isInitialized(), this.client.session.getAll().filter(a => (0, E.Ih)(a, o))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (a.pairingTopic) try {
                                const u = t.client.core.pairing.pairings.get(a.pairingTopic),
                                    h = t.client.core.pairing.pairings.getAll().filter(m => {
                                        var T, O;
                                        return (null == (T = m.peerMetadata) ? void 0 : T.url) && (null == (O = m.peerMetadata) ? void 0 : O.url) === a.peer.metadata.url && m.topic && m.topic !== u.topic
                                    });
                                if (0 === h.length) return;
                                t.client.logger.info(`Cleaning up ${h.length} duplicate pairing(s)`), yield Promise.all(h.map(m => t.client.core.pairing.disconnect({
                                    topic: m.topic
                                }))), t.client.logger.info("Duplicate pairings clean up finished")
                            } catch (u) {
                                t.client.logger.error(u)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                self: h
                            } = t.client.session.get(a);
                            yield t.client.core.relayer.unsubscribe(a), t.client.session.delete(a, (0, E.D6)("USER_DISCONNECTED")), t.client.core.crypto.keychain.has(h.publicKey) && (yield t.client.core.crypto.deleteKeyPair(h.publicKey)), t.client.core.crypto.keychain.has(a) && (yield t.client.core.crypto.deleteSymKey(a)), u || t.client.core.expirer.del(a), t.client.core.storage.removeItem(Au).catch(m => t.client.logger.warn(m)), t.getPendingSessionRequests().forEach(m => {
                                m.topic === a && t.deletePendingSessionRequest(m.id, (0, E.D6)("USER_DISCONNECTED"))
                            })
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            yield Promise.all([t.client.proposal.delete(a, (0, E.D6)("USER_DISCONNECTED")), u ? Promise.resolve() : t.client.core.expirer.del(a)])
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var o = (0, y.Z)(function*(a, u, h = !1) {
                            yield Promise.all([t.client.pendingRequest.delete(a, u), h ? Promise.resolve() : t.client.core.expirer.del(a)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter(m => m.id !== a), h && (t.sessionRequestQueue.state = "IDLE")
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            t.client.session.keys.includes(a) && (yield t.client.session.update(a, {
                                expiry: u
                            })), t.client.core.expirer.set(a, u)
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            yield t.client.proposal.set(a, u), t.client.core.expirer.set(a, u.expiry)
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var o = (0, y.Z)(function*(a) {
                            const u = Gi.wc_sessionRequest.req.ttl,
                                {
                                    id: h,
                                    topic: m,
                                    params: T,
                                    verifyContext: O
                                } = a;
                            yield t.client.pendingRequest.set(h, {
                                id: h,
                                topic: m,
                                params: T,
                                verifyContext: O
                            }), u && t.client.core.expirer.set(h, (0, E.gn)(u))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var o = (0, y.Z)(function*(a) {
                            const {
                                topic: u,
                                method: h,
                                params: m,
                                expiry: T,
                                relayRpcId: O,
                                clientRpcId: N,
                                throwOnFailedPublish: q
                            } = a, J = Kr(h, m, N);
                            if ((0, E.jU)() && dg.includes(h)) {
                                const Oe = (0, E.rj)(JSON.stringify(J));
                                t.client.core.verify.register({
                                    attestationId: Oe
                                })
                            }
                            const fe = yield t.client.core.crypto.encode(u, J), se = Gi[h].req;
                            return T && (se.ttl = T), O && (se.id = O), t.client.core.history.set(u, J), q ? (se.internal = Wi(Dr({}, se.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(u, fe, se)) : t.client.core.relayer.publish(u, fe, se).catch(Oe => t.client.logger.error(Oe)), J.id
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var o = (0, y.Z)(function*(a) {
                            const {
                                id: u,
                                topic: h,
                                result: m,
                                throwOnFailedPublish: T
                            } = a, O = Xn(u, m), N = yield t.client.core.crypto.encode(h, O), q = yield t.client.core.history.get(h, u), J = Gi[q.request.method].res;
                            T ? (J.internal = Wi(Dr({}, J.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(h, N, J)) : t.client.core.relayer.publish(h, N, J).catch(fe => t.client.logger.error(fe)), yield t.client.core.history.resolve(O)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var o = (0, y.Z)(function*(a, u, h) {
                            const m = bi(a, h),
                                T = yield t.client.core.crypto.encode(u, m), O = yield t.client.core.history.get(u, a);
                            t.client.core.relayer.publish(u, T, Gi[O.request.method].res), yield t.client.core.history.resolve(m)
                        });
                        return function(a, u, h) {
                            return o.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, y.Z)(function*() {
                        const o = [],
                            a = [];
                        t.client.session.getAll().forEach(u => {
                            (0, E.Bw)(u.expiry) && o.push(u.topic)
                        }), t.client.proposal.getAll().forEach(u => {
                            (0, E.Bw)(u.expiry) && a.push(u.id)
                        }), yield Promise.all([...o.map(u => t.deleteSession(u)), ...a.map(u => t.deleteProposal(u))])
                    }), this.onRelayEventRequest = function() {
                        var o = (0, y.Z)(function*(a) {
                            t.requestQueue.queue.push(a), yield t.processRequestsQueue()
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.processRequestsQueue = (0, y.Z)(function*() {
                        if ("ACTIVE" !== t.requestQueue.state) {
                            for (t.client.logger.info(`Request queue starting with ${t.requestQueue.queue.length} requests`); t.requestQueue.queue.length > 0;) {
                                t.requestQueue.state = "ACTIVE";
                                const o = t.requestQueue.queue.shift();
                                if (o) try {
                                    t.processRequest(o), yield new Promise(a => setTimeout(a, 300))
                                } catch (a) {
                                    t.client.logger.warn(a)
                                }
                            }
                            t.requestQueue.state = "IDLE"
                        } else t.client.logger.info("Request queue already active, skipping...")
                    }), this.processRequest = o => {
                        const {
                            topic: a,
                            payload: u
                        } = o, h = u.method;
                        switch (h) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(a, u);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(a, u);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(a, u);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(a, u);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(a, u);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(a, u);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(a, u);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(a, u);
                            default:
                                return this.client.logger.info(`Unsupported request method ${h}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var o = (0, y.Z)(function*(a) {
                            const {
                                topic: u,
                                payload: h
                            } = a, m = (yield t.client.core.history.get(u, h.id)).request.method;
                            switch (m) {
                                case "wc_sessionPropose":
                                    return t.onSessionProposeResponse(u, h);
                                case "wc_sessionSettle":
                                    return t.onSessionSettleResponse(u, h);
                                case "wc_sessionUpdate":
                                    return t.onSessionUpdateResponse(u, h);
                                case "wc_sessionExtend":
                                    return t.onSessionExtendResponse(u, h);
                                case "wc_sessionPing":
                                    return t.onSessionPingResponse(u, h);
                                case "wc_sessionRequest":
                                    return t.onSessionRequestResponse(u, h);
                                default:
                                    return t.client.logger.info(`Unsupported response method ${m}`)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = o => {
                        const {
                            topic: a
                        } = o, {
                            message: u
                        } = (0, E.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${a} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(u)
                    }, this.onSessionProposeRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                params: h,
                                id: m
                            } = u;
                            try {
                                t.isValidConnect(Dr({}, u.params));
                                const T = (0, E.gn)(Ie.FIVE_MINUTES),
                                    O = Dr({
                                        id: m,
                                        pairingTopic: a,
                                        expiry: T
                                    }, h);
                                yield t.setProposal(m, O);
                                const N = (0, E.rj)(JSON.stringify(u)),
                                    q = yield t.getVerifyContext(N, O.proposer.metadata);
                                t.client.events.emit("session_proposal", {
                                    id: m,
                                    params: O,
                                    verifyContext: q
                                })
                            } catch (T) {
                                yield t.sendError(m, a, T), t.client.logger.error(T)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            if (jt(u)) {
                                const {
                                    result: m
                                } = u;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: m
                                });
                                const T = t.client.proposal.get(h);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: T
                                });
                                const O = T.proposer.publicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: O
                                });
                                const N = m.responderPublicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: N
                                });
                                const q = yield t.client.core.crypto.generateSharedKey(O, N);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: q
                                });
                                const J = yield t.client.core.relayer.subscribe(q);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: J
                                }), yield t.client.core.pairing.activate({
                                    topic: a
                                })
                            } else Pt(u) && (yield t.client.proposal.delete(h, (0, E.D6)("USER_DISCONNECTED")), t.events.emit((0, E.E0)("session_connect"), {
                                error: u.error
                            }))
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: m
                            } = u;
                            try {
                                t.isValidSessionSettleRequest(m);
                                const {
                                    relay: T,
                                    controller: O,
                                    expiry: N,
                                    namespaces: q,
                                    requiredNamespaces: J,
                                    optionalNamespaces: fe,
                                    sessionProperties: se,
                                    pairingTopic: Oe
                                } = u.params, ze = Dr({
                                    topic: a,
                                    relay: T,
                                    expiry: N,
                                    namespaces: q,
                                    acknowledged: !0,
                                    pairingTopic: Oe,
                                    requiredNamespaces: J,
                                    optionalNamespaces: fe,
                                    controller: O.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: t.client.metadata
                                    },
                                    peer: {
                                        publicKey: O.publicKey,
                                        metadata: O.metadata
                                    }
                                }, se && {
                                    sessionProperties: se
                                });
                                yield t.sendResult({
                                    id: u.id,
                                    topic: a,
                                    result: !0
                                }), t.events.emit((0, E.E0)("session_connect"), {
                                    session: ze
                                }), t.cleanupDuplicatePairings(ze)
                            } catch (T) {
                                yield t.sendError(h, a, T), t.client.logger.error(T)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            jt(u) ? (yield t.client.session.update(a, {
                                acknowledged: !0
                            }), t.events.emit((0, E.E0)("session_approve", h), {})) : Pt(u) && (yield t.client.session.delete(a, (0, E.D6)("USER_DISCONNECTED")), t.events.emit((0, E.E0)("session_approve", h), {
                                error: u.error
                            }))
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                params: h,
                                id: m
                            } = u;
                            try {
                                const T = `${a}_session_update`,
                                    O = E.O6.get(T);
                                if (O && t.isRequestOutOfSync(O, m)) return void t.client.logger.info(`Discarding out of sync request - ${m}`);
                                t.isValidUpdate(Dr({
                                    topic: a
                                }, h)), yield t.client.session.update(a, {
                                    namespaces: h.namespaces
                                }), yield t.sendResult({
                                    id: m,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_update", {
                                    id: m,
                                    topic: a,
                                    params: h
                                }), E.O6.set(T, m)
                            } catch (T) {
                                yield t.sendError(m, a, T), t.client.logger.error(T)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isRequestOutOfSync = (o, a) => parseInt(a.toString().slice(0, -3)) <= parseInt(o.toString().slice(0, -3)), this.onSessionUpdateResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        jt(a) ? this.events.emit((0, E.E0)("session_update", u), {}) : Pt(a) && this.events.emit((0, E.E0)("session_update", u), {
                            error: a.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidExtend({
                                    topic: a
                                }), yield t.setExpiry(a, (0, E.gn)(Ns)), yield t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_extend", {
                                    id: h,
                                    topic: a
                                })
                            } catch (m) {
                                yield t.sendError(h, a, m), t.client.logger.error(m)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        jt(a) ? this.events.emit((0, E.E0)("session_extend", u), {}) : Pt(a) && this.events.emit((0, E.E0)("session_extend", u), {
                            error: a.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidPing({
                                    topic: a
                                }), yield t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_ping", {
                                    id: h,
                                    topic: a
                                })
                            } catch (m) {
                                yield t.sendError(h, a, m), t.client.logger.error(m)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        setTimeout(() => {
                            jt(a) ? this.events.emit((0, E.E0)("session_ping", u), {}) : Pt(a) && this.events.emit((0, E.E0)("session_ping", u), {
                                error: a.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h
                            } = u;
                            try {
                                t.isValidDisconnect({
                                    topic: a,
                                    reason: u.params
                                }), yield Promise.all([new Promise(m => {
                                    t.client.core.relayer.once("relayer_publish", (0, y.Z)(function*() {
                                        m(yield t.deleteSession(a))
                                    }))
                                }), t.sendResult({
                                    id: h,
                                    topic: a,
                                    result: !0
                                })]), t.client.events.emit("session_delete", {
                                    id: h,
                                    topic: a
                                })
                            } catch (m) {
                                t.client.logger.error(m)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: m
                            } = u;
                            try {
                                t.isValidRequest(Dr({
                                    topic: a
                                }, m));
                                const T = (0, E.rj)(JSON.stringify(Kr("wc_sessionRequest", m, h))),
                                    O = t.client.session.get(a),
                                    q = {
                                        id: h,
                                        topic: a,
                                        params: m,
                                        verifyContext: yield t.getVerifyContext(T, O.peer.metadata)
                                    };
                                yield t.setPendingSessionRequest(q), t.addSessionRequestToSessionRequestQueue(q), t.processSessionRequestQueue()
                            } catch (T) {
                                yield t.sendError(h, a, T), t.client.logger.error(T)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (o, a) => {
                        const {
                            id: u
                        } = a;
                        jt(a) ? this.events.emit((0, E.E0)("session_request", u), {
                            result: a.result
                        }) : Pt(a) && this.events.emit((0, E.E0)("session_request", u), {
                            error: a.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const {
                                id: h,
                                params: m
                            } = u;
                            try {
                                const T = `${a}_session_event_${m.event.name}`,
                                    O = E.O6.get(T);
                                if (O && t.isRequestOutOfSync(O, h)) return void t.client.logger.info(`Discarding out of sync request - ${h}`);
                                t.isValidEmit(Dr({
                                    topic: a
                                }, m)), t.client.events.emit("session_event", {
                                    id: h,
                                    topic: a,
                                    params: m
                                }), E.O6.set(T, h)
                            } catch (T) {
                                yield t.sendError(h, a, T), t.client.logger.error(T)
                            }
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.addSessionRequestToSessionRequestQueue = o => {
                        this.sessionRequestQueue.queue.push(o)
                    }, this.cleanupAfterResponse = o => {
                        this.deletePendingSessionRequest(o.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = "IDLE", this.processSessionRequestQueue()
                        }, (0, Ie.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if ("ACTIVE" === this.sessionRequestQueue.state) return void this.client.logger.info("session request queue is already active.");
                        const o = this.sessionRequestQueue.queue[0];
                        if (o) try {
                            this.sessionRequestQueue.state = "ACTIVE", this.client.events.emit("session_request", o)
                        } catch (a) {
                            this.client.logger.error(a)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = o => {
                        if (o.active) return;
                        const a = this.client.proposal.getAll().find(u => u.pairingTopic === o.topic);
                        a && this.onSessionProposeRequest(o.topic, Kr("wc_sessionPropose", {
                            requiredNamespaces: a.requiredNamespaces,
                            optionalNamespaces: a.optionalNamespaces,
                            relays: a.relays,
                            proposer: a.proposer,
                            sessionProperties: a.sessionProperties
                        }, a.id))
                    }, this.isValidConnect = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(a)}`);
                                throw new Error(N)
                            }
                            const {
                                pairingTopic: u,
                                requiredNamespaces: h,
                                optionalNamespaces: m,
                                sessionProperties: T,
                                relays: O
                            } = a;
                            if ((0, E.o8)(u) || (yield t.isValidPairingTopic(u)), !(0, E.PM)(O, !0)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `connect() relays: ${O}`);
                                throw new Error(N)
                            }!(0, E.o8)(h) && 0 !== (0, E.L5)(h) && t.validateNamespaces(h, "requiredNamespaces"), !(0, E.o8)(m) && 0 !== (0, E.L5)(m) && t.validateNamespaces(m, "optionalNamespaces"), (0, E.o8)(T) || t.validateSessionProps(T, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (o, a) => {
                        const u = (0, E.n)(o, "connect()", a);
                        if (u) throw new Error(u.message)
                    }, this.isValidApprove = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) throw new Error((0, E.Z7)("MISSING_OR_INVALID", `approve() params: ${a}`).message);
                            const {
                                id: u,
                                namespaces: h,
                                relayProtocol: m,
                                sessionProperties: T
                            } = a;
                            yield t.isValidProposalId(u);
                            const O = t.client.proposal.get(u),
                                N = (0, E.in)(h, "approve()");
                            if (N) throw new Error(N.message);
                            const q = (0, E.rF)(O.requiredNamespaces, h, "approve()");
                            if (q) throw new Error(q.message);
                            if (!(0, E.M_)(m, !0)) {
                                const {
                                    message: J
                                } = (0, E.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${m}`);
                                throw new Error(J)
                            }(0, E.o8)(T) || t.validateSessionProps(T, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: m
                                } = (0, E.Z7)("MISSING_OR_INVALID", `reject() params: ${a}`);
                                throw new Error(m)
                            }
                            const {
                                id: u,
                                reason: h
                            } = a;
                            if (yield t.isValidProposalId(u), !(0, E.$t)(h)) {
                                const {
                                    message: m
                                } = (0, E.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(h)}`);
                                throw new Error(m)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = o => {
                        if (!(0, E.EJ)(o)) {
                            const {
                                message: N
                            } = (0, E.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${o}`);
                            throw new Error(N)
                        }
                        const {
                            relay: a,
                            controller: u,
                            namespaces: h,
                            expiry: m
                        } = o;
                        if (!(0, E.Z2)(a)) {
                            const {
                                message: N
                            } = (0, E.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(N)
                        }
                        const T = (0, E.Dd)(u, "onSessionSettleRequest()");
                        if (T) throw new Error(T.message);
                        const O = (0, E.in)(h, "onSessionSettleRequest()");
                        if (O) throw new Error(O.message);
                        if ((0, E.Bw)(m)) {
                            const {
                                message: N
                            } = (0, E.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(N)
                        }
                    }, this.isValidUpdate = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `update() params: ${a}`);
                                throw new Error(N)
                            }
                            const {
                                topic: u,
                                namespaces: h
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const m = t.client.session.get(u),
                                T = (0, E.in)(h, "update()");
                            if (T) throw new Error(T.message);
                            const O = (0, E.rF)(m.requiredNamespaces, h, "update()");
                            if (O) throw new Error(O.message)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("MISSING_OR_INVALID", `extend() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() params: ${a}`);
                                throw new Error(N)
                            }
                            const {
                                topic: u,
                                request: h,
                                chainId: m,
                                expiry: T
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const {
                                namespaces: O
                            } = t.client.session.get(u);
                            if (!(0, E.p8)(O, m)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() chainId: ${m}`);
                                throw new Error(N)
                            }
                            if (!(0, E.hH)(h)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(h)}`);
                                throw new Error(N)
                            }
                            if (!(0, E.al)(O, m, h.method)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() method: ${h.method}`);
                                throw new Error(N)
                            }
                            if (T && !(0, E.ON)(T, fa)) {
                                const {
                                    message: N
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() expiry: ${T}. Expiry must be a number (in seconds) between ${fa.min} and ${fa.max}`);
                                throw new Error(N)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var o = (0, y.Z)(function*(a) {
                            var u;
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: T
                                } = (0, E.Z7)("MISSING_OR_INVALID", `respond() params: ${a}`);
                                throw new Error(T)
                            }
                            const {
                                topic: h,
                                response: m
                            } = a;
                            try {
                                yield t.isValidSessionTopic(h)
                            } catch (T) {
                                throw null != (u = a ? .response) && u.id && t.cleanupAfterResponse(a), T
                            }
                            if (!(0, E.JT)(m)) {
                                const {
                                    message: T
                                } = (0, E.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(m)}`);
                                throw new Error(T)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionOrPairingTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: O
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() params: ${a}`);
                                throw new Error(O)
                            }
                            const {
                                topic: u,
                                event: h,
                                chainId: m
                            } = a;
                            yield t.isValidSessionTopic(u);
                            const {
                                namespaces: T
                            } = t.client.session.get(u);
                            if (!(0, E.p8)(T, m)) {
                                const {
                                    message: O
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() chainId: ${m}`);
                                throw new Error(O)
                            }
                            if (!(0, E.nf)(h)) {
                                const {
                                    message: O
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(h)}`);
                                throw new Error(O)
                            }
                            if (!(0, E.sI)(T, m, h.name)) {
                                const {
                                    message: O
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(h)}`);
                                throw new Error(O)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var o = (0, y.Z)(function*(a) {
                            if (!(0, E.EJ)(a)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${a}`);
                                throw new Error(h)
                            }
                            const {
                                topic: u
                            } = a;
                            yield t.isValidSessionOrPairingTopic(u)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var o = (0, y.Z)(function*(a, u) {
                            const h = {
                                verified: {
                                    verifyUrl: u.verifyUrl || Ei,
                                    validation: "UNKNOWN",
                                    origin: u.url || ""
                                }
                            };
                            try {
                                const m = yield t.client.core.verify.resolve({
                                    attestationId: a,
                                    verifyUrl: u.verifyUrl
                                });
                                m && (h.verified.origin = m.origin, h.verified.isScam = m.isScam, h.verified.validation = m.origin === new URL(u.url).origin ? "VALID" : "INVALID")
                            } catch (m) {
                                t.client.logger.info(m)
                            }
                            return t.client.logger.info(`Verify context: ${JSON.stringify(h)}`), h
                        });
                        return function(a, u) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (o, a) => {
                        Object.values(o).forEach(u => {
                            if (!(0, E.M_)(u, !1)) {
                                const {
                                    message: h
                                } = (0, E.Z7)("MISSING_OR_INVALID", `${a} must be in Record<string, string> format. Received: ${JSON.stringify(u)}`);
                                throw new Error(h)
                            }
                        })
                    }
                }
                isInitialized() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (!r.initialized) {
                            const {
                                message: t
                            } = (0, E.Z7)("NOT_INITIALIZED", r.name);
                            throw new Error(t)
                        }
                        yield r.client.core.relayer.confirmOnlineStateOrThrow()
                    })()
                }
                registerRelayerEvents() {
                    var r = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var t = (0, y.Z)(function*(o) {
                            const {
                                topic: a,
                                message: u
                            } = o;
                            if (r.ignoredPayloadTypes.includes(r.client.core.crypto.getPayloadType(u))) return;
                            const h = yield r.client.core.crypto.decode(a, u);
                            try {
                                Or(h) ? (r.client.core.history.set(a, h), r.onRelayEventRequest({
                                    topic: a,
                                    payload: h
                                })) : Bt(h) ? (yield r.client.core.history.resolve(h), yield r.onRelayEventResponse({
                                    topic: a,
                                    payload: h
                                }), r.client.core.history.delete(a, h.id)) : r.onRelayEventUnknownPayload({
                                    topic: a,
                                    payload: h
                                })
                            } catch (m) {
                                r.client.logger.error(m)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var r = this;
                    this.client.core.expirer.on(Vr_expired, function() {
                        var t = (0, y.Z)(function*(o) {
                            const {
                                topic: a,
                                id: u
                            } = (0, E.iP)(o.target);
                            if (u && r.client.pendingRequest.keys.includes(u)) return yield r.deletePendingSessionRequest(u, (0, E.Z7)("EXPIRED"), !0);
                            a ? r.client.session.keys.includes(a) && (yield r.deleteSession(a, !0), r.client.events.emit("session_expire", {
                                topic: a
                            })) : u && (yield r.deleteProposal(u, !0), r.client.events.emit("proposal_expire", {
                                id: u
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on("pairing_create", r => this.onPairingCreated(r))
                }
                isValidPairingTopic(r) {
                    if (!(0, E.M_)(r, !1)) {
                        const {
                            message: t
                        } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(r)) {
                        const {
                            message: t
                        } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
                        throw new Error(t)
                    }
                    if ((0, E.Bw)(this.client.core.pairing.pairings.get(r).expiry)) {
                        const {
                            message: t
                        } = (0, E.Z7)("EXPIRED", `pairing topic: ${r}`);
                        throw new Error(t)
                    }
                }
                isValidSessionTopic(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!(0, E.M_)(r, !1)) {
                            const {
                                message: o
                            } = (0, E.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
                            throw new Error(o)
                        }
                        if (!t.client.session.keys.includes(r)) {
                            const {
                                message: o
                            } = (0, E.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
                            throw new Error(o)
                        }
                        if ((0, E.Bw)(t.client.session.get(r).expiry)) {
                            yield t.deleteSession(r);
                            const {
                                message: o
                            } = (0, E.Z7)("EXPIRED", `session topic: ${r}`);
                            throw new Error(o)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (t.client.session.keys.includes(r)) yield t.isValidSessionTopic(r);
                        else {
                            if (!t.client.core.pairing.pairings.keys.includes(r)) {
                                if ((0, E.M_)(r, !1)) {
                                    const {
                                        message: o
                                    } = (0, E.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
                                    throw new Error(o)
                                } {
                                    const {
                                        message: o
                                    } = (0, E.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
                                    throw new Error(o)
                                }
                            }
                            t.isValidPairingTopic(r)
                        }
                    })()
                }
                isValidProposalId(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!(0, E.Q0)(r)) {
                            const {
                                message: o
                            } = (0, E.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
                            throw new Error(o)
                        }
                        if (!t.client.proposal.keys.includes(r)) {
                            const {
                                message: o
                            } = (0, E.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
                            throw new Error(o)
                        }
                        if ((0, E.Bw)(t.client.proposal.get(r).expiry)) {
                            yield t.deleteProposal(r);
                            const {
                                message: o
                            } = (0, E.Z7)("EXPIRED", `proposal id: ${r}`);
                            throw new Error(o)
                        }
                    })()
                }
            }
            class bg extends Ds {
                constructor(r, t) {
                    super(r, t, "proposal", ua), this.core = r, this.logger = t
                }
            }
            class wg extends Ds {
                constructor(r, t) {
                    super(r, t, "session", ua), this.core = r, this.logger = t
                }
            }
            class xg extends Ds {
                constructor(r, t) {
                    super(r, t, "request", ua, o => o.id), this.core = r, this.logger = t
                }
            }
            class ha extends gt {
                constructor(r) {
                    var t;
                    super(r), t = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new pe.EventEmitter, this.on = (a, u) => this.events.on(a, u), this.once = (a, u) => this.events.once(a, u), this.off = (a, u) => this.events.off(a, u), this.removeListener = (a, u) => this.events.removeListener(a, u), this.removeAllListeners = a => this.events.removeAllListeners(a), this.connect = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.connect(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.pair(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.approve(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.reject(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.update(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.extend(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.request(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.respond(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.ping(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.emit(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var a = (0, y.Z)(function*(u) {
                            try {
                                return yield t.engine.disconnect(u)
                            } catch (h) {
                                throw t.logger.error(h.message), h
                            }
                        });
                        return function(u) {
                            return a.apply(this, arguments)
                        }
                    }(), this.find = a => {
                        try {
                            return this.engine.find(a)
                        } catch (u) {
                            throw this.logger.error(u.message), u
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (a) {
                            throw this.logger.error(a.message), a
                        }
                    }, this.name = r ? .name || "client", this.metadata = r ? .metadata || (0, E.D)();
                    const o = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Pe.pino)((0, Pe.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    }));
                    this.core = r ? .core || new cg(r), this.logger = (0, Pe.generateChildLogger)(o, this.name), this.session = new wg(this.core, this.logger), this.proposal = new bg(this.core, this.logger), this.pendingRequest = new xg(this.core, this.logger), this.engine = new mg(this)
                }
                static init(r) {
                    return (0, y.Z)(function*() {
                        const t = new ha(r);
                        return yield t.initialize(), t
                    })()
                }
                get context() {
                    return (0, Pe.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.logger.trace("Initialized");
                        try {
                            yield r.core.start(), yield r.session.init(), yield r.proposal.init(), yield r.pendingRequest.init(), yield r.engine.init(), r.core.verify.init({
                                verifyUrl: r.metadata.verifyUrl
                            }), r.logger.info("SignClient Initialization Success")
                        } catch (t) {
                            throw r.logger.info("SignClient Initialization Failure"), r.logger.error(t.message), t
                        }
                    })()
                }
            }
            var Eg = ne(2055),
                Nu = ne.n(Eg);
            const Fu = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class ju {
                constructor(r, t = !1) {
                    if (this.url = r, this.disableProviderPing = t, this.events = new pe.EventEmitter, this.isAvailable = !1, this.registering = !1, !Ht(r)) throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
                    this.url = r, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                open(r = this.url) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        yield t.register(r)
                    })()
                }
                close() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (!r.isAvailable) throw new Error("Connection already closed");
                        r.onClose()
                    })()
                }
                send(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        o.isAvailable || (yield o.register());
                        try {
                            const a = _t(r),
                                h = yield(yield Nu()(o.url, Object.assign(Object.assign({}, Fu), {
                                    body: a
                                }))).json();
                            o.onPayload({
                                data: h
                            })
                        } catch (a) {
                            o.onError(r.id, a)
                        }
                    })()
                }
                register(r = this.url) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!Ht(r)) throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
                        if (t.registering) {
                            const o = t.events.getMaxListeners();
                            return (t.events.listenerCount("register_error") >= o || t.events.listenerCount("open") >= o) && t.events.setMaxListeners(o + 1), new Promise((a, u) => {
                                t.events.once("register_error", h => {
                                    t.resetMaxListeners(), u(h)
                                }), t.events.once("open", () => {
                                    if (t.resetMaxListeners(), typeof t.isAvailable > "u") return u(new Error("HTTP connection is missing or invalid"));
                                    a()
                                })
                            })
                        }
                        t.url = r, t.registering = !0;
                        try {
                            if (!t.disableProviderPing) {
                                const o = _t({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: []
                                });
                                yield Nu()(r, Object.assign(Object.assign({}, Fu), {
                                    body: o
                                }))
                            }
                            t.onOpen()
                        } catch (o) {
                            const a = t.parseError(o);
                            throw t.events.emit("register_error", a), t.onClose(), a
                        }
                    })()
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(r) {
                    if (typeof r.data > "u") return;
                    const t = "string" == typeof r.data ? Ct(r.data) : r.data;
                    this.events.emit("payload", t)
                }
                onError(r, t) {
                    const o = this.parseError(t),
                        u = bi(r, o.message || o.toString());
                    this.events.emit("payload", u)
                }
                parseError(r, t = this.url) {
                    return _i(r, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const ei = ju,
                Zu = "wc@2:universal_provider:";
            var f, r, Ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                da = {
                    exports: {}
                };
            f = da, r = da.exports,
                function() {
                    var t, h = "Expected a function",
                        T = "__lodash_hash_undefined__",
                        N = "__lodash_placeholder__",
                        ri = 1 / 0,
                        qn = 9007199254740991,
                        pn = 4294967295,
                        _y = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        Ii = "[object Arguments]",
                        $s = "[object Array]",
                        Yi = "[object Boolean]",
                        Xi = "[object Date]",
                        Us = "[object Error]",
                        Hs = "[object Function]",
                        Yu = "[object GeneratorFunction]",
                        sn = "[object Map]",
                        es = "[object Number]",
                        Pn = "[object Object]",
                        Xu = "[object Promise]",
                        ts = "[object RegExp]",
                        on = "[object Set]",
                        rs = "[object String]",
                        Bs = "[object Symbol]",
                        ns = "[object WeakMap]",
                        is = "[object ArrayBuffer]",
                        Pi = "[object DataView]",
                        ma = "[object Float32Array]",
                        ba = "[object Float64Array]",
                        wa = "[object Int8Array]",
                        xa = "[object Int16Array]",
                        Ea = "[object Int32Array]",
                        Ia = "[object Uint8Array]",
                        Pa = "[object Uint8ClampedArray]",
                        Sa = "[object Uint16Array]",
                        Oa = "[object Uint32Array]",
                        Py = /\b__p \+= '';/g,
                        Sy = /\b(__p \+=) '' \+/g,
                        Oy = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        el = /&(?:amp|lt|gt|quot|#39);/g,
                        tl = /[&<>"']/g,
                        Ry = RegExp(el.source),
                        Ay = RegExp(tl.source),
                        Ty = /<%-([\s\S]+?)%>/g,
                        Cy = /<%([\s\S]+?)%>/g,
                        rl = /<%=([\s\S]+?)%>/g,
                        Dy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        Ny = /^\w*$/,
                        Fy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Ra = /[\\^$.*+?()[\]{}|]/g,
                        Ly = RegExp(Ra.source),
                        Aa = /^\s+/,
                        jy = /\s/,
                        My = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        Zy = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        zy = /,? & /,
                        qy = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        $y = /[()=,{}\[\]\/\s]/,
                        Uy = /\\(\\)?/g,
                        Hy = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        nl = /\w*$/,
                        By = /^[-+]0x[0-9a-f]+$/i,
                        Ky = /^0b[01]+$/i,
                        Vy = /^\[object .+?Constructor\]$/,
                        ky = /^0o[0-7]+$/i,
                        Gy = /^(?:0|[1-9]\d*)$/,
                        Wy = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        Ks = /($^)/,
                        Jy = /['\n\r\u2028\u2029\\]/g,
                        Vs = "\\ud800-\\udfff",
                        il = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        sl = "\\u2700-\\u27bf",
                        ol = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        al = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        cl = "\\ufe0e\\ufe0f",
                        ul = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        i0 = "[" + Vs + "]",
                        ll = "[" + ul + "]",
                        ks = "[" + il + "]",
                        fl = "\\d+",
                        s0 = "[" + sl + "]",
                        hl = "[" + ol + "]",
                        dl = "[^" + Vs + ul + fl + sl + ol + al + "]",
                        Ca = "\\ud83c[\\udffb-\\udfff]",
                        pl = "[^" + Vs + "]",
                        Da = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Na = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Si = "[" + al + "]",
                        yl = "(?:" + hl + "|" + dl + ")",
                        a0 = "(?:" + Si + "|" + dl + ")",
                        vl = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        _l = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        ml = "(?:" + ks + "|" + Ca + ")?",
                        bl = "[" + cl + "]?",
                        wl = bl + ml + "(?:\\u200d(?:" + [pl, Da, Na].join("|") + ")" + bl + ml + ")*",
                        f0 = "(?:" + [s0, Da, Na].join("|") + ")" + wl,
                        h0 = "(?:" + [pl + ks + "?", ks, Da, Na, i0].join("|") + ")",
                        d0 = RegExp("['\u2019]", "g"),
                        p0 = RegExp(ks, "g"),
                        Fa = RegExp(Ca + "(?=" + Ca + ")|" + h0 + wl, "g"),
                        g0 = RegExp([Si + "?" + hl + "+" + vl + "(?=" + [ll, Si, "$"].join("|") + ")", a0 + "+" + _l + "(?=" + [ll, Si + yl, "$"].join("|") + ")", Si + "?" + yl + "+" + vl, Si + "+" + _l, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", fl, f0].join("|"), "g"),
                        y0 = RegExp("[\\u200d" + Vs + il + cl + "]"),
                        v0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        _0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        m0 = -1,
                        wt = {};
                    wt[ma] = wt[ba] = wt[wa] = wt[xa] = wt[Ea] = wt[Ia] = wt[Pa] = wt[Sa] = wt[Oa] = !0, wt[Ii] = wt[$s] = wt[is] = wt[Yi] = wt[Pi] = wt[Xi] = wt[Us] = wt[Hs] = wt[sn] = wt[es] = wt[Pn] = wt[ts] = wt[on] = wt[rs] = wt[ns] = !1;
                    var yt = {};
                    yt[Ii] = yt[$s] = yt[is] = yt[Pi] = yt[Yi] = yt[Xi] = yt[ma] = yt[ba] = yt[wa] = yt[xa] = yt[Ea] = yt[sn] = yt[es] = yt[Pn] = yt[ts] = yt[on] = yt[rs] = yt[Bs] = yt[Ia] = yt[Pa] = yt[Sa] = yt[Oa] = !0, yt[Us] = yt[Hs] = yt[ns] = !1;
                    var E0 = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        I0 = parseFloat,
                        P0 = parseInt,
                        xl = "object" == typeof Ji && Ji && Ji.Object === Object && Ji,
                        S0 = "object" == typeof self && self && self.Object === Object && self,
                        _r = xl || S0 || Function("return this")(),
                        La = r && !r.nodeType && r,
                        ni = La && f && !f.nodeType && f,
                        El = ni && ni.exports === La,
                        ja = El && xl.process,
                        kr = function() {
                            try {
                                return ni && ni.require && ni.require("util").types || ja && ja.binding && ja.binding("util")
                            } catch {}
                        }(),
                        Il = kr && kr.isArrayBuffer,
                        Pl = kr && kr.isDate,
                        Sl = kr && kr.isMap,
                        Ol = kr && kr.isRegExp,
                        Rl = kr && kr.isSet,
                        Al = kr && kr.isTypedArray;

                    function Mr(j, k, z) {
                        switch (z.length) {
                            case 0:
                                return j.call(k);
                            case 1:
                                return j.call(k, z[0]);
                            case 2:
                                return j.call(k, z[0], z[1]);
                            case 3:
                                return j.call(k, z[0], z[1], z[2])
                        }
                        return j.apply(k, z)
                    }

                    function O0(j, k, z, _e) {
                        for (var Fe = -1, rt = null == j ? 0 : j.length; ++Fe < rt;) {
                            var lr = j[Fe];
                            k(_e, lr, z(lr), j)
                        }
                        return _e
                    }

                    function Gr(j, k) {
                        for (var z = -1, _e = null == j ? 0 : j.length; ++z < _e && !1 !== k(j[z], z, j););
                        return j
                    }

                    function R0(j, k) {
                        for (var z = null == j ? 0 : j.length; z-- && !1 !== k(j[z], z, j););
                        return j
                    }

                    function Tl(j, k) {
                        for (var z = -1, _e = null == j ? 0 : j.length; ++z < _e;)
                            if (!k(j[z], z, j)) return !1;
                        return !0
                    }

                    function $n(j, k) {
                        for (var z = -1, _e = null == j ? 0 : j.length, Fe = 0, rt = []; ++z < _e;) {
                            var lr = j[z];
                            k(lr, z, j) && (rt[Fe++] = lr)
                        }
                        return rt
                    }

                    function Gs(j, k) {
                        return !(null == j || !j.length) && Oi(j, k, 0) > -1
                    }

                    function Ma(j, k, z) {
                        for (var _e = -1, Fe = null == j ? 0 : j.length; ++_e < Fe;)
                            if (z(k, j[_e])) return !0;
                        return !1
                    }

                    function Ot(j, k) {
                        for (var z = -1, _e = null == j ? 0 : j.length, Fe = Array(_e); ++z < _e;) Fe[z] = k(j[z], z, j);
                        return Fe
                    }

                    function Un(j, k) {
                        for (var z = -1, _e = k.length, Fe = j.length; ++z < _e;) j[Fe + z] = k[z];
                        return j
                    }

                    function Za(j, k, z, _e) {
                        var Fe = -1,
                            rt = null == j ? 0 : j.length;
                        for (_e && rt && (z = j[++Fe]); ++Fe < rt;) z = k(z, j[Fe], Fe, j);
                        return z
                    }

                    function A0(j, k, z, _e) {
                        var Fe = null == j ? 0 : j.length;
                        for (_e && Fe && (z = j[--Fe]); Fe--;) z = k(z, j[Fe], Fe, j);
                        return z
                    }

                    function za(j, k) {
                        for (var z = -1, _e = null == j ? 0 : j.length; ++z < _e;)
                            if (k(j[z], z, j)) return !0;
                        return !1
                    }
                    var T0 = qa("length");

                    function Cl(j, k, z) {
                        var _e;
                        return z(j, function(Fe, rt, lr) {
                            if (k(Fe, rt, lr)) return _e = rt, !1
                        }), _e
                    }

                    function Ws(j, k, z, _e) {
                        for (var Fe = j.length, rt = z + (_e ? 1 : -1); _e ? rt-- : ++rt < Fe;)
                            if (k(j[rt], rt, j)) return rt;
                        return -1
                    }

                    function Oi(j, k, z) {
                        return k == k ? function B0(j, k, z) {
                            for (var _e = z - 1, Fe = j.length; ++_e < Fe;)
                                if (j[_e] === k) return _e;
                            return -1
                        }(j, k, z) : Ws(j, Dl, z)
                    }

                    function N0(j, k, z, _e) {
                        for (var Fe = z - 1, rt = j.length; ++Fe < rt;)
                            if (_e(j[Fe], k)) return Fe;
                        return -1
                    }

                    function Dl(j) {
                        return j != j
                    }

                    function Nl(j, k) {
                        var z = null == j ? 0 : j.length;
                        return z ? Ua(j, k) / z : NaN
                    }

                    function qa(j) {
                        return function(k) {
                            return null == k ? t : k[j]
                        }
                    }

                    function $a(j) {
                        return function(k) {
                            return null == j ? t : j[k]
                        }
                    }

                    function Fl(j, k, z, _e, Fe) {
                        return Fe(j, function(rt, lr, dt) {
                            z = _e ? (_e = !1, rt) : k(z, rt, lr, dt)
                        }), z
                    }

                    function Ua(j, k) {
                        for (var z, _e = -1, Fe = j.length; ++_e < Fe;) {
                            var rt = k(j[_e]);
                            rt !== t && (z = z === t ? rt : z + rt)
                        }
                        return z
                    }

                    function Ha(j, k) {
                        for (var z = -1, _e = Array(j); ++z < j;) _e[z] = k(z);
                        return _e
                    }

                    function Ll(j) {
                        return j && j.slice(0, zl(j) + 1).replace(Aa, "")
                    }

                    function Zr(j) {
                        return function(k) {
                            return j(k)
                        }
                    }

                    function Ba(j, k) {
                        return Ot(k, function(z) {
                            return j[z]
                        })
                    }

                    function ss(j, k) {
                        return j.has(k)
                    }

                    function jl(j, k) {
                        for (var z = -1, _e = j.length; ++z < _e && Oi(k, j[z], 0) > -1;);
                        return z
                    }

                    function Ml(j, k) {
                        for (var z = j.length; z-- && Oi(k, j[z], 0) > -1;);
                        return z
                    }
                    var M0 = $a({\
                            u00c0: "A",
                            \u00c1: "A",
                            \u00c2: "A",
                            \u00c3: "A",
                            \u00c4: "A",
                            \u00c5: "A",
                            \u00e0: "a",
                            \u00e1: "a",
                            \u00e2: "a",
                            \u00e3: "a",
                            \u00e4: "a",
                            \u00e5: "a",
                            \u00c7: "C",
                            \u00e7: "c",
                            \u00d0: "D",
                            \u00f0: "d",
                            \u00c8: "E",
                            \u00c9: "E",
                            \u00ca: "E",
                            \u00cb: "E",
                            \u00e8: "e",
                            \u00e9: "e",
                            \u00ea: "e",
                            \u00eb: "e",
                            \u00cc: "I",
                            \u00cd: "I",
                            \u00ce: "I",
                            \u00cf: "I",
                            \u00ec: "i",
                            \u00ed: "i",
                            \u00ee: "i",
                            \u00ef: "i",
                            \u00d1: "N",
                            \u00f1: "n",
                            \u00d2: "O",
                            \u00d3: "O",
                            \u00d4: "O",
                            \u00d5: "O",
                            \u00d6: "O",
                            \u00d8: "O",
                            \u00f2: "o",
                            \u00f3: "o",
                            \u00f4: "o",
                            \u00f5: "o",
                            \u00f6: "o",
                            \u00f8: "o",
                            \u00d9: "U",
                            \u00da: "U",
                            \u00db: "U",
                            \u00dc: "U",
                            \u00f9: "u",
                            \u00fa: "u",
                            \u00fb: "u",
                            \u00fc: "u",
                            \u00dd: "Y",
                            \u00fd: "y",
                            \u00ff: "y",
                            \u00c6: "Ae",
                            \u00e6: "ae",
                            \u00de: "Th",
                            \u00fe: "th",
                            \u00df: "ss",
                            \u0100: "A",
                            \u0102: "A",
                            \u0104: "A",
                            \u0101: "a",
                            \u0103: "a",
                            \u0105: "a",
                            \u0106: "C",
                            \u0108: "C",
                            \u010a: "C",
                            \u010c: "C",
                            \u0107: "c",
                            \u0109: "c",
                            \u010b: "c",
                            \u010d: "c",
                            \u010e: "D",
                            \u0110: "D",
                            \u010f: "d",
                            \u0111: "d",
                            \u0112: "E",
                            \u0114: "E",
                            \u0116: "E",
                            \u0118: "E",
                            \u011a: "E",
                            \u0113: "e",
                            \u0115: "e",
                            \u0117: "e",
                            \u0119: "e",
                            \u011b: "e",
                            \u011c: "G",
                            \u011e: "G",
                            \u0120: "G",
                            \u0122: "G",
                            \u011d: "g",
                            \u011f: "g",
                            \u0121: "g",
                            \u0123: "g",
                            \u0124: "H",
                            \u0126: "H",
                            \u0125: "h",
                            \u0127: "h",
                            \u0128: "I",
                            \u012a: "I",
                            \u012c: "I",
                            \u012e: "I",
                            \u0130: "I",
                            \u0129: "i",
                            \u012b: "i",
                            \u012d: "i",
                            \u012f: "i",
                            \u0131: "i",
                            \u0134: "J",
                            \u0135: "j",
                            \u0136: "K",
                            \u0137: "k",
                            \u0138: "k",
                            \u0139: "L",
                            \u013b: "L",
                            \u013d: "L",
                            \u013f: "L",
                            \u0141: "L",
                            \u013a: "l",
                            \u013c: "l",
                            \u013e: "l",
                            \u0140: "l",
                            \u0142: "l",
                            \u0143: "N",
                            \u0145: "N",
                            \u0147: "N",
                            \u014a: "N",
                            \u0144: "n",
                            \u0146: "n",
                            \u0148: "n",
                            \u014b: "n",
                            \u014c: "O",
                            \u014e: "O",
                            \u0150: "O",
                            \u014d: "o",
                            \u014f: "o",
                            \u0151: "o",
                            \u0154: "R",
                            \u0156: "R",
                            \u0158: "R",
                            \u0155: "r",
                            \u0157: "r",
                            \u0159: "r",
                            \u015a: "S",
                            \u015c: "S",
                            \u015e: "S",
                            \u0160: "S",
                            \u015b: "s",
                            \u015d: "s",
                            \u015f: "s",
                            \u0161: "s",
                            \u0162: "T",
                            \u0164: "T",
                            \u0166: "T",
                            \u0163: "t",
                            \u0165: "t",
                            \u0167: "t",
                            \u0168: "U",
                            \u016a: "U",
                            \u016c: "U",
                            \u016e: "U",
                            \u0170: "U",
                            \u0172: "U",
                            \u0169: "u",
                            \u016b: "u",
                            \u016d: "u",
                            \u016f: "u",
                            \u0171: "u",
                            \u0173: "u",
                            \u0174: "W",
                            \u0175: "w",
                            \u0176: "Y",
                            \u0177: "y",
                            \u0178: "Y",
                            \u0179: "Z",
                            \u017b: "Z",
                            \u017d: "Z",
                            \u017a: "z",
                            \u017c: "z",
                            \u017e: "z",
                            \u0132: "IJ",
                            \u0133: "ij",
                            \u0152: "Oe",
                            \u0153: "oe",
                            \u0149: "'n",
                            \u017f: "s"
                        }),
                        Z0 = $a({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function z0(j) {
                        return "\\" + E0[j]
                    }

                    function Ri(j) {
                        return y0.test(j)
                    }

                    function Ka(j) {
                        var k = -1,
                            z = Array(j.size);
                        return j.forEach(function(_e, Fe) {
                            z[++k] = [Fe, _e]
                        }), z
                    }

                    function Zl(j, k) {
                        return function(z) {
                            return j(k(z))
                        }
                    }

                    function Hn(j, k) {
                        for (var z = -1, _e = j.length, Fe = 0, rt = []; ++z < _e;) {
                            var lr = j[z];
                            (lr === k || lr === N) && (j[z] = N, rt[Fe++] = z)
                        }
                        return rt
                    }

                    function Js(j) {
                        var k = -1,
                            z = Array(j.size);
                        return j.forEach(function(_e) {
                            z[++k] = _e
                        }), z
                    }

                    function Ai(j) {
                        return Ri(j) ? function k0(j) {
                            for (var k = Fa.lastIndex = 0; Fa.test(j);) ++k;
                            return k
                        }(j) : T0(j)
                    }

                    function an(j) {
                        return Ri(j) ? function G0(j) {
                            return j.match(Fa) || []
                        }(j) : function C0(j) {
                            return j.split("")
                        }(j)
                    }

                    function zl(j) {
                        for (var k = j.length; k-- && jy.test(j.charAt(k)););
                        return k
                    }
                    var V0 = $a({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        Ti = function j(k) {
                            var e, z = (k = null == k ? _r : Ti.defaults(_r.Object(), k, Ti.pick(_r, _0))).Array,
                                _e = k.Date,
                                Fe = k.Error,
                                rt = k.Function,
                                lr = k.Math,
                                dt = k.Object,
                                Va = k.RegExp,
                                Q0 = k.String,
                                Wr = k.TypeError,
                                Qs = z.prototype,
                                Ci = dt.prototype,
                                Ys = k["__core-js_shared__"],
                                Xs = rt.prototype.toString,
                                ot = Ci.hasOwnProperty,
                                X0 = 0,
                                ql = (e = /[^.]+$/.exec(Ys && Ys.keys && Ys.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "",
                                eo = Ci.toString,
                                ev = Xs.call(dt),
                                tv = _r._,
                                rv = Va("^" + Xs.call(ot).replace(Ra, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                to = El ? k.Buffer : t,
                                Bn = k.Symbol,
                                ro = k.Uint8Array,
                                $l = to ? to.allocUnsafe : t,
                                no = Zl(dt.getPrototypeOf, dt),
                                Ul = dt.create,
                                Hl = Ci.propertyIsEnumerable,
                                io = Qs.splice,
                                Bl = Bn ? Bn.isConcatSpreadable : t,
                                os = Bn ? Bn.iterator : t,
                                ii = Bn ? Bn.toStringTag : t,
                                so = function() {
                                    try {
                                        var e = ui(dt, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                nv = k.clearTimeout !== _r.clearTimeout && k.clearTimeout,
                                iv = _e && _e.now !== _r.Date.now && _e.now,
                                sv = k.setTimeout !== _r.setTimeout && k.setTimeout,
                                oo = lr.ceil,
                                ao = lr.floor,
                                ka = dt.getOwnPropertySymbols,
                                ov = to ? to.isBuffer : t,
                                Kl = k.isFinite,
                                av = Qs.join,
                                cv = Zl(dt.keys, dt),
                                fr = lr.max,
                                Ir = lr.min,
                                uv = _e.now,
                                lv = k.parseInt,
                                Vl = lr.random,
                                fv = Qs.reverse,
                                Ga = ui(k, "DataView"),
                                as = ui(k, "Map"),
                                Wa = ui(k, "Promise"),
                                Di = ui(k, "Set"),
                                cs = ui(k, "WeakMap"),
                                us = ui(dt, "create"),
                                co = cs && new cs,
                                Ni = {},
                                hv = li(Ga),
                                dv = li(as),
                                pv = li(Wa),
                                gv = li(Di),
                                yv = li(cs),
                                uo = Bn ? Bn.prototype : t,
                                ls = uo ? uo.valueOf : t,
                                kl = uo ? uo.toString : t;

                            function _(e) {
                                if (Mt(e) && !je(e) && !(e instanceof Ke)) {
                                    if (e instanceof Jr) return e;
                                    if (ot.call(e, "__wrapped__")) return Wf(e)
                                }
                                return new Jr(e)
                            }
                            var Fi = function() {
                                function e() {}
                                return function(n) {
                                    if (!Tt(n)) return {};
                                    if (Ul) return Ul(n);
                                    e.prototype = n;
                                    var s = new e;
                                    return e.prototype = t, s
                                }
                            }();

                            function lo() {}

                            function Jr(e, n) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t
                            }

                            function Ke(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pn, this.__views__ = []
                            }

                            function si(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function Sn(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function On(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.clear(); ++n < s;) {
                                    var l = e[n];
                                    this.set(l[0], l[1])
                                }
                            }

                            function oi(e) {
                                var n = -1,
                                    s = null == e ? 0 : e.length;
                                for (this.__data__ = new On; ++n < s;) this.add(e[n])
                            }

                            function cn(e) {
                                var n = this.__data__ = new Sn(e);
                                this.size = n.size
                            }

                            function Gl(e, n) {
                                var s = je(e),
                                    l = !s && fi(e),
                                    p = !s && !l && Wn(e),
                                    w = !s && !l && !p && Zi(e),
                                    R = s || l || p || w,
                                    C = R ? Ha(e.length, Q0) : [],
                                    M = C.length;
                                for (var Q in e)(n || ot.call(e, Q)) && (!R || !("length" == Q || p && ("offset" == Q || "parent" == Q) || w && ("buffer" == Q || "byteLength" == Q || "byteOffset" == Q) || Cn(Q, M))) && C.push(Q);
                                return C
                            }

                            function Wl(e) {
                                var n = e.length;
                                return n ? e[oc(0, n - 1)] : t
                            }

                            function Uv(e, n) {
                                return Po(Nr(e), ai(n, 0, e.length))
                            }

                            function Hv(e) {
                                return Po(Nr(e))
                            }

                            function Ja(e, n, s) {
                                (s !== t && !un(e[n], s) || s === t && !(n in e)) && Rn(e, n, s)
                            }

                            function fs(e, n, s) {
                                var l = e[n];
                                (!ot.call(e, n) || !un(l, s) || s === t && !(n in e)) && Rn(e, n, s)
                            }

                            function fo(e, n) {
                                for (var s = e.length; s--;)
                                    if (un(e[s][0], n)) return s;
                                return -1
                            }

                            function Bv(e, n, s, l) {
                                return Kn(e, function(p, w, R) {
                                    n(l, p, s(p), R)
                                }), l
                            }

                            function Jl(e, n) {
                                return e && yn(n, gr(n), e)
                            }

                            function Rn(e, n, s) {
                                "__proto__" == n && so ? so(e, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: s,
                                    writable: !0
                                }) : e[n] = s
                            }

                            function Qa(e, n) {
                                for (var s = -1, l = n.length, p = z(l), w = null == e; ++s < l;) p[s] = w ? t : Cc(e, n[s]);
                                return p
                            }

                            function ai(e, n, s) {
                                return e == e && (s !== t && (e = e <= s ? e : s), n !== t && (e = e >= n ? e : n)), e
                            }

                            function Qr(e, n, s, l, p, w) {
                                var R, C = 1 & n,
                                    M = 2 & n,
                                    Q = 4 & n;
                                if (s && (R = p ? s(e, l, p, w) : s(e)), R !== t) return R;
                                if (!Tt(e)) return e;
                                var Y = je(e);
                                if (Y) {
                                    if (R = function N_(e) {
                                            var n = e.length,
                                                s = new e.constructor(n);
                                            return n && "string" == typeof e[0] && ot.call(e, "index") && (s.index = e.index, s.input = e.input), s
                                        }(e), !C) return Nr(e, R)
                                } else {
                                    var ie = Pr(e),
                                        de = ie == Hs || ie == Yu;
                                    if (Wn(e)) return wf(e, C);
                                    if (ie == Pn || ie == Ii || de && !p) {
                                        if (R = M || de ? {} : qf(e), !C) return M ? function x_(e, n) {
                                            return yn(e, Zf(e), n)
                                        }(e, function Kv(e, n) {
                                            return e && yn(n, Lr(n), e)
                                        }(R, e)) : function w_(e, n) {
                                            return yn(e, bc(e), n)
                                        }(e, Jl(R, e))
                                    } else {
                                        if (!yt[ie]) return p ? e : {};
                                        R = function F_(e, n, s) {
                                            var l = e.constructor;
                                            switch (n) {
                                                case is:
                                                    return dc(e);
                                                case Yi:
                                                case Xi:
                                                    return new l(+e);
                                                case Pi:
                                                    return function v_(e, n) {
                                                        var s = n ? dc(e.buffer) : e.buffer;
                                                        return new e.constructor(s, e.byteOffset, e.byteLength)
                                                    }(e, s);
                                                case ma:
                                                case ba:
                                                case wa:
                                                case xa:
                                                case Ea:
                                                case Ia:
                                                case Pa:
                                                case Sa:
                                                case Oa:
                                                    return xf(e, s);
                                                case sn:
                                                    return new l;
                                                case es:
                                                case rs:
                                                    return new l(e);
                                                case ts:
                                                    return function __(e) {
                                                        var n = new e.constructor(e.source, nl.exec(e));
                                                        return n.lastIndex = e.lastIndex, n
                                                    }(e);
                                                case on:
                                                    return new l;
                                                case Bs:
                                                    return function m_(e) {
                                                        return ls ? dt(ls.call(e)) : {}
                                                    }(e)
                                            }
                                        }(e, ie, C)
                                    }
                                }
                                w || (w = new cn);
                                var xe = w.get(e);
                                if (xe) return xe;
                                w.set(e, R), gh(e) ? e.forEach(function(Ae) {
                                    R.add(Qr(Ae, n, s, Ae, e, w))
                                }) : dh(e) && e.forEach(function(Ae, Be) {
                                    R.set(Be, Qr(Ae, n, s, Be, e, w))
                                });
                                var qe = Y ? t : (Q ? M ? vc : yc : M ? Lr : gr)(e);
                                return Gr(qe || e, function(Ae, Be) {
                                    qe && (Ae = e[Be = Ae]), fs(R, Be, Qr(Ae, n, s, Be, e, w))
                                }), R
                            }

                            function Ql(e, n, s) {
                                var l = s.length;
                                if (null == e) return !l;
                                for (e = dt(e); l--;) {
                                    var p = s[l],
                                        R = e[p];
                                    if (R === t && !(p in e) || !(0, n[p])(R)) return !1
                                }
                                return !0
                            }

                            function Yl(e, n, s) {
                                if ("function" != typeof e) throw new Wr(h);
                                return _s(function() {
                                    e.apply(t, s)
                                }, n)
                            }

                            function hs(e, n, s, l) {
                                var p = -1,
                                    w = Gs,
                                    R = !0,
                                    C = e.length,
                                    M = [],
                                    Q = n.length;
                                if (!C) return M;
                                s && (n = Ot(n, Zr(s))), l ? (w = Ma, R = !1) : n.length >= 200 && (w = ss, R = !1, n = new oi(n));
                                e: for (; ++p < C;) {
                                    var Y = e[p],
                                        ie = null == s ? Y : s(Y);
                                    if (Y = l || 0 !== Y ? Y : 0, R && ie == ie) {
                                        for (var de = Q; de--;)
                                            if (n[de] === ie) continue e;
                                        M.push(Y)
                                    } else w(n, ie, l) || M.push(Y)
                                }
                                return M
                            }
                            _.templateSettings = {
                                escape: Ty,
                                evaluate: Cy,
                                interpolate: rl,
                                variable: "",
                                imports: {
                                    _
                                }
                            }, (_.prototype = lo.prototype).constructor = _, (Jr.prototype = Fi(lo.prototype)).constructor = Jr, (Ke.prototype = Fi(lo.prototype)).constructor = Ke, si.prototype.clear = function bv() {
                                this.__data__ = us ? us(null) : {}, this.size = 0
                            }, si.prototype.delete = function wv(e) {
                                var n = this.has(e) && delete this.__data__[e];
                                return this.size -= n ? 1 : 0, n
                            }, si.prototype.get = function xv(e) {
                                var n = this.__data__;
                                if (us) {
                                    var s = n[e];
                                    return s === T ? t : s
                                }
                                return ot.call(n, e) ? n[e] : t
                            }, si.prototype.has = function Ev(e) {
                                var n = this.__data__;
                                return us ? n[e] !== t : ot.call(n, e)
                            }, si.prototype.set = function Iv(e, n) {
                                var s = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, s[e] = us && n === t ? T : n, this
                            }, Sn.prototype.clear = function Pv() {
                                this.__data__ = [], this.size = 0
                            }, Sn.prototype.delete = function Sv(e) {
                                var n = this.__data__,
                                    s = fo(n, e);
                                return !(s < 0 || (s == n.length - 1 ? n.pop() : io.call(n, s, 1), --this.size, 0))
                            }, Sn.prototype.get = function Ov(e) {
                                var n = this.__data__,
                                    s = fo(n, e);
                                return s < 0 ? t : n[s][1]
                            }, Sn.prototype.has = function Rv(e) {
                                return fo(this.__data__, e) > -1
                            }, Sn.prototype.set = function Av(e, n) {
                                var s = this.__data__,
                                    l = fo(s, e);
                                return l < 0 ? (++this.size, s.push([e, n])) : s[l][1] = n, this
                            }, On.prototype.clear = function Tv() {
                                this.size = 0, this.__data__ = {
                                    hash: new si,
                                    map: new(as || Sn),
                                    string: new si
                                }
                            }, On.prototype.delete = function Cv(e) {
                                var n = Io(this, e).delete(e);
                                return this.size -= n ? 1 : 0, n
                            }, On.prototype.get = function Dv(e) {
                                return Io(this, e).get(e)
                            }, On.prototype.has = function Nv(e) {
                                return Io(this, e).has(e)
                            }, On.prototype.set = function Fv(e, n) {
                                var s = Io(this, e),
                                    l = s.size;
                                return s.set(e, n), this.size += s.size == l ? 0 : 1, this
                            }, oi.prototype.add = oi.prototype.push = function Lv(e) {
                                return this.__data__.set(e, T), this
                            }, oi.prototype.has = function jv(e) {
                                return this.__data__.has(e)
                            }, cn.prototype.clear = function Mv() {
                                this.__data__ = new Sn, this.size = 0
                            }, cn.prototype.delete = function Zv(e) {
                                var n = this.__data__,
                                    s = n.delete(e);
                                return this.size = n.size, s
                            }, cn.prototype.get = function zv(e) {
                                return this.__data__.get(e)
                            }, cn.prototype.has = function qv(e) {
                                return this.__data__.has(e)
                            }, cn.prototype.set = function $v(e, n) {
                                var s = this.__data__;
                                if (s instanceof Sn) {
                                    var l = s.__data__;
                                    if (!as || l.length < 199) return l.push([e, n]), this.size = ++s.size, this;
                                    s = this.__data__ = new On(l)
                                }
                                return s.set(e, n), this.size = s.size, this
                            };
                            var Kn = Sf(gn),
                                Xl = Sf(Xa, !0);

                            function kv(e, n) {
                                var s = !0;
                                return Kn(e, function(l, p, w) {
                                    return s = !!n(l, p, w)
                                }), s
                            }

                            function ho(e, n, s) {
                                for (var l = -1, p = e.length; ++l < p;) {
                                    var w = e[l],
                                        R = n(w);
                                    if (null != R && (C === t ? R == R && !qr(R) : s(R, C))) var C = R,
                                        M = w
                                }
                                return M
                            }

                            function ef(e, n) {
                                var s = [];
                                return Kn(e, function(l, p, w) {
                                    n(l, p, w) && s.push(l)
                                }), s
                            }

                            function mr(e, n, s, l, p) {
                                var w = -1,
                                    R = e.length;
                                for (s || (s = j_), p || (p = []); ++w < R;) {
                                    var C = e[w];
                                    n > 0 && s(C) ? n > 1 ? mr(C, n - 1, s, l, p) : Un(p, C) : l || (p[p.length] = C)
                                }
                                return p
                            }
                            var Ya = Of(),
                                tf = Of(!0);

                            function gn(e, n) {
                                return e && Ya(e, n, gr)
                            }

                            function Xa(e, n) {
                                return e && tf(e, n, gr)
                            }

                            function po(e, n) {
                                return $n(n, function(s) {
                                    return Dn(e[s])
                                })
                            }

                            function ci(e, n) {
                                for (var s = 0, l = (n = kn(n, e)).length; null != e && s < l;) e = e[vn(n[s++])];
                                return s && s == l ? e : t
                            }

                            function rf(e, n, s) {
                                var l = n(e);
                                return je(e) ? l : Un(l, s(e))
                            }

                            function Rr(e) {
                                return null == e ? e === t ? "[object Undefined]" : "[object Null]" : ii && ii in dt(e) ? function T_(e) {
                                    var n = ot.call(e, ii),
                                        s = e[ii];
                                    try {
                                        e[ii] = t;
                                        var l = !0
                                    } catch {}
                                    var p = eo.call(e);
                                    return l && (n ? e[ii] = s : delete e[ii]), p
                                }(e) : function H_(e) {
                                    return eo.call(e)
                                }(e)
                            }

                            function ec(e, n) {
                                return e > n
                            }

                            function Wv(e, n) {
                                return null != e && ot.call(e, n)
                            }

                            function Jv(e, n) {
                                return null != e && n in dt(e)
                            }

                            function tc(e, n, s) {
                                for (var l = s ? Ma : Gs, p = e[0].length, w = e.length, R = w, C = z(w), M = 1 / 0, Q = []; R--;) {
                                    var Y = e[R];
                                    R && n && (Y = Ot(Y, Zr(n))), M = Ir(Y.length, M), C[R] = !s && (n || p >= 120 && Y.length >= 120) ? new oi(R && Y) : t
                                }
                                Y = e[0];
                                var ie = -1,
                                    de = C[0];
                                e: for (; ++ie < p && Q.length < M;) {
                                    var xe = Y[ie],
                                        Re = n ? n(xe) : xe;
                                    if (xe = s || 0 !== xe ? xe : 0, !(de ? ss(de, Re) : l(Q, Re, s))) {
                                        for (R = w; --R;) {
                                            var qe = C[R];
                                            if (!(qe ? ss(qe, Re) : l(e[R], Re, s))) continue e
                                        }
                                        de && de.push(Re), Q.push(xe)
                                    }
                                }
                                return Q
                            }

                            function ds(e, n, s) {
                                var l = null == (e = Bf(e, n = kn(n, e))) ? e : e[vn(Xr(n))];
                                return null == l ? t : Mr(l, e, s)
                            }

                            function nf(e) {
                                return Mt(e) && Rr(e) == Ii
                            }

                            function ps(e, n, s, l, p) {
                                return e === n || (null == e || null == n || !Mt(e) && !Mt(n) ? e != e && n != n : function t_(e, n, s, l, p, w) {
                                    var R = je(e),
                                        C = je(n),
                                        M = R ? $s : Pr(e),
                                        Q = C ? $s : Pr(n),
                                        Y = (M = M == Ii ? Pn : M) == Pn,
                                        ie = (Q = Q == Ii ? Pn : Q) == Pn,
                                        de = M == Q;
                                    if (de && Wn(e)) {
                                        if (!Wn(n)) return !1;
                                        R = !0, Y = !1
                                    }
                                    if (de && !Y) return w || (w = new cn), R || Zi(e) ? Mf(e, n, s, l, p, w) : function R_(e, n, s, l, p, w, R) {
                                        switch (s) {
                                            case Pi:
                                                if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                                                e = e.buffer, n = n.buffer;
                                            case is:
                                                return !(e.byteLength != n.byteLength || !w(new ro(e), new ro(n)));
                                            case Yi:
                                            case Xi:
                                            case es:
                                                return un(+e, +n);
                                            case Us:
                                                return e.name == n.name && e.message == n.message;
                                            case ts:
                                            case rs:
                                                return e == n + "";
                                            case sn:
                                                var C = Ka;
                                            case on:
                                                if (C || (C = Js), e.size != n.size && !(1 & l)) return !1;
                                                var Q = R.get(e);
                                                if (Q) return Q == n;
                                                l |= 2, R.set(e, n);
                                                var Y = Mf(C(e), C(n), l, p, w, R);
                                                return R.delete(e), Y;
                                            case Bs:
                                                if (ls) return ls.call(e) == ls.call(n)
                                        }
                                        return !1
                                    }(e, n, M, s, l, p, w);
                                    if (!(1 & s)) {
                                        var xe = Y && ot.call(e, "__wrapped__"),
                                            Re = ie && ot.call(n, "__wrapped__");
                                        if (xe || Re) {
                                            var qe = xe ? e.value() : e,
                                                Ae = Re ? n.value() : n;
                                            return w || (w = new cn), p(qe, Ae, s, l, w)
                                        }
                                    }
                                    return !!de && (w || (w = new cn), function A_(e, n, s, l, p, w) {
                                        var R = 1 & s,
                                            C = yc(e),
                                            M = C.length;
                                        if (M != yc(n).length && !R) return !1;
                                        for (var ie = M; ie--;) {
                                            var de = C[ie];
                                            if (!(R ? de in n : ot.call(n, de))) return !1
                                        }
                                        var xe = w.get(e),
                                            Re = w.get(n);
                                        if (xe && Re) return xe == n && Re == e;
                                        var qe = !0;
                                        w.set(e, n), w.set(n, e);
                                        for (var Ae = R; ++ie < M;) {
                                            var Be = e[de = C[ie]],
                                                Ve = n[de];
                                            if (l) var $r = R ? l(Ve, Be, de, n, e, w) : l(Be, Ve, de, e, n, w);
                                            if (!($r === t ? Be === Ve || p(Be, Ve, s, l, w) : $r)) {
                                                qe = !1;
                                                break
                                            }
                                            Ae || (Ae = "constructor" == de)
                                        }
                                        if (qe && !Ae) {
                                            var Tr = e.constructor,
                                                Ur = n.constructor;
                                            Tr != Ur && "constructor" in e && "constructor" in n && !("function" == typeof Tr && Tr instanceof Tr && "function" == typeof Ur && Ur instanceof Ur) && (qe = !1)
                                        }
                                        return w.delete(e), w.delete(n), qe
                                    }(e, n, s, l, p, w))
                                }(e, n, s, l, ps, p))
                            }

                            function rc(e, n, s, l) {
                                var p = s.length,
                                    w = p,
                                    R = !l;
                                if (null == e) return !w;
                                for (e = dt(e); p--;) {
                                    var C = s[p];
                                    if (R && C[2] ? C[1] !== e[C[0]] : !(C[0] in e)) return !1
                                }
                                for (; ++p < w;) {
                                    var M = (C = s[p])[0],
                                        Q = e[M],
                                        Y = C[1];
                                    if (R && C[2]) {
                                        if (Q === t && !(M in e)) return !1
                                    } else {
                                        var ie = new cn;
                                        if (l) var de = l(Q, Y, M, e, n, ie);
                                        if (!(de === t ? ps(Y, Q, 3, l, ie) : de)) return !1
                                    }
                                }
                                return !0
                            }

                            function sf(e) {
                                return !(!Tt(e) || function Z_(e) {
                                    return !!ql && ql in e
                                }(e)) && (Dn(e) ? rv : Vy).test(li(e))
                            }

                            function of (e) {
                                return "function" == typeof e ? e : null == e ? jr : "object" == typeof e ? je(e) ? uf(e[0], e[1]) : cf(e) : Rh(e)
                            }

                            function nc(e) {
                                if (!vs(e)) return cv(e);
                                var n = [];
                                for (var s in dt(e)) ot.call(e, s) && "constructor" != s && n.push(s);
                                return n
                            }

                            function ic(e, n) {
                                return e < n
                            }

                            function af(e, n) {
                                var s = -1,
                                    l = Fr(e) ? z(e.length) : [];
                                return Kn(e, function(p, w, R) {
                                    l[++s] = n(p, w, R)
                                }), l
                            }

                            function cf(e) {
                                var n = mc(e);
                                return 1 == n.length && n[0][2] ? Uf(n[0][0], n[0][1]) : function(s) {
                                    return s === e || rc(s, e, n)
                                }
                            }

                            function uf(e, n) {
                                return wc(e) && $f(n) ? Uf(vn(e), n) : function(s) {
                                    var l = Cc(s, e);
                                    return l === t && l === n ? Dc(s, e) : ps(n, l, 3)
                                }
                            }

                            function go(e, n, s, l, p) {
                                e !== n && Ya(n, function(w, R) {
                                    if (p || (p = new cn), Tt(w)) ! function a_(e, n, s, l, p, w, R) {
                                        var C = Ec(e, s),
                                            M = Ec(n, s),
                                            Q = R.get(M);
                                        if (Q) Ja(e, s, Q);
                                        else {
                                            var Y = w ? w(C, M, s + "", e, n, R) : t,
                                                ie = Y === t;
                                            if (ie) {
                                                var de = je(M),
                                                    xe = !de && Wn(M),
                                                    Re = !de && !xe && Zi(M);
                                                Y = M, de || xe || Re ? je(C) ? Y = C : Gt(C) ? Y = Nr(C) : xe ? (ie = !1, Y = wf(M, !0)) : Re ? (ie = !1, Y = xf(M, !0)) : Y = [] : ms(M) || fi(M) ? (Y = C, fi(C) ? Y = _h(C) : (!Tt(C) || Dn(C)) && (Y = qf(M))) : ie = !1
                                            }
                                            ie && (R.set(M, Y), p(Y, M, l, w, R), R.delete(M)), Ja(e, s, Y)
                                        }
                                    }(e, n, R, s, go, l, p);
                                    else {
                                        var C = l ? l(Ec(e, R), w, R + "", e, n, p) : t;
                                        C === t && (C = w), Ja(e, R, C)
                                    }
                                }, Lr)
                            }

                            function lf(e, n) {
                                var s = e.length;
                                if (s) return Cn(n += n < 0 ? s : 0, s) ? e[n] : t
                            }

                            function ff(e, n, s) {
                                n = n.length ? Ot(n, function(w) {
                                    return je(w) ? function(R) {
                                        return ci(R, 1 === w.length ? w[0] : w)
                                    } : w
                                }) : [jr];
                                var l = -1;
                                return n = Ot(n, Zr(Se())),
                                    function F0(j, k) {
                                        var z = j.length;
                                        for (j.sort(k); z--;) j[z] = j[z].value;
                                        return j
                                    }(af(e, function(w, R, C) {
                                        return {
                                            criteria: Ot(n, function(Q) {
                                                return Q(w)
                                            }),
                                            index: ++l,
                                            value: w
                                        }
                                    }), function(w, R) {
                                        return function b_(e, n, s) {
                                            for (var l = -1, p = e.criteria, w = n.criteria, R = p.length, C = s.length; ++l < R;) {
                                                var M = Ef(p[l], w[l]);
                                                if (M) return l >= C ? M : M * ("desc" == s[l] ? -1 : 1)
                                            }
                                            return e.index - n.index
                                        }(w, R, s)
                                    })
                            }

                            function hf(e, n, s) {
                                for (var l = -1, p = n.length, w = {}; ++l < p;) {
                                    var R = n[l],
                                        C = ci(e, R);
                                    s(C, R) && gs(w, kn(R, e), C)
                                }
                                return w
                            }

                            function sc(e, n, s, l) {
                                var p = l ? N0 : Oi,
                                    w = -1,
                                    R = n.length,
                                    C = e;
                                for (e === n && (n = Nr(n)), s && (C = Ot(e, Zr(s))); ++w < R;)
                                    for (var M = 0, Q = n[w], Y = s ? s(Q) : Q;
                                        (M = p(C, Y, M, l)) > -1;) C !== e && io.call(C, M, 1), io.call(e, M, 1);
                                return e
                            }

                            function df(e, n) {
                                for (var s = e ? n.length : 0, l = s - 1; s--;) {
                                    var p = n[s];
                                    if (s == l || p !== w) {
                                        var w = p;
                                        Cn(p) ? io.call(e, p, 1) : uc(e, p)
                                    }
                                }
                                return e
                            }

                            function oc(e, n) {
                                return e + ao(Vl() * (n - e + 1))
                            }

                            function ac(e, n) {
                                var s = "";
                                if (!e || n < 1 || n > qn) return s;
                                do {
                                    n % 2 && (s += e), (n = ao(n / 2)) && (e += e)
                                } while (n);
                                return s
                            }

                            function $e(e, n) {
                                return Ic(Hf(e, n, jr), e + "")
                            }

                            function f_(e) {
                                return Wl(zi(e))
                            }

                            function h_(e, n) {
                                var s = zi(e);
                                return Po(s, ai(n, 0, s.length))
                            }

                            function gs(e, n, s, l) {
                                if (!Tt(e)) return e;
                                for (var p = -1, w = (n = kn(n, e)).length, R = w - 1, C = e; null != C && ++p < w;) {
                                    var M = vn(n[p]),
                                        Q = s;
                                    if ("__proto__" === M || "constructor" === M || "prototype" === M) return e;
                                    if (p != R) {
                                        var Y = C[M];
                                        (Q = l ? l(Y, M, C) : t) === t && (Q = Tt(Y) ? Y : Cn(n[p + 1]) ? [] : {})
                                    }
                                    fs(C, M, Q), C = C[M]
                                }
                                return e
                            }
                            var pf = co ? function(e, n) {
                                    return co.set(e, n), e
                                } : jr,
                                d_ = so ? function(e, n) {
                                    return so(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Fc(n),
                                        writable: !0
                                    })
                                } : jr;

                            function p_(e) {
                                return Po(zi(e))
                            }

                            function Yr(e, n, s) {
                                var l = -1,
                                    p = e.length;
                                n < 0 && (n = -n > p ? 0 : p + n), (s = s > p ? p : s) < 0 && (s += p), p = n > s ? 0 : s - n >>> 0, n >>>= 0;
                                for (var w = z(p); ++l < p;) w[l] = e[l + n];
                                return w
                            }

                            function g_(e, n) {
                                var s;
                                return Kn(e, function(l, p, w) {
                                    return !(s = n(l, p, w))
                                }), !!s
                            }

                            function yo(e, n, s) {
                                var l = 0,
                                    p = null == e ? l : e.length;
                                if ("number" == typeof n && n == n && p <= 2147483647) {
                                    for (; l < p;) {
                                        var w = l + p >>> 1,
                                            R = e[w];
                                        null !== R && !qr(R) && (s ? R <= n : R < n) ? l = w + 1 : p = w
                                    }
                                    return p
                                }
                                return cc(e, n, jr, s)
                            }

                            function cc(e, n, s, l) {
                                var p = 0,
                                    w = null == e ? 0 : e.length;
                                if (0 === w) return 0;
                                for (var R = (n = s(n)) != n, C = null === n, M = qr(n), Q = n === t; p < w;) {
                                    var Y = ao((p + w) / 2),
                                        ie = s(e[Y]),
                                        de = ie !== t,
                                        xe = null === ie,
                                        Re = ie == ie,
                                        qe = qr(ie);
                                    if (R) var Ae = l || Re;
                                    else Ae = Q ? Re && (l || de) : C ? Re && de && (l || !xe) : M ? Re && de && !xe && (l || !qe) : !xe && !qe && (l ? ie <= n : ie < n);
                                    Ae ? p = Y + 1 : w = Y
                                }
                                return Ir(w, 4294967294)
                            }

                            function gf(e, n) {
                                for (var s = -1, l = e.length, p = 0, w = []; ++s < l;) {
                                    var R = e[s],
                                        C = n ? n(R) : R;
                                    if (!s || !un(C, M)) {
                                        var M = C;
                                        w[p++] = 0 === R ? 0 : R
                                    }
                                }
                                return w
                            }

                            function yf(e) {
                                return "number" == typeof e ? e : qr(e) ? NaN : +e
                            }

                            function zr(e) {
                                if ("string" == typeof e) return e;
                                if (je(e)) return Ot(e, zr) + "";
                                if (qr(e)) return kl ? kl.call(e) : "";
                                var n = e + "";
                                return "0" == n && 1 / e == -ri ? "-0" : n
                            }

                            function Vn(e, n, s) {
                                var l = -1,
                                    p = Gs,
                                    w = e.length,
                                    R = !0,
                                    C = [],
                                    M = C;
                                if (s) R = !1, p = Ma;
                                else if (w >= 200) {
                                    var Q = n ? null : S_(e);
                                    if (Q) return Js(Q);
                                    R = !1, p = ss, M = new oi
                                } else M = n ? [] : C;
                                e: for (; ++l < w;) {
                                    var Y = e[l],
                                        ie = n ? n(Y) : Y;
                                    if (Y = s || 0 !== Y ? Y : 0, R && ie == ie) {
                                        for (var de = M.length; de--;)
                                            if (M[de] === ie) continue e;
                                        n && M.push(ie), C.push(Y)
                                    } else p(M, ie, s) || (M !== C && M.push(ie), C.push(Y))
                                }
                                return C
                            }

                            function uc(e, n) {
                                return null == (e = Bf(e, n = kn(n, e))) || delete e[vn(Xr(n))]
                            }

                            function vf(e, n, s, l) {
                                return gs(e, n, s(ci(e, n)), l)
                            }

                            function vo(e, n, s, l) {
                                for (var p = e.length, w = l ? p : -1;
                                    (l ? w-- : ++w < p) && n(e[w], w, e););
                                return s ? Yr(e, l ? 0 : w, l ? w + 1 : p) : Yr(e, l ? w + 1 : 0, l ? p : w)
                            }

                            function _f(e, n) {
                                var s = e;
                                return s instanceof Ke && (s = s.value()), Za(n, function(l, p) {
                                    return p.func.apply(p.thisArg, Un([l], p.args))
                                }, s)
                            }

                            function lc(e, n, s) {
                                var l = e.length;
                                if (l < 2) return l ? Vn(e[0]) : [];
                                for (var p = -1, w = z(l); ++p < l;)
                                    for (var R = e[p], C = -1; ++C < l;) C != p && (w[p] = hs(w[p] || R, e[C], n, s));
                                return Vn(mr(w, 1), n, s)
                            }

                            function mf(e, n, s) {
                                for (var l = -1, p = e.length, w = n.length, R = {}; ++l < p;) s(R, e[l], l < w ? n[l] : t);
                                return R
                            }

                            function fc(e) {
                                return Gt(e) ? e : []
                            }

                            function hc(e) {
                                return "function" == typeof e ? e : jr
                            }

                            function kn(e, n) {
                                return je(e) ? e : wc(e, n) ? [e] : Gf(it(e))
                            }
                            var y_ = $e;

                            function Gn(e, n, s) {
                                var l = e.length;
                                return s = s === t ? l : s, !n && s >= l ? e : Yr(e, n, s)
                            }
                            var bf = nv || function(e) {
                                return _r.clearTimeout(e)
                            };

                            function wf(e, n) {
                                if (n) return e.slice();
                                var s = e.length,
                                    l = $l ? $l(s) : new e.constructor(s);
                                return e.copy(l), l
                            }

                            function dc(e) {
                                var n = new e.constructor(e.byteLength);
                                return new ro(n).set(new ro(e)), n
                            }

                            function xf(e, n) {
                                var s = n ? dc(e.buffer) : e.buffer;
                                return new e.constructor(s, e.byteOffset, e.length)
                            }

                            function Ef(e, n) {
                                if (e !== n) {
                                    var s = e !== t,
                                        l = null === e,
                                        p = e == e,
                                        w = qr(e),
                                        R = n !== t,
                                        C = null === n,
                                        M = n == n,
                                        Q = qr(n);
                                    if (!C && !Q && !w && e > n || w && R && M && !C && !Q || l && R && M || !s && M || !p) return 1;
                                    if (!l && !w && !Q && e < n || Q && s && p && !l && !w || C && s && p || !R && p || !M) return -1
                                }
                                return 0
                            }

                            function If(e, n, s, l) {
                                for (var p = -1, w = e.length, R = s.length, C = -1, M = n.length, Q = fr(w - R, 0), Y = z(M + Q), ie = !l; ++C < M;) Y[C] = n[C];
                                for (; ++p < R;)(ie || p < w) && (Y[s[p]] = e[p]);
                                for (; Q--;) Y[C++] = e[p++];
                                return Y
                            }

                            function Pf(e, n, s, l) {
                                for (var p = -1, w = e.length, R = -1, C = s.length, M = -1, Q = n.length, Y = fr(w - C, 0), ie = z(Y + Q), de = !l; ++p < Y;) ie[p] = e[p];
                                for (var xe = p; ++M < Q;) ie[xe + M] = n[M];
                                for (; ++R < C;)(de || p < w) && (ie[xe + s[R]] = e[p++]);
                                return ie
                            }

                            function Nr(e, n) {
                                var s = -1,
                                    l = e.length;
                                for (n || (n = z(l)); ++s < l;) n[s] = e[s];
                                return n
                            }

                            function yn(e, n, s, l) {
                                var p = !s;
                                s || (s = {});
                                for (var w = -1, R = n.length; ++w < R;) {
                                    var C = n[w],
                                        M = l ? l(s[C], e[C], C, s, e) : t;
                                    M === t && (M = e[C]), p ? Rn(s, C, M) : fs(s, C, M)
                                }
                                return s
                            }

                            function _o(e, n) {
                                return function(s, l) {
                                    var p = je(s) ? O0 : Bv,
                                        w = n ? n() : {};
                                    return p(s, e, Se(l, 2), w)
                                }
                            }

                            function Li(e) {
                                return $e(function(n, s) {
                                    var l = -1,
                                        p = s.length,
                                        w = p > 1 ? s[p - 1] : t,
                                        R = p > 2 ? s[2] : t;
                                    for (w = e.length > 3 && "function" == typeof w ? (p--, w) : t, R && Ar(s[0], s[1], R) && (w = p < 3 ? t : w, p = 1), n = dt(n); ++l < p;) {
                                        var C = s[l];
                                        C && e(n, C, l, w)
                                    }
                                    return n
                                })
                            }

                            function Sf(e, n) {
                                return function(s, l) {
                                    if (null == s) return s;
                                    if (!Fr(s)) return e(s, l);
                                    for (var p = s.length, w = n ? p : -1, R = dt(s);
                                        (n ? w-- : ++w < p) && !1 !== l(R[w], w, R););
                                    return s
                                }
                            }

                            function Of(e) {
                                return function(n, s, l) {
                                    for (var p = -1, w = dt(n), R = l(n), C = R.length; C--;) {
                                        var M = R[e ? C : ++p];
                                        if (!1 === s(w[M], M, w)) break
                                    }
                                    return n
                                }
                            }

                            function Rf(e) {
                                return function(n) {
                                    var s = Ri(n = it(n)) ? an(n) : t,
                                        l = s ? s[0] : n.charAt(0),
                                        p = s ? Gn(s, 1).join("") : n.slice(1);
                                    return l[e]() + p
                                }
                            }

                            function ji(e) {
                                return function(n) {
                                    return Za(Sh(Ph(n).replace(d0, "")), e, "")
                                }
                            }

                            function ys(e) {
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(n[0]);
                                        case 2:
                                            return new e(n[0], n[1]);
                                        case 3:
                                            return new e(n[0], n[1], n[2]);
                                        case 4:
                                            return new e(n[0], n[1], n[2], n[3]);
                                        case 5:
                                            return new e(n[0], n[1], n[2], n[3], n[4]);
                                        case 6:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                                        case 7:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                                    }
                                    var s = Fi(e.prototype),
                                        l = e.apply(s, n);
                                    return Tt(l) ? l : s
                                }
                            }

                            function Af(e) {
                                return function(n, s, l) {
                                    var p = dt(n);
                                    if (!Fr(n)) {
                                        var w = Se(s, 3);
                                        n = gr(n), s = function(C) {
                                            return w(p[C], C, p)
                                        }
                                    }
                                    var R = e(n, s, l);
                                    return R > -1 ? p[w ? n[R] : R] : t
                                }
                            }

                            function Tf(e) {
                                return Tn(function(n) {
                                    var s = n.length,
                                        l = s,
                                        p = Jr.prototype.thru;
                                    for (e && n.reverse(); l--;) {
                                        var w = n[l];
                                        if ("function" != typeof w) throw new Wr(h);
                                        if (p && !R && "wrapper" == Eo(w)) var R = new Jr([], !0)
                                    }
                                    for (l = R ? l : s; ++l < s;) {
                                        var C = Eo(w = n[l]),
                                            M = "wrapper" == C ? _c(w) : t;
                                        R = M && xc(M[0]) && 424 == M[1] && !M[4].length && 1 == M[9] ? R[Eo(M[0])].apply(R, M[3]) : 1 == w.length && xc(w) ? R[C]() : R.thru(w)
                                    }
                                    return function() {
                                        var Q = arguments,
                                            Y = Q[0];
                                        if (R && 1 == Q.length && je(Y)) return R.plant(Y).value();
                                        for (var ie = 0, de = s ? n[ie].apply(this, Q) : Y; ++ie < s;) de = n[ie].call(this, de);
                                        return de
                                    }
                                })
                            }

                            function mo(e, n, s, l, p, w, R, C, M, Q) {
                                var Y = 128 & n,
                                    ie = 1 & n,
                                    de = 2 & n,
                                    xe = 24 & n,
                                    Re = 512 & n,
                                    qe = de ? t : ys(e);
                                return function Ae() {
                                    for (var Be = arguments.length, Ve = z(Be), $r = Be; $r--;) Ve[$r] = arguments[$r];
                                    if (xe) var Tr = Mi(Ae),
                                        Ur = function j0(j, k) {
                                            for (var z = j.length, _e = 0; z--;) j[z] === k && ++_e;
                                            return _e
                                        }(Ve, Tr);
                                    if (l && (Ve = If(Ve, l, p, xe)), w && (Ve = Pf(Ve, w, R, xe)), Be -= Ur, xe && Be < Q) {
                                        var Wt = Hn(Ve, Tr);
                                        return Nf(e, n, mo, Ae.placeholder, s, Ve, Wt, C, M, Q - Be)
                                    }
                                    var ln = ie ? s : this,
                                        Fn = de ? ln[e] : e;
                                    return Be = Ve.length, C ? Ve = function B_(e, n) {
                                        for (var s = e.length, l = Ir(n.length, s), p = Nr(e); l--;) {
                                            var w = n[l];
                                            e[l] = Cn(w, s) ? p[w] : t
                                        }
                                        return e
                                    }(Ve, C) : Re && Be > 1 && Ve.reverse(), Y && M < Be && (Ve.length = M), this && this !== _r && this instanceof Ae && (Fn = qe || ys(Fn)), Fn.apply(ln, Ve)
                                }
                            }

                            function Cf(e, n) {
                                return function(s, l) {
                                    return function Yv(e, n, s, l) {
                                        return gn(e, function(p, w, R) {
                                            n(l, s(p), w, R)
                                        }), l
                                    }(s, e, n(l), {})
                                }
                            }

                            function bo(e, n) {
                                return function(s, l) {
                                    var p;
                                    if (s === t && l === t) return n;
                                    if (s !== t && (p = s), l !== t) {
                                        if (p === t) return l;
                                        "string" == typeof s || "string" == typeof l ? (s = zr(s), l = zr(l)) : (s = yf(s), l = yf(l)), p = e(s, l)
                                    }
                                    return p
                                }
                            }

                            function pc(e) {
                                return Tn(function(n) {
                                    return n = Ot(n, Zr(Se())), $e(function(s) {
                                        var l = this;
                                        return e(n, function(p) {
                                            return Mr(p, l, s)
                                        })
                                    })
                                })
                            }

                            function wo(e, n) {
                                var s = (n = n === t ? " " : zr(n)).length;
                                if (s < 2) return s ? ac(n, e) : n;
                                var l = ac(n, oo(e / Ai(n)));
                                return Ri(n) ? Gn(an(l), 0, e).join("") : l.slice(0, e)
                            }

                            function Df(e) {
                                return function(n, s, l) {
                                    return l && "number" != typeof l && Ar(n, s, l) && (s = l = t), n = Nn(n), s === t ? (s = n, n = 0) : s = Nn(s),
                                        function l_(e, n, s, l) {
                                            for (var p = -1, w = fr(oo((n - e) / (s || 1)), 0), R = z(w); w--;) R[l ? w : ++p] = e, e += s;
                                            return R
                                        }(n, s, l = l === t ? n < s ? 1 : -1 : Nn(l), e)
                                }
                            }

                            function xo(e) {
                                return function(n, s) {
                                    return "string" == typeof n && "string" == typeof s || (n = en(n), s = en(s)), e(n, s)
                                }
                            }

                            function Nf(e, n, s, l, p, w, R, C, M, Q) {
                                var Y = 8 & n;
                                n |= Y ? 32 : 64, 4 & (n &= ~(Y ? 64 : 32)) || (n &= -4);
                                var qe = [e, n, p, Y ? w : t, Y ? R : t, Y ? t : w, Y ? t : R, C, M, Q],
                                    Ae = s.apply(t, qe);
                                return xc(e) && Kf(Ae, qe), Ae.placeholder = l, Vf(Ae, e, n)
                            }

                            function gc(e) {
                                var n = lr[e];
                                return function(s, l) {
                                    if (s = en(s), (l = null == l ? 0 : Ir(Me(l), 292)) && Kl(s)) {
                                        var p = (it(s) + "e").split("e");
                                        return +((p = (it(n(p[0] + "e" + (+p[1] + l))) + "e").split("e"))[0] + "e" + (+p[1] - l))
                                    }
                                    return n(s)
                                }
                            }
                            var S_ = Di && 1 / Js(new Di([, -0]))[1] == ri ? function(e) {
                                return new Di(e)
                            } : Mc;

                            function Ff(e) {
                                return function(n) {
                                    var s = Pr(n);
                                    return s == sn ? Ka(n) : s == on ? function H0(j) {
                                        var k = -1,
                                            z = Array(j.size);
                                        return j.forEach(function(_e) {
                                            z[++k] = [_e, _e]
                                        }), z
                                    }(n) : function L0(j, k) {
                                        return Ot(k, function(z) {
                                            return [z, j[z]]
                                        })
                                    }(n, e(n))
                                }
                            }

                            function An(e, n, s, l, p, w, R, C) {
                                var M = 2 & n;
                                if (!M && "function" != typeof e) throw new Wr(h);
                                var Q = l ? l.length : 0;
                                if (Q || (n &= -97, l = p = t), R = R === t ? R : fr(Me(R), 0), C = C === t ? C : Me(C), Q -= p ? p.length : 0, 64 & n) {
                                    var Y = l,
                                        ie = p;
                                    l = p = t
                                }
                                var de = M ? t : _c(e),
                                    xe = [e, n, s, l, p, Y, ie, w, R, C];
                                if (de && function $_(e, n) {
                                        var s = e[1],
                                            l = n[1],
                                            p = s | l;
                                        if (!(p < 131) && !(128 == l && 8 == s || 128 == l && 256 == s && e[7].length <= n[8] || 384 == l && n[7].length <= n[8] && 8 == s)) return e;
                                        1 & l && (e[2] = n[2], p |= 1 & s ? 0 : 4);
                                        var C = n[3];
                                        if (C) {
                                            var M = e[3];
                                            e[3] = M ? If(M, C, n[4]) : C, e[4] = M ? Hn(e[3], N) : n[4]
                                        }(C = n[5]) && (e[5] = (M = e[5]) ? Pf(M, C, n[6]) : C, e[6] = M ? Hn(e[5], N) : n[6]), (C = n[7]) && (e[7] = C), 128 & l && (e[8] = null == e[8] ? n[8] : Ir(e[8], n[8])), null == e[9] && (e[9] = n[9]), e[0] = n[0], e[1] = p
                                    }(xe, de), e = xe[0], n = xe[1], s = xe[2], l = xe[3], p = xe[4], !(C = xe[9] = xe[9] === t ? M ? 0 : e.length : fr(xe[9] - Q, 0)) && 24 & n && (n &= -25), n && 1 != n) Re = 8 == n || 16 == n ? function I_(e, n, s) {
                                    var l = ys(e);
                                    return function p() {
                                        for (var w = arguments.length, R = z(w), C = w, M = Mi(p); C--;) R[C] = arguments[C];
                                        var Q = w < 3 && R[0] !== M && R[w - 1] !== M ? [] : Hn(R, M);
                                        return (w -= Q.length) < s ? Nf(e, n, mo, p.placeholder, t, R, Q, t, t, s - w) : Mr(this && this !== _r && this instanceof p ? l : e, this, R)
                                    }
                                }(e, n, C) : 32 != n && 33 != n || p.length ? mo.apply(t, xe) : function P_(e, n, s, l) {
                                    var p = 1 & n,
                                        w = ys(e);
                                    return function R() {
                                        for (var C = -1, M = arguments.length, Q = -1, Y = l.length, ie = z(Y + M), de = this && this !== _r && this instanceof R ? w : e; ++Q < Y;) ie[Q] = l[Q];
                                        for (; M--;) ie[Q++] = arguments[++C];
                                        return Mr(de, p ? s : this, ie)
                                    }
                                }(e, n, s, l);
                                else var Re = function E_(e, n, s) {
                                    var l = 1 & n,
                                        p = ys(e);
                                    return function w() {
                                        return (this && this !== _r && this instanceof w ? p : e).apply(l ? s : this, arguments)
                                    }
                                }(e, n, s);
                                return Vf((de ? pf : Kf)(Re, xe), e, n)
                            }

                            function Lf(e, n, s, l) {
                                return e === t || un(e, Ci[s]) && !ot.call(l, s) ? n : e
                            }

                            function jf(e, n, s, l, p, w) {
                                return Tt(e) && Tt(n) && (w.set(n, e), go(e, n, t, jf, w), w.delete(n)), e
                            }

                            function O_(e) {
                                return ms(e) ? t : e
                            }

                            function Mf(e, n, s, l, p, w) {
                                var R = 1 & s,
                                    C = e.length,
                                    M = n.length;
                                if (C != M && !(R && M > C)) return !1;
                                var Q = w.get(e),
                                    Y = w.get(n);
                                if (Q && Y) return Q == n && Y == e;
                                var ie = -1,
                                    de = !0,
                                    xe = 2 & s ? new oi : t;
                                for (w.set(e, n), w.set(n, e); ++ie < C;) {
                                    var Re = e[ie],
                                        qe = n[ie];
                                    if (l) var Ae = R ? l(qe, Re, ie, n, e, w) : l(Re, qe, ie, e, n, w);
                                    if (Ae !== t) {
                                        if (Ae) continue;
                                        de = !1;
                                        break
                                    }
                                    if (xe) {
                                        if (!za(n, function(Be, Ve) {
                                                if (!ss(xe, Ve) && (Re === Be || p(Re, Be, s, l, w))) return xe.push(Ve)
                                            })) {
                                            de = !1;
                                            break
                                        }
                                    } else if (Re !== qe && !p(Re, qe, s, l, w)) {
                                        de = !1;
                                        break
                                    }
                                }
                                return w.delete(e), w.delete(n), de
                            }

                            function Tn(e) {
                                return Ic(Hf(e, t, Yf), e + "")
                            }

                            function yc(e) {
                                return rf(e, gr, bc)
                            }

                            function vc(e) {
                                return rf(e, Lr, Zf)
                            }
                            var _c = co ? function(e) {
                                return co.get(e)
                            } : Mc;

                            function Eo(e) {
                                for (var n = e.name + "", s = Ni[n], l = ot.call(Ni, n) ? s.length : 0; l--;) {
                                    var p = s[l],
                                        w = p.func;
                                    if (null == w || w == e) return p.name
                                }
                                return n
                            }

                            function Mi(e) {
                                return (ot.call(_, "placeholder") ? _ : e).placeholder
                            }

                            function Se() {
                                var e = _.iteratee || Lc;
                                return e = e === Lc ? of : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function Io(e, n) {
                                var s = e.__data__;
                                return function M_(e) {
                                    var n = typeof e;
                                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e
                                }(n) ? s["string" == typeof n ? "string" : "hash"] : s.map
                            }

                            function mc(e) {
                                for (var n = gr(e), s = n.length; s--;) {
                                    var l = n[s],
                                        p = e[l];
                                    n[s] = [l, p, $f(p)]
                                }
                                return n
                            }

                            function ui(e, n) {
                                var s = function q0(j, k) {
                                    return null == j ? t : j[k]
                                }(e, n);
                                return sf(s) ? s : t
                            }
                            var bc = ka ? function(e) {
                                    return null == e ? [] : (e = dt(e), $n(ka(e), function(n) {
                                        return Hl.call(e, n)
                                    }))
                                } : Zc,
                                Zf = ka ? function(e) {
                                    for (var n = []; e;) Un(n, bc(e)), e = no(e);
                                    return n
                                } : Zc,
                                Pr = Rr;

                            function zf(e, n, s) {
                                for (var l = -1, p = (n = kn(n, e)).length, w = !1; ++l < p;) {
                                    var R = vn(n[l]);
                                    if (!(w = null != e && s(e, R))) break;
                                    e = e[R]
                                }
                                return w || ++l != p ? w : !!(p = null == e ? 0 : e.length) && Co(p) && Cn(R, p) && (je(e) || fi(e))
                            }

                            function qf(e) {
                                return "function" != typeof e.constructor || vs(e) ? {} : Fi(no(e))
                            }

                            function j_(e) {
                                return je(e) || fi(e) || !!(Bl && e && e[Bl])
                            }

                            function Cn(e, n) {
                                var s = typeof e;
                                return !!(n = n ? ? qn) && ("number" == s || "symbol" != s && Gy.test(e)) && e > -1 && e % 1 == 0 && e < n
                            }

                            function Ar(e, n, s) {
                                if (!Tt(s)) return !1;
                                var l = typeof n;
                                return !!("number" == l ? Fr(s) && Cn(n, s.length) : "string" == l && n in s) && un(s[n], e)
                            }

                            function wc(e, n) {
                                if (je(e)) return !1;
                                var s = typeof e;
                                return !("number" != s && "symbol" != s && "boolean" != s && null != e && !qr(e)) || Ny.test(e) || !Dy.test(e) || null != n && e in dt(n)
                            }

                            function xc(e) {
                                var n = Eo(e),
                                    s = _[n];
                                if ("function" != typeof s || !(n in Ke.prototype)) return !1;
                                if (e === s) return !0;
                                var l = _c(s);
                                return !!l && e === l[0]
                            }(Ga && Pr(new Ga(new ArrayBuffer(1))) != Pi || as && Pr(new as) != sn || Wa && Pr(Wa.resolve()) != Xu || Di && Pr(new Di) != on || cs && Pr(new cs) != ns) && (Pr = function(e) {
                                var n = Rr(e),
                                    s = n == Pn ? e.constructor : t,
                                    l = s ? li(s) : "";
                                if (l) switch (l) {
                                    case hv:
                                        return Pi;
                                    case dv:
                                        return sn;
                                    case pv:
                                        return Xu;
                                    case gv:
                                        return on;
                                    case yv:
                                        return ns
                                }
                                return n
                            });
                            var z_ = Ys ? Dn : zc;

                            function vs(e) {
                                var n = e && e.constructor;
                                return e === ("function" == typeof n && n.prototype || Ci)
                            }

                            function $f(e) {
                                return e == e && !Tt(e)
                            }

                            function Uf(e, n) {
                                return function(s) {
                                    return null != s && s[e] === n && (n !== t || e in dt(s))
                                }
                            }

                            function Hf(e, n, s) {
                                return n = fr(n === t ? e.length - 1 : n, 0),
                                    function() {
                                        for (var l = arguments, p = -1, w = fr(l.length - n, 0), R = z(w); ++p < w;) R[p] = l[n + p];
                                        p = -1;
                                        for (var C = z(n + 1); ++p < n;) C[p] = l[p];
                                        return C[n] = s(R), Mr(e, this, C)
                                    }
                            }

                            function Bf(e, n) {
                                return n.length < 2 ? e : ci(e, Yr(n, 0, -1))
                            }

                            function Ec(e, n) {
                                if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
                            }
                            var Kf = kf(pf),
                                _s = sv || function(e, n) {
                                    return _r.setTimeout(e, n)
                                },
                                Ic = kf(d_);

                            function Vf(e, n, s) {
                                var l = n + "";
                                return Ic(e, function L_(e, n) {
                                    var s = n.length;
                                    if (!s) return e;
                                    var l = s - 1;
                                    return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), e.replace(My, "{\n/* [wrapped with " + n + "] */\n")
                                }(l, function K_(e, n) {
                                    return Gr(_y, function(s) {
                                        var l = "_." + s[0];
                                        n & s[1] && !Gs(e, l) && e.push(l)
                                    }), e.sort()
                                }(function D_(e) {
                                    var n = e.match(Zy);
                                    return n ? n[1].split(zy) : []
                                }(l), s)))
                            }

                            function kf(e) {
                                var n = 0,
                                    s = 0;
                                return function() {
                                    var l = uv(),
                                        p = 16 - (l - s);
                                    if (s = l, p > 0) {
                                        if (++n >= 800) return arguments[0]
                                    } else n = 0;
                                    return e.apply(t, arguments)
                                }
                            }

                            function Po(e, n) {
                                var s = -1,
                                    l = e.length,
                                    p = l - 1;
                                for (n = n === t ? l : n; ++s < n;) {
                                    var w = oc(s, p),
                                        R = e[w];
                                    e[w] = e[s], e[s] = R
                                }
                                return e.length = n, e
                            }
                            var Gf = function q_(e) {
                                var n = Ao(e, function(l) {
                                        return 500 === s.size && s.clear(), l
                                    }),
                                    s = n.cache;
                                return n
                            }(function(e) {
                                var n = [];
                                return 46 === e.charCodeAt(0) && n.push(""), e.replace(Fy, function(s, l, p, w) {
                                    n.push(p ? w.replace(Uy, "$1") : l || s)
                                }), n
                            });

                            function vn(e) {
                                if ("string" == typeof e || qr(e)) return e;
                                var n = e + "";
                                return "0" == n && 1 / e == -ri ? "-0" : n
                            }

                            function li(e) {
                                if (null != e) {
                                    try {
                                        return Xs.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function Wf(e) {
                                if (e instanceof Ke) return e.clone();
                                var n = new Jr(e.__wrapped__, e.__chain__);
                                return n.__actions__ = Nr(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n
                            }
                            var W_ = $e(function(e, n) {
                                    return Gt(e) ? hs(e, mr(n, 1, Gt, !0)) : []
                                }),
                                J_ = $e(function(e, n) {
                                    var s = Xr(n);
                                    return Gt(s) && (s = t), Gt(e) ? hs(e, mr(n, 1, Gt, !0), Se(s, 2)) : []
                                }),
                                Q_ = $e(function(e, n) {
                                    var s = Xr(n);
                                    return Gt(s) && (s = t), Gt(e) ? hs(e, mr(n, 1, Gt, !0), t, s) : []
                                });

                            function Jf(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = null == s ? 0 : Me(s);
                                return p < 0 && (p = fr(l + p, 0)), Ws(e, Se(n, 3), p)
                            }

                            function Qf(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = l - 1;
                                return s !== t && (p = Me(s), p = s < 0 ? fr(l + p, 0) : Ir(p, l - 1)), Ws(e, Se(n, 3), p, !0)
                            }

                            function Yf(e) {
                                return null != e && e.length ? mr(e, 1) : []
                            }

                            function Xf(e) {
                                return e && e.length ? e[0] : t
                            }
                            var cm = $e(function(e) {
                                    var n = Ot(e, fc);
                                    return n.length && n[0] === e[0] ? tc(n) : []
                                }),
                                um = $e(function(e) {
                                    var n = Xr(e),
                                        s = Ot(e, fc);
                                    return n === Xr(s) ? n = t : s.pop(), s.length && s[0] === e[0] ? tc(s, Se(n, 2)) : []
                                }),
                                lm = $e(function(e) {
                                    var n = Xr(e),
                                        s = Ot(e, fc);
                                    return (n = "function" == typeof n ? n : t) && s.pop(), s.length && s[0] === e[0] ? tc(s, t, n) : []
                                });

                            function Xr(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? e[n - 1] : t
                            }
                            var pm = $e(eh);

                            function eh(e, n) {
                                return e && e.length && n && n.length ? sc(e, n) : e
                            }
                            var vm = Tn(function(e, n) {
                                var s = null == e ? 0 : e.length,
                                    l = Qa(e, n);
                                return df(e, Ot(n, function(p) {
                                    return Cn(p, s) ? +p : p
                                }).sort(Ef)), l
                            });

                            function Pc(e) {
                                return null == e ? e : fv.call(e)
                            }
                            var Nm = $e(function(e) {
                                    return Vn(mr(e, 1, Gt, !0))
                                }),
                                Fm = $e(function(e) {
                                    var n = Xr(e);
                                    return Gt(n) && (n = t), Vn(mr(e, 1, Gt, !0), Se(n, 2))
                                }),
                                Lm = $e(function(e) {
                                    var n = Xr(e);
                                    return n = "function" == typeof n ? n : t, Vn(mr(e, 1, Gt, !0), t, n)
                                });

                            function Sc(e) {
                                if (!e || !e.length) return [];
                                var n = 0;
                                return e = $n(e, function(s) {
                                    if (Gt(s)) return n = fr(s.length, n), !0
                                }), Ha(n, function(s) {
                                    return Ot(e, qa(s))
                                })
                            }

                            function th(e, n) {
                                if (!e || !e.length) return [];
                                var s = Sc(e);
                                return null == n ? s : Ot(s, function(l) {
                                    return Mr(n, t, l)
                                })
                            }
                            var zm = $e(function(e, n) {
                                    return Gt(e) ? hs(e, n) : []
                                }),
                                qm = $e(function(e) {
                                    return lc($n(e, Gt))
                                }),
                                $m = $e(function(e) {
                                    var n = Xr(e);
                                    return Gt(n) && (n = t), lc($n(e, Gt), Se(n, 2))
                                }),
                                Um = $e(function(e) {
                                    var n = Xr(e);
                                    return n = "function" == typeof n ? n : t, lc($n(e, Gt), t, n)
                                }),
                                Hm = $e(Sc),
                                Vm = $e(function(e) {
                                    var n = e.length,
                                        s = n > 1 ? e[n - 1] : t;
                                    return s = "function" == typeof s ? (e.pop(), s) : t, th(e, s)
                                });

                            function rh(e) {
                                var n = _(e);
                                return n.__chain__ = !0, n
                            }

                            function So(e, n) {
                                return n(e)
                            }
                            var Gm = Tn(function(e) {
                                    var n = e.length,
                                        s = n ? e[0] : 0,
                                        l = this.__wrapped__,
                                        p = function(w) {
                                            return Qa(w, e)
                                        };
                                    return !(n > 1 || this.__actions__.length) && l instanceof Ke && Cn(s) ? ((l = l.slice(s, +s + (n ? 1 : 0))).__actions__.push({
                                        func: So,
                                        args: [p],
                                        thisArg: t
                                    }), new Jr(l, this.__chain__).thru(function(w) {
                                        return n && !w.length && w.push(t), w
                                    })) : this.thru(p)
                                }),
                                r1 = _o(function(e, n, s) {
                                    ot.call(e, s) ? ++e[s] : Rn(e, s, 1)
                                }),
                                s1 = Af(Jf),
                                o1 = Af(Qf);

                            function nh(e, n) {
                                return (je(e) ? Gr : Kn)(e, Se(n, 3))
                            }

                            function ih(e, n) {
                                return (je(e) ? R0 : Xl)(e, Se(n, 3))
                            }
                            var l1 = _o(function(e, n, s) {
                                    ot.call(e, s) ? e[s].push(n) : Rn(e, s, [n])
                                }),
                                h1 = $e(function(e, n, s) {
                                    var l = -1,
                                        p = "function" == typeof n,
                                        w = Fr(e) ? z(e.length) : [];
                                    return Kn(e, function(R) {
                                        w[++l] = p ? Mr(n, R, s) : ds(R, n, s)
                                    }), w
                                }),
                                d1 = _o(function(e, n, s) {
                                    Rn(e, s, n)
                                });

                            function Oo(e, n) {
                                return (je(e) ? Ot : af)(e, Se(n, 3))
                            }
                            var g1 = _o(function(e, n, s) {
                                    e[s ? 0 : 1].push(n)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                I1 = $e(function(e, n) {
                                    if (null == e) return [];
                                    var s = n.length;
                                    return s > 1 && Ar(e, n[0], n[1]) ? n = [] : s > 2 && Ar(n[0], n[1], n[2]) && (n = [n[0]]), ff(e, mr(n, 1), [])
                                }),
                                Ro = iv || function() {
                                    return _r.Date.now()
                                };

                            function sh(e, n, s) {
                                return n = s ? t : n, An(e, 128, t, t, t, t, n = e && null == n ? e.length : n)
                            }

                            function oh(e, n) {
                                var s;
                                if ("function" != typeof n) throw new Wr(h);
                                return e = Me(e),
                                    function() {
                                        return --e > 0 && (s = n.apply(this, arguments)), e <= 1 && (n = t), s
                                    }
                            }
                            var Oc = $e(function(e, n, s) {
                                    var l = 1;
                                    if (s.length) {
                                        var p = Hn(s, Mi(Oc));
                                        l |= 32
                                    }
                                    return An(e, l, n, s, p)
                                }),
                                ah = $e(function(e, n, s) {
                                    var l = 3;
                                    if (s.length) {
                                        var p = Hn(s, Mi(ah));
                                        l |= 32
                                    }
                                    return An(n, l, e, s, p)
                                });

                            function lh(e, n, s) {
                                var l, p, w, R, C, M, Q = 0,
                                    Y = !1,
                                    ie = !1,
                                    de = !0;
                                if ("function" != typeof e) throw new Wr(h);

                                function xe(Wt) {
                                    var ln = l,
                                        Fn = p;
                                    return l = p = t, Q = Wt, R = e.apply(Fn, ln)
                                }

                                function Ae(Wt) {
                                    var ln = Wt - M;
                                    return M === t || ln >= n || ln < 0 || ie && Wt - Q >= w
                                }

                                function Be() {
                                    var Wt = Ro();
                                    if (Ae(Wt)) return Ve(Wt);
                                    C = _s(Be, function qe(Wt) {
                                        var Ah = n - (Wt - M);
                                        return ie ? Ir(Ah, w - (Wt - Q)) : Ah
                                    }(Wt))
                                }

                                function Ve(Wt) {
                                    return C = t, de && l ? xe(Wt) : (l = p = t, R)
                                }

                                function Ur() {
                                    var Wt = Ro(),
                                        ln = Ae(Wt);
                                    if (l = arguments, p = this, M = Wt, ln) {
                                        if (C === t) return function Re(Wt) {
                                            return Q = Wt, C = _s(Be, n), Y ? xe(Wt) : R
                                        }(M);
                                        if (ie) return bf(C), C = _s(Be, n), xe(M)
                                    }
                                    return C === t && (C = _s(Be, n)), R
                                }
                                return n = en(n) || 0, Tt(s) && (Y = !!s.leading, w = (ie = "maxWait" in s) ? fr(en(s.maxWait) || 0, n) : w, de = "trailing" in s ? !!s.trailing : de), Ur.cancel = function $r() {
                                    C !== t && bf(C), Q = 0, l = M = p = C = t
                                }, Ur.flush = function Tr() {
                                    return C === t ? R : Ve(Ro())
                                }, Ur
                            }
                            var S1 = $e(function(e, n) {
                                    return Yl(e, 1, n)
                                }),
                                O1 = $e(function(e, n, s) {
                                    return Yl(e, en(n) || 0, s)
                                });

                            function Ao(e, n) {
                                if ("function" != typeof e || null != n && "function" != typeof n) throw new Wr(h);
                                var s = function() {
                                    var l = arguments,
                                        p = n ? n.apply(this, l) : l[0],
                                        w = s.cache;
                                    if (w.has(p)) return w.get(p);
                                    var R = e.apply(this, l);
                                    return s.cache = w.set(p, R) || w, R
                                };
                                return s.cache = new(Ao.Cache || On), s
                            }

                            function To(e) {
                                if ("function" != typeof e) throw new Wr(h);
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, n[0]);
                                        case 2:
                                            return !e.call(this, n[0], n[1]);
                                        case 3:
                                            return !e.call(this, n[0], n[1], n[2])
                                    }
                                    return !e.apply(this, n)
                                }
                            }
                            Ao.Cache = On;
                            var T1 = y_(function(e, n) {
                                    var s = (n = 1 == n.length && je(n[0]) ? Ot(n[0], Zr(Se())) : Ot(mr(n, 1), Zr(Se()))).length;
                                    return $e(function(l) {
                                        for (var p = -1, w = Ir(l.length, s); ++p < w;) l[p] = n[p].call(this, l[p]);
                                        return Mr(e, this, l)
                                    })
                                }),
                                Rc = $e(function(e, n) {
                                    var s = Hn(n, Mi(Rc));
                                    return An(e, 32, t, n, s)
                                }),
                                fh = $e(function(e, n) {
                                    var s = Hn(n, Mi(fh));
                                    return An(e, 64, t, n, s)
                                }),
                                C1 = Tn(function(e, n) {
                                    return An(e, 256, t, t, t, n)
                                });

                            function un(e, n) {
                                return e === n || e != e && n != n
                            }
                            var H1 = xo(ec),
                                B1 = xo(function(e, n) {
                                    return e >= n
                                }),
                                fi = nf(function() {
                                    return arguments
                                }()) ? nf : function(e) {
                                    return Mt(e) && ot.call(e, "callee") && !Hl.call(e, "callee")
                                },
                                je = z.isArray,
                                K1 = Il ? Zr(Il) : function Xv(e) {
                                    return Mt(e) && Rr(e) == is
                                };

                            function Fr(e) {
                                return null != e && Co(e.length) && !Dn(e)
                            }

                            function Gt(e) {
                                return Mt(e) && Fr(e)
                            }
                            var Wn = ov || zc,
                                k1 = Pl ? Zr(Pl) : function e_(e) {
                                    return Mt(e) && Rr(e) == Xi
                                };

                            function Ac(e) {
                                if (!Mt(e)) return !1;
                                var n = Rr(e);
                                return n == Us || "[object DOMException]" == n || "string" == typeof e.message && "string" == typeof e.name && !ms(e)
                            }

                            function Dn(e) {
                                if (!Tt(e)) return !1;
                                var n = Rr(e);
                                return n == Hs || n == Yu || "[object AsyncFunction]" == n || "[object Proxy]" == n
                            }

                            function hh(e) {
                                return "number" == typeof e && e == Me(e)
                            }

                            function Co(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= qn
                            }

                            function Tt(e) {
                                var n = typeof e;
                                return null != e && ("object" == n || "function" == n)
                            }

                            function Mt(e) {
                                return null != e && "object" == typeof e
                            }
                            var dh = Sl ? Zr(Sl) : function r_(e) {
                                return Mt(e) && Pr(e) == sn
                            };

                            function ph(e) {
                                return "number" == typeof e || Mt(e) && Rr(e) == es
                            }

                            function ms(e) {
                                if (!Mt(e) || Rr(e) != Pn) return !1;
                                var n = no(e);
                                if (null === n) return !0;
                                var s = ot.call(n, "constructor") && n.constructor;
                                return "function" == typeof s && s instanceof s && Xs.call(s) == ev
                            }
                            var Tc = Ol ? Zr(Ol) : function n_(e) {
                                    return Mt(e) && Rr(e) == ts
                                },
                                gh = Rl ? Zr(Rl) : function i_(e) {
                                    return Mt(e) && Pr(e) == on
                                };

                            function Do(e) {
                                return "string" == typeof e || !je(e) && Mt(e) && Rr(e) == rs
                            }

                            function qr(e) {
                                return "symbol" == typeof e || Mt(e) && Rr(e) == Bs
                            }
                            var Zi = Al ? Zr(Al) : function s_(e) {
                                    return Mt(e) && Co(e.length) && !!wt[Rr(e)]
                                },
                                ub = xo(ic),
                                lb = xo(function(e, n) {
                                    return e <= n
                                });

                            function yh(e) {
                                if (!e) return [];
                                if (Fr(e)) return Do(e) ? an(e) : Nr(e);
                                if (os && e[os]) return function U0(j) {
                                    for (var k, z = []; !(k = j.next()).done;) z.push(k.value);
                                    return z
                                }(e[os]());
                                var n = Pr(e);
                                return (n == sn ? Ka : n == on ? Js : zi)(e)
                            }

                            function Nn(e) {
                                return e ? (e = en(e)) === ri || e === -ri ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function Me(e) {
                                var n = Nn(e),
                                    s = n % 1;
                                return n == n ? s ? n - s : n : 0
                            }

                            function vh(e) {
                                return e ? ai(Me(e), 0, pn) : 0
                            }

                            function en(e) {
                                if ("number" == typeof e) return e;
                                if (qr(e)) return NaN;
                                if (Tt(e)) {
                                    var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = Tt(n) ? n + "" : n
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = Ll(e);
                                var s = Ky.test(e);
                                return s || ky.test(e) ? P0(e.slice(2), s ? 2 : 8) : By.test(e) ? NaN : +e
                            }

                            function _h(e) {
                                return yn(e, Lr(e))
                            }

                            function it(e) {
                                return null == e ? "" : zr(e)
                            }
                            var hb = Li(function(e, n) {
                                    if (vs(n) || Fr(n)) yn(n, gr(n), e);
                                    else
                                        for (var s in n) ot.call(n, s) && fs(e, s, n[s])
                                }),
                                mh = Li(function(e, n) {
                                    yn(n, Lr(n), e)
                                }),
                                No = Li(function(e, n, s, l) {
                                    yn(n, Lr(n), e, l)
                                }),
                                db = Li(function(e, n, s, l) {
                                    yn(n, gr(n), e, l)
                                }),
                                pb = Tn(Qa),
                                yb = $e(function(e, n) {
                                    e = dt(e);
                                    var s = -1,
                                        l = n.length,
                                        p = l > 2 ? n[2] : t;
                                    for (p && Ar(n[0], n[1], p) && (l = 1); ++s < l;)
                                        for (var w = n[s], R = Lr(w), C = -1, M = R.length; ++C < M;) {
                                            var Q = R[C],
                                                Y = e[Q];
                                            (Y === t || un(Y, Ci[Q]) && !ot.call(e, Q)) && (e[Q] = w[Q])
                                        }
                                    return e
                                }),
                                vb = $e(function(e) {
                                    return e.push(t, jf), Mr(bh, t, e)
                                });

                            function Cc(e, n, s) {
                                var l = null == e ? t : ci(e, n);
                                return l === t ? s : l
                            }

                            function Dc(e, n) {
                                return null != e && zf(e, n, Jv)
                            }
                            var Ob = Cf(function(e, n, s) {
                                    null != n && "function" != typeof n.toString && (n = eo.call(n)), e[n] = s
                                }, Fc(jr)),
                                Rb = Cf(function(e, n, s) {
                                    null != n && "function" != typeof n.toString && (n = eo.call(n)), ot.call(e, n) ? e[n].push(s) : e[n] = [s]
                                }, Se),
                                Ab = $e(ds);

                            function gr(e) {
                                return Fr(e) ? Gl(e) : nc(e)
                            }

                            function Lr(e) {
                                return Fr(e) ? Gl(e, !0) : function o_(e) {
                                    if (!Tt(e)) return function U_(e) {
                                        var n = [];
                                        if (null != e)
                                            for (var s in dt(e)) n.push(s);
                                        return n
                                    }(e);
                                    var n = vs(e),
                                        s = [];
                                    for (var l in e) "constructor" == l && (n || !ot.call(e, l)) || s.push(l);
                                    return s
                                }(e)
                            }
                            var Db = Li(function(e, n, s) {
                                    go(e, n, s)
                                }),
                                bh = Li(function(e, n, s, l) {
                                    go(e, n, s, l)
                                }),
                                Nb = Tn(function(e, n) {
                                    var s = {};
                                    if (null == e) return s;
                                    var l = !1;
                                    n = Ot(n, function(w) {
                                        return w = kn(w, e), l || (l = w.length > 1), w
                                    }), yn(e, vc(e), s), l && (s = Qr(s, 7, O_));
                                    for (var p = n.length; p--;) uc(s, n[p]);
                                    return s
                                }),
                                Lb = Tn(function(e, n) {
                                    return null == e ? {} : function c_(e, n) {
                                        return hf(e, n, function(s, l) {
                                            return Dc(e, l)
                                        })
                                    }(e, n)
                                });

                            function wh(e, n) {
                                if (null == e) return {};
                                var s = Ot(vc(e), function(l) {
                                    return [l]
                                });
                                return n = Se(n), hf(e, s, function(l, p) {
                                    return n(l, p[0])
                                })
                            }
                            var xh = Ff(gr),
                                Eh = Ff(Lr);

                            function zi(e) {
                                return null == e ? [] : Ba(e, gr(e))
                            }
                            var kb = ji(function(e, n, s) {
                                return n = n.toLowerCase(), e + (s ? Ih(n) : n)
                            });

                            function Ih(e) {
                                return Nc(it(e).toLowerCase())
                            }

                            function Ph(e) {
                                return (e = it(e)) && e.replace(Wy, M0).replace(p0, "")
                            }
                            var Qb = ji(function(e, n, s) {
                                    return e + (s ? "-" : "") + n.toLowerCase()
                                }),
                                Yb = ji(function(e, n, s) {
                                    return e + (s ? " " : "") + n.toLowerCase()
                                }),
                                Xb = Rf("toLowerCase"),
                                ow = ji(function(e, n, s) {
                                    return e + (s ? "_" : "") + n.toLowerCase()
                                }),
                                cw = ji(function(e, n, s) {
                                    return e + (s ? " " : "") + Nc(n)
                                }),
                                _w = ji(function(e, n, s) {
                                    return e + (s ? " " : "") + n.toUpperCase()
                                }),
                                Nc = Rf("toUpperCase");

                            function Sh(e, n, s) {
                                return e = it(e), (n = s ? t : n) === t ? function $0(j) {
                                    return v0.test(j)
                                }(e) ? function W0(j) {
                                    return j.match(g0) || []
                                }(e) : function D0(j) {
                                    return j.match(qy) || []
                                }(e) : e.match(n) || []
                            }
                            var Oh = $e(function(e, n) {
                                    try {
                                        return Mr(e, t, n)
                                    } catch (s) {
                                        return Ac(s) ? s : new Fe(s)
                                    }
                                }),
                                mw = Tn(function(e, n) {
                                    return Gr(n, function(s) {
                                        s = vn(s), Rn(e, s, Oc(e[s], e))
                                    }), e
                                });

                            function Fc(e) {
                                return function() {
                                    return e
                                }
                            }
                            var Ew = Tf(),
                                Iw = Tf(!0);

                            function jr(e) {
                                return e
                            }

                            function Lc(e) {
                                return of("function" == typeof e ? e : Qr(e, 1))
                            }
                            var Ow = $e(function(e, n) {
                                    return function(s) {
                                        return ds(s, e, n)
                                    }
                                }),
                                Rw = $e(function(e, n) {
                                    return function(s) {
                                        return ds(e, s, n)
                                    }
                                });

                            function jc(e, n, s) {
                                var l = gr(n),
                                    p = po(n, l);
                                null == s && (!Tt(n) || !p.length && l.length) && (s = n, n = e, e = this, p = po(n, gr(n)));
                                var w = !(Tt(s) && "chain" in s && !s.chain),
                                    R = Dn(e);
                                return Gr(p, function(C) {
                                    var M = n[C];
                                    e[C] = M, R && (e.prototype[C] = function() {
                                        var Q = this.__chain__;
                                        if (w || Q) {
                                            var Y = e(this.__wrapped__);
                                            return (Y.__actions__ = Nr(this.__actions__)).push({
                                                func: M,
                                                args: arguments,
                                                thisArg: e
                                            }), Y.__chain__ = Q, Y
                                        }
                                        return M.apply(e, Un([this.value()], arguments))
                                    })
                                }), e
                            }

                            function Mc() {}
                            var Cw = pc(Ot),
                                Dw = pc(Tl),
                                Nw = pc(za);

                            function Rh(e) {
                                return wc(e) ? qa(vn(e)) : function u_(e) {
                                    return function(n) {
                                        return ci(n, e)
                                    }
                                }(e)
                            }
                            var Lw = Df(),
                                jw = Df(!0);

                            function Zc() {
                                return []
                            }

                            function zc() {
                                return !1
                            }
                            var Hw = bo(function(e, n) {
                                    return e + n
                                }, 0),
                                Bw = gc("ceil"),
                                Kw = bo(function(e, n) {
                                    return e / n
                                }, 1),
                                Vw = gc("floor"),
                                Xw = bo(function(e, n) {
                                    return e * n
                                }, 1),
                                ex = gc("round"),
                                tx = bo(function(e, n) {
                                    return e - n
                                }, 0);
                            return _.after = function P1(e, n) {
                                if ("function" != typeof n) throw new Wr(h);
                                return e = Me(e),
                                    function() {
                                        if (--e < 1) return n.apply(this, arguments)
                                    }
                            }, _.ary = sh, _.assign = hb, _.assignIn = mh, _.assignInWith = No, _.assignWith = db, _.at = pb, _.before = oh, _.bind = Oc, _.bindAll = mw, _.bindKey = ah, _.castArray = function M1() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return je(e) ? e : [e]
                            }, _.chain = rh, _.chunk = function V_(e, n, s) {
                                n = (s ? Ar(e, n, s) : n === t) ? 1 : fr(Me(n), 0);
                                var l = null == e ? 0 : e.length;
                                if (!l || n < 1) return [];
                                for (var p = 0, w = 0, R = z(oo(l / n)); p < l;) R[w++] = Yr(e, p, p += n);
                                return R
                            }, _.compact = function k_(e) {
                                for (var n = -1, s = null == e ? 0 : e.length, l = 0, p = []; ++n < s;) {
                                    var w = e[n];
                                    w && (p[l++] = w)
                                }
                                return p
                            }, _.concat = function G_() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var n = z(e - 1), s = arguments[0], l = e; l--;) n[l - 1] = arguments[l];
                                return Un(je(s) ? Nr(s) : [s], mr(n, 1))
                            }, _.cond = function bw(e) {
                                var n = null == e ? 0 : e.length,
                                    s = Se();
                                return e = n ? Ot(e, function(l) {
                                    if ("function" != typeof l[1]) throw new Wr(h);
                                    return [s(l[0]), l[1]]
                                }) : [], $e(function(l) {
                                    for (var p = -1; ++p < n;) {
                                        var w = e[p];
                                        if (Mr(w[0], this, l)) return Mr(w[1], this, l)
                                    }
                                })
                            }, _.conforms = function ww(e) {
                                return function Vv(e) {
                                    var n = gr(e);
                                    return function(s) {
                                        return Ql(s, e, n)
                                    }
                                }(Qr(e, 1))
                            }, _.constant = Fc, _.countBy = r1, _.create = function gb(e, n) {
                                var s = Fi(e);
                                return null == n ? s : Jl(s, n)
                            }, _.curry = function ch(e, n, s) {
                                var l = An(e, 8, t, t, t, t, t, n = s ? t : n);
                                return l.placeholder = ch.placeholder, l
                            }, _.curryRight = function uh(e, n, s) {
                                var l = An(e, 16, t, t, t, t, t, n = s ? t : n);
                                return l.placeholder = uh.placeholder, l
                            }, _.debounce = lh, _.defaults = yb, _.defaultsDeep = vb, _.defer = S1, _.delay = O1, _.difference = W_, _.differenceBy = J_, _.differenceWith = Q_, _.drop = function Y_(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, (n = s || n === t ? 1 : Me(n)) < 0 ? 0 : n, l) : []
                            }, _.dropRight = function X_(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, 0, (n = l - (n = s || n === t ? 1 : Me(n))) < 0 ? 0 : n) : []
                            }, _.dropRightWhile = function em(e, n) {
                                return e && e.length ? vo(e, Se(n, 3), !0, !0) : []
                            }, _.dropWhile = function tm(e, n) {
                                return e && e.length ? vo(e, Se(n, 3), !0) : []
                            }, _.fill = function rm(e, n, s, l) {
                                var p = null == e ? 0 : e.length;
                                return p ? (s && "number" != typeof s && Ar(e, n, s) && (s = 0, l = p), function Gv(e, n, s, l) {
                                    var p = e.length;
                                    for ((s = Me(s)) < 0 && (s = -s > p ? 0 : p + s), (l = l === t || l > p ? p : Me(l)) < 0 && (l += p), l = s > l ? 0 : vh(l); s < l;) e[s++] = n;
                                    return e
                                }(e, n, s, l)) : []
                            }, _.filter = function i1(e, n) {
                                return (je(e) ? $n : ef)(e, Se(n, 3))
                            }, _.flatMap = function a1(e, n) {
                                return mr(Oo(e, n), 1)
                            }, _.flatMapDeep = function c1(e, n) {
                                return mr(Oo(e, n), ri)
                            }, _.flatMapDepth = function u1(e, n, s) {
                                return s = s === t ? 1 : Me(s), mr(Oo(e, n), s)
                            }, _.flatten = Yf, _.flattenDeep = function nm(e) {
                                return null != e && e.length ? mr(e, ri) : []
                            }, _.flattenDepth = function im(e, n) {
                                return null != e && e.length ? mr(e, n = n === t ? 1 : Me(n)) : []
                            }, _.flip = function R1(e) {
                                return An(e, 512)
                            }, _.flow = Ew, _.flowRight = Iw, _.fromPairs = function sm(e) {
                                for (var n = -1, s = null == e ? 0 : e.length, l = {}; ++n < s;) {
                                    var p = e[n];
                                    l[p[0]] = p[1]
                                }
                                return l
                            }, _.functions = function Ib(e) {
                                return null == e ? [] : po(e, gr(e))
                            }, _.functionsIn = function Pb(e) {
                                return null == e ? [] : po(e, Lr(e))
                            }, _.groupBy = l1, _.initial = function am(e) {
                                return null != e && e.length ? Yr(e, 0, -1) : []
                            }, _.intersection = cm, _.intersectionBy = um, _.intersectionWith = lm, _.invert = Ob, _.invertBy = Rb, _.invokeMap = h1, _.iteratee = Lc, _.keyBy = d1, _.keys = gr, _.keysIn = Lr, _.map = Oo, _.mapKeys = function Tb(e, n) {
                                var s = {};
                                return n = Se(n, 3), gn(e, function(l, p, w) {
                                    Rn(s, n(l, p, w), l)
                                }), s
                            }, _.mapValues = function Cb(e, n) {
                                var s = {};
                                return n = Se(n, 3), gn(e, function(l, p, w) {
                                    Rn(s, p, n(l, p, w))
                                }), s
                            }, _.matches = function Pw(e) {
                                return cf(Qr(e, 1))
                            }, _.matchesProperty = function Sw(e, n) {
                                return uf(e, Qr(n, 1))
                            }, _.memoize = Ao, _.merge = Db, _.mergeWith = bh, _.method = Ow, _.methodOf = Rw, _.mixin = jc, _.negate = To, _.nthArg = function Tw(e) {
                                return e = Me(e), $e(function(n) {
                                    return lf(n, e)
                                })
                            }, _.omit = Nb, _.omitBy = function Fb(e, n) {
                                return wh(e, To(Se(n)))
                            }, _.once = function A1(e) {
                                return oh(2, e)
                            }, _.orderBy = function p1(e, n, s, l) {
                                return null == e ? [] : (je(n) || (n = null == n ? [] : [n]), je(s = l ? t : s) || (s = null == s ? [] : [s]), ff(e, n, s))
                            }, _.over = Cw, _.overArgs = T1, _.overEvery = Dw, _.overSome = Nw, _.partial = Rc, _.partialRight = fh, _.partition = g1, _.pick = Lb, _.pickBy = wh, _.property = Rh, _.propertyOf = function Fw(e) {
                                return function(n) {
                                    return null == e ? t : ci(e, n)
                                }
                            }, _.pull = pm, _.pullAll = eh, _.pullAllBy = function gm(e, n, s) {
                                return e && e.length && n && n.length ? sc(e, n, Se(s, 2)) : e
                            }, _.pullAllWith = function ym(e, n, s) {
                                return e && e.length && n && n.length ? sc(e, n, t, s) : e
                            }, _.pullAt = vm, _.range = Lw, _.rangeRight = jw, _.rearg = C1, _.reject = function _1(e, n) {
                                return (je(e) ? $n : ef)(e, To(Se(n, 3)))
                            }, _.remove = function _m(e, n) {
                                var s = [];
                                if (!e || !e.length) return s;
                                var l = -1,
                                    p = [],
                                    w = e.length;
                                for (n = Se(n, 3); ++l < w;) {
                                    var R = e[l];
                                    n(R, l, e) && (s.push(R), p.push(l))
                                }
                                return df(e, p), s
                            }, _.rest = function D1(e, n) {
                                if ("function" != typeof e) throw new Wr(h);
                                return $e(e, n = n === t ? n : Me(n))
                            }, _.reverse = Pc, _.sampleSize = function b1(e, n, s) {
                                return n = (s ? Ar(e, n, s) : n === t) ? 1 : Me(n), (je(e) ? Uv : h_)(e, n)
                            }, _.set = function Mb(e, n, s) {
                                return null == e ? e : gs(e, n, s)
                            }, _.setWith = function Zb(e, n, s, l) {
                                return l = "function" == typeof l ? l : t, null == e ? e : gs(e, n, s, l)
                            }, _.shuffle = function w1(e) {
                                return (je(e) ? Hv : p_)(e)
                            }, _.slice = function mm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? (s && "number" != typeof s && Ar(e, n, s) ? (n = 0, s = l) : (n = null == n ? 0 : Me(n), s = s === t ? l : Me(s)), Yr(e, n, s)) : []
                            }, _.sortBy = I1, _.sortedUniq = function Sm(e) {
                                return e && e.length ? gf(e) : []
                            }, _.sortedUniqBy = function Om(e, n) {
                                return e && e.length ? gf(e, Se(n, 2)) : []
                            }, _.split = function aw(e, n, s) {
                                return s && "number" != typeof s && Ar(e, n, s) && (n = s = t), (s = s === t ? pn : s >>> 0) ? (e = it(e)) && ("string" == typeof n || null != n && !Tc(n)) && !(n = zr(n)) && Ri(e) ? Gn(an(e), 0, s) : e.split(n, s) : []
                            }, _.spread = function N1(e, n) {
                                if ("function" != typeof e) throw new Wr(h);
                                return n = null == n ? 0 : fr(Me(n), 0), $e(function(s) {
                                    var l = s[n],
                                        p = Gn(s, 0, n);
                                    return l && Un(p, l), Mr(e, this, p)
                                })
                            }, _.tail = function Rm(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? Yr(e, 1, n) : []
                            }, _.take = function Am(e, n, s) {
                                return e && e.length ? Yr(e, 0, (n = s || n === t ? 1 : Me(n)) < 0 ? 0 : n) : []
                            }, _.takeRight = function Tm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                return l ? Yr(e, (n = l - (n = s || n === t ? 1 : Me(n))) < 0 ? 0 : n, l) : []
                            }, _.takeRightWhile = function Cm(e, n) {
                                return e && e.length ? vo(e, Se(n, 3), !1, !0) : []
                            }, _.takeWhile = function Dm(e, n) {
                                return e && e.length ? vo(e, Se(n, 3)) : []
                            }, _.tap = function km(e, n) {
                                return n(e), e
                            }, _.throttle = function F1(e, n, s) {
                                var l = !0,
                                    p = !0;
                                if ("function" != typeof e) throw new Wr(h);
                                return Tt(s) && (l = "leading" in s ? !!s.leading : l, p = "trailing" in s ? !!s.trailing : p), lh(e, n, {
                                    leading: l,
                                    maxWait: n,
                                    trailing: p
                                })
                            }, _.thru = So, _.toArray = yh, _.toPairs = xh, _.toPairsIn = Eh, _.toPath = function $w(e) {
                                return je(e) ? Ot(e, vn) : qr(e) ? [e] : Nr(Gf(it(e)))
                            }, _.toPlainObject = _h, _.transform = function zb(e, n, s) {
                                var l = je(e),
                                    p = l || Wn(e) || Zi(e);
                                if (n = Se(n, 4), null == s) {
                                    var w = e && e.constructor;
                                    s = p ? l ? new w : [] : Tt(e) && Dn(w) ? Fi(no(e)) : {}
                                }
                                return (p ? Gr : gn)(e, function(R, C, M) {
                                    return n(s, R, C, M)
                                }), s
                            }, _.unary = function L1(e) {
                                return sh(e, 1)
                            }, _.union = Nm, _.unionBy = Fm, _.unionWith = Lm, _.uniq = function jm(e) {
                                return e && e.length ? Vn(e) : []
                            }, _.uniqBy = function Mm(e, n) {
                                return e && e.length ? Vn(e, Se(n, 2)) : []
                            }, _.uniqWith = function Zm(e, n) {
                                return n = "function" == typeof n ? n : t, e && e.length ? Vn(e, t, n) : []
                            }, _.unset = function qb(e, n) {
                                return null == e || uc(e, n)
                            }, _.unzip = Sc, _.unzipWith = th, _.update = function $b(e, n, s) {
                                return null == e ? e : vf(e, n, hc(s))
                            }, _.updateWith = function Ub(e, n, s, l) {
                                return l = "function" == typeof l ? l : t, null == e ? e : vf(e, n, hc(s), l)
                            }, _.values = zi, _.valuesIn = function Hb(e) {
                                return null == e ? [] : Ba(e, Lr(e))
                            }, _.without = zm, _.words = Sh, _.wrap = function j1(e, n) {
                                return Rc(hc(n), e)
                            }, _.xor = qm, _.xorBy = $m, _.xorWith = Um, _.zip = Hm, _.zipObject = function Bm(e, n) {
                                return mf(e || [], n || [], fs)
                            }, _.zipObjectDeep = function Km(e, n) {
                                return mf(e || [], n || [], gs)
                            }, _.zipWith = Vm, _.entries = xh, _.entriesIn = Eh, _.extend = mh, _.extendWith = No, jc(_, _), _.add = Hw, _.attempt = Oh, _.camelCase = kb, _.capitalize = Ih, _.ceil = Bw, _.clamp = function Bb(e, n, s) {
                                return s === t && (s = n, n = t), s !== t && (s = (s = en(s)) == s ? s : 0), n !== t && (n = (n = en(n)) == n ? n : 0), ai(en(e), n, s)
                            }, _.clone = function Z1(e) {
                                return Qr(e, 4)
                            }, _.cloneDeep = function q1(e) {
                                return Qr(e, 5)
                            }, _.cloneDeepWith = function $1(e, n) {
                                return Qr(e, 5, n = "function" == typeof n ? n : t)
                            }, _.cloneWith = function z1(e, n) {
                                return Qr(e, 4, n = "function" == typeof n ? n : t)
                            }, _.conformsTo = function U1(e, n) {
                                return null == n || Ql(e, n, gr(n))
                            }, _.deburr = Ph, _.defaultTo = function xw(e, n) {
                                return null == e || e != e ? n : e
                            }, _.divide = Kw, _.endsWith = function Gb(e, n, s) {
                                e = it(e), n = zr(n);
                                var l = e.length,
                                    p = s = s === t ? l : ai(Me(s), 0, l);
                                return (s -= n.length) >= 0 && e.slice(s, p) == n
                            }, _.eq = un, _.escape = function Wb(e) {
                                return (e = it(e)) && Ay.test(e) ? e.replace(tl, Z0) : e
                            }, _.escapeRegExp = function Jb(e) {
                                return (e = it(e)) && Ly.test(e) ? e.replace(Ra, "\\$&") : e
                            }, _.every = function n1(e, n, s) {
                                var l = je(e) ? Tl : kv;
                                return s && Ar(e, n, s) && (n = t), l(e, Se(n, 3))
                            }, _.find = s1, _.findIndex = Jf, _.findKey = function _b(e, n) {
                                return Cl(e, Se(n, 3), gn)
                            }, _.findLast = o1, _.findLastIndex = Qf, _.findLastKey = function mb(e, n) {
                                return Cl(e, Se(n, 3), Xa)
                            }, _.floor = Vw, _.forEach = nh, _.forEachRight = ih, _.forIn = function bb(e, n) {
                                return null == e ? e : Ya(e, Se(n, 3), Lr)
                            }, _.forInRight = function wb(e, n) {
                                return null == e ? e : tf(e, Se(n, 3), Lr)
                            }, _.forOwn = function xb(e, n) {
                                return e && gn(e, Se(n, 3))
                            }, _.forOwnRight = function Eb(e, n) {
                                return e && Xa(e, Se(n, 3))
                            }, _.get = Cc, _.gt = H1, _.gte = B1, _.has = function Sb(e, n) {
                                return null != e && zf(e, n, Wv)
                            }, _.hasIn = Dc, _.head = Xf, _.identity = jr, _.includes = function f1(e, n, s, l) {
                                e = Fr(e) ? e : zi(e), s = s && !l ? Me(s) : 0;
                                var p = e.length;
                                return s < 0 && (s = fr(p + s, 0)), Do(e) ? s <= p && e.indexOf(n, s) > -1 : !!p && Oi(e, n, s) > -1
                            }, _.indexOf = function om(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = null == s ? 0 : Me(s);
                                return p < 0 && (p = fr(l + p, 0)), Oi(e, n, p)
                            }, _.inRange = function Kb(e, n, s) {
                                return n = Nn(n), s === t ? (s = n, n = 0) : s = Nn(s),
                                    function Qv(e, n, s) {
                                        return e >= Ir(n, s) && e < fr(n, s)
                                    }(e = en(e), n, s)
                            }, _.invoke = Ab, _.isArguments = fi, _.isArray = je, _.isArrayBuffer = K1, _.isArrayLike = Fr, _.isArrayLikeObject = Gt, _.isBoolean = function V1(e) {
                                return !0 === e || !1 === e || Mt(e) && Rr(e) == Yi
                            }, _.isBuffer = Wn, _.isDate = k1, _.isElement = function G1(e) {
                                return Mt(e) && 1 === e.nodeType && !ms(e)
                            }, _.isEmpty = function W1(e) {
                                if (null == e) return !0;
                                if (Fr(e) && (je(e) || "string" == typeof e || "function" == typeof e.splice || Wn(e) || Zi(e) || fi(e))) return !e.length;
                                var n = Pr(e);
                                if (n == sn || n == on) return !e.size;
                                if (vs(e)) return !nc(e).length;
                                for (var s in e)
                                    if (ot.call(e, s)) return !1;
                                return !0
                            }, _.isEqual = function J1(e, n) {
                                return ps(e, n)
                            }, _.isEqualWith = function Q1(e, n, s) {
                                var l = (s = "function" == typeof s ? s : t) ? s(e, n) : t;
                                return l === t ? ps(e, n, t, s) : !!l
                            }, _.isError = Ac, _.isFinite = function Y1(e) {
                                return "number" == typeof e && Kl(e)
                            }, _.isFunction = Dn, _.isInteger = hh, _.isLength = Co, _.isMap = dh, _.isMatch = function X1(e, n) {
                                return e === n || rc(e, n, mc(n))
                            }, _.isMatchWith = function eb(e, n, s) {
                                return s = "function" == typeof s ? s : t, rc(e, n, mc(n), s)
                            }, _.isNaN = function tb(e) {
                                return ph(e) && e != +e
                            }, _.isNative = function rb(e) {
                                if (z_(e)) throw new Fe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return sf(e)
                            }, _.isNil = function ib(e) {
                                return null == e
                            }, _.isNull = function nb(e) {
                                return null === e
                            }, _.isNumber = ph, _.isObject = Tt, _.isObjectLike = Mt, _.isPlainObject = ms, _.isRegExp = Tc, _.isSafeInteger = function sb(e) {
                                return hh(e) && e >= -qn && e <= qn
                            }, _.isSet = gh, _.isString = Do, _.isSymbol = qr, _.isTypedArray = Zi, _.isUndefined = function ob(e) {
                                return e === t
                            }, _.isWeakMap = function ab(e) {
                                return Mt(e) && Pr(e) == ns
                            }, _.isWeakSet = function cb(e) {
                                return Mt(e) && "[object WeakSet]" == Rr(e)
                            }, _.join = function fm(e, n) {
                                return null == e ? "" : av.call(e, n)
                            }, _.kebabCase = Qb, _.last = Xr, _.lastIndexOf = function hm(e, n, s) {
                                var l = null == e ? 0 : e.length;
                                if (!l) return -1;
                                var p = l;
                                return s !== t && (p = (p = Me(s)) < 0 ? fr(l + p, 0) : Ir(p, l - 1)), n == n ? function K0(j, k, z) {
                                    for (var _e = z + 1; _e--;)
                                        if (j[_e] === k) return _e;
                                    return _e
                                }(e, n, p) : Ws(e, Dl, p, !0)
                            }, _.lowerCase = Yb, _.lowerFirst = Xb, _.lt = ub, _.lte = lb, _.max = function kw(e) {
                                return e && e.length ? ho(e, jr, ec) : t
                            }, _.maxBy = function Gw(e, n) {
                                return e && e.length ? ho(e, Se(n, 2), ec) : t
                            }, _.mean = function Ww(e) {
                                return Nl(e, jr)
                            }, _.meanBy = function Jw(e, n) {
                                return Nl(e, Se(n, 2))
                            }, _.min = function Qw(e) {
                                return e && e.length ? ho(e, jr, ic) : t
                            }, _.minBy = function Yw(e, n) {
                                return e && e.length ? ho(e, Se(n, 2), ic) : t
                            }, _.stubArray = Zc, _.stubFalse = zc, _.stubObject = function Mw() {
                                return {}
                            }, _.stubString = function Zw() {
                                return ""
                            }, _.stubTrue = function zw() {
                                return !0
                            }, _.multiply = Xw, _.nth = function dm(e, n) {
                                return e && e.length ? lf(e, Me(n)) : t
                            }, _.noConflict = function Aw() {
                                return _r._ === this && (_r._ = tv), this
                            }, _.noop = Mc, _.now = Ro, _.pad = function ew(e, n, s) {
                                e = it(e);
                                var l = (n = Me(n)) ? Ai(e) : 0;
                                if (!n || l >= n) return e;
                                var p = (n - l) / 2;
                                return wo(ao(p), s) + e + wo(oo(p), s)
                            }, _.padEnd = function tw(e, n, s) {
                                e = it(e);
                                var l = (n = Me(n)) ? Ai(e) : 0;
                                return n && l < n ? e + wo(n - l, s) : e
                            }, _.padStart = function rw(e, n, s) {
                                e = it(e);
                                var l = (n = Me(n)) ? Ai(e) : 0;
                                return n && l < n ? wo(n - l, s) + e : e
                            }, _.parseInt = function nw(e, n, s) {
                                return s || null == n ? n = 0 : n && (n = +n), lv(it(e).replace(Aa, ""), n || 0)
                            }, _.random = function Vb(e, n, s) {
                                if (s && "boolean" != typeof s && Ar(e, n, s) && (n = s = t), s === t && ("boolean" == typeof n ? (s = n, n = t) : "boolean" == typeof e && (s = e, e = t)), e === t && n === t ? (e = 0, n = 1) : (e = Nn(e), n === t ? (n = e, e = 0) : n = Nn(n)), e > n) {
                                    var l = e;
                                    e = n, n = l
                                }
                                if (s || e % 1 || n % 1) {
                                    var p = Vl();
                                    return Ir(e + p * (n - e + I0("1e-" + ((p + "").length - 1))), n)
                                }
                                return oc(e, n)
                            }, _.reduce = function y1(e, n, s) {
                                var l = je(e) ? Za : Fl,
                                    p = arguments.length < 3;
                                return l(e, Se(n, 4), s, p, Kn)
                            }, _.reduceRight = function v1(e, n, s) {
                                var l = je(e) ? A0 : Fl,
                                    p = arguments.length < 3;
                                return l(e, Se(n, 4), s, p, Xl)
                            }, _.repeat = function iw(e, n, s) {
                                return n = (s ? Ar(e, n, s) : n === t) ? 1 : Me(n), ac(it(e), n)
                            }, _.replace = function sw() {
                                var e = arguments,
                                    n = it(e[0]);
                                return e.length < 3 ? n : n.replace(e[1], e[2])
                            }, _.result = function jb(e, n, s) {
                                var l = -1,
                                    p = (n = kn(n, e)).length;
                                for (p || (p = 1, e = t); ++l < p;) {
                                    var w = null == e ? t : e[vn(n[l])];
                                    w === t && (l = p, w = s), e = Dn(w) ? w.call(e) : w
                                }
                                return e
                            }, _.round = ex, _.runInContext = j, _.sample = function m1(e) {
                                return (je(e) ? Wl : f_)(e)
                            }, _.size = function x1(e) {
                                if (null == e) return 0;
                                if (Fr(e)) return Do(e) ? Ai(e) : e.length;
                                var n = Pr(e);
                                return n == sn || n == on ? e.size : nc(e).length
                            }, _.snakeCase = ow, _.some = function E1(e, n, s) {
                                var l = je(e) ? za : g_;
                                return s && Ar(e, n, s) && (n = t), l(e, Se(n, 3))
                            }, _.sortedIndex = function bm(e, n) {
                                return yo(e, n)
                            }, _.sortedIndexBy = function wm(e, n, s) {
                                return cc(e, n, Se(s, 2))
                            }, _.sortedIndexOf = function xm(e, n) {
                                var s = null == e ? 0 : e.length;
                                if (s) {
                                    var l = yo(e, n);
                                    if (l < s && un(e[l], n)) return l
                                }
                                return -1
                            }, _.sortedLastIndex = function Em(e, n) {
                                return yo(e, n, !0)
                            }, _.sortedLastIndexBy = function Im(e, n, s) {
                                return cc(e, n, Se(s, 2), !0)
                            }, _.sortedLastIndexOf = function Pm(e, n) {
                                if (null != e && e.length) {
                                    var l = yo(e, n, !0) - 1;
                                    if (un(e[l], n)) return l
                                }
                                return -1
                            }, _.startCase = cw, _.startsWith = function uw(e, n, s) {
                                return e = it(e), s = null == s ? 0 : ai(Me(s), 0, e.length), n = zr(n), e.slice(s, s + n.length) == n
                            }, _.subtract = tx, _.sum = function rx(e) {
                                return e && e.length ? Ua(e, jr) : 0
                            }, _.sumBy = function nx(e, n) {
                                return e && e.length ? Ua(e, Se(n, 2)) : 0
                            }, _.template = function lw(e, n, s) {
                                var l = _.templateSettings;
                                s && Ar(e, n, s) && (n = t), e = it(e), n = No({}, n, l, Lf);
                                var C, M, p = No({}, n.imports, l.imports, Lf),
                                    w = gr(p),
                                    R = Ba(p, w),
                                    Q = 0,
                                    Y = n.interpolate || Ks,
                                    ie = "__p += '",
                                    de = Va((n.escape || Ks).source + "|" + Y.source + "|" + (Y === rl ? Hy : Ks).source + "|" + (n.evaluate || Ks).source + "|$", "g"),
                                    xe = "//# sourceURL=" + (ot.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++m0 + "]") + "\n";
                                e.replace(de, function(Ae, Be, Ve, $r, Tr, Ur) {
                                    return Ve || (Ve = $r), ie += e.slice(Q, Ur).replace(Jy, z0), Be && (C = !0, ie += "' +\n__e(" + Be + ") +\n'"), Tr && (M = !0, ie += "';\n" + Tr + ";\n__p += '"), Ve && (ie += "' +\n((__t = (" + Ve + ")) == null ? '' : __t) +\n'"), Q = Ur + Ae.length, Ae
                                }), ie += "';\n";
                                var Re = ot.call(n, "variable") && n.variable;
                                if (Re) {
                                    if ($y.test(Re)) throw new Fe("Invalid `variable` option passed into `_.template`")
                                } else ie = "with (obj) {\n" + ie + "\n}\n";
                                ie = (M ? ie.replace(Py, "") : ie).replace(Sy, "$1").replace(Oy, "$1;"), ie = "function(" + (Re || "obj") + ") {\n" + (Re ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (C ? ", __e = _.escape" : "") + (M ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + ie + "return __p\n}";
                                var qe = Oh(function() {
                                    return rt(w, xe + "return " + ie).apply(t, R)
                                });
                                if (qe.source = ie, Ac(qe)) throw qe;
                                return qe
                            }, _.times = function qw(e, n) {
                                if ((e = Me(e)) < 1 || e > qn) return [];
                                var s = pn,
                                    l = Ir(e, pn);
                                n = Se(n), e -= pn;
                                for (var p = Ha(l, n); ++s < e;) n(s);
                                return p
                            }, _.toFinite = Nn, _.toInteger = Me, _.toLength = vh, _.toLower = function fw(e) {
                                return it(e).toLowerCase()
                            }, _.toNumber = en, _.toSafeInteger = function fb(e) {
                                return e ? ai(Me(e), -qn, qn) : 0 === e ? e : 0
                            }, _.toString = it, _.toUpper = function hw(e) {
                                return it(e).toUpperCase()
                            }, _.trim = function dw(e, n, s) {
                                if ((e = it(e)) && (s || n === t)) return Ll(e);
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e),
                                    p = an(n);
                                return Gn(l, jl(l, p), Ml(l, p) + 1).join("")
                            }, _.trimEnd = function pw(e, n, s) {
                                if ((e = it(e)) && (s || n === t)) return e.slice(0, zl(e) + 1);
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e);
                                return Gn(l, 0, Ml(l, an(n)) + 1).join("")
                            }, _.trimStart = function gw(e, n, s) {
                                if ((e = it(e)) && (s || n === t)) return e.replace(Aa, "");
                                if (!e || !(n = zr(n))) return e;
                                var l = an(e);
                                return Gn(l, jl(l, an(n))).join("")
                            }, _.truncate = function yw(e, n) {
                                var s = 30,
                                    l = "...";
                                if (Tt(n)) {
                                    var p = "separator" in n ? n.separator : p;
                                    s = "length" in n ? Me(n.length) : s, l = "omission" in n ? zr(n.omission) : l
                                }
                                var w = (e = it(e)).length;
                                if (Ri(e)) {
                                    var R = an(e);
                                    w = R.length
                                }
                                if (s >= w) return e;
                                var C = s - Ai(l);
                                if (C < 1) return l;
                                var M = R ? Gn(R, 0, C).join("") : e.slice(0, C);
                                if (p === t) return M + l;
                                if (R && (C += M.length - C), Tc(p)) {
                                    if (e.slice(C).search(p)) {
                                        var Q, Y = M;
                                        for (p.global || (p = Va(p.source, it(nl.exec(p)) + "g")), p.lastIndex = 0; Q = p.exec(Y);) var ie = Q.index;
                                        M = M.slice(0, ie === t ? C : ie)
                                    }
                                } else if (e.indexOf(zr(p), C) != C) {
                                    var de = M.lastIndexOf(p);
                                    de > -1 && (M = M.slice(0, de))
                                }
                                return M + l
                            }, _.unescape = function vw(e) {
                                return (e = it(e)) && Ry.test(e) ? e.replace(el, V0) : e
                            }, _.uniqueId = function Uw(e) {
                                var n = ++X0;
                                return it(e) + n
                            }, _.upperCase = _w, _.upperFirst = Nc, _.each = nh, _.eachRight = ih, _.first = Xf, jc(_, function() {
                                var e = {};
                                return gn(_, function(n, s) {
                                    ot.call(_.prototype, s) || (e[s] = n)
                                }), e
                            }(), {
                                chain: !1
                            }), _.VERSION = "4.17.21", Gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                _[e].placeholder = _
                            }), Gr(["drop", "take"], function(e, n) {
                                Ke.prototype[e] = function(s) {
                                    s = s === t ? 1 : fr(Me(s), 0);
                                    var l = this.__filtered__ && !n ? new Ke(this) : this.clone();
                                    return l.__filtered__ ? l.__takeCount__ = Ir(s, l.__takeCount__) : l.__views__.push({
                                        size: Ir(s, pn),
                                        type: e + (l.__dir__ < 0 ? "Right" : "")
                                    }), l
                                }, Ke.prototype[e + "Right"] = function(s) {
                                    return this.reverse()[e](s).reverse()
                                }
                            }), Gr(["filter", "map", "takeWhile"], function(e, n) {
                                var s = n + 1,
                                    l = 1 == s || 3 == s;
                                Ke.prototype[e] = function(p) {
                                    var w = this.clone();
                                    return w.__iteratees__.push({
                                        iteratee: Se(p, 3),
                                        type: s
                                    }), w.__filtered__ = w.__filtered__ || l, w
                                }
                            }), Gr(["head", "last"], function(e, n) {
                                var s = "take" + (n ? "Right" : "");
                                Ke.prototype[e] = function() {
                                    return this[s](1).value()[0]
                                }
                            }), Gr(["initial", "tail"], function(e, n) {
                                var s = "drop" + (n ? "" : "Right");
                                Ke.prototype[e] = function() {
                                    return this.__filtered__ ? new Ke(this) : this[s](1)
                                }
                            }), Ke.prototype.compact = function() {
                                return this.filter(jr)
                            }, Ke.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, Ke.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, Ke.prototype.invokeMap = $e(function(e, n) {
                                return "function" == typeof e ? new Ke(this) : this.map(function(s) {
                                    return ds(s, e, n)
                                })
                            }), Ke.prototype.reject = function(e) {
                                return this.filter(To(Se(e)))
                            }, Ke.prototype.slice = function(e, n) {
                                e = Me(e);
                                var s = this;
                                return s.__filtered__ && (e > 0 || n < 0) ? new Ke(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), n !== t && (s = (n = Me(n)) < 0 ? s.dropRight(-n) : s.take(n - e)), s)
                            }, Ke.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, Ke.prototype.toArray = function() {
                                return this.take(pn)
                            }, gn(Ke.prototype, function(e, n) {
                                var s = /^(?:filter|find|map|reject)|While$/.test(n),
                                    l = /^(?:head|last)$/.test(n),
                                    p = _[l ? "take" + ("last" == n ? "Right" : "") : n],
                                    w = l || /^find/.test(n);
                                p && (_.prototype[n] = function() {
                                    var R = this.__wrapped__,
                                        C = l ? [1] : arguments,
                                        M = R instanceof Ke,
                                        Q = C[0],
                                        Y = M || je(R),
                                        ie = function(Be) {
                                            var Ve = p.apply(_, Un([Be], C));
                                            return l && de ? Ve[0] : Ve
                                        };
                                    Y && s && "function" == typeof Q && 1 != Q.length && (M = Y = !1);
                                    var de = this.__chain__,
                                        Re = w && !de,
                                        qe = M && !this.__actions__.length;
                                    if (!w && Y) {
                                        R = qe ? R : new Ke(this);
                                        var Ae = e.apply(R, C);
                                        return Ae.__actions__.push({
                                            func: So,
                                            args: [ie],
                                            thisArg: t
                                        }), new Jr(Ae, de)
                                    }
                                    return Re && qe ? e.apply(this, C) : (Ae = this.thru(ie), Re ? l ? Ae.value()[0] : Ae.value() : Ae)
                                })
                            }), Gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var n = Qs[e],
                                    s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    l = /^(?:pop|shift)$/.test(e);
                                _.prototype[e] = function() {
                                    var p = arguments;
                                    if (l && !this.__chain__) {
                                        var w = this.value();
                                        return n.apply(je(w) ? w : [], p)
                                    }
                                    return this[s](function(R) {
                                        return n.apply(je(R) ? R : [], p)
                                    })
                                }
                            }), gn(Ke.prototype, function(e, n) {
                                var s = _[n];
                                if (s) {
                                    var l = s.name + "";
                                    ot.call(Ni, l) || (Ni[l] = []), Ni[l].push({
                                        name: n,
                                        func: s
                                    })
                                }
                            }), Ni[mo(t, 2).name] = [{
                                name: "wrapper",
                                func: t
                            }], Ke.prototype.clone = function vv() {
                                var e = new Ke(this.__wrapped__);
                                return e.__actions__ = Nr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Nr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Nr(this.__views__), e
                            }, Ke.prototype.reverse = function _v() {
                                if (this.__filtered__) {
                                    var e = new Ke(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else(e = this.clone()).__dir__ *= -1;
                                return e
                            }, Ke.prototype.value = function mv() {
                                var e = this.__wrapped__.value(),
                                    n = this.__dir__,
                                    s = je(e),
                                    l = n < 0,
                                    p = s ? e.length : 0,
                                    w = function C_(e, n, s) {
                                        for (var l = -1, p = s.length; ++l < p;) {
                                            var w = s[l],
                                                R = w.size;
                                            switch (w.type) {
                                                case "drop":
                                                    e += R;
                                                    break;
                                                case "dropRight":
                                                    n -= R;
                                                    break;
                                                case "take":
                                                    n = Ir(n, e + R);
                                                    break;
                                                case "takeRight":
                                                    e = fr(e, n - R)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: n
                                        }
                                    }(0, p, this.__views__),
                                    R = w.start,
                                    C = w.end,
                                    M = C - R,
                                    Q = l ? C : R - 1,
                                    Y = this.__iteratees__,
                                    ie = Y.length,
                                    de = 0,
                                    xe = Ir(M, this.__takeCount__);
                                if (!s || !l && p == M && xe == M) return _f(e, this.__actions__);
                                var Re = [];
                                e: for (; M-- && de < xe;) {
                                    for (var qe = -1, Ae = e[Q += n]; ++qe < ie;) {
                                        var Be = Y[qe],
                                            $r = Be.type,
                                            Tr = (0, Be.iteratee)(Ae);
                                        if (2 == $r) Ae = Tr;
                                        else if (!Tr) {
                                            if (1 == $r) continue e;
                                            break e
                                        }
                                    }
                                    Re[de++] = Ae
                                }
                                return Re
                            }, _.prototype.at = Gm, _.prototype.chain = function Wm() {
                                return rh(this)
                            }, _.prototype.commit = function Jm() {
                                return new Jr(this.value(), this.__chain__)
                            }, _.prototype.next = function Qm() {
                                this.__values__ === t && (this.__values__ = yh(this.value()));
                                var e = this.__index__ >= this.__values__.length;
                                return {
                                    done: e,
                                    value: e ? t : this.__values__[this.__index__++]
                                }
                            }, _.prototype.plant = function Xm(e) {
                                for (var n, s = this; s instanceof lo;) {
                                    var l = Wf(s);
                                    l.__index__ = 0, l.__values__ = t, n ? p.__wrapped__ = l : n = l;
                                    var p = l;
                                    s = s.__wrapped__
                                }
                                return p.__wrapped__ = e, n
                            }, _.prototype.reverse = function e1() {
                                var e = this.__wrapped__;
                                if (e instanceof Ke) {
                                    var n = e;
                                    return this.__actions__.length && (n = new Ke(this)), (n = n.reverse()).__actions__.push({
                                        func: So,
                                        args: [Pc],
                                        thisArg: t
                                    }), new Jr(n, this.__chain__)
                                }
                                return this.thru(Pc)
                            }, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = function t1() {
                                return _f(this.__wrapped__, this.__actions__)
                            }, _.prototype.first = _.prototype.head, os && (_.prototype[os] = function Ym() {
                                return this
                            }), _
                        }();
                    ni ? ((ni.exports = Ti)._ = Ti, La._ = Ti) : _r._ = Ti
                }.call(Ji);
            var Rg = Object.defineProperty,
                Ag = Object.defineProperties,
                Tg = Object.getOwnPropertyDescriptors,
                zu = Object.getOwnPropertySymbols,
                Cg = Object.prototype.hasOwnProperty,
                Dg = Object.prototype.propertyIsEnumerable,
                qu = (f, r, t) => r in f ? Rg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Fs = (f, r) => {
                    for (var t in r || (r = {})) Cg.call(r, t) && qu(f, t, r[t]);
                    if (zu)
                        for (var t of zu(r)) Dg.call(r, t) && qu(f, t, r[t]);
                    return f
                },
                Ng = (f, r) => Ag(f, Tg(r));

            function Zn(f, r, t) {
                var o;
                const a = (0, E.DQ)(f);
                return (null == (o = r.rpcMap) ? void 0 : o[a.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${a.namespace}:${a.reference}&projectId=${t}`
            }

            function ti(f) {
                return f.includes(":") ? f.split(":")[1] : f
            }

            function $u(f) {
                return f.map(r => `${r.split(":")[0]}:${r.split(":")[1]}`)
            }

            function Uu(f) {
                var r, t, o, a;
                const u = {};
                if (!(0, E.L5)(f)) return u;
                for (const [h, m] of Object.entries(f)) {
                    const T = (0, E.gp)(h) ? [h] : m.chains,
                        O = m.methods || [],
                        N = m.events || [],
                        q = m.rpcMap || {},
                        J = (0, E.M)(h);
                    u[J] = Ng(Fs(Fs({}, u[J]), m), {
                        chains: (0, E.eG)(T, null == (r = u[J]) ? void 0 : r.chains),
                        methods: (0, E.eG)(O, null == (t = u[J]) ? void 0 : t.methods),
                        events: (0, E.eG)(N, null == (o = u[J]) ? void 0 : o.events),
                        rpcMap: Fs(Fs({}, q), null == (a = u[J]) ? void 0 : a.rpcMap)
                    })
                }
                return u
            }

            function jg(f) {
                return f.includes(":") ? f.split(":")[2] : f
            }

            function Mg(f) {
                const r = {};
                for (const [t, o] of Object.entries(f)) {
                    const a = o.methods || [],
                        u = o.events || [],
                        h = o.accounts || [],
                        m = (0, E.gp)(t) ? [t] : o.chains ? o.chains : $u(o.accounts);
                    r[t] = {
                        chains: m,
                        methods: a,
                        events: u,
                        accounts: h
                    }
                }
                return r
            }

            function pa(f) {
                return "number" == typeof f ? f : f.includes("0x") ? parseInt(f, 16) : f.includes(":") ? Number(f.split(":")[1]) : Number(f)
            }
            const Hu = {},
                St = f => Hu[f],
                ga = (f, r) => {
                    Hu[f] = r
                };
            class Zg {
                constructor(r) {
                    this.name = "polkadot", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r && r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class zg {
                constructor(r) {
                    this.name = "eip155", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                request(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        switch (r.request.method) {
                            case "eth_requestAccounts":
                            case "eth_accounts":
                                return t.getAccounts();
                            case "wallet_switchEthereumChain":
                                return yield t.handleSwitchChain(r);
                            case "eth_chainId":
                                return parseInt(t.getDefaultChain())
                        }
                        return t.namespace.methods.includes(r.request.method) ? yield t.client.request(r): t.getHttpProvider().request(r.request)
                    })()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(parseInt(r), t), this.chainId = parseInt(r), this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ju(o, St("disableProviderPing")))
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = parseInt(ti(t));
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                getHttpProvider() {
                    const r = this.chainId,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                handleSwitchChain(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        var o, a;
                        let u = r.request.params ? null == (o = r.request.params[0]) ? void 0 : o.chainId : "0x0";
                        u = u.startsWith("0x") ? u : `0x${u}`;
                        const h = parseInt(u, 16);
                        if (t.isChainApproved(h)) t.setDefaultChain(`${h}`);
                        else {
                            if (!t.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                            yield t.client.request({
                                topic: r.topic,
                                request: {
                                    method: r.request.method,
                                    params: [{
                                        chainId: u
                                    }]
                                },
                                chainId: null == (a = t.namespace.chains) ? void 0 : a[0]
                            }), t.setDefaultChain(`${h}`)
                        }
                        return null
                    })()
                }
                isChainApproved(r) {
                    return this.namespace.chains.includes(`${this.name}:${r}`)
                }
            }
            class qg {
                constructor(r) {
                    this.name = "solana", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class $g {
                constructor(r) {
                    this.name = "cosmos", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Ug {
                constructor(r) {
                    this.name = "cip34", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        const o = this.getCardanoRPCUrl(t),
                            a = ti(t);
                        r[a] = this.createHttpProvider(a, o)
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                getCardanoRPCUrl(r) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[r]
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || this.getCardanoRPCUrl(r);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Hg {
                constructor(r) {
                    this.name = "elrond", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Bg {
                constructor(r) {
                    this.name = "multiversx", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    this.httpProviders[r] || this.setHttpProvider(r, t), this.chainId = r, this.events.emit("default_chain_changed", `${this.name}:${r}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r ? [...new Set(r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = ti(t);
                        r[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                    return new ur(new ei(o, St("disableProviderPing")))
                }
            }
            class Kg {
                constructor(r) {
                    this.name = "near", this.namespace = r.namespace, this.events = St("events"), this.client = St("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(r) {
                    this.namespace = Object.assign(this.namespace, r)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const r = this.namespace.chains[0];
                    if (!r) throw new Error("ChainId not found");
                    return r.split(":")[1]
                }
                request(r) {
                    return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
                }
                setDefaultChain(r, t) {
                    if (this.chainId = r, !this.httpProviders[r]) {
                        const o = t || Zn(`${this.name}:${r}`, this.namespace);
                        if (!o) throw new Error(`No RPC url provided for chainId: ${r}`);
                        this.setHttpProvider(r, o)
                    }
                    this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const r = this.namespace.accounts;
                    return r && r.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const r = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        r[t] = this.createHttpProvider(t, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), r
                }
                getHttpProvider() {
                    const r = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[r];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${r} not found`);
                    return t
                }
                setHttpProvider(r, t) {
                    const o = this.createHttpProvider(r, t);
                    o && (this.httpProviders[r] = o)
                }
                createHttpProvider(r, t) {
                    const o = t || Zn(r, this.namespace);
                    return typeof o > "u" ? void 0 : new ur(new ei(o, St("disableProviderPing")))
                }
            }
            var Vg = Object.defineProperty,
                kg = Object.defineProperties,
                Gg = Object.getOwnPropertyDescriptors,
                Bu = Object.getOwnPropertySymbols,
                Wg = Object.prototype.hasOwnProperty,
                Jg = Object.prototype.propertyIsEnumerable,
                Ku = (f, r, t) => r in f ? Vg(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Ls = (f, r) => {
                    for (var t in r || (r = {})) Wg.call(r, t) && Ku(f, t, r[t]);
                    if (Bu)
                        for (var t of Bu(r)) Jg.call(r, t) && Ku(f, t, r[t]);
                    return f
                },
                ya = (f, r) => kg(f, Gg(r));
            class va {
                constructor(r) {
                    this.events = new(ve()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = r, this.logger = typeof r ? .logger < "u" && "string" != typeof r ? .logger ? r.logger : (0, Pe.pino)((0, Pe.getDefaultLoggerOptions)({
                        level: r ? .logger || "error"
                    })), this.disableProviderPing = r ? .disableProviderPing || !1
                }
                static init(r) {
                    return (0, y.Z)(function*() {
                        const t = new va(r);
                        return yield t.initialize(), t
                    })()
                }
                request(r, t) {
                    var o = this;
                    return (0, y.Z)(function*() {
                        const [a, u] = o.validateChain(t);
                        if (!o.session) throw new Error("Please call connect() before request()");
                        return yield o.getProvider(a).request({
                            request: Ls({}, r),
                            chainId: `${a}:${u}`,
                            topic: o.session.topic
                        })
                    })()
                }
                sendAsync(r, t, o) {
                    const a = (new Date).getTime();
                    this.request(r, o).then(u => t(null, Xn(a, u))).catch(u => t(u, void 0))
                }
                enable() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (!r.client) throw new Error("Sign Client not initialized");
                        return r.session || (yield r.connect({
                            namespaces: r.namespaces,
                            optionalNamespaces: r.optionalNamespaces,
                            sessionProperties: r.sessionProperties
                        })), yield r.requestAccounts()
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        var t;
                        if (!r.session) throw new Error("Please call connect() before enable()");
                        yield r.client.disconnect({
                            topic: null == (t = r.session) ? void 0 : t.topic,
                            reason: (0, E.D6)("USER_DISCONNECTED")
                        }), yield r.cleanup()
                    })()
                }
                connect(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!t.client) throw new Error("Sign Client not initialized");
                        if (t.setNamespaces(r), yield t.cleanupPendingPairings(), !r.skipPairing) return yield t.pair(r.pairingTopic)
                    })()
                }
                on(r, t) {
                    this.events.on(r, t)
                }
                once(r, t) {
                    this.events.once(r, t)
                }
                removeListener(r, t) {
                    this.events.removeListener(r, t)
                }
                off(r, t) {
                    this.events.off(r, t)
                }
                get isWalletConnect() {
                    return !0
                }
                pair(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        t.shouldAbortPairingAttempt = !1;
                        let o = 0;
                        do {
                            if (t.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                            if (o >= t.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                            const {
                                uri: a,
                                approval: u
                            } = yield t.client.connect({
                                pairingTopic: r,
                                requiredNamespaces: t.namespaces,
                                optionalNamespaces: t.optionalNamespaces,
                                sessionProperties: t.sessionProperties
                            });
                            a && (t.uri = a, t.events.emit("display_uri", a)), yield u().then(h => {
                                t.session = h, t.namespaces || (t.namespaces = Mg(h.namespaces), t.persist("namespaces", t.namespaces))
                            }).catch(h => {
                                if (h.message !== Tu) throw h;
                                o++
                            })
                        } while (!t.session);
                        return t.onConnect(), t.session
                    })()
                }
                setDefaultChain(r, t) {
                    try {
                        if (!this.session) return;
                        const [o, a] = this.validateChain(r);
                        this.getProvider(o).setDefaultChain(a, t)
                    } catch (o) {
                        if (!/Please call connect/.test(o.message)) throw o
                    }
                }
                cleanupPendingPairings(r = {}) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        t.logger.info("Cleaning up inactive pairings...");
                        const o = t.client.pairing.getAll();
                        if ((0, E.qt)(o)) {
                            for (const a of o) r.deletePairings ? t.client.core.expirer.set(a.topic, 0) : yield t.client.core.relayer.subscriber.unsubscribe(a.topic);
                            t.logger.info(`Inactive pairings cleared: ${o.length}`)
                        }
                    })()
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                checkStorage() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.namespaces = yield r.getFromStore("namespaces"), r.optionalNamespaces = (yield r.getFromStore("optionalNamespaces")) || {}, r.client.session.length && (r.session = r.client.session.get(r.client.session.keys[r.client.session.keys.length - 1]), r.createProviders())
                    })()
                }
                initialize() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.logger.trace("Initialized"), yield r.createClient(), yield r.checkStorage(), r.registerEventListeners()
                    })()
                }
                createClient() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.client = r.providerOpts.client || (yield ha.init({
                            logger: r.providerOpts.logger || "error",
                            relayUrl: r.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                            projectId: r.providerOpts.projectId,
                            metadata: r.providerOpts.metadata,
                            storageOptions: r.providerOpts.storageOptions,
                            storage: r.providerOpts.storage,
                            name: r.providerOpts.name
                        })), r.logger.trace("SignClient Initialized")
                    })()
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const r = [...new Set(Object.keys(this.session.namespaces).map(t => (0, E.M)(t)))];
                    ga("client", this.client), ga("events", this.events), ga("disableProviderPing", this.disableProviderPing), r.forEach(t => {
                        if (!this.session) return;
                        const o = function Fg(f, r) {
                                const t = Object.keys(r.namespaces).filter(a => a.includes(f));
                                if (!t.length) return [];
                                const o = [];
                                return t.forEach(a => {
                                    o.push(...r.namespaces[a].accounts)
                                }), o
                            }(t, this.session),
                            a = $u(o),
                            u = function Lg(f = {}, r = {}) {
                                const t = Uu(f),
                                    o = Uu(r);
                                return da.exports.merge(t, o)
                            }(this.namespaces, this.optionalNamespaces),
                            h = ya(Ls({}, u[t]), {
                                accounts: o,
                                chains: a
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new zg({
                                    namespace: h
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new qg({
                                    namespace: h
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new $g({
                                    namespace: h
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new Zg({
                                    namespace: h
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new Ug({
                                    namespace: h
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new Hg({
                                    namespace: h
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new Bg({
                                    namespace: h
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new Kg({
                                    namespace: h
                                })
                        }
                    })
                }
                registerEventListeners() {
                    var r = this;
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", t => {
                        this.events.emit("session_ping", t)
                    }), this.client.on("session_event", t => {
                        const {
                            params: o
                        } = t, {
                            event: a
                        } = o;
                        if ("accountsChanged" === a.name) {
                            const u = a.data;
                            u && (0, E.qt)(u) && this.events.emit("accountsChanged", u.map(jg))
                        } else if ("chainChanged" === a.name) {
                            const u = o.chainId,
                                h = o.event.data,
                                m = (0, E.M)(u),
                                T = pa(u) !== pa(h) ? `${m}:${pa(h)}` : u;
                            this.onChainChanged(T)
                        } else this.events.emit(a.name, a.data);
                        this.events.emit("session_event", t)
                    }), this.client.on("session_update", ({
                        topic: t,
                        params: o
                    }) => {
                        var a;
                        const {
                            namespaces: u
                        } = o, h = null == (a = this.client) ? void 0 : a.session.get(t);
                        this.session = ya(Ls({}, h), {
                            namespaces: u
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: o
                        })
                    }), this.client.on("session_delete", function() {
                        var t = (0, y.Z)(function*(o) {
                            yield r.cleanup(), r.events.emit("session_delete", o), r.events.emit("disconnect", ya(Ls({}, (0, E.D6)("USER_DISCONNECTED")), {
                                data: o.topic
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.on("default_chain_changed", t => {
                        this.onChainChanged(t, !0)
                    })
                }
                getProvider(r) {
                    if (!this.rpcProviders[r]) throw new Error(`Provider not found: ${r}`);
                    return this.rpcProviders[r]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(r => {
                        var t;
                        this.getProvider(r).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[r])
                    })
                }
                setNamespaces(r) {
                    const {
                        namespaces: t,
                        optionalNamespaces: o,
                        sessionProperties: a
                    } = r;
                    t && Object.keys(t).length && (this.namespaces = t), o && Object.keys(o).length && (this.optionalNamespaces = o), this.sessionProperties = a, this.persist("namespaces", t), this.persist("optionalNamespaces", o)
                }
                validateChain(r) {
                    const [t, o] = r ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, o];
                    if (t && !Object.keys(this.namespaces || {}).map(h => (0, E.M)(h)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && o) return [t, o];
                    const a = (0, E.M)(Object.keys(this.namespaces)[0]);
                    return [a, this.rpcProviders[a].getDefaultChain()]
                }
                requestAccounts() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        const [t] = r.validateChain();
                        return yield r.getProvider(t).requestAccounts()
                    })()
                }
                onChainChanged(r, t = !1) {
                    var o;
                    if (!this.namespaces) return;
                    const [a, u] = this.validateChain(r);
                    t || this.getProvider(a).setDefaultChain(u), (null != (o = this.namespaces[a]) ? o : this.namespaces[`${a}:${u}`]).defaultChain = u, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", u)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                cleanup() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.session = void 0, r.namespaces = void 0, r.optionalNamespaces = void 0, r.sessionProperties = void 0, r.persist("namespaces", void 0), r.persist("optionalNamespaces", void 0), r.persist("sessionProperties", void 0), yield r.cleanupPendingPairings({
                            deletePairings: !0
                        })
                    })()
                }
                persist(r, t) {
                    this.client.core.storage.setItem(`${Zu}/${r}`, t)
                }
                getFromStore(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        return yield t.client.core.storage.getItem(`${Zu}/${r}`)
                    })()
                }
            }
            const Qg = va,
                js = ["eth_sendTransaction", "personal_sign"],
                Vu = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Ms = ["chainChanged", "accountsChanged"],
                ku = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var ry = Object.defineProperty,
                ny = Object.defineProperties,
                iy = Object.getOwnPropertyDescriptors,
                Gu = Object.getOwnPropertySymbols,
                sy = Object.prototype.hasOwnProperty,
                oy = Object.prototype.propertyIsEnumerable,
                Wu = (f, r, t) => r in f ? ry(f, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : f[r] = t,
                Qi = (f, r) => {
                    for (var t in r || (r = {})) sy.call(r, t) && Wu(f, t, r[t]);
                    if (Gu)
                        for (var t of Gu(r)) oy.call(r, t) && Wu(f, t, r[t]);
                    return f
                },
                Ju = (f, r) => ny(f, iy(r));

            function Zs(f) {
                return Number(f[0].split(":")[1])
            }

            function _a(f) {
                return `0x${f.toString(16)}`
            }
            class zs {
                constructor() {
                    this.events = new pe.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (r, t) => (this.events.on(r, t), this), this.once = (r, t) => (this.events.once(r, t), this), this.removeListener = (r, t) => (this.events.removeListener(r, t), this), this.off = (r, t) => (this.events.off(r, t), this), this.parseAccount = r => this.isCompatibleChainId(r) ? this.parseAccountId(r).address : r, this.signer = {}, this.rpc = {}
                }
                static init(r) {
                    return (0, y.Z)(function*() {
                        const t = new zs;
                        return yield t.initialize(r), t
                    })()
                }
                request(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        return yield t.signer.request(r, t.formatChainId(t.chainId))
                    })()
                }
                sendAsync(r, t) {
                    this.signer.sendAsync(r, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                enable() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        return r.session || (yield r.connect()), yield r.request({
                            method: "eth_requestAccounts"
                        })
                    })()
                }
                connect(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (!t.signer.client) throw new Error("Provider not initialized. Call init() first");
                        t.loadConnectOpts(r);
                        const {
                            required: o,
                            optional: a
                        } = function ay(f) {
                            const {
                                chains: r,
                                optionalChains: t,
                                methods: o,
                                optionalMethods: a,
                                events: u,
                                optionalEvents: h,
                                rpcMap: m
                            } = f;
                            if (!(0, E.qt)(r)) throw new Error("Invalid chains");
                            const T = {
                                    chains: r,
                                    methods: o || js,
                                    events: u || Ms,
                                    rpcMap: Qi({}, r.length ? {
                                        [Zs(r)]: m[Zs(r)]
                                    } : {})
                                },
                                O = u ? .filter(fe => !Ms.includes(fe)),
                                N = o ? .filter(fe => !js.includes(fe));
                            if (!(t || h || a || null != O && O.length || null != N && N.length)) return {
                                required: r.length ? T : void 0
                            };
                            const J = {
                                chains: [...new Set(O ? .length && N ? .length || !t ? T.chains.concat(t || []) : t)],
                                methods: [...new Set(T.methods.concat(null != a && a.length ? a : Vu))],
                                events: [...new Set(T.events.concat(null != h && h.length ? h : ku))],
                                rpcMap: m
                            };
                            return {
                                required: r.length ? T : void 0,
                                optional: t.length ? J : void 0
                            }
                        }(t.rpc);
                        try {
                            const u = yield new Promise(function() {
                                var m = (0, y.Z)(function*(T, O) {
                                    var N;
                                    t.rpc.showQrModal && (null == (N = t.modal) || N.subscribeModal(q => {
                                        !q.open && !t.signer.session && (t.signer.abortPairingAttempt(), O(new Error("Connection request reset. Please try again.")))
                                    })), yield t.signer.connect(Ju(Qi({
                                        namespaces: Qi({}, o && {
                                            [t.namespace]: o
                                        })
                                    }, a && {
                                        optionalNamespaces: {
                                            [t.namespace]: a
                                        }
                                    }), {
                                        pairingTopic: r ? .pairingTopic
                                    })).then(q => {
                                        T(q)
                                    }).catch(q => {
                                        O(new Error(q.message))
                                    })
                                });
                                return function(T, O) {
                                    return m.apply(this, arguments)
                                }
                            }());
                            if (!u) return;
                            const h = (0, E.gu)(u.namespaces, [t.namespace]);
                            t.setChainIds(t.rpc.chains.length ? t.rpc.chains : h), t.setAccounts(h), t.events.emit("connect", {
                                chainId: _a(t.chainId)
                            })
                        } catch (u) {
                            throw t.signer.logger.error(u), u
                        } finally {
                            t.modal && t.modal.closeModal()
                        }
                    })()
                }
                disconnect() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        r.session && (yield r.signer.disconnect()), r.reset()
                    })()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", r => {
                        const {
                            params: t
                        } = r, {
                            event: o
                        } = t;
                        "accountsChanged" === o.name ? (this.accounts = this.parseAccounts(o.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === o.name ? this.setChainId(this.formatChainId(o.data)) : this.events.emit(o.name, o.data), this.events.emit("session_event", r)
                    }), this.signer.on("chainChanged", r => {
                        const t = parseInt(r);
                        this.chainId = t, this.events.emit("chainChanged", _a(this.chainId)), this.persist()
                    }), this.signer.on("session_update", r => {
                        this.events.emit("session_update", r)
                    }), this.signer.on("session_delete", r => {
                        this.reset(), this.events.emit("session_delete", r), this.events.emit("disconnect", Ju(Qi({}, (0, E.D6)("USER_DISCONNECTED")), {
                            data: r.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", r => {
                        var t, o;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (o = this.modal) || o.openModal({
                            uri: r
                        })), this.events.emit("display_uri", r)
                    })
                }
                switchEthereumChain(r) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: r.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(r) {
                    return "string" == typeof r && r.startsWith(`${this.namespace}:`)
                }
                formatChainId(r) {
                    return `${this.namespace}:${r}`
                }
                parseChainId(r) {
                    return Number(r.split(":")[1])
                }
                setChainIds(r) {
                    const t = r.filter(o => this.isCompatibleChainId(o)).map(o => this.parseChainId(o));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", _a(this.chainId)), this.persist())
                }
                setChainId(r) {
                    if (this.isCompatibleChainId(r)) {
                        const t = this.parseChainId(r);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(r) {
                    const [t, o, a] = r.split(":");
                    return {
                        chainId: `${t}:${o}`,
                        address: a
                    }
                }
                setAccounts(r) {
                    this.accounts = r.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(r) {
                    var t, o;
                    const a = null != (t = r ? .chains) ? t : [],
                        u = null != (o = r ? .optionalChains) ? o : [],
                        h = a.concat(u);
                    if (!h.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const m = a.length ? r ? .methods || js : [],
                        T = a.length ? r ? .events || Ms : [],
                        O = r ? .optionalMethods || [],
                        N = r ? .optionalEvents || [],
                        q = r ? .rpcMap || this.buildRpcMap(h, r.projectId),
                        J = r ? .qrModalOptions || void 0;
                    return {
                        chains: a ? .map(fe => this.formatChainId(fe)),
                        optionalChains: u.map(fe => this.formatChainId(fe)),
                        methods: m,
                        events: T,
                        optionalMethods: O,
                        optionalEvents: N,
                        rpcMap: q,
                        showQrModal: !(null == r || !r.showQrModal),
                        qrModalOptions: J,
                        projectId: r.projectId,
                        metadata: r.metadata
                    }
                }
                buildRpcMap(r, t) {
                    const o = {};
                    return r.forEach(a => {
                        o[a] = this.getRpcUrl(a, t)
                    }), o
                }
                initialize(r) {
                    var t = this;
                    return (0, y.Z)(function*() {
                        if (t.rpc = t.getRpcConfig(r), t.chainId = Zs(t.rpc.chains.length ? t.rpc.chains : t.rpc.optionalChains), t.signer = yield Qg.init({
                                projectId: t.rpc.projectId,
                                metadata: t.rpc.metadata,
                                disableProviderPing: r.disableProviderPing,
                                relayUrl: r.relayUrl,
                                storageOptions: r.storageOptions
                            }), t.registerEventListeners(), yield t.loadPersistedSession(), t.rpc.showQrModal) {
                            let o;
                            try {
                                const {
                                    WalletConnectModal: a
                                } = yield ne.e(301).then(ne.bind(ne, 3301));
                                o = a
                            } catch {
                                throw new Error("To use QR modal, please install @walletconnect/modal package")
                            }
                            if (o) try {
                                t.modal = new o(Qi({
                                    projectId: t.rpc.projectId
                                }, t.rpc.qrModalOptions))
                            } catch (a) {
                                throw t.signer.logger.error(a), new Error("Could not generate WalletConnectModal Instance")
                            }
                        }
                    })()
                }
                loadConnectOpts(r) {
                    if (!r) return;
                    const {
                        chains: t,
                        optionalChains: o,
                        rpcMap: a
                    } = r;
                    t && (0, E.qt)(t) && (this.rpc.chains = t.map(u => this.formatChainId(u)), t.forEach(u => {
                        this.rpc.rpcMap[u] = a ? .[u] || this.getRpcUrl(u)
                    })), o && (0, E.qt)(o) && (this.rpc.optionalChains = [], this.rpc.optionalChains = o ? .map(u => this.formatChainId(u)), o.forEach(u => {
                        this.rpc.rpcMap[u] = a ? .[u] || this.getRpcUrl(u)
                    }))
                }
                getRpcUrl(r, t) {
                    var o;
                    return (null == (o = this.rpc.rpcMap) ? void 0 : o[r]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${r}&projectId=${t||this.rpc.projectId}`
                }
                loadPersistedSession() {
                    var r = this;
                    return (0, y.Z)(function*() {
                        if (!r.session) return;
                        const t = yield r.signer.client.core.storage.getItem(`${r.STORAGE_KEY}/chainId`), o = r.session.namespaces[`${r.namespace}:${t}`] ? r.session.namespaces[`${r.namespace}:${t}`] : r.session.namespaces[r.namespace];
                        r.setChainIds(t ? [r.formatChainId(t)] : o ? .accounts), r.setAccounts(o ? .accounts)
                    })()
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(r) {
                    return "string" == typeof r || r instanceof String ? [this.parseAccount(r)] : r.map(t => this.parseAccount(t))
                }
            }
            const cy = zs
        },
        2108: (Ue, H, ne) => {
            "use strict";
            ne.d(H, {
                q: () => y
            });
            class y {}
        },
        699: (Ue, H, ne) => {
            "use strict";
            ne.r(H), ne.d(H, {
                IEvents: () => y.q
            });
            var y = ne(2108)
        },
        4953: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.HEARTBEAT_EVENTS = H.HEARTBEAT_INTERVAL = void 0;
            const y = ne(5409);
            H.HEARTBEAT_INTERVAL = y.FIVE_SECONDS, H.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        5368: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), ne(9653).__exportStar(ne(4953), H)
        },
        9754: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.HeartBeat = void 0;
            const y = ne(9653),
                pe = ne(2016),
                ve = ne(5409),
                E = ne(4083),
                ee = ne(5368);
            class be extends E.IHeartBeat {
                constructor(oe) {
                    super(oe), this.events = new pe.EventEmitter, this.interval = ee.HEARTBEAT_INTERVAL, this.interval = oe ? .interval || ee.HEARTBEAT_INTERVAL
                }
                static init(oe) {
                    return y.__awaiter(this, void 0, void 0, function*() {
                        const ae = new be(oe);
                        return yield ae.init(), ae
                    })
                }
                init() {
                    return y.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(oe, ae) {
                    this.events.on(oe, ae)
                }
                once(oe, ae) {
                    this.events.once(oe, ae)
                }
                off(oe, ae) {
                    this.events.off(oe, ae)
                }
                removeListener(oe, ae) {
                    this.events.removeListener(oe, ae)
                }
                initialize() {
                    return y.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), ve.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(ee.HEARTBEAT_EVENTS.pulse)
                }
            }
            H.HeartBeat = be
        },
        986: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            });
            const y = ne(9653);
            y.__exportStar(ne(9754), H), y.__exportStar(ne(4083), H), y.__exportStar(ne(5368), H)
        },
        7293: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.IHeartBeat = void 0;
            const y = ne(699);
            H.IHeartBeat = class pe extends y.IEvents {
                constructor(E) {
                    super()
                }
            }
        },
        4083: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), ne(9653).__exportStar(ne(7293), H)
        },
        6904: (Ue, H) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.PINO_CUSTOM_CONTEXT_KEY = H.PINO_LOGGER_DEFAULTS = void 0, H.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, H.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        2997: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.pino = void 0;
            const y = ne(7121),
                pe = y.__importDefault(ne(1590));
            Object.defineProperty(H, "pino", {
                enumerable: !0,
                get: function() {
                    return pe.default
                }
            }), y.__exportStar(ne(6904), H), y.__exportStar(ne(2723), H)
        },
        2723: (Ue, H, ne) => {
            "use strict";
            Object.defineProperty(H, "__esModule", {
                value: !0
            }), H.generateChildLogger = H.formatChildLoggerContext = H.getLoggerContext = H.setBrowserLoggerContext = H.getBrowserLoggerContext = H.getDefaultLoggerOptions = void 0;
            const y = ne(6904);

            function ve(oe, ae = y.PINO_CUSTOM_CONTEXT_KEY) {
                return oe[ae] || ""
            }

            function E(oe, ae, ce = y.PINO_CUSTOM_CONTEXT_KEY) {
                return oe[ce] = ae, oe
            }

            function ee(oe, ae = y.PINO_CUSTOM_CONTEXT_KEY) {
                let ce = "";
                return ce = typeof oe.bindings > "u" ? ve(oe, ae) : oe.bindings().context || "", ce
            }

            function be(oe, ae, ce = y.PINO_CUSTOM_CONTEXT_KEY) {
                const Ce = ee(oe, ce);
                return Ce.trim() ? `${Ce}/${ae}` : ae
            }
            H.getDefaultLoggerOptions = function pe(oe) {
                return Object.assign(Object.assign({}, oe), {
                    level: oe ? .level || y.PINO_LOGGER_DEFAULTS.level
                })
            }, H.getBrowserLoggerContext = ve, H.setBrowserLoggerContext = E, H.getLoggerContext = ee, H.formatChildLoggerContext = be, H.generateChildLogger = function Te(oe, ae, ce = y.PINO_CUSTOM_CONTEXT_KEY) {
                const Ce = be(oe, ae, ce);
                return E(oe.child({
                    context: Ce
                }), Ce, ce)
            }
        },
        2768: () => {},
        2055: function(Ue, H) {
            var ve, ne = typeof self < "u" ? self : this,
                y = function() {
                    function ve() {
                        this.fetch = !1, this.DOMException = ne.DOMException
                    }
                    return ve.prototype = ne, new ve
                }();
            ve = y,
                function(ee) {
                    var be_searchParams = "URLSearchParams" in ve,
                        be_iterable = "Symbol" in ve && "iterator" in Symbol,
                        be_blob = "FileReader" in ve && "Blob" in ve && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        be_formData = "FormData" in ve,
                        be_arrayBuffer = "ArrayBuffer" in ve;
                    if (be_arrayBuffer) var oe = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        ae = ArrayBuffer.isView || function(b) {
                            return b && oe.indexOf(Object.prototype.toString.call(b)) > -1
                        };

                    function ce(b) {
                        if ("string" != typeof b && (b = String(b)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b)) throw new TypeError("Invalid character in header field name");
                        return b.toLowerCase()
                    }

                    function Ce(b) {
                        return "string" != typeof b && (b = String(b)), b
                    }

                    function me(b) {
                        var g = {
                            next: function() {
                                var I = b.shift();
                                return {
                                    done: void 0 === I,
                                    value: I
                                }
                            }
                        };
                        return be_iterable && (g[Symbol.iterator] = function() {
                            return g
                        }), g
                    }

                    function ge(b) {
                        this.map = {}, b instanceof ge ? b.forEach(function(g, I) {
                            this.append(I, g)
                        }, this) : Array.isArray(b) ? b.forEach(function(g) {
                            this.append(g[0], g[1])
                        }, this) : b && Object.getOwnPropertyNames(b).forEach(function(g) {
                            this.append(g, b[g])
                        }, this)
                    }

                    function le(b) {
                        if (b.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        b.bodyUsed = !0
                    }

                    function Qe(b) {
                        return new Promise(function(g, I) {
                            b.onload = function() {
                                g(b.result)
                            }, b.onerror = function() {
                                I(b.error)
                            }
                        })
                    }

                    function Ze(b) {
                        var g = new FileReader,
                            I = Qe(g);
                        return g.readAsArrayBuffer(b), I
                    }

                    function xt(b) {
                        if (b.slice) return b.slice(0);
                        var g = new Uint8Array(b.byteLength);
                        return g.set(new Uint8Array(b)), g.buffer
                    }

                    function Et() {
                        return this.bodyUsed = !1, this._initBody = function(b) {
                            this._bodyInit = b, b ? "string" == typeof b ? this._bodyText = b : be_blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : be_formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : be_searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : be_arrayBuffer && be_blob && function Te(b) {
                                return b && DataView.prototype.isPrototypeOf(b)
                            }(b) ? (this._bodyArrayBuffer = xt(b.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : be_arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || ae(b)) ? this._bodyArrayBuffer = xt(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof b ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : be_searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, be_blob && (this.blob = function() {
                            var b = le(this);
                            if (b) return b;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? le(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Ze)
                        }), this.text = function() {
                            var b = le(this);
                            if (b) return b;
                            if (this._bodyBlob) return function ke(b) {
                                var g = new FileReader,
                                    I = Qe(g);
                                return g.readAsText(b), I
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function We(b) {
                                for (var g = new Uint8Array(b), I = new Array(g.length), G = 0; G < g.length; G++) I[G] = String.fromCharCode(g[G]);
                                return I.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, be_formData && (this.formData = function() {
                            return this.text().then(ue)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    ge.prototype.append = function(b, g) {
                        b = ce(b), g = Ce(g);
                        var I = this.map[b];
                        this.map[b] = I ? I + ", " + g : g
                    }, ge.prototype.delete = function(b) {
                        delete this.map[ce(b)]
                    }, ge.prototype.get = function(b) {
                        return b = ce(b), this.has(b) ? this.map[b] : null
                    }, ge.prototype.has = function(b) {
                        return this.map.hasOwnProperty(ce(b))
                    }, ge.prototype.set = function(b, g) {
                        this.map[ce(b)] = Ce(g)
                    }, ge.prototype.forEach = function(b, g) {
                        for (var I in this.map) this.map.hasOwnProperty(I) && b.call(g, this.map[I], I, this)
                    }, ge.prototype.keys = function() {
                        var b = [];
                        return this.forEach(function(g, I) {
                            b.push(I)
                        }), me(b)
                    }, ge.prototype.values = function() {
                        var b = [];
                        return this.forEach(function(g) {
                            b.push(g)
                        }), me(b)
                    }, ge.prototype.entries = function() {
                        var b = [];
                        return this.forEach(function(g, I) {
                            b.push([I, g])
                        }), me(b)
                    }, be_iterable && (ge.prototype[Symbol.iterator] = ge.prototype.entries);
                    var It = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function B(b, g) {
                        var I = (g = g || {}).body;
                        if (b instanceof B) {
                            if (b.bodyUsed) throw new TypeError("Already read");
                            this.url = b.url, this.credentials = b.credentials, g.headers || (this.headers = new ge(b.headers)), this.method = b.method, this.mode = b.mode, this.signal = b.signal, !I && null != b._bodyInit && (I = b._bodyInit, b.bodyUsed = !0)
                        } else this.url = String(b);
                        if (this.credentials = g.credentials || this.credentials || "same-origin", (g.headers || !this.headers) && (this.headers = new ge(g.headers)), this.method = function Ge(b) {
                                var g = b.toUpperCase();
                                return It.indexOf(g) > -1 ? g : b
                            }(g.method || this.method || "GET"), this.mode = g.mode || this.mode || null, this.signal = g.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && I) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(I)
                    }

                    function ue(b) {
                        var g = new FormData;
                        return b.trim().split("&").forEach(function(I) {
                            if (I) {
                                var G = I.split("="),
                                    he = G.shift().replace(/\+/g, " "),
                                    D = G.join("=").replace(/\+/g, " ");
                                g.append(decodeURIComponent(he), decodeURIComponent(D))
                            }
                        }), g
                    }

                    function v(b) {
                        var g = new ge;
                        return b.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(G) {
                            var he = G.split(":"),
                                D = he.shift().trim();
                            if (D) {
                                var W = he.join(":").trim();
                                g.append(D, W)
                            }
                        }), g
                    }

                    function P(b, g) {
                        g || (g = {}), this.type = "default", this.status = void 0 === g.status ? 200 : g.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in g ? g.statusText : "OK", this.headers = new ge(g.headers), this.url = g.url || "", this._initBody(b)
                    }
                    B.prototype.clone = function() {
                        return new B(this, {
                            body: this._bodyInit
                        })
                    }, Et.call(B.prototype), Et.call(P.prototype), P.prototype.clone = function() {
                        return new P(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new ge(this.headers),
                            url: this.url
                        })
                    }, P.error = function() {
                        var b = new P(null, {
                            status: 0,
                            statusText: ""
                        });
                        return b.type = "error", b
                    };
                    var x = [301, 302, 303, 307, 308];
                    P.redirect = function(b, g) {
                        if (-1 === x.indexOf(g)) throw new RangeError("Invalid status code");
                        return new P(null, {
                            status: g,
                            headers: {
                                location: b
                            }
                        })
                    }, ee.DOMException = ve.DOMException;
                    try {
                        new ee.DOMException
                    } catch {
                        ee.DOMException = function(g, I) {
                            this.message = g, this.name = I;
                            var G = Error(g);
                            this.stack = G.stack
                        }, ee.DOMException.prototype = Object.create(Error.prototype), ee.DOMException.prototype.constructor = ee.DOMException
                    }

                    function A(b, g) {
                        return new Promise(function(I, G) {
                            var he = new B(b, g);
                            if (he.signal && he.signal.aborted) return G(new ee.DOMException("Aborted", "AbortError"));
                            var D = new XMLHttpRequest;

                            function W() {
                                D.abort()
                            }
                            D.onload = function() {
                                var re = {
                                    status: D.status,
                                    statusText: D.statusText,
                                    headers: v(D.getAllResponseHeaders() || "")
                                };
                                re.url = "responseURL" in D ? D.responseURL : re.headers.get("X-Request-URL"), I(new P("response" in D ? D.response : D.responseText, re))
                            }, D.onerror = function() {
                                G(new TypeError("Network request failed"))
                            }, D.ontimeout = function() {
                                G(new TypeError("Network request failed"))
                            }, D.onabort = function() {
                                G(new ee.DOMException("Aborted", "AbortError"))
                            }, D.open(he.method, he.url, !0), "include" === he.credentials ? D.withCredentials = !0 : "omit" === he.credentials && (D.withCredentials = !1), "responseType" in D && be_blob && (D.responseType = "blob"), he.headers.forEach(function(re, $) {
                                D.setRequestHeader($, re)
                            }), he.signal && (he.signal.addEventListener("abort", W), D.onreadystatechange = function() {
                                4 === D.readyState && he.signal.removeEventListener("abort", W)
                            }), D.send(typeof he._bodyInit > "u" ? null : he._bodyInit)
                        })
                    }
                    A.polyfill = !0, ve.fetch || (ve.fetch = A, ve.Headers = ge, ve.Request = B, ve.Response = P), ee.Headers = ge, ee.Request = B, ee.Response = P, ee.fetch = A, Object.defineProperty(ee, "__esModule", {
                        value: !0
                    })
                }({}), y.fetch.ponyfill = !0, delete y.fetch.polyfill;
            var pe = y;
            (H = pe.fetch).default = pe.fetch, H.fetch = pe.fetch, H.Headers = pe.Headers, H.Request = pe.Request, H.Response = pe.Response, Ue.exports = H
        },
        9557: (Ue, H, ne) => {
            Ue.exports = self.fetch || (self.fetch = ne(8456).default || ne(8456))
        },
        2650: (Ue, H, ne) => {
            Ue = ne.nmd(Ue);
            var pe = "__lodash_hash_undefined__",
                ve = 1,
                E = 2,
                ee = 9007199254740991,
                be = "[object Arguments]",
                Te = "[object Array]",
                oe = "[object AsyncFunction]",
                ae = "[object Boolean]",
                ce = "[object Date]",
                Ce = "[object Error]",
                me = "[object Function]",
                ge = "[object GeneratorFunction]",
                le = "[object Map]",
                Qe = "[object Number]",
                Ze = "[object Null]",
                ke = "[object Object]",
                We = "[object Promise]",
                xt = "[object Proxy]",
                Et = "[object RegExp]",
                It = "[object Set]",
                Ge = "[object String]",
                ue = "[object Undefined]",
                v = "[object WeakMap]",
                P = "[object ArrayBuffer]",
                x = "[object DataView]",
                we = /^\[object .+?Constructor\]$/,
                He = /^(?:0|[1-9]\d*)$/,
                Ne = {};
            Ne["[object Float32Array]"] = Ne["[object Float64Array]"] = Ne["[object Int8Array]"] = Ne["[object Int16Array]"] = Ne["[object Int32Array]"] = Ne["[object Uint8Array]"] = Ne["[object Uint8ClampedArray]"] = Ne["[object Uint16Array]"] = Ne["[object Uint32Array]"] = !0, Ne[be] = Ne[Te] = Ne[P] = Ne[ae] = Ne[x] = Ne[ce] = Ne[Ce] = Ne[me] = Ne[le] = Ne[Qe] = Ne[ke] = Ne[Et] = Ne[It] = Ne[Ge] = Ne[v] = !1;
            var Zt = "object" == typeof global && global && global.Object === Object && global,
                tn = "object" == typeof self && self && self.Object === Object && self,
                pt = Zt || tn || Function("return this")(),
                K = H && !H.nodeType && H,
                V = K && Ue && !Ue.nodeType && Ue,
                Z = V && V.exports === K,
                d = Z && Zt.process,
                F = function() {
                    try {
                        return d && d.binding && d.binding("util")
                    } catch {}
                }(),
                Ee = F && F.isTypedArray;

            function vt(S, L) {
                for (var te = -1, ye = null == S ? 0 : S.length; ++te < ye;)
                    if (L(S[te], te, S)) return !0;
                return !1
            }

            function Jt(S, L) {
                return S.has(L)
            }

            function _t(S) {
                var L = -1,
                    te = Array(S.size);
                return S.forEach(function(ye, ft) {
                    te[++L] = [ft, ye]
                }), te
            }

            function zt(S) {
                var L = -1,
                    te = Array(S.size);
                return S.forEach(function(ye) {
                    te[++L] = ye
                }), te
            }
            var S, Dt = Array.prototype,
                ut = Object.prototype,
                lt = pt["__core-js_shared__"],
                ct = Function.prototype.toString,
                Ye = ut.hasOwnProperty,
                Qt = (S = /[^.]+$/.exec(lt && lt.keys && lt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + S : "",
                sr = ut.toString,
                yr = RegExp("^" + ct.call(Ye).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                hr = Z ? pt.Buffer : void 0,
                dr = pt.Symbol,
                Sr = pt.Uint8Array,
                Cr = ut.propertyIsEnumerable,
                br = Dt.splice,
                Pe = dr ? dr.toStringTag : void 0,
                wr = Object.getOwnPropertySymbols,
                _n = hr ? hr.isBuffer : void 0,
                Jn = function ir(S, L) {
                    return function(te) {
                        return S(L(te))
                    }
                }(Object.keys, Object),
                mn = Ln(pt, "DataView"),
                fn = Ln(pt, "Map"),
                Nt = Ln(pt, "Promise"),
                Ft = Ln(pt, "Set"),
                Lt = Ln(pt, "WeakMap"),
                At = Ln(Object, "create"),
                Yt = hn(mn),
                or = hn(fn),
                Xt = hn(Nt),
                ar = hn(Ft),
                er = hn(Lt),
                qt = dr ? dr.prototype : void 0,
                $t = qt ? qt.valueOf : void 0;

            function gt(S) {
                var L = -1,
                    te = null == S ? 0 : S.length;
                for (this.clear(); ++L < te;) {
                    var ye = S[L];
                    this.set(ye[0], ye[1])
                }
            }

            function rn(S) {
                var L = -1,
                    te = null == S ? 0 : S.length;
                for (this.clear(); ++L < te;) {
                    var ye = S[L];
                    this.set(ye[0], ye[1])
                }
            }

            function bn(S) {
                var L = -1,
                    te = null == S ? 0 : S.length;
                for (this.clear(); ++L < te;) {
                    var ye = S[L];
                    this.set(ye[0], ye[1])
                }
            }

            function qi(S) {
                var L = -1,
                    te = null == S ? 0 : S.length;
                for (this.__data__ = new bn; ++L < te;) this.add(S[L])
            }

            function Hr(S) {
                var L = this.__data__ = new rn(S);
                this.size = L.size
            }

            function pi(S, L) {
                for (var te = S.length; te--;)
                    if (As(S[te][0], L)) return te;
                return -1
            }

            function gi(S) {
                return null == S ? void 0 === S ? ue : Ze : Pe && Pe in Object(S) ? function Go(S) {
                    var L = Ye.call(S, Pe),
                        te = S[Pe];
                    try {
                        S[Pe] = void 0;
                        var ye = !0
                    } catch {}
                    var ft = sr.call(S);
                    return ye && (L ? S[Pe] = te : delete S[Pe]), ft
                }(S) : function Bc(S) {
                    return sr.call(S)
                }(S)
            }

            function Is(S) {
                return Kr(S) && gi(S) == be
            }

            function Ko(S, L, te, ye, ft) {
                return S === L || (null == S || null == L || !Kr(S) && !Kr(L) ? S != S && L != L : function Ps(S, L, te, ye, ft, Le) {
                    var mt = Yn(S),
                        Ht = Yn(L),
                        nr = mt ? Te : Br(S),
                        bt = Ht ? Te : Br(L),
                        xr = (nr = nr == be ? ke : nr) == ke,
                        Or = (bt = bt == be ? ke : bt) == ke,
                        Bt = nr == bt;
                    if (Bt && _i(S)) {
                        if (!_i(L)) return !1;
                        mt = !0, xr = !1
                    }
                    if (Bt && !xr) return Le || (Le = new Hr), mt || Xn(S) ? yi(S, L, te, ye, ft, Le) : function Uc(S, L, te, ye, ft, Le, mt) {
                        switch (te) {
                            case x:
                                if (S.byteLength != L.byteLength || S.byteOffset != L.byteOffset) return !1;
                                S = S.buffer, L = L.buffer;
                            case P:
                                return !(S.byteLength != L.byteLength || !Le(new Sr(S), new Sr(L)));
                            case ae:
                            case ce:
                            case Qe:
                                return As(+S, +L);
                            case Ce:
                                return S.name == L.name && S.message == L.message;
                            case Et:
                            case Ge:
                                return S == L + "";
                            case le:
                                var Ht = _t;
                            case It:
                                if (Ht || (Ht = zt), S.size != L.size && !(ye & ve)) return !1;
                                var bt = mt.get(S);
                                if (bt) return bt == L;
                                ye |= E, mt.set(S, L);
                                var xr = yi(Ht(S), Ht(L), ye, ft, Le, mt);
                                return mt.delete(S), xr;
                            case "[object Symbol]":
                                if ($t) return $t.call(S) == $t.call(L)
                        }
                        return !1
                    }(S, L, nr, te, ye, ft, Le);
                    if (!(te & ve)) {
                        var jt = xr && Ye.call(S, "__wrapped__"),
                            Pt = Or && Ye.call(L, "__wrapped__");
                        if (jt || Pt) {
                            var wn = jt ? S.value() : S,
                                ur = Pt ? L.value() : L;
                            return Le || (Le = new Hr), ft(wn, ur, te, ye, Le)
                        }
                    }
                    return !!Bt && (Le || (Le = new Hr), function ko(S, L, te, ye, ft, Le) {
                        var mt = te & ve,
                            Ht = Ss(S),
                            nr = Ht.length;
                        if (nr != Ss(L).length && !mt) return !1;
                        for (var Or = nr; Or--;) {
                            var Bt = Ht[Or];
                            if (!(mt ? Bt in L : Ye.call(L, Bt))) return !1
                        }
                        var jt = Le.get(S);
                        if (jt && Le.get(L)) return jt == L;
                        var Pt = !0;
                        Le.set(S, L), Le.set(L, S);
                        for (var wn = mt; ++Or < nr;) {
                            var ur = S[Bt = Ht[Or]],
                                jn = L[Bt];
                            if (ye) var ea = mt ? ye(jn, ur, Bt, L, S, Le) : ye(ur, jn, Bt, S, L, Le);
                            if (!(void 0 === ea ? ur === jn || ft(ur, jn, te, ye, Le) : ea)) {
                                Pt = !1;
                                break
                            }
                            wn || (wn = "constructor" == Bt)
                        }
                        if (Pt && !wn) {
                            var wi = S.constructor,
                                xi = L.constructor;
                            wi != xi && "constructor" in S && "constructor" in L && !("function" == typeof wi && wi instanceof wi && "function" == typeof xi && xi instanceof xi) && (Pt = !1)
                        }
                        return Le.delete(S), Le.delete(L), Pt
                    }(S, L, te, ye, ft, Le))
                }(S, L, te, ye, Ko, ft))
            }

            function yi(S, L, te, ye, ft, Le) {
                var mt = te & ve,
                    Ht = S.length,
                    nr = L.length;
                if (Ht != nr && !(mt && nr > Ht)) return !1;
                var bt = Le.get(S);
                if (bt && Le.get(L)) return bt == L;
                var xr = -1,
                    Or = !0,
                    Bt = te & E ? new qi : void 0;
                for (Le.set(S, L), Le.set(L, S); ++xr < Ht;) {
                    var jt = S[xr],
                        Pt = L[xr];
                    if (ye) var wn = mt ? ye(Pt, jt, xr, L, S, Le) : ye(jt, Pt, xr, S, L, Le);
                    if (void 0 !== wn) {
                        if (wn) continue;
                        Or = !1;
                        break
                    }
                    if (Bt) {
                        if (!vt(L, function(ur, jn) {
                                if (!Jt(Bt, jn) && (jt === ur || ft(jt, ur, te, ye, Le))) return Bt.push(jn)
                            })) {
                            Or = !1;
                            break
                        }
                    } else if (jt !== Pt && !ft(jt, Pt, te, ye, Le)) {
                        Or = !1;
                        break
                    }
                }
                return Le.delete(S), Le.delete(L), Or
            }

            function Ss(S) {
                return function Bo(S, L, te) {
                    var ye = L(S);
                    return Yn(S) ? ye : function et(S, L) {
                        for (var te = -1, ye = L.length, ft = S.length; ++te < ye;) S[ft + te] = L[te];
                        return S
                    }(ye, te(S))
                }(S, bi, Os)
            }

            function vi(S, L) {
                var te = S.__data__;
                return function Hc(S) {
                    var L = typeof S;
                    return "string" == L || "number" == L || "symbol" == L || "boolean" == L ? "__proto__" !== S : null === S
                }(L) ? te["string" == typeof L ? "string" : "hash"] : te.map
            }

            function Ln(S, L) {
                var te = function Ct(S, L) {
                    return S ? .[L]
                }(S, L);
                return function Vo(S) {
                    return !(!Hi(S) || function Qn(S) {
                        return !!Qt && Qt in S
                    }(S)) && (Qo(S) ? yr : we).test(hn(S))
                }(te) ? te : void 0
            }
            gt.prototype.clear = function cr() {
                this.__data__ = At ? At(null) : {}, this.size = 0
            }, gt.prototype.delete = function tr(S) {
                var L = this.has(S) && delete this.__data__[S];
                return this.size -= L ? 1 : 0, L
            }, gt.prototype.get = function Ut(S) {
                var L = this.__data__;
                if (At) {
                    var te = L[S];
                    return te === pe ? void 0 : te
                }
                return Ye.call(L, S) ? L[S] : void 0
            }, gt.prototype.has = function rr(S) {
                var L = this.__data__;
                return At ? void 0 !== L[S] : Ye.call(L, S)
            }, gt.prototype.set = function Ie(S, L) {
                var te = this.__data__;
                return this.size += this.has(S) ? 0 : 1, te[S] = At && void 0 === L ? pe : L, this
            }, rn.prototype.clear = function Fo() {
                this.__data__ = [], this.size = 0
            }, rn.prototype.delete = function bs(S) {
                var L = this.__data__,
                    te = pi(L, S);
                return !(te < 0 || (te == L.length - 1 ? L.pop() : br.call(L, te, 1), --this.size, 0))
            }, rn.prototype.get = function ws(S) {
                var L = this.__data__,
                    te = pi(L, S);
                return te < 0 ? void 0 : L[te][1]
            }, rn.prototype.has = function Lo(S) {
                return pi(this.__data__, S) > -1
            }, rn.prototype.set = function jo(S, L) {
                var te = this.__data__,
                    ye = pi(te, S);
                return ye < 0 ? (++this.size, te.push([S, L])) : te[ye][1] = L, this
            }, bn.prototype.clear = function Mo() {
                this.size = 0, this.__data__ = {
                    hash: new gt,
                    map: new(fn || rn),
                    string: new gt
                }
            }, bn.prototype.delete = function Zo(S) {
                var L = vi(this, S).delete(S);
                return this.size -= L ? 1 : 0, L
            }, bn.prototype.get = function xs(S) {
                return vi(this, S).get(S)
            }, bn.prototype.has = function zo(S) {
                return vi(this, S).has(S)
            }, bn.prototype.set = function qo(S, L) {
                var te = vi(this, S),
                    ye = te.size;
                return te.set(S, L), this.size += te.size == ye ? 0 : 1, this
            }, qi.prototype.add = qi.prototype.push = function $o(S) {
                return this.__data__.set(S, pe), this
            }, qi.prototype.has = function Uo(S) {
                return this.__data__.has(S)
            }, Hr.prototype.clear = function $i() {
                this.__data__ = new rn, this.size = 0
            }, Hr.prototype.delete = function hi(S) {
                var L = this.__data__,
                    te = L.delete(S);
                return this.size = L.size, te
            }, Hr.prototype.get = function di(S) {
                return this.__data__.get(S)
            }, Hr.prototype.has = function Es(S) {
                return this.__data__.has(S)
            }, Hr.prototype.set = function qc(S, L) {
                var te = this.__data__;
                if (te instanceof rn) {
                    var ye = te.__data__;
                    if (!fn || ye.length < 199) return ye.push([S, L]), this.size = ++te.size, this;
                    te = this.__data__ = new bn(ye)
                }
                return te.set(S, L), this.size = te.size, this
            };
            var Os = wr ? function(S) {
                    return null == S ? [] : (S = Object(S), function De(S, L) {
                        for (var te = -1, ye = null == S ? 0 : S.length, ft = 0, Le = []; ++te < ye;) {
                            var mt = S[te];
                            L(mt, te, S) && (Le[ft++] = mt)
                        }
                        return Le
                    }(wr(S), function(L) {
                        return Cr.call(S, L)
                    }))
                } : function Yo() {
                    return []
                },
                Br = gi;

            function Wo(S, L) {
                return !!(L = L ? ? ee) && ("number" == typeof S || He.test(S)) && S > -1 && S % 1 == 0 && S < L
            }

            function hn(S) {
                if (null != S) {
                    try {
                        return ct.call(S)
                    } catch {}
                    try {
                        return S + ""
                    } catch {}
                }
                return ""
            }

            function As(S, L) {
                return S === L || S != S && L != L
            }(mn && Br(new mn(new ArrayBuffer(1))) != x || fn && Br(new fn) != le || Nt && Br(Nt.resolve()) != We || Ft && Br(new Ft) != It || Lt && Br(new Lt) != v) && (Br = function(S) {
                var L = gi(S),
                    te = L == ke ? S.constructor : void 0,
                    ye = te ? hn(te) : "";
                if (ye) switch (ye) {
                    case Yt:
                        return x;
                    case or:
                        return le;
                    case Xt:
                        return We;
                    case ar:
                        return It;
                    case er:
                        return v
                }
                return L
            });
            var Ts = Is(function() {
                    return arguments
                }()) ? Is : function(S) {
                    return Kr(S) && Ye.call(S, "callee") && !Cr.call(S, "callee")
                },
                Yn = Array.isArray,
                _i = _n || function Xo() {
                    return !1
                };

            function Qo(S) {
                if (!Hi(S)) return !1;
                var L = gi(S);
                return L == me || L == ge || L == oe || L == xt
            }

            function mi(S) {
                return "number" == typeof S && S > -1 && S % 1 == 0 && S <= ee
            }

            function Hi(S) {
                var L = typeof S;
                return null != S && ("object" == L || "function" == L)
            }

            function Kr(S) {
                return null != S && "object" == typeof S
            }
            var Xn = Ee ? function at(S) {
                return function(L) {
                    return S(L)
                }
            }(Ee) : function Ui(S) {
                return Kr(S) && mi(S.length) && !!Ne[gi(S)]
            };

            function bi(S) {
                return function Kc(S) {
                    return null != S && mi(S.length) && !Qo(S)
                }(S) ? function Ho(S, L) {
                    var te = Yn(S),
                        ye = !te && Ts(S),
                        ft = !te && !ye && _i(S),
                        Le = !te && !ye && !ft && Xn(S),
                        mt = te || ye || ft || Le,
                        Ht = mt ? function nt(S, L) {
                            for (var te = -1, ye = Array(S); ++te < S;) ye[te] = L(te);
                            return ye
                        }(S.length, String) : [],
                        nr = Ht.length;
                    for (var bt in S)(L || Ye.call(S, bt)) && (!mt || !("length" == bt || ft && ("offset" == bt || "parent" == bt) || Le && ("buffer" == bt || "byteLength" == bt || "byteOffset" == bt) || Wo(bt, nr))) && Ht.push(bt);
                    return Ht
                }(S) : function $c(S) {
                    if (! function Rs(S) {
                            var L = S && S.constructor;
                            return S === ("function" == typeof L && L.prototype || ut)
                        }(S)) return Jn(S);
                    var L = [];
                    for (var te in Object(S)) Ye.call(S, te) && "constructor" != te && L.push(te);
                    return L
                }(S)
            }
            Ue.exports = function Jo(S, L) {
                return Ko(S, L)
            }
        },
        514: Ue => {
            "use strict";

            function H(y) {
                try {
                    return JSON.stringify(y)
                } catch {
                    return '"[Circular]"'
                }
            }
            Ue.exports = function ne(y, pe, ve) {
                var E = ve && ve.stringify || H;
                if ("object" == typeof y && null !== y) {
                    var be = pe.length + 1;
                    if (1 === be) return y;
                    var Te = new Array(be);
                    Te[0] = E(y);
                    for (var oe = 1; oe < be; oe++) Te[oe] = E(pe[oe]);
                    return Te.join(" ")
                }
                if ("string" != typeof y) return y;
                var ae = pe.length;
                if (0 === ae) return y;
                for (var ce = "", Ce = 0, me = -1, ge = y && y.length || 0, le = 0; le < ge;) {
                    if (37 === y.charCodeAt(le) && le + 1 < ge) {
                        switch (me = me > -1 ? me : 0, y.charCodeAt(le + 1)) {
                            case 100:
                            case 102:
                                if (Ce >= ae || null == pe[Ce]) break;
                                me < le && (ce += y.slice(me, le)), ce += Number(pe[Ce]), me = le + 2, le++;
                                break;
                            case 105:
                                if (Ce >= ae || null == pe[Ce]) break;
                                me < le && (ce += y.slice(me, le)), ce += Math.floor(Number(pe[Ce])), me = le + 2, le++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (Ce >= ae || void 0 === pe[Ce]) break;
                                me < le && (ce += y.slice(me, le));
                                var Qe = typeof pe[Ce];
                                if ("string" === Qe) {
                                    ce += "'" + pe[Ce] + "'", me = le + 2, le++;
                                    break
                                }
                                if ("function" === Qe) {
                                    ce += pe[Ce].name || "<anonymous>", me = le + 2, le++;
                                    break
                                }
                                ce += E(pe[Ce]), me = le + 2, le++;
                                break;
                            case 115:
                                if (Ce >= ae) break;
                                me < le && (ce += y.slice(me, le)), ce += String(pe[Ce]), me = le + 2, le++;
                                break;
                            case 37:
                                me < le && (ce += y.slice(me, le)), ce += "%", me = le + 2, le++, Ce--
                        }++Ce
                    }++le
                }
                return -1 === me ? y : (me < ge && (ce += y.slice(me)), ce)
            }
        },
        8456: (Ue, H, ne) => {
            "use strict";

            function y(pe, ve) {
                return ve = ve || {}, new Promise(function(E, ee) {
                    var be = new XMLHttpRequest,
                        Te = [],
                        oe = [],
                        ae = {},
                        ce = function() {
                            return {
                                ok: 2 == (be.status / 100 | 0),
                                statusText: be.statusText,
                                status: be.status,
                                url: be.responseURL,
                                text: function() {
                                    return Promise.resolve(be.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(be.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([be.response]))
                                },
                                clone: ce,
                                headers: {
                                    keys: function() {
                                        return Te
                                    },
                                    entries: function() {
                                        return oe
                                    },
                                    get: function(me) {
                                        return ae[me.toLowerCase()]
                                    },
                                    has: function(me) {
                                        return me.toLowerCase() in ae
                                    }
                                }
                            }
                        };
                    for (var Ce in be.open(ve.method || "get", pe, !0), be.onload = function() {
                            be.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(me, ge, le) {
                                Te.push(ge = ge.toLowerCase()), oe.push([ge, le]), ae[ge] = ae[ge] ? ae[ge] + "," + le : le
                            }), E(ce())
                        }, be.onerror = ee, be.withCredentials = "include" == ve.credentials, ve.headers) be.setRequestHeader(Ce, ve.headers[Ce]);
                    be.send(ve.body || null)
                })
            }
            ne.r(H), ne.d(H, {
                default: () => y
            })
        },
        3569: Ue => {
            "use strict";
            Ue.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        4308: (Ue, H, ne) => {
            "use strict";
            ne.r(H), ne.d(H, {
                __assign: () => ve,
                __asyncDelegator: () => We,
                __asyncGenerator: () => ke,
                __asyncValues: () => xt,
                __await: () => Ze,
                __awaiter: () => oe,
                __classPrivateFieldGet: () => B,
                __classPrivateFieldSet: () => ue,
                __createBinding: () => ce,
                __decorate: () => ee,
                __exportStar: () => Ce,
                __extends: () => pe,
                __generator: () => ae,
                __importDefault: () => Ge,
                __importStar: () => It,
                __makeTemplateObject: () => Et,
                __metadata: () => Te,
                __param: () => be,
                __read: () => ge,
                __rest: () => E,
                __spread: () => le,
                __spreadArrays: () => Qe,
                __values: () => me
            });
            var y = function(v, P) {
                return (y = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(x, A) {
                        x.__proto__ = A
                    } || function(x, A) {
                        for (var b in A) A.hasOwnProperty(b) && (x[b] = A[b])
                    })(v, P)
            };

            function pe(v, P) {
                function x() {
                    this.constructor = v
                }
                y(v, P), v.prototype = null === P ? Object.create(P) : (x.prototype = P.prototype, new x)
            }
            var ve = function() {
                return ve = Object.assign || function(P) {
                    for (var x, A = 1, b = arguments.length; A < b; A++)
                        for (var g in x = arguments[A]) Object.prototype.hasOwnProperty.call(x, g) && (P[g] = x[g]);
                    return P
                }, ve.apply(this, arguments)
            };

            function E(v, P) {
                var x = {};
                for (var A in v) Object.prototype.hasOwnProperty.call(v, A) && P.indexOf(A) < 0 && (x[A] = v[A]);
                if (null != v && "function" == typeof Object.getOwnPropertySymbols) {
                    var b = 0;
                    for (A = Object.getOwnPropertySymbols(v); b < A.length; b++) P.indexOf(A[b]) < 0 && Object.prototype.propertyIsEnumerable.call(v, A[b]) && (x[A[b]] = v[A[b]])
                }
                return x
            }

            function ee(v, P, x, A) {
                var I, b = arguments.length,
                    g = b < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, x) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(v, P, x, A);
                else
                    for (var G = v.length - 1; G >= 0; G--)(I = v[G]) && (g = (b < 3 ? I(g) : b > 3 ? I(P, x, g) : I(P, x)) || g);
                return b > 3 && g && Object.defineProperty(P, x, g), g
            }

            function be(v, P) {
                return function(x, A) {
                    P(x, A, v)
                }
            }

            function Te(v, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(v, P)
            }

            function oe(v, P, x, A) {
                return new(x || (x = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function he(W) {
                        try {
                            D(A.throw(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function b(g) {
                            return g instanceof x ? g : new x(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, he)
                    }
                    D((A = A.apply(v, P || [])).next())
                })
            }

            function ae(v, P) {
                var A, b, g, I, x = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function he(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; x;) try {
                                if (A = 1, b && (g = 2 & D[0] ? b.return : D[0] ? b.throw || ((g = b.return) && g.call(b), 0) : b.next) && !(g = g.call(b, D[1])).done) return g;
                                switch (b = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return x.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        x.label++, b = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = x.ops.pop(), x.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = x.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            x = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            x.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && x.label < g[1]) {
                                            x.label = g[1], g = D;
                                            break
                                        }
                                        if (g && x.label < g[2]) {
                                            x.label = g[2], x.ops.push(D);
                                            break
                                        }
                                        g[2] && x.ops.pop(), x.trys.pop();
                                        continue
                                }
                                D = P.call(v, x)
                            } catch (W) {
                                D = [6, W], b = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function ce(v, P, x, A) {
                void 0 === A && (A = x), v[A] = P[x]
            }

            function Ce(v, P) {
                for (var x in v) "default" !== x && !P.hasOwnProperty(x) && (P[x] = v[x])
            }

            function me(v) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    x = P && v[P],
                    A = 0;
                if (x) return x.call(v);
                if (v && "number" == typeof v.length) return {
                    next: function() {
                        return v && A >= v.length && (v = void 0), {
                            value: v && v[A++],
                            done: !v
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ge(v, P) {
                var x = "function" == typeof Symbol && v[Symbol.iterator];
                if (!x) return v;
                var b, I, A = x.call(v),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(b = A.next()).done;) g.push(b.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        b && !b.done && (x = A.return) && x.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function le() {
                for (var v = [], P = 0; P < arguments.length; P++) v = v.concat(ge(arguments[P]));
                return v
            }

            function Qe() {
                for (var v = 0, P = 0, x = arguments.length; P < x; P++) v += arguments[P].length;
                var A = Array(v),
                    b = 0;
                for (P = 0; P < x; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, b++) A[b] = g[I];
                return A
            }

            function Ze(v) {
                return this instanceof Ze ? (this.v = v, this) : new Ze(v)
            }

            function ke(v, P, x) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var b, A = x.apply(v, P || []),
                    g = [];
                return b = {}, I("next"), I("throw"), I("return"), b[Symbol.asyncIterator] = function() {
                    return this
                }, b;

                function I($) {
                    A[$] && (b[$] = function(we) {
                        return new Promise(function(He, Ne) {
                            g.push([$, we, He, Ne]) > 1 || G($, we)
                        })
                    })
                }

                function G($, we) {
                    try {
                        ! function he($) {
                            $.value instanceof Ze ? Promise.resolve($.value.v).then(D, W) : re(g[0][2], $)
                        }(A[$](we))
                    } catch (He) {
                        re(g[0][3], He)
                    }
                }

                function D($) {
                    G("next", $)
                }

                function W($) {
                    G("throw", $)
                }

                function re($, we) {
                    $(we), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function We(v) {
                var P, x;
                return P = {}, A("next"), A("throw", function(b) {
                    throw b
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(b, g) {
                    P[b] = v[b] ? function(I) {
                        return (x = !x) ? {
                            value: Ze(v[b](I)),
                            done: "return" === b
                        } : g ? g(I) : I
                    } : g
                }
            }

            function xt(v) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var x, P = v[Symbol.asyncIterator];
                return P ? P.call(v) : (v = me(v), x = {}, A("next"), A("throw"), A("return"), x[Symbol.asyncIterator] = function() {
                    return this
                }, x);

                function A(g) {
                    x[g] = v[g] && function(I) {
                        return new Promise(function(G, he) {
                            ! function b(g, I, G, he) {
                                Promise.resolve(he).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, he, (I = v[g](I)).done, I.value)
                        })
                    }
                }
            }

            function Et(v, P) {
                return Object.defineProperty ? Object.defineProperty(v, "raw", {
                    value: P
                }) : v.raw = P, v
            }

            function It(v) {
                if (v && v.__esModule) return v;
                var P = {};
                if (null != v)
                    for (var x in v) Object.hasOwnProperty.call(v, x) && (P[x] = v[x]);
                return P.default = v, P
            }

            function Ge(v) {
                return v && v.__esModule ? v : {
                    default: v
                }
            }

            function B(v, P) {
                if (!P.has(v)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(v)
            }

            function ue(v, P, x) {
                if (!P.has(v)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(v, x), x
            }
        },
        9653: (Ue, H, ne) => {
            "use strict";
            ne.r(H), ne.d(H, {
                __assign: () => ve,
                __asyncDelegator: () => We,
                __asyncGenerator: () => ke,
                __asyncValues: () => xt,
                __await: () => Ze,
                __awaiter: () => oe,
                __classPrivateFieldGet: () => B,
                __classPrivateFieldSet: () => ue,
                __createBinding: () => ce,
                __decorate: () => ee,
                __exportStar: () => Ce,
                __extends: () => pe,
                __generator: () => ae,
                __importDefault: () => Ge,
                __importStar: () => It,
                __makeTemplateObject: () => Et,
                __metadata: () => Te,
                __param: () => be,
                __read: () => ge,
                __rest: () => E,
                __spread: () => le,
                __spreadArrays: () => Qe,
                __values: () => me
            });
            var y = function(v, P) {
                return (y = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(x, A) {
                        x.__proto__ = A
                    } || function(x, A) {
                        for (var b in A) A.hasOwnProperty(b) && (x[b] = A[b])
                    })(v, P)
            };

            function pe(v, P) {
                function x() {
                    this.constructor = v
                }
                y(v, P), v.prototype = null === P ? Object.create(P) : (x.prototype = P.prototype, new x)
            }
            var ve = function() {
                return ve = Object.assign || function(P) {
                    for (var x, A = 1, b = arguments.length; A < b; A++)
                        for (var g in x = arguments[A]) Object.prototype.hasOwnProperty.call(x, g) && (P[g] = x[g]);
                    return P
                }, ve.apply(this, arguments)
            };

            function E(v, P) {
                var x = {};
                for (var A in v) Object.prototype.hasOwnProperty.call(v, A) && P.indexOf(A) < 0 && (x[A] = v[A]);
                if (null != v && "function" == typeof Object.getOwnPropertySymbols) {
                    var b = 0;
                    for (A = Object.getOwnPropertySymbols(v); b < A.length; b++) P.indexOf(A[b]) < 0 && Object.prototype.propertyIsEnumerable.call(v, A[b]) && (x[A[b]] = v[A[b]])
                }
                return x
            }

            function ee(v, P, x, A) {
                var I, b = arguments.length,
                    g = b < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, x) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(v, P, x, A);
                else
                    for (var G = v.length - 1; G >= 0; G--)(I = v[G]) && (g = (b < 3 ? I(g) : b > 3 ? I(P, x, g) : I(P, x)) || g);
                return b > 3 && g && Object.defineProperty(P, x, g), g
            }

            function be(v, P) {
                return function(x, A) {
                    P(x, A, v)
                }
            }

            function Te(v, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(v, P)
            }

            function oe(v, P, x, A) {
                return new(x || (x = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function he(W) {
                        try {
                            D(A.throw(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function b(g) {
                            return g instanceof x ? g : new x(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, he)
                    }
                    D((A = A.apply(v, P || [])).next())
                })
            }

            function ae(v, P) {
                var A, b, g, I, x = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function he(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; x;) try {
                                if (A = 1, b && (g = 2 & D[0] ? b.return : D[0] ? b.throw || ((g = b.return) && g.call(b), 0) : b.next) && !(g = g.call(b, D[1])).done) return g;
                                switch (b = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return x.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        x.label++, b = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = x.ops.pop(), x.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = x.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            x = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            x.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && x.label < g[1]) {
                                            x.label = g[1], g = D;
                                            break
                                        }
                                        if (g && x.label < g[2]) {
                                            x.label = g[2], x.ops.push(D);
                                            break
                                        }
                                        g[2] && x.ops.pop(), x.trys.pop();
                                        continue
                                }
                                D = P.call(v, x)
                            } catch (W) {
                                D = [6, W], b = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function ce(v, P, x, A) {
                void 0 === A && (A = x), v[A] = P[x]
            }

            function Ce(v, P) {
                for (var x in v) "default" !== x && !P.hasOwnProperty(x) && (P[x] = v[x])
            }

            function me(v) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    x = P && v[P],
                    A = 0;
                if (x) return x.call(v);
                if (v && "number" == typeof v.length) return {
                    next: function() {
                        return v && A >= v.length && (v = void 0), {
                            value: v && v[A++],
                            done: !v
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ge(v, P) {
                var x = "function" == typeof Symbol && v[Symbol.iterator];
                if (!x) return v;
                var b, I, A = x.call(v),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(b = A.next()).done;) g.push(b.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        b && !b.done && (x = A.return) && x.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function le() {
                for (var v = [], P = 0; P < arguments.length; P++) v = v.concat(ge(arguments[P]));
                return v
            }

            function Qe() {
                for (var v = 0, P = 0, x = arguments.length; P < x; P++) v += arguments[P].length;
                var A = Array(v),
                    b = 0;
                for (P = 0; P < x; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, b++) A[b] = g[I];
                return A
            }

            function Ze(v) {
                return this instanceof Ze ? (this.v = v, this) : new Ze(v)
            }

            function ke(v, P, x) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var b, A = x.apply(v, P || []),
                    g = [];
                return b = {}, I("next"), I("throw"), I("return"), b[Symbol.asyncIterator] = function() {
                    return this
                }, b;

                function I($) {
                    A[$] && (b[$] = function(we) {
                        return new Promise(function(He, Ne) {
                            g.push([$, we, He, Ne]) > 1 || G($, we)
                        })
                    })
                }

                function G($, we) {
                    try {
                        ! function he($) {
                            $.value instanceof Ze ? Promise.resolve($.value.v).then(D, W) : re(g[0][2], $)
                        }(A[$](we))
                    } catch (He) {
                        re(g[0][3], He)
                    }
                }

                function D($) {
                    G("next", $)
                }

                function W($) {
                    G("throw", $)
                }

                function re($, we) {
                    $(we), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function We(v) {
                var P, x;
                return P = {}, A("next"), A("throw", function(b) {
                    throw b
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(b, g) {
                    P[b] = v[b] ? function(I) {
                        return (x = !x) ? {
                            value: Ze(v[b](I)),
                            done: "return" === b
                        } : g ? g(I) : I
                    } : g
                }
            }

            function xt(v) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var x, P = v[Symbol.asyncIterator];
                return P ? P.call(v) : (v = me(v), x = {}, A("next"), A("throw"), A("return"), x[Symbol.asyncIterator] = function() {
                    return this
                }, x);

                function A(g) {
                    x[g] = v[g] && function(I) {
                        return new Promise(function(G, he) {
                            ! function b(g, I, G, he) {
                                Promise.resolve(he).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, he, (I = v[g](I)).done, I.value)
                        })
                    }
                }
            }

            function Et(v, P) {
                return Object.defineProperty ? Object.defineProperty(v, "raw", {
                    value: P
                }) : v.raw = P, v
            }

            function It(v) {
                if (v && v.__esModule) return v;
                var P = {};
                if (null != v)
                    for (var x in v) Object.hasOwnProperty.call(v, x) && (P[x] = v[x]);
                return P.default = v, P
            }

            function Ge(v) {
                return v && v.__esModule ? v : {
                    default: v
                }
            }

            function B(v, P) {
                if (!P.has(v)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(v)
            }

            function ue(v, P, x) {
                if (!P.has(v)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(v, x), x
            }
        },
        7121: (Ue, H, ne) => {
            "use strict";
            ne.r(H), ne.d(H, {
                __assign: () => ve,
                __asyncDelegator: () => We,
                __asyncGenerator: () => ke,
                __asyncValues: () => xt,
                __await: () => Ze,
                __awaiter: () => oe,
                __classPrivateFieldGet: () => B,
                __classPrivateFieldSet: () => ue,
                __createBinding: () => ce,
                __decorate: () => ee,
                __exportStar: () => Ce,
                __extends: () => pe,
                __generator: () => ae,
                __importDefault: () => Ge,
                __importStar: () => It,
                __makeTemplateObject: () => Et,
                __metadata: () => Te,
                __param: () => be,
                __read: () => ge,
                __rest: () => E,
                __spread: () => le,
                __spreadArrays: () => Qe,
                __values: () => me
            });
            var y = function(v, P) {
                return (y = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(x, A) {
                        x.__proto__ = A
                    } || function(x, A) {
                        for (var b in A) A.hasOwnProperty(b) && (x[b] = A[b])
                    })(v, P)
            };

            function pe(v, P) {
                function x() {
                    this.constructor = v
                }
                y(v, P), v.prototype = null === P ? Object.create(P) : (x.prototype = P.prototype, new x)
            }
            var ve = function() {
                return ve = Object.assign || function(P) {
                    for (var x, A = 1, b = arguments.length; A < b; A++)
                        for (var g in x = arguments[A]) Object.prototype.hasOwnProperty.call(x, g) && (P[g] = x[g]);
                    return P
                }, ve.apply(this, arguments)
            };

            function E(v, P) {
                var x = {};
                for (var A in v) Object.prototype.hasOwnProperty.call(v, A) && P.indexOf(A) < 0 && (x[A] = v[A]);
                if (null != v && "function" == typeof Object.getOwnPropertySymbols) {
                    var b = 0;
                    for (A = Object.getOwnPropertySymbols(v); b < A.length; b++) P.indexOf(A[b]) < 0 && Object.prototype.propertyIsEnumerable.call(v, A[b]) && (x[A[b]] = v[A[b]])
                }
                return x
            }

            function ee(v, P, x, A) {
                var I, b = arguments.length,
                    g = b < 3 ? P : null === A ? A = Object.getOwnPropertyDescriptor(P, x) : A;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) g = Reflect.decorate(v, P, x, A);
                else
                    for (var G = v.length - 1; G >= 0; G--)(I = v[G]) && (g = (b < 3 ? I(g) : b > 3 ? I(P, x, g) : I(P, x)) || g);
                return b > 3 && g && Object.defineProperty(P, x, g), g
            }

            function be(v, P) {
                return function(x, A) {
                    P(x, A, v)
                }
            }

            function Te(v, P) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(v, P)
            }

            function oe(v, P, x, A) {
                return new(x || (x = Promise))(function(g, I) {
                    function G(W) {
                        try {
                            D(A.next(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function he(W) {
                        try {
                            D(A.throw(W))
                        } catch (re) {
                            I(re)
                        }
                    }

                    function D(W) {
                        W.done ? g(W.value) : function b(g) {
                            return g instanceof x ? g : new x(function(I) {
                                I(g)
                            })
                        }(W.value).then(G, he)
                    }
                    D((A = A.apply(v, P || [])).next())
                })
            }

            function ae(v, P) {
                var A, b, g, I, x = {
                    label: 0,
                    sent: function() {
                        if (1 & g[0]) throw g[1];
                        return g[1]
                    },
                    trys: [],
                    ops: []
                };
                return I = {
                    next: G(0),
                    throw: G(1),
                    return: G(2)
                }, "function" == typeof Symbol && (I[Symbol.iterator] = function() {
                    return this
                }), I;

                function G(D) {
                    return function(W) {
                        return function he(D) {
                            if (A) throw new TypeError("Generator is already executing.");
                            for (; x;) try {
                                if (A = 1, b && (g = 2 & D[0] ? b.return : D[0] ? b.throw || ((g = b.return) && g.call(b), 0) : b.next) && !(g = g.call(b, D[1])).done) return g;
                                switch (b = 0, g && (D = [2 & D[0], g.value]), D[0]) {
                                    case 0:
                                    case 1:
                                        g = D;
                                        break;
                                    case 4:
                                        return x.label++, {
                                            value: D[1],
                                            done: !1
                                        };
                                    case 5:
                                        x.label++, b = D[1], D = [0];
                                        continue;
                                    case 7:
                                        D = x.ops.pop(), x.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = (g = x.trys).length > 0 && g[g.length - 1]) && (6 === D[0] || 2 === D[0])) {
                                            x = 0;
                                            continue
                                        }
                                        if (3 === D[0] && (!g || D[1] > g[0] && D[1] < g[3])) {
                                            x.label = D[1];
                                            break
                                        }
                                        if (6 === D[0] && x.label < g[1]) {
                                            x.label = g[1], g = D;
                                            break
                                        }
                                        if (g && x.label < g[2]) {
                                            x.label = g[2], x.ops.push(D);
                                            break
                                        }
                                        g[2] && x.ops.pop(), x.trys.pop();
                                        continue
                                }
                                D = P.call(v, x)
                            } catch (W) {
                                D = [6, W], b = 0
                            } finally {
                                A = g = 0
                            }
                            if (5 & D[0]) throw D[1];
                            return {
                                value: D[0] ? D[1] : void 0,
                                done: !0
                            }
                        }([D, W])
                    }
                }
            }

            function ce(v, P, x, A) {
                void 0 === A && (A = x), v[A] = P[x]
            }

            function Ce(v, P) {
                for (var x in v) "default" !== x && !P.hasOwnProperty(x) && (P[x] = v[x])
            }

            function me(v) {
                var P = "function" == typeof Symbol && Symbol.iterator,
                    x = P && v[P],
                    A = 0;
                if (x) return x.call(v);
                if (v && "number" == typeof v.length) return {
                    next: function() {
                        return v && A >= v.length && (v = void 0), {
                            value: v && v[A++],
                            done: !v
                        }
                    }
                };
                throw new TypeError(P ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ge(v, P) {
                var x = "function" == typeof Symbol && v[Symbol.iterator];
                if (!x) return v;
                var b, I, A = x.call(v),
                    g = [];
                try {
                    for (;
                        (void 0 === P || P-- > 0) && !(b = A.next()).done;) g.push(b.value)
                } catch (G) {
                    I = {
                        error: G
                    }
                } finally {
                    try {
                        b && !b.done && (x = A.return) && x.call(A)
                    } finally {
                        if (I) throw I.error
                    }
                }
                return g
            }

            function le() {
                for (var v = [], P = 0; P < arguments.length; P++) v = v.concat(ge(arguments[P]));
                return v
            }

            function Qe() {
                for (var v = 0, P = 0, x = arguments.length; P < x; P++) v += arguments[P].length;
                var A = Array(v),
                    b = 0;
                for (P = 0; P < x; P++)
                    for (var g = arguments[P], I = 0, G = g.length; I < G; I++, b++) A[b] = g[I];
                return A
            }

            function Ze(v) {
                return this instanceof Ze ? (this.v = v, this) : new Ze(v)
            }

            function ke(v, P, x) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var b, A = x.apply(v, P || []),
                    g = [];
                return b = {}, I("next"), I("throw"), I("return"), b[Symbol.asyncIterator] = function() {
                    return this
                }, b;

                function I($) {
                    A[$] && (b[$] = function(we) {
                        return new Promise(function(He, Ne) {
                            g.push([$, we, He, Ne]) > 1 || G($, we)
                        })
                    })
                }

                function G($, we) {
                    try {
                        ! function he($) {
                            $.value instanceof Ze ? Promise.resolve($.value.v).then(D, W) : re(g[0][2], $)
                        }(A[$](we))
                    } catch (He) {
                        re(g[0][3], He)
                    }
                }

                function D($) {
                    G("next", $)
                }

                function W($) {
                    G("throw", $)
                }

                function re($, we) {
                    $(we), g.shift(), g.length && G(g[0][0], g[0][1])
                }
            }

            function We(v) {
                var P, x;
                return P = {}, A("next"), A("throw", function(b) {
                    throw b
                }), A("return"), P[Symbol.iterator] = function() {
                    return this
                }, P;

                function A(b, g) {
                    P[b] = v[b] ? function(I) {
                        return (x = !x) ? {
                            value: Ze(v[b](I)),
                            done: "return" === b
                        } : g ? g(I) : I
                    } : g
                }
            }

            function xt(v) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var x, P = v[Symbol.asyncIterator];
                return P ? P.call(v) : (v = me(v), x = {}, A("next"), A("throw"), A("return"), x[Symbol.asyncIterator] = function() {
                    return this
                }, x);

                function A(g) {
                    x[g] = v[g] && function(I) {
                        return new Promise(function(G, he) {
                            ! function b(g, I, G, he) {
                                Promise.resolve(he).then(function(D) {
                                    g({
                                        value: D,
                                        done: G
                                    })
                                }, I)
                            }(G, he, (I = v[g](I)).done, I.value)
                        })
                    }
                }
            }

            function Et(v, P) {
                return Object.defineProperty ? Object.defineProperty(v, "raw", {
                    value: P
                }) : v.raw = P, v
            }

            function It(v) {
                if (v && v.__esModule) return v;
                var P = {};
                if (null != v)
                    for (var x in v) Object.hasOwnProperty.call(v, x) && (P[x] = v[x]);
                return P.default = v, P
            }

            function Ge(v) {
                return v && v.__esModule ? v : {
                    default: v
                }
            }

            function B(v, P) {
                if (!P.has(v)) throw new TypeError("attempted to get private field on non-instance");
                return P.get(v)
            }

            function ue(v, P, x) {
                if (!P.has(v)) throw new TypeError("attempted to set private field on non-instance");
                return P.set(v, x), x
            }
        },
        1590: (Ue, H, ne) => {
            "use strict";
            const y = ne(514);
            Ue.exports = ee;
            const pe = function Ge() {
                    function B(ue) {
                        return typeof ue < "u" && ue
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return B(self) || B(window) || B(this) || {}
                    }
                }().console || {},
                ve = {
                    mapHttpRequest: Qe,
                    mapHttpResponse: Qe,
                    wrapRequestSerializer: Ze,
                    wrapResponseSerializer: Ze,
                    wrapErrorSerializer: Ze,
                    req: Qe,
                    res: Qe,
                    err: function ge(B) {
                        const ue = {
                            type: B.constructor.name,
                            msg: B.message,
                            stack: B.stack
                        };
                        for (const v in B) void 0 === ue[v] && (ue[v] = B[v]);
                        return ue
                    }
                };

            function ee(B) {
                (B = B || {}).browser = B.browser || {};
                const ue = B.browser.transmit;
                if (ue && "function" != typeof ue.send) throw Error("pino: transmit option must have a send function");
                const v = B.browser.write || pe;
                B.browser.write && (B.browser.asObject = !0);
                const P = B.serializers || {},
                    x = function E(B, ue) {
                        return Array.isArray(B) ? B.filter(function(P) {
                            return "!stdSerializers.err" !== P
                        }) : !0 === B && Object.keys(ue)
                    }(B.browser.serialize, P);
                let A = B.browser.serialize;
                Array.isArray(B.browser.serialize) && B.browser.serialize.indexOf("!stdSerializers.err") > -1 && (A = !1), "function" == typeof v && (v.error = v.fatal = v.warn = v.info = v.debug = v.trace = v), !1 === B.enabled && (B.level = "silent");
                const g = B.level || "info",
                    I = Object.create(v);
                I.log || (I.log = ke), Object.defineProperty(I, "levelVal", {
                    get: function he() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(I, "level", {
                    get: function D() {
                        return this._level
                    },
                    set: function W($) {
                        if ("silent" !== $ && !this.levels.values[$]) throw Error("unknown level " + $);
                        this._level = $, be(G, I, "error", "log"), be(G, I, "fatal", "error"), be(G, I, "warn", "error"), be(G, I, "info", "log"), be(G, I, "debug", "log"), be(G, I, "trace", "log")
                    }
                });
                const G = {
                    transmit: ue,
                    serialize: x,
                    asObject: B.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: le(B)
                };
                return I.levels = ee.levels, I.level = g, I.setMaxListeners = I.getMaxListeners = I.emit = I.addListener = I.on = I.prependListener = I.once = I.prependOnceListener = I.removeListener = I.removeAllListeners = I.listeners = I.listenerCount = I.eventNames = I.write = I.flush = ke, I.serializers = P, I._serialize = x, I._stdErrSerialize = A, I.child = function re($, we) {
                    if (!$) throw new Error("missing bindings for child Pino");
                    we = we || {}, x && $.serializers && (we.serializers = $.serializers);
                    const He = we.serializers;
                    if (x && He) {
                        var Ne = Object.assign({}, P, He),
                            Zt = !0 === B.browser.serialize ? Object.keys(Ne) : x;
                        delete $.serializers, ae([$], Zt, Ne, this._stdErrSerialize)
                    }

                    function tn(pt) {
                        this._childLevel = 1 + (0 | pt._childLevel), this.error = ce(pt, $, "error"), this.fatal = ce(pt, $, "fatal"), this.warn = ce(pt, $, "warn"), this.info = ce(pt, $, "info"), this.debug = ce(pt, $, "debug"), this.trace = ce(pt, $, "trace"), Ne && (this.serializers = Ne, this._serialize = Zt), ue && (this._logEvent = me([].concat(pt._logEvent.bindings, $)))
                    }
                    return tn.prototype = this, new tn(this)
                }, ue && (I._logEvent = me()), I
            }

            function be(B, ue, v, P) {
                const x = Object.getPrototypeOf(ue);
                ue[v] = ue.levelVal > ue.levels.values[v] ? ke : x[v] ? x[v] : pe[v] || pe[P] || ke,
                    function Te(B, ue, v) {
                        !B.transmit && ue[v] === ke || (ue[v] = function(P) {
                            return function() {
                                const A = B.timestamp(),
                                    b = new Array(arguments.length),
                                    g = Object.getPrototypeOf && Object.getPrototypeOf(this) === pe ? pe : this;
                                for (var I = 0; I < b.length; I++) b[I] = arguments[I];
                                if (B.serialize && !B.asObject && ae(b, this._serialize, this.serializers, this._stdErrSerialize), B.asObject ? P.call(g, function oe(B, ue, v, P) {
                                        B._serialize && ae(v, B._serialize, B.serializers, B._stdErrSerialize);
                                        const x = v.slice();
                                        let A = x[0];
                                        const b = {};
                                        P && (b.time = P), b.level = ee.levels.values[ue];
                                        let g = 1 + (0 | B._childLevel);
                                        if (g < 1 && (g = 1), null !== A && "object" == typeof A) {
                                            for (; g-- && "object" == typeof x[0];) Object.assign(b, x.shift());
                                            A = x.length ? y(x.shift(), x) : void 0
                                        } else "string" == typeof A && (A = y(x.shift(), x));
                                        return void 0 !== A && (b.msg = A), b
                                    }(this, v, b, A)) : P.apply(g, b), B.transmit) {
                                    const G = B.transmit.level || ue.level,
                                        D = ee.levels.values[v];
                                    if (D < ee.levels.values[G]) return;
                                    ! function Ce(B, ue, v) {
                                        const P = ue.send,
                                            x = ue.ts,
                                            A = ue.methodLevel,
                                            b = ue.methodValue,
                                            g = ue.val,
                                            I = B._logEvent.bindings;
                                        ae(v, B._serialize || Object.keys(B.serializers), B.serializers, void 0 === B._stdErrSerialize || B._stdErrSerialize), B._logEvent.ts = x, B._logEvent.messages = v.filter(function(G) {
                                            return -1 === I.indexOf(G)
                                        }), B._logEvent.level.label = A, B._logEvent.level.value = b, P(A, B._logEvent, g), B._logEvent = me(I)
                                    }(this, {
                                        ts: A,
                                        methodLevel: v,
                                        methodValue: D,
                                        transmitLevel: G,
                                        transmitValue: ee.levels.values[B.transmit.level || ue.level],
                                        send: B.transmit.send,
                                        val: ue.levelVal
                                    }, b)
                                }
                            }
                        }(ue[v]))
                    }(B, ue, v)
            }

            function ae(B, ue, v, P) {
                for (const x in B)
                    if (P && B[x] instanceof Error) B[x] = ee.stdSerializers.err(B[x]);
                    else if ("object" == typeof B[x] && !Array.isArray(B[x]))
                    for (const A in B[x]) ue && ue.indexOf(A) > -1 && A in v && (B[x][A] = v[A](B[x][A]))
            }

            function ce(B, ue, v) {
                return function() {
                    const P = new Array(1 + arguments.length);
                    P[0] = ue;
                    for (var x = 1; x < P.length; x++) P[x] = arguments[x - 1];
                    return B[v].apply(this, P)
                }
            }

            function me(B) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: B || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function le(B) {
                return "function" == typeof B.timestamp ? B.timestamp : !1 === B.timestamp ? We : xt
            }

            function Qe() {
                return {}
            }

            function Ze(B) {
                return B
            }

            function ke() {}

            function We() {
                return !1
            }

            function xt() {
                return Date.now()
            }
            ee.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, ee.stdSerializers = ve, ee.stdTimeFunctions = Object.assign({}, {
                nullTime: We,
                epochTime: xt,
                unixTime: function Et() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function It() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);