const btnPesquisa = document.getElementById('search-btt');
const input = document.getElementById('input-currency');
const listCurrencys = document.getElementById('list-currency');
const btnSalvar =document.getElementById('btt-salvar')
const btnClean =document.getElementById('clean')
const paragrafo = document.getElementById('header-lista')
// ao clicar no botao pesquisa vou pegar o input como parametro e puxar no fetch

const criarList = (currency)=> {
    const li = document.createElement('li');
    li.innerHTML = `${currency[0]}: ${currency[1]}`
    listCurrencys.appendChild(li)
    
}

btnSalvar.addEventListener('click', ()=> {
    const listSalva = listCurrencys.innerHTML
    localStorage.setItem('savedlist', listSalva)
})

btnClean.addEventListener('click', ()=> {
    listCurrencys.innerHTML = ''
    paragrafo.innerHTML = ''
    
})

btnPesquisa.addEventListener('click', async ()=> {
    const valorInput = input.value
    const retorno = await fetchCurrencyAsyncAwait(valorInput)
    const arrayDados = Object.entries(retorno.rates)
    listCurrencys.innerHTML = '';
    paragrafo.innerHTML= '';
    arrayDados.forEach((currency)=> {
        criarList(currency);
    })
    const span = document.createElement('p')
    span.classList = 'title-base'
    span.innerHTML = `Valores referentes a 1 ${input.value}:`
    paragrafo.appendChild(span)
    
})

window.onload = () => {
    listCurrencys.innerHTML = localStorage.getItem('savedlist')
}