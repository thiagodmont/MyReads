// Valid Storage;
const storage = (function() {
	var uid = Date.now();
    var result;
    
	try {
        localStorage.setItem(uid, uid);
        result = parseInt(localStorage.getItem(uid), 0) === uid;
		localStorage.removeItem(uid);
		return result && localStorage;
	} catch (exception) {
        return false;
    }
}());

// Adiciona um busca no localStorage;
export const setSearch = (search) => storage && localStorage.setItem('text-search', search)

// Retorna a busca;
export const getSearch = () => storage && localStorage.getItem('text-search')

// Limpa a busca;
export const cleanSearch = () => storage && localStorage.removeItem('text-search')