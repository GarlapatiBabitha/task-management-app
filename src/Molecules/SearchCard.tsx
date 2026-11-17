import Input from "../atoms/Input";
import {useState} from "react";

const SearchCard=()=>{
    const [text,setText]=useState<string>("");
    return(
        <div>
            <Input type={text} value={text} onChange={(e)=>setText(e.target.value)}></Input>
        </div>
    )
}