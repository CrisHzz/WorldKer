import Link from 'next/link'

interface ButtonProps {
    href?: string
    text: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick }) => {
    const commonClasses =
        "flex justify-center items-center mx-auto shadow-xl text-lg text-white bg-transparent lg:font-semibold border-2 border-white rounded-full px-2 py-1 relative z-10 overflow-hidden transition-colors duration-300 ease-in-out hover:bg-blue-700 hover:text-white";

    if (href) {
        return (
            <Link href={href}>
                <button onClick={onClick} className={commonClasses}>
                    {text}
                </button>
            </Link>
        );
    }

    return (
        <button type="submit" onClick={onClick} className={commonClasses}>
            {text}
        </button>
    );
};

export default Button;