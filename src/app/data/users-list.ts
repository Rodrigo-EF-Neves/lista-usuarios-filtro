import { IUser } from "../interfaces/User/user.interface";

export const UsersList: IUser[] = [
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11912345678",
        ativo: true,
        funcao: "Desenvolvedor",
        data_cadastro: "2023-01-15T10:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-06-01T14:30:00.000Z"
        }
    },
    {
        nome: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        senha: "senha-forte-456",
        idade: 28,
        endereco: {
            rua: "Avenida Central",
            numero: 456,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21987654321",
        ativo: true,
        funcao: "Designer",
        data_cadastro: "2023-02-10T09:30:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-15T11:20:00.000Z"
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "minha-senha-789",
        idade: 35,
        endereco: {
            rua: "Rua do Mercado",
            numero: 789,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31912349876",
        ativo: false,
        funcao: "Gerente",
        data_cadastro: "2022-11-20T15:45:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-05-10T08:00:00.000Z"
        }
    },
    {
        nome: "Ana Souza",
        email: "ana.souza@example.com",
        senha: "senha-ana-321",
        idade: 26,
        endereco: {
            rua: "Travessa das Palmeiras",
            numero: 321,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "41987654321",
        ativo: true,
        funcao: "Analista",
        data_cadastro: "2023-05-05T13:15:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-10-01T17:45:00.000Z"
        }
    },
    {
        nome: "Pedro Lima",
        email: "pedro.lima@example.com",
        senha: "pedro-lima-654",
        idade: 40,
        endereco: {
            rua: "Rua dos Pinheiros",
            numero: 654,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51912345678",
        ativo: false,
        funcao: "Administrador",
        data_cadastro: "2022-08-30T08:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-07-20T12:30:00.000Z"
        }
    }
]