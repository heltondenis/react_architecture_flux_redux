const INITIAL_STATE = [

    {
        id: 1,
        text: 'Teste1'
    },
    {
        id: 2,
        text: 'Teste2'
    }
];

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}