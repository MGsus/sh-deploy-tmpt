'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
// const console = require('../log');
const server = require('../../app');

let expect = chai.expect;

chai.use(chaiHttp);

describe('Distribuidores', function () {
    describe('GET /app/dist', function () {
        it('200 ok and json data format', done => {
            chai.request(server)
                .get('/app/dist')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                })
        });
    });
    // describe('GET /app/dist/login', function () {
    //     it('200 ok and json data format', done => {
    //         chai.request(server)
    //             .get('/app/dist/login')
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(404);
    //                 expect(res.body).to.be.an('array');
    //                 done();
    //             })
    //     });
    // });
    describe('GET /app/dist', function () {
        it('200 ok and json data format', done => {
            chai.request(server)
                .get('/app/dist/login')
                .end(function (err, res) {
                    expect(res).to.have.status(404);
                    done();
                })
        });
    });
    // describe('POST /register', function () {
    //     it('200 OK and json response', done => {
    //         chai.request(server)
    //             .post('/api/dist/register')
    //             .end(function (err, res) {
    //                 expect(res).to.have.status(200);
    //                 done();
    //             });
    //     });
    // });

});
