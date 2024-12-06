import axios from 'axios';
require('dotenv').config();


//cria instância para axios utilizando URL da api como base
const api = axios.create({
  baseURL: process.env.API_URL,
});

//função para criar usuários
export const createUser = async (userData: any, config ={}) =>{
    try{
      const response = await api.post('/users', userData, config);
    return response.data;
    } catch(error){
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
    };

    
    // Função para buscar usuário
    export const getUser = async (userData: any, config ={}) => {
      try {
        const response = await api.get(`/users`, {
          params: userData,
          ...config
        });
        return response.data;
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw error; // Lança o erro para ser tratado no componente
      }
    };
    
    const userData= {
        nome:'',
        cpf:'',
        cel:'',
        tel:'',
        email:'',
        genero:'',
        dtNasc:''
        };
    
    
    //função para criar pets
    export const createPet = async (petData: any, config ={}) =>{
      try{
        const response = await api.post('/pet', petData);
      return response.data;
      } catch(error){
        console.error("Erro ao cadastrar pet:", error);
        throw error;
      }};
    
    
    // Função para buscar pet
    export const getPet = async (petData: any, config ={}) => {
      try {
        const response = await api.get(`/pet`,  {
          params: petData,
          ...config
        });
        return response.data;
      } catch (error) {
        console.error("Erro ao buscar pet:", error);
        throw error; 
      }
    };


    
    const petData = {
        name: '',
        color: '',
        species: '',
        breed: '',
        gender: '',
        birthDate: '',
        weight: ''
        };



    //função para inserir produtos
    export const postProdutos = async (produtosData: any, config ={}) =>{
        try{
          const response = await api.post('/produtos', produtosData);
        return response.data;
        } catch(error){
          console.error("Erro ao cadastrar produto:", error);
          throw error;
        }};



    // Função para buscar produto pelo nome
    export const getProdutos = async (produtosData: any, config = {}) => {
        try {
          const response = await api.get(`/produto`, {
            params: { nome: produtosData.nomeProduto },
            ...config
          });
          return response.data;
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
          throw error;
        }
      };

    
    const produtosData = {
        nomeProduto:'',
        preco_produto:''
        };
