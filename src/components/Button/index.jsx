import './styles.css';

function Button({atributo, text, disabled}){
    
    return(
        
        <button 
        disabled = {disabled} 
        className='button' 
        onClick={atributo}
        >{text}</button>
    )
}
export default Button;