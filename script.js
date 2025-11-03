const botao = document.getElementById('gachabotao')
const img = document.getElementById('gachaImagem')
const raridade = document.getElementById('RaridadeTexto')
const nome = document.getElementById('nome')
const texto = document.getElementById('Pity')
const telaConfirm = document.getElementById('raridade_maior')

let podeClicar = true
let bloqueadoRaridade = false
let raridadeBloqueada = null

const images = [
    {src: 'Assets/Cachorro_caramelo.jpg', rarity: 'Comum', nome: 'Cachorro Caramelo'},
    {src: 'Assets/vovó_do_drip.png', rarity: 'Comum', nome: 'Vovó do drip'},
    {src: 'Assets/Primeiro_adm.jpg', rarity: 'Raro', nome: 'Adm supremo'},
    {src: 'Assets/Games_edu.png', rarity: 'Épico', nome: 'Games Edu'},
    {src: 'Assets/Ednaldo_base.png', rarity: 'Lendário', nome: 'Ednaldo Pereira base'},
    {src: 'Assets/Ednaldo_hunter.png', rarity: 'Mítico', nome: 'Ednaldo hunter hunter'},
    {src: 'Assets/Mini_pekka.png', rarity: 'Secreto' , nome: 'Mini Pekka'},
    {src: 'Assets/Fruta.png', rarity: 'Os bolinha', nome: 'Alface, melância, maça'}
]

const probabilidades = {
    'Comum': 60,
    'Raro': 20,
    'Épico': 8.5,
    'Lendário': 1,
    'Mítico': 0.49,
    'Secreto': 0.01,
    'Os bolinha': 10
}

function getrarity() {
    const aleatorio = Math.random() * 101
    let cumulative = 0
    for (let key in probabilidades) {
        cumulative += probabilidades[key]
        if (aleatorio <= cumulative) return key
    }
    return 'Comum'
}

function abrirGacha(rarityOverride) {
    const rarity = rarityOverride || getrarity()
    const filtro = images.filter(item => item.rarity === rarity)
    const item = filtro[Math.floor(Math.random() * filtro.length)]

    img.src = item.src
    img.style.display = 'block'
    nome.textContent = `Adm: ${item.nome}`
    raridade.textContent = `Raridade: ${item.rarity}`
    return item.rarity
}

const probabilidades_pity = {
    'Comum': 1,
    'Raro': 4,
    'Épico': 0,
    'Lendário': 10,
    'Mítico': 10,
    'Secreto': 5,
    'Os bolinha': 40
}

function getrarity_pity() {
    const aleatorio = Math.random() * 61.5
    let cumulative = 0
    for (let key in probabilidades_pity) {
        cumulative += probabilidades_pity[key]
        if (aleatorio <= cumulative) return key
    }
    return 'Comum'
}

function abrirGacha_Pity() {
    const rarity = getrarity_pity()
    return abrirGacha(rarity)
}

let pity = 0
const raridades_altas = ['Lendário', 'Mítico', 'Secreto', 'Os bolinha']

botao.addEventListener('click', () => {
    if (!podeClicar) return
    podeClicar = false

    if (bloqueadoRaridade) {
        telaConfirm.style.display = "flex"
        podeClicar = true
        return
    }

    pity++
    texto.textContent = `Pity: ${pity}/100`

    let rarity
    if (pity >= 100) {
        rarity = abrirGacha_Pity()
        pity = 0
        texto.textContent = `Pity: ${pity}/100`
    } else {
        rarity = abrirGacha()
    }

    if (raridades_altas.includes(rarity)) {
        telaConfirm.style.display = "flex"
        bloqueadoRaridade = true
        raridadeBloqueada = rarity

        document.getElementById('botao_sim').onclick = () => {
            abrirGacha()
            telaConfirm.style.display = 'none'
            bloqueadoRaridade = false
            raridadeBloqueada = null
            podeClicar = true
        }

        document.getElementById('botao_nao').onclick = () => {
            telaConfirm.style.display = 'none'
            podeClicar = true
        }

    } else {
        setTimeout(() => { podeClicar = true }, 0)
    }
})

// --- tela de informações ---
const informacoes = document.getElementById("informaçoes");
const tela = document.getElementById("tela");
const fechar = document.getElementById("fechar");

informacoes.addEventListener("click", () => {
    tela.style.display = "flex";
});

fechar.addEventListener("click", () => {
    tela.style.display = "none";
});








