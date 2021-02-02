const Modal = {
    open(){
        document.querySelector(`.modal-overlay`)
        .classList.add(`active`)
    },
    close(){
        document.querySelector(`.modal-overlay`)
        .classList.remove(`active`)
    }
    
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date:'02/02/2021',  
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date:'02/02/2021',  
    },
    {
        id: 3,
        description: 'Aluguel',
        amount: -150000,
        date:'02/02/2021',  
    }

]

const Transaction = {
    incomes(){ //somas das entradas

    },
    expanses(){ //somar as saidas

    },
    total(){ //entradas - saidas

    }

} 


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)        
    },
    
    
    innerHTMLTransaction(transaction)
    {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)
        
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="imagem sinal de menos">
            </td>
            `
            return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""    }

}


transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})