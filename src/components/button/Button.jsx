const Button = ({
    type,
    label,
}) => {
    return (
        <button 
            type={type} 
            className="my-1 bg-gradient-to-r from-purple-500 to-blue-500 w-full text-white py-3 rounded-2xl hover:from-purple-400 hover:to-blue-400"> 
            {label}
        </button>
    )
}

export default Button;