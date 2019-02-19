import reducer from '../redux/reducer';

describe('reducer', () => {
    it('initial state', () => {
        expect(reducer(undefined,{})).toEqual([]);
    })

})