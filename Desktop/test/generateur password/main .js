const length_x = document.getElementById('value');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const include_lower_case = true;
const include_upper_case = true;
const include_numbers = true;
const include_symbols = true;
let password_length = 8;




function generate_password(password_length , 
                            include_lower_case , 
                            include_upper_case , 
                            include_numbers , 
                            include_symbols){
    const lower_chars = "abcdefghijklmnopkrstuvwxyz";
    const upper_chars = "ABCDEFGHIJKLMNOPKRSTUVWXYZ"
    const numbers_chars = 123456789;
    const symbols_chars = "!@$%^&*()_+}{|:?><'][';"
    let allowed_chars  = '';
    let password = '';


    allowed_chars += include_lower_case ? lower_chars : '';
    allowed_chars += include_upper_case ? upper_chars : '';
    allowed_chars += include_numbers ? numbers_chars : '';
    allowed_chars += include_symbols ? symbols_chars : '';

    

    
    if(password_length < 1){
        alert('enter another number ');
    }
    if(allowed_chars.length == 0){
        alert('enter another');
    }
    for(let i = 0 ; i < password_length ; i++){
        const random_index = Math.floor(Math.random() * allowed_chars.length)
        password += allowed_chars[random_index];
    }
    return password;
}


    
btn.addEventListener('click', ()=>{
        

        password_length = length_x.value;
        const password = generate_password(password_length , 
            include_lower_case , 
            include_upper_case , 
            include_numbers , 
            include_symbols);
            result.textContent = `${password}`
            

})