interface Props{
    text: string;
}
const Label=({text}:Props)=>{
    return(
        <label>{text}</label>
    );
};
export default Label;