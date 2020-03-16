const app = new Vue({
    el: '#app',
    data: {
        basico: { nome: '', endereco: '', numero: '', bairro: '' },
		experiencias: [
            {empresa: '', funcao: '', atribuicoes: ''}
        ]
    },
	
	mounted () {
		this.getCurriculo()
	},
	
    methods: {
		addXP() {
            this.experiencias.push({empresa: '', funcao: '', atribuicoes: ''})
        },
        delXP() {
            this.experiencias.pop()
        },
        async getCurriculo() {
            const fetcher = axios.create({
                baseURL: 'http://localhost:9000/bilheteria'
            })

            const dados = await fetcher.get('')

            this.basico.nome     = dados.data.nome
            this.basico.endereco = dados.data.endereco
            this.basico.numero   = dados.data.numero
            this.basico.bairro   = dados.data.bairro
        }
    }
})