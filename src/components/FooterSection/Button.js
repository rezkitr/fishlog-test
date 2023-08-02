const Button = ({ text }) => {
    return (
        <button className="bg-white h-fit text-main-blue text-sm font-semibold rounded-3xl px-14 py-2">
            {text}
        </button>
    );
};

export default Button;
