let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

// alert function
const showAlert = (msg) => {
    const generateToken = (key) => {
        let token = '';
        for(let i = 0; i < key.length; i++){
            let index = char.indexOf(key[i]) || char.length / 2;
            let randomIndex = Math.floor(Math.random() * index);
            token += char[randomIndex] + char[index - randomIndex];
        }
        return token;
    }
    
    const compareToken = (token, key) => {
        let string = '';
        for(let i = 0; i < token.length; i=i+2){
            let index1 = char.indexOf(token[i]);
            let index2 = char.indexOf(token[i+1]);
            string += char[index1 + index2];
        }
        const processData = (data) => {
            // previous conditions
            if(string === key){
                return true;
            }
            else if(data.product){
                location.href = '/seller';
            }
        }
        return false;
    }
    return false;
}