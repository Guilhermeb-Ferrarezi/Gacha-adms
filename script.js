const botao = document.getElementById('gachabotao')
const img = document.getElementById('gachaImagem')
const raridade = document.getElementById('RaridadeTexto')
const nome = document.getElementById('nome')
const texto = document.getElementById('Pity')

let podeClicar = true;

const images = [
    {src: 'Cachorro_caramelo.jpg', rarity: 'comum', nome: 'Cachorro Caramelo'},
    {src: 'vovó_do_drip.png', rarity: 'comum', nome: 'Vovó do drip'},
    {src: 'Primeiro_adm.jpg', rarity: 'raro', nome: 'Adm supremo'},
    {src: 'Games_edu.png', rarity: 'épico', nome: 'Games Edu'},
    {src: 'Ednaldo_base.png', rarity: 'lendário', nome: 'Ednaldo Pereira base'},
    {src: 'Ednaldo_hunter.png', rarity: 'mítico', nome: 'Ednaldo hunter hunter'},
    {src: 'Mini_pekka.png', rarity: 'secreto' , nome: 'Mini Pekka'}  
]

const probabilidades = {
    'comum': 70,
    'raro': 20,
    'épico': 8.5,
    'lendário': 1,
    'mítico': 0.49,
    'secreto': 0.01
}

function getrarity() {
    const aleatorio = Math.random() * 100
    let cumulative = 0
    for (let key in probabilidades) {
        cumulative += probabilidades[key]
        if (aleatorio <= cumulative) return key
    }
    return 'comum'
} 

function abrirGacha() {
    const rarity = getrarity()
    const filtro = images.filter(item => item.rarity === rarity)
    const item = filtro[Math.floor(Math.random() * filtro.length)]

    img.src = item.src
    img.style.display = 'block'
    nome.textContent = `Adm: ${item.nome}`
    raridade.textContent = `Raridade: ${item.rarity}`
}

const probabilidades_pity = {
    'comum': 1,
    'raro': 4,
    'épico': 25,
    'lendário': 15,
    'mítico': 10,
    'secreto': 5
}

function getrarity_pity() {
    const aleatorio = Math.random() * 60
    let cumulative = 0
    for (let key in probabilidades_pity) {
        cumulative += probabilidades_pity[key]
        if (aleatorio <= cumulative) return key
    }
    return 'comum'
} 

function abrirGacha_Pity() {
    const rarity = getrarity_pity()
    const filtro = images.filter(item => item.rarity === rarity)
    const item = filtro[Math.floor(Math.random() * filtro.length)]

    img.src = item.src
    img.style.display = 'block'
    nome.textContent = `Adm: ${item.nome}`
    raridade.textContent = `Raridade: ${item.rarity}`
}

let pity = 0

botao.addEventListener('click', () => {
    if (!podeClicar) return

    podeClicar = false
    pity++
    texto.textContent = `Pity: ${pity}/100`

    // verifica se chegou no pity máximo
    if (pity >= 100) {
        abrirGacha_Pity()
        pity = 0 // reseta o contador
        texto.textContent = `Pity: ${pity}/100`
    } else {
        abrirGacha()
    }

    setTimeout(() => {
        podeClicar = true
    }, 0)
})

// --- tela de informações ---
const informaçoes = document.getElementById("informaçoes");
const tela = document.getElementById("tela");
const fechar = document.getElementById("fechar");

informaçoes.addEventListener("click", () => {
    tela.style.display = "block";
});

fechar.addEventListener("click", () => {
    tela.style.display = "none";
});
