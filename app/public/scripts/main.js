const app = new Vue({
    el: '#app',
    data: {
		experiencias: [
            {empresa: '', funcao: '', atribuicoes: ''}
        ]
    },
	
	mounted () {
		
	},
	
    methods: {
		addXP() {
            this.experiencias.push({empresa: '', funcao: '', atribuicoes: ''})
        },
        delXP() {
            this.experiencias.pop()
        }
    }
})