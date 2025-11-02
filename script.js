const botao = document.getElementById('gachabotao')
const img = document.getElementById('gachaImagem')
const raridade = document.getElementById('RaridadeTexto')
const nome = document.getElementById('nome')
const texto = document.getElementById('Pity')

let podeClicar = true;

const images = [
    {src: 'Assets/Cachorro_caramelo.jpg', rarity: 'Comum', nome: 'Cachorro Caramelo'},
    {src: 'Assets/vovó_do_drip.png', rarity: 'Comum', nome: 'Vovó do drip'},
    {src: 'Assets/Primeiro_adm.jpg', rarity: 'Raro', nome: 'Adm supremo'},
    {src: 'Assets/Games_edu.png', rarity: 'Épico', nome: 'Games Edu'},
    {src: 'Assets/Ednaldo_base.png', rarity: 'Lendário', nome: 'Ednaldo Pereira base'},
    {src: 'Assets/Ednaldo_hunter.png', rarity: 'Mítico', nome: 'Ednaldo hunter hunter'},
    {src: 'Assets/Mini_pekka.png', rarity: 'Secreto' , nome: 'Mini Pekka'}  
]

const probabilidades = {
    'Comum': 70,
    'Raro': 20,
    'Épico': 8.5,
    'Lendário': 1,
    'Mítico': 0.49,
    'Secreto': 0.01
}

function getrarity() {
    const aleatorio = Math.random() * 100
    let cumulative = 0
    for (let key in probabilidades) {
        cumulative += probabilidades[key]
        if (aleatorio <= cumulative) return key
    }
    return 'Comum'
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
    'Comum': 1,
    'Raro': 4,
    'Épico': 25,
    'Lendário': 15,
    'Mítico': 10,
    'Secreto': 5
}

function getrarity_pity() {
    const aleatorio = Math.random() * 60
    let cumulative = 0
    for (let key in probabilidades_pity) {
        cumulative += probabilidades_pity[key]
        if (aleatorio <= cumulative) return key
    }
    return 'Comum'
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
    }, 1000)
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
