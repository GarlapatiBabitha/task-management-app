interface Props{
    type:string;
    placeholder?:string;
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input=({type,placeholder,value,onChange}:Props)=>{
    return(
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
    );
};
export default Input;