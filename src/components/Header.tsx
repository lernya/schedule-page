import { Layout } from "antd";
import { BG_COLOR, BORDER_COLOR } from "../shared/colors";
import logoUrl from "../assets/logo.png";
const { Header: AntdHeader } = Layout;

const headerStyle: React.CSSProperties = {
  background: BG_COLOR,
  borderBottom: `1px solid ${BORDER_COLOR}`,
  padding: "6px 16px",
  boxSizing: "border-box",
};

const Header = () => {
  return (
    <AntdHeader style={headerStyle}>
      <div className="inner-container">
        <div className="logo-container">
          <span className="logo-image">
            <a href="https://inpsycho.ru/">
              <img
                src={logoUrl} //!change to local
                alt="logo"
                draggable={false}
              />
            </a>
          </span>
          <h1 className="heading">Учебное расписание</h1>
        </div>
      </div>
    </AntdHeader>
  );
};

export default Header;
