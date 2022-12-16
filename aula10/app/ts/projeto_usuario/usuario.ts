export class Usuario {
    public email: string;
    public nome: string;

    private constructor(email: string, nome string) {
        this.email = email;
        this.nome = nome;              
    }
    public criarUsuario(email: string, nome string): Usuario{
        //teste para validar email

        //teste para validar o nome

        return new Usuario (email,nome);
    }
    private emailInvalido(email: string) :boolean {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return emailRegex.test(email);
    }

    private static nomeInvalido(nome:string) {
        if (nome.length > 10 || nome == "") {
            return false;
        }

        return true;
        
    }
}