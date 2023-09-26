type ButtonProps={

text:string;
onclick:()=> void;
color?:string;
};

const Button=({text,onclick,color='bg-gray-200'}:ButtonProps)=>(

    <button onClick={onclick} className={` rounded p-2 w-full ${color}`}>
        {text}
        </button>
)
export default Button;