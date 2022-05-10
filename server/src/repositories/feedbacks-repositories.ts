// Camada de Dados

// Quais dados são necessários para criar um feedback
export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}


// Quais ações ela pode fazer
export interface FeedbacksRepository {
    // Quando uma função é assíncrona, retorna uma Promise<void>
    create: (data: FeedbackCreateData) => Promise<void>;

}