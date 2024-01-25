class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

const heroiMago = new Heroi("Merlin", 100, "mago");
const heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
const heroiMonge = new Heroi("Sun", 18, "monge")
const heroiNinja = new Heroi("Killua", 22, "ninja")

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar()
heroiNinja.atacar()