const getAdDate = (date) => {

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');       
    const hours = String(date.getHours()).padStart(2, '0');    
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return (`${day}.${month}.${year} ${hours}:${minutes}`);

}  

export const formatTime = (ms) => {

    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    
    return `Дни: ${days} часы: ${hours} минуты: ${minutes} секунды: ${seconds}`;
};

export default getAdDate