/* eslint-env mocha */
import { expect } from 'firenpm/mochaccino';
import { thisOrThat } from '../lib';

const DEFAULT = {
    firstname: 'John',
    lastname: 'Doe',
    age: 18,
    job: {
        name: 'Developer',
        languages: [
            'js', 'php'
        ],
        otherStuff: null
    },
};

const FIRST = {
    test: {
        firstname: 'Bob',
        age: 20
    },
    expect: {
        firstname: 'Bob',
        lastname: 'Doe',
        age: 20,
        job: {
            name: 'Developer',
            languages: [
                'js', 'php'
            ],
            otherStuff: null
        }
    }
};

const SECOND = {
    test: {
        job: {
            otherStuff: ['test']
        }
    },
    expect: {
        firstname: 'Bob',
        lastname: 'Doe',
        age: 20,
        job: {
            name: 'Developer',
            languages: [
                'js', 'php'
            ],
            otherStuff: ['test']
        }
    }
};

describe('thisOrThat', () => {
    it('should return the default object', () => {
        expect(thisOrThat({}, DEFAULT)).toEqual(DEFAULT);
    });
    it('should return the default object from null', () => {
        expect(thisOrThat(null, DEFAULT)).toEqual(DEFAULT);
    });
    it('should return the default object with specified firstname and age', () => {
        expect(thisOrThat(FIRST.test, DEFAULT)).toEqual(FIRST.expect);
    });
    it('should return the default object with specified otherStuff', () => {
        expect(thisOrThat(SECOND.test, DEFAULT).job.otherStuff).toEqual(SECOND.expect.job.otherStuff);
    });
});
