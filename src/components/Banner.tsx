import BannerImage from "./../assets/design-assets/Frame-18.webp";
import NotificationIcon from "./../assets/design-assets/svg-icons/bell-svgrepo-com-1.svg";

const Banner = () => {
  return (
    <div
      className="d-flex flex-column gap-2 w-100 px-3 pt-3 pb-2"
      style={{ marginTop: "56px" }}
    >
      <div
        className="w-100 rounded-lg"
        style={{
          height: "180px",
          backgroundImage: `url(${BannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          backgroundPosition: "top",
        }}
      ></div>
      <p className="d-flex align-items-center gap-2 text-primary small">
        <img
          alt="Notification"
          loading="lazy"
          width="32"
          height="32"
          src={NotificationIcon}
          style={{ color: "transparent" }}
        />
        <span className="text-wrap">
          ¡FELICIDADES artxxxipa! GANADOR DESTACADO
        </span>
      </p>
    </div>
  );
};

export default Banner;
