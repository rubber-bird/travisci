const supertest = require('supertest');
const expect = require('chai').expect;

const server = supertest.agent('http://localhost:3000');

describe ('simple test', () => {
    // it ('should return 200 in json with response Hello!', (done) => {
    //     server
    //         .get('/')
    //         .expect(200)
    //         .expect('Content-Type', /json/)
    //         .end((err, res) => {
    //             if (err) done(err);
    //             const {msg} = res.body;
    //             expect(msg).to.be.a('string');
    //             expect(msg).to.equal('Hello');
    //             done();
    //         })
    // });

    it ('should return string', (done => {
        expect('a').to.equal('a');
        done();
    }))
});
