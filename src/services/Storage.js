// Adiciona um busca no localStorage;
export const setSearch = (search) => localStorage.setItem('text-search', search)

// Retorna a busca;
export const getSearch = () => localStorage.getItem('text-search')

// Limpa a busca;
export const cleanSearch = () => localStorage.removeItem('text-search')