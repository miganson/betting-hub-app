import Logo from "../assets/design-assets/logos/F1M5_Logo.webp";
import MenuIcon from "../assets/design-assets/svg-icons/3BAR.svg";
import WalletIcon from "../assets/design-assets/svg-icons/wallet.svg";
import UserIcon from "../assets/design-assets/svg-icons/userhead.svg";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-2 shadow-sm bg-white fixed-top">
      <div className="d-flex align-items-center gap-1">
        <button className="btn btn-light p-1">
          <img src={MenuIcon} alt="Menu" width="32" height="32" />
        </button>
        <img src={Logo} alt="F1M5 Logo" className="h-8" />
      </div>
      <div className="d-flex align-items-center gap-2">
        <img src={WalletIcon} alt="Wallet" width="32" height="32" />
        <b
          className="text-base"
          style={{
            color: "rgb(0, 166, 255)",
            fontSize: "1.5rem",
          }}
        >
          $1,990.6
        </b>
        <img
          src="https://fun88-six.vercel.app/assets/header/divider.svg"
          alt="Divider"
          className="h-8"
        />
        <button className="btn btn-light p-1">
          <img src={UserIcon} alt="Account" width="32" height="32" />
        </button>
      </div>
    </div>
  );
};

export default Header;
