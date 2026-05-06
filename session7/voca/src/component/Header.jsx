import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Header>
            <h1>
                <Link to="/">영어 단어장 만들기</Link>
            </h1>

            <HeaderMenu>
                <Link to="/create_word" className="link">단어 추가</Link>
                <Link to="/create_day" className="link">Day 추가</Link>
            </HeaderMenu>
        </Header>
    );
}
