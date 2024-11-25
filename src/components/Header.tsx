
type Props = {
    text: string;
    subText: string;
    subtitle: string;
}

const Header: React.FC<Props> = ({ text, subText, subtitle }) => {
    return (
        <header>
            <h1>{text} <span>{subText}</span></h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header;