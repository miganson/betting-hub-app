import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import BannerImage from "./../assets/design-assets/Frame-18.webp";
import NotificationIcon from "./../assets/design-assets/svg-icons/bell-svgrepo-com-1.svg";

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImage = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    setIsLoaded(true);
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        padding: "16px 24px",
        marginTop: "56px",
      }}
    >
      <Carousel>
        {[1, 2, 3].map((_, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
                backgroundImage: isLoaded ? `url(${BannerImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "top",
                transition: "background-image 0.3s ease-in-out",
              }}
            >
              {!isLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  {/* Spinner */}
                  <div
                    style={{
                      border: "4px solid rgba(0,0,0,0.1)",
                      borderRadius: "50%",
                      borderTopColor: "#09f",
                      width: "36px",
                      height: "36px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#007bff",
          fontSize: "small",
        }}
      >
        <img
          alt="Notification"
          loading="lazy"
          width="32"
          height="32"
          src={NotificationIcon}
        />
        <span style={{ whiteSpace: "normal" }}>
          ¡FELICIDADES artxxxipa! GANADOR DESTACADO
        </span>
      </p>
    </div>
  );
};

export default Banner;
