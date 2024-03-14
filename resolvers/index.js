import productResolver from './product/index.js';

const all = [
	productResolver
]

let queries = {}
let mutations = {}

all.forEach(r => {
	queries = {...queries, ...r.query}
	mutations = {...mutations, ...r.mutation}
})

export default {queries, mutations};